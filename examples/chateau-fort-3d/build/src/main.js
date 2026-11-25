import { THREE, clamp, lerp, smooth, prog, eprog, pulse, hash, mat, stoneMaterial, woodMaterial, mesh, baseGeo, seg, scene as SC, W, CUES, mergeStatic } from "./lib.js";
import { buildTerrain, buildForest, buildVillage, buildRibbon, heightAt, baseHeight, polyPoint, MAIN_ROAD, QUARRY_ROAD, PLATEAU as P } from "./terrain.js";
import { buildCastle } from "./castle.js";
import { makePerson, pose, makeQuadruped, poseQuad, makeCart, makeCrane, poseCrane, makeRam } from "./people.js";
import { buildSiteTiles, buildSoilSection, buildWallSection, buildStoreroom, buildRoofFrame, D1, D2, D3, D4, D5, TILE_X } from "./dioramas.js";
import { stateAt, emptyState, fullState, envAt, cameraAt } from "./director.js";

export function createWorld(stage, labelRoot) {
  const renderer = new THREE.WebGLRenderer({ antialias: true, powerPreference: "high-performance" });
  renderer.setPixelRatio(1);
  renderer.setSize(1600, 900, false);
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.05;
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFShadowMap;
  renderer.domElement.style.width = "100%";
  renderer.domElement.style.height = "100%";
  stage.appendChild(renderer.domElement);

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(40, 16 / 9, 0.3, 4200);
  scene.fog = new THREE.Fog(0xcfe0ea, 260, 1900);

  // ---- lights ----
  const hemi = new THREE.HemisphereLight(0xcfe3ff, 0x5a5238, 0.85);
  scene.add(hemi);
  const sun = new THREE.DirectionalLight(0xfff1d6, 2.6);
  sun.castShadow = true;
  sun.shadow.mapSize.set(2048, 2048);
  sun.shadow.bias = -0.0004;
  sun.shadow.normalBias = 0.6;
  scene.add(sun, sun.target);
  const fill = new THREE.DirectionalLight(0x9fb8d8, 0.35);
  scene.add(fill, fill.target);

  // ---- sky dome ----
  const skyU = { top: { value: new THREE.Color() }, hor: { value: new THREE.Color() }, sunDir: { value: new THREE.Vector3() }, sunCol: { value: new THREE.Color() }, sunset: { value: 0 } };
  const sky = new THREE.Mesh(
    new THREE.SphereGeometry(3800, 32, 16),
    new THREE.ShaderMaterial({
      side: THREE.BackSide,
      depthWrite: false,
      fog: false,
      uniforms: skyU,
      vertexShader: "varying vec3 vD; void main(){ vD = normalize(position); gl_Position = projectionMatrix*modelViewMatrix*vec4(position,1.0); }",
      fragmentShader: `uniform vec3 top; uniform vec3 hor; uniform vec3 sunDir; uniform vec3 sunCol; uniform float sunset; varying vec3 vD;
        float h(vec2 p){return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453);}
        float n(vec2 p){vec2 i=floor(p);vec2 f=fract(p);f=f*f*(3.0-2.0*f);return mix(mix(h(i),h(i+vec2(1,0)),f.x),mix(h(i+vec2(0,1)),h(i+vec2(1,1)),f.x),f.y);}
        void main(){ float y = clamp(vD.y, -0.2, 1.0);
          vec3 c = mix(hor, top, pow(max(y,0.0), 0.55));
          float s = max(dot(normalize(vD), normalize(sunDir)), 0.0);
          c += sunCol * (pow(s, 600.0)*3.0 + pow(s, 12.0)*0.25*(0.4+sunset) + pow(s,3.0)*0.12*sunset);
          // soft clouds
          vec2 uv = vD.xz/(vD.y+0.25)*1.6;
          float cl = n(uv*1.3)*0.6 + n(uv*3.1)*0.3 + n(uv*7.0)*0.1;
          cl = smoothstep(0.55, 0.85, cl) * smoothstep(0.02, 0.25, vD.y);
          vec3 cc = mix(vec3(1.0), mix(vec3(1.0,0.75,0.55), vec3(1.0,0.6,0.45), sunset), sunset);
          c = mix(c, cc*mix(1.0,0.85,sunset), cl*0.55);
          if (vD.y < 0.0) c = hor;
          gl_FragColor = vec4(c, 1.0);
          #include <tonemapping_fragment>
          #include <colorspace_fragment>
        }`,
    }),
  );
  sky.frustumCulled = false;
  scene.add(sky);

  // ---- world ----
  const terr = buildTerrain(scene);
  buildForest(scene);
  buildVillage(scene);
  const castle = buildCastle(scene);
  // roads
  const roadMat = mat(0x7a6648, { roughness: 1 });
  const mainRoad = buildRibbon(MAIN_ROAD, 5.2, roadMat, 0.12);
  scene.add(mainRoad);
  const mudMat = new THREE.MeshStandardMaterial({ color: 0x4a3626, roughness: 0.35, metalness: 0.05 });
  const pavedMat = stoneMaterial(0x9c9584, { course: 0.45, len: 0.6, tint: 0.25 });
  const qRoadMud = buildRibbon(QUARRY_ROAD, 5.0, mudMat, 0.1);
  const qRoadPaved = buildRibbon(QUARRY_ROAD, 5.0, pavedMat, 0.16);
  scene.add(qRoadMud, qRoadPaved);
  // big mud puddle on the quarry road
  const MUD_U = 0.42;
  const mudP = polyPoint(QUARRY_ROAD, MUD_U);
  const mudPatch = new THREE.Mesh(new THREE.CircleGeometry(6, 24).rotateX(-Math.PI / 2), new THREE.MeshStandardMaterial({ color: 0x5a4028, roughness: 0.25, metalness: 0.05 }));
  mudPatch.scale.set(1, 1, 1.6);
  mudPatch.rotation.y = mudP.dir;
  mudPatch.position.set(mudP.x, baseHeight(mudP.x, mudP.z) + 0.22, mudP.z);
  scene.add(mudPatch);

  // ---- quarry: stepped cut faces on the western outcrop ----
  const quarry = new THREE.Group();
  const qStone = stoneMaterial(0xd2c8b0, { course: 1.6, len: 2.6, tint: 0.12 });
  const QX = -222, QZ = -66;
  const qy = baseHeight(QX, QZ);
  for (let i = 0; i < 4; i++) {
    const b = mesh(baseGeo(new THREE.BoxGeometry(16, 12 - i * 2.6, 6)), qStone, quarry);
    b.position.set(QX + i * 2.6, qy - 6, QZ + i * 2.6);
    b.rotation.y = -Math.PI / 4;
  }
  for (let i = 0; i < 18; i++) {
    const b = mesh(new THREE.BoxGeometry(1.6, 0.8, 1.0), qStone, quarry);
    b.position.set(QX + 16 + hash(i) * 10, 0, QZ + 16 + hash(i + 9) * 10);
    b.position.y = baseHeight(b.position.x, b.position.z) + 0.35;
    b.rotation.y = hash(i * 3) * 3;
  }
  scene.add(quarry);
  mergeStatic(quarry);
  const benchTop = (i) => qy - 6 + 12 - i * 2.6;

  // ---- dioramas ----
  const tiles = buildSiteTiles(scene);
  const soil = buildSoilSection(scene);
  const wsec = buildWallSection(scene);
  const store = buildStoreroom(scene);
  const roofF = buildRoofFrame(scene);
  const studioFloor = new THREE.Mesh(new THREE.CircleGeometry(1400, 48).rotateX(-Math.PI / 2), new THREE.MeshStandardMaterial({ color: 0x2a2622, roughness: 1 }));
  studioFloor.position.set(0, D1.y - 22, 0);
  studioFloor.receiveShadow = true;
  scene.add(studioFloor);

  // ---- people pools ----
  const pools = {};
  const pool = (name, n, factory) => {
    const arr = [];
    for (let i = 0; i < n; i++) {
      const o = factory(i);
      o.visible = false;
      scene.add(o);
      arr.push(o);
    }
    pools[name] = { arr, i: 0 };
  };
  pool("worker", 26, (i) => makePerson("worker", i, { tool: ["pick", "shovel", "basket", "hammer", "stone"][i % 5] }));
  pool("digger", 16, (i) => makePerson("worker", 100 + i, { tool: i % 2 ? "pick" : "shovel" }));
  pool("mason", 18, (i) => makePerson("mason", 140 + i, { tool: "hammer" }));
  pool("carrier", 10, (i) => makePerson("worker", 170 + i, { tool: i % 2 ? "stone" : "basket" }));
  pool("soldier", 18, (i) => makePerson("soldier", 200 + i, { tool: "bow" }));
  pool("guard", 6, (i) => makePerson("soldier", 230 + i, { tool: "spear" }));
  pool("enemy", 28, (i) => makePerson("enemy", 260 + i, { tool: "spear", palette: "enemy" }));
  pool("villager", 14, (i) => makePerson("villager", 300 + i, { tool: ["sack", "bucket", "basket", "none"][i % 4] }));
  pool("architect", 1, () => makePerson("architect", 1, { tool: "staff" }));
  pool("noble", 1, () => makePerson("noble", 2, {}));
  pool("horse", 4, (i) => makeQuadruped("horse", i));
  pool("ox", 6, (i) => makeQuadruped("ox", 10 + i));
  pool("cart", 5, (i) => makeCart(i, ["stone", "stone", "wood", "stone", "supplies"][i]));
  pool("crane", 2, () => makeCrane());
  pool("ram", 1, () => makeRam());
  const take = (name) => {
    const p = pools[name];
    const o = p.arr[p.i % p.arr.length];
    p.i++;
    o.visible = true;
    return o;
  };
  const resetPools = () => {
    for (const k in pools) {
      pools[k].i = 0;
      for (const o of pools[k].arr) o.visible = false;
    }
  };
  const UPV = new THREE.Vector3(0, 1, 0);
  let curMoat = 0;
  const gy = (x, z) => (Math.abs(x) < 33 && Math.abs(z) < 33 ? P : heightAt(x, z, curMoat));
  const place = (o, x, z, rotY, y) => {
    o.position.set(x, y ?? gy(x, z), z);
    o.rotation.set(0, rotY, 0);
    return o;
  };
  const faceTo = (x0, z0, x1, z1) => Math.atan2(x1 - x0, z1 - z0);
  const walkAlong = (o, pl, u, action, t, speed = 6, lane = 0) => {
    const a = polyPoint(pl, u);
    const nx = Math.cos(a.dir), nz = -Math.sin(a.dir);
    place(o, a.x + nx * lane, a.z + nz * lane, a.dir);
    pose(o, action, t * speed + hash(o.userData.seed || 1) * 6);
    return a;
  };
  // cart + animal team
  const team = (pl, u, t, load = "cart", moving = 1, reverse = false) => {
    const c = take("cart");
    const ox = take("ox");
    const a = polyPoint(pl, u);
    const b = polyPoint(pl, Math.min(1, u + 0.012));
    const dir = reverse ? a.dir + Math.PI : a.dir;
    place(c, a.x, a.z, dir);
    c.userData.wheels.forEach((w) => {
      w.rotation.set(t * 2.2 * moving, 0, 0);
      w.position.y = 0.62;
    });
    const fx = Math.sin(dir), fz = Math.cos(dir);
    place(ox, a.x + fx * 4.6, a.z + fz * 4.6, dir);
    poseQuad(ox, t * 4, moving);
    const d = take("worker");
    place(d, a.x + fx * 4.2 + Math.cos(dir) * 1.4, a.z + fz * 4.2 - Math.sin(dir) * 1.4, dir);
    pose(d, moving ? "walk" : "idle", t * 5);
    return { c, ox, d };
  };

  // ---- siege camp ----
  const tentGeo = new THREE.ConeGeometry(3.6, 4.6, 8);
  tentGeo.translate(0, 2.3, 0);
  const tents = new THREE.InstancedMesh(tentGeo, new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.9 }), 70);
  {
    const M = new THREE.Matrix4();
    for (let i = 0; i < 70; i++) {
      const a = (i / 70) * Math.PI * 2 + hash(i) * 0.05;
      const r = 98 + hash(i * 3) * 34;
      const x = Math.cos(a) * r, z = Math.sin(a) * r;
      M.makeScale(1, 1, 1);
      M.setPosition(x, baseHeight(x, z) - 0.2, z);
      tents.setMatrixAt(i, M);
      tents.setColorAt(i, new THREE.Color(i % 3 === 0 ? 0xa83a2c : i % 3 === 1 ? 0xd8ccb0 : 0x8a2c22));
    }
  }
  tents.castShadow = true;
  scene.add(tents);
  const fires = new THREE.InstancedMesh(new THREE.SphereGeometry(0.6, 6, 4), new THREE.MeshBasicMaterial({ color: 0xff8a30 }), 16);
  {
    const M = new THREE.Matrix4();
    for (let i = 0; i < 16; i++) {
      const a = (i / 16) * Math.PI * 2 + 0.1;
      const r = 92;
      M.makeTranslation(Math.cos(a) * r, baseHeight(Math.cos(a) * r, Math.sin(a) * r) + 0.4, Math.sin(a) * r);
      fires.setMatrixAt(i, M);
    }
  }
  scene.add(fires);

  // ---- arrows in flight ----
  const arrowGeo = new THREE.CylinderGeometry(0.035, 0.035, 1.1, 4);
  const arrows = new THREE.InstancedMesh(arrowGeo, mat(0x2a2018), 80);
  scene.add(arrows);
  // falling stones (murder holes)
  const dropStones = new THREE.InstancedMesh(new THREE.DodecahedronGeometry(0.35, 0), stoneMaterial(0xa89e88), 6);
  scene.add(dropStones);
  // roof holes on the hall (leaking roof vignette)
  const holes = new THREE.Group();
  {
    const ang = Math.atan2(4.675, 4.75);
    for (let i = 0; i < 5; i++) {
      const hm = new THREE.Mesh(new THREE.BoxGeometry(1.1, 0.06, 0.9), new THREE.MeshBasicMaterial({ color: 0x120e0a }));
      hm.position.set(-19 + i * 3.1, P + 9 + 2.0 + (i % 2) * 0.6, -24.2 + 4.75 - (2.0 + (i % 2) * 0.6) / Math.tan(ang) - 0.05);
      hm.rotation.x = ang;
      holes.add(hm);
    }
  }
  scene.add(holes);

  // ---- rain ----
  const RAIN_N = 1800;
  const rain = new THREE.InstancedMesh(new THREE.BoxGeometry(0.018, 0.9, 0.018), new THREE.MeshBasicMaterial({ color: 0xc8d4dc, transparent: true, opacity: 0.45, fog: false }), RAIN_N);
  rain.frustumCulled = false;
  scene.add(rain);

  // ---- choreography ----
  const sc = (id) => SC(id);
  const sg = (id) => seg(id);
  function wallTopSpot(i, n, side = "S") {
    // positions on the wall walk
    const u = clamp((i + 0.5) / n);
    if (side === "S") {
      const x = u < 0.5 ? lerp(-27, -11, u * 2) : lerp(11, 27, (u - 0.5) * 2);
      return [x, P + 11.0, 30.0, 0];
    }
    if (side === "E") return [30, P + 11, lerp(-26, 26, u), Math.PI / 2];
    if (side === "W") return [-30, P + 11, lerp(-26, 26, u), -Math.PI / 2];
    return [lerp(-26, 26, u), P + 11, -30, Math.PI];
  }
  function lifeInCastle(t, nVill = 8, nSold = 8) {
    for (let i = 0; i < nSold; i++) {
      const g = take("guard");
      const side = ["S", "E", "W", "N"][i % 4];
      const k = (t * 0.035 + hash(i * 1.7)) % 1;
      const u = 0.15 + 0.7 * (0.5 + 0.5 * Math.sin(k * Math.PI * 2));
      const [x, y, z, r] = wallTopSpot(u * 2 - 0.5, 2, side);
      const dirSign = Math.cos(k * Math.PI * 2) > 0 ? 1 : -1;
      place(g, x, z, r + (Math.PI / 2) * dirSign, y);
      pose(g, "walk", t * 4 + i);
    }
    const spots = [[-3, 10.5, "pull"], [-1, 6.3, "idle"], [-16, 13, "carry"], [-10, 2, "walk"], [12, 8, "walk"], [-18, -4, "talk"], [20, 15, "idle"], [4, 20, "walk"], [-6, -12, "walk"], [8, -2, "talk"]];
    for (let i = 0; i < nVill; i++) {
      const v = take("villager");
      const sp = spots[i % spots.length];
      let x = sp[0], z = sp[1];
      let r = hash(i) * 6;
      if (sp[2] === "walk" || sp[2] === "carry") {
        const k = (t * 0.05 + hash(i * 2)) % 1;
        const ang = k * Math.PI * 2;
        x += Math.cos(ang) * 5;
        z += Math.sin(ang) * 5;
        r = -ang;
      }
      place(v, x, z, r);
      pose(v, sp[2], t * 5 + i);
    }
    const h = take("horse");
    place(h, 24, 2, Math.PI);
    poseQuad(h, 0, 0);
  }
  function crowd(t, S) {
    resetPools();
    // cranes on site during wall building
    if (S.scaffold > 0 && S.walls < 1) {
      const c1 = take("crane");
      place(c1, 36.6, -6, -Math.PI / 2, P);
      poseCrane(c1, t, (t * 0.12) % 1);
      const c2 = take("crane");
      place(c2, -6, -36.6, 0, P);
      poseCrane(c2, t + 3, (t * 0.1 + 0.4) % 1);
    }
    // ---------- S1 ----------
    if (t < sc("s2")[0]) {
      if (S.walls >= 1) lifeInCastle(t, 8, 8);
      for (let i = 0; i < 4; i++) walkAlong(take("villager"), MAIN_ROAD, ((t * 0.006 + i * 0.21) % 1) * 0.9 + 0.05, "walk", t, 5, i % 2 ? 1.2 : -1.2);
      if (S.walls >= 1) team(MAIN_ROAD, 0.5 - ((t * 0.004) % 0.4), t, "cart", 1, true);
      return;
    }
    // ---------- S2 ----------
    if (t < sc("s3")[0]) {
      if (t >= sg("s2b")[0] - 1 && t < sg("s2b")[0] + 6.3) {
        const h = take("horse");
        const hx = 33, hz = 158;
        place(h, hx, hz, faceTo(hx, hz, 0, 0));
        poseQuad(h, t * 2, 0.1);
        const n = take("noble");
        place(n, hx, hz, faceTo(hx, hz, 0, 0), baseHeight(hx, hz) + 1.05);
        pose(n, "idle", t);
        n.userData.hipL.rotation.x = -1.2;
        n.userData.hipR.rotation.x = -1.2;
        n.userData.hipL.rotation.z = -0.5;
        n.userData.hipR.rotation.z = 0.5;
        const a = take("architect");
        place(a, hx - 2.6, hz - 0.8, faceTo(hx, hz, 0, 0));
        pose(a, t > sg("s2b")[0] + 2.5 ? "point" : "idle", t * 2);
      }
      return;
    }
    // ---------- S3 ----------
    if (t < sc("s4")[0]) {
      if (t < sg("s3b")[0]) {
        const a = take("architect");
        place(a, 0, 34, Math.PI);
        pose(a, "point", t);
        for (let i = 0; i < 6; i++) {
          const w = take("worker");
          const k = (S.outline * 0.98 + i * 0.012) % 1;
          // walk along the perimeter
          const per = k * 240;
          let x, z;
          if (per < 60) [x, z] = [-30, 30 - per];
          else if (per < 120) [x, z] = [-30 + (per - 60), -30];
          else if (per < 180) [x, z] = [30, -30 + (per - 120)];
          else [x, z] = [30 - (per - 180), 30];
          place(w, x + (i % 2) * 1.2, z + 1.5, hash(i) * 6);
          pose(w, i % 2 ? "hammer" : "pull", t * 5 + i);
        }
      } else if (t < sg("s3c")[0]) {
        for (let i = 0; i < 16; i++) {
          const d = take("digger");
          const onW = i < 8;
          const u = (i % 8) / 8;
          const x = onW ? -30 + (i % 2 ? 1 : -1) * 0.9 : lerp(-27, -10, u);
          const z = onW ? lerp(28, -4, u) : 30 + (i % 2 ? 1 : -1) * 0.9;
          if (u > S.trench + 0.1) {
            d.visible = false;
            continue;
          }
          place(d, x, z, onW ? Math.PI / 2 * (i % 2 ? -1 : 1) : i % 2 ? Math.PI : 0, P - 0.35);
          pose(d, d.userData.tool && i % 2 ? "pick" : "dig", t * 4.5 + i * 1.3);
        }
        for (let i = 0; i < 5; i++) {
          const c = take("carrier");
          const k = (t * 0.12 + i * 0.2) % 1;
          const back = k > 0.5;
          const x = -32 - (back ? 1 - k : k) * 2 * 6, z = 24 - i * 7;
          place(c, x, z, back ? Math.PI / 2 : -Math.PI / 2);
          pose(c, "carry", t * 6 + i);
        }
      } else if (S.view === "world") {
        for (let i = 0; i < 10; i++) {
          const m = take("mason");
          const [x, , z, r] = wallTopSpot(i % 5, 5, ["S", "W", "N", "E"][Math.floor(i / 5) * 2]);
          place(m, x, z + (Math.abs(z) > 29 ? -2.2 : 0), r + Math.PI, P + 0.6 * S.footing);
          pose(m, "hammer", t * 5 + i);
        }
      }
      return;
    }
    // ---------- S4 ----------
    if (t < sc("s5")[0]) {
      // stockpile workers + incoming carts everywhere in S4 world shots
      if (t < sg("s4b")[0]) {
        team(QUARRY_ROAD, 0.6 + ((t - sc("s4")[0]) * 0.012), t);
        team(QUARRY_ROAD, 0.3 + ((t - sc("s4")[0]) * 0.012), t);
        for (let i = 0; i < 6; i++) {
          const c = take("carrier");
          const k = (t * 0.1 + i * 0.17) % 1;
          place(c, -40 + k * 10 * (i % 2 ? 1 : -1), -10 + i * 6, i % 2 ? Math.PI / 2 : -Math.PI / 2);
          pose(c, "carry", t * 6 + i);
        }
      }
      if (t >= sg("s4b")[0] - 0.5 && t < W("s4b", "tailleurs") - 0.3) {
        // quarrymen on the benches
        for (let i = 0; i < 12; i++) {
          const w = take(i < 8 ? "digger" : "worker");
          const bench = i % 3;
          const along = ((Math.floor(i / 3) - 1.5) * 2.6) + (i % 3) * 0.7;
          const bx = QX + (bench + 1) * 2.6 + 1.6 + along * 0.707, bz = QZ + (bench + 1) * 2.6 + 1.6 - along * 0.707;
          place(w, bx, bz, -Math.PI * 0.75, benchTop(bench + 1));
          pose(w, i % 2 ? "pick" : "hammer", t * 4.2 + i);
        }
        team(QUARRY_ROAD, 0.04, t, "cart", 0);
      }
      if (t >= W("s4b", "tailleurs") - 0.5 && t < W("s4b", "charpentiers") - 0.3) {
        for (let i = 0; i < 5; i++) {
          const m = take("mason");
          const a = (i / 5) * Math.PI * 2;
          place(m, -44 + Math.cos(a) * 2.6, 8 + Math.sin(a) * 2.2, faceTo(Math.cos(a), Math.sin(a), 0, 0));
          pose(m, "chisel", t * 6 + i);
        }
      }
      if (t >= W("s4b", "charpentiers") - 0.5 && t < sg("s4c")[0] - 0.3) {
        for (let i = 0; i < 4; i++) {
          const m = take("worker");
          const side = i % 2 ? 1 : -1;
          place(m, -43.5 + side * 1.0, -31.5 + Math.floor(i / 2) * 3, side > 0 ? -Math.PI / 2 : Math.PI / 2);
          pose(m, "hammer", t * 5 + i);
        }
      }
      if (t >= sg("s4c")[0] - 0.5 && t < sg("s4d")[0]) {
        // stuck cart in the mud
        const { c, ox, d } = team(QUARRY_ROAD, MUD_U, t, "cart", 0.15);
        c.position.y -= 0.55;
        c.rotation.z = 0.12;
        c.rotation.x = -0.06;
        const wheel = c.userData.wheels[0];
        wheel.rotation.z = 0.5;
        wheel.position.y = 0.3;
        ox.rotation.x = -0.08;
        poseQuad(ox, t * 6, 0.5);
        pose(d, "pull", t * 4);
        const dir = mudP.dir;
        for (let i = 0; i < 3; i++) {
          const w = take("worker");
          const bx = mudP.x - Math.sin(dir) * 2.6 + Math.cos(dir) * (i - 1) * 0.8;
          const bz = mudP.z - Math.cos(dir) * 2.6 - Math.sin(dir) * (i - 1) * 0.8;
          place(w, bx, bz, dir);
          w.position.y -= 0.15;
          pose(w, i === 2 && t > W("s4c", "bêtes") - 0.5 ? "tired" : "push", t * 3 + i);
        }
      }
      if (t >= sg("s4d")[0] - 0.3) {
        for (let k = 0; k < 4; k++) team(QUARRY_ROAD, ((t - sg("s4d")[0]) * 0.014 + k * 0.24) % 1, t);
        for (let i = 0; i < 8; i++) {
          const c = take("carrier");
          const k = (t * 0.09 + i * 0.13) % 1;
          place(c, -40 - k * 6, -16 + i * 4.5, -Math.PI / 2);
          pose(c, "carry", t * 6 + i);
        }
      }
      return;
    }
    // ---------- S5 ----------
    if (t < sc("s6")[0]) {
      if (S.view === "world") {
        const top = (n) => castle.elements[n].mesh.scale.y * 11.6 - 0.6;
        const ws = ["wN", "wE", "wW", "wSW", "wSE"];
        for (let i = 0; i < 16; i++) {
          const m = take("mason");
          const wn = ws[i % 5];
          const w = castle.wallInfo.find((q) => q.name === wn);
          const u = ((i * 0.37) % 1 - 0.5) * (w.len - 6);
          const x = w.cx + (w.ax ? u : 0), z = w.cz + (w.ax ? 0 : u);
          place(m, x, z, w.ax ? (i % 2 ? 0 : Math.PI) : (i % 2 ? Math.PI / 2 : -Math.PI / 2), P + top(wn));
          pose(m, i % 3 === 0 ? "carry" : "hammer", t * 5 + i);
        }
        for (let i = 0; i < 6; i++) {
          const c = take("carrier");
          const k = (t * 0.08 + i * 0.16) % 1;
          place(c, 42 - k * 6, -20 + i * 8, -Math.PI / 2);
          pose(c, "carry", t * 6 + i);
        }
      }
      return;
    }
    // ---------- S6 ----------
    if (t < sc("s7")[0]) {
      if (t < sg("s6b")[0]) {
        for (let i = 0; i < 16; i++) {
          const d = take("digger");
          const u = i / 16;
          const ang = u * Math.PI * 2;
          if (u > S.moat + 0.02 || u < S.moat - 0.35) {
            d.visible = false;
            continue;
          }
          // along the ring at half-size 44
          const r = 44;
          const x = Math.sin(ang) * r * 1.2, z = Math.cos(ang) * r * 1.2;
          const cx = clamp(x, -44, 44), cz = clamp(z, -44, 44);
          place(d, cx, cz, ang + Math.PI, P - 3.5);
          pose(d, i % 2 ? "pick" : "dig", t * 4.5 + i);
        }
      }
      if (t >= sg("s6c")[0] - 0.5) {
        const march = eprog(t, sg("s6c")[0] - 0.5, sg("s6d")[0] + 1);
        for (let i = 0; i < 24; i++) {
          const e = take("enemy");
          const row = Math.floor(i / 6), col = i % 6;
          const u = lerp(0.2, 0.05, march) + row * 0.016;
          const a = polyPoint(MAIN_ROAD, u);
          const lane = (col - 2.5) * 1.6 + (row % 2) * 0.4;
          const nx = Math.cos(a.dir), nz = -Math.sin(a.dir);
          place(e, a.x + nx * lane, a.z + nz * lane, a.dir + Math.PI);
          pose(e, march < 1 ? "march" : "idle", t * 5.5 + row);
        }
        if (t >= sg("s6d")[0] - 0.5) {
          for (let i = 0; i < 12; i++) {
            const s = take("soldier");
            const [x, y, z] = wallTopSpot(i % 6, 6, "S");
            if (i >= 6) {
              const tx = i % 2 ? -30 : 30;
              const a = Math.PI / 2 + ((i % 3) - 1) * 0.5;
              place(s, tx + Math.cos(a) * 3.6, 30 + Math.sin(a) * 3.6, 0, P + 18);
            } else place(s, x, z + 0.4, 0, y);
            pose(s, "shoot", t * 3 + i);
          }
        }
      }
      return;
    }
    // ---------- S7 ----------
    if (t < sc("s8")[0]) {
      if (t >= sg("s7b")[0] - 0.8 && t < sg("s7c")[0] - 0.5) {
        const r = take("ram");
        const k = eprog(t, sg("s7b")[0] - 0.8, sg("s7b")[0] + 2.5);
        const z = lerp(58, 42.5, k);
        place(r, 0, z, Math.PI, P + 0.6);
        const hit = k >= 1 ? Math.pow(Math.abs(Math.sin((t - sg("s7b")[0]) * 2.4)), 6) : 0;
        r.userData.log.position.z = -hit * 1.4 - 0.2 + (k >= 1 ? 0 : 0);
        for (let i = 0; i < 6; i++) {
          const e = take("enemy");
          place(e, (i % 2 ? 0.75 : -0.75), z + 1.2 + Math.floor(i / 2) * 1.6, Math.PI, P + 0.6);
          pose(e, "push", t * 4 + i);
        }
        for (let i = 0; i < 14; i++) {
          const e = take("enemy");
          place(e, ((i % 7) - 3) * 1.7, 52 + Math.floor(i / 7) * 2 + (i % 2) * 0.5, Math.PI);
          pose(e, "idle", t + i);
        }
        for (let i = 0; i < 6; i++) {
          const s = take("soldier");
          place(s, (i - 2.5) * 1.6, 37.1, 0, P + 13.4);
          pose(s, "shoot", t * 3 + i);
        }
      }
      if (t >= sg("s7c")[0] - 0.5 && t < sg("s7d")[0] - 0.3) {
        for (let i = 0; i < 8; i++) {
          const v = take("villager");
          const k = (t * 0.045 + i * 0.125) % 1;
          const inb = i % 2 === 0;
          const z = inb ? lerp(66, 18, k) : lerp(18, 66, k);
          place(v, inb ? -0.9 : 0.9, z, inb ? Math.PI : 0, z > 37.7 && z < 48.7 ? P + 0.4 : undefined);
          pose(v, "walk", t * 5 + i);
        }
        const tm = team(MAIN_ROAD, 0.12 - ((t - sg("s7c")[0]) * 0.006), t, "cart", 1, true);
        for (let i = 0; i < 2; i++) {
          const g = take("guard");
          place(g, i ? 2.4 : -2.4, 41, 0);
          pose(g, "idle", t + i);
        }
      }
      if (t >= sg("s7d")[0] - 0.3) {
        for (let i = 0; i < 4; i++) {
          const s = take("guard");
          place(s, (i - 1.5) * 1.6, 30.5, 0, P + 14.2);
          pose(s, "idle", t + i);
        }
      }
      return;
    }
    // ---------- S8 ----------
    if (t < sc("s9")[0]) {
      lifeInCastle(t, S.siege > 0.3 ? 4 : 12, 10);
      if (S.siege > 0.01) {
        for (let i = 0; i < 28; i++) {
          const e = take("enemy");
          const a = (i / 28) * Math.PI * 2 + 0.05;
          const r = 88 - (i % 3) * 3;
          const x = Math.cos(a) * r, z = Math.sin(a) * r;
          place(e, x, z, faceTo(x, z, 0, 0));
          pose(e, "idle", t + i);
        }
      }
      return;
    }
    // ---------- S9 ----------
    if (t < sc("s10")[0]) {
      lifeInCastle(t, 6, 6);
      if (t >= sg("s9b")[0] - 1 && t < sg("s9c")[0]) {
        const ang = Math.atan2(4.675, 4.75);
        for (let i = 0; i < 2; i++) {
          const r = take("worker");
          const x = -17 + i * 6 + (t - sg("s9b")[0]) * 0.6;
          place(r, x, -24.2 + 2.0, Math.PI, P + 9 + 2.4);
          r.rotation.x = -ang * 0.6;
          pose(r, "hammer", t * 5 + i);
        }
      }
      if (t >= sg("s9d")[0] - 1 && t < sg("s9e")[0]) {
        for (let i = 0; i < 3; i++) {
          const m = take("mason");
          place(m, -15.5 + i * 3.5, -35.5, 0);
          pose(m, i === 1 ? "carry" : "hammer", t * 5 + i);
        }
      }
      if (t >= sg("s9e")[0] - 1 && t < sg("s9f")[0]) {
        for (let i = 0; i < 3; i++) {
          const d = take("digger");
          place(d, 5.2, 4 + S.rigole * 22 - i * 2.2, Math.PI);
          pose(d, "dig", t * 4.5 + i);
        }
      }
      if (t >= W("s9f", "lorsqu’un") - 1 && t < sg("s9g")[0]) {
        for (let i = 0; i < 2; i++) {
          const m = take("mason");
          place(m, 12.8 + i * 2.4, -33.6, Math.PI);
          pose(m, "hammer", t * 5 + i);
        }
      }
      if (t >= sg("s9g")[0] - 1) {
        for (let i = 0; i < 6; i++) {
          const m = take("mason");
          const [x, y, z, r] = wallTopSpot(i, 6, i % 2 ? "E" : "W");
          place(m, x, z, r + Math.PI, y);
          pose(m, "hammer", t * 5 + i);
        }
      }
      return;
    }
    // ---------- S10 / S11 ----------
    lifeInCastle(t, 12, 10);
    for (let i = 0; i < 6; i++) walkAlong(take("villager"), MAIN_ROAD, ((t * 0.005 + i * 0.16) % 1) * 0.92 + 0.04, "walk", t, 5, i % 2 ? 1.2 : -1.2);
    team(MAIN_ROAD, 0.55 - ((t * 0.004) % 0.45), t, "cart", 1, true);
  }

  // ---- labels (HTML anchored to 3D points) ----
  const SPACES = { world: new THREE.Vector3(), D1, D2, D3, D4, D5 };
  const labels = labelRoot
    ? [...labelRoot.querySelectorAll("[data-at]")].map((el) => {
        const [x, y, z] = el.dataset.at.split(",").map(Number);
        const sp = SPACES[el.dataset.space || "world"] || SPACES.world;
        return { el, inner: el.firstElementChild || el, p: new THREE.Vector3(x, y, z).add(sp), t0: +el.dataset.start, t1: +el.dataset.start + +el.dataset.duration };
      })
    : [];
  const tmpV = new THREE.Vector3();
  function placeLabels(t) {
    for (const L of labels) {
      if (t < L.t0 || t >= L.t1) continue;
      tmpV.copy(L.p).project(camera);
      const vis = tmpV.z < 1 && Math.abs(tmpV.x) < 1.2 && Math.abs(tmpV.y) < 1.2;
      const x = (tmpV.x * 0.5 + 0.5) * 1920, y = (-tmpV.y * 0.5 + 0.5) * 1080;
      L.el.style.transform = `translate(${x.toFixed(1)}px, ${y.toFixed(1)}px)`;
      const a = smooth(L.t0, L.t0 + 0.35, t) * (1 - smooth(L.t1 - 0.35, L.t1, t));
      L.inner.style.opacity = vis ? a.toFixed(3) : "0";
    }
  }

  // ---- per-frame state application ----
  const M4 = new THREE.Matrix4();
  const Qt = new THREE.Quaternion();
  const sunDir = new THREE.Vector3();
  function applyState(S, t) {
    curMoat = S.moat;
    terr.setMoat(S.moat);
    terr.waterMat.userData.uniforms.uTime.value = t;
    castle.apply(S, t);
    castle.setGhost(S.ghost > 0.01, S.ghost);
    if (S.ghost > 0.01) castle.apply(Object.assign({}, S, { walls: 1, towers: 1, keep: 1, gate: 1, crenels: 1, roofs: 1, bridge: 0 }), t);
    tiles.apply(S, t);
    soil.apply(S, t);
    wsec.apply(S, t);
    store.apply(S, t);
    roofF.apply(S, t);
    qRoadPaved.visible = S.paved > 0.5;
    qRoadMud.visible = !qRoadPaved.visible;
    mudPatch.visible = S.paved < 0.5;
    tents.visible = fires.visible = S.siege > 0.01;
    holes.visible = S.roofHoles > 0.01 && S.buildings >= 1;
    holes.children.forEach((h, i) => (h.visible = i < S.roofHoles * 5));
  }
  function setEnv(E, camPos, target, dist) {
    const el = (E.sunElev * Math.PI) / 180, az = (E.sunAz * Math.PI) / 180;
    sunDir.set(Math.sin(az) * Math.cos(el), Math.sin(el), Math.cos(az) * Math.cos(el));
    sun.color.copy(E.sunColor);
    sun.intensity = E.sunInt;
    hemi.intensity = E.hemiInt;
    hemi.color.copy(E.skyTop).lerp(new THREE.Color(0xffffff), 0.45);
    const ext = clamp(dist * 0.85, 22, 170);
    sun.position.copy(target).addScaledVector(sunDir, 400);
    sun.target.position.copy(target);
    const cam = sun.shadow.camera;
    cam.left = -ext;
    cam.right = ext;
    cam.top = ext;
    cam.bottom = -ext;
    cam.near = 1;
    cam.far = 900;
    cam.updateProjectionMatrix();
    fill.position.copy(target).add(new THREE.Vector3(-sunDir.x, 0.4, -sunDir.z).multiplyScalar(300));
    fill.target.position.copy(target);
    if (E.studio) {
      scene.background = new THREE.Color(0x26231f);
      scene.fog = null;
      sky.visible = false;
      studioFloor.visible = true;
    } else {
      scene.background = null;
      scene.fog = scene.fog || new THREE.Fog(0xcfe0ea, 260, 1900);
      scene.fog.color.copy(E.skyHor);
      scene.fog.near = E.fogNear;
      scene.fog.far = E.fogFar;
      sky.visible = true;
      studioFloor.visible = false;
      sky.position.copy(camPos);
      skyU.top.value.copy(E.skyTop);
      skyU.hor.value.copy(E.skyHor);
      skyU.sunDir.value.copy(sunDir);
      skyU.sunCol.value.copy(E.sunColor);
      skyU.sunset.value = E.sunset;
    }
    terr.waterMat.userData.uniforms.uSky.value.copy(E.skyHor);
    // rain around the camera
    rain.visible = E.rain > 0.01;
    if (rain.visible) {
      rain.material.opacity = 0.45 * E.rain;
      for (let i = 0; i < RAIN_N; i++) {
        let fx = (hash(i * 1.37) - 0.5) * 70, fz = (hash(i * 2.11) - 0.5) * 70;
        const dd = Math.hypot(fx, fz);
        if (dd < 7) {
          fx *= 7 / Math.max(dd, 0.1);
          fz *= 7 / Math.max(dd, 0.1);
        }
        const fall = (t_now * 1.6 + hash(i * 3.7)) % 1;
        M4.makeRotationZ(0.12);
        M4.setPosition(camPos.x + fx, camPos.y + 24 - fall * 40, camPos.z + fz);
        rain.setMatrixAt(i, M4);
      }
      rain.instanceMatrix.needsUpdate = true;
    }
  }
  let t_now = 0;
  function arrowsAt(t, S) {
    let n = 0;
    const a0 = seg("s6d")[0] - 0.5, a1 = SC("s7")[0];
    const b0 = seg("s7b")[0], b1 = seg("s7c")[0] - 0.5;
    const active = (t >= a0 && t < a1) || (t >= b0 && t < b1);
    if (active) {
      for (let i = 0; i < 80; i++) {
        const per = 1.6;
        const launch = Math.floor((t + hash(i) * per) / per) * per - hash(i) * per;
        const u = (t - launch) / per;
        if (u < 0 || u > 1) continue;
        const src = new THREE.Vector3(lerp(-26, 26, hash(i * 3)), P + 12.6, 31);
        const dst = new THREE.Vector3((hash(i * 5) - 0.5) * 16, gy(0, 60) + 0.5, 52 + hash(i * 7) * 14);
        if (i % 4 === 3) {
          // enemy arrows going up
          src.copy(dst);
          dst.set(lerp(-24, 24, hash(i * 9)), P + 12, 30.5);
        }
        const p = src.clone().lerp(dst, u);
        p.y += Math.sin(u * Math.PI) * 9;
        const p2 = src.clone().lerp(dst, Math.min(1, u + 0.02));
        p2.y += Math.sin(Math.min(1, u + 0.02) * Math.PI) * 9;
        const dir = p2.sub(p).normalize();
        Qt.setFromUnitVectors(new THREE.Vector3(0, 1, 0), dir);
        M4.compose(p, Qt, new THREE.Vector3(1, 1, 1));
        arrows.setMatrixAt(n++, M4);
      }
    }
    arrows.count = n;
    arrows.visible = n > 0;
    arrows.instanceMatrix.needsUpdate = true;
    // murder-hole stones
    let k = 0;
    if (S.gateCut > 0.5) {
      const t0 = W("s7d", "assommoirs") - 0.2;
      for (let i = 0; i < 3; i++) {
        const u = ((t - t0 - i * 0.5) % 1.5) / 0.9;
        if (t < t0 || u < 0 || u > 1) continue;
        M4.makeTranslation(0, P + 6 - u * u * 5.2, 30 + i * 2.4);
        dropStones.setMatrixAt(k++, M4);
      }
    }
    dropStones.count = k;
    dropStones.visible = k > 0;
    dropStones.instanceMatrix.needsUpdate = true;
  }

  const mudCam = (() => {
    const dir = mudP.dir;
    const y = baseHeight(mudP.x, mudP.z);
    return {
      p0: new THREE.Vector3(mudP.x + Math.cos(dir) * 15 + Math.sin(dir) * 1, y + 4.2, mudP.z - Math.sin(dir) * 15 + Math.cos(dir) * 1),
      p1: new THREE.Vector3(mudP.x + Math.cos(dir) * 12.5 + Math.sin(dir) * 3.5, y + 3.4, mudP.z - Math.sin(dir) * 12.5 + Math.cos(dir) * 3.5),
      l: new THREE.Vector3(mudP.x + Math.sin(dir) * 2, y + 1.1, mudP.z + Math.cos(dir) * 2),
    };
  })();

  // ---- split screen comparison (before / after) ----
  const splitT0 = W("s11b", "ces") - 0.3 + 4.2, splitT1 = seg("s11c")[0] - 1.5;

  function render(t, override) {
    t_now = t;
    let S = override || stateAt(t);
    const cam = cameraAt(t, mudCam);
    camera.position.copy(cam.p);
    camera.lookAt(cam.l);
    camera.fov = cam.fov;
    camera.near = S.view === "world" ? 0.3 : 0.2;
    camera.updateProjectionMatrix();
    const E = envAt(t, S.view);
    const dist = cam.p.distanceTo(cam.l);
    setEnv(E, cam.p, cam.l, dist);
    const split = !override && t >= splitT0 && t < splitT1;
    if (split) {
      // left: empty hill, right: finished fortress, divider sweeps in
      const k = eprog(t, splitT0, splitT0 + 1.2);
      const xs = Math.round(lerp(1600, 800, k));
      renderer.setScissorTest(true);
      const Se = emptyState();
      applyState(Se, t);
      crowd(t, Se);
      arrowsAt(t, Se);
      renderer.setScissor(0, 0, xs, 900);
      renderer.setViewport(0, 0, 1600, 900);
      renderer.render(scene, camera);
      const Sf = fullState();
      applyState(Sf, t);
      crowd(t, Sf);
      renderer.setScissor(xs, 0, 1600 - xs, 900);
      renderer.render(scene, camera);
      renderer.setScissorTest(false);
    } else {
      applyState(S, t);
      crowd(t, S);
      arrowsAt(t, S);
      renderer.render(scene, camera);
    }
    placeLabels(t);
    return { shot: cam.shot };
  }
  return { render, camera, renderer };
}
