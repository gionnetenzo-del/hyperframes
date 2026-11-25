import { THREE, clamp, smooth, lerp, hash, mulberry32, mat, stoneMaterial, roofMaterial, woodMaterial, waterMaterial, gableGeo, baseGeo, mesh, box, eprog, prog, mergeStatic } from "./lib.js";
import { makePerson, pose } from "./people.js";

export const DY = -2000; // dioramas live far below the landscape (terrain is invisible from below)
export const D1 = new THREE.Vector3(0, DY, 0); // site tiles
export const D2 = new THREE.Vector3(600, DY, 0); // soil section
export const D3 = new THREE.Vector3(-600, DY, 0); // wall section
export const D4 = new THREE.Vector3(0, DY, 600); // storeroom
export const D5 = new THREE.Vector3(0, DY, -600); // roof frame

const black = new THREE.MeshBasicMaterial({ color: 0x0b0907 });

// ---------------- D1 : four candidate sites ----------------
export const TILE_X = [-93, -31, 31, 93];
export const TILE_NAMES = ["plaine", "colline", "montagne", "marais"];
function tileHeight(kind, x, z) {
  const n = Math.sin(x * 0.21) * Math.cos(z * 0.17) * 0.4 + Math.sin(x * 0.53 + z * 0.41) * 0.15;
  if (kind === 0) return 1.2 + n * 0.5;
  if (kind === 1) {
    const r = Math.hypot(x + 3, z + 2);
    let h = 1.2 + 11 * (1 - smooth(9, 22, r)) + n * 0.6;
    const rv = Math.abs(x - (17 + Math.sin(z * 0.12) * 3));
    h -= 1.8 * (1 - smooth(2.5, 6, rv));
    return h;
  }
  if (kind === 2) {
    const r = Math.hypot(x, z);
    return 1.2 + 26 * Math.pow(1 - smooth(0, 24, r), 1.6) + Math.abs(Math.sin(x * 0.4 + z * 0.3)) * 2.2 * (1 - smooth(5, 22, r)) + n;
  }
  const rv = Math.abs(x - Math.sin(z * 0.14) * 9);
  return 0.9 - 1.5 * (1 - smooth(3, 7, rv)) + n * 0.25 + Math.sin(x * 0.9 + z * 0.7) * 0.12;
}
function tileColor(kind, x, z, h) {
  if (kind === 2 && h > 17) return [0.92, 0.93, 0.95];
  if (kind === 2 && h > 7) return [0.47, 0.46, 0.43];
  if (kind === 3) {
    const rv = Math.abs(x - Math.sin(z * 0.14) * 9);
    if (rv < 12) return [0.35 + Math.sin(x * 2 + z) * 0.03, 0.39, 0.22];
  }
  if (kind === 0 && Math.abs(x) < 20 && Math.abs(z) < 20 && Math.floor((x + 40) / 9 + Math.floor((z + 40) / 11)) % 3 === 0) return [0.72, 0.64, 0.33];
  return [0.32 + Math.sin(x * 0.3) * 0.02, 0.48, 0.19];
}
function buildTile(kind) {
  const g = new THREE.Group();
  const N = 56, S = 50;
  const geo = new THREE.PlaneGeometry(S, S, N, N).rotateX(-Math.PI / 2);
  const pos = geo.attributes.position;
  const col = [];
  for (let i = 0; i < pos.count; i++) {
    const x = pos.getX(i), z = pos.getZ(i);
    const h = tileHeight(kind, x, z);
    pos.setY(i, h);
    col.push(...tileColor(kind, x, z, h));
  }
  geo.setAttribute("color", new THREE.Float32BufferAttribute(col, 3));
  geo.computeVertexNormals();
  mesh(geo, new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.95, flatShading: kind === 2 }), g);
  // earth skirt
  const sk = mesh(new THREE.BoxGeometry(S, 7, S), mat(0x5a4330), g);
  sk.position.y = -3.4;
  const sk2 = mesh(new THREE.BoxGeometry(S + 0.02, 2.5, S + 0.02), mat(0x7a5a3a), g);
  sk2.position.y = -1.0;
  const sk3 = mesh(new THREE.BoxGeometry(S + 0.04, 2.2, S + 0.04), mat(0x8a8478), g);
  sk3.position.y = -5.8;
  // water
  if (kind === 1 || kind === 3) {
    const w = new THREE.Mesh(new THREE.PlaneGeometry(S - 0.05, S - 0.05).rotateX(-Math.PI / 2), waterMaterial(0x3c6a74));
    w.position.y = kind === 3 ? 0.4 : 0.35;
    g.add(w);
    g.userData.water = w;
  }
  // trees
  const R = mulberry32(kind * 31 + 5);
  const tg = new THREE.ConeGeometry(0.9, 2.8, 6).translate(0, 1.8, 0);
  const tm = mat(0x2f5a28, { flatShading: true });
  for (let i = 0; i < (kind === 2 ? 26 : 34); i++) {
    const x = (R() - 0.5) * S * 0.92, z = (R() - 0.5) * S * 0.92;
    const h = tileHeight(kind, x, z);
    if (kind === 2 && h > 9) continue;
    if (kind === 1 && Math.hypot(x + 3, z + 2) < 14) continue;
    if (kind === 0 && Math.abs(x) < 20 && Math.abs(z) < 20) continue;
    if (kind === 3 && Math.abs(x - Math.sin(z * 0.14) * 9) < 8) continue;
    const t = mesh(tg, tm, g);
    t.position.set(x, h - 0.2, z);
    t.scale.setScalar(0.8 + R() * 0.6);
  }
  if (kind === 3) {
    // reeds
    const rg = new THREE.CylinderGeometry(0.03, 0.05, 1.2, 3).translate(0, 0.6, 0);
    const rm = mat(0x7a8a3a);
    for (let i = 0; i < 160; i++) {
      const z = (R() - 0.5) * S * 0.95;
      const x = Math.sin(z * 0.14) * 9 + (R() - 0.5) * 18;
      const r = mesh(rg, rm, g, false);
      r.position.set(x, 0.2, z);
      r.rotation.z = (R() - 0.5) * 0.4;
    }
  }
  if (kind === 0) {
    // small hamlet
    for (let i = 0; i < 5; i++) {
      const hb = mesh(baseGeo(new THREE.BoxGeometry(2.2, 1.6, 3)), mat(0xd8c8a8), g);
      hb.position.set(12 + (i % 3) * 3.4, 1.0, -14 + Math.floor(i / 3) * 4.5);
      const hr = mesh(gableGeo(2.2, 3, 1.3, 0.15), mat(0x9a7c48), g);
      hr.position.set(12 + (i % 3) * 3.4, 2.6, -14 + Math.floor(i / 3) * 4.5);
    }
  }
  const water = g.userData.water;
  if (water) g.remove(water);
  mergeStatic(g);
  if (water) g.add(water);
  return g;
}

export function buildSiteTiles(scene) {
  const root = new THREE.Group();
  root.position.copy(D1);
  scene.add(root);
  const tiles = TILE_X.map((x, i) => {
    const t = buildTile(i);
    t.position.x = x;
    root.add(t);
    return t;
  });
  // table / base plinth
  const base = mesh(new THREE.BoxGeometry(260, 2, 90), woodMaterial(0x4a3222), root);
  base.position.y = -8.2;
  // highlight rings (red / green)
  const ringGeo = new THREE.RingGeometry(26.3, 27.6, 4, 1, Math.PI / 4).rotateX(-Math.PI / 2);
  const rings = TILE_X.map((x) => {
    const r = new THREE.Mesh(ringGeo, new THREE.MeshBasicMaterial({ color: 0xd94a3a, transparent: true, opacity: 0 }));
    r.position.set(x, 0.3 - 6.9 + 7.0, 0);
    r.position.y = -6.8;
    r.scale.set(1.36, 1, 1.36);
    root.add(r);
    return r;
  });
  // flag on chosen hill
  const flag = new THREE.Group();
  const pole = mesh(new THREE.CylinderGeometry(0.12, 0.12, 6, 6), mat(0x3a2a1a), flag);
  pole.position.y = 3;
  const cloth = mesh(new THREE.PlaneGeometry(3, 1.8), new THREE.MeshStandardMaterial({ color: 0x1f3f8a, side: THREE.DoubleSide }), flag);
  cloth.position.set(1.5, 5.1, 0);
  flag.position.set(TILE_X[1] - 3, tileHeight(1, -3, -2), -2);
  root.add(flag);
  function apply(S, t) {
    rings.forEach((r, i) => {
      r.material.opacity = S.tileRing[i] || 0;
      r.material.color.set(S.tileGood === i ? 0x5fbf4a : 0xd94a3a);
      r.visible = r.material.opacity > 0.01;
    });
    flag.visible = S.siteFlag > 0;
    flag.scale.setScalar(Math.max(0.001, S.siteFlag));
    cloth.rotation.y = Math.sin(t * 3) * 0.2;
    tiles.forEach((tl) => tl.userData.water && (tl.userData.water.material.userData.uniforms.uTime.value = t));
  }
  return { root, apply };
}

// ---------------- D2 : soil section (foundations + well) ----------------
export function buildSoilSection(scene) {
  const root = new THREE.Group();
  root.position.copy(D2);
  scene.add(root);
  const Z = 14; // depth of the block (z)
  const layers = [
    { name: "top", y0: -1.4, y1: 0, color: 0x4a3524 },
    { name: "clay", y0: -7.5, y1: -1.4, color: 0xa08560 },
    { name: "compact", y0: -12.5, y1: -7.5, color: 0x8b8472 },
    { name: "aquifer", y0: -15.5, y1: -12.5, color: 0x6f7f86 },
    { name: "rock", y0: -20, y1: -15.5, color: 0x77736c },
  ];
  const sideMats = layers.map((l) => {
    const m = new THREE.MeshStandardMaterial({ color: l.color, roughness: 1 });
    m.onBeforeCompile = (sh) => {
      sh.vertexShader = sh.vertexShader.replace("#include <common>", "#include <common>\nvarying vec3 vLP2;").replace("#include <begin_vertex>", "#include <begin_vertex>\n vLP2 = (modelMatrix*vec4(position,1.0)).xyz;");
      sh.fragmentShader = sh.fragmentShader
        .replace("#include <common>", "#include <common>\nvarying vec3 vLP2; float sh2(vec2 p){return fract(sin(dot(p,vec2(12.9898,78.233)))*43758.5453);}")
        .replace("#include <color_fragment>", "#include <color_fragment>\n { vec2 c = floor(vLP2.xy*vec2(3.0,4.0)+vLP2.z); float s = sh2(c); diffuseColor.rgb *= 0.85 + s*0.25; if (s>0.93) diffuseColor.rgb *= 0.6; }");
    };
    m.customProgramCacheKey = () => "soil" + l.color;
    return m;
  });
  const W = 40;
  const blocks = [];
  // left & right fixed columns, centre column adjustable (excavation)
  layers.forEach((l, i) => {
    for (const side of [-1, 1]) {
      const b = mesh(new THREE.BoxGeometry(1, 1, Z), sideMats[i], root);
      b.userData = { side, l };
      blocks.push(b);
    }
    const c = mesh(new THREE.BoxGeometry(1, 1, Z), sideMats[i], root);
    c.userData = { side: 0, l };
    blocks.push(c);
  });
  // grass top
  const grass = mesh(new THREE.BoxGeometry(W, 0.25, Z), mat(0x4e7a2e), root);
  grass.position.y = 0.1;
  // trench void (dark back) visible when excavated
  const voidBack = new THREE.Mesh(new THREE.PlaneGeometry(1, 1), mat(0x2b1f15));
  root.add(voidBack);
  // footing (stepped)
  const footStone = stoneMaterial(0x9d9480, { course: 0.7, len: 1.4 });
  const footing = new THREE.Group();
  const f1 = mesh(baseGeo(new THREE.BoxGeometry(9, 2.5, Z - 0.2)), footStone, footing);
  f1.position.y = -7.6;
  const f2 = mesh(baseGeo(new THREE.BoxGeometry(7, 2.5, Z - 0.2)), footStone, footing);
  f2.position.y = -5.1;
  const f3 = mesh(baseGeo(new THREE.BoxGeometry(5.6, 2.6, Z - 0.2)), footStone, footing);
  f3.position.y = -2.6;
  root.add(footing);
  // shallow footing for the "problem" version
  const shallow = mesh(baseGeo(new THREE.BoxGeometry(5.4, 0.8, Z - 0.2)), footStone, root);
  // wall above
  const wallMat = stoneMaterial(0xbdb29c);
  const wall = new THREE.Group();
  const wm = mesh(baseGeo(new THREE.BoxGeometry(4.6, 9, Z - 1)), wallMat, wall);
  root.add(wall);
  // cracks on the wall front face
  const cracks = new THREE.Group();
  for (let k = 0; k < 3; k++) {
    let x = -1.2 + k * 1.2, y = 8.5 - k * 1.5;
    for (let i = 0; i < 9; i++) {
      const nx = x + (hash(i * 3.3 + k) - 0.5) * 0.9, ny = y - 0.8;
      const len = Math.hypot(nx - x, ny - y);
      const s = new THREE.Mesh(new THREE.BoxGeometry(0.07, len + 0.04, 0.04), black);
      s.position.set((x + nx) / 2, (y + ny) / 2, (Z - 1) / 2 + 0.02);
      s.rotation.z = -Math.atan2(nx - x, -(ny - y));
      s.userData.k = (k * 9 + i) / 27;
      cracks.add(s);
      x = nx;
      y = ny;
    }
  }
  wall.add(cracks);
  // diggers in the trench
  const diggers = [0, 1, 2].map((i) => {
    const p = makePerson("worker", 200 + i, { tool: i === 1 ? "pick" : "shovel" });
    root.add(p);
    return p;
  });
  // weight arrows (cones) under the wall
  const arrows = new THREE.Group();
  for (let i = 0; i < 5; i++) {
    const a = new THREE.Group();
    const shaft = mesh(new THREE.CylinderGeometry(0.12, 0.12, 2.0, 6), new THREE.MeshBasicMaterial({ color: 0xf2c14e }), a, false);
    shaft.position.y = 1.2;
    const head = mesh(new THREE.ConeGeometry(0.4, 0.8, 8), new THREE.MeshBasicMaterial({ color: 0xf2c14e }), a, false);
    head.rotation.x = Math.PI;
    a.position.set(-3.6 + i * 1.8, -9.8, Z / 2 + 0.3);
    arrows.add(a);
  }
  root.add(arrows);
  // well shaft (lining, water, bucket)
  const well = new THREE.Group();
  const lining = stoneMaterial(0xa89e88, { course: 0.4, len: 0.7 });
  for (const sx of [-1.75, 1.75]) {
    const l = mesh(baseGeo(new THREE.BoxGeometry(0.5, 16.2, Z - 0.4)), lining, well);
    l.position.set(sx, -15.6, 0);
  }
  const curb = mesh(baseGeo(new THREE.CylinderGeometry(2.0, 2.0, 1.1, 20, 1, true)), lining, well);
  curb.position.y = 0.2;
  const wwater = new THREE.Mesh(new THREE.BoxGeometry(3.0, 2.4, Z - 0.6), new THREE.MeshStandardMaterial({ color: 0x3b6d86, roughness: 0.2, transparent: true, opacity: 0.85 }));
  wwater.position.y = -14.6;
  well.add(wwater);
  for (const sx of [-1.7, 1.7]) {
    const post = mesh(new THREE.BoxGeometry(0.25, 3.2, 0.25), woodMaterial(0x7a5534), well);
    post.position.set(sx, 2.2, 0);
  }
  const axle = mesh(new THREE.CylinderGeometry(0.16, 0.16, 3.6, 8).rotateZ(Math.PI / 2), woodMaterial(0x5a3d25), well);
  axle.position.y = 3.4;
  const rope = mesh(new THREE.CylinderGeometry(0.03, 0.03, 1, 4).translate(0, -0.5, 0), mat(0xd8c8a0), well, false);
  rope.position.y = 3.4;
  const bucket = mesh(new THREE.CylinderGeometry(0.35, 0.28, 0.55, 10), woodMaterial(0x6b4a2c), well);
  root.add(well);
  const wellWorker = makePerson("villager", 301, { tool: "none" });
  root.add(wellWorker);

  function setBox(b, x0, x1, y0, y1) {
    const w = Math.max(0.001, x1 - x0), h = Math.max(0.001, y1 - y0);
    b.scale.set(w, h, 1);
    b.position.set((x0 + x1) / 2, (y0 + y1) / 2, 0);
    b.visible = x1 - x0 > 0.01 && y1 - y0 > 0.01;
  }
  function apply(S, t) {
    // S.soilMode: 0 = problem (shallow footing), 1 = solution (deep), 2 = well
    const mode = S.soilMode;
    const half = mode === 2 ? 1.5 : 4.5;
    const dig = mode === 1 ? S.digDepth : mode === 2 ? 16 : 0; // excavation depth (m)
    for (const b of blocks) {
      const { side, l } = b.userData;
      if (side === -1) setBox(b, -W / 2, -half, l.y0, l.y1);
      else if (side === 1) setBox(b, half, W / 2, l.y0, l.y1);
      else setBox(b, -half, half, l.y0, Math.min(l.y1, -dig));
    }
    voidBack.visible = dig > 0.05;
    voidBack.scale.set(half * 2, dig, 1);
    voidBack.position.set(0, -dig / 2, -Z / 2 + 0.2);
    grass.scale.x = 1;
    // footing growth
    footing.visible = mode === 1 && S.footing2 > 0;
    footing.children.forEach((f, i) => {
      const p = clamp(S.footing2 * 3 - i);
      f.scale.y = Math.max(0.001, p);
      f.visible = p > 0.001;
    });
    shallow.visible = mode === 0;
    shallow.position.y = -0.8 - S.sink;
    // wall
    wall.visible = mode !== 2 && S.soilWall > 0;
    wm.scale.y = Math.max(0.001, S.soilWall);
    if (mode === 0) {
      wall.position.set(0, -S.sink, 0);
      wall.rotation.z = -S.sink * 0.05;
    } else {
      wall.position.set(0, 0, 0);
      wall.rotation.z = 0;
    }
    cracks.children.forEach((c) => (c.visible = mode === 0 && c.userData.k < S.cracks));
    // arrows
    arrows.visible = S.loadArrows > 0;
    arrows.children.forEach((a, i) => {
      a.scale.setScalar(Math.max(0.001, S.loadArrows));
      const spread = mode === 1 ? 1.25 : 0.75;
      a.position.x = (-3.6 + i * 1.8) * spread;
      a.position.y = (mode === 1 ? -9.4 : -2.2 - S.sink) - ((t * 1.5 + i * 0.2) % 1) * 0.8;
    });
    // diggers
    diggers.forEach((p, i) => {
      p.visible = mode === 1 && S.diggers > 0;
      const y = -Math.min(dig, 7.5);
      p.position.set(-2.4 + i * 2.4, y, 2.5 + i * 0.8);
      p.rotation.y = i === 1 ? 0.3 : -0.4 + i * 0.4;
      pose(p, i === 1 ? "pick" : "dig", t * 4.5 + i * 1.7);
    });
    // well
    well.visible = mode === 2;
    wellWorker.visible = mode === 2;
    if (mode === 2) {
      const cyc = (t * 0.22) % 1;
      const depth = cyc < 0.5 ? cyc * 2 : 2 - cyc * 2; // down then up
      const L = lerp(1.2, 17.6, depth);
      rope.scale.y = L;
      bucket.position.set(0, 3.4 - L - 0.2, 0);
      axle.rotation.x = -depth * 20;
      wellWorker.position.set(2.6, 0.2, 1.5);
      wellWorker.rotation.y = -Math.PI / 2;
      pose(wellWorker, "pull", t * 3);
    }
  }
  return { root, apply };
}

// ---------------- D3 : wall cross-section ----------------
export function buildWallSection(scene) {
  const root = new THREE.Group();
  root.position.copy(D3);
  scene.add(root);
  const ground = mesh(new THREE.BoxGeometry(46, 1.2, 30), mat(0x6a5a40), root);
  ground.position.y = -0.6;
  const grass = mesh(new THREE.BoxGeometry(46, 0.1, 30), mat(0x55743a), root);
  grass.position.y = 0.02;
  const COURSES = 12, CH = 0.62, LEN = 9;
  // --- good wall: two facings + rubble core ---
  const good = new THREE.Group();
  root.add(good);
  const faceMat = stoneMaterial(0xc8bea6, { course: 10, len: 10, tint: 0.18 });
  const coreMat = mat(0x8f8778);
  const rubbleMat = mat(0x8a8070, { flatShading: true });
  const mortarMat = mat(0xcfc6b4);
  const goodBlocks = [];
  const T = 3.4; // wall thickness
  for (let c = 0; c < COURSES; c++) {
    let u = -LEN / 2 - (c % 2) * 0.55;
    let k = 0;
    while (u < LEN / 2) {
      const l = 1.0 + hash(c * 17 + k) * 0.5;
      const x0 = Math.max(u, -LEN / 2), x1 = Math.min(u + l, LEN / 2);
      for (const side of [-1, 1]) {
        const d = 0.55 + hash(c * 7 + k * 3 + side) * 0.25;
        const b = mesh(new THREE.BoxGeometry(x1 - x0 - 0.05, CH - 0.05, d), faceMat, good);
        b.position.set((x0 + x1) / 2, c * CH + CH / 2, side * (T / 2 - d / 2));
        b.userData = { c, kind: "face", x: (x0 + x1) / 2 };
        goodBlocks.push(b);
      }
      u += l;
      k++;
    }
    // core: mortar slab + rubble stones
    const core = mesh(new THREE.BoxGeometry(LEN - 0.02, CH, T - 1.5), mortarMat, good);
    core.position.set(0, c * CH + CH / 2, 0);
    core.userData = { c, kind: "core" };
    goodBlocks.push(core);
    for (let r = 0; r < 9; r++) {
      const s = mesh(new THREE.DodecahedronGeometry(0.22 + hash(c * 31 + r) * 0.12, 0), rubbleMat, good);
      s.position.set(-LEN / 2 + 0.3 + hash(c * 13 + r) * 0.4 * 0 + 0.15, c * CH + CH / 2 + 0.05, (hash(c * 11 + r * 5) - 0.5) * (T - 2.0));
      s.position.x = -LEN / 2 + 0.25;
      s.position.z = (hash(c * 11 + r * 5) - 0.5) * (T - 2.0);
      s.position.y = c * CH + 0.15 + hash(r * 3 + c) * 0.35;
      s.rotation.set(hash(r), hash(r + 1), hash(r + 2));
      s.userData = { c, kind: "rubble" };
      goodBlocks.push(s);
    }
  }
  // buttress against the good wall's back face
  const buttress = new THREE.Group();
  {
    const b1 = mesh(baseGeo(new THREE.BoxGeometry(2.4, 7.4, 2.4)), stoneMaterial(0xc8bea6), buttress);
    b1.position.set(2.4, 0, -T / 2 - 1.2);
    const b2 = mesh(baseGeo(new THREE.BoxGeometry(2.4, 3.2, 1.4)), stoneMaterial(0xc8bea6), buttress);
    b2.position.set(2.4, 0, -T / 2 - 2.9);
  }
  good.add(buttress);
  // thickness marker
  const marker = new THREE.Group();
  {
    const bar = mesh(new THREE.BoxGeometry(0.08, 0.08, T), new THREE.MeshBasicMaterial({ color: 0xf2c14e }), marker, false);
    for (const s of [-1, 1]) {
      const tick = mesh(new THREE.BoxGeometry(0.08, 0.6, 0.08), new THREE.MeshBasicMaterial({ color: 0xf2c14e }), marker, false);
      tick.position.z = (s * T) / 2;
    }
    marker.position.set(-LEN / 2 - 0.4, COURSES * CH + 0.5, 0);
  }
  good.add(marker);
  // --- bad wall: thin, aligned joints ---
  const bad = new THREE.Group();
  root.add(bad);
  const pivot = new THREE.Group();
  pivot.position.set(0, 0, 0.6);
  bad.add(pivot);
  const badBlocks = [];
  const Tb = 1.2;
  for (let c = 0; c < COURSES; c++) {
    for (let k = 0; k < 6; k++) {
      const l = LEN / 6;
      const b = mesh(new THREE.BoxGeometry(l - 0.06, CH - 0.05, Tb), faceMat, pivot);
      b.position.set(-LEN / 2 + l * (k + 0.5), c * CH + CH / 2, -Tb / 2);
      b.userData = { c, k, x0: b.position.x, y0: b.position.y };
      badBlocks.push(b);
    }
  }
  const badCracks = new THREE.Group();
  for (let i = 0; i < 12; i++) {
    const s = new THREE.Mesh(new THREE.BoxGeometry(0.09, CH, 0.04), black);
    s.position.set(-LEN / 2 + (LEN / 6) * 3, i * CH + CH / 2, 0.03);
    s.userData.k = i / 12;
    badCracks.add(s);
  }
  for (let i = 0; i < 6; i++) {
    const s = new THREE.Mesh(new THREE.BoxGeometry(0.08, CH * 1.2, 0.04), black);
    s.position.set(-LEN / 2 + (LEN / 6) * 1 + 0.2 * i, 4 + i * 0.5, 0.03);
    s.rotation.z = 0.5;
    s.userData.k = 0.5 + i / 12;
    badCracks.add(s);
  }
  pivot.add(badCracks);
  // masons
  const masons = [0, 1].map((i) => {
    const p = makePerson("mason", 400 + i, { tool: "hammer" });
    root.add(p);
    return p;
  });
  function apply(S, t) {
    good.visible = S.wallMode === 0;
    bad.visible = S.wallMode === 1;
    if (S.wallMode === 0) {
      const build = S.wallBuild * COURSES; // courses completed
      for (const b of goodBlocks) {
        const u = b.userData;
        let p;
        if (u.kind === "face") p = clamp((build - u.c) * 2);
        else p = clamp((build - u.c) * 2 - 1);
        b.visible = p > 0.01;
        if (u.kind === "face") b.scale.y = Math.max(0.01, p);
        if (u.kind === "rubble") b.scale.setScalar(Math.max(0.01, p));
        if (u.kind === "core") b.scale.y = Math.max(0.01, p);
      }
      buttress.visible = S.wbuttress > 0;
      buttress.scale.y = Math.max(0.001, S.wbuttress);
      marker.visible = S.wmarker > 0;
      marker.scale.z = Math.max(0.001, S.wmarker);
      // rubble moved to fill along the length
      let i = 0;
      for (const b of goodBlocks)
        if (b.userData.kind === "rubble") {
          b.position.x = i % 3 === 0 ? LEN / 2 - 0.25 : -LEN / 2 + 0.6 + ((i * 0.97) % (LEN - 1.2));
          i++;
        }
    } else {
      pivot.rotation.x = -S.lean * 0.14;
      for (const b of badBlocks) {
        const u = b.userData;
        b.position.x = u.x0 + (u.k >= 3 ? 1 : -1) * S.lean * 0.04 * u.c;
        b.position.y = u.y0 - (u.k >= 3 ? S.lean * 0.03 * u.c : 0);
      }
      badCracks.children.forEach((c) => (c.visible = c.userData.k < S.wcracks));
    }
    masons.forEach((p, i) => {
      p.visible = S.wallMode === 0 && S.wallBuild > 0 && S.wallBuild < 1;
      const h = Math.min(COURSES, S.wallBuild * COURSES) * CH;
      p.position.set(-2 + i * 3.2, h, i ? 0.9 : -0.6);
      p.rotation.y = i ? -2.4 : 0.6;
      pose(p, "hammer", t * 5 + i * 2);
    });
  }
  return { root, apply, T, LEN, H: COURSES * CH };
}

// ---------------- D4 : storeroom (cellar) ----------------
export function buildStoreroom(scene) {
  const root = new THREE.Group();
  root.position.copy(D4);
  scene.add(root);
  const st = stoneMaterial(0x9a907c);
  const floor = mesh(new THREE.BoxGeometry(18, 0.4, 12), mat(0x6a5a48), root);
  floor.position.y = -0.2;
  const back = mesh(new THREE.BoxGeometry(18, 7, 0.8), st, root);
  back.position.set(0, 3.5, -6);
  const left = mesh(new THREE.BoxGeometry(0.8, 7, 12), st, root);
  left.position.set(-9, 3.5, 0);
  for (let i = 0; i < 4; i++) {
    const jo = mesh(new THREE.BoxGeometry(0.35, 0.4, 12), woodMaterial(0x5a3d25), root);
    jo.position.set(-7 + i * 4.6, 6.8, 0);
  }
  const bg = new THREE.CylinderGeometry(0.55, 0.55, 1.3, 12);
  const bm = woodMaterial(0x6b4a2c);
  const band = mat(0x3a3a3a, { metalness: 0.4 });
  const barrels = [];
  for (let i = 0; i < 24; i++) {
    const b = new THREE.Group();
    mesh(bg, bm, b);
    const bd = mesh(new THREE.CylinderGeometry(0.57, 0.57, 0.1, 12), band, b);
    bd.position.y = 0.35;
    const bd2 = bd.clone();
    bd2.position.y = -0.35;
    b.add(bd2);
    const row = Math.floor(i / 8), col = i % 8;
    b.position.set(-7.6 + col * 1.2, 0.65 + (row === 2 ? 1.25 : 0), -4.6 + (row === 1 ? 1.2 : 0) + (row === 2 ? 0.6 : 0));
    root.add(b);
    barrels.push(b);
  }
  const sg = new THREE.SphereGeometry(0.55, 9, 7).scale(1, 0.75, 0.8);
  const sacks = [];
  for (let i = 0; i < 30; i++) {
    const s = mesh(sg, mat(0xcbb68a), root);
    const row = Math.floor(i / 10), col = i % 10;
    s.position.set(-7.8 + row * 1.0 + (col % 2) * 0.3, 0.42 + (col >= 5 ? 0.8 : 0), -1 + (col % 5) * 1.05);
    s.rotation.y = hash(i) * 2;
    sacks.push(s);
  }
  // hanging hams & fish
  const beam = mesh(new THREE.BoxGeometry(14, 0.3, 0.3), woodMaterial(0x5a3d25), root);
  beam.position.set(2, 5.2, -3);
  const hams = [];
  for (let i = 0; i < 10; i++) {
    const h = mesh(new THREE.SphereGeometry(0.35, 8, 6).scale(0.8, 1.4, 0.8), mat(i % 2 ? 0x8a4a3a : 0xa86a4a), root);
    h.position.set(-3.5 + i * 1.2, 4.3, -3);
    hams.push(h);
  }
  // shelves with jars
  const shelf = mesh(new THREE.BoxGeometry(6, 0.15, 1.2), woodMaterial(0x7a5534), root);
  shelf.position.set(5, 2.2, -5.2);
  const shelf2 = shelf.clone();
  shelf2.position.y = 3.6;
  root.add(shelf2);
  const jars = [];
  for (let i = 0; i < 14; i++) {
    const j = mesh(new THREE.CylinderGeometry(0.22, 0.28, 0.6, 8), mat(0x9a5a3a), root);
    j.position.set(2.4 + (i % 7) * 0.8, i < 7 ? 2.6 : 4.0, -5.2);
    jars.push(j);
  }
  // extension wall (the cellar being enlarged)
  const ext = mesh(baseGeo(new THREE.BoxGeometry(0.8, 7, 12)), stoneMaterial(0xc8bea6), root);
  ext.position.set(9, 0, 0);
  const keeper = makePerson("villager", 512, { tool: "sack" });
  root.add(keeper);
  const scribe = makePerson("architect", 513, { tool: "staff" });
  root.add(scribe);
  function apply(S, t) {
    const n = S.stores; // 0..1 fullness
    barrels.forEach((b, i) => (b.visible = i < n * barrels.length));
    sacks.forEach((b, i) => (b.visible = i < n * sacks.length));
    hams.forEach((b, i) => {
      b.visible = i < n * hams.length;
      b.rotation.z = Math.sin(t * 1.3 + i) * 0.06;
    });
    jars.forEach((b, i) => (b.visible = i < n * jars.length));
    ext.visible = S.cellarExt > 0;
    ext.scale.y = Math.max(0.001, S.cellarExt);
    const w = (t * 0.25) % 1;
    keeper.position.set(lerp(4, -4, w), 0, 2.4);
    keeper.rotation.y = -Math.PI / 2;
    pose(keeper, "carry", t * 6);
    scribe.position.set(3.5, 0, 0.6);
    scribe.rotation.y = -2.2;
    pose(scribe, "talk", t * 2);
  }
  return { root, apply };
}

// ---------------- D5 : roof frame (charpente) ----------------
export function buildRoofFrame(scene) {
  const root = new THREE.Group();
  root.position.copy(D5);
  scene.add(root);
  const st = stoneMaterial(0xbdb29c);
  for (const sz of [-1, 1]) {
    const w = mesh(baseGeo(new THREE.BoxGeometry(16, 5, 1.2)), st, root);
    w.position.set(0, -5, sz * 4.4);
  }
  const wood = woodMaterial(0x8a6440);
  const rot = woodMaterial(0x3a3226);
  const fresh = woodMaterial(0xc89a62);
  const span = 8.8, h = 4.6;
  const rafterLen = Math.hypot(span / 2, h);
  const ang = Math.atan2(h, span / 2);
  let bad, good;
  for (let i = 0; i < 6; i++) {
    const x = -6.5 + i * 2.6;
    const tie = mesh(new THREE.BoxGeometry(0.35, 0.4, span + 0.6), wood, root);
    tie.position.set(x, 0.2, 0);
    for (const s of [-1, 1]) {
      const r = mesh(new THREE.BoxGeometry(0.3, 0.35, rafterLen), i === 3 && s === 1 ? rot : wood, root);
      r.position.set(x, h / 2 + 0.2, (s * span) / 4);
      r.rotation.x = s * ang;
      if (i === 3 && s === 1) bad = r;
    }
    const king = mesh(new THREE.BoxGeometry(0.3, h, 0.3), wood, root);
    king.position.set(x, h / 2 + 0.2, 0);
  }
  // purlins & ridge
  for (const zz of [-2.2, 0, 2.2]) {
    const p = mesh(new THREE.BoxGeometry(15, 0.25, 0.25), wood, root);
    p.position.set(0, zz === 0 ? h + 0.4 : h / 2 + 0.55, zz);
  }
  good = mesh(new THREE.BoxGeometry(0.3, 0.35, rafterLen), fresh, root);
  good.rotation.x = ang;
  const carp = [0, 1].map((i) => {
    const p = makePerson("worker", 600 + i, { tool: "hammer" });
    root.add(p);
    return p;
  });
  function apply(S, t) {
    const r = S.beamSwap; // 0..1
    const x = -6.5 + 3 * 2.6;
    bad.visible = r < 0.5;
    bad.position.set(x + clamp(r * 2) * 0, h / 2 + 0.2 + clamp(r * 2) * 3.5, span / 4 + clamp(r * 2) * 2);
    good.visible = r >= 0.45;
    const k = clamp((r - 0.5) * 2);
    good.position.set(x, h / 2 + 0.2 + (1 - k) * 3.5, span / 4 + (1 - k) * 2);
    carp.forEach((p, i) => {
      p.position.set(x + (i ? 1.4 : -1.4), 0.4, 1.2 + i * 1.6);
      p.rotation.y = i ? -1.9 : 1.6;
      pose(p, r > 0.55 ? "hammer" : "pull", t * 4.5 + i);
    });
  }
  return { root, apply };
}
