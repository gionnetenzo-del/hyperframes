import { THREE, clamp, smooth, lerp, hash, mulberry32, mat, waterMaterial, stoneMaterial, woodMaterial, roofMaterial, gableGeo, baseGeo, mesh, mergeStatic } from "./lib.js";

export const PLATEAU = 14;
export const RIVER_Y = -1.6;

const riverX = (z) => 205 + 38 * Math.sin(z / 140) + 12 * Math.sin(z / 47);

function noise(x, z) {
  return (
    Math.sin(x * 0.013 + 1.3) * Math.cos(z * 0.011 - 0.4) * 1.1 +
    Math.sin(x * 0.031 + z * 0.027) * 0.45 +
    Math.sin(x * 0.071 - z * 0.053 + 2.0) * 0.18
  );
}

// square ring distance for the moat (rounded square, half-size 44)
export function moatDist(x, z) {
  const hs = 40, rr = 8;
  const qx = Math.abs(x) - hs, qz = Math.abs(z) - hs;
  const ox = Math.max(qx, 0), oz = Math.max(qz, 0);
  return Math.hypot(ox, oz) + Math.min(Math.max(qx, qz), 0) - rr + 4; // ~ 0 at ring centre (half-size ~44)
}
export const MOAT_HALF = 3.9; // half width of the ditch

// moat dig progress: angle param starting at the gate (south, +z) going clockwise
function moatAngle01(x, z) {
  let a = Math.atan2(x, z); // 0 at +z
  if (a < 0) a += Math.PI * 2;
  return a / (Math.PI * 2);
}

export function baseHeight(x, z) {
  const r = Math.hypot(x, z);
  const hillP = 1 - smooth(74, 178, r);
  // slightly elongated plateau, gentle slopes
  let h = PLATEAU * Math.pow(hillP, 1.15);
  h += noise(x, z) * smooth(70, 130, r) * 1.4;
  // gentle undulating plain
  h += Math.sin(x * 0.004 + 0.7) * Math.cos(z * 0.005) * 2.0 * smooth(160, 300, r);
  // river channel
  const d = Math.abs(x - riverX(z));
  h -= 4.6 * (1 - smooth(13, 34, d)) * smooth(60, 120, r);
  // marsh flats near river (slightly lower, south-east)
  // quarry outcrop west
  const qd = Math.hypot(x + 225, z + 70);
  h += 16 * (1 - smooth(10, 60, qd));
  // distant mountains ring
  const a = Math.atan2(z, x);
  const m = smooth(520, 900, r);
  h += m * (70 + 45 * Math.sin(a * 5 + 1.2) + 25 * Math.sin(a * 13 + 0.3) + 12 * Math.sin(a * 29));
  return h;
}

export function heightAt(x, z, moat = 0) {
  let h = baseHeight(x, z);
  if (moat > 0) {
    const md = Math.abs(moatDist(x, z));
    if (md < MOAT_HALF + 1.5) {
      const ang = moatAngle01(x, z);
      const dig = clamp((moat - ang) * 8 + (moat >= 1 ? 1 : 0));
      const prof = 1 - smooth(MOAT_HALF - 1.6, MOAT_HALF + 0.6, md);
      h -= 5.5 * prof * clamp(dig);
    }
  }
  return h;
}

// road polylines (x,z)
export const MAIN_ROAD = [
  [0, 52], [4, 80], [14, 108], [30, 136], [58, 160], [96, 172], [140, 168], [178, 150],
];
export const QUARRY_ROAD = [
  [-200, -52], [-182, -36], [-160, -20], [-130, -6], [-104, 12], [-84, 34], [-68, 56], [-46, 70], [-22, 78], [4, 82],
];
function distToPolyline(x, z, pl) {
  let best = 1e9;
  for (let i = 0; i < pl.length - 1; i++) {
    const [ax, az] = pl[i], [bx, bz] = pl[i + 1];
    const vx = bx - ax, vz = bz - az;
    const t = clamp(((x - ax) * vx + (z - az) * vz) / (vx * vx + vz * vz));
    const dx = ax + vx * t - x, dz = az + vz * t - z;
    best = Math.min(best, Math.hypot(dx, dz));
  }
  return best;
}
export function polyPoint(pl, u) {
  // u in [0,1] by length
  const lens = [];
  let L = 0;
  for (let i = 0; i < pl.length - 1; i++) {
    const l = Math.hypot(pl[i + 1][0] - pl[i][0], pl[i + 1][1] - pl[i][1]);
    lens.push(l);
    L += l;
  }
  let d = clamp(u) * L;
  for (let i = 0; i < lens.length; i++) {
    if (d <= lens[i] || i === lens.length - 1) {
      const t = clamp(d / lens[i]);
      const x = lerp(pl[i][0], pl[i + 1][0], t), z = lerp(pl[i][1], pl[i + 1][1], t);
      return { x, z, dir: Math.atan2(pl[i + 1][0] - pl[i][0], pl[i + 1][1] - pl[i][1]), len: L };
    }
    d -= lens[i];
  }
  return { x: pl[0][0], z: pl[0][1], dir: 0, len: L };
}

// fields near the village
const FIELDS = [];
{
  const R = mulberry32(7);
  for (let i = 0; i < 26; i++) {
    const cx = 80 + R() * 150, cz = 190 + R() * 150;
    if (Math.abs(cx - riverX(cz)) < 40) continue;
    FIELDS.push({ cx, cz, w: 18 + R() * 26, d: 14 + R() * 30, rot: R() * 0.6 - 0.3, c: Math.floor(R() * 4) });
  }
  for (let i = 0; i < 16; i++) {
    const cx = -60 - R() * 170, cz = 150 + R() * 140;
    FIELDS.push({ cx, cz, w: 18 + R() * 26, d: 14 + R() * 30, rot: R() * 0.6 - 0.3, c: Math.floor(R() * 4) });
  }
}
const FIELD_COLS = [[0.78, 0.68, 0.33], [0.48, 0.58, 0.22], [0.45, 0.33, 0.2], [0.62, 0.66, 0.3]];
function fieldAt(x, z) {
  for (const f of FIELDS) {
    const c = Math.cos(f.rot), s = Math.sin(f.rot);
    const lx = (x - f.cx) * c - (z - f.cz) * s, lz = (x - f.cx) * s + (z - f.cz) * c;
    if (Math.abs(lx) < f.w / 2 && Math.abs(lz) < f.d / 2) {
      const stripe = Math.sin(lx * 1.6) * 0.04;
      const col = FIELD_COLS[f.c];
      return [col[0] + stripe, col[1] + stripe, col[2] + stripe];
    }
  }
  return null;
}

function groundColor(x, z, h) {
  const r = Math.hypot(x, z);
  const n = noise(x * 2.3, z * 2.1);
  let c = [0.3 + n * 0.03, 0.45 + n * 0.05, 0.17];
  // drier plateau
  if (r < 90) c = [0.36 + n * 0.02, 0.48 + n * 0.03, 0.2];
  // river banks: muddy marsh
  const dr = Math.abs(x - riverX(z));
  if (dr < 44) {
    const k = 1 - smooth(16, 44, dr);
    c = [lerp(c[0], 0.33, k), lerp(c[1], 0.36, k), lerp(c[2], 0.2, k)];
  }
  if (dr < 18) c = [0.36, 0.31, 0.22];
  const f = fieldAt(x, z);
  if (f) c = f;
  // roads
  const rd = Math.min(distToPolyline(x, z, MAIN_ROAD), 99);
  if (rd < 3.2) c = [0.47, 0.4, 0.3];
  // quarry rock
  const qd = Math.hypot(x + 225, z + 70);
  if (qd < 42) {
    const k = 1 - smooth(20, 42, qd);
    c = [lerp(c[0], 0.6, k), lerp(c[1], 0.57, k), lerp(c[2], 0.5, k)];
  }
  // mountains: rock & snow
  if (h > 40) {
    const k = smooth(40, 90, h);
    c = [lerp(c[0], 0.45, k), lerp(c[1], 0.46, k), lerp(c[2], 0.44, k)];
  }
  if (h > 120) {
    const k = smooth(120, 150, h);
    c = [lerp(c[0], 0.93, k), lerp(c[1], 0.94, k), lerp(c[2], 0.96, k)];
  }
  return c;
}

// non-uniform grid: dense near the castle
function gridCoord(u) {
  // u in [-1,1] -> metres; spacing ~1.6 m at centre, ~20 m at edges, extent 1500
  return 1500 * (0.78 * u * u * u + 0.22 * u) / 1.0 * Math.sign(1);
}

export function buildTerrain(scene) {
  const N = 330;
  const verts = (N + 1) * (N + 1);
  const pos = new Float32Array(verts * 3);
  const col = new Float32Array(verts * 3);
  const xs = [];
  for (let i = 0; i <= N; i++) xs.push(gridCoord((i / N) * 2 - 1));
  for (let j = 0; j <= N; j++)
    for (let i = 0; i <= N; i++) {
      const k = j * (N + 1) + i;
      const x = xs[i], z = xs[j];
      const h = baseHeight(x, z);
      pos[k * 3] = x;
      pos[k * 3 + 1] = h;
      pos[k * 3 + 2] = z;
      const c = groundColor(x, z, h);
      col[k * 3] = c[0];
      col[k * 3 + 1] = c[1];
      col[k * 3 + 2] = c[2];
    }
  const idx = [];
  for (let j = 0; j < N; j++)
    for (let i = 0; i < N; i++) {
      const a = j * (N + 1) + i, b = a + 1, c = a + N + 1, d = c + 1;
      idx.push(a, c, b, b, c, d);
    }
  const g = new THREE.BufferGeometry();
  g.setAttribute("position", new THREE.BufferAttribute(pos, 3));
  g.setAttribute("color", new THREE.BufferAttribute(col, 3));
  g.setIndex(idx);
  g.computeVertexNormals();
  const baseCol = col.slice();
  const m = new THREE.MeshLambertMaterial({ vertexColors: true });
  m.onBeforeCompile = (sh) => {
    sh.vertexShader = sh.vertexShader
      .replace("#include <common>", "#include <common>\nvarying vec3 vWP;")
      .replace("#include <worldpos_vertex>", "#include <worldpos_vertex>\n vWP = (modelMatrix * vec4(transformed,1.0)).xyz;");
    sh.fragmentShader = sh.fragmentShader
      .replace(
        "#include <common>",
        "#include <common>\nvarying vec3 vWP;\nfloat gh(vec2 p){return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453);}\nfloat gn(vec2 p){vec2 i=floor(p);vec2 f=fract(p);f=f*f*(3.0-2.0*f);return mix(mix(gh(i),gh(i+vec2(1,0)),f.x),mix(gh(i+vec2(0,1)),gh(i+vec2(1,1)),f.x),f.y);}",
      )
      .replace(
        "#include <color_fragment>",
        "#include <color_fragment>\n float gg = gn(vWP.xz*0.9)*0.5 + gn(vWP.xz*3.7)*0.3 + gn(vWP.xz*0.12)*0.6; diffuseColor.rgb *= 0.78 + gg*0.32;",
      );
  };
  m.customProgramCacheKey = () => "terrain";
  const terrain = new THREE.Mesh(g, m);
  terrain.receiveShadow = true;
  scene.add(terrain);

  // indices of vertices near the moat, for cheap re-carving
  const moatVerts = [];
  for (let k = 0; k < verts; k++) {
    const x = pos[k * 3], z = pos[k * 3 + 2];
    if (Math.abs(moatDist(x, z)) < MOAT_HALF + 2) moatVerts.push(k);
  }
  let lastMoat = -1;
  function setMoat(p) {
    const key = Math.round(p * 400) / 400;
    if (key === lastMoat) return;
    lastMoat = key;
    for (const k of moatVerts) {
      const x = pos[k * 3], z = pos[k * 3 + 2];
      const h = heightAt(x, z, key);
      const base = baseHeight(x, z);
      pos[k * 3 + 1] = h;
      const dug = clamp((base - h) / 2);
      col[k * 3] = lerp(baseCol[k * 3], 0.36, dug);
      col[k * 3 + 1] = lerp(baseCol[k * 3 + 1], 0.27, dug);
      col[k * 3 + 2] = lerp(baseCol[k * 3 + 2], 0.17, dug);
    }
    g.attributes.position.needsUpdate = true;
    g.attributes.color.needsUpdate = true;
    g.computeVertexNormals();
  }

  // river water
  const wm = waterMaterial(0x355f66);
  const water = new THREE.Mesh(new THREE.PlaneGeometry(3000, 3000).rotateX(-Math.PI / 2), wm);
  water.position.y = RIVER_Y;
  water.receiveShadow = true;
  scene.add(water);

  return { terrain, setMoat, water, waterMat: wm };
}

// ---------- roads as ribbons (quarry road can be mud or paved) ----------
export function buildRibbon(pl, width, material, lift = 0.12, moatFn = baseHeight) {
  const pts = [];
  const steps = 220;
  for (let i = 0; i <= steps; i++) pts.push(polyPoint(pl, i / steps));
  const pos = [], uv = [], idx = [];
  for (let i = 0; i <= steps; i++) {
    const p = pts[i];
    const nx = Math.cos(p.dir), nz = -Math.sin(p.dir);
    for (const s of [-1, 1]) {
      const x = p.x + nx * s * width / 2, z = p.z + nz * s * width / 2;
      pos.push(x, moatFn(x, z) + lift, z);
      uv.push((s + 1) / 2, (i / steps) * p.len / width);
    }
    if (i < steps) {
      const a = i * 2;
      idx.push(a, a + 2, a + 1, a + 1, a + 2, a + 3);
    }
  }
  const g = new THREE.BufferGeometry();
  g.setAttribute("position", new THREE.Float32BufferAttribute(pos, 3));
  g.setAttribute("uv", new THREE.Float32BufferAttribute(uv, 2));
  g.setIndex(idx);
  g.computeVertexNormals();
  const m = new THREE.Mesh(g, material);
  m.receiveShadow = true;
  return m;
}

// ---------- forests ----------
export function buildForest(scene) {
  const R = mulberry32(42);
  const conGeo = new THREE.ConeGeometry(2.6, 8, 7);
  conGeo.translate(0, 6.5, 0);
  const con2 = new THREE.ConeGeometry(2.0, 6, 7);
  con2.translate(0, 9.5, 0);
  const trunkGeo = new THREE.CylinderGeometry(0.3, 0.45, 3.2, 5);
  trunkGeo.translate(0, 1.6, 0);
  const blobGeo = new THREE.IcosahedronGeometry(3.6, 1);
  blobGeo.translate(0, 6.2, 0);
  const pts = [];
  const tries = 9000;
  for (let i = 0; i < tries && pts.length < 2600; i++) {
    const x = (R() * 2 - 1) * 650, z = (R() * 2 - 1) * 650;
    const r = Math.hypot(x, z);
    if (r < 165) continue;
    if (Math.abs(x - riverX(z)) < 30) continue;
    if (distToPolyline(x, z, MAIN_ROAD) < 10 || distToPolyline(x, z, QUARRY_ROAD) < 12) continue;
    if (fieldAt(x, z)) continue;
    if (Math.hypot(x - 150, z - 150) < 60) continue; // village
    if (Math.hypot(x - 36, z - 162) < 30) continue; // lord & architect viewpoint
    if (Math.hypot(x + 225, z + 70) < 50) continue; // quarry
    // forest density mask: clusters
    const dens = Math.sin(x * 0.012 + 0.5) * Math.cos(z * 0.010 + 1.1) + Math.sin((x + z) * 0.007) * 0.6;
    if (dens < -0.15 && R() > 0.12) continue;
    const h = baseHeight(x, z);
    if (h > 70) continue;
    pts.push([x, h, z, 0.7 + R() * 0.7, R() < 0.55 ? 0 : 1, R() * 6.28]);
  }
  // a few trees on the hill slopes too
  for (let i = 0; i < 140; i++) {
    const a = R() * 6.28, r = 110 + R() * 50;
    const x = Math.cos(a) * r, z = Math.sin(a) * r;
    if (distToPolyline(x, z, MAIN_ROAD) < 10 || distToPolyline(x, z, QUARRY_ROAD) < 12) continue;
    if (Math.hypot(x - 36, z - 162) < 30) continue;
    pts.push([x, baseHeight(x, z), z, 0.6 + R() * 0.5, 1, R() * 6.28]);
  }
  const leafM = new THREE.MeshLambertMaterial({ color: 0xffffff, flatShading: true });
  const conM = new THREE.MeshLambertMaterial({ color: 0xffffff, flatShading: true });
  const trunkM = new THREE.MeshLambertMaterial({ color: 0x4a3424 });
  const mk = (geo, m, list) => {
    if (!list.length) return;
    const im = new THREE.InstancedMesh(geo, m, list.length);
    const M = new THREE.Matrix4(), q = new THREE.Quaternion(), s = new THREE.Vector3(), p = new THREE.Vector3();
    list.forEach((t, i) => {
      q.setFromAxisAngle(new THREE.Vector3(0, 1, 0), t[5]);
      s.set(t[3], t[3] * (0.9 + hash(t[6]) * 0.3), t[3]);
      p.set(t[0], t[1] - 0.3, t[2]);
      M.compose(p, q, s);
      im.setMatrixAt(i, M);
      const c = new THREE.Color().setHSL(0.27 + hash(t[6] * 3.1) * 0.06, 0.45, 0.2 + hash(t[6] * 7.7) * 0.1);
      im.setColorAt(i, c);
    });
    im.castShadow = true;
    im.receiveShadow = true;
    im.computeBoundingSphere();
    scene.add(im);
  };
  // spatial chunks so the camera and the shadow pass can cull whole groves
  pts.forEach((p, i) => p.push(i));
  const cells = new Map();
  for (const p of pts) {
    const key = Math.floor(p[0] / 120) + "," + Math.floor(p[2] / 120);
    if (!cells.has(key)) cells.set(key, []);
    cells.get(key).push(p);
  }
  for (const list of cells.values()) {
    const conifers = list.filter((p) => p[4] === 0);
    const leafy = list.filter((p) => p[4] === 1);
    mk(conGeo, conM, conifers);
    mk(con2, conM, conifers);
    mk(trunkGeo, trunkM, list);
    mk(blobGeo, leafM, leafy);
  }
  return pts;
}

// ---------- village ----------
export function buildVillage(scene) {
  const R = mulberry32(99);
  const group = new THREE.Group();
  const bodyGeo = baseGeo(new THREE.BoxGeometry(1, 1, 1));
  const roofGeo = gableGeo(1, 1, 0.75, 0.08);
  const houses = [];
  for (let i = 0; i < 34; i++) {
    const a = R() * 6.28, r = 8 + R() * 42;
    const x = 150 + Math.cos(a) * r, z = 152 + Math.sin(a) * r;
    if (Math.abs(x - riverX(z)) < 26) continue;
    if (distToPolyline(x, z, MAIN_ROAD) < 5) continue;
    houses.push({ x, z, w: 5 + R() * 4, d: 7 + R() * 5, h: 3 + R() * 2.2, rot: Math.round(R() * 4) * (Math.PI / 2) + (R() - 0.5) * 0.3, thatch: R() < 0.7 });
  }
  const bodies = new THREE.InstancedMesh(bodyGeo, new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.95 }), houses.length);
  const roofs = new THREE.InstancedMesh(roofGeo, new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.9 }), houses.length);
  const M = new THREE.Matrix4(), q = new THREE.Quaternion(), s = new THREE.Vector3(), p = new THREE.Vector3();
  houses.forEach((hs, i) => {
    const y = baseHeight(hs.x, hs.z) - 0.4;
    q.setFromAxisAngle(new THREE.Vector3(0, 1, 0), hs.rot);
    p.set(hs.x, y, hs.z);
    s.set(hs.w, hs.h + 0.4, hs.d);
    M.compose(p, q, s);
    bodies.setMatrixAt(i, M);
    bodies.setColorAt(i, new THREE.Color().setHSL(0.1, 0.25, 0.7 + hash(i) * 0.12));
    p.set(hs.x, y + hs.h + 0.4, hs.z);
    s.set(hs.w * 1.15, hs.w * 0.9, hs.d * 1.12);
    M.compose(p, q, s);
    roofs.setMatrixAt(i, M);
    roofs.setColorAt(i, hs.thatch ? new THREE.Color(0x9a7c48).offsetHSL(0, 0, hash(i * 2) * 0.08 - 0.04) : new THREE.Color(0x8a4a32));
  });
  for (const im of [bodies, roofs]) {
    im.castShadow = im.receiveShadow = true;
    group.add(im);
  }
  // church
  const st = stoneMaterial(0xc2b8a2);
  const cy = baseHeight(165, 128);
  const nave = mesh(baseGeo(new THREE.BoxGeometry(9, 8, 20)), st, group);
  nave.position.set(165, cy - 0.5, 128);
  const nroof = mesh(gableGeo(9, 20, 6), roofMaterial(0x58606a), group);
  nroof.position.set(165, cy + 7.5, 128);
  const tower = mesh(baseGeo(new THREE.BoxGeometry(6, 18, 6)), st, group);
  tower.position.set(165, cy - 0.5, 116);
  const spire = mesh(baseGeo(new THREE.ConeGeometry(4.6, 10, 4)), roofMaterial(0x58606a), group);
  spire.rotation.y = Math.PI / 4;
  spire.position.set(165, cy + 17.5, 116);
  scene.add(group);
  mergeStatic(group);
  return group;
}
