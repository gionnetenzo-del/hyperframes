#!/usr/bin/env python3
"""Generate the HyperFrames compositions (index, world, scene overlays, captions) from the narration timing."""
import json, html, os, re, subprocess

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
os.chdir(ROOT)
TL = json.load(open("build/timeline.json"))
WORDS = json.load(open("build/words.json"))
TOTAL = TL["total"]
SC = {s["id"]: (s["start"], s["start"] + s["dur"]) for s in TL["scenes"]}
SEG = {k: (v["start"], v["start"] + v["dur"]) for k, v in TL["segs"].items()}
P = 14
FPS = 24


def norm(w):
    return w.lower().strip(".,:;!?…’'\"")


def W(sid, w, n=1):
    lst = WORDS[sid]
    k = 0
    for word, t0, t1 in lst:
        if norm(word) == w:
            k += 1
            if k == n:
                return t0
    k = 0
    for word, t0, t1 in lst:
        if norm(word).startswith(w):
            k += 1
            if k == n:
                return t0
    raise SystemExit(f"word not found {sid} {w}")


def f(x):
    return f"{x:.2f}"


esc = html.escape

# ---------------------------------------------------------------- shared css
FONTS = """
      @font-face { font-family: "Cinzel"; src: url("assets/fonts/cinzel.woff2") format("woff2"); font-weight: 400 900; }
"""
COLORS = """
      :root { --parch: #f3e7cc; --ink: #17130e; --gold: #e0b45a; --red: #d2533f; --green: #6fbf5a; --night: rgba(16,13,10,0.78); }
"""

# ================================================================= WORLD
labels = []  # (start, end, text, x,y,z, space, kind)


def L(t0, t1, text, x, y, z, space="world", kind=""):
    labels.append((t0, t1, text, x, y, z, space, kind))


s = SEG
# intro close-ups
L(W("s1c", "aujourd’hui") + 0.6, s["s1c"][1] - 0.2, "Douves", 15, 13.2, 44.5)
L(W("s1c", "château") , s["s1c"][1] - 0.2, "Pont-levis", 0, 15.6, 46)
L(W("s1c", "étape") , s["s1c"][1] - 0.2, "Créneaux", -15, 27.4, 31.2)
L(W("s1c", "découvrir"), s["s1c"][1] - 0.2, "Meurtrière", 13.5, 17.6, 31.7)
# site tiles (D1 space)
TX = [-93, -31, 31, 93]
ov0, ov1 = s["s2b"][0] + 6.8, W("s2c", "plaine") - 0.5
for i, name in enumerate(["Plaine", "Colline", "Montagne", "Rivière et marais"]):
    L(ov0, ov1, name, TX[i], 10 if i != 2 else 30, 0, "D1", "name")
L(W("s2c", "plaine") - 0.2, W("s2c", "un", 2) - 0.3, "✗  Ennemi à découvert", TX[0], 6, 0, "D1", "bad")
L(W("s2c", "un", 2) - 0.1, W("s2c", "site") - 0.3, "✗  Fondations fragiles", TX[3], 5, 0, "D1", "bad")
L(W("s2c", "site") - 0.1, W("s2c", "et") - 0.2, "✗  Loin de l’eau", TX[2], 30, 0, "D1", "bad")
L(W("s2c", "et") , s["s2c"][1] + 1.6, "✗  Trop escarpée", TX[2], 30, 0, "D1", "bad")
L(s["s2d"][0] + 1.0, W("s2d", "cette") - 0.2, "✓  Vue dégagée · eau · défense", TX[1] - 3, 17, -2, "D1", "good")
# layout
gh0, gh1 = s["s3a"][0] + 0.8, W("s3a", "avec") + 0.4
L(gh0 + 0.6, gh1, "Enceinte carrée", -8, 27, -30)
L(gh0 + 1.3, gh1, "Tours rondes", 30, 35, 30)
L(gh0 + 2.0, gh1, "Donjon", 13, 47, -13)
L(gh0 + 2.6, gh1, "Porte fortifiée", 0, 31, 37)
L(W("s3a", "cordes") + 0.2, s["s3a"][1] + 0.6, "Cordes et piquets", -30, 15.4, 6)
L(s["s3b"][0] + 0.8, s["s3b"][1] + 1.5, "Tranchées de fondation", -30, 15.6, 12)
# soil section (D2 space)
L(s["s3c"][0] + 0.4, s["s3d"][0] - 0.4, "Terre meuble", -13, -4.5, 7.2, "D2")
L(s["s3c"][0] + 1.4, s["s3d"][0] - 0.4, "Fondation trop superficielle", 6, -0.4, 7.2, "D2", "bad")
L(W("s3d", "répartir") - 0.3, W("s3d", "difficile") + 0.5, "Le poids se répartit", 0, -11.5, 7.6, "D2")
L(W("s3d", "creuse") , W("s3d", "erreur") - 0.6, "Couche compacte", -13, -10, 7.2, "D2")
L(W("s3d", "élargit") + 0.3, W("s3d", "erreur") - 0.6, "Fondation élargie", 5.6, -5.4, 7.4, "D2", "good")
# materials
qy = None  # computed in JS; approximate quarry label height
L(s["s4b"][0] + 0.5, W("s4b", "tailleurs") - 0.4, "Carrière", -216, 34, -60)
L(W("s4b", "tailleurs") + 0.2, W("s4b", "charpentiers") - 0.4, "Tailleurs de pierre", -44, P + 2.9, 8)
L(W("s4b", "charpentiers") + 0.2, s["s4c"][0] - 0.4, "Charpentiers", -43.5, P + 2.6, -29.5)
L(W("s4d", "empierre") + 0.4, W("s4d", "stocke") - 0.6, "Chemin empierré", -116, 7, 4)
L(W("s4d", "stocke") , s["s4d"][1] + 1.0, "Stocks au pied des murs", -44, P + 3.5, 8)
# walls & towers
L(s["s5a"][0] + 2.0, s["s5a"][1], "Mortier de chaux et de sable", 30, P + 7, 12)
L(W("s5b", "échafaudages") , s["s5b"][1], "Échafaudage", 33.4, P + 9, 9)
L(W("s5b", "roues") - 0.2, s["s5b"][1], "Roue de levage", 36.6, P + 5.8, -6)
L(W("s5c", "carrée") - 0.2, s["s5c"][1], "Tour carrée", -31, P + 17.5, 0)
L(W("s5c", "ronde") - 0.2, s["s5c"][1], "Tour ronde", -30, P + 18, -30)
L(W("s5d", "parements") , s["s5e"][0] - 0.4, "Parement", 4.6, 7.9, 1.5, "D3")
L(W("s5d", "blocage") - 0.1, s["s5e"][0] - 0.4, "Blocage : moellons + mortier", 4.6, 4.0, 0.0, "D3")
L(W("s5e", "pierres") , s["s5f"][0] - 0.4, "Joints alignés", 0, 8.4, 0.6, "D3", "bad")
L(W("s5f", "épais") , W("s5f", "contreforts") - 0.5, "Plus de 3 m", -4.9, 8.6, 0, "D3", "good")
L(W("s5f", "joints") , W("s5f", "contreforts") - 0.5, "Joints décalés", 4.6, 5.0, 1.7, "D3", "good")
L(W("s5f", "contreforts") + 0.4, s["s5f"][1] - 6.2, "Contrefort", 2.4, 7.8, -3.2, "D3", "good")
# moat & defences
L(W("s6b", "permet") + 1.4, s["s6b"][1] - 0.5, "Douve en eau", 46, 11, 40)
L(W("s6d", "depuis") + 0.2, W("s6d", "archères") - 0.7, "Chemin de ronde", 16, P + 11.3, 29.4)
L(W("s6d", "créneaux") - 0.1, W("s6d", "archères") - 0.7, "Créneaux", 12, P + 13.4, 31.2)
L(W("s6d", "archères") + 0.2, s["s6d"][1] + 0.5, "Archère (meurtrière)", 13.5, 17.6, 31.7)
L(W("s6d", "archères") + 0.6, s["s6d"][1] + 0.5, "Douves", -24, 12.8, 44.5)
# gate
L(s["s7a"][0] + 1.6, s["s7a"][1] + 1.2, "Deux tours", -7.2, 34, 35)
L(W("s7c", "circuler") , s["s7c"][1] , "Passage voûté", 0, 22.0, 37.8)
L(W("s7d", "pont-levis") , W("s7d", "derrière") + 0.3, "Pont-levis", 0, 24.5, 39)
L(W("s7d", "herse") , W("s7d", "vantaux") - 0.9, "Herse", 0, 19.5, 35.7)
L(W("s7d", "vantaux") , W("s7d", "et", 1) - 0.5, "Vantaux + poutre", 0, 18.2, 33.2)
L(W("s7d", "assommoirs") - 0.3, s["s7d"][1] + 1.0, "Assommoirs", 0, 20.5, 32)
# life & siege
la = W("s8a", "dans")
L(la + 1.2, s["s8a"][1] + 1.0, "Puits", -3, 18.2, 8)
L(la + 2.0, s["s8a"][1] + 1.0, "Cuisines", -19, 23, -9)
L(la + 2.6, s["s8a"][1] + 1.0, "Écuries", 24, 20, 6)
L(la + 3.3, s["s8a"][1] + 1.0, "Greniers", -23.5, 23.5, 14)
L(la + 4.0, s["s8a"][1] + 1.0, "Logis", -12, 28, -24)
L(W("s8b", "encercle") + 1.0, s["s8b"][1] + 0.5, "Camp ennemi", 60, 8, 100)
L(W("s8c", "géologie") + 0.6, W("s8c", "céréales") - 1.4, "Nappe d’eau", -11, -14, 7.4, "D2", "good")
L(W("s8c", "géologie") + 1.6, W("s8c", "céréales") - 1.4, "Puits maçonné", 2.2, -5, 7.4, "D2")
L(W("s8c", "céréales") , s["s8c"][1] + 1.0, "Céréales au sec", -6.4, 2.0, 0.5, "D4")
L(W("s8c", "sale") , s["s8c"][1] + 1.0, "Viande salée", 0.5, 5.0, -3, "D4")
L(W("s8c", "fume") , s["s8c"][1] + 1.0, "Tonneaux", -4, 2.4, -4.6, "D4")
# maintenance
L(W("s9d", "contrefort") , s["s9d"][1] + 0.6, "Contrefort", -12, P + 10, -33)
L(W("s9e", "rigoles") , W("s9e", "gargouilles") - 0.6, "Rigole", 4.6, P + 0.6, 12)
L(W("s9e", "gargouilles") , s["s9e"][1] + 0.6, "Gargouille", 34.5, P + 16.6, 34.5)
L(W("s9f", "mure") , s["s9f"][1] + 0.8, "Poterne murée", 14, P + 3.6, -31.8)
# finale tour
L(W("s11a", "fallait") + 0.2, W("s11a", "fondations") - 0.4, "Douves", 0, 13.8, 44, "world")
L(W("s11a", "fondations") + 0.3, W("s11a", "transporter") - 0.4, "Porte fortifiée", 0, 22.5, 38)
L(W("s11a", "transporter") + 0.2, W("s11a", "construire", 2) - 0.4, "Tours", 30, 34, 30)
L(W("s11a", "construire", 2) + 0.2, W("s11a", "anticiper") - 0.4, "Remparts", 4, P + 13, 29.6)
L(W("s11a", "anticiper") + 0.2, s["s11b"][0] - 0.3, "Donjon", 13, 44, -13)
L(s["s11b"][0] + 0.4, W("s11b", "ces") - 0.4, "Logis et réserves", -14, 25, -22)

labels.sort()
lab_html = []
for i, (t0, t1, text, x, y, z, space, kind) in enumerate(labels):
    if t1 - t0 < 0.6:
        continue
    lab_html.append(
        f'''        <div id="wl-{i}" class="clip wl {kind}" data-start="{f(t0)}" data-duration="{f(t1 - t0)}" data-track-index="2" data-at="{x},{y},{z}" data-space="{space}"><div class="wl-in"><span class="wl-txt">{esc(text)}</span><span class="wl-line"></span><span class="wl-dot"></span></div></div>'''
    )

world = f"""<template>
  <style>
{FONTS}
    #root {{ position: absolute; inset: 0; overflow: hidden; background: #000; }}
    #world-stage {{ position: absolute; inset: 0; }}
    #world-stage canvas {{ display: block; width: 100%; height: 100%; }}
    #world-labels {{ position: absolute; inset: 0; pointer-events: none; }}
    #world-vignette {{ position: absolute; inset: 0; pointer-events: none; background: radial-gradient(ellipse at 50% 46%, rgba(0,0,0,0) 58%, rgba(8,6,4,0.42) 100%); }}
    .wl {{ position: absolute; left: 0; top: 0; width: 0; height: 0; }}
    .wl-in {{ position: absolute; left: 0; bottom: 0; transform: translateX(-50%); display: flex; flex-direction: column; align-items: center; opacity: 0; }}
    .wl-txt {{ font-family: "Inter", sans-serif; font-weight: 700; font-size: 28px; color: #fbf3df; background: rgba(18,14,10,0.74); border: 1px solid rgba(224,180,90,0.75); padding: 7px 16px 8px; border-radius: 6px; white-space: nowrap; letter-spacing: 0.01em; }}
    .wl-line {{ width: 2px; height: 46px; background: linear-gradient(#e0b45a, rgba(224,180,90,0.5)); }}
    .wl-dot {{ width: 12px; height: 12px; border-radius: 50%; background: #e0b45a; box-shadow: 0 0 0 4px rgba(224,180,90,0.28); margin-bottom: -6px; }}
    .wl.name .wl-txt {{ font-family: "Cinzel", serif; font-weight: 800; font-size: 34px; text-transform: uppercase; letter-spacing: 0.06em; }}
    .wl.bad .wl-txt {{ border-color: #d2533f; background: rgba(70,16,10,0.82); }}
    .wl.bad .wl-dot {{ background: #d2533f; box-shadow: 0 0 0 4px rgba(210,83,63,0.3); }}
    .wl.bad .wl-line {{ background: #d2533f; }}
    .wl.good .wl-txt {{ border-color: #6fbf5a; background: rgba(14,44,12,0.82); }}
    .wl.good .wl-dot {{ background: #6fbf5a; box-shadow: 0 0 0 4px rgba(111,191,90,0.3); }}
    .wl.good .wl-line {{ background: #6fbf5a; }}
  </style>
  <div id="root" data-composition-id="world" data-start="0" data-duration="{f(TOTAL)}" data-width="1920" data-height="1080">
    <div id="world-stage" class="clip" data-start="0" data-duration="{f(TOTAL)}" data-track-index="0" data-layout-ignore></div>
    <div id="world-vignette" class="clip" data-start="0" data-duration="{f(TOTAL)}" data-track-index="1" data-layout-ignore></div>
    <div id="world-labels" data-layout-allow-overflow data-layout-allow-overlap>
{chr(10).join(lab_html)}
    </div>
  </div>
  <script>
    (function () {{
      const TOTAL = {TOTAL};
      const world = window.CastleWorld.createWorld(document.getElementById("world-stage"), document.getElementById("world-labels"));
      const state = {{ t: 0 }};
      const tl = gsap.timeline({{ paused: true }});
      tl.to(state, {{ t: TOTAL, duration: TOTAL, ease: "none", onUpdate: () => world.render(state.t) }}, 0);
      window.addEventListener("hf-seek", (e) => {{
        if (e && e.detail && typeof e.detail.time === "number") world.render(Math.max(0, Math.min(TOTAL, e.detail.time)));
      }});
      world.render(0);
      window.__timelines = window.__timelines || {{}};
      window.__timelines["world"] = tl;
    }})();
  </script>
</template>
"""
open("compositions/world.html", "w").write(world)

# ================================================================= SCENE OVERLAYS
CHAPTERS = {
    "s2": ("Étape 1", "Choisir le bon terrain"),
    "s3": ("Étape 2", "Les fondations"),
    "s4": ("Étape 3", "Extraire et transporter"),
    "s5": ("Étape 4", "Les murs et les tours"),
    "s6": ("Étape 5", "Les douves et les défenses"),
    "s7": ("Étape 6", "La porte et le pont-levis"),
    "s8": ("Étape 7", "L’eau, les réserves, la vie"),
    "s9": ("Étape 8", "Entretenir et réparer"),
    "s11": ("Finale", "Le château fort achevé"),
}
PROBLEMS = {
    "s2": (1, "Un terrain mal choisi", "s2c", "s2d", "Une hauteur naturelle, près de l’eau"),
    "s3": (2, "Le sol est instable", "s3c", "s3d", "Creuser jusqu’au sol ferme, élargir la base"),
    "s4": (3, "Un transport lent et difficile", "s4c", "s4d", "Routes, stocks et équipes organisés"),
    "s5": (4, "Les murs peuvent s’effondrer", "s5e", "s5f", "Murs épais, joints décalés, contreforts"),
    "s6": (5, "Protéger le château des attaques", "s6c", "s6d", "Douves, tours et remparts"),
    "s7": (6, "La porte, point faible", "s7b", "s7c", "Pont-levis, herse, vantaux, assommoirs"),
    "s8": (7, "Survivre pendant un siège", "s8b", "s8c", "Puits, greniers et provisions"),
}

OVERLAY_CSS = """
    #root { position: absolute; inset: 0; overflow: hidden; pointer-events: none; }
    .chap { position: absolute; left: 80px; bottom: 200px; display: flex; flex-direction: column; gap: 10px; padding: 22px 60px 26px 40px; background: linear-gradient(90deg, rgba(10,8,6,0.62), rgba(10,8,6,0.35) 70%, rgba(10,8,6,0)); border-radius: 6px; }
    .chap-k { font-family: "Inter", sans-serif; font-weight: 700; font-size: 28px; letter-spacing: 0.32em; text-transform: uppercase; color: var(--gold); text-shadow: 0 2px 12px rgba(0,0,0,0.6); }
    .chap-t { font-family: "Cinzel", serif; font-weight: 800; font-size: 68px; line-height: 1.05; color: #fff8e8; text-shadow: 0 4px 24px rgba(0,0,0,0.75), 0 1px 2px rgba(0,0,0,0.9); }
    .chap-rule { height: 3px; width: 380px; background: linear-gradient(90deg, var(--gold), rgba(224,180,90,0)); transform-origin: left center; }
    .badge { position: absolute; left: 110px; top: 96px; display: flex; align-items: stretch; border-radius: 8px; overflow: hidden; box-shadow: 0 10px 30px rgba(0,0,0,0.45); }
    .badge-k { font-family: "Inter", sans-serif; font-weight: 900; font-size: 28px; letter-spacing: 0.14em; color: #fff; padding: 14px 20px; display: flex; align-items: center; }
    .badge-t { font-family: "Inter", sans-serif; font-weight: 700; font-size: 30px; color: #fff8e8; background: rgba(18,14,10,0.86); padding: 13px 24px 14px; display: flex; align-items: center; }
    .badge.prob .badge-k { background: var(--red); }
    .badge.sol .badge-k { background: #3f8f34; }
"""


def overlay_doc(cid, body, script, extra_css=""):
    return f"""<template>
  <style>
{FONTS}{COLORS}{OVERLAY_CSS}{extra_css}
  </style>
  <div id="root" data-composition-id="{cid}" data-width="1920" data-height="1080">
{body}
  </div>
  <script>
    (function () {{
      const tl = gsap.timeline({{ paused: true }});
{script}
      window.__timelines = window.__timelines || {{}};
      window.__timelines["{cid}"] = tl;
    }})();
  </script>
</template>
"""


def chapter_block(cid, a, b, k, t):
    body = f"""    <div id="{cid}-chap" class="clip chap" data-start="{f(a)}" data-duration="{f(b - a)}" data-track-index="1">
      <div id="{cid}-chap-k" class="chap-k">{esc(k)}</div>
      <div id="{cid}-chap-t" class="chap-t">{esc(t)}</div>
      <div id="{cid}-chap-r" class="chap-rule"></div>
    </div>"""
    js = f"""      tl.fromTo("#{cid}-chap-k", {{ opacity: 0, y: 18 }}, {{ opacity: 1, y: 0, duration: 0.6, ease: "power3.out" }}, {f(a + 0.05)});
      tl.fromTo("#{cid}-chap-t", {{ opacity: 0, y: 30, filter: "blur(10px)" }}, {{ opacity: 1, y: 0, filter: "blur(0px)", duration: 0.8, ease: "power3.out" }}, {f(a + 0.2)});
      tl.fromTo("#{cid}-chap-r", {{ scaleX: 0 }}, {{ scaleX: 1, duration: 0.9, ease: "power2.inOut" }}, {f(a + 0.45)});
      tl.to("#{cid}-chap-k, #{cid}-chap-t, #{cid}-chap-r", {{ opacity: 0, y: -12, duration: 0.45, ease: "power2.in" }}, {f(b - 0.5)});"""
    return body, js


def badge_block(cid, key, a, b, kind, k, t):
    body = f"""    <div id="{cid}-{key}" class="clip badge {kind}" data-start="{f(a)}" data-duration="{f(b - a)}" data-track-index="2">
      <div id="{cid}-{key}-k" class="badge-k">{esc(k)}</div>
      <div id="{cid}-{key}-t" class="badge-t">{esc(t)}</div>
    </div>"""
    js = f"""      tl.fromTo("#{cid}-{key}-k", {{ opacity: 0, x: -40 }}, {{ opacity: 1, x: 0, duration: 0.45, ease: "power3.out" }}, {f(a + 0.02)});
      tl.fromTo("#{cid}-{key}-t", {{ opacity: 0, x: -24, clipPath: "inset(0 100% 0 0)" }}, {{ opacity: 1, x: 0, clipPath: "inset(0 0% 0 0)", duration: 0.6, ease: "power3.out" }}, {f(a + 0.18)});
      tl.to("#{cid}-{key}-k, #{cid}-{key}-t", {{ opacity: 0, duration: 0.35, ease: "power2.in" }}, {f(b - 0.4)});"""
    return body, js


scene_files = {}
for sid, (a0, a1) in SC.items():
    cid = sid
    bodies, scripts, css = [], [], ""
    loc = lambda x: x - a0  # local time
    if sid in CHAPTERS:
        k, t = CHAPTERS[sid]
        b, j = chapter_block(cid, loc(a0) + 0.45, loc(a0) + 5.0, k, t)
        bodies.append(b)
        scripts.append(j)
    if sid in PROBLEMS:
        n, pt, ps, ss, st = PROBLEMS[sid]
        pa, pb = SEG[ps][0] - 0.15, SEG[ss][0] - 0.2
        b, j = badge_block(cid, "prob", loc(pa), loc(pb), "prob", f"PROBLÈME {n}", pt)
        bodies.append(b)
        scripts.append(j)
        sa = SEG[ss][0] + 0.2
        sb = min(SEG[ss][1] + 0.8, a1 - 0.1)
        b, j = badge_block(cid, "sol", loc(sa), loc(sb), "sol", "SOLUTION", st)
        bodies.append(b)
        scripts.append(j)
    # ---------- scene specific extras ----------
    if sid == "s1":
        css += """
    .title { position: absolute; left: 0; right: 0; top: 300px; text-align: center; display: flex; flex-direction: column; align-items: center; gap: 18px; }
    .title-k { font-family: "Inter", sans-serif; font-weight: 700; font-size: 28px; letter-spacing: 0.42em; color: var(--gold); text-shadow: 0 2px 14px rgba(0,0,0,0.7); }
    .title-t { font-family: "Cinzel", serif; font-weight: 800; font-size: 92px; line-height: 1.04; color: #fff9ea; text-shadow: 0 6px 34px rgba(0,0,0,0.8), 0 2px 3px rgba(0,0,0,0.9); max-width: 1500px; }
    .title-s { font-family: "Inter", sans-serif; font-weight: 700; font-size: 34px; color: #f3e7cc; text-shadow: 0 2px 14px rgba(0,0,0,0.8); letter-spacing: 0.04em; }
    .title-r { width: 520px; height: 3px; background: linear-gradient(90deg, rgba(224,180,90,0), var(--gold), rgba(224,180,90,0)); }
    .rw { position: absolute; inset: 0; background: linear-gradient(180deg, rgba(255,240,210,0.0), rgba(255,236,200,0.16), rgba(255,240,210,0.0)); mix-blend-mode: screen; }
    .rw-lines { position: absolute; inset: 0; background: repeating-linear-gradient(180deg, rgba(255,255,255,0.07) 0 2px, rgba(0,0,0,0) 2px 9px); }
    .rw-t { position: absolute; left: 0; right: 0; top: 470px; text-align: center; font-family: "Cinzel", serif; font-weight: 700; font-size: 56px; color: #fff8e8; text-shadow: 0 4px 26px rgba(0,0,0,0.8); letter-spacing: 0.04em; }
    .rw-i { position: absolute; left: 0; right: 0; top: 380px; text-align: center; font-family: "Inter", sans-serif; font-weight: 900; font-size: 60px; color: var(--gold); letter-spacing: -0.12em; text-shadow: 0 2px 16px rgba(0,0,0,0.7); }
"""
        ta, tb = 0.9, 7.4
        bodies.append(f"""    <div id="s1-title" class="clip title" data-start="{f(ta)}" data-duration="{f(tb - ta)}" data-track-index="1">
      <div id="s1-title-k" class="title-k">DOCUMENTAIRE · MOYEN ÂGE</div>
      <div id="s1-title-t" class="title-t">Comment construire un château fort ?</div>
      <div id="s1-title-r" class="title-r"></div>
      <div id="s1-title-s" class="title-s">Les défis, les dangers et les solutions</div>
    </div>""")
        scripts.append(f"""      tl.fromTo("#s1-title-k", {{ opacity: 0, y: -14 }}, {{ opacity: 1, y: 0, duration: 1.2, ease: "power3.out" }}, {f(ta)});
      tl.fromTo("#s1-title-t", {{ opacity: 0, scale: 1.08, filter: "blur(14px)" }}, {{ opacity: 1, scale: 1, filter: "blur(0px)", duration: 1.6, ease: "power3.out" }}, {f(ta + 0.3)});
      tl.fromTo("#s1-title-r", {{ scaleX: 0 }}, {{ scaleX: 1, duration: 1.2, ease: "power2.inOut" }}, {f(ta + 1.0)});
      tl.fromTo("#s1-title-s", {{ opacity: 0, y: 16 }}, {{ opacity: 1, y: 0, duration: 0.9, ease: "power3.out" }}, {f(ta + 1.5)});
      tl.to("#s1-title-k, #s1-title-t, #s1-title-r, #s1-title-s", {{ opacity: 0, y: -18, filter: "blur(8px)", duration: 0.7, ease: "power2.in" }}, {f(tb - 0.75)});""")
        ra, rb = SEG["s1c"][1] + 0.3, a1
        bodies.append(f"""    <div id="s1-rw" class="clip" data-start="{f(ra)}" data-duration="{f(rb - ra)}" data-track-index="2" style="position:absolute;inset:0">
      <div id="s1-rw-glow" class="rw" style="opacity:0"></div>
      <div id="s1-rw-lines" class="rw-lines" style="opacity:0"></div>
      <div id="s1-rw-i" class="rw-i">◀◀</div>
      <div id="s1-rw-t" class="rw-t">Avant le premier coup de pioche…</div>
    </div>""")
        scripts.append(f"""      tl.fromTo("#s1-rw-glow, #s1-rw-lines", {{ opacity: 0 }}, {{ opacity: 1, duration: 0.5, ease: "power2.out" }}, {f(ra)});
      tl.fromTo("#s1-rw-lines", {{ y: 0 }}, {{ y: 90, duration: {f(rb - ra)}, ease: "none" }}, {f(ra)});
      tl.fromTo("#s1-rw-i", {{ opacity: 0, x: 40 }}, {{ opacity: 1, x: 0, duration: 0.5, ease: "power3.out" }}, {f(ra + 0.2)});
      tl.fromTo("#s1-rw-t", {{ opacity: 0, y: 14 }}, {{ opacity: 1, y: 0, duration: 0.7, ease: "power3.out" }}, {f(ra + 1.4)});
      tl.to("#s1-rw-glow, #s1-rw-lines, #s1-rw-i, #s1-rw-t", {{ opacity: 0, duration: 0.5, ease: "power2.in" }}, {f(rb - 0.55)});""")
    if sid == "s5":
        # square vs round tower diagram
        css += """
    .diag { position: absolute; right: 110px; top: 110px; width: 560px; padding: 26px 30px 24px; background: rgba(20,16,12,0.84); border: 1px solid rgba(224,180,90,0.55); border-radius: 14px; box-shadow: 0 16px 40px rgba(0,0,0,0.45); }
    .diag-h { font-family: "Inter", sans-serif; font-weight: 800; font-size: 28px; letter-spacing: 0.2em; color: var(--gold); margin-bottom: 14px; }
    .diag-row { display: flex; gap: 26px; }
    .diag-c { flex: 1; display: flex; flex-direction: column; align-items: center; gap: 10px; }
    .diag-l { font-family: "Inter", sans-serif; font-weight: 700; font-size: 28px; color: #fff4dc; text-align: center; line-height: 1.2; }
    .diag-n { font-family: "Inter", sans-serif; font-weight: 700; font-size: 28px; color: #d8c8a8; text-align: center; line-height: 1.3; }
"""
        da, db = W("s5c", "tour", 1) - 0.3, SEG["s5c"][1] + 0.4
        da, db = da - a0, db - a0
        bodies.append(f"""    <div id="s5-diag" class="clip diag" data-start="{f(da)}" data-duration="{f(db - da)}" data-track-index="3">
      <div id="s5-diag-h" class="diag-h">VUE DE DESSUS</div>
      <div class="diag-row">
        <div id="s5-diag-a" class="diag-c">
          <svg width="220" height="190" viewBox="0 0 220 190">
            <rect x="60" y="50" width="100" height="100" fill="#8f8673" stroke="#e8dcc0" stroke-width="3"/>
            <path id="s5-arr-a" d="M10 10 L56 46" stroke="#d2533f" stroke-width="6" stroke-linecap="round"/>
            <path d="M56 46 L40 42 M56 46 L52 30" stroke="#d2533f" stroke-width="6" stroke-linecap="round"/>
            <circle cx="60" cy="50" r="13" fill="none" stroke="#d2533f" stroke-width="4"/>
            <circle cx="160" cy="150" r="13" fill="none" stroke="#d2533f" stroke-width="4"/>
          </svg>
          <div class="diag-l">Tour carrée</div>
          <div class="diag-n">Angles fragiles<br/>aux sapes et aux coups</div>
        </div>
        <div id="s5-diag-b" class="diag-c">
          <svg width="220" height="190" viewBox="0 0 220 190">
            <circle cx="110" cy="100" r="58" fill="#8f8673" stroke="#e8dcc0" stroke-width="3"/>
            <path d="M18 18 L64 58 L30 96" fill="none" stroke="#6fbf5a" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M30 96 L34 80 M30 96 L46 94" stroke="#6fbf5a" stroke-width="6" stroke-linecap="round"/>
          </svg>
          <div class="diag-l">Tour ronde</div>
          <div class="diag-n">Les projectiles ricochent,<br/>aucun angle mort</div>
        </div>
      </div>
    </div>""")
        scripts.append(f"""      tl.fromTo("#s5-diag", {{ opacity: 0, y: -20 }}, {{ opacity: 1, y: 0, duration: 0.6, ease: "power3.out" }}, {f(da + 0.02)});
      tl.fromTo("#s5-diag-a", {{ opacity: 0, x: -20 }}, {{ opacity: 1, x: 0, duration: 0.5, ease: "power3.out" }}, {f(da + 0.3)});
      tl.fromTo("#s5-diag-b", {{ opacity: 0, x: 20 }}, {{ opacity: 1, x: 0, duration: 0.5, ease: "power3.out" }}, {f(W("s5c", "ronde") - a0 - 0.2)});
      tl.to("#s5-diag", {{ opacity: 0, duration: 0.4, ease: "power2.in" }}, {f(db - 0.45)});""")
    if sid == "s6":
        css += """
    .moat-card { position: absolute; right: 110px; top: 110px; width: 640px; padding: 24px 28px; background: rgba(20,16,12,0.86); border: 1px solid rgba(224,180,90,0.55); border-radius: 14px; box-shadow: 0 16px 40px rgba(0,0,0,0.45); display: flex; gap: 22px; }
    .moat-c { flex: 1; display: flex; flex-direction: column; align-items: center; gap: 8px; }
    .moat-l { font-family: "Inter", sans-serif; font-weight: 800; font-size: 28px; color: #fff4dc; }
    .moat-n { font-family: "Inter", sans-serif; font-weight: 700; font-size: 28px; color: #d8c8a8; text-align: center; }
"""
        ma, mb = W("s6b", "beaucoup") - 0.3 - a0, SEG["s6b"][1] + 0.6 - a0
        bodies.append(f"""    <div id="s6-moat" class="clip moat-card" data-start="{f(ma)}" data-duration="{f(mb - ma)}" data-track-index="3">
      <div id="s6-moat-a" class="moat-c">
        <svg width="270" height="150" viewBox="0 0 270 150">
          <path d="M0 40 L70 40 L100 125 L170 125 L200 40 L270 40 L270 150 L0 150 Z" fill="#6b5236"/>
          <path d="M0 40 L70 40 L100 125 L170 125 L200 40 L270 40" fill="none" stroke="#c8a870" stroke-width="3"/>
          <g stroke="#3a2a1a" stroke-width="5" stroke-linecap="round"><path d="M112 125 L104 96"/><path d="M135 125 L135 92"/><path d="M158 125 L166 96"/></g>
          <rect x="0" y="0" width="60" height="40" fill="#9a907c"/>
        </svg>
        <div class="moat-l">Fossé sec</div>
        <div class="moat-n">profond, hérissé de pieux</div>
      </div>
      <div id="s6-moat-b" class="moat-c">
        <svg width="270" height="150" viewBox="0 0 270 150">
          <path d="M0 40 L70 40 L100 125 L170 125 L200 40 L270 40 L270 150 L0 150 Z" fill="#6b5236"/>
          <path d="M80 68 L190 68 L170 125 L100 125 Z" fill="#3c7f96"/>
          <path d="M80 68 L190 68" stroke="#9fd0e0" stroke-width="3"/>
          <rect x="0" y="0" width="60" height="40" fill="#9a907c"/>
        </svg>
        <div class="moat-l">Douve en eau</div>
        <div class="moat-n">si la rivière le permet</div>
      </div>
    </div>""")
        scripts.append(f"""      tl.fromTo("#s6-moat", {{ opacity: 0, y: -20 }}, {{ opacity: 1, y: 0, duration: 0.6, ease: "power3.out" }}, {f(ma + 0.02)});
      tl.fromTo("#s6-moat-a", {{ opacity: 0, scale: 0.94 }}, {{ opacity: 1, scale: 1, duration: 0.5, ease: "power3.out" }}, {f(ma + 0.2)});
      tl.fromTo("#s6-moat-b", {{ opacity: 0, scale: 0.94 }}, {{ opacity: 1, scale: 1, duration: 0.5, ease: "power3.out" }}, {f(W("s6b", "douve") - a0 - 0.2)});
      tl.to("#s6-moat", {{ opacity: 0, duration: 0.4, ease: "power2.in" }}, {f(mb - 0.45)});""")
    if sid == "s8":
        css += """
    .gauge { position: absolute; right: 110px; top: 110px; width: 520px; padding: 24px 30px 26px; background: rgba(20,16,12,0.86); border: 1px solid rgba(210,83,63,0.65); border-radius: 14px; box-shadow: 0 16px 40px rgba(0,0,0,0.45); }
    .gauge-h { display: flex; justify-content: space-between; align-items: baseline; margin-bottom: 18px; }
    .gauge-k { font-family: "Inter", sans-serif; font-weight: 800; font-size: 28px; letter-spacing: 0.18em; color: #f0a090; }
    .gauge-d { font-family: "Cinzel", serif; font-weight: 800; font-size: 40px; color: #fff4dc; }
    .gauge-row { display: flex; align-items: center; gap: 16px; margin-top: 14px; }
    .gauge-l { width: 150px; font-family: "Inter", sans-serif; font-weight: 700; font-size: 28px; color: #efe2c6; }
    .gauge-bar { flex: 1; height: 22px; border-radius: 11px; background: rgba(255,255,255,0.12); overflow: hidden; }
    .gauge-fill { height: 100%; width: 100%; border-radius: 11px; transform-origin: left center; }
"""
        ga, gb = W("s8b", "jour") - 1.2 - a0, SEG["s8b"][1] + 1.6 - a0
        bodies.append(f"""    <div id="s8-gauge" class="clip gauge" data-start="{f(ga)}" data-duration="{f(gb - ga)}" data-track-index="3">
      <div class="gauge-h"><div class="gauge-k">RÉSERVES</div><div id="s8-day" class="gauge-d">Jour 1</div></div>
      <div class="gauge-row"><div class="gauge-l">Eau</div><div class="gauge-bar"><div id="s8-g-water" class="gauge-fill" style="background:#4aa3c8"></div></div></div>
      <div class="gauge-row"><div class="gauge-l">Céréales</div><div class="gauge-bar"><div id="s8-g-grain" class="gauge-fill" style="background:#e0b45a"></div></div></div>
      <div class="gauge-row"><div class="gauge-l">Viande</div><div class="gauge-bar"><div id="s8-g-meat" class="gauge-fill" style="background:#d2533f"></div></div></div>
    </div>""")
        g0 = ga + 0.5
        scripts.append(f"""      tl.fromTo("#s8-gauge", {{ opacity: 0, y: -20 }}, {{ opacity: 1, y: 0, duration: 0.6, ease: "power3.out" }}, {f(ga + 0.02)});
      tl.fromTo("#s8-g-water", {{ scaleX: 1 }}, {{ scaleX: 0.22, duration: {f(gb - g0 - 1.2)}, ease: "power1.in" }}, {f(g0)});
      tl.fromTo("#s8-g-grain", {{ scaleX: 1 }}, {{ scaleX: 0.35, duration: {f(gb - g0 - 1.2)}, ease: "power1.in" }}, {f(g0)});
      tl.fromTo("#s8-g-meat", {{ scaleX: 1 }}, {{ scaleX: 0.12, duration: {f(gb - g0 - 1.2)}, ease: "power1.in" }}, {f(g0)});
      const day = {{ d: 1 }};
      tl.fromTo(day, {{ d: 1 }}, {{ d: 60, duration: {f(gb - g0 - 1.2)}, ease: "power1.in", onUpdate: () => {{ document.getElementById("s8-day").textContent = "Jour " + Math.round(day.d); }} }}, {f(g0)});
      tl.to("#s8-gauge", {{ opacity: 0, duration: 0.4, ease: "power2.in" }}, {f(gb - 0.45)});""")
    if sid == "s9":
        css += """
    .fix { position: absolute; right: 100px; top: 110px; width: 640px; display: flex; flex-direction: column; gap: 10px; }
    .fix-r { display: flex; align-items: center; gap: 0; border-radius: 8px; overflow: hidden; background: rgba(18,14,10,0.84); border: 1px solid rgba(255,255,255,0.08); }
    .fix-p { flex: 1; font-family: "Inter", sans-serif; font-weight: 700; font-size: 28px; color: #f6c8bd; padding: 11px 14px; }
    .fix-a { font-family: "Inter", sans-serif; font-weight: 900; font-size: 28px; color: var(--gold); padding: 0 6px; }
    .fix-s { flex: 1; font-family: "Inter", sans-serif; font-weight: 700; font-size: 28px; color: #c9ecbf; padding: 11px 14px; }
"""
        rows = [
            ("s9b", "Toiture qui fuit", "Ardoises remplacées", "couvreurs"),
            ("s9c", "Charpente fragilisée", "Pièces changées", "charpentiers"),
            ("s9d", "Murs fissurés", "Joints + contrefort", "maçons"),
            ("s9e", "Eau qui stagne", "Rigoles, gargouilles", "creuse"),
            ("s9f", "Réserves trop justes", "Celliers agrandis", "agrandit"),
            ("s9f", "Accès trop facile", "Muré ou défendu", "mure"),
        ]
        fa, fb = SEG["s9b"][0] - 0.4 - a0, SEG["s9g"][0] + 4.5 - a0
        rh = []
        rj = []
        for i, (sg_, p_, s_, wsol) in enumerate(rows):
            if i == 5:
                tp = W("s9f", "lorsqu’un") - a0
            else:
                tp = SEG[sg_][0] - a0
            ts = W(sg_, wsol) - a0
            rh.append(f"""      <div id="s9-r{i}" class="fix-r"><div class="fix-p">✗ {esc(p_)}</div><div id="s9-a{i}" class="fix-a">→</div><div id="s9-s{i}" class="fix-s">✓ {esc(s_)}</div></div>""")
            rj.append(f"""      tl.fromTo("#s9-r{i}", {{ opacity: 0, x: 40 }}, {{ opacity: 1, x: 0, duration: 0.45, ease: "power3.out" }}, {f(max(fa + 0.05, tp - 0.1))});
      tl.fromTo("#s9-a{i}, #s9-s{i}", {{ opacity: 0 }}, {{ opacity: 1, duration: 0.35, ease: "power2.out" }}, {f(ts)});""")
        bodies.append(f"""    <div id="s9-fix" class="clip fix" data-start="{f(fa)}" data-duration="{f(fb - fa)}" data-track-index="3">
{chr(10).join(rh)}
    </div>""")
        scripts.append("\n".join(rj) + f"""
      tl.to("#s9-fix", {{ opacity: 0, duration: 0.5, ease: "power2.in" }}, {f(fb - 0.55)});""")
    if sid == "s10":
        css += """
    .cta { position: absolute; left: 0; right: 0; bottom: 230px; display: flex; justify-content: center; gap: 28px; }
    .cta-b { display: flex; align-items: center; gap: 14px; padding: 16px 28px; border-radius: 999px; background: rgba(18,14,10,0.84); border: 2px solid rgba(255,255,255,0.18); font-family: "Inter", sans-serif; font-weight: 800; font-size: 30px; color: #fff; box-shadow: 0 12px 30px rgba(0,0,0,0.4); }
    .cta-b.sub { background: #cc1f1f; border-color: #ff6a5a; }
    .ideas { position: absolute; left: 0; right: 0; top: 140px; display: flex; justify-content: center; gap: 22px; }
    .idea { padding: 14px 26px; border-radius: 10px; background: rgba(243,231,204,0.94); color: #1b150e; font-family: "Cinzel", serif; font-weight: 800; font-size: 32px; box-shadow: 0 10px 26px rgba(0,0,0,0.35); }
    .ideas-k { position: absolute; left: 0; right: 0; top: 84px; text-align: center; font-family: "Inter", sans-serif; font-weight: 800; font-size: 28px; letter-spacing: 0.24em; color: var(--gold); text-shadow: 0 2px 12px rgba(0,0,0,0.7); }
"""
        thumb = '<svg width="40" height="40" viewBox="0 0 24 24"><path fill="#fff" d="M2 21h4V9H2v12zm20-11a2 2 0 0 0-2-2h-6.3l1-4.6v-.3c0-.4-.2-.8-.4-1.1L13.2 1 6.6 7.6C6.2 8 6 8.5 6 9v10a2 2 0 0 0 2 2h9c.8 0 1.5-.5 1.8-1.2l3-7.1c.1-.2.2-.5.2-.7v-2z"/></svg>'
        bell = '<svg width="38" height="38" viewBox="0 0 24 24"><path fill="#fff" d="M12 22a2 2 0 0 0 2-2h-4a2 2 0 0 0 2 2zm6-6v-5c0-3.1-1.6-5.6-4.5-6.3V4a1.5 1.5 0 0 0-3 0v.7C7.6 5.4 6 7.9 6 11v5l-2 2v1h16v-1l-2-2z"/></svg>'
        play = '<svg width="38" height="38" viewBox="0 0 24 24"><path fill="#fff" d="M21.6 7.2a2.5 2.5 0 0 0-1.8-1.8C18.2 5 12 5 12 5s-6.2 0-7.8.4A2.5 2.5 0 0 0 2.4 7.2 26 26 0 0 0 2 12a26 26 0 0 0 .4 4.8 2.5 2.5 0 0 0 1.8 1.8C5.8 19 12 19 12 19s6.2 0 7.8-.4a2.5 2.5 0 0 0 1.8-1.8A26 26 0 0 0 22 12a26 26 0 0 0-.4-4.8zM10 15V9l5.2 3L10 15z"/></svg>'
        comm = '<svg width="38" height="38" viewBox="0 0 24 24"><path fill="#fff" d="M21 6h-2v9H6v2c0 .6.4 1 1 1h11l4 4V7c0-.6-.4-1-1-1zm-4 6V3c0-.6-.4-1-1-1H3c-.6 0-1 .4-1 1v14l4-4h10c.6 0 1-.4 1-1z"/></svg>'
        ca, cb = SEG["s10a"][0] - 0.2 - a0, a1 - 0.2 - a0
        items = [("like", "pouce", thumb + "J’aime", ""), ("sub", "abonner", play + "S’abonner", "sub"), ("bell", "cloche", bell + "Cloche", ""), ("com", "commentaires", comm + "Commentaires", "")]
        bh, bj = [], []
        for key, wd, inner, cls in items:
            sidw = "s10b" if wd == "commentaires" else "s10a"
            t0 = W(sidw, wd) - a0 - 0.15
            bh.append(f'      <div id="s10-{key}" class="cta-b {cls}">{inner}</div>')
            bj.append(f"""      tl.fromTo("#s10-{key}", {{ opacity: 0, y: 30, scale: 0.8 }}, {{ opacity: 1, y: 0, scale: 1, duration: 0.5, ease: "back.out(2)" }}, {f(t0)});
      tl.fromTo("#s10-{key}", {{ scale: 1 }}, {{ scale: 1.08, duration: 0.18, yoyo: true, repeat: 1, ease: "power2.out", immediateRender: false }}, {f(t0 + 0.6)});""")
        bodies.append(f"""    <div id="s10-cta" class="clip cta" data-start="{f(ca)}" data-duration="{f(cb - ca)}" data-track-index="3">
{chr(10).join(bh)}
    </div>""")
        scripts.append("\n".join(bj) + f"""
      tl.to("#s10-cta", {{ opacity: 0, duration: 0.4, ease: "power2.in" }}, {f(cb - 0.45)});""")
        ia, ib = W("s10b", "quelle") - 0.2 - a0, a1 - 0.2 - a0
        ideas = [("pyr", "pyramide", "Pyramide"), ("cat", "cathédrale", "Cathédrale"), ("aq", "aqueduc", "Aqueduc romain"), ("cit", "cité", "Cité médiévale")]
        ih, ij = [], []
        for key, wd, label in ideas:
            t0 = W("s10b", wd) - a0 - 0.1
            ih.append(f'      <div id="s10-i-{key}" class="idea">{esc(label)}</div>')
            ij.append(f"""      tl.fromTo("#s10-i-{key}", {{ opacity: 0, y: -24, rotation: -3 }}, {{ opacity: 1, y: 0, rotation: 0, duration: 0.45, ease: "back.out(1.8)" }}, {f(t0)});""")
        bodies.append(f"""    <div id="s10-ideas" class="clip" data-start="{f(ia)}" data-duration="{f(ib - ia)}" data-track-index="4" style="position:absolute;inset:0">
      <div id="s10-ideas-k" class="ideas-k">ET ENSUITE, ON CONSTRUIT QUOI ?</div>
      <div class="ideas">
{chr(10).join(ih)}
      </div>
    </div>""")
        scripts.append(f"""      tl.fromTo("#s10-ideas-k", {{ opacity: 0 }}, {{ opacity: 1, duration: 0.5 }}, {f(ia + 0.02)});
""" + "\n".join(ij) + f"""
      tl.to("#s10-ideas-k, #s10-i-pyr, #s10-i-cat, #s10-i-aq, #s10-i-cit", {{ opacity: 0, duration: 0.4, ease: "power2.in" }}, {f(ib - 0.45)});""")
    if sid == "s11":
        css += """
    .split-l, .split-r { position: absolute; top: 120px; font-family: "Cinzel", serif; font-weight: 800; font-size: 54px; color: #fff8e8; text-shadow: 0 4px 24px rgba(0,0,0,0.8); letter-spacing: 0.08em; }
    .split-l { left: 140px; } .split-r { right: 140px; }
    .split-line { position: absolute; left: 959px; top: 0; width: 3px; height: 1080px; background: linear-gradient(180deg, rgba(224,180,90,0), var(--gold) 20%, var(--gold) 80%, rgba(224,180,90,0)); transform-origin: top center; }
    .end { position: absolute; left: 0; right: 0; top: 330px; display: flex; flex-direction: column; align-items: center; gap: 18px; }
    .end-k { font-family: "Inter", sans-serif; font-weight: 700; font-size: 28px; letter-spacing: 0.4em; color: var(--gold); text-shadow: 0 2px 12px rgba(0,0,0,0.7); }
    .end-t { font-family: "Cinzel", serif; font-weight: 800; font-size: 104px; color: #fff9ea; text-shadow: 0 6px 34px rgba(0,0,0,0.75); letter-spacing: 0.05em; }
    .end-r { width: 560px; height: 3px; background: linear-gradient(90deg, rgba(224,180,90,0), var(--gold), rgba(224,180,90,0)); }
    .end-s { font-family: "Inter", sans-serif; font-weight: 700; font-size: 32px; color: #f3e7cc; text-shadow: 0 2px 14px rgba(0,0,0,0.8); }
"""
        split0 = W("s11b", "ces") - 0.3 + 4.2
        split1 = SEG["s11c"][0] - 1.5
        xa, xb = split0 - a0, split1 - a0
        bodies.append(f"""    <div id="s11-split" class="clip" data-start="{f(xa)}" data-duration="{f(xb - xa)}" data-track-index="3" style="position:absolute;inset:0">
      <div id="s11-split-line" class="split-line"></div>
      <div id="s11-split-l" class="split-l">AVANT</div>
      <div id="s11-split-r" class="split-r">APRÈS</div>
    </div>""")
        scripts.append(f"""      tl.fromTo("#s11-split-line", {{ scaleY: 0 }}, {{ scaleY: 1, duration: 0.6, ease: "power2.out" }}, {f(xa + 1.0)});
      tl.fromTo("#s11-split-l", {{ opacity: 0, x: -30 }}, {{ opacity: 1, x: 0, duration: 0.5, ease: "power3.out" }}, {f(xa + 1.2)});
      tl.fromTo("#s11-split-r", {{ opacity: 0, x: 30 }}, {{ opacity: 1, x: 0, duration: 0.5, ease: "power3.out" }}, {f(xa + 1.4)});
      tl.to("#s11-split-line, #s11-split-l, #s11-split-r", {{ opacity: 0, duration: 0.35, ease: "power2.in" }}, {f(xb - 0.4)});""")
        ea, eb = SEG["s11c"][1] + 0.6 - a0, a1 - a0
        bodies.append(f"""    <div id="s11-end" class="clip end" data-start="{f(ea)}" data-duration="{f(eb - ea)}" data-track-index="4">
      <div id="s11-end-k" class="end-k">MERCI D’AVOIR REGARDÉ</div>
      <div id="s11-end-t" class="end-t" data-var-text="channelName">Histoire en 3D</div>
      <div id="s11-end-r" class="end-r"></div>
      <div id="s11-end-s" class="end-s">Abonnez-vous pour la prochaine construction</div>
    </div>""")
        scripts.append(f"""      tl.fromTo("#s11-end-k", {{ opacity: 0, y: 16 }}, {{ opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }}, {f(ea + 0.1)});
      tl.fromTo("#s11-end-t", {{ opacity: 0, scale: 1.08, filter: "blur(12px)" }}, {{ opacity: 1, scale: 1, filter: "blur(0px)", duration: 1.4, ease: "power3.out" }}, {f(ea + 0.35)});
      tl.fromTo("#s11-end-r", {{ scaleX: 0 }}, {{ scaleX: 1, duration: 1.0, ease: "power2.inOut" }}, {f(ea + 0.9)});
      tl.fromTo("#s11-end-s", {{ opacity: 0, y: 12 }}, {{ opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }}, {f(ea + 1.3)});""")
    # scene dip-in from black at scene start (except s1)
    if sid != "s1":
        bodies.append(f"""    <div id="{cid}-dip" class="clip" data-start="0" data-duration="0.7" data-track-index="0" style="position:absolute;inset:0;background:#0b0907" data-layout-ignore></div>""")
        scripts.append(f"""      tl.fromTo("#{cid}-dip", {{ opacity: 1 }}, {{ opacity: 0, duration: 0.6, ease: "power2.out" }}, 0.02);""")
    if sid == "s11":
        # fade to black at the very end
        dur = a1 - a0
        bodies.append(f"""    <div id="s11-out" class="clip" data-start="{f(dur - 1.6)}" data-duration="1.6" data-track-index="5" style="position:absolute;inset:0;background:#000" data-layout-ignore></div>""")
        scripts.append(f"""      tl.fromTo("#s11-out", {{ opacity: 0 }}, {{ opacity: 1, duration: 1.4, ease: "power1.in" }}, {f(dur - 1.55)});""")
    # scene exit dip to black (0.35 s) so cuts between scenes breathe
    if sid not in ("s11",):
        dur = a1 - a0
        bodies.append(f"""    <div id="{cid}-exit" class="clip" data-start="{f(dur - 0.45)}" data-duration="0.45" data-track-index="0" style="position:absolute;inset:0;background:#0b0907" data-layout-ignore></div>""")
        scripts.append(f"""      tl.fromTo("#{cid}-exit", {{ opacity: 0 }}, {{ opacity: 1, duration: 0.4, ease: "power2.in" }}, {f(dur - 0.45)});""")
    doc = overlay_doc(cid, "\n".join(bodies), "\n".join(scripts), css)
    open(f"compositions/{cid}.html", "w").write(doc)
    scene_files[sid] = (a0, a1)

# ================================================================= CAPTIONS
groups = []
for sid in SEG:
    ws = WORDS[sid]
    cur = []
    for i, (w, t0, t1) in enumerate(ws):
        cur.append((w, t0, t1))
        text = " ".join(x[0] for x in cur)
        nxt = ws[i + 1] if i + 1 < len(ws) else None
        brk = (
            nxt is None
            or w.endswith((".", "?", "!", "…", ":", ";"))
            or (w.endswith(",") and len(text) > 22)
            or len(text) + (len(nxt[0]) + 1 if nxt else 0) > 44
            or (nxt and nxt[1] - t1 > 0.35 and len(text) > 14)
        )
        if brk:
            groups.append((cur[0][1], cur[-1][2], text))
            cur = []
cap_html, cap_js = [], []
for i, (a, b, text) in enumerate(groups):
    nxt = groups[i + 1][0] if i + 1 < len(groups) else TOTAL
    a2 = max(0.15, a - 0.06)
    b2 = min(b + 0.35, nxt - 0.04)
    if b2 - a2 < 0.3:
        b2 = a2 + 0.3
    text = text.replace(" :", " :").replace(" ?", " ?").replace(" !", " !")
    cap_html.append(f'    <div id="cap-{i}" class="clip cap" data-start="{f(a2)}" data-duration="{f(b2 - a2)}" data-track-index="0"><span id="cap-{i}-t" class="cap-t">{esc(text)}</span></div>')
    cap_js.append(f'      tl.fromTo("#cap-{i}-t", {{ opacity: 0, y: 8 }}, {{ opacity: 1, y: 0, duration: 0.14, ease: "power2.out" }}, {f(a2)});')
captions = f"""<template>
  <style>
    #root {{ position: absolute; inset: 0; pointer-events: none; }}
    .cap {{ position: absolute; left: 0; right: 0; bottom: 96px; text-align: center; overflow: visible; }}
    .cap-t {{ display: inline-block; max-width: 1500px; font-family: "Inter", sans-serif; font-weight: 700; font-size: 44px; line-height: 1.22; color: #ffffff; background: rgba(10,8,6,0.62); padding: 8px 22px 10px; border-radius: 8px; text-shadow: 0 2px 4px rgba(0,0,0,0.6); }}
  </style>
  <div id="root" data-composition-id="captions" data-width="1920" data-height="1080">
{chr(10).join(cap_html)}
  </div>
  <script>
    (function () {{
      const tl = gsap.timeline({{ paused: true }});
{chr(10).join(cap_js)}
      window.__timelines = window.__timelines || {{}};
      window.__timelines["captions"] = tl;
    }})();
  </script>
</template>
"""
open("compositions/captions.html", "w").write(captions)

# ================================================================= AUDIO (SFX placement)
SFX = []  # (id, file, start, vol)


def X(name, t, vol=0.5, dur=None):
    SFX.append((name, t, vol))


X("amb_wind", 0.0, 0.32)
X("amb_wind", 21.5, 0.28)
X("whoosh1", SEG["s1a"][0] - 0.3, 0.35)
X("whoosh2", SEG["s1b"][0] - 0.2, 0.3)
X("whoosh2", SEG["s1c"][0] - 0.2, 0.3)
X("rewind", SEG["s1c"][1] + 0.25, 0.55)
X("amb_wind", SC["s2"][0], 0.3)
X("whoosh1", SEG["s2b"][0] + 6.1, 0.35)
X("pop", SEG["s2c"][0] - 0.1, 0.4)
X("impact", W("s2c", "plaine") - 0.2, 0.22)
X("impact", W("s2c", "un", 2) - 0.2, 0.2)
X("impact", W("s2c", "site") - 0.2, 0.2)
X("pop", SEG["s2d"][0] + 0.15, 0.4)
X("whoosh1", W("s2d", "cette") - 0.3, 0.35)
X("amb_wind", SC["s2"][0] + 21.5, 0.25)
X("amb_wind", SC["s3"][0], 0.25)
X("stone_thud", W("s3a", "avec") + 1.2, 0.3)
X("dig", SEG["s3b"][0], 0.55)
X("dig", SEG["s3b"][0] + 5.5, 0.45)
X("pop", SEG["s3c"][0] - 0.1, 0.4)
X("crack", W("s3c", "fissure") - 0.3, 0.6)
X("collapse", W("s3c", "s’effondrer") - 0.2, 0.35)
X("dig", W("s3d", "creuse") - 0.2, 0.45)
X("stone_thud", W("s3d", "élargit"), 0.5)
X("stone_thud", W("s3d", "mortier"), 0.45)
X("amb_site", SEG["s3d"][1] - 6, 0.3)
X("amb_site", SC["s4"][0], 0.3)
X("cart", SC["s4"][0] + 1.5, 0.35)
X("dig", SEG["s4b"][0] - 0.3, 0.45)
X("chisel", W("s4b", "tailleurs") - 0.2, 0.55)
X("hammer_wood", W("s4b", "charpentiers") - 0.2, 0.5)
X("pop", SEG["s4c"][0] - 0.1, 0.4)
X("rain", SEG["s4c"][0] - 0.8, 0.5)
X("cart_mud", SEG["s4c"][0] + 0.6, 0.55)
X("cart_mud", W("s4c", "roues") - 0.4, 0.45)
X("pop", SEG["s4d"][0] + 0.15, 0.4)
X("cart", SEG["s4d"][0] + 0.3, 0.45)
X("cart", SEG["s4d"][0] + 8.0, 0.35)
X("amb_site", SC["s5"][0], 0.32)
X("chisel", SEG["s5a"][0] + 1.5, 0.4)
X("crane", SEG["s5b"][0] + 0.5, 0.5)
X("stone_thud", SEG["s5b"][0] + 7.0, 0.4)
X("amb_site", SEG["s5c"][0], 0.28)
X("chisel", SEG["s5d"][0] + 1.0, 0.4)
X("stone_thud", SEG["s5d"][0] + 6.0, 0.4)
X("pop", SEG["s5e"][0] - 0.1, 0.4)
X("crack", W("s5e", "fissures") - 0.4, 0.65)
X("crack", W("s5e", "pencher") - 0.6, 0.45)
X("pop", SEG["s5f"][0] + 0.15, 0.4)
X("stone_thud", W("s5f", "contreforts") - 0.2, 0.5)
X("whoosh1", SEG["s5f"][1] - 6.2, 0.3)
X("amb_site", SEG["s5f"][1] - 6, 0.25)
X("dig", SEG["s6a"][0] - 0.5, 0.5)
X("water", W("s6b", "permet") - 0.5, 0.5)
X("water", W("s6b", "permet") + 6.5, 0.35)
X("pop", SEG["s6c"][0] - 0.1, 0.4)
X("horn", SEG["s6c"][0] + 0.2, 0.5)
X("march", SEG["s6c"][0] + 0.8, 0.5)
X("pop", SEG["s6d"][0] + 0.15, 0.4)
X("arrows", SEG["s6d"][0] + 0.8, 0.5)
X("arrows", SEG["s6d"][0] + 6.0, 0.45)
X("arrows", W("s6d", "archères") + 0.5, 0.45)
X("stone_thud", SEG["s7a"][0] + 0.5, 0.4)
X("pop", SEG["s7b"][0] - 0.1, 0.4)
for k in range(2, 6):
    X("ram", SEG["s7b"][0] + 0.654 + 1.309 * k - 0.05, 0.6)
X("pop", SEG["s7c"][0] + 0.15, 0.4)
X("courtyard", SEG["s7c"][0] + 0.5, 0.25)
X("chains", W("s7d", "pont-levis") - 0.3, 0.6)
X("portcullis", W("s7d", "tombe") - 0.05, 0.6)
X("stone_thud", W("s7d", "poutre") - 0.1, 0.5)
X("impact", W("s7d", "assommoirs") + 0.3, 0.3)
X("courtyard", SC["s8"][0] + 0.5, 0.35)
X("well", SEG["s8a"][0] + 2.5, 0.35)
X("fire", SEG["s8a"][0] + 4.5, 0.3)
X("pop", SEG["s8b"][0] - 0.1, 0.4)
X("horn", W("s8b", "encercle") - 0.4, 0.5)
X("march", W("s8b", "encercle"), 0.35)
X("pop", SEG["s8c"][0] + 0.15, 0.4)
X("well", W("s8c", "géologie") + 0.5, 0.45)
X("well", W("s8c", "géologie") + 4.8, 0.35)
X("rain", SEG["s9b"][0] - 0.8, 0.5)
X("hammer_wood", W("s9b", "couvreurs"), 0.35)
X("hammer_wood", SEG["s9c"][0] + 0.5, 0.5)
X("crack", SEG["s9d"][0] - 0.6, 0.4)
X("chisel", W("s9d", "rejointoient") - 0.2, 0.45)
X("dig", W("s9e", "rigoles") - 0.3, 0.4)
X("water", W("s9e", "gargouilles") - 0.3, 0.45)
X("stone_thud", W("s9f", "mure") , 0.45)
X("amb_site", SEG["s9g"][0] - 0.5, 0.3)
for wd, sidw in (("pouce", "s10a"), ("abonner", "s10a"), ("cloche", "s10a"), ("commentaires", "s10b")):
    X("pop", W(sidw, wd) - 0.1, 0.5)
X("amb_wind", SC["s10"][0], 0.2)
X("amb_wind", SC["s11"][0], 0.28)
X("whoosh2", W("s11a", "fallait") - 0.5, 0.3)
X("chains", W("s11a", "fondations") - 0.3, 0.2)
X("whoosh2", W("s11a", "transporter") - 0.4, 0.25)
X("whoosh2", W("s11a", "anticiper") - 0.4, 0.25)
X("courtyard", SEG["s11b"][0], 0.25)
X("whoosh1", W("s11b", "ces") + 3.9, 0.35)
X("evening", SEG["s11c"][0] - 1.5, 0.4)

sfx_html = []
dur_cache = {}


def adur(p):
    if p not in dur_cache:
        dur_cache[p] = float(subprocess.run(["ffprobe", "-v", "error", "-show_entries", "format=duration", "-of", "csv=p=0", p], capture_output=True, text=True).stdout)
    return dur_cache[p]


for i, (name, t, vol) in enumerate(sorted(SFX, key=lambda x: x[1])):
    p = f"assets/sfx/{name}.mp3"
    d = min(adur(p), TOTAL - t - 0.05)
    sfx_html.append(f'      <audio id="sfx-{i}" class="clip" src="{p}" data-start="{f(t)}" data-duration="{f(d)}" data-track-index="{20 + (i % 3)}" data-volume="{vol}" data-fade-in="0.05" data-fade-out="{0.6 if d > 4 else 0.15}"></audio>')

vo_html = []
for sid, (a, b) in SEG.items():
    vo_html.append(f'      <audio id="vo-{sid}" class="clip" src="assets/vo/{sid}.mp3" data-start="{f(a)}" data-duration="{f(b - a)}" data-track-index="10" data-volume="1"></audio>')

hosts = []
z = 1
hosts.append(f'''      <div id="world" class="clip" data-composition-id="world" data-composition-src="compositions/world.html" data-start="0" data-duration="{f(TOTAL)}" data-track-index="0" data-track-kind="graphics" data-width="1920" data-height="1080" style="z-index:1"></div>''')
for sid, (a0, a1) in SC.items():
    hosts.append(f'''      <div id="{sid}" class="clip" data-composition-id="{sid}" data-composition-src="compositions/{sid}.html" data-start="{f(a0)}" data-duration="{f(a1 - a0)}" data-track-index="1" data-track-kind="graphics" data-width="1920" data-height="1080" style="z-index:5"></div>''')
hosts.append(f'''      <div id="captions" class="clip" data-composition-id="captions" data-composition-src="compositions/captions.html" data-start="0" data-duration="{f(TOTAL)}" data-track-index="2" data-track-kind="captions" data-width="1920" data-height="1080" style="z-index:10"></div>''')

index = f"""<!doctype html>
<html lang="fr" data-composition-variables='[{{"id":"channelName","type":"string","label":"Nom de la chaîne","default":"Histoire en 3D"}}]'>
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=1920, height=1080" />
    <title>Comment construire un château fort au Moyen Âge ?</title>
    <script src="assets/lib/gsap.min.js"></script>
    <script src="assets/cues.js"></script>
    <script src="assets/world.bundle.js"></script>
    <style>
{FONTS}
      * {{ margin: 0; padding: 0; box-sizing: border-box; }}
      html, body {{ margin: 0; width: 1920px; height: 1080px; overflow: hidden; background: #000; }}
      #root {{ position: relative; width: 1920px; height: 1080px; background: #000; }}
    </style>
  </head>
  <body>
    <div id="root" data-composition-id="main" data-start="0" data-duration="{f(TOTAL)}" data-width="1920" data-height="1080" data-fps="{FPS}">
{chr(10).join(hosts)}
      <audio id="music-bed" class="clip" src="assets/music/music_bed.m4a" data-start="0" data-duration="{f(TOTAL)}" data-track-index="11" data-volume="1"></audio>
{chr(10).join(vo_html)}
{chr(10).join(sfx_html)}
    </div>
    <script>
      window.__timelines = window.__timelines || {{}};
      window.__timelines["main"] = gsap.timeline({{ paused: true }});
    </script>
  </body>
</html>
"""
open("index.html", "w").write(index)
json.dump({"sfx": SFX}, open("build/sfx_plan.json", "w"))
print("labels", len(lab_html), "captions", len(groups), "sfx", len(SFX))
