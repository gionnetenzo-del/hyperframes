import { THREE, clamp, lerp, smooth, ease, eprog, prog, pulse, hash, seg, scene as SC, W } from "./lib.js";
import { D1, D2, D3, D4, D5, TILE_X } from "./dioramas.js";
import { baseHeight } from "./terrain.js";

const V = (x, y, z) => new THREE.Vector3(x, y, z);
const P = 14;

// ------------------------------------------------------------------
// Build state of the castle (and diorama parameters) as a function of t
// ------------------------------------------------------------------
export function fullState() {
  return {
    outline: 0, trench: 0, footing: 1, walls: 1, towers: 1, keep: 1, gate: 1, crenels: 1, roofs: 1,
    buildings: 1, yard: 1, well: 1, stock: 0, scaffold: 0, moat: 1, water: 1, bridge: 1,
    bridgeUp: 0, portDown: 0, doorsOpen: 1, bar: 0, gateCut: 0,
    buttress: 0, crack: 0, postern: 0, puddle: 0, rigole: 0, spout: 0, roofHoles: 0,
    paved: 1, siege: 0, siteDirt: 0, ghost: 0,
    // dioramas
    tileRing: [0, 0, 0, 0], tileGood: -1, siteFlag: 0,
    soilMode: 0, digDepth: 0, footing2: 0, sink: 0, soilWall: 1, cracks: 0, loadArrows: 0, diggers: 0,
    wallMode: 0, wallBuild: 1, wbuttress: 0, wmarker: 0, lean: 0, wcracks: 0,
    stores: 1, cellarExt: 0, beamSwap: 0,
    view: "world",
  };
}
function applyBuild(S, b) {
  // master progression used for the opening "rewind"
  S.roofs = prog(b, 0.9, 1);
  S.crenels = prog(b, 0.84, 0.92);
  S.buildings = prog(b, 0.76, 0.86);
  S.yard = S.buildings;
  S.well = b > 0.8 ? 1 : 0;
  S.keep = prog(b, 0.6, 0.8);
  S.gate = prog(b, 0.52, 0.74);
  S.towers = prog(b, 0.35, 0.62);
  S.walls = prog(b, 0.25, 0.55);
  S.water = prog(b, 0.2, 0.3);
  S.moat = prog(b, 0.08, 0.22);
  S.footing = prog(b, 0.02, 0.1);
  S.bridge = S.gate >= 1 ? 1 : 0;
}
export function emptyState() {
  const S = fullState();
  applyBuild(S, 0);
  S.paved = 0;
  return S;
}

export function stateAt(t) {
  const S = fullState();
  const s = (id) => seg(id);
  const sc = (id) => SC(id);
  if (t < sc("s2")[0]) {
    // intro: complete castle, then rewind to the empty hill
    const b = 1 - eprog(t, s("s1c")[1] + 0.3, sc("s2")[0] - 0.4);
    applyBuild(S, b);
    S.paved = b > 0.5 ? 1 : 0;
    return S;
  }
  applyBuild(S, 0);
  S.paved = 0;
  if (t < sc("s3")[0]) {
    // site selection
    const tr = S.tileRing;
    tr[0] = pulse(t, W("s2c", "plaine") - 0.3, W("s2c", "un", 2) - 0.2);
    tr[3] = pulse(t, W("s2c", "marécageux") - 0.6, W("s2c", "site") - 0.2);
    tr[2] = pulse(t, W("s2c", "site") - 0.2, s("s2c")[1] + 1);
    tr[1] = smooth(s("s2d")[0] + 0.5, s("s2d")[0] + 1.2, t);
    S.tileGood = 1;
    S.siteFlag = eprog(t, s("s2d")[0] + 1.2, s("s2d")[0] + 2.5);
    S.view = t >= s("s2b")[0] + 6.3 && t < W("s2d", "cette") ? "tiles" : "world";
    return S;
  }
  if (t < sc("s4")[0]) {
    S.ghost = pulse(t, s("s3a")[0] - 0.2, W("s3a", "avec") + 0.8, 1.0);
    S.siteDirt = eprog(t, s("s3b")[0] - 0.5, s("s3b")[1]);
    S.outline = eprog(t, W("s3a", "avec") - 0.5, s("s3a")[1] + 0.5);
    S.trench = eprog(t, s("s3b")[0] - 0.2, s("s3b")[1] + 1.5);
    S.footing = eprog(t, s("s3d")[1] - 6, s("s3d")[1] + 0.5);
    // soil section diorama
    if (t >= s("s3c")[0] - 0.4 && t < s("s3d")[1] - 6) {
      S.view = "soil";
      if (t < s("s3d")[0] - 0.3) {
        S.soilMode = 0;
        S.sink = eprog(t, W("s3c", "s’enfonce") - 0.6, W("s3c", "fissure") + 0.4) * 1.0 + eprog(t, W("s3c", "fissure"), s("s3c")[1] + 2) * 0.8;
        S.cracks = eprog(t, W("s3c", "fissure") - 0.3, s("s3c")[1] + 1.5);
        S.loadArrows = eprog(t, W("s3c", "poids") - 0.8, W("s3c", "poids") + 0.3);
      } else {
        S.soilMode = 1;
        S.loadArrows = pulse(t, W("s3d", "répartir") - 0.5, W("s3d", "difficile") + 0.5, 0.5);
        S.digDepth = 1.4 + eprog(t, W("s3d", "creuse") - 0.6, W("s3d", "rocher") + 0.8) * 6.1;
        S.diggers = 1;
        S.footing2 = eprog(t, W("s3d", "élargit") - 0.4, W("s3d", "mortier") + 1.5);
        S.soilWall = eprog(t, W("s3d", "erreur") - 0.5, W("s3d", "erreur") + 2.5);
        if (t > W("s3d", "erreur") + 2.5) S.loadArrows = eprog(t, W("s3d", "erreur") + 2.2, W("s3d", "erreur") + 3);
      }
    }
    return S;
  }
  // from the materials stage on, the layout is done
  S.footing = 1;
  S.outline = 0;
  S.trench = 0;
  S.siteDirt = 1 - eprog(t, sc("s7")[0], sc("s7")[0] + 3);
  if (t < sc("s5")[0]) {
    S.stock = eprog(t, sc("s4")[0], s("s4d")[1]) * 0.9;
    S.paved = eprog(t, W("s4d", "empierre") - 0.5, W("s4d", "empierre") + 2.5);
    S.walls = eprog(t, s("s4d")[1] - 2, sc("s5")[0] + 1) * 0.05;
    return S;
  }
  S.paved = 1;
  if (t < sc("s6")[0]) {
    const a = sc("s5")[0], b = sc("s6")[0];
    const d0 = s("s5d")[0];
    S.stock = 0.9 - eprog(t, a, b) * 0.6;
    S.scaffold = 1;
    S.walls = 0.05 + eprog(t, a + 0.5, d0) * 0.7 + eprog(t, b - 9, b - 1.5) * 0.25;
    S.towers = eprog(t, a + 1.5, d0) * 0.72 + eprog(t, b - 9, b - 1.5) * 0.28;
    S.keep = eprog(t, a + 3, d0) * 0.55 + eprog(t, b - 9, b - 1) * 0.25;
    S.gate = eprog(t, a + 3, d0) * 0.45 + eprog(t, b - 9, b - 1) * 0.15;
    if (t > s("s5c")[0] - 0.5 && t < s("s5d")[0]) {
      // the towers are the subject: give them a lead
      S.towers = Math.max(S.towers, 0.95);
      S.crenels = 0;
    }
    S.crenels = 0;
    S.roofs = 0;
    S.buildings = 0;
    S.yard = 0;
    // wall section dioramas
    if (t >= s("s5d")[0] - 0.4 && t < s("s5f")[1] - 6) {
      S.view = "wall";
      if (t < s("s5e")[0] - 0.4) {
        S.wallMode = 0;
        S.wallBuild = eprog(t, s("s5d")[0], W("s5d", "coupe") + 0.5);
        S.wbuttress = 0;
      } else if (t < s("s5f")[0] - 0.4) {
        S.wallMode = 1;
        S.wcracks = eprog(t, W("s5e", "fissures") - 0.8, W("s5e", "mur", 1));
        S.lean = eprog(t, W("s5e", "pencher") - 1.2, s("s5e")[1] + 1.8);
      } else {
        S.wallMode = 0;
        S.wallBuild = 1;
        S.wmarker = eprog(t, W("s5f", "épais") - 0.4, W("s5f", "épais") + 0.6);
        S.wbuttress = eprog(t, W("s5f", "contreforts") - 0.6, W("s5f", "contreforts") + 1.4);
      }
    }
    return S;
  }
  // walls are complete from here
  S.walls = 1;
  S.towers = 1;
  S.stock = 0.3;
  if (t < sc("s7")[0]) {
    const a = sc("s6")[0];
    S.stock = 0.3 * (1 - eprog(t, a, a + 6));
    S.keep = 0.8 + eprog(t, a, a + 8) * 0.2;
    S.gate = 0.6 + eprog(t, a, a + 8) * 0.15;
    S.crenels = eprog(t, a + 1, a + 7);
    S.roofs = 0;
    S.buildings = 0;
    S.yard = 0;
    S.moat = eprog(t, s("s6a")[0] - 0.5, s("s6a")[1] + 0.5);
    S.water = eprog(t, W("s6b", "permet") - 0.8, W("s6b", "permet") + 5.5);
    S.bridge = 0;
    return S;
  }
  S.crenels = 1;
  S.moat = 1;
  S.water = 1;
  S.keep = 1;
  S.gate = 1;
  S.roofs = 1;
  S.bridge = 1;
  if (t < sc("s8")[0]) {
    S.gate = 0.75 + eprog(t, s("s7a")[0] - 0.8, s("s7a")[1] + 0.3) * 0.25;
    S.roofs = eprog(t, s("s7a")[1], s("s7a")[1] + 1.5);
    S.buildings = 0;
    S.yard = 0;
    S.bridge = 1;
    // ram attack: doors shut
    if (t < s("s7c")[0] - 0.5) {
      S.doorsOpen = t > s("s7b")[0] - 1 ? 0 : 1;
      S.bar = t > s("s7b")[0] - 1 ? 1 : 0;
    }
    // the mechanisms one after the other
    const d = "s7d";
    S.bridgeUp = eprog(t, W(d, "pont-levis") - 0.3, W(d, "derrière") - 0.2);
    S.portDown = Math.pow(prog(t, W(d, "tombe") - 0.6, W(d, "tombe") + 0.05), 2);
    S.doorsOpen = t >= s(d)[0] - 0.3 ? 1 - eprog(t, W(d, "vantaux") - 0.4, W(d, "bloqués") - 0.1) : S.doorsOpen;
    if (t >= s(d)[0] - 0.3) S.bar = eprog(t, W(d, "poutre") - 0.6, W(d, "poutre") + 0.4);
    S.gateCut = t >= W(d, "et", 1) - 0.4 && t < sc("s8")[0] ? 1 : 0;
    if (t > W(d, "assommoirs") - 3.2 && t < sc("s8")[0]) S.gateCut = 1;
    if (S.gateCut) {
      S.bridgeUp = 1;
      S.portDown = 1;
    }
    return S;
  }
  // courtyard life & siege
  S.bridgeUp = 0;
  S.portDown = 0;
  S.doorsOpen = 1;
  S.buildings = 1;
  S.yard = 1;
  S.well = 1;
  if (t < sc("s9")[0]) {
    S.buildings = eprog(t, sc("s8")[0] - 0.2, s("s8a")[0] + 3);
    S.yard = S.buildings;
    S.siege = eprog(t, W("s8b", "encercle") - 0.6, W("s8b", "encercle") + 2.5) * (1 - smooth(s("s8c")[0] - 0.5, s("s8c")[0], t));
    if (S.siege > 0.5) {
      S.bridgeUp = 1;
      S.portDown = 1;
      S.doorsOpen = 0;
    }
    if (t >= W("s8c", "géologie") - 0.6 && t < W("s8c", "céréales") - 1.2) {
      S.view = "soil";
      S.soilMode = 2;
    }
    if (t >= W("s8c", "céréales") - 1.2) {
      S.view = "store";
      S.stores = 0.35 + eprog(t, W("s8c", "céréales") - 1, s("s8c")[1]) * 0.65;
    }
    return S;
  }
  if (t < sc("s10")[0]) {
    S.roofHoles = 1 - eprog(t, W("s9b", "couvreurs") - 0.2, s("s9b")[1] + 0.5);
    if (t >= s("s9c")[0] - 0.6 && t < s("s9d")[0] - 0.6) {
      S.view = "roof";
      S.beamSwap = eprog(t, W("s9c", "charpentiers") - 0.6, s("s9c")[1]);
    }
    S.crack = t < s("s9d")[0] - 1 ? 0 : eprog(t, s("s9d")[0] - 1, W("s9d", "mur") + 0.2) * (1 - eprog(t, W("s9d", "rejointoient") - 0.2, W("s9d", "rejointoient") + 0.8) * 0.7);
    S.buttress = eprog(t, W("s9d", "contrefort") - 0.8, s("s9d")[1] + 0.6);
    S.puddle = t < s("s9e")[0] - 1 ? 0 : 1 - eprog(t, W("s9e", "rigoles") - 0.2, W("s9e", "gargouilles") + 0.3) * 0.85;
    S.rigole = eprog(t, W("s9e", "rigoles") - 0.6, W("s9e", "rigoles") + 1.4);
    S.spout = t > W("s9e", "gargouilles") - 1 ? 1 : 0;
    if (t >= s("s9f")[0] - 0.6 && t < W("s9f", "lorsqu’un") - 0.4) {
      S.view = "store";
      S.stores = 1;
      S.cellarExt = eprog(t, W("s9f", "agrandit") - 0.6, W("s9f", "agrandit") + 1.6);
    }
    S.postern = eprog(t, W("s9f", "mure") - 0.6, W("s9f", "mure") + 1.5);
    return S;
  }
  S.buttress = 1;
  S.postern = 1;
  S.rigole = 1;
  return S;
}

// ------------------------------------------------------------------
// Environment: light, sky, weather
// ------------------------------------------------------------------
export function envAt(t, view) {
  const E = {
    sunElev: 38, sunAz: 215, sunColor: new THREE.Color(0xfff1d6), sunInt: 2.6, hemiInt: 0.85,
    skyTop: new THREE.Color(0x5f8fc6), skyHor: new THREE.Color(0xcfe0ea), fogNear: 260, fogFar: 1900,
    rain: 0, studio: false, sunset: 0,
  };
  const sc = (id) => SC(id);
  // opening: golden morning
  const morning = 1 - smooth(sc("s2")[0] - 2, sc("s2")[0] + 2, t);
  if (morning > 0) {
    E.sunElev = lerp(E.sunElev, 22, morning);
    E.sunColor.lerp(new THREE.Color(0xffd9a0), morning);
    E.skyHor.lerp(new THREE.Color(0xf0dcc0), morning * 0.7);
  }
  // rain in the mud scene and the leaking roof
  const rain1 = pulse(t, seg("s4c")[0] - 0.8, seg("s4c")[1] + 1.2, 0.8);
  const rain2 = pulse(t, seg("s9b")[0] - 0.8, seg("s9b")[1] + 0.3, 0.6);
  const storm = Math.max(rain1, rain2, pulse(t, seg("s9a")[0], seg("s9b")[0], 1.5) * 0.6);
  if (storm > 0) {
    E.rain = Math.max(rain1, rain2);
    E.sunInt = lerp(E.sunInt, 0.55, storm);
    E.hemiInt = lerp(E.hemiInt, 1.0, storm);
    E.skyTop.lerp(new THREE.Color(0x58606a), storm);
    E.skyHor.lerp(new THREE.Color(0x8c949a), storm);
    E.fogNear = lerp(E.fogNear, 60, storm);
    E.fogFar = lerp(E.fogFar, 700, storm);
  }
  // siege: grim light
  const grim = pulse(t, seg("s8b")[0] - 0.5, seg("s8b")[1] + 0.8, 1);
  if (grim > 0) {
    E.sunColor.lerp(new THREE.Color(0xffc890), grim * 0.6);
    E.skyTop.lerp(new THREE.Color(0x6a6f88), grim * 0.6);
    E.sunElev = lerp(E.sunElev, 20, grim);
  }
  // CTA & finale: late afternoon -> sunset
  const late = smooth(sc("s10")[0] - 1, sc("s10")[0] + 2, t);
  if (late > 0) {
    E.sunElev = lerp(E.sunElev, 24, late);
    E.sunColor.lerp(new THREE.Color(0xffe0b0), late);
  }
  const sunset = smooth(seg("s11b")[1] + 3.5, seg("s11c")[1] + 2, t);
  if (sunset > 0) {
    E.sunset = sunset;
    E.sunElev = lerp(E.sunElev, 5, sunset);
    E.sunAz = lerp(E.sunAz, 250, sunset);
    E.sunColor.lerp(new THREE.Color(0xff9a50), sunset);
    E.sunInt = lerp(E.sunInt, 2.2, sunset);
    E.hemiInt = lerp(E.hemiInt, 0.45, sunset);
    E.skyTop.lerp(new THREE.Color(0x2f3f70), sunset);
    E.skyHor.lerp(new THREE.Color(0xf08a50), sunset);
  }
  if (view !== "world") {
    E.studio = true;
    E.sunElev = 40;
    E.sunAz = 32;
    E.sunColor = new THREE.Color(0xfff0dc);
    E.sunInt = 2.8;
    E.hemiInt = 0.9;
    E.rain = view === "roof" ? 0 : 0;
  }
  return E;
}

// ------------------------------------------------------------------
// Camera: shots keyed to the narration
// ------------------------------------------------------------------
function orbitPos(c, r, y, a) {
  return V(c.x + Math.cos(a) * r, y, c.z + Math.sin(a) * r);
}
function buildShots() {
  const s = (id) => seg(id);
  const sc = (id) => SC(id);
  const L = []; // {t0, fn(u) -> {p, l, fov}}
  const line = (t0, p0, l0, p1, l1, fov0 = 40, fov1 = fov0, e = "io") => L.push({ t0, p0, l0, p1, l1, fov0, fov1, e });
  const orbit = (t0, c, r0, r1, y0, y1, a0, a1, look, fov = 40, e = "io") => L.push({ t0, orbit: { c, r0, r1, y0, y1, a0, a1, look: look || c }, fov0: fov, fov1: fov, e });
  const d = (o, x, y, z) => V(o.x + x, o.y + y, o.z + z);

  // S1 intro
  line(0, V(-235, 105, 300), V(0, 22, 0), V(-140, 74, 182), V(0, 20, 0), 38, 38, "out");
  orbit(s("s1a")[0], V(0, 20, 0), 150, 82, 64, 40, 2.21, 0.95, V(0, 22, 0), 40, "io");
  line(s("s1b")[0], V(-24, 42, -98), V(0, 20, -20), V(-4, 34, 8), V(0, 16, 60), 44, 44, "io");
  line(s("s1c")[0], V(48, 34, 118), V(0, 20, 30), V(8, 17.6, 60), V(0, 17.5, 38), 40, 36, "io");
  line(s("s1c")[1] + 0.3, V(0, 96, 190), V(0, 10, 0), V(0, 122, 232), V(0, 10, 0), 42, 42, "io");
  // S2 site choice
  line(sc("s2")[0], V(265, 58, 240), V(0, 10, 0), V(190, 46, 150), V(0, 12, 0), 40, 40, "io");
  const gh = baseHeight(33, 158);
  line(s("s2b")[0], V(40.5, gh + 3.0, 167), V(14, gh + 5, 100), V(38.6, gh + 2.6, 164), V(12, gh + 6, 100), 40, 36, "io");
  line(s("s2b")[0] + 6.3, d(D1, 0, 78, 135), D1, d(D1, 0, 62, 100), d(D1, 0, -2, 0), 42, 42, "io");
  line(W("s2c", "plaine") - 0.4, d(D1, TILE_X[0] + 10, 32, 50), d(D1, TILE_X[0], 1, 0), d(D1, TILE_X[0] + 2, 26, 40), d(D1, TILE_X[0], 1, 0), 40);
  line(W("s2c", "un", 2) - 0.2, d(D1, TILE_X[3] - 8, 30, 48), d(D1, TILE_X[3], 0, 0), d(D1, TILE_X[3] - 2, 22, 38), d(D1, TILE_X[3], 0, 0), 40);
  line(W("s2c", "site") - 0.2, d(D1, TILE_X[2] + 30, 34, 44), d(D1, TILE_X[2], 8, 0), d(D1, TILE_X[2] - 20, 30, 46), d(D1, TILE_X[2], 8, 0), 40, 40, "lin");
  line(s("s2d")[0], d(D1, TILE_X[1] + 26, 26, 44), d(D1, TILE_X[1], 5, 0), d(D1, TILE_X[1] + 8, 18, 32), d(D1, TILE_X[1], 6, 0), 40);
  line(W("s2d", "cette"), V(130, 64, 170), V(0, 14, 0), V(58, 40, 78), V(0, 16, 0), 40);
  // S3 layout & foundations
  orbit(sc("s3")[0], V(0, 14, 0), 74, 58, 72, 54, 1.25, 0.45, V(0, 14, 0), 40);
  line(s("s3b")[0], V(-54, 23, 54), V(-30, 14, 30), V(-45, 19.5, 45), V(-30, 14, 30), 40, 38);
  line(s("s3c")[0] - 0.4, d(D2, 9, 4, 40), d(D2, 0, -1, 0), d(D2, 5, 3, 35), d(D2, 0, -1.5, 0), 40);
  line(s("s3d")[0] - 0.3, d(D2, -8, 1.5, 30), d(D2, 0, -2.5, 0), d(D2, 6, -1.5, 27), d(D2, 0, -5, 0), 42, 40, "lin");
  line(W("s3d", "erreur") - 0.6, d(D2, 10, 4, 46), d(D2, 0, -2, 0), d(D2, 7, 3, 42), d(D2, 0, -2, 0), 40);
  line(s("s3d")[1] - 6, V(64, 48, 74), V(0, 14, 0), V(42, 36, 52), V(0, 14, 0), 40);
  // S4 materials
  line(sc("s4")[0], V(30, 62, 92), V(0, 14, 0), V(-60, 72, 60), V(-120, 10, -40), 40);
  const qy = baseHeight(-222, -66);
  line(s("s4b")[0], V(-196, qy + 6, -40), V(-214, qy + 1, -58), V(-201, qy + 4.5, -45), V(-215, qy + 1, -59), 42);
  line(W("s4b", "tailleurs") - 0.3, V(-35, P + 3.2, 17), V(-44, P + 1, 8), V(-38, P + 2.6, 13.5), V(-44, P + 1, 8), 38);
  line(W("s4b", "charpentiers") - 0.3, V(-38, P + 3.4, -21), V(-46, P + 1, -30), V(-40, P + 2.6, -24.5), V(-46, P + 1, -30), 38);
  L.push({ t0: s("s4c")[0] - 0.3, mud: true, fov0: 36, fov1: 36, e: "io" });
  line(s("s4d")[0], V(-142, 20, 30), V(-120, 6, 0), V(-104, 17, 60), V(-82, 10, 36), 40, 40, "io");
  line(W("s4d", "stocke") - 0.5, V(70, 52, 88), V(0, 14, 0), V(58, 46, 66), V(0, 14, 0), 40);
  // S5 walls & towers
  orbit(sc("s5")[0], V(0, 18, 0), 78, 72, 30, 36, 0.95, 0.35, V(0, 18, 0), 40);
  line(s("s5b")[0], V(52, 23, 10), V(34, 21, -5), V(47, 21, 3), V(34, 22, -5), 42, 40);
  line(s("s5c")[0], V(-72, 30, -2), V(-31, 22, -14), V(-64, 27, -24), V(-31, 22, -16), 40);
  line(s("s5d")[0] - 0.4, d(D3, 17, 8, 11), d(D3, 1.5, 3.4, 0), d(D3, 13.5, 6.8, 8.5), d(D3, 2, 3.6, 0), 40);
  line(s("s5e")[0] - 0.4, d(D3, -9, 5.5, 14), d(D3, 0, 3, 0), d(D3, -6, 4.5, 12), d(D3, 0, 3, 0), 40);
  line(s("s5f")[0] - 0.4, d(D3, 16, 8, 9), d(D3, 1, 3.6, 0), d(D3, 13, 8, -13), d(D3, 1, 3.4, -1), 42, 42, "lin");
  line(s("s5f")[1] - 6, V(84, 62, -82), V(0, 14, 0), V(70, 54, -60), V(0, 16, 0), 40);
  // S6 moat & defences
  line(sc("s6")[0], V(40, 115, 95), V(0, 10, 0), V(28, 102, 72), V(0, 10, 0), 40);
  line(s("s6b")[0], V(82, 34, 70), V(40, 10, 44), V(70, 28, 64), V(36, 10, 44), 40);
  line(s("s6c")[0], V(16, 19, 128), V(0, 20, 40), V(10, 17.5, 104), V(0, 20, 40), 40);
  line(s("s6d")[0], V(22, 31, 20), V(6, 25, 44), V(14, 29.5, 24), V(4, 23, 46), 42);
  line(W("s6d", "depuis") - 0.4, V(19, P + 13.4, 27.2), V(6, P + 10, 60), V(11, P + 13.2, 27.4), V(0, P + 8, 62), 46);
  line(W("s6d", "archères") - 0.6, V(-48, 36, 112), V(0, 16, 36), V(-30, 32, 96), V(0, 16, 36), 40);
  // S7 gate
  line(sc("s7")[0], V(26, 22, 88), V(0, 18, 36), V(15, 20, 72), V(0, 18, 36), 40);
  line(s("s7b")[0], V(24, 18, 54), V(0, 16, 42), V(19, 17, 49), V(0, 16, 42), 40);
  line(s("s7c")[0], V(-32, 26, 76), V(0, 15, 36), V(30, 24, 72), V(0, 15, 36), 40, 40, "lin");
  line(s("s7d")[0], V(16, 19, 64), V(0, 17, 38), V(9, 18, 58), V(0, 17, 38), 40);
  line(W("s7d", "vantaux") - 0.8, V(0, 17.5, 16), V(0, 16.5, 34), V(0, 17, 21), V(0, 16.5, 34), 46);
  line(W("s7d", "et", 1) - 0.4, V(-14, 21.5, 47), V(0, 17, 32), V(-11, 20, 44), V(0, 17.5, 32), 44);
  // S8 life & siege
  line(sc("s8")[0], V(-8, 42, 42), V(-5, 14, -5), V(10, 32, 30), V(-6, 14, -6), 40);
  line(s("s8b")[0], V(0, 120, 190), V(0, 5, 0), V(0, 135, 160), V(0, 5, 0), 42);
  line(W("s8c", "géologie") - 0.6, d(D2, 10, 1, 38), d(D2, 0, -6.5, 0), d(D2, 6, -2, 32), d(D2, 0, -7.5, 0), 40);
  line(W("s8c", "céréales") - 1.2, d(D4, 8, 6.5, 13), d(D4, -2, 2, -2), d(D4, 4, 5, 9.5), d(D4, -2, 2, -2), 42);
  // S9 maintenance
  orbit(sc("s9")[0], V(0, 18, 0), 120, 105, 50, 44, -0.6, -1.1, V(0, 18, 0), 40);
  line(s("s9b")[0] - 0.6, V(-2, 31, -7), V(-12, 24, -21), V(-5, 29, -9.5), V(-12, 24, -21), 40);
  line(s("s9c")[0] - 0.6, d(D5, 11, 7, 13), d(D5, 0, 2, 0), d(D5, 8, 5.5, 10), d(D5, 0, 2.2, 0), 40);
  line(s("s9d")[0] - 0.6, V(-6, 21, -58), V(-12, 18, -31), V(-9, 19.5, -50), V(-12, 18, -31), 40);
  line(s("s9e")[0] - 0.6, V(14, 25, 16), V(4, 14, 4), V(16, 23, 21), V(4, 14, 6), 40);
  line(W("s9e", "gargouilles") - 0.5, V(48, 25, 54), V(34, 24, 34), V(45, 23, 50), V(34, 24, 34), 40);
  line(s("s9f")[0] - 0.6, d(D4, 11, 6.5, 12), d(D4, 2, 2, 0), d(D4, 8, 5.5, 10), d(D4, 2, 2, 0), 42);
  line(W("s9f", "lorsqu’un") - 0.4, V(18, 17.5, -44), V(14, 15.5, -31), V(15, 16.8, -40), V(14, 15.5, -31), 40);
  orbit(s("s9g")[0] - 0.5, V(0, 18, 0), 95, 105, 40, 52, 2.2, 2.9, V(0, 18, 0), 40);
  // S10 call to action
  orbit(sc("s10")[0], V(0, 20, 0), 112, 100, 46, 42, 0.25, 1.9, V(0, 20, 0), 40, "lin");
  // S11 finale tour
  line(sc("s11")[0], V(-260, 125, 255), V(0, 15, 0), V(-150, 80, 175), V(0, 16, 0), 40);
  line(W("s11a", "fallait") - 0.4, V(64, 13.6, 44), V(-20, 13, 44), V(22, 13.8, 44.5), V(-20, 13.5, 44), 44, 44, "lin");
  line(W("s11a", "fondations") - 0.3, V(0, 16.2, 74), V(0, 17, 35), V(0, 15.8, 52), V(0, 17, 35), 42);
  line(W("s11a", "transporter") - 0.3, V(44, 15.8, 47), V(30, 30, 30), V(41, 15.8, 42), V(30, 31, 30), 46);
  line(W("s11a", "construire", 2) - 0.3, V(-26, P + 12.6, 29.3), V(10, P + 11.5, 29.3), V(-14, P + 12.6, 29.3), V(20, P + 11, 29.3), 48, 48, "lin");
  line(W("s11a", "anticiper") - 0.3, V(-10, 18, 12), V(13, 30, -13), V(-4, 16.8, 5), V(13, 34, -13), 44);
  line(s("s11b")[0], V(-4, 20, -2), V(-18, 17, -20), V(-9, 19, 3), V(-20, 16, -18), 42);
  line(W("s11b", "ces") - 0.3, V(92, 72, 122), V(0, 14, 0), V(80, 64, 104), V(0, 14, 0), 40);
  line(s("s11c")[0] - 1.5, V(60, 48, 108), V(0, 18, 0), V(165, 92, 265), V(0, 20, 0), 40, 40, "io");
  L.sort((a, b) => a.t0 - b.t0);
  return L;
}
let SHOTS = null;
export function shotIndex(t) {
  if (!SHOTS) SHOTS = buildShots();
  let i = 0;
  for (let k = 0; k < SHOTS.length; k++) if (SHOTS[k].t0 <= t) i = k;
  return i;
}
export function cameraAt(t, mudCam) {
  if (!SHOTS) SHOTS = buildShots();
  const i = shotIndex(t);
  const sh = SHOTS[i];
  const t1 = i + 1 < SHOTS.length ? SHOTS[i + 1].t0 : sh.t0 + 30;
  const u0 = prog(t, sh.t0, t1);
  const u = sh.e === "lin" ? u0 : sh.e === "out" ? 1 - Math.pow(1 - u0, 2) : u0 * u0 * (3 - 2 * u0) * 0.75 + u0 * 0.25;
  let p, l;
  if (sh.orbit) {
    const o = sh.orbit;
    p = orbitPos(o.c, lerp(o.r0, o.r1, u), lerp(o.y0, o.y1, u), lerp(o.a0, o.a1, u));
    l = o.look.clone();
  } else if (sh.mud) {
    p = mudCam.p0.clone().lerp(mudCam.p1, u);
    l = mudCam.l.clone();
  } else {
    p = sh.p0.clone().lerp(sh.p1, u);
    l = sh.l0.clone().lerp(sh.l1, u);
  }
  return { p, l, fov: lerp(sh.fov0, sh.fov1, u), shot: i, cutAt: sh.t0, nextCut: t1 };
}
export function allCuts() {
  if (!SHOTS) SHOTS = buildShots();
  return SHOTS.map((s) => s.t0);
}
