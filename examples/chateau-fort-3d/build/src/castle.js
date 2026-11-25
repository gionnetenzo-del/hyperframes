import { THREE, clamp, smooth, lerp, hash, mat, stoneMaterial, roofMaterial, woodMaterial, waterMaterial, gableGeo, baseGeo, mesh, box, mergeStatic } from "./lib.js";
import { PLATEAU as P } from "./terrain.js";

const UP = new THREE.Vector3(0, 1, 0);
export const WALL_H = 11;
export const WALL_T = 3;
export const TOWER_H = 18;
export const TOWER_R = 5.6;

export function buildCastle(scene) {
  const root = new THREE.Group();
  scene.add(root);
  const stone = stoneMaterial(0xbdb29c);
  const stoneDark = stoneMaterial(0xa79d88);
  const footStone = stoneMaterial(0x9b927f, { course: 0.7, len: 1.4 });
  const roof = roofMaterial(0x515c69);
  const roofRed = roofMaterial(0x8b4d36);
  const wood = woodMaterial(0x7a5534);
  const woodDark = woodMaterial(0x5a3d25);
  const black = new THREE.MeshBasicMaterial({ color: 0x0d0b09 });
  const elements = {}; // name -> {group, kind}

  // ---- helper: growing element ----
  function element(name, x, z, geo, material, extra = {}) {
    const g = new THREE.Group();
    g.position.set(x, P - 0.6, z);
    const m = mesh(geo, material, g);
    root.add(g);
    elements[name] = { group: g, mesh: m, ...extra, details: [] };
    return elements[name];
  }

  // ---- curtain walls ----
  const walls = [
    // name, cx, cz, length, alongX
    ["wN", 0, -30, 60, true],
    ["wE", 30, 0, 60, false],
    ["wW", -30, 0, 60, false],
    ["wSW", -19.5, 30, 21, true],
    ["wSE", 19.5, 30, 21, true],
  ];
  const merlonGeo = baseGeo(new THREE.BoxGeometry(1.35, 1.3, 0.75));
  const slitGeo = new THREE.BoxGeometry(0.28, 1.7, 0.4);
  const wallInfo = [];
  for (const [name, cx, cz, len, ax] of walls) {
    const geo = baseGeo(ax ? new THREE.BoxGeometry(len, WALL_H + 0.6, WALL_T) : new THREE.BoxGeometry(WALL_T, WALL_H + 0.6, len));
    const e = element(name, cx, cz, geo, stone, { kind: "wall" });
    // outward normal
    const nx = ax ? 0 : Math.sign(cx), nz = ax ? Math.sign(cz) : 0;
    // parapet (outer)
    const par = mesh(baseGeo(ax ? new THREE.BoxGeometry(len, 1.1, 0.7) : new THREE.BoxGeometry(0.7, 1.1, len)), stone, null);
    par.position.set(nx * (WALL_T / 2 - 0.35), WALL_H + 0.6, nz * (WALL_T / 2 - 0.35));
    // merlons
    const n = Math.floor(len / 2.6);
    const merl = new THREE.InstancedMesh(merlonGeo, stone, n);
    const M = new THREE.Matrix4();
    for (let i = 0; i < n; i++) {
      const u = -len / 2 + 1.3 + i * 2.6 + (len - n * 2.6) / 2;
      M.makeRotationY(ax ? 0 : Math.PI / 2);
      M.setPosition(ax ? u : nx * (WALL_T / 2 - 0.37), WALL_H + 1.7, ax ? nz * (WALL_T / 2 - 0.37) : u);
      merl.setMatrixAt(i, M);
    }
    merl.castShadow = merl.receiveShadow = true;
    const crown = new THREE.Group();
    crown.add(par, merl);
    e.group.add(crown);
    e.crown = crown;
    // arrow slits on the outer face
    const sl = new THREE.Group();
    for (let i = 0; i < Math.floor(len / 9); i++) {
      const u = -len / 2 + 4.5 + i * 9;
      for (const y of [4.2, 8.0]) {
        if (y === 8.0 && i % 2) continue;
        const s = new THREE.Mesh(slitGeo, black);
        s.position.set(ax ? u : nx * (WALL_T / 2), y, ax ? nz * (WALL_T / 2) : u);
        if (!ax) s.rotation.y = Math.PI / 2;
        sl.add(s);
      }
    }
    e.group.add(sl);
    e.slits = sl;
    wallInfo.push({ name, cx, cz, len, ax, nx, nz });
  }

  // ---- round corner towers ----
  const towers = [
    ["tNW", -30, -30],
    ["tNE", 30, -30],
    ["tSW", -30, 30],
    ["tSE", 30, 30],
  ];
  const ringMerlons = (r, y, n) => {
    const im = new THREE.InstancedMesh(merlonGeo, stone, n);
    const M = new THREE.Matrix4();
    for (let i = 0; i < n; i++) {
      const a = (i / n) * Math.PI * 2;
      M.makeRotationY(-a + Math.PI / 2);
      M.setPosition(Math.cos(a) * (r - 0.35), y, Math.sin(a) * (r - 0.35));
      im.setMatrixAt(i, M);
    }
    im.castShadow = true;
    return im;
  };
  const roundTower = (name, x, z, r, h, roofH, roofMat) => {
    const geo = baseGeo(new THREE.CylinderGeometry(r, r * 1.1, h + 0.6, 32, 1));
    const e = element(name, x, z, geo, stone, { kind: "tower" });
    const crown = new THREE.Group();
    const parRing = mesh(baseGeo(new THREE.CylinderGeometry(r + 0.15, r + 0.15, 1.1, 32, 1, true)), stone, crown);
    parRing.position.y = h + 0.6;
    const corbel = mesh(baseGeo(new THREE.CylinderGeometry(r + 0.2, r - 0.1, 0.8, 32)), stoneDark, crown);
    corbel.position.y = h - 0.3;
    crown.add(ringMerlons(r + 0.15, h + 1.7, Math.round((2 * Math.PI * r) / 2.6)));
    e.group.add(crown);
    e.crown = crown;
    const rf = new THREE.Group();
    const cone = mesh(baseGeo(new THREE.ConeGeometry(r + 1.0, roofH, 32, 1)), roofMat, rf);
    cone.position.y = h + 1.6;
    // finial
    const fin = mesh(new THREE.CylinderGeometry(0.06, 0.06, 2.2, 5), mat(0x3a3a3a, { metalness: 0.6, roughness: 0.4 }), rf);
    fin.position.y = h + 1.6 + roofH + 1;
    e.group.add(rf);
    e.roof = rf;
    const sl = new THREE.Group();
    for (let k = 0; k < 8; k++) {
      const a = (k / 8) * Math.PI * 2 + 0.2;
      for (const y of [5, 10.5]) {
        if ((k + (y > 6 ? 1 : 0)) % 2) continue;
        const s = new THREE.Mesh(slitGeo, black);
        s.position.set(Math.cos(a) * (r * 1.05), y, Math.sin(a) * (r * 1.05));
        s.rotation.y = -a + Math.PI / 2;
        sl.add(s);
      }
    }
    e.group.add(sl);
    e.slits = sl;
    return e;
  };
  for (const [name, x, z] of towers) roundTower(name, x, z, TOWER_R, TOWER_H, 9, roof);

  // ---- square tower (west wall) ----
  {
    const e = element("tSq", -31, 0, baseGeo(new THREE.BoxGeometry(10, 17.6, 10)), stone, { kind: "tower" });
    const crown = new THREE.Group();
    const im = new THREE.InstancedMesh(merlonGeo, stone, 16);
    const M = new THREE.Matrix4();
    let k = 0;
    for (let side = 0; side < 4; side++)
      for (let i = 0; i < 4; i++) {
        const u = -3.9 + i * 2.6;
        const a = (side * Math.PI) / 2;
        M.makeRotationY(a);
        const lx = u, lz = 4.62;
        M.setPosition(Math.cos(a) * lx + Math.sin(a) * lz, 18.7, -Math.sin(a) * lx + Math.cos(a) * lz);
        im.setMatrixAt(k++, M);
      }
    im.castShadow = true;
    crown.add(im);
    e.group.add(crown);
    e.crown = crown;
    const rf = new THREE.Group();
    const pyr = mesh(baseGeo(new THREE.ConeGeometry(7.9, 7, 4, 1)), roof, rf);
    pyr.rotation.y = Math.PI / 4;
    pyr.position.y = 18.6;
    e.group.add(rf);
    e.roof = rf;
    const sl = new THREE.Group();
    for (const y of [5, 11]) {
      const s = new THREE.Mesh(slitGeo, black);
      s.position.set(-5.05, y, 0);
      s.rotation.y = Math.PI / 2;
      sl.add(s);
    }
    e.group.add(sl);
    e.slits = sl;
  }

  // ---- gatehouse ----
  const gate = new THREE.Group();
  gate.position.set(0, P - 0.6, 0);
  root.add(gate);
  const gateParts = [];
  {
    // central block with passage (built from 3 boxes so the passage is open)
    const gH = 14;
    const side1 = mesh(baseGeo(new THREE.BoxGeometry(4.5, gH, 10)), stone, gate);
    side1.position.set(-4.25, 0, 32.5);
    const side2 = mesh(baseGeo(new THREE.BoxGeometry(4.5, gH, 10)), stone, gate);
    side2.position.set(4.25, 0, 32.5);
    const top = mesh(baseGeo(new THREE.BoxGeometry(4.0, gH - 6.4, 10)), stone, gate);
    top.position.set(0, 6.4, 32.5);
    // passage ceiling inner dark & murder holes
    const passFloor = mesh(new THREE.BoxGeometry(4, 0.2, 10), mat(0x5b5145), gate);
    passFloor.position.set(0, 0.6, 32.5);
    const holes = new THREE.Group();
    for (let i = 0; i < 3; i++) {
      const hm = new THREE.Mesh(new THREE.BoxGeometry(0.9, 0.05, 0.9), black);
      hm.position.set(0, 6.37, 30 + i * 2.4);
      holes.add(hm);
    }
    gate.add(holes);
    // arch caps (dark half cylinders give a rounded arch look at both faces)
    for (const zf of [37.55, 27.45]) {
      const arch = new THREE.Mesh(new THREE.CylinderGeometry(2, 2, 0.12, 20, 1, false, 0, Math.PI), black);
      arch.rotation.x = Math.PI / 2;
      arch.rotation.z = Math.PI / 2;
      arch.position.set(0, 6.4, zf);
      arch.scale.set(1, 1, 0.55);
      gate.add(arch);
    }
    // crown
    const crown = new THREE.Group();
    const im = new THREE.InstancedMesh(merlonGeo, stone, 5);
    const M = new THREE.Matrix4();
    for (let i = 0; i < 5; i++) {
      M.makeTranslation(-5.2 + i * 2.6, gH, 37.2);
      im.setMatrixAt(i, M);
    }
    crown.add(im);
    gate.add(crown);
    gateParts.push(side1, side2, top);
    // two gate towers
    const gtGeo = baseGeo(new THREE.CylinderGeometry(4.6, 5.0, 17.6, 28));
    const gt1 = mesh(gtGeo, stone, gate);
    gt1.position.set(-7.2, 0, 35);
    const gt2 = mesh(gtGeo, stone, gate);
    gt2.position.set(7.2, 0, 35);
    const gtc1 = ringMerlons(4.75, 18.7, 11);
    gtc1.position.set(-7.2, 0, 35);
    const gtc2 = ringMerlons(4.75, 18.7, 11);
    gtc2.position.set(7.2, 0, 35);
    crown.add(gtc1, gtc2);
    const gr = new THREE.Group();
    const gcones = [];
    for (const gx of [-7.2, 7.2]) {
      const c = mesh(baseGeo(new THREE.ConeGeometry(5.6, 8, 28)), roof, gr);
      c.position.set(gx, 18.5, 35);
      gcones.push(c);
    }
    gate.add(gr);
    elements.gate = { group: gate, crown, roof: gr, kind: "gate", details: [] };
    elements.gate.holes = holes;
    elements.gate.cutSide = side1;
    elements.gate.cutParts = [side1, gt1, gtc1, gcones[0]];
    // portcullis
    const port = new THREE.Group();
    const barM = mat(0x3b3029, { roughness: 0.7, metalness: 0.3 });
    for (let i = 0; i < 6; i++) {
      const b = new THREE.Mesh(new THREE.BoxGeometry(0.18, 6.2, 0.18), barM);
      b.position.set(-1.75 + i * 0.7, 3.1, 0);
      b.castShadow = true;
      port.add(b);
    }
    for (let j = 0; j < 7; j++) {
      const b = new THREE.Mesh(new THREE.BoxGeometry(4.0, 0.16, 0.16), barM);
      b.position.set(0, 0.4 + j * 0.9, 0.05);
      port.add(b);
    }
    // spikes
    for (let i = 0; i < 6; i++) {
      const s = new THREE.Mesh(new THREE.ConeGeometry(0.12, 0.45, 4), barM);
      s.rotation.x = Math.PI;
      s.position.set(-1.75 + i * 0.7, -0.2, 0);
      port.add(s);
    }
    port.position.set(0, 0.7, 35.6);
    gate.add(port);
    elements.gate.portcullis = port;
    // doors (two leaves) + bar
    const doors = [];
    for (const sgn of [-1, 1]) {
      const pivot = new THREE.Group();
      pivot.position.set(sgn * 2, 0.7, 33.4);
      const leaf = mesh(new THREE.BoxGeometry(2, 5.8, 0.3), woodDark, pivot);
      leaf.position.set(-sgn * 1, 2.9, 0);
      for (let k = 0; k < 4; k++) {
        const band = new THREE.Mesh(new THREE.BoxGeometry(2.02, 0.15, 0.34), barM);
        band.position.set(-sgn * 1, 0.8 + k * 1.4, 0);
        pivot.add(band);
      }
      gate.add(pivot);
      doors.push(pivot);
    }
    const bar = mesh(new THREE.BoxGeometry(4.6, 0.32, 0.32), wood, gate);
    bar.position.set(0, 3.2, 33.1);
    elements.gate.doors = doors;
    elements.gate.bar = bar;
    // drawbridge, hinge at the gate front, spans the moat
    const hinge = new THREE.Group();
    hinge.position.set(0, 0.75, 37.7);
    const deck = mesh(new THREE.BoxGeometry(4.2, 0.45, 11), wood, hinge);
    deck.position.set(0, 0, 5.5);
    for (let k = 0; k < 4; k++) {
      const pl = mesh(new THREE.BoxGeometry(4.25, 0.08, 0.25), woodDark, hinge);
      pl.position.set(0, 0.25, 1 + k * 3);
    }
    gate.add(hinge);
    elements.gate.bridge = hinge;
    // chains: thin cylinders from tower top slots to bridge end (updated per frame)
    const chainM = mat(0x2a2a2a, { metalness: 0.7, roughness: 0.45 });
    elements.gate.chains = [-1, 1].map((sgn) => {
      const c = new THREE.Mesh(new THREE.CylinderGeometry(0.07, 0.07, 1, 5), chainM);
      gate.add(c);
      return { mesh: c, sgn };
    });
  }

  // ---- keep (donjon) ----
  {
    const e = roundTower("keep", 13, -13, 8, 30, 13, roof);
    // windows
    for (let k = 0; k < 6; k++) {
      const a = (k / 6) * Math.PI * 2;
      const w = new THREE.Mesh(new THREE.BoxGeometry(0.8, 1.6, 0.4), black);
      w.position.set(Math.cos(a) * 8.45, 20 + (k % 2) * 4, Math.sin(a) * 8.45);
      w.rotation.y = -a + Math.PI / 2;
      e.slits.add(w);
    }
    // banner
    const flag = new THREE.Mesh(new THREE.PlaneGeometry(4, 2.4, 10, 2), new THREE.MeshStandardMaterial({ color: 0x1f3f8a, side: THREE.DoubleSide, roughness: 0.8 }));
    flag.geometry.translate(2, 0, 0);
    flag.position.set(0, 30 + 1.6 + 13 + 1.0, 0);
    e.roof.add(flag);
    const pole = mesh(new THREE.CylinderGeometry(0.08, 0.08, 4, 5), mat(0x3a3a3a), e.roof);
    pole.position.set(0, 30 + 1.6 + 13 + 0.4, 0);
    e.flag = flag;
    e.flagBase = flag.geometry.attributes.position.array.slice();
    // gold stripe flag detail
  }

  // ---- courtyard ground ----
  const yard = new THREE.Mesh(new THREE.PlaneGeometry(57, 57).rotateX(-Math.PI / 2), new THREE.MeshStandardMaterial({ color: 0x8a7a5e, roughness: 1, transparent: true, opacity: 0 }));
  yard.position.set(0, P + 0.04, 0);
  yard.receiveShadow = true;
  root.add(yard);

  // ---- courtyard buildings ----
  const blds = new THREE.Group();
  root.add(blds);
  const building = (name, x, z, w, d, h, wallMat, roofMatl, rot = 0, roofH = null) => {
    const g = new THREE.Group();
    g.position.set(x, P - 0.4, z);
    g.rotation.y = rot;
    const body = mesh(baseGeo(new THREE.BoxGeometry(w, h + 0.4, d)), wallMat, g);
    const rf = mesh(gableGeo(d, w, roofH ?? d * 0.55, 0.5), roofMatl, g);
    rf.rotation.y = Math.PI / 2;
    rf.position.y = h + 0.4;
    blds.add(g);
    elements[name] = { group: g, body, roof: rf, kind: "bld", details: [] };
    return elements[name];
  };
  const plaster = mat(0xd9ccb0);
  const hall = building("hall", -12, -24.2, 28, 8.5, 9, stone, roof);
  // hall windows
  for (let i = 0; i < 6; i++) {
    const wnd = new THREE.Mesh(new THREE.BoxGeometry(1.0, 2.2, 0.3), black);
    wnd.position.set(-11 + i * 4.4, 5.6, 4.3);
    hall.group.add(wnd);
  }
  const kitchen = building("kitchen", -19, -9, 9, 7, 5.5, stoneDark, roofRed);
  const chim = mesh(baseGeo(new THREE.BoxGeometry(1.4, 4, 1.4)), stoneDark, kitchen.group);
  chim.position.set(3, 7, 0);
  building("stables", 24, 6, 6, 20, 4.2, wood, roofRed, 0, 2.2);
  building("granary", -23.5, 14, 7, 15, 6.2, plaster, roof);
  // granary timber framing
  for (let i = 0; i < 5; i++) {
    const tb = new THREE.Mesh(new THREE.BoxGeometry(0.25, 6.4, 0.2), woodDark);
    tb.position.set(3.55, 3.2, -6 + i * 3);
    elements.granary.group.add(tb);
  }
  // well
  {
    const g = new THREE.Group();
    g.position.set(-3, P, 8);
    const ring = mesh(new THREE.CylinderGeometry(1.4, 1.5, 1.1, 20, 1, true), stoneDark, g);
    ring.position.y = 0.55;
    const inner = new THREE.Mesh(new THREE.CircleGeometry(1.3, 20).rotateX(-Math.PI / 2), black);
    inner.position.y = 0.2;
    g.add(inner);
    for (const sx of [-1.3, 1.3]) {
      const post = mesh(new THREE.BoxGeometry(0.22, 3, 0.22), wood, g);
      post.position.set(sx, 1.5, 0);
    }
    const axle = mesh(new THREE.CylinderGeometry(0.15, 0.15, 2.8, 8), wood, g);
    axle.rotation.z = Math.PI / 2;
    axle.position.y = 2.2;
    const wr = mesh(gableGeo(2.4, 3.2, 1.0, 0.2), roofRed, g);
    wr.position.y = 3;
    root.add(g);
    elements.well = { group: g, kind: "bld", details: [] };
  }
  // stores near granary: barrels & sacks
  {
    const g = new THREE.Group();
    const bg = new THREE.CylinderGeometry(0.45, 0.45, 1.1, 10);
    const bm = woodMaterial(0x6b4a2c);
    for (let i = 0; i < 10; i++) {
      const b = mesh(bg, bm, g);
      b.position.set(-18.5 + (i % 5) * 1.0, P + 0.55, 18 + Math.floor(i / 5) * 1.0);
    }
    const sg = new THREE.SphereGeometry(0.5, 8, 6);
    sg.scale(1, 0.7, 0.8);
    for (let i = 0; i < 8; i++) {
      const s = mesh(sg, mat(0xc8b48a), g);
      s.position.set(-18.5 + (i % 4) * 1.0, P + 0.35, 9 + Math.floor(i / 4) * 1.1);
    }
    root.add(g);
    elements.stores = { group: g, kind: "bld", details: [] };
  }

  // ---- moat water ----
  const moatWaterMat = waterMaterial(0x34606a);
  const moatWater = new THREE.Mesh(new THREE.PlaneGeometry(100, 100).rotateX(-Math.PI / 2), moatWaterMat);
  moatWater.position.y = P - 6;
  moatWater.receiveShadow = true;
  root.add(moatWater);

  // ---- layout / foundations ----
  // rope outline: rectangle following the walls + circles of the towers
  const outlinePts = [];
  const addLine = (ax, az, bx, bz, n = 30) => {
    for (let i = 0; i <= n; i++) outlinePts.push(new THREE.Vector3(lerp(ax, bx, i / n), P + 0.35, lerp(az, bz, i / n)));
  };
  addLine(-30, 30, -30, -30);
  addLine(-30, -30, 30, -30);
  addLine(30, -30, 30, 30);
  addLine(30, 30, 9, 30, 10);
  addLine(9, 30, 9, 40, 6);
  addLine(9, 40, -9, 40, 6);
  addLine(-9, 40, -9, 30, 6);
  addLine(-9, 30, -30, 30, 10);
  const ropeSegs = outlinePts.length - 1;
  const rope = new THREE.InstancedMesh(new THREE.BoxGeometry(1, 0.12, 0.22), new THREE.MeshBasicMaterial({ color: 0xf6ecd0 }), ropeSegs);
  {
    const M = new THREE.Matrix4();
    for (let i = 0; i < ropeSegs; i++) {
      const a = outlinePts[i], b = outlinePts[i + 1];
      const len = a.distanceTo(b);
      M.makeRotationY(-Math.atan2(b.z - a.z, b.x - a.x));
      M.scale(new THREE.Vector3(Math.max(len, 0.01), 1, 1));
      M.setPosition((a.x + b.x) / 2, P + 0.3, (a.z + b.z) / 2);
      rope.setMatrixAt(i, M);
    }
  }
  root.add(rope);
  // construction-site dirt
  const dirtTex = (() => {
    const c = document.createElement("canvas");
    c.width = c.height = 256;
    const g = c.getContext("2d");
    const gr = g.createRadialGradient(128, 128, 40, 128, 128, 128);
    gr.addColorStop(0, "rgba(255,255,255,1)");
    gr.addColorStop(0.75, "rgba(255,255,255,0.85)");
    gr.addColorStop(1, "rgba(255,255,255,0)");
    g.fillStyle = gr;
    g.fillRect(0, 0, 256, 256);
    return new THREE.CanvasTexture(c);
  })();
  const siteDirt = new THREE.Mesh(new THREE.CircleGeometry(46, 48).rotateX(-Math.PI / 2), new THREE.MeshStandardMaterial({ color: 0x8a7656, roughness: 1, transparent: true, alphaMap: dirtTex, depthWrite: false }));
  siteDirt.position.set(0, P + 0.02, 0);
  siteDirt.scale.set(0.86, 1, 0.86);
  siteDirt.receiveShadow = true;
  root.add(siteDirt);
  // ghost "blueprint" material
  const ghostMat = new THREE.MeshBasicMaterial({ color: 0xa9d8f5, transparent: true, opacity: 0.2, depthWrite: false });
  const ghostEdges = new THREE.LineBasicMaterial({ color: 0xe8f6ff, transparent: true, opacity: 0.5 });
  // tower circles
  const circles = new THREE.Group();
  for (const [x, z, r] of [[-30, -30, TOWER_R], [30, -30, TOWER_R], [-30, 30, TOWER_R], [30, 30, TOWER_R], [13, -13, 8], [-7.2, 35, 4.6], [7.2, 35, 4.6], [-31, 0, 6]]) {
    const pts = [];
    for (let i = 0; i <= 40; i++) pts.push(new THREE.Vector3(x + Math.cos((i / 40) * 6.283) * r, P + 0.35, z + Math.sin((i / 40) * 6.283) * r));
    circles.add(new THREE.Line(new THREE.BufferGeometry().setFromPoints(pts), new THREE.LineBasicMaterial({ color: 0xf3e6c4 })));
  }
  root.add(circles);
  // stakes
  const stakeGeo = new THREE.CylinderGeometry(0.08, 0.08, 1.2, 5);
  stakeGeo.translate(0, 0.6, 0);
  const stakes = new THREE.InstancedMesh(stakeGeo, wood, 64);
  {
    const M = new THREE.Matrix4();
    let k = 0;
    for (let i = 0; i < outlinePts.length && k < 64; i += 2) {
      M.makeTranslation(outlinePts[i].x, P - 0.2, outlinePts[i].z);
      stakes.setMatrixAt(k++, M);
    }
    stakes.count = k;
  }
  root.add(stakes);
  // trenches (dark sunken strips) & footings along walls and towers
  const trenchMat = mat(0x3e2f22);
  const trenches = new THREE.Group();
  const footings = new THREE.Group();
  const trenchSegs = [];
  for (const w of wallInfo) {
    const tg = new THREE.Mesh(new THREE.BoxGeometry(w.ax ? w.len : WALL_T + 1.6, 0.1, w.ax ? WALL_T + 1.6 : w.len), trenchMat);
    tg.position.set(w.cx, P + 0.06, w.cz);
    trenches.add(tg);
    trenchSegs.push({ mesh: tg, w });
    const ft = mesh(baseGeo(new THREE.BoxGeometry(w.ax ? w.len : WALL_T + 1.2, 1.2, w.ax ? WALL_T + 1.2 : w.len)), footStone, footings);
    ft.position.set(w.cx, P - 0.6, w.cz);
  }
  for (const [x, z, r] of [[-30, -30, TOWER_R], [30, -30, TOWER_R], [-30, 30, TOWER_R], [30, 30, TOWER_R], [13, -13, 8], [-7.2, 35, 5], [7.2, 35, 5]]) {
    const tg = new THREE.Mesh(new THREE.CylinderGeometry(r + 0.8, r + 0.8, 0.1, 28), trenchMat);
    tg.position.set(x, P + 0.07, z);
    trenches.add(tg);
    trenchSegs.push({ mesh: tg, circle: true });
    const ft = mesh(baseGeo(new THREE.CylinderGeometry(r + 0.6, r + 0.6, 1.2, 28)), footStone, footings);
    ft.position.set(x, P - 0.6, z);
  }
  {
    const tg = new THREE.Mesh(new THREE.BoxGeometry(11, 0.1, 6.5), trenchMat);
    tg.position.set(-31, P + 0.07, 0);
    trenches.add(tg);
    trenchSegs.push({ mesh: tg });
    const ft = mesh(baseGeo(new THREE.BoxGeometry(11, 1.2, 11)), footStone, footings);
    ft.position.set(-31, P - 0.6, 0);
  }
  root.add(trenches, footings);
  // spoil heaps beside trenches
  const heapGeo = new THREE.ConeGeometry(1.8, 1.4, 9);
  heapGeo.translate(0, 0.5, 0);
  const heaps = new THREE.InstancedMesh(heapGeo, mat(0x5a4330), 40);
  {
    const M = new THREE.Matrix4();
    for (let i = 0; i < 40; i++) {
      const side = i % 4;
      const u = -26 + (Math.floor(i / 4) / 9) * 52;
      const off = 34 + hash(i) * 2;
      const pos = [[u, -off], [off, u], [u, off], [-off, u]][side];
      M.makeScale(1 + hash(i * 3) * 0.5, 1 + hash(i * 5) * 0.4, 1 + hash(i * 3) * 0.5);
      M.setPosition(pos[0], P - 0.2, pos[1]);
      heaps.setMatrixAt(i, M);
    }
  }
  heaps.castShadow = true;
  root.add(heaps);

  // ---- construction site props: stockpiles ----
  const blockGeo = new THREE.BoxGeometry(1.1, 0.55, 0.75);
  const pileCount = 260;
  const piles = new THREE.InstancedMesh(blockGeo, stoneMaterial(0xc6bba3), pileCount);
  const pileMats = [];
  {
    const M = new THREE.Matrix4();
    const spots = [[-44, 8], [-40, -18], [44, -14], [42, 14], [-18, 46], [20, 50]];
    for (let i = 0; i < pileCount; i++) {
      const sp = spots[i % spots.length];
      const k = Math.floor(i / spots.length);
      const layer = Math.floor(k / 12), j = k % 12;
      const px = sp[0] + (j % 4) * 1.2 - 1.8 + (layer % 2) * 0.3;
      const pz = sp[1] + Math.floor(j / 4) * 0.85 - 0.9;
      M.makeRotationY((layer % 2) * 0.05);
      M.setPosition(px, P + 0.28 + layer * 0.56, pz);
      pileMats.push(M.clone());
      piles.setMatrixAt(i, M);
    }
  }
  piles.castShadow = piles.receiveShadow = true;
  root.add(piles);
  // timber stacks
  const logGeo = new THREE.CylinderGeometry(0.22, 0.22, 7, 7);
  logGeo.rotateZ(Math.PI / 2);
  const logs = new THREE.InstancedMesh(logGeo, woodMaterial(0x8a6440), 48);
  {
    const M = new THREE.Matrix4();
    for (let i = 0; i < 48; i++) {
      const g = Math.floor(i / 24);
      const k = i % 24;
      const layer = Math.floor(k / 6);
      M.makeRotationY(g ? Math.PI / 2 : 0);
      if (g) M.setPosition(-46 + layer * 0.4, P + 0.25 + layer * 0.42, -30 + (k % 6) * 0.46);
      else M.setPosition(36 + (k % 6) * 0.0, P + 0.25 + layer * 0.42, 46 + (k % 6) * 0.46);
      logs.setMatrixAt(i, M);
    }
  }
  logs.castShadow = true;
  root.add(logs);

  // carpenters' work beam on trestles
  const workBeam = new THREE.Group();
  {
    const bm = mesh(new THREE.BoxGeometry(0.45, 0.45, 7), woodMaterial(0xb08a5a), workBeam);
    bm.position.set(-43.5, P + 0.95, -29.5);
    for (const dz of [-2.5, 2.5]) {
      const tr = mesh(new THREE.BoxGeometry(1.2, 0.75, 0.25), woodMaterial(0x6a4a2a), workBeam);
      tr.position.set(-43.5, P + 0.37, -29.5 + dz);
    }
    const chips = mesh(new THREE.CircleGeometry(2.2, 12).rotateX(-Math.PI / 2), mat(0xd8b886), workBeam, false);
    chips.position.set(-43.5, P + 0.04, -29.5);
  }
  root.add(workBeam);
  // ---- scaffolding (instanced, rebuilt per frame from wall heights) ----
  const poleGeo = new THREE.CylinderGeometry(0.09, 0.09, 1, 5);
  poleGeo.translate(0, 0.5, 0);
  const poles = new THREE.InstancedMesh(poleGeo, woodMaterial(0x9a7a52), 1400);
  const plankGeo = new THREE.BoxGeometry(1, 0.08, 0.9);
  const planks = new THREE.InstancedMesh(plankGeo, woodMaterial(0xa8865a), 500);
  poles.castShadow = planks.castShadow = true;
  root.add(poles, planks);

  // ---- top course blocks being laid (instanced) ----
  const courseBlocks = new THREE.InstancedMesh(new THREE.BoxGeometry(1.15, 0.6, 0.9), stoneMaterial(0xcfc4ab), 400);
  courseBlocks.castShadow = true;
  root.add(courseBlocks);

  // ---- buttress (for maintenance vignette): against north wall outside ----
  const buttress = mesh(baseGeo(new THREE.BoxGeometry(3, 9, 3)), stoneMaterial(0xc9bea6), root);
  buttress.position.set(-12, P - 0.4, -33);
  // crack decal on the north wall outer face
  const crack = new THREE.Group();
  {
    let x = -12.5, y = 9.5;
    for (let i = 0; i < 11; i++) {
      const nx = x + (hash(i * 9.1) - 0.5) * 1.6, ny = y - 0.75;
      const len = Math.hypot(nx - x, ny - y);
      const s = new THREE.Mesh(new THREE.BoxGeometry(0.09, len + 0.05, 0.05), black);
      s.position.set((x + nx) / 2, (y + ny) / 2, 0);
      s.rotation.z = Math.atan2(nx - x, -(ny - y)) * -1;
      crack.add(s);
      x = nx;
      y = ny;
    }
    crack.position.set(0, P - 0.6, -31.53);
  }
  root.add(crack);
  // postern (small door in the north wall to be walled up)
  const postern = new THREE.Mesh(new THREE.BoxGeometry(1.6, 2.6, 0.2), black);
  postern.position.set(14, P + 0.7, -31.55);
  root.add(postern);
  const posternFill = mesh(baseGeo(new THREE.BoxGeometry(1.7, 2.7, 0.3)), stoneMaterial(0xd2c7ae), root);
  posternFill.position.set(14, P - 0.6, -31.6);
  // puddle & drainage channel in the courtyard
  const puddle = new THREE.Mesh(new THREE.CircleGeometry(5, 28).rotateX(-Math.PI / 2), waterMaterial(0x4c6c74));
  puddle.position.set(4, P + 0.08, 2);
  root.add(puddle);
  const rigole = new THREE.Mesh(new THREE.BoxGeometry(0.7, 0.05, 26), mat(0x6f6658));
  rigole.position.set(4, P + 0.09, 16);
  root.add(rigole);
  // gargoyle on the SE tower spouting water
  const garg = new THREE.Group();
  {
    const gb = mesh(new THREE.BoxGeometry(0.5, 0.5, 1.6), stoneDark, garg);
    gb.position.set(0, 0, 0.8);
    garg.position.set(30 + 3.95, P + 15.5, 30 + 3.95);
    garg.rotation.y = Math.PI / 4;
  }
  root.add(garg);
  const spout = new THREE.InstancedMesh(new THREE.SphereGeometry(0.16, 6, 4), new THREE.MeshStandardMaterial({ color: 0x9cc0d0, roughness: 0.1, transparent: true, opacity: 0.8 }), 40);
  root.add(spout);

  // ---------------- per-frame application ----------------
  const M4 = new THREE.Matrix4();
  const Q = new THREE.Quaternion();
  const V = new THREE.Vector3();
  const S1 = new THREE.Vector3();
  const setGrow = (e, p) => {
    const s = Math.max(0.0001, p);
    e.group.visible = p > 0.001;
    if (e.mesh) e.mesh.scale.y = s;
    if (e.crown) e.crown.visible = false;
    if (e.slits) e.slits.visible = p > 0.97;
  };
  // wall current heights for scaffolding
  function apply(S, t) {
    // outline / trenches / footings
    rope.visible = S.outline > 0;
    rope.count = Math.floor(ropeSegs * clamp(S.outline));
    siteDirt.visible = S.siteDirt > 0.01;
    siteDirt.material.opacity = clamp(S.siteDirt);
    circles.visible = S.outline > 0.98 && S.footing < 0.5;
    stakes.visible = S.outline > 0 && S.footing < 0.9;
    stakes.count = Math.floor(30 * clamp(S.outline * 1.05));
    trenches.visible = S.trench > 0;
    for (const ts of trenchSegs) {
      if (ts.w) {
        const w = ts.w;
        const len = w.len * clamp(S.trench);
        ts.mesh.scale.set(w.ax ? Math.max(0.001, clamp(S.trench)) : 1, 1, w.ax ? 1 : Math.max(0.001, clamp(S.trench)));
      } else ts.mesh.scale.setScalar(Math.max(0.001, clamp(S.trench * 1.2)));
    }
    heaps.visible = S.trench > 0.1 && S.moat < 0.05;
    heaps.count = Math.floor(40 * clamp(S.trench));
    footings.visible = S.footing > 0;
    footings.children.forEach((f) => (f.scale.y = Math.max(0.001, S.footing)));

    // walls & towers
    const wallP = S.walls;
    for (const w of wallInfo) setGrow(elements[w.name], wallP * (1 - 0.06 * hash(w.cx + w.cz)) + (wallP >= 1 ? 0.06 : 0));
    for (const name of ["tNW", "tNE", "tSW", "tSE"]) setGrow(elements[name], clamp(S.towers));
    setGrow(elements.tSq, clamp(S.towers));
    setGrow(elements.keep, clamp(S.keep));
    for (const name of ["wN", "wE", "wW", "wSW", "wSE", "tNW", "tNE", "tSW", "tSE", "tSq", "keep"]) {
      const e = elements[name];
      if (e.crown) {
        const full = name === "keep" ? S.keep >= 1 : name[0] === "w" ? S.walls >= 1 : S.towers >= 1;
        e.crown.visible = full && S.crenels > 0;
        e.crown.scale.y = Math.max(0.001, clamp(S.crenels));
      }
      if (e.roof) {
        e.roof.visible = S.roofs > 0 && (name === "keep" ? S.keep >= 1 : S.towers >= 1);
        e.roof.scale.setScalar(Math.max(0.001, clamp(S.roofs)));
        e.roof.position.y = 0;
      }
    }
    // gate
    const g = elements.gate;
    gate.visible = S.gate > 0.001;
    gate.scale.y = Math.max(0.001, S.gate);
    g.crown.visible = S.gate >= 1 && S.crenels > 0;
    g.roof.visible = S.gate >= 1 && S.roofs > 0;
    g.roof.scale.y = Math.max(0.001, clamp(S.roofs));
    g.bridge.visible = S.gate >= 1 && S.bridge > 0;
    g.bridge.rotation.x = -S.bridgeUp * (Math.PI / 2) * 0.93;
    g.portcullis.visible = S.gate >= 1 && S.bridge > 0;
    g.portcullis.position.y = 0.7 + (1 - S.portDown) * 5.6;
    g.doors[0].rotation.y = -S.doorsOpen * 1.45;
    g.doors[1].rotation.y = S.doorsOpen * 1.45;
    g.doors.forEach((d) => (d.visible = S.gate >= 1 && S.bridge > 0));
    g.bar.visible = S.gate >= 1 && S.doorsOpen < 0.05 && S.bar > 0;
    g.bar.position.y = 3.2 + (1 - S.bar) * 2.5;
    for (const cp of g.cutParts) cp.visible = !(S.gateCut > 0.5);
    g.roof.visible = g.roof.visible;
    g.holes.visible = S.gate >= 1;
    // chains
    for (const c of g.chains) {
      c.mesh.visible = g.bridge.visible;
      const a = g.bridge.rotation.x;
      const end = new THREE.Vector3(c.sgn * 1.9, 0.75 + Math.sin(-a) * 10.5, 37.7 + Math.cos(a) * 10.5);
      const start = new THREE.Vector3(c.sgn * 1.9, 10.5, 37.75);
      const mid = start.clone().add(end).multiplyScalar(0.5);
      c.mesh.position.copy(mid);
      const dir = end.clone().sub(start);
      c.mesh.scale.set(1, dir.length(), 1);
      c.mesh.quaternion.setFromUnitVectors(UP, dir.normalize());
    }

    // courtyard & buildings
    yard.material.opacity = clamp(S.yard);
    yard.visible = S.yard > 0.01;
    const bl = ["hall", "kitchen", "stables", "granary"];
    bl.forEach((n, i) => {
      const p = clamp(S.buildings * 1.6 - i * 0.2);
      const e = elements[n];
      e.group.visible = p > 0.001;
      e.group.scale.y = Math.max(0.001, p);
      e.roof.visible = p >= 1;
    });
    elements.well.group.visible = S.buildings > 0.3 || S.well > 0;
    elements.stores.group.visible = S.buildings > 0.8;
    // moat water
    moatWater.visible = S.water > 0.001;
    moatWater.position.y = P - 5.6 + clamp(S.water) * 3.9;
    moatWaterMat.userData.uniforms.uTime.value = t;

    // stockpiles
    const pc = Math.floor(pileCount * clamp(S.stock));
    piles.count = pc;
    piles.visible = pc > 0;
    logs.visible = S.stock > 0.05;
    logs.count = S.stock > 0.05 ? 48 : 0;
    workBeam.visible = S.stock > 0.05;

    // scaffolding around the walls while they rise
    let pi = 0, pk = 0, ci = 0;
    if (S.scaffold > 0) {
      const wallTop = (n) => {
        const e = elements[n];
        return e.group.visible ? e.mesh.scale.y * (WALL_H + 0.6) - 0.6 : 0;
      };
      for (const w of wallInfo) {
        const top = wallTop(w.name);
        if (top < 0.3) continue;
        const ht = top + 1.6;
        for (const side of [1, -1]) {
          const off = side * (WALL_T / 2 + 1.0);
          const n = Math.floor(w.len / 3.2);
          for (let i = 0; i <= n; i++) {
            const u = -w.len / 2 + 1.5 + (i * (w.len - 3)) / n;
            const x = w.cx + (w.ax ? u : w.nx * off), z = w.cz + (w.ax ? w.nz * off : u);
            for (const dd of [0, 1.0]) {
              const xx = x + (w.ax ? 0 : w.nx * side * dd), zz = z + (w.ax ? w.nz * side * dd : 0);
              if (pi < 1400) {
                M4.makeScale(1, ht, 1);
                M4.setPosition(xx, P - 0.3, zz);
                poles.setMatrixAt(pi++, M4);
              }
            }
            // plank at current working level
            if (i < n && pk < 500) {
              const lvl = Math.max(1.2, top - 0.2);
              M4.makeScale(w.ax ? (w.len - 3) / n : 1.2, 1, w.ax ? 1.2 : (w.len - 3) / n);
              const ux = -w.len / 2 + 1.5 + ((i + 0.5) * (w.len - 3)) / n;
              M4.setPosition(w.cx + (w.ax ? ux : w.nx * (off + side * 0.5)), P + lvl, w.cz + (w.ax ? w.nz * (off + side * 0.5) : ux));
              planks.setMatrixAt(pk++, M4);
            }
          }
          // ledgers (horizontal) every 2.2 m
          for (let lv = 2.2; lv < ht - 0.5; lv += 2.2) {
            if (pi >= 1400) break;
            const L = w.len - 2;
            const dir = w.ax ? new THREE.Vector3(1, 0, 0) : new THREE.Vector3(0, 0, 1);
            Q.setFromUnitVectors(UP, dir);
            V.set(w.cx + (w.ax ? 0 : w.nx * off) - dir.x * L / 2, P + lv, w.cz + (w.ax ? w.nz * off : 0) - dir.z * L / 2);
            S1.set(1, L, 1);
            M4.compose(V, Q, S1);
            poles.setMatrixAt(pi++, M4);
          }
        }
        // top course being laid
        if (S.walls < 1 && S.walls > 0.05) {
          const frac = (t * 0.37 + hash(w.cx * 3 + w.cz)) % 1;
          const nb = Math.floor((w.len / 1.25) * frac);
          for (let b = 0; b < nb && ci < 400; b++) {
            const u = -w.len / 2 + 0.62 + b * 1.25;
            for (const fo of [-1, 1]) {
              if (ci >= 400) break;
              M4.makeRotationY(w.ax ? 0 : Math.PI / 2);
              const fx = fo * (WALL_T / 2 - 0.45);
              M4.setPosition(w.cx + (w.ax ? u : fx), P + top + 0.3, w.cz + (w.ax ? fx : u));
              courseBlocks.setMatrixAt(ci++, M4);
            }
          }
        }
      }
      // tower scaffolds: ring of poles
      const towerTop = elements.tNW.group.visible ? elements.tNW.mesh.scale.y * (TOWER_H + 0.6) - 0.6 : 0;
      if (towerTop > 0.3 && S.towers < 1) {
        for (const [x, z] of [[-30, -30], [30, -30], [-30, 30], [30, 30]]) {
          for (let k = 0; k < 14; k++) {
            const a = (k / 14) * Math.PI * 2;
            if (pi >= 1400) break;
            M4.makeScale(1, towerTop + 1.6, 1);
            M4.setPosition(x + Math.cos(a) * (TOWER_R + 1.4), P - 0.3, z + Math.sin(a) * (TOWER_R + 1.4));
            poles.setMatrixAt(pi++, M4);
          }
        }
      }
    }
    poles.count = pi;
    planks.count = pk;
    courseBlocks.count = ci;
    poles.instanceMatrix.needsUpdate = true;
    planks.instanceMatrix.needsUpdate = true;
    courseBlocks.instanceMatrix.needsUpdate = true;
    poles.visible = pi > 0;
    planks.visible = pk > 0;
    courseBlocks.visible = ci > 0;

    // maintenance props
    buttress.visible = S.buttress > 0.001;
    buttress.scale.y = Math.max(0.001, S.buttress);
    crack.visible = S.crack > 0.01;
    crack.children.forEach((c, i) => (c.visible = i < S.crack * crack.children.length));
    postern.visible = S.walls >= 1;
    posternFill.visible = S.postern > 0.001;
    posternFill.scale.y = Math.max(0.001, S.postern);
    puddle.visible = S.puddle > 0.01;
    puddle.scale.setScalar(Math.max(0.01, S.puddle));
    puddle.material.userData.uniforms.uTime.value = t;
    rigole.visible = S.rigole > 0.01;
    rigole.scale.z = Math.max(0.01, S.rigole);
    rigole.position.z = 3 + 13 * S.rigole;
    garg.visible = S.towers >= 1;
    spout.visible = S.spout > 0.01;
    for (let i = 0; i < 40; i++) {
      const u = ((t * 1.4 + i / 40) % 1);
      const x = 35.6 + u * 3.2, y = P + 15.5 - u * u * 15.2, z = 35.6 + u * 3.2;
      M4.makeScale(1, 1.6, 1);
      M4.setPosition(x, y, z);
      spout.setMatrixAt(i, M4);
    }
    spout.instanceMatrix.needsUpdate = true;
    // flag waving
    const kp = elements.keep;
    const arr = kp.flag.geometry.attributes.position.array;
    for (let i = 0; i < arr.length; i += 3) {
      const x0 = kp.flagBase[i];
      arr[i + 2] = Math.sin(x0 * 1.6 - t * 5) * 0.25 * (x0 / 4);
    }
    kp.flag.geometry.attributes.position.needsUpdate = true;
  }

  for (const k in elements) {
    const e = elements[k];
    if (e.slits) mergeStatic(e.slits, { cast: false });
  }
  mergeStatic(elements.well.group);
  mergeStatic(elements.stores.group);
  mergeStatic(workBeam);
  const ghostList = [];
  for (const k of ["wN", "wE", "wW", "wSW", "wSE", "tNW", "tNE", "tSW", "tSE", "tSq", "keep", "gate"]) {
    elements[k].group.traverse((o) => {
      if (o.isMesh || o.isInstancedMesh) ghostList.push({ o, m: o.material });
    });
  }
  let ghostOn = false;
  function setGhost(on, op) {
    ghostMat.opacity = 0.32 * op;
    if (on === ghostOn) return;
    ghostOn = on;
    for (const g of ghostList) {
      g.o.material = on ? ghostMat : g.m;
      g.o.castShadow = !on;
    }
  }
  return { root, elements, apply, wallInfo, setGhost };
}
