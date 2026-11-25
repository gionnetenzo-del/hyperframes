import * as THREE from "three";

export { THREE };

// ---------- math / timing helpers ----------
export const clamp = (v, a = 0, b = 1) => Math.min(b, Math.max(a, v));
export const lerp = (a, b, t) => a + (b - a) * t;
export const smooth = (a, b, x) => {
  const t = clamp((x - a) / (b - a));
  return t * t * (3 - 2 * t);
};
export const ease = (t) => {
  t = clamp(t);
  return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
};
export const easeOut = (t) => 1 - Math.pow(1 - clamp(t), 3);
export const easeIn = (t) => Math.pow(clamp(t), 3);
export const prog = (t, a, b) => clamp((t - a) / (b - a));
export const eprog = (t, a, b) => ease(prog(t, a, b));
export const pulse = (t, a, b, f = 0.4) => smooth(a, a + f, t) * (1 - smooth(b - f, b, t));

export function hash(n) {
  const s = Math.sin(n * 127.1 + 311.7) * 43758.5453123;
  return s - Math.floor(s);
}
export function mulberry32(a) {
  return function () {
    a |= 0;
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

// ---------- cue lookup (narration-synced timing) ----------
const C = typeof window !== "undefined" && window.CUES ? window.CUES : { segs: {}, scenes: {}, words: {} };
export const CUES = C;
export const seg = (id) => {
  const s = C.segs[id];
  return s ? [s[0], s[0] + s[1]] : [0, 0];
};
export const scene = (id) => {
  const s = C.scenes[id];
  return s ? [s[0], s[0] + s[1]] : [0, 0];
};
// time at which word `w` (nth occurrence) is spoken in segment `id`
export const W = (id, w, n = 1) => {
  const list = C.words[id] || [];
  let k = 0;
  for (const [word, t] of list) if (word === w && ++k === n) return t;
  k = 0;
  for (const [word, t] of list) if (word.startsWith(w) && ++k === n) return t;
  return seg(id)[0];
};

// ---------- materials ----------
const matCache = new Map();
export function mat(color, opts = {}) {
  const key = color + JSON.stringify(opts);
  if (matCache.has(key)) return matCache.get(key);
  const m = new THREE.MeshStandardMaterial({ color, roughness: 0.9, metalness: 0, ...opts });
  matCache.set(key, m);
  return m;
}

// Procedural ashlar stone, world-space so scaled (growing) walls keep their courses.
export function stoneMaterial(base = 0xb9ae98, opts = {}) {
  const m = new THREE.MeshStandardMaterial({ color: base, roughness: 0.92, metalness: 0 });
  const course = opts.course ?? 0.85;
  const len = opts.len ?? 1.7;
  const tint = opts.tint ?? 0.2;
  m.onBeforeCompile = (sh) => {
    sh.uniforms.uDamp = { value: 0 };
    m.userData.shader = sh;
    sh.vertexShader = sh.vertexShader
      .replace("#include <common>", "#include <common>\nvarying vec3 vWP; varying vec3 vWN;")
      .replace(
        "#include <worldpos_vertex>",
        "#include <worldpos_vertex>\n vWP = (modelMatrix * vec4(transformed,1.0)).xyz;\n#ifdef USE_INSTANCING\n vWP = (modelMatrix * instanceMatrix * vec4(transformed,1.0)).xyz;\n#endif\n vWN = normalize(mat3(modelMatrix) * objectNormal);",
      );
    sh.fragmentShader = sh.fragmentShader
      .replace(
        "#include <common>",
        `#include <common>
varying vec3 vWP; varying vec3 vWN;
float h21(vec2 p){ return fract(sin(dot(p, vec2(127.1,311.7)))*43758.5453); }
float n21(vec2 p){ vec2 i=floor(p); vec2 f=fract(p); f=f*f*(3.0-2.0*f);
  return mix(mix(h21(i),h21(i+vec2(1,0)),f.x), mix(h21(i+vec2(0,1)),h21(i+vec2(1,1)),f.x), f.y); }`,
      )
      .replace(
        "#include <color_fragment>",
        `#include <color_fragment>
{
  vec3 an = abs(vWN);
  float u;
  if (an.y > 0.8) { u = vWP.x + floor(vWP.z/${course.toFixed(3)})*0.5; }
  else if (an.x > an.z) { u = vWP.z; } else { u = vWP.x; }
  float vv = (an.y > 0.8) ? vWP.z : vWP.y;
  float row = floor(vv / ${course.toFixed(3)});
  float uu = u / ${len.toFixed(3)} + mod(row, 2.0) * 0.5 + h21(vec2(row, 3.0))*0.3;
  float col = floor(uu);
  vec2 f = vec2(fract(uu), fract(vv / ${course.toFixed(3)}));
  float edge = min(min(f.x, 1.0 - f.x) * ${len.toFixed(3)}, min(f.y, 1.0 - f.y) * ${course.toFixed(3)});
  float mortar = 1.0 - smoothstep(0.012, 0.035, edge);
  float bv = h21(vec2(col, row));
  float grain = n21(vWP.xy * 3.1 + vWP.zx * 2.3) * 0.5 + n21(vWP.xz * 9.0 + vWP.y) * 0.5;
  vec3 c = diffuseColor.rgb * (1.0 - ${tint.toFixed(3)} + bv * ${(tint * 2).toFixed(3)});
  c *= 0.86 + grain * 0.24;
  c = mix(c, vec3(0.58, 0.55, 0.5) * diffuseColor.rgb * 1.1, 0.0);
  c = mix(c, c * 0.72, mortar);
  float weather = n21(vWP.xz * 0.15 + vWP.y * 0.08) ;
  c *= 0.9 + weather * 0.18;
  c *= mix(0.85, 1.0, smoothstep(0.0, 4.0, vWP.y - 13.0));
  diffuseColor.rgb = c;
}`,
      );
  };
  m.customProgramCacheKey = () => "stone" + course + len + tint;
  return m;
}

// Slate / tile roof pattern
export function roofMaterial(base = 0x4f5864) {
  const m = new THREE.MeshStandardMaterial({ color: base, roughness: 0.7, metalness: 0.05 });
  m.onBeforeCompile = (sh) => {
    sh.vertexShader = sh.vertexShader
      .replace("#include <common>", "#include <common>\nvarying vec3 vWP;")
      .replace("#include <worldpos_vertex>", "#include <worldpos_vertex>\n vWP = (modelMatrix * vec4(transformed,1.0)).xyz;\n#ifdef USE_INSTANCING\n vWP = (modelMatrix * instanceMatrix * vec4(transformed,1.0)).xyz;\n#endif");
    sh.fragmentShader = sh.fragmentShader
      .replace("#include <common>", "#include <common>\nvarying vec3 vWP;\nfloat rh(vec2 p){ return fract(sin(dot(p, vec2(12.9898,78.233)))*43758.5453); }")
      .replace(
        "#include <color_fragment>",
        `#include <color_fragment>
{ float row = floor(vWP.y / 0.32); float uu = (vWP.x + vWP.z) / 0.45 + mod(row,2.0)*0.5; float col=floor(uu);
  float fy = fract(vWP.y/0.32); float fx = fract(uu);
  float line = 1.0 - smoothstep(0.0, 0.12, fy) ; float vline = 1.0 - smoothstep(0.0,0.06,min(fx,1.0-fx));
  diffuseColor.rgb *= (0.82 + rh(vec2(col,row))*0.3) * (1.0 - 0.35*max(line, vline*0.6)); }`,
      );
  };
  m.customProgramCacheKey = () => "roof" + base;
  return m;
}

// Wood with grain
export function woodMaterial(base = 0x7a5534) {
  const m = new THREE.MeshStandardMaterial({ color: base, roughness: 0.85 });
  m.onBeforeCompile = (sh) => {
    sh.vertexShader = sh.vertexShader
      .replace("#include <common>", "#include <common>\nvarying vec3 vLP;")
      .replace("#include <begin_vertex>", "#include <begin_vertex>\n vLP = position;");
    sh.fragmentShader = sh.fragmentShader
      .replace("#include <common>", "#include <common>\nvarying vec3 vLP;")
      .replace(
        "#include <color_fragment>",
        "#include <color_fragment>\n diffuseColor.rgb *= 0.82 + 0.18*sin((vLP.x+vLP.z)*28.0 + sin(vLP.y*3.0)*2.0);",
      );
  };
  m.customProgramCacheKey = () => "wood" + base;
  return m;
}

// Water: standard material + ripples + fresnel sky tint (time driven by uniform)
export function waterMaterial(color = 0x2f5f6a) {
  const m = new THREE.MeshStandardMaterial({ color, roughness: 0.12, metalness: 0.1, transparent: true, opacity: 0.92 });
  m.userData.uniforms = { uTime: { value: 0 }, uSky: { value: new THREE.Color(0xbcd4e6) } };
  m.onBeforeCompile = (sh) => {
    Object.assign(sh.uniforms, m.userData.uniforms);
    sh.vertexShader = sh.vertexShader
      .replace("#include <common>", "#include <common>\nvarying vec3 vWP;")
      .replace("#include <worldpos_vertex>", "#include <worldpos_vertex>\n vWP = (modelMatrix * vec4(transformed,1.0)).xyz;");
    sh.fragmentShader = sh.fragmentShader
      .replace("#include <common>", "#include <common>\nvarying vec3 vWP; uniform float uTime; uniform vec3 uSky;")
      .replace(
        "#include <normal_fragment_maps>",
        `#include <normal_fragment_maps>
{ vec2 p = vWP.xz; float t = uTime;
  float dx = sin(p.x*0.35 + t*1.3)*0.06 + sin(p.x*1.1 + p.y*0.7 + t*2.1)*0.035 + sin(p.y*2.3 - t*2.9)*0.02;
  float dz = cos(p.y*0.4 - t*1.1)*0.06 + cos(p.x*0.9 - p.y*1.3 + t*1.7)*0.035;
  normal = normalize(normal + (viewMatrix * vec4(dx, 0.0, dz, 0.0)).xyz); }`,
      )
      .replace(
        "#include <dithering_fragment>",
        `#include <dithering_fragment>
{ vec3 V = normalize(cameraPosition - vWP); float fr = pow(1.0 - clamp(V.y, 0.0, 1.0), 3.0);
  gl_FragColor.rgb = mix(gl_FragColor.rgb, uSky, clamp(fr*0.75, 0.0, 0.75)); }`,
      );
  };
  m.customProgramCacheKey = () => "water" + color;
  return m;
}

// ---------- geometry helpers ----------
export function box(w, h, d, material, x = 0, y = 0, z = 0, parent) {
  const g = new THREE.BoxGeometry(w, h, d);
  const m = new THREE.Mesh(g, material);
  m.position.set(x, y, z);
  m.castShadow = true;
  m.receiveShadow = true;
  if (parent) parent.add(m);
  return m;
}
// geometry translated so its base sits at y=0 (to scale.y for growth)
export function baseGeo(g) {
  g.computeBoundingBox();
  g.translate(0, -g.boundingBox.min.y, 0);
  return g;
}
export function mesh(geo, material, parent, cast = true) {
  const m = new THREE.Mesh(geo, material);
  m.castShadow = cast;
  m.receiveShadow = true;
  if (parent) parent.add(m);
  return m;
}
// gable roof prism: width x (span), depth z (length), height h; base at y=0
export function gableGeo(w, d, h, overhang = 0.4) {
  const W2 = w / 2 + overhang;
  const D2 = d / 2 + overhang;
  const shape = new THREE.Shape();
  shape.moveTo(-W2, 0);
  shape.lineTo(W2, 0);
  shape.lineTo(0, h);
  shape.lineTo(-W2, 0);
  const g = new THREE.ExtrudeGeometry(shape, { depth: D2 * 2, bevelEnabled: false });
  g.translate(0, 0, -D2);
  g.computeVertexNormals();
  return g;
}

// ---------- static merging (fewer draw calls) ----------
import { mergeGeometries } from "three/examples/jsm/utils/BufferGeometryUtils.js";
function normGeo(g) {
  let x = g.index ? g.toNonIndexed() : g.clone();
  for (const k of Object.keys(x.attributes)) if (!["position", "normal", "uv", "color"].includes(k)) x.deleteAttribute(k);
  if (!x.attributes.uv) x.setAttribute("uv", new THREE.Float32BufferAttribute(new Float32Array(x.attributes.position.count * 2), 2));
  if (!x.attributes.normal) x.computeVertexNormals();
  return x;
}
/** Merge every plain Mesh under `group` (recursively) per material into single meshes. */
export function mergeStatic(group, { cast = true } = {}) {
  group.updateMatrixWorld(true);
  const inv = new THREE.Matrix4().copy(group.matrixWorld).invert();
  const byMat = new Map();
  const victims = [];
  group.traverse((o) => {
    if (!o.isMesh || o.isInstancedMesh || o === group) return;
    const m = o.material;
    if (Array.isArray(m)) return;
    const g = normGeo(o.geometry);
    g.applyMatrix4(new THREE.Matrix4().multiplyMatrices(inv, o.matrixWorld));
    if (!byMat.has(m)) byMat.set(m, []);
    byMat.get(m).push(g);
    victims.push(o);
  });
  for (const o of victims) o.parent.remove(o);
  for (const [m, list] of byMat) {
    const merged = mergeGeometries(list, false);
    if (!merged) continue;
    const mm = new THREE.Mesh(merged, m);
    mm.castShadow = cast;
    mm.receiveShadow = true;
    group.add(mm);
  }
  return group;
}

const COLOR_MAT = new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.85, metalness: 0.0 });
/**
 * Merge the meshes that belong to `pivot` (stopping at child groups flagged userData.pivot)
 * into ONE vertex-coloured mesh, so an articulated figure costs one draw call per limb.
 */
export function mergePivot(pivot) {
  pivot.updateMatrixWorld(true);
  const inv = new THREE.Matrix4().copy(pivot.matrixWorld).invert();
  const geos = [];
  const victims = [];
  const visit = (o) => {
    for (const c of [...o.children]) {
      if (c.userData && c.userData.pivot) continue;
      if (c.isMesh && !c.isInstancedMesh) {
        const g = normGeo(c.geometry);
        g.applyMatrix4(new THREE.Matrix4().multiplyMatrices(inv, c.matrixWorld));
        const col = (c.material && c.material.color) || new THREE.Color(1, 1, 1);
        const n = g.attributes.position.count;
        const arr = new Float32Array(n * 3);
        for (let i = 0; i < n; i++) {
          arr[i * 3] = col.r;
          arr[i * 3 + 1] = col.g;
          arr[i * 3 + 2] = col.b;
        }
        g.setAttribute("color", new THREE.BufferAttribute(arr, 3));
        geos.push(g);
        victims.push(c);
      }
      if (!c.isMesh) visit(c);
    }
  };
  visit(pivot);
  for (const v of victims) v.parent.remove(v);
  if (!geos.length) return null;
  const merged = mergeGeometries(geos, false);
  const m = new THREE.Mesh(merged, COLOR_MAT);
  m.castShadow = true;
  m.receiveShadow = false;
  pivot.add(m);
  return m;
}
export function mergeFigure(root, pivots) {
  for (const p of pivots) p.userData.pivot = true;
  root.userData.pivot = true;
  for (const p of pivots) mergePivot(p);
  mergePivot(root);
}
