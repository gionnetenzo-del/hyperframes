import { THREE, clamp, lerp, hash, mat, woodMaterial, stoneMaterial, mesh, mergeFigure } from "./lib.js";

const G = {};
function geos() {
  if (G.leg) return G;
  G.leg = new THREE.BoxGeometry(0.17, 0.82, 0.2).translate(0, -0.41, 0);
  G.arm = new THREE.BoxGeometry(0.13, 0.66, 0.14).translate(0, -0.33, 0);
  G.torso = new THREE.CylinderGeometry(0.21, 0.27, 0.66, 8).translate(0, 0.33, 0);
  G.skirt = new THREE.CylinderGeometry(0.27, 0.36, 0.42, 8).translate(0, -0.12, 0);
  G.head = new THREE.SphereGeometry(0.135, 10, 8);
  G.hood = new THREE.ConeGeometry(0.17, 0.3, 8).translate(0, 0.12, 0);
  G.cap = new THREE.SphereGeometry(0.15, 10, 6, 0, Math.PI * 2, 0, Math.PI / 2);
  G.helm = new THREE.ConeGeometry(0.16, 0.26, 8).translate(0, 0.1, 0);
  G.hat = new THREE.CylinderGeometry(0.28, 0.28, 0.03, 12);
  G.hatTop = new THREE.CylinderGeometry(0.13, 0.15, 0.16, 10).translate(0, 0.08, 0);
  G.shield = new THREE.BoxGeometry(0.5, 0.65, 0.06);
  G.handle = new THREE.CylinderGeometry(0.025, 0.025, 0.9, 5).translate(0, 0.45, 0);
  G.hammerHead = new THREE.BoxGeometry(0.1, 0.1, 0.24);
  G.pickHead = new THREE.BoxGeometry(0.06, 0.06, 0.6);
  G.blade = new THREE.BoxGeometry(0.22, 0.28, 0.03);
  G.spear = new THREE.CylinderGeometry(0.02, 0.02, 2.4, 4).translate(0, 0.4, 0);
  G.bow = new THREE.TorusGeometry(0.55, 0.02, 4, 12, Math.PI);
  G.staff = new THREE.CylinderGeometry(0.03, 0.03, 1.9, 5).translate(0, -0.55, 0);
  G.basket = new THREE.CylinderGeometry(0.2, 0.15, 0.25, 8);
  G.stone = new THREE.BoxGeometry(0.45, 0.28, 0.32);
  G.sack = new THREE.SphereGeometry(0.22, 8, 6).scale(1, 1.3, 0.8);
  return G;
}

const SKIN = [0xe0b48f, 0xc99a72, 0xd8a883, 0xb7835d];
export const TUNICS = {
  worker: [0x7d6a4f, 0x6a5a45, 0x8a7a5a, 0x5c6b55, 0x8c6c4c, 0x6e5a3e, 0x7a7466],
  mason: [0xa89b80, 0x8f8673, 0xb3a88f],
  noble: [0x2a4d8f],
  architect: [0x4b2e3a],
  defender: [0x2d4e8a, 0x2b4579],
  enemy: [0x8e2420, 0x7a1e1b, 0x96302a],
  villager: [0x9b5a3c, 0x6b7a3a, 0x8a6a8a, 0xa08850, 0x5a6a7a],
};

/**
 * Low-poly medieval figure with articulated limbs.
 * kind: worker | mason | soldier | enemy | architect | noble | villager
 */
export function makePerson(kind, seed = 0, opts = {}) {
  const g = geos();
  const R = (k) => hash(seed * 13.7 + k);
  const pal = TUNICS[opts.palette || (kind === "soldier" ? "defender" : kind)] || TUNICS.worker;
  const tunic = mat(pal[Math.floor(R(1) * pal.length)]);
  const legs = mat([0x4a3f33, 0x3c3a36, 0x5a4a3a, 0x403428][Math.floor(R(2) * 4)]);
  const skin = mat(SKIN[Math.floor(R(3) * SKIN.length)]);
  const root = new THREE.Group();
  const body = new THREE.Group();
  body.position.y = 0.9;
  root.add(body);
  const hipL = new THREE.Group(), hipR = new THREE.Group();
  hipL.position.set(-0.1, 0, 0);
  hipR.position.set(0.1, 0, 0);
  hipL.add(mesh(g.leg, legs));
  hipR.add(mesh(g.leg, legs));
  body.add(hipL, hipR);
  const torso = new THREE.Group();
  body.add(torso);
  torso.add(mesh(g.torso, tunic));
  const skirt = mesh(g.skirt, tunic);
  skirt.scale.y = kind === "architect" || kind === "noble" ? 2.0 : 1;
  if (kind === "architect" || kind === "noble") skirt.position.y = -0.3;
  body.add(skirt);
  const head = mesh(g.head, skin);
  head.position.y = 0.82;
  torso.add(head);
  // headgear
  let hg;
  if (kind === "soldier" || kind === "enemy") {
    hg = mesh(g.helm, mat(0x8a8d92, { metalness: 0.6, roughness: 0.4 }));
    hg.position.y = 0.88;
  } else if (kind === "architect") {
    hg = mesh(g.hatTop, mat(0x2a1e1a));
    hg.position.y = 0.9;
  } else if (kind === "noble") {
    hg = mesh(g.cap, mat(0x1a2a50));
    hg.position.y = 0.86;
  } else if (R(4) < 0.45) {
    hg = mesh(g.hood, mat(pal[Math.floor(R(5) * pal.length)]));
    hg.position.y = 0.86;
  } else if (R(4) < 0.75) {
    hg = mesh(g.cap, mat(0xd8ccb0));
    hg.position.y = 0.85;
  }
  if (hg) torso.add(hg);
  const shL = new THREE.Group(), shR = new THREE.Group();
  shL.position.set(-0.29, 0.62, 0);
  shR.position.set(0.29, 0.62, 0);
  shL.add(mesh(g.arm, tunic));
  shR.add(mesh(g.arm, tunic));
  // hands
  const hL = mesh(g.head, skin);
  hL.scale.setScalar(0.45);
  hL.position.y = -0.68;
  shL.add(hL);
  const hR = hL.clone();
  shR.add(hR);
  torso.add(shL, shR);
  // tool in right hand
  const tool = new THREE.Group();
  tool.position.y = -0.68;
  shR.add(tool);
  const woodM = mat(0x6e5236);
  const ironM = mat(0x55585c, { metalness: 0.5, roughness: 0.5 });
  const t = opts.tool;
  if (t === "hammer" || t === "chisel") {
    const h = mesh(g.handle, woodM, tool);
    h.scale.y = 0.45;
    h.rotation.x = Math.PI / 2;
    const hh = mesh(g.hammerHead, ironM, tool);
    hh.position.z = 0.38;
  } else if (t === "pick") {
    const h = mesh(g.handle, woodM, tool);
    h.rotation.x = Math.PI / 2;
    h.scale.y = 1.1;
    const hh = mesh(g.pickHead, ironM, tool);
    hh.rotation.x = Math.PI / 2;
    hh.rotation.y = Math.PI / 2;
    hh.position.z = 0.95;
    hh.rotation.set(0, 0, 0);
    hh.position.set(0, 0, 0.95);
    hh.scale.set(1, 1, 1);
    hh.rotation.x = 0;
    hh.geometry = g.pickHead;
    hh.rotation.y = 0;
    hh.rotation.z = 0;
    hh.rotation.x = Math.PI / 2;
  } else if (t === "shovel") {
    const h = mesh(g.handle, woodM, tool);
    h.rotation.x = Math.PI / 2;
    h.scale.y = 1.3;
    const b = mesh(g.blade, ironM, tool);
    b.position.z = 1.25;
    b.rotation.x = Math.PI / 2.4;
  } else if (t === "spear") {
    mesh(g.spear, woodM, tool);
  } else if (t === "bow") {
    const b = mesh(g.bow, woodM, tool);
    b.rotation.y = Math.PI / 2;
    b.rotation.z = Math.PI / 2;
  } else if (t === "staff") {
    const s = mesh(g.staff, woodM, tool);
    s.position.y = 0.5;
  } else if (t === "stone") {
    const s = mesh(g.stone, stoneMaterial(0xc6bba3), tool);
    s.position.set(-0.29, 0, 0.2);
  } else if (t === "sack") {
    const s = mesh(g.sack, mat(0xc8b48a), tool);
    s.position.set(-0.3, 0.5, 0.1);
  } else if (t === "basket") {
    const s = mesh(g.basket, mat(0x8a6a3a), tool);
    s.position.set(-0.29, 0.05, 0.25);
  } else if (t === "bucket") {
    const s = mesh(g.basket, woodMaterial(0x7a5534), tool);
    s.scale.set(0.9, 1.1, 0.9);
    s.position.set(0, -0.15, 0);
  }
  if (kind === "soldier" || kind === "enemy") {
    const sh = mesh(g.shield, mat(kind === "enemy" ? 0x5a1512 : 0xd2b24a), null);
    sh.position.set(-0.05, -0.35, 0.12);
    shL.add(sh);
    if (kind === "enemy") {
      const sh2 = mesh(new THREE.BoxGeometry(0.12, 0.5, 0.065), mat(0xd9c38a), null);
      sh2.position.set(-0.05, -0.35, 0.13);
      shL.add(sh2);
    }
  }
  const ud = { body, torso, hipL, hipR, shL, shR, tool, kind, seed };
  mergeFigure(root, [body, torso, hipL, hipR, shL, shR]);
  root.userData = ud;
  return root;
}

/** Pose a figure. a: action, ph: phase in radians */
export function pose(p, a, ph) {
  const u = p.userData;
  const s = Math.sin(ph), c = Math.cos(ph);
  // reset
  u.body.position.y = 0.9;
  u.body.rotation.set(0, 0, 0);
  u.torso.rotation.set(0, 0, 0);
  u.hipL.rotation.set(0, 0, 0);
  u.hipR.rotation.set(0, 0, 0);
  u.shL.rotation.set(0, 0, 0.08);
  u.shR.rotation.set(0, 0, -0.08);
  u.tool.rotation.set(0, 0, 0);
  switch (a) {
    case "walk":
    case "march":
    case "carry":
    case "push": {
      const amp = a === "march" ? 0.55 : 0.45;
      u.hipL.rotation.x = s * amp;
      u.hipR.rotation.x = -s * amp;
      u.body.position.y = 0.9 + Math.abs(c) * 0.04;
      if (a === "carry") {
        u.shL.rotation.x = -1.1;
        u.shR.rotation.x = -1.1;
        u.shL.rotation.z = -0.25;
        u.shR.rotation.z = 0.25;
      } else if (a === "push") {
        u.torso.rotation.x = 0.35;
        u.shL.rotation.x = -1.4;
        u.shR.rotation.x = -1.4;
        u.hipL.rotation.x = s * 0.6 - 0.2;
        u.hipR.rotation.x = -s * 0.6 - 0.2;
      } else if (a === "march") {
        u.shR.rotation.x = -0.4;
        u.shL.rotation.x = -0.9;
      } else {
        u.shL.rotation.x = -s * 0.5;
        u.shR.rotation.x = s * 0.5;
      }
      break;
    }
    case "hammer": {
      const k = Math.pow(Math.max(0, s), 0.6);
      u.torso.rotation.x = 0.35;
      u.shR.rotation.x = -0.6 - k * 1.7;
      u.shL.rotation.x = -0.7;
      u.body.position.y = 0.86;
      break;
    }
    case "chisel": {
      const k = Math.pow(Math.max(0, s), 0.6);
      u.torso.rotation.x = 0.5;
      u.shR.rotation.x = -0.4 - k * 1.2;
      u.shL.rotation.x = -1.0;
      u.shL.rotation.z = -0.35;
      break;
    }
    case "dig": {
      const k = (s + 1) / 2;
      u.torso.rotation.x = 0.25 + k * 0.45;
      u.shR.rotation.x = -0.4 - k * 0.9;
      u.shL.rotation.x = -0.5 - k * 0.8;
      u.shL.rotation.z = -0.4;
      u.hipL.rotation.x = -0.3;
      u.hipR.rotation.x = 0.2;
      u.body.position.y = 0.84;
      break;
    }
    case "pick": {
      const k = Math.pow(Math.max(0, s), 0.7);
      u.torso.rotation.x = 0.25 + (1 - k) * 0.35;
      u.shR.rotation.x = -0.3 - k * 2.5;
      u.shL.rotation.x = -0.3 - k * 2.4;
      u.shL.rotation.z = -0.35;
      break;
    }
    case "point": {
      u.shR.rotation.x = -1.5;
      u.shR.rotation.z = -0.25;
      u.shL.rotation.x = -0.15;
      break;
    }
    case "pull": {
      u.torso.rotation.x = -0.2;
      u.shR.rotation.x = -1.9 + s * 0.4;
      u.shL.rotation.x = -1.9 - s * 0.4;
      u.hipL.rotation.x = 0.3;
      u.hipR.rotation.x = -0.25;
      break;
    }
    case "shoot": {
      u.shL.rotation.x = -1.5;
      u.shL.rotation.z = 0.2;
      u.shR.rotation.x = -1.5;
      u.shR.rotation.z = -0.5 - Math.max(0, s) * 0.4;
      u.torso.rotation.y = 0.3;
      break;
    }
    case "tired": {
      u.torso.rotation.x = 0.6;
      u.shL.rotation.x = -0.2;
      u.shR.rotation.x = -0.2;
      u.body.position.y = 0.85 + s * 0.02;
      break;
    }
    case "talk": {
      u.shR.rotation.x = -0.5 - Math.max(0, s) * 0.5;
      u.torso.rotation.y = s * 0.1;
      break;
    }
    default: {
      u.shL.rotation.x = s * 0.04;
      u.torso.rotation.y = Math.sin(ph * 0.3) * 0.08;
    }
  }
}

// ---------- animals ----------
export function makeQuadruped(type = "horse", seed = 0) {
  const R = (k) => hash(seed * 7.3 + k);
  const col = type === "ox" ? [0x8a6a4a, 0x6a4a32, 0xc8b8a0][Math.floor(R(1) * 3)] : [0x5a3a22, 0x7a5232, 0x3a2a1e, 0xb0a090][Math.floor(R(1) * 4)];
  const m = mat(col);
  const g = new THREE.Group();
  const big = type === "ox" ? 1.15 : 1;
  const body = mesh(new THREE.BoxGeometry(0.75 * big, 0.8 * big, 2.0 * big), m, g);
  body.position.y = 1.35;
  const neck = mesh(new THREE.BoxGeometry(0.35, type === "ox" ? 0.5 : 0.95, 0.45), m, g);
  neck.position.set(0, type === "ox" ? 1.55 : 1.9, 1.05);
  neck.rotation.x = type === "ox" ? 0.2 : -0.55;
  const headM = mesh(new THREE.BoxGeometry(0.3, 0.32, 0.72), m, g);
  headM.position.set(0, type === "ox" ? 1.45 : 2.25, type === "ox" ? 1.45 : 1.5);
  headM.rotation.x = type === "ox" ? 0.6 : 0.5;
  if (type === "ox") {
    const horn = mesh(new THREE.CylinderGeometry(0.04, 0.06, 0.9, 5), mat(0xe8e0c8), g);
    horn.rotation.z = Math.PI / 2;
    horn.position.set(0, 1.7, 1.35);
  } else {
    const mane = mesh(new THREE.BoxGeometry(0.08, 0.8, 0.3), mat(0x221810), g);
    mane.position.set(0, 2.0, 0.92);
    mane.rotation.x = -0.55;
  }
  const tail = mesh(new THREE.BoxGeometry(0.1, 0.8, 0.12), mat(0x221810), g);
  tail.position.set(0, 1.25, -1.05);
  tail.rotation.x = 0.3;
  const legs = [];
  const lg = new THREE.BoxGeometry(0.16, 1.0, 0.18).translate(0, -0.5, 0);
  for (const [x, z] of [[-0.25, 0.8], [0.25, 0.8], [-0.25, -0.8], [0.25, -0.8]]) {
    const hip = new THREE.Group();
    hip.position.set(x * big, 1.05, z * big);
    mesh(lg, m, hip);
    g.add(hip);
    legs.push(hip);
  }
  mergeFigure(g, legs);
  g.userData = { legs, body };
  return g;
}
export function poseQuad(q, ph, moving = 1) {
  const L = q.userData.legs;
  const s = Math.sin(ph) * 0.45 * moving;
  L[0].rotation.x = s;
  L[3].rotation.x = s;
  L[1].rotation.x = -s;
  L[2].rotation.x = -s;
}

// cart with wheels; load of stones
export function makeCart(seed = 0, load = "stone") {
  const g = new THREE.Group();
  const wood = woodMaterial(0x8a6440);
  const bed = mesh(new THREE.BoxGeometry(1.7, 0.18, 3.0), wood, g);
  bed.position.y = 1.0;
  for (const sx of [-0.85, 0.85]) {
    const side = mesh(new THREE.BoxGeometry(0.08, 0.45, 3.0), wood, g);
    side.position.set(sx, 1.3, 0);
  }
  const shafts = [];
  for (const sx of [-0.55, 0.55]) {
    const s = mesh(new THREE.BoxGeometry(0.1, 0.1, 3.0), wood, g);
    s.position.set(sx, 1.05, 2.8);
    shafts.push(s);
  }
  const wheels = [];
  const wg = new THREE.CylinderGeometry(0.62, 0.62, 0.14, 14);
  wg.rotateZ(Math.PI / 2);
  for (const sx of [-1.0, 1.0]) {
    const w = new THREE.Group();
    w.position.set(sx, 0.62, 0);
    mesh(wg, woodMaterial(0x5a3d25), w);
    for (let k = 0; k < 3; k++) {
      const sp = mesh(new THREE.BoxGeometry(0.16, 1.2, 0.08), mat(0x3e2a18), w);
      sp.rotation.x = (k * Math.PI) / 3;
    }
    g.add(w);
    wheels.push(w);
  }
  const cargo = new THREE.Group();
  if (load === "stone") {
    const sm = stoneMaterial(0xc6bba3);
    for (let i = 0; i < 4; i++) {
      const b = mesh(new THREE.BoxGeometry(0.75, 0.5, 1.1), sm, cargo);
      b.position.set((i % 2) * 0.78 - 0.39, 1.35, Math.floor(i / 2) * 1.2 - 0.6);
    }
    const b = mesh(new THREE.BoxGeometry(0.75, 0.5, 1.1), sm, cargo);
    b.position.set(0, 1.85, 0);
  } else if (load === "wood") {
    const lg = new THREE.CylinderGeometry(0.2, 0.2, 3.2, 7).rotateX(Math.PI / 2);
    for (let i = 0; i < 6; i++) {
      const l = mesh(lg, woodMaterial(0x8a6440), cargo);
      l.position.set((i % 3) * 0.42 - 0.42, 1.3 + Math.floor(i / 3) * 0.38, 0);
    }
  } else if (load === "supplies") {
    const bm = woodMaterial(0x6b4a2c);
    for (let i = 0; i < 4; i++) {
      const b = mesh(new THREE.CylinderGeometry(0.35, 0.35, 0.8, 9), bm, cargo);
      b.position.set((i % 2) * 0.75 - 0.37, 1.5, Math.floor(i / 2) * 0.9 - 0.45);
    }
  }
  g.add(cargo);
  mergeFigure(g, wheels);
  g.userData = { wheels, cargo };
  return g;
}

// Treadwheel crane: wheel turned by a walker inside, jib with rope and hook.
export function makeCrane() {
  const g = new THREE.Group();
  const wood = woodMaterial(0x8a6a44);
  const dark = woodMaterial(0x5e4428);
  // base frame
  for (const sx of [-1.2, 1.2]) {
    const sill = mesh(new THREE.BoxGeometry(0.35, 0.35, 6), dark, g);
    sill.position.set(sx, 0.18, 0);
    const postA = mesh(new THREE.BoxGeometry(0.3, 4.2, 0.3), wood, g);
    postA.position.set(sx, 2.3, 0);
  }
  const wheel = new THREE.Group();
  wheel.position.set(0, 2.6, 0);
  for (const sx of [-0.9, 0.9]) {
    const rim = mesh(new THREE.TorusGeometry(2.3, 0.1, 6, 28), wood, wheel);
    rim.rotation.y = Math.PI / 2;
    rim.position.x = sx;
    for (let k = 0; k < 6; k++) {
      const sp = mesh(new THREE.BoxGeometry(0.1, 4.6, 0.12), dark, wheel);
      sp.position.x = sx;
      sp.rotation.x = (k * Math.PI) / 6;
    }
  }
  for (let k = 0; k < 18; k++) {
    const a = (k / 18) * Math.PI * 2;
    const tr = mesh(new THREE.BoxGeometry(1.9, 0.08, 0.3), wood, wheel);
    tr.position.set(0, Math.sin(a) * 2.25, Math.cos(a) * 2.25);
    tr.rotation.x = -a;
  }
  const axle = mesh(new THREE.CylinderGeometry(0.15, 0.15, 2.8, 8).rotateZ(Math.PI / 2), dark, wheel);
  g.add(wheel);
  // mast and jib
  const mast = mesh(new THREE.BoxGeometry(0.4, 9, 0.4), wood, g);
  mast.position.set(0, 4.5, -1.2);
  const jib = mesh(new THREE.BoxGeometry(0.3, 0.3, 7), wood, g);
  jib.position.set(0, 8.6, 1.6);
  jib.rotation.x = -0.18;
  const brace = mesh(new THREE.BoxGeometry(0.2, 0.2, 4), dark, g);
  brace.position.set(0, 7.0, 0.4);
  brace.rotation.x = 0.75;
  const rope = mesh(new THREE.CylinderGeometry(0.03, 0.03, 1, 4).translate(0, -0.5, 0), mat(0xd8c8a0), g, false);
  rope.position.set(0, 9.2, 4.9);
  const load = mesh(new THREE.BoxGeometry(1.1, 0.6, 0.8), stoneMaterial(0xcfc4ab), g);
  const walker = makePerson("worker", 77);
  walker.position.set(0, 0.35, 0);
  wheel.parent.add(walker);
  rope.userData.pivot = true;
  load.userData.pivot = true;
  mergeFigure(g, [wheel]);
  g.userData = { wheel, rope, load, walker };
  g.traverse((o) => o.isMesh && (o.castShadow = true));
  return g;
}
export function poseCrane(c, t, lift01) {
  const u = c.userData;
  u.wheel.rotation.x = -lift01 * 9;
  const len = lerp(8.6, 1.2, lift01);
  u.rope.scale.y = len;
  u.load.position.set(0, 9.2 - len - 0.35, 4.9);
  pose(u.walker, "walk", t * 5);
  u.walker.position.set(0, 0.35 + 0.0, 0.2);
}

// battering ram with a roof
export function makeRam() {
  const g = new THREE.Group();
  const wood = woodMaterial(0x6e5034);
  for (const sx of [-1.2, 1.2])
    for (const sz of [-2.5, 2.5]) {
      const p = mesh(new THREE.BoxGeometry(0.25, 2.6, 0.25), wood, g);
      p.position.set(sx, 1.3, sz);
    }
  const roof = mesh(new THREE.BoxGeometry(3.2, 0.2, 6.2), woodMaterial(0x5a4028), g);
  roof.position.y = 2.7;
  const roof2 = mesh(new THREE.BoxGeometry(1.9, 0.2, 6.2), mat(0x6b5a3a), g);
  roof2.position.set(-0.8, 3.1, 0);
  roof2.rotation.z = 0.45;
  const roof3 = roof2.clone();
  roof3.position.x = 0.8;
  roof3.rotation.z = -0.45;
  g.add(roof3);
  const log = new THREE.Group();
  log.position.set(0, 1.4, 0);
  const lm = mesh(new THREE.CylinderGeometry(0.3, 0.3, 7, 10).rotateX(Math.PI / 2), woodMaterial(0x7a5a3a), log);
  const tip = mesh(new THREE.CylinderGeometry(0.34, 0.2, 0.6, 10).rotateX(Math.PI / 2), mat(0x45484c, { metalness: 0.5 }), log);
  tip.position.z = 3.7;
  g.add(log);
  mergeFigure(g, [log]);
  g.userData = { log };
  return g;
}
