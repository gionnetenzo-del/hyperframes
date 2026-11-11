#!/usr/bin/env python3
"""Generates the rugby-club TikTok HyperFrames project (index.html + compositions/*.html)."""
import json, os, re

P = os.path.dirname(os.path.abspath(__file__))
W, H = 1080, 1920
TOTAL = 66.5
SCENES = [  # id, start, end
    ("hook", 0.0, 6.2),
    ("max", 6.2, 15.6),
    ("rule1", 15.6, 24.45),
    ("rule2", 24.45, 31.45),
    ("rule3", 31.45, 43.05),
    ("build", 43.05, 48.5),
    ("name", 48.5, 57.5),
    ("cta", 57.5, TOTAL),
]
SC = {s: (a, b) for s, a, b in SCENES}

words = json.load(open(f"{P}/assets/audio/transcript.json"))
if isinstance(words, dict):
    words = words["words"]


def wstarts(a, b, t0):
    return [round(w["start"] - t0, 3) for w in words if a <= w["start"] < b]


# ---------------------------------------------------------------- palette
CSS_VARS = """
      --ground: #0d3a2b;
      --grass-a: #0f4431;
      --grass-b: #124d38;
      --chalk: #f5f1e4;
      --gold: #ffcf1f;
      --heart: #ff2d55;
      --ink: #0a1f18;
      --navy: #13284a;
"""

# ---------------------------------------------------------------- Max rig (SVG)
def max_svg(p, width=420, ball=False, jersey="#ffcf1f", jersey2="#0f4431"):
    """Max, the founder. viewBox 300x520. Parts animated by id: p-body, p-head, p-armL, p-armR,
    p-eyeL, p-eyeR, p-mOpen, p-mO, p-browL, p-browR, p-ball."""
    h = round(width * 520 / 300)
    ball_svg = (
        f"""
      <g id="{p}-ball">
        <ellipse cx="232" cy="318" rx="44" ry="27" fill="#f7f4ea" stroke="#0a1f18" stroke-width="5" transform="rotate(-28 232 318)"/>
        <path d="M200 334 Q232 300 264 302" stroke="{jersey2}" stroke-width="7" fill="none" stroke-linecap="round"/>
        <path d="M220 312 l8 8 M230 307 l8 8 M240 304 l8 8" stroke="#0a1f18" stroke-width="3.5" stroke-linecap="round"/>
      </g>"""
        if ball
        else ""
    )
    return f"""<svg id="{p}-svg" class="max" viewBox="0 0 300 520" width="{width}" height="{h}" overflow="visible">
    <defs>
      <clipPath id="{p}-torsoclip"><path d="M86 188 Q150 172 214 188 L206 334 Q150 344 94 334 Z"/></clipPath>
    </defs>
    <g id="{p}-body">
      <ellipse cx="150" cy="504" rx="96" ry="12" fill="#000" opacity="0.28"/>
      <!-- legs -->
      <rect x="110" y="372" width="30" height="104" rx="13" fill="#e9b48c"/>
      <rect x="160" y="372" width="30" height="104" rx="13" fill="#e9b48c"/>
      <rect x="108" y="420" width="34" height="52" rx="8" fill="{jersey2}"/>
      <rect x="158" y="420" width="34" height="52" rx="8" fill="{jersey2}"/>
      <rect x="108" y="432" width="34" height="9" fill="{jersey}"/>
      <rect x="158" y="432" width="34" height="9" fill="{jersey}"/>
      <path d="M100 470 h44 q8 0 8 10 v10 h-58 q-4-20 6-20z" fill="#111"/>
      <path d="M156 470 h44 q10 0 6 20 h-58 v-10 q0-10 8-10z" fill="#111"/>
      <!-- shorts -->
      <path d="M94 326 h112 l6 62 h-56 l-6-22 l-6 22 h-56z" fill="#f5f1e4" stroke="#0a1f18" stroke-width="4"/>
      <!-- torso -->
      <path d="M86 188 Q150 172 214 188 L206 334 Q150 344 94 334 Z" fill="{jersey2}"/>
      <g clip-path="url(#{p}-torsoclip)">
        <rect x="60" y="212" width="180" height="26" fill="{jersey}"/>
        <rect x="60" y="262" width="180" height="26" fill="{jersey}"/>
        <rect x="60" y="312" width="180" height="26" fill="{jersey}"/>
      </g>
      <path d="M86 188 Q150 172 214 188 L206 334 Q150 344 94 334 Z" fill="none" stroke="#0a1f18" stroke-width="4"/>
      <path d="M128 182 L150 210 L172 182" fill="#f5f1e4" stroke="#0a1f18" stroke-width="4" stroke-linejoin="round"/>
      <!-- arms (pivot at shoulders) -->
      <g id="{p}-armL">
        <line x1="92" y1="200" x2="92" y2="318" stroke="#e9b48c" stroke-width="28" stroke-linecap="round"/>
        <line x1="92" y1="198" x2="92" y2="236" stroke="{jersey2}" stroke-width="34" stroke-linecap="round"/>
        <line x1="92" y1="226" x2="92" y2="234" stroke="{jersey}" stroke-width="34"/>
        <circle cx="92" cy="326" r="19" fill="#e9b48c" stroke="#0a1f18" stroke-width="4"/>
      </g>
      <g id="{p}-armR">
        <line x1="208" y1="200" x2="208" y2="318" stroke="#e9b48c" stroke-width="28" stroke-linecap="round"/>
        <line x1="208" y1="198" x2="208" y2="236" stroke="{jersey2}" stroke-width="34" stroke-linecap="round"/>
        <line x1="208" y1="226" x2="208" y2="234" stroke="{jersey}" stroke-width="34"/>
        <circle cx="208" cy="326" r="19" fill="#e9b48c" stroke="#0a1f18" stroke-width="4"/>
      </g>
      {ball_svg}
      <!-- head -->
      <g id="{p}-head">
        <rect x="136" y="150" width="28" height="34" fill="#d9a07a"/>
        <circle cx="87" cy="112" r="14" fill="#e9b48c" stroke="#0a1f18" stroke-width="4"/>
        <circle cx="213" cy="112" r="14" fill="#e9b48c" stroke="#0a1f18" stroke-width="4"/>
        <circle cx="150" cy="104" r="64" fill="#f0c19c" stroke="#0a1f18" stroke-width="4"/>
        <path d="M88 96 Q86 36 150 34 Q218 34 212 98 Q196 66 168 70 Q150 52 128 70 Q104 66 88 96z" fill="#4a2a17" stroke="#0a1f18" stroke-width="4" stroke-linejoin="round"/>
        <path d="M88 84 Q150 58 212 84 L212 96 Q150 72 88 96z" fill="{jersey}" stroke="#0a1f18" stroke-width="3"/>
        <ellipse id="{p}-eyeL" cx="127" cy="110" rx="8" ry="11" fill="#0a1f18"/>
        <ellipse id="{p}-eyeR" cx="173" cy="110" rx="8" ry="11" fill="#0a1f18"/>
        <circle cx="130" cy="106" r="3" fill="#fff"/>
        <circle cx="176" cy="106" r="3" fill="#fff"/>
        <path id="{p}-browL" d="M114 92 Q127 86 139 92" stroke="#3a1f10" stroke-width="6" fill="none" stroke-linecap="round"/>
        <path id="{p}-browR" d="M161 92 Q173 86 186 92" stroke="#3a1f10" stroke-width="6" fill="none" stroke-linecap="round"/>
        <ellipse cx="112" cy="132" rx="11" ry="6" fill="#ff8f8f" opacity="0.45"/>
        <ellipse cx="188" cy="132" rx="11" ry="6" fill="#ff8f8f" opacity="0.45"/>
        <path d="M128 138 Q150 158 172 138" stroke="#0a1f18" stroke-width="5" fill="none" stroke-linecap="round"/>
        <g id="{p}-mOpen" opacity="0">
          <path d="M126 134 Q150 134 174 134 Q172 166 150 168 Q128 166 126 134z" fill="#5a1414" stroke="#0a1f18" stroke-width="4"/>
          <ellipse cx="150" cy="158" rx="12" ry="6" fill="#e05a6a"/>
        </g>
        <g id="{p}-mO" opacity="0">
          <ellipse cx="150" cy="148" rx="16" ry="20" fill="#5a1414" stroke="#0a1f18" stroke-width="4"/>
        </g>
      </g>
    </g>
  </svg>"""


RIG_JS = """
      // --- Max rig helpers (all on this scene's paused timeline) ---
      const rig = (p) => ({
        body: "#" + p + "-body", head: "#" + p + "-head", armL: "#" + p + "-armL", armR: "#" + p + "-armR",
        eyes: ["#" + p + "-eyeL", "#" + p + "-eyeR"], mOpen: "#" + p + "-mOpen", mO: "#" + p + "-mO",
        brows: ["#" + p + "-browL", "#" + p + "-browR"], ball: "#" + p + "-ball",
      });
      const blink = (r, t) => {
        tl.to(r.eyes, { scaleY: 0.1, transformOrigin: "50% 50%", duration: 0.05, ease: "power1.in" }, t);
        tl.to(r.eyes, { scaleY: 1, transformOrigin: "50% 50%", duration: 0.08, ease: "power1.out" }, t + 0.06);
      };
      const talk = (r, starts) => {
        starts.forEach((s) => {
          tl.set(r.mOpen, { opacity: 1 }, s);
          tl.set(r.mOpen, { opacity: 0 }, s + 0.13);
        });
      };
      const arm = (sel, side, rot, t, d = 0.35, ease = "back.out(1.6)") => {
        const o = side === "L" ? "92 200" : "208 200";
        tl.to(sel, { rotation: rot, svgOrigin: o, duration: d, ease }, t);
      };
      const hop = (r, t, lift = 60) => {
        // anticipation squash, jump, land squash, settle
        tl.to(r.body, { scaleY: 0.9, scaleX: 1.06, svgOrigin: "150 500", duration: 0.12, ease: "power2.in" }, t);
        tl.to(r.body, { scaleY: 1.06, scaleX: 0.96, y: -lift, svgOrigin: "150 500", duration: 0.22, ease: "power2.out" }, t + 0.12);
        tl.to(r.body, { scaleY: 0.92, scaleX: 1.05, y: 0, svgOrigin: "150 500", duration: 0.18, ease: "power2.in" }, t + 0.34);
        tl.to(r.body, { scaleY: 1, scaleX: 1, svgOrigin: "150 500", duration: 0.3, ease: "elastic.out(1, 0.5)" }, t + 0.52);
      };
      const breathe = (r, t0, t1) => {
        for (let t = t0; t < t1 - 1.2; t += 1.6) {
          tl.to(r.body, { scaleY: 1.012, svgOrigin: "150 500", duration: 0.8, ease: "sine.inOut" }, t);
          tl.to(r.body, { scaleY: 1, svgOrigin: "150 500", duration: 0.8, ease: "sine.inOut" }, t + 0.8);
        }
      };
"""

BASE_CSS = """
      #root { position: absolute; inset: 0; overflow: hidden; font-family: "Montserrat", sans-serif; color: var(--chalk); }
      .cam { position: absolute; inset: 0; }
      .abs { position: absolute; }
      .row { position: absolute; left: 0; width: 100%; text-align: center; }
      .disp { font-family: "League Gothic", sans-serif; text-transform: uppercase; line-height: 0.9; letter-spacing: 0.01em; }
      .gold { color: var(--gold); }
      .heart { color: var(--heart); }
      .chip { display: inline-block; font-family: "Montserrat", sans-serif; font-weight: 900; font-size: 40px; letter-spacing: 0.08em;
              padding: 14px 30px; border-radius: 999px; background: var(--gold); color: var(--ink); text-transform: uppercase; }
      .card { background: #f7f4ea; color: var(--ink); border-radius: 36px; box-shadow: 0 18px 0 rgba(0,0,0,0.25); }
      .w { display: inline-block; }
"""


def scene_file(sid, body, script, extra_css="", dur=None):
    a, b = SC[sid]
    d = round(b - a, 3) if dur is None else dur
    return f"""<template id="{sid}-template">
  <style>
    #root {{
{CSS_VARS}    }}
{BASE_CSS}
{extra_css}
  </style>
  <div id="root" data-composition-id="{sid}" data-start="0" data-duration="{d}" data-width="{W}" data-height="{H}">
{body}
  </div>
  <script>
    (() => {{
      const tl = gsap.timeline({{ paused: true }});
{RIG_JS}
{script}
      window.__timelines = window.__timelines || {{}};
      window.__timelines["{sid}"] = tl;
    }})();
  </script>
</template>
"""


def L(sid, t):  # absolute -> local
    return round(t - SC[sid][0], 3)


def words_spans(text, cls="w", idp=None):
    out = []
    for i, w in enumerate(text.split(" ")):
        idattr = f' id="{idp}{i}"' if idp else ""
        out.append(f'<span class="{cls}"{idattr}>{w}</span>')
    return " ".join(out)


# ================================================================ PITCH (background)
def pitch():
    stripes = "".join(
        f'<div class="stripe" style="left:{i*120}px;background:{"var(--grass-a)" if i%2==0 else "var(--grass-b)"}"></div>'
        for i in range(9)
    )
    # chalk lines on a 3600px tall field
    lines = ""
    for y, dashed, label in [(260, False, ""), (900, True, "22"), (1500, False, ""), (2100, True, "10"), (2700, False, ""), (3300, True, "22")]:
        style = "border-top: 10px dashed rgba(245,241,228,0.55)" if dashed else "border-top: 10px solid rgba(245,241,228,0.6)"
        lines += f'<div class="chalk" style="top:{y}px;{style}"></div>'
        if label:
            lines += f'<div class="mark" data-layout-ignore style="top:{y-110}px">{label}</div>'
    script = f"""
      // camera drifts down the field, one move per scene seam
      const seams = {json.dumps([round(a,3) for _, a, _ in SCENES[1:]])};
      tl.fromTo("#pitch-field", {{ y: 0 }}, {{ y: -40, duration: 0.01 }}, 0);
      seams.forEach((t, i) => {{
        tl.to("#pitch-field", {{ y: -40 - (i + 1) * 230, duration: 0.6, ease: "power2.inOut" }}, t - 0.25);
      }});
      tl.fromTo("#pitch-field", {{ rotation: -1.5 }}, {{ rotation: 1.5, duration: {TOTAL}, ease: "none" }}, 0);
"""
    body = f"""    <div id="pitch-field" class="abs" style="left:-60px;top:-200px;width:1200px;height:3800px">
      {stripes}
      {lines}
    </div>
    <div class="abs vignette" style="inset:0"></div>"""
    css = """
      .stripe { position: absolute; top: 0; width: 120px; height: 100%; }
      .chalk { position: absolute; left: 0; width: 100%; }
      .mark { position: absolute; left: 70px; font-family: "League Gothic"; font-size: 120px; color: rgba(245,241,228,0.35); }
      .vignette { background: radial-gradient(ellipse 80% 60% at 50% 45%, rgba(0,0,0,0) 40%, rgba(0,0,0,0.55) 100%); }
      #root { background: var(--ground); }
"""
    return f"""<template id="pitch-template">
  <style>
    #root {{
{CSS_VARS}    }}
    #root {{ position: absolute; inset: 0; overflow: hidden; }}
{css}
  </style>
  <div id="root" data-composition-id="pitch" data-start="0" data-duration="{TOTAL}" data-width="{W}" data-height="{H}">
{body}
  </div>
  <script>
    (() => {{
      const tl = gsap.timeline({{ paused: true }});
{script}
      window.__timelines = window.__timelines || {{}};
      window.__timelines["pitch"] = tl;
    }})();
  </script>
</template>
"""


# ================================================================ S1 HOOK 0 - 6.2
def s_hook():
    sid = "hook"
    d = SC[sid][1] - SC[sid][0]
    body = f"""    <div id="hook-cam" class="cam">
      <div id="hook-zero" class="row" style="top:250px">
        <div id="hook-z0" class="zline disp"><span class="gold">0</span> JOUEUR</div>
        <div id="hook-z1" class="zline disp"><span class="gold">0</span> BALLON</div>
        <div id="hook-z2" class="zline disp"><span class="gold">0</span> TERRAIN</div>
      </div>
      <div id="hook-title" class="row disp" style="top:250px">
        <div id="hook-t0" class="tsmall">ET POURTANT…</div>
        <div id="hook-t1" class="tline">JE CRÉE MON</div>
        <div id="hook-t2" class="tline">CLUB DE <span class="gold">RUGBY</span></div>
      </div>
      <div id="hook-maxwrap" class="abs" style="left:330px;top:760px">{max_svg("hm", 420)}</div>
    </div>"""
    css = """
      .zline { font-size: 190px; }
      .tsmall { font-size: 96px; color: rgba(245,241,228,0.75); margin-bottom: 18px; }
      .tline { font-size: 172px; }
"""
    ws = wstarts(0, 6.2, 0)
    script = f"""
      const r = rig("hm");
      // frame 0 already shows "0 JOUEUR" (thumbnail + hook)
      tl.set("#hook-z0", {{ opacity: 1, scale: 1 }}, 0);
      tl.fromTo("#hook-z1", {{ opacity: 0, scale: 1.5, filter: "blur(10px)" }}, {{ opacity: 1, scale: 1, filter: "blur(0px)", duration: 0.22, ease: "power4.out" }}, 1.36);
      tl.fromTo("#hook-z2", {{ opacity: 0, scale: 1.5, filter: "blur(10px)" }}, {{ opacity: 1, scale: 1, filter: "blur(0px)", duration: 0.22, ease: "power4.out" }}, 2.26);
      // Max looks around the empty pitch, shrugs
      tl.fromTo("#hook-maxwrap", {{ x: 0 }}, {{ x: 0, duration: 0.01 }}, 0);
      tl.to(r.head, {{ rotation: -10, svgOrigin: "150 170", duration: 0.4, ease: "power2.inOut" }}, 0.5);
      tl.to(r.head, {{ rotation: 10, svgOrigin: "150 170", duration: 0.5, ease: "power2.inOut" }}, 1.5);
      tl.to(r.head, {{ rotation: 0, svgOrigin: "150 170", duration: 0.35, ease: "power2.inOut" }}, 2.5);
      arm(r.armL, "L", 35, 2.3, 0.3); arm(r.armR, "R", -35, 2.34, 0.3);
      tl.to(r.brows, {{ y: -6, duration: 0.2 }}, 2.3);
      arm(r.armL, "L", 8, 3.0, 0.3, "power2.inOut"); arm(r.armR, "R", -8, 3.04, 0.3, "power2.inOut");
      tl.to(r.brows, {{ y: 0, duration: 0.2 }}, 3.0);
      blink(r, 1.0); blink(r, 3.2);
      // zero lines leave word-by-word, title arrives
      tl.to(["#hook-z0", "#hook-z1", "#hook-z2"], {{ opacity: 0, filter: "blur(8px)", y: -30, duration: 0.18, stagger: 0.05, ease: "power2.in" }}, 3.3);
      tl.fromTo("#hook-t0", {{ opacity: 0, filter: "blur(8px)" }}, {{ opacity: 1, filter: "blur(0px)", duration: 0.18, ease: "power4.out" }}, 3.4);
      tl.fromTo("#hook-t1", {{ opacity: 0, scale: 1.35, filter: "blur(10px)" }}, {{ opacity: 1, scale: 1, filter: "blur(0px)", duration: 0.25, ease: "expo.out" }}, 4.02);
      tl.fromTo("#hook-t2", {{ opacity: 0, scale: 1.35, filter: "blur(10px)" }}, {{ opacity: 1, scale: 1, filter: "blur(0px)", duration: 0.25, ease: "expo.out" }}, 5.0);
      // Max: determined jump with a fist pump on "RUGBY"
      tl.to(r.brows, {{ rotation: 8, svgOrigin: "150 92", y: 4, duration: 0.2 }}, 3.9);
      hop(r, 4.75, 80);
      arm(r.armR, "R", -165, 4.85, 0.3);
      tl.to(r.mO, {{ opacity: 0, duration: 0.01 }}, 0);
      talk(r, {json.dumps(ws)});
      // exit: whip up
      tl.to("#hook-cam", {{ y: -500, filter: "blur(18px)", duration: 0.28, ease: "power3.in" }}, {d - 0.28});
"""
    tl0 = """
      tl.set("#hook-t0, #hook-t1, #hook-t2", { opacity: 0 }, 0);
      tl.set("#hook-z1, #hook-z2", { opacity: 0 }, 0);
"""
    return scene_file(sid, body, tl0 + script, css)


# ================================================================ S2 MAX 6.2 - 15.6
def s_max():
    sid = "max"
    t0 = SC[sid][0]
    d = SC[sid][1] - t0
    ws = wstarts(t0, SC[sid][1], t0)
    body = f"""    <div id="max-cam" class="cam">
      <div id="max-name" class="row" style="top:230px">
        <div class="disp namebig">{''.join(f'<span class="w ml" id="max-l{i}">{c}</span>' for i, c in enumerate("MAX"))}</div>
        <div id="max-role" class="chip">FONDATEUR</div>
      </div>
      <div id="max-dream" class="abs" style="left:560px;top:250px;width:460px;height:440px">
        <div id="max-bub3" class="bub" style="left:20px;top:400px;width:34px;height:34px"></div>
        <div id="max-bub2" class="bub" style="left:60px;top:340px;width:56px;height:56px"></div>
        <div id="max-bub1" class="bub cloud" style="left:40px;top:0;width:420px;height:320px">
          <svg viewBox="0 0 420 320" width="420" height="320">
            <rect x="50" y="170" width="320" height="70" rx="10" fill="#0f4431"/>
            <rect x="40" y="110" width="80" height="70" fill="#13284a"/><rect x="300" y="110" width="80" height="70" fill="#13284a"/>
            <rect x="120" y="128" width="180" height="52" fill="#13284a"/>
            <g fill="#ffcf1f">{''.join(f'<circle cx="{60+i*22}" cy="{140+(i%2)*14}" r="6"/>' for i in range(15))}</g>
            <path d="M190 80 v95 M230 80 v95 M190 130 h40" stroke="#f5f1e4" stroke-width="8" stroke-linecap="round"/>
            <path d="M210 40 v40" stroke="#f5f1e4" stroke-width="4"/><path d="M210 40 l34 10 l-34 10z" fill="#ff2d55"/>
          </svg>
          <div class="disp dreamtxt">MON CLUB</div>
        </div>
      </div>
      <div id="max-launch" class="row disp" style="top:250px">
        <div id="max-la0" class="bigline">AUJOURD'HUI</div>
        <div id="max-la1" class="bigline gold">JE ME LANCE</div>
      </div>
      <div id="max-alone" class="row disp" style="top:250px">
        <div id="max-al0" class="bigline">TOUT SEUL ?</div>
        <div id="max-al1" class="stamp">IMPOSSIBLE</div>
      </div>
      <div id="max-need" class="row disp" style="top:200px">
        <div id="max-n0" class="bigline">J'AI BESOIN</div>
        <div id="max-n1" class="bigline">DE <span class="gold toi">TOI</span></div>
      </div>
      <div id="max-maxwrap" class="abs" style="left:200px;top:700px">{max_svg("mm", 470)}</div>
    </div>"""
    css = """
      .namebig { font-size: 300px; }
      .bub { position: absolute; background: #f7f4ea; border-radius: 50%; box-shadow: 0 10px 0 rgba(0,0,0,0.2); }
      .cloud { border-radius: 160px; overflow: hidden; }
      .dreamtxt { position: absolute; left: 0; width: 100%; bottom: 14px; text-align: center; font-size: 64px; color: var(--ink); }
      .bigline { font-size: 160px; }
      .stamp { display: inline-block; margin-top: 30px; font-size: 140px; color: var(--heart); border: 12px solid var(--heart);
               padding: 10px 34px 0; border-radius: 22px; }
      .toi { font-size: 230px; }
"""
    # local timings
    T = lambda a: L(sid, a)
    script = f"""
      const r = rig("mm");
      tl.set("#max-dream, #max-launch, #max-alone, #max-need", {{ opacity: 0 }}, 0);
      // entry: arrives from below, matching the whip up
      tl.fromTo("#max-cam", {{ y: 500, filter: "blur(18px)" }}, {{ y: 0, filter: "blur(0px)", duration: 0.35, ease: "power3.out" }}, 0);
      // name per letter
      tl.fromTo(".ml", {{ opacity: 0.3, filter: "blur(6px)" }}, {{ opacity: 1, filter: "blur(0px)", duration: 0.12, stagger: 0.1 }}, {T(6.6)});
      tl.set(".ml", {{ opacity: 0 }}, 0);
      tl.fromTo("#max-role", {{ opacity: 0, scale: 0.6 }}, {{ opacity: 1, scale: 1, duration: 0.3, ease: "back.out(1.7)" }}, {T(6.9)});
      // wave hello
      arm(r.armR, "R", -150, {T(6.3)}, 0.3);
      tl.to(r.armR, {{ rotation: -125, svgOrigin: "208 200", duration: 0.16, ease: "sine.inOut", yoyo: true, repeat: 3 }}, {T(6.62)});
      arm(r.armR, "R", -8, {T(7.4)}, 0.3, "power2.inOut");
      // dream: name moves up & out, bubble rises
      tl.to("#max-name", {{ opacity: 0, filter: "blur(8px)", duration: 0.2 }}, {T(7.7)});
      tl.set("#max-dream", {{ opacity: 1 }}, {T(7.8)});
      tl.fromTo("#max-bub3", {{ scale: 0 }}, {{ scale: 1, duration: 0.25, ease: "back.out(2)" }}, {T(7.8)});
      tl.fromTo("#max-bub2", {{ scale: 0 }}, {{ scale: 1, duration: 0.25, ease: "back.out(2)" }}, {T(7.95)});
      tl.fromTo("#max-bub1", {{ scale: 0, transformOrigin: "10% 100%" }}, {{ scale: 1, duration: 0.45, ease: "back.out(1.5)" }}, {T(8.1)});
      tl.to("#max-maxwrap", {{ x: -110, duration: 0.6, ease: "power2.inOut" }}, {T(7.8)});
      tl.to(r.head, {{ rotation: 12, svgOrigin: "150 170", duration: 0.5, ease: "power2.inOut" }}, {T(7.9)});
      tl.to(r.eyes, {{ x: 6, y: -6, duration: 0.3 }}, {T(7.9)});
      arm(r.armL, "L", -20, {T(8.0)}, 0.4, "power2.inOut");
      // bubble pops on "Aujourd'hui"
      tl.to("#max-bub1, #max-bub2, #max-bub3", {{ scale: 1.15, opacity: 0, duration: 0.14, ease: "power2.in" }}, {T(10.62)});
      tl.to("#max-maxwrap", {{ x: 0, duration: 0.45, ease: "power3.out" }}, {T(10.7)});
      tl.to(r.head, {{ rotation: 0, svgOrigin: "150 170", duration: 0.3 }}, {T(10.7)});
      tl.to(r.eyes, {{ x: 0, y: 0, duration: 0.2 }}, {T(10.7)});
      arm(r.armL, "L", 8, {T(10.7)}, 0.3);
      tl.set("#max-launch", {{ opacity: 1 }}, {T(10.7)});
      tl.fromTo("#max-la0", {{ opacity: 0, filter: "blur(8px)" }}, {{ opacity: 1, filter: "blur(0px)", duration: 0.18 }}, {T(10.71)});
      tl.fromTo("#max-la1", {{ opacity: 0, scale: 1.3, filter: "blur(10px)" }}, {{ opacity: 1, scale: 1, filter: "blur(0px)", duration: 0.25, ease: "expo.out" }}, {T(11.56)});
      hop(r, {T(11.45)}, 50);
      arm(r.armL, "L", 160, {T(11.6)}, 0.3); arm(r.armR, "R", -160, {T(11.64)}, 0.3);
      // alone
      tl.to("#max-launch", {{ opacity: 0, filter: "blur(8px)", duration: 0.18 }}, {T(12.4)});
      tl.set("#max-alone", {{ opacity: 1 }}, {T(12.5)});
      tl.fromTo("#max-al0", {{ opacity: 0, filter: "blur(8px)" }}, {{ opacity: 1, filter: "blur(0px)", duration: 0.18 }}, {T(12.5)});
      tl.fromTo("#max-al1", {{ opacity: 0, scale: 2.2, rotation: -14 }}, {{ opacity: 1, scale: 1, rotation: -6, duration: 0.22, ease: "power4.in" }}, {T(13.24)});
      arm(r.armL, "L", 8, {T(12.5)}, 0.4, "power2.inOut"); arm(r.armR, "R", -8, {T(12.55)}, 0.4, "power2.inOut");
      tl.to(r.brows, {{ rotation: -10, svgOrigin: "150 92", y: -4, duration: 0.25 }}, {T(12.6)});
      tl.to("#max-maxwrap", {{ scale: 0.92, transformOrigin: "50% 100%", duration: 0.5, ease: "power2.out" }}, {T(12.6)});
      tl.to(r.head, {{ y: 8, duration: 0.4 }}, {T(12.7)});
      // "j'ai besoin de toi": points up at TOI
      tl.to("#max-alone", {{ opacity: 0, filter: "blur(8px)", duration: 0.18 }}, {T(14.1)});
      tl.set("#max-need", {{ opacity: 1 }}, {T(14.2)});
      tl.fromTo("#max-n0", {{ opacity: 0, filter: "blur(8px)" }}, {{ opacity: 1, filter: "blur(0px)", duration: 0.18 }}, {T(14.27)});
      tl.fromTo("#max-n1", {{ opacity: 0, scale: 1.4, filter: "blur(10px)" }}, {{ opacity: 1, scale: 1, filter: "blur(0px)", duration: 0.25, ease: "expo.out" }}, {T(14.98)});
      tl.to("#max-maxwrap", {{ scale: 1.08, transformOrigin: "50% 100%", duration: 0.35, ease: "back.out(1.6)" }}, {T(14.3)});
      tl.to(r.head, {{ y: 0, duration: 0.25 }}, {T(14.3)});
      tl.to(r.brows, {{ rotation: 6, y: 2, svgOrigin: "150 92", duration: 0.2 }}, {T(14.3)});
      arm(r.armR, "R", -150, {T(14.9)}, 0.25);
      blink(r, {T(8.9)}); blink(r, {T(12.0)}); blink(r, {T(13.8)});
      talk(r, {json.dumps(ws)});
      // exit: zoom through "TOI"
      tl.to("#max-cam", {{ scale: 2.6, transformOrigin: "60% 22%", filter: "blur(16px)", opacity: 0, duration: 0.32, ease: "power3.in" }}, {d - 0.32});
"""
    return scene_file(sid, body, script, css)


# ================================================================ S3 RULE 1 15.6 - 24.45
def s_rule1():
    sid = "rule1"
    t0 = SC[sid][0]
    d = SC[sid][1] - t0
    T = lambda a: L(sid, a)
    jersey_icon = """<svg viewBox="0 0 200 200" width="230" height="230"><path d="M60 30 L20 60 L40 100 L58 90 L58 180 L142 180 L142 90 L160 100 L180 60 L140 30 Q100 54 60 30z" fill="#0f4431" stroke="#0a1f18" stroke-width="6" stroke-linejoin="round"/><rect x="58" y="96" width="84" height="18" fill="#ffcf1f"/><rect x="58" y="134" width="84" height="18" fill="#ffcf1f"/><text x="100" y="86" font-family="League Gothic" font-size="44" text-anchor="middle" fill="#ffcf1f">10</text></svg>"""
    vest_icon = """<svg viewBox="0 0 200 200" width="230" height="230"><rect x="56" y="40" width="100" height="140" rx="12" fill="#c9a26b" stroke="#0a1f18" stroke-width="6"/><rect x="86" y="28" width="40" height="24" rx="6" fill="#888" stroke="#0a1f18" stroke-width="5"/><rect x="74" y="66" width="64" height="104" rx="4" fill="#f7f4ea"/><path d="M84 88 h44 M84 108 h44 M84 128 h30" stroke="#0a1f18" stroke-width="6" stroke-linecap="round"/><path d="M86 150 l10 10 l20 -22" stroke="#0f8a4a" stroke-width="7" fill="none" stroke-linecap="round"/><circle cx="160" cy="160" r="22" fill="#ffcf1f" stroke="#0a1f18" stroke-width="5"/><path d="M150 152 h20" stroke="#0a1f18" stroke-width="5"/></svg>"""
    body = f"""    <div id="rule1-cam" class="cam">
      <div id="rule1-three" class="row disp" style="top:330px">
        <div id="rule1-3a" class="bigline">LES RÈGLES</div>
        <div id="rule1-3b" class="bigline gold">SONT SIMPLES</div>
        <div class="dots"><span id="rule1-d0" class="num">1</span><span id="rule1-d1" class="num">2</span><span id="rule1-d2" class="num">3</span></div>
      </div>
      <div id="rule1-head" class="row" style="top:230px"><span class="chip">RÈGLE N°1</span></div>
      <div id="rule1-sub" class="row disp sub" style="top:340px">TU T'ABONNES</div>
      <div id="rule1-btnwrap" class="row" style="top:640px">
        <div id="rule1-btn" class="btn"><span id="rule1-btn-a">+ S'ABONNER</span><span id="rule1-btn-b">✓ MEMBRE DU CLUB</span></div>
      </div>
      <div id="rule1-finger" class="abs" style="left:600px;top:700px">
        <svg viewBox="0 0 120 160" width="170" height="226"><path d="M40 70 V20 a14 14 0 0 1 28 0 V62 l30 6 a14 14 0 0 1 12 16 l-8 50 a20 20 0 0 1 -20 18 H48 a20 20 0 0 1 -16 -8 L8 110 a12 12 0 0 1 18 -16 l14 14z" fill="#f0c19c" stroke="#0a1f18" stroke-width="6" stroke-linejoin="round"/></svg>
      </div>
      <div id="rule1-role" class="row disp sub" style="top:340px">TON RÔLE ?</div>
      <div id="rule1-cards" class="abs" style="left:0;top:560px;width:1080px;height:600px">
        <div id="rule1-cj" class="card rolecard" style="left:70px">{jersey_icon}<div class="disp rolename">JOUEUR</div></div>
        <div id="rule1-cb" class="card rolecard" style="left:570px">{vest_icon}<div class="disp rolename">BÉNÉVOLE</div></div>
        <div id="rule1-ou" class="disp ou">OU</div>
      </div>
    </div>"""
    css = """
      .bigline { font-size: 160px; }
      .sub { font-size: 130px; }
      .dots { margin-top: 60px; display: flex; justify-content: center; gap: 40px; }
      .num { display: inline-flex; align-items: center; justify-content: center; width: 150px; height: 150px; border-radius: 50%;
             border: 8px solid var(--chalk); font-size: 110px; padding-top: 10px; }
      .btn { display: inline-block; position: relative; width: 860px; height: 190px; border-radius: 999px; background: var(--heart);
             color: #fff; font-weight: 900; font-size: 60px; white-space: nowrap; line-height: 190px; letter-spacing: 0.02em; box-shadow: 0 16px 0 #a3132f; }
      #rule1-btn-a, #rule1-btn-b { position: absolute; left: 0; width: 100%; text-align: center; }
      .rolecard { position: absolute; top: 0; width: 440px; height: 560px; display: flex; flex-direction: column; align-items: center; justify-content: center; }
      .rolename { font-size: 110px; margin-top: 20px; }
      .ou { position: absolute; left: 0; width: 100%; text-align: center; top: 220px; font-size: 90px; color: var(--ink);
            pointer-events: none; }
      #rule1-ou { left: 455px; width: 170px; height: 170px; border-radius: 50%; background: var(--gold); line-height: 180px; top: 195px; }
"""
    script = f"""
      tl.set("#rule1-head, #rule1-sub, #rule1-btnwrap, #rule1-finger, #rule1-role, #rule1-cards, #rule1-btn-b", {{ opacity: 0 }}, 0);
      // entry: settles from slightly large (after the zoom-through)
      tl.fromTo("#rule1-cam", {{ scale: 1.25, filter: "blur(14px)", opacity: 0 }}, {{ scale: 1, filter: "blur(0px)", opacity: 1, duration: 0.4, ease: "expo.out" }}, 0);
      tl.fromTo("#rule1-3a", {{ opacity: 0, filter: "blur(8px)" }}, {{ opacity: 1, filter: "blur(0px)", duration: 0.18 }}, {T(15.7)});
      tl.fromTo("#rule1-3b", {{ opacity: 0, filter: "blur(8px)" }}, {{ opacity: 1, filter: "blur(0px)", duration: 0.18 }}, {T(16.39)});
      tl.fromTo(["#rule1-d0", "#rule1-d1", "#rule1-d2"], {{ scale: 0, opacity: 0 }}, {{ scale: 1, opacity: 1, duration: 0.35, stagger: 0.1, ease: "back.out(2)" }}, {T(16.6)});
      // "1" becomes the rule chip
      tl.to(["#rule1-3a", "#rule1-3b", "#rule1-d1", "#rule1-d2"], {{ opacity: 0, filter: "blur(8px)", duration: 0.16 }}, {T(17.4)});
      tl.to("#rule1-d0", {{ scale: 0.4, y: -560, x: 0, opacity: 0, duration: 0.3, ease: "power3.in" }}, {T(17.4)});
      tl.set("#rule1-head", {{ opacity: 1 }}, {T(17.6)});
      tl.fromTo("#rule1-head .chip", {{ scale: 0.4 }}, {{ scale: 1, duration: 0.3, ease: "back.out(2)" }}, {T(17.6)});
      tl.set("#rule1-sub", {{ opacity: 1 }}, {T(18.55)});
      tl.fromTo("#rule1-sub", {{ filter: "blur(8px)" }}, {{ filter: "blur(0px)", duration: 0.16 }}, {T(18.55)});
      tl.set("#rule1-btnwrap", {{ opacity: 1 }}, {T(18.0)});
      tl.fromTo("#rule1-btn", {{ scale: 0.3, opacity: 0 }}, {{ scale: 1, opacity: 1, duration: 0.45, ease: "back.out(1.6)" }}, {T(18.0)});
      // finger enters from off-screen bottom right, taps on "t'abonnes"
      tl.set("#rule1-finger", {{ opacity: 1 }}, {T(18.2)});
      tl.fromTo("#rule1-finger", {{ x: 500, y: 900, rotation: -20 }}, {{ x: 0, y: 0, rotation: 0, duration: 0.55, ease: "power3.out" }}, {T(18.2)});
      tl.to("#rule1-finger", {{ scale: 0.86, duration: 0.07, ease: "power2.in" }}, {T(18.82)});
      tl.to("#rule1-finger", {{ scale: 1, duration: 0.15, ease: "power2.out" }}, {T(18.89)});
      tl.to("#rule1-btn", {{ scale: 0.93, duration: 0.07 }}, {T(18.82)});
      tl.to("#rule1-btn", {{ scale: 1, backgroundColor: "#0f8a4a", boxShadow: "0 16px 0 #075a2f", duration: 0.3, ease: "back.out(2)" }}, {T(18.89)});
      tl.set("#rule1-btn-a", {{ opacity: 0 }}, {T(18.89)});
      tl.set("#rule1-btn-b", {{ opacity: 1 }}, {T(18.89)});
      tl.to("#rule1-finger", {{ x: 600, y: 900, duration: 0.4, ease: "power3.in" }}, {T(19.6)});
      // choose your role: button splits into two cards
      tl.to("#rule1-sub", {{ opacity: 0, filter: "blur(8px)", duration: 0.16 }}, {T(21.0)});
      tl.set("#rule1-role", {{ opacity: 1 }}, {T(21.2)});
      tl.fromTo("#rule1-role", {{ filter: "blur(8px)" }}, {{ filter: "blur(0px)", duration: 0.16 }}, {T(21.2)});
      tl.to("#rule1-btn", {{ scaleX: 0.2, opacity: 0, duration: 0.22, ease: "power3.in" }}, {T(21.2)});
      tl.set("#rule1-cards", {{ opacity: 1 }}, {T(21.35)});
      tl.fromTo("#rule1-cj", {{ x: 250, scale: 0.5, rotation: 0 }}, {{ x: 0, scale: 1, rotation: -3, duration: 0.5, ease: "back.out(1.4)" }}, {T(21.35)});
      tl.fromTo("#rule1-cb", {{ x: -250, scale: 0.5, rotation: 0 }}, {{ x: 0, scale: 1, rotation: 3, duration: 0.5, ease: "back.out(1.4)" }}, {T(21.42)});
      tl.fromTo("#rule1-ou", {{ scale: 0 }}, {{ scale: 1, duration: 0.3, ease: "back.out(2)" }}, {T(22.9)});
      // highlight on each word
      tl.to("#rule1-cj", {{ scale: 1.08, rotation: -5, boxShadow: "0 0 0 14px #ffcf1f, 0 18px 0 rgba(0,0,0,0.25)", duration: 0.25, ease: "back.out(2)" }}, {T(22.3)});
      tl.to("#rule1-cj", {{ scale: 1, rotation: -3, boxShadow: "0 0 0 0px #ffcf1f, 0 18px 0 rgba(0,0,0,0.25)", duration: 0.25 }}, {T(23.6)});
      tl.to("#rule1-cb", {{ scale: 1.08, rotation: 5, boxShadow: "0 0 0 14px #ffcf1f, 0 18px 0 rgba(0,0,0,0.25)", duration: 0.25, ease: "back.out(2)" }}, {T(23.8)});
      // exit: whip left
      tl.to("#rule1-cam", {{ x: -1100, filter: "blur(18px)", duration: 0.3, ease: "power3.in" }}, {d - 0.3});
"""
    return scene_file(sid, body, script, css)


# ================================================================ S4 RULE 2 24.45 - 31.45
COMMENTS = [
    ("L", "#2f80ed", "lucas_pilier", "JOUEUR ! Pilier depuis 10 ans", 2481),
    ("I", "#e2557a", "ines.rugby", "Bénévole, je gère la buvette", 1932),
    ("T", "#f2994a", "tom_ailier", "Joueur, ailier. Je cours vite", 1207),
    ("K", "#9b51e0", "karim.b", "Joueur aussi, talonneur", 318),
]


def s_rule2():
    sid = "rule2"
    t0 = SC[sid][0]
    d = SC[sid][1] - t0
    T = lambda a: L(sid, a)
    heart = '<svg viewBox="0 0 24 24" width="46" height="46"><path d="M12 21s-7.5-4.6-9.6-9.2C.9 8.4 3 4.5 6.7 4.5c2.1 0 3.6 1.2 4.3 2.4.7-1.2 2.2-2.4 4.3-2.4 3.7 0 5.8 3.9 4.3 7.3C19.5 16.4 12 21 12 21z" fill="#ff2d55"/></svg>'
    cards = ""
    for i, (ini, col, user, txt, likes) in enumerate(COMMENTS):
        cards += f"""
        <div id="rule2-c{i}" class="card com" style="top:{i*200}px">
          <div class="av" style="background:{col}">{ini}</div>
          <div class="ctext"><div class="user">@{user}</div><div class="msg">{txt}</div></div>
          <div class="likes">{heart}<span id="rule2-n{i}" class="lk">0</span></div>
          {'<div id="rule2-s%d" class="tit">TITULAIRE</div>' % i if i < 3 else ''}
        </div>"""
    # XV formation (rugby positions, numbers 1-15)
    pos = {1: (280, 0), 2: (460, 0), 3: (640, 0), 4: (370, 100), 5: (550, 100), 6: (190, 190), 8: (460, 190), 7: (730, 190),
           9: (370, 290), 10: (550, 290), 12: (370, 380), 13: (550, 380), 11: (130, 470), 15: (460, 470), 14: (790, 470)}
    xv = "".join(
        f'<div id="rule2-p{n}" class="pl" style="left:{x}px;top:{y}px"><span>{n}</span></div>' for n, (x, y) in sorted(pos.items())
    )
    body = f"""    <div id="rule2-cam" class="cam">
      <div id="rule2-head" class="row" style="top:230px"><span class="chip">RÈGLE N°2</span></div>
      <div id="rule2-sub" class="row disp sub" style="top:340px">LES + LIKÉS = <span class="gold">TITULAIRES</span></div>
      <div id="rule2-feed" class="abs" style="left:60px;top:500px;width:960px;height:800px">{cards}
      </div>
      <div id="rule2-xvt" class="row disp sub" style="top:330px">LE <span class="gold">XV</span> DE DÉPART</div>
      <div id="rule2-xv" class="abs" style="left:80px;top:470px;width:920px;height:580px">{xv}</div>
      <div id="rule2-you" class="row disp" style="top:1070px"><span class="youpill">C'EST VOUS QUI CHOISISSEZ</span></div>
    </div>"""
    css = """
      .sub { font-size: 120px; }
      .com { position: absolute; left: 0; width: 960px; height: 170px; display: flex; align-items: center; padding: 0 30px; border-radius: 30px; }
      .av { width: 100px; height: 100px; border-radius: 50%; color: #fff; font-weight: 900; font-size: 52px; display: flex; align-items: center;
            justify-content: center; flex: none; }
      .ctext { margin-left: 26px; flex: 1; }
      .user { font-weight: 700; font-size: 32px; color: #6b6f6c; }
      .msg { font-weight: 800; font-size: 40px; margin-top: 4px; }
      .likes { display: flex; flex-direction: column; align-items: center; width: 130px; }
      .lk { font-weight: 900; font-size: 36px; }
      .tit { position: absolute; right: 150px; top: -26px; background: var(--gold); color: var(--ink); font-family: "League Gothic";
             font-size: 64px; padding: 6px 22px 0; border-radius: 14px; border: 6px solid var(--ink); transform-origin: 50% 50%; }
      .pl { position: absolute; width: 100px; height: 100px; margin-left: -50px; border-radius: 50%; background: rgba(245,241,228,0.12);
            border: 6px dashed rgba(245,241,228,0.5); display: flex; align-items: center; justify-content: center;
            font-family: "League Gothic"; font-size: 66px; color: rgba(245,241,228,0.5); padding-top: 6px; }
      .youpill { display: inline-block; background: var(--chalk); color: var(--ink); font-size: 84px; padding: 12px 36px 0; border-radius: 20px; }
"""
    script = f"""
      tl.set("#rule2-sub, #rule2-xvt, #rule2-xv, #rule2-you", {{ opacity: 0 }}, 0);
      tl.set(".tit", {{ opacity: 0 }}, 0);
      // entry: whip from right
      tl.fromTo("#rule2-cam", {{ x: 1100, filter: "blur(18px)" }}, {{ x: 0, filter: "blur(0px)", duration: 0.35, ease: "power3.out" }}, 0);
      tl.fromTo("#rule2-head .chip", {{ scale: 0.4 }}, {{ scale: 1, duration: 0.3, ease: "back.out(2)" }}, {T(24.56)});
      tl.set("#rule2-sub", {{ opacity: 1 }}, {T(25.5)});
      tl.fromTo("#rule2-sub", {{ filter: "blur(8px)" }}, {{ filter: "blur(0px)", duration: 0.16 }}, {T(25.5)});
      // comments cascade in
      tl.fromTo(["#rule2-c0", "#rule2-c1", "#rule2-c2", "#rule2-c3"], {{ y: 220, opacity: 0 }}, {{ y: 0, opacity: 1, duration: 0.45, stagger: 0.08, ease: "expo.out" }}, {T(25.0)});
      // like counters climb on "likés"
      const target = {json.dumps([c[4] for c in COMMENTS])};
      target.forEach((v, i) => {{
        const o = {{ n: 0 }};
        tl.to(o, {{ n: v, duration: 1.2, ease: "power2.out", onUpdate: () => {{
          document.querySelector("#rule2-n" + i).textContent = Math.round(o.n).toLocaleString("fr-FR");
        }} }}, {T(26.6)} + i * 0.05);
      }});
      // TITULAIRE stamps on the top 3
      [0, 1, 2].forEach((i) => {{
        tl.fromTo("#rule2-s" + i, {{ opacity: 0, scale: 2.2, rotation: -16 }}, {{ opacity: 1, scale: 1, rotation: -6, duration: 0.2, ease: "power4.in" }}, {T(27.89)} + i * 0.12);
      }});
      tl.to("#rule2-c3", {{ opacity: 0.35, duration: 0.3 }}, {T(28.0)});
      // feed slides out up, XV board builds
      tl.to(["#rule2-sub", "#rule2-feed"], {{ y: -300, opacity: 0, filter: "blur(10px)", duration: 0.3, ease: "power3.in" }}, {T(28.4)});
      tl.set("#rule2-xvt, #rule2-xv", {{ opacity: 1 }}, {T(28.55)});
      tl.fromTo("#rule2-xvt", {{ filter: "blur(8px)", opacity: 0 }}, {{ filter: "blur(0px)", opacity: 1, duration: 0.18 }}, {T(28.6)});
      tl.fromTo(".pl", {{ scale: 0, opacity: 0 }}, {{ scale: 1, opacity: 1, duration: 0.3, stagger: 0.03, ease: "back.out(2)" }}, {T(28.6)});
      // positions fill gold one by one: chosen by you
      const order = [1,2,3,4,5,6,7,8,9,10,12,13,11,14,15];
      order.forEach((n, k) => {{
        tl.to("#rule2-p" + n, {{ backgroundColor: "#ffcf1f", borderColor: "#0a1f18", borderStyle: "solid", color: "#0a1f18", scale: 1.12, duration: 0.12, ease: "power2.out" }}, {T(29.3)} + k * 0.08);
        tl.to("#rule2-p" + n, {{ scale: 1, duration: 0.18, ease: "power2.out" }}, {T(29.42)} + k * 0.08);
      }});
      tl.set("#rule2-you", {{ opacity: 1 }}, {T(29.83)});
      tl.fromTo("#rule2-you .youpill", {{ scale: 0.6, opacity: 0 }}, {{ scale: 1, opacity: 1, duration: 0.35, ease: "back.out(1.7)" }}, {T(29.83)});
      // exit: everything blurs back while a heart grows (handled by rule3's flood)
      tl.to("#rule2-cam", {{ scale: 0.85, opacity: 0, filter: "blur(10px)", duration: 0.25, ease: "power2.in" }}, {d - 0.25});
"""
    return scene_file(sid, body, script, css)


# ================================================================ S5 RULE 3 31.45 - 43.05
def s_rule3():
    sid = "rule3"
    t0 = SC[sid][0]
    d = SC[sid][1] - t0
    T = lambda a: L(sid, a)
    ws = wstarts(37.8, 43.05, t0)
    heart = '<svg viewBox="0 0 24 24" width="{w}" height="{w}"><path d="M12 21s-7.5-4.6-9.6-9.2C.9 8.4 3 4.5 6.7 4.5c2.1 0 3.6 1.2 4.3 2.4.7-1.2 2.2-2.4 4.3-2.4 3.7 0 5.8 3.9 4.3 7.3C19.5 16.4 12 21 12 21z" fill="#ff2d55" stroke="#0a1f18" stroke-width="0.9"/></svg>'
    plus = '<svg viewBox="0 0 24 24" width="{w}" height="{w}"><circle cx="12" cy="12" r="11" fill="#ff2d55" stroke="#0a1f18" stroke-width="0.9"/><path d="M12 6.5v11M6.5 12h11" stroke="#fff" stroke-width="2.6" stroke-linecap="round"/></svg>'
    body = f"""    <div id="rule3-flood" class="abs" style="inset:0;background:var(--heart)"></div>
    <div id="rule3-cam" class="cam">
      <div id="rule3-head" class="row" style="top:230px"><span class="chip">RÈGLE N°3</span></div>
      <div id="rule3-eq1" class="row eq" style="top:400px">{heart.format(w=190)}<span class="disp eqt">1 LIKE = <span class="gold">10 €</span></span></div>
      <div id="rule3-eq2" class="row eq" style="top:660px">{plus.format(w=190)}<span class="disp eqt">1 ABONNÉ = <span class="gold">50 €</span></span></div>
      <div id="rule3-pot" class="abs" style="left:90px;top:330px;width:900px">
        <div class="potlabel">CAGNOTTE DU CLUB</div>
        <div class="disp potnum"><span id="rule3-num">0</span> €</div>
        <div class="bar"><div id="rule3-fill" class="fill"></div></div>
        <div id="rule3-m1" class="mline">{heart.format(w=70)}<span>1 000 likes</span><b>+10 000 €</b></div>
        <div id="rule3-m2" class="mline">{plus.format(w=70)}<span>1 000 abonnés</span><b>+50 000 €</b></div>
      </div>
      <div id="rule3-maxwrap" class="abs" style="left:620px;top:1010px">{max_svg("rm", 330)}</div>
    </div>"""
    css = """
      #rule3-flood { opacity: 0; }
      .eq { display: flex; align-items: center; justify-content: center; gap: 30px; }
      .eqt { font-size: 150px; }
      .potlabel { font-weight: 900; font-size: 44px; letter-spacing: 0.12em; color: rgba(245,241,228,0.8); text-align: center; }
      .potnum { font-size: 250px; text-align: center; color: var(--gold); margin-top: 10px; font-variant-numeric: tabular-nums; }
      .bar { margin: 26px auto 0; width: 860px; height: 46px; border-radius: 999px; background: rgba(0,0,0,0.35); border: 5px solid var(--chalk); overflow: hidden; }
      .fill { width: 100%; height: 100%; background: var(--gold); transform-origin: 0 50%; }
      .mline { display: flex; align-items: center; gap: 24px; margin: 40px 0 0 40px; font-weight: 800; font-size: 54px; }
      .mline b { color: var(--gold); margin-left: auto; margin-right: 40px; font-weight: 900; }
"""
    script = f"""
      const r = rig("rm");
      tl.set("#rule3-pot, #rule3-maxwrap, #rule3-eq1, #rule3-eq2, #rule3-m1, #rule3-m2", {{ opacity: 0 }}, 0);
      tl.set("#rule3-fill", {{ scaleX: 0 }}, 0);
      // entry: a red flood (the like colour) recedes to the pitch
      tl.set("#rule3-flood", {{ opacity: 1 }}, 0);
      tl.to("#rule3-flood", {{ opacity: 0, duration: 0.45, ease: "power2.inOut" }}, 0.2);
      tl.fromTo("#rule3-head .chip", {{ scale: 0.4 }}, {{ scale: 1, duration: 0.3, ease: "back.out(2)" }}, {T(31.6)});
      // equations
      tl.set("#rule3-eq1", {{ opacity: 1 }}, {T(33.15)});
      tl.fromTo("#rule3-eq1 svg", {{ scale: 0 }}, {{ scale: 1, duration: 0.4, ease: "back.out(2.2)" }}, {T(33.15)});
      tl.fromTo("#rule3-eq1 .eqt", {{ opacity: 0, filter: "blur(8px)" }}, {{ opacity: 1, filter: "blur(0px)", duration: 0.18 }}, {T(33.2)});
      tl.fromTo("#rule3-eq1 .gold", {{ scale: 1.6 }}, {{ scale: 1, duration: 0.3, ease: "expo.out" }}, {T(34.1)});
      tl.set("#rule3-eq2", {{ opacity: 1 }}, {T(35.95)});
      tl.fromTo("#rule3-eq2 svg", {{ scale: 0 }}, {{ scale: 1, duration: 0.4, ease: "back.out(2.2)" }}, {T(35.95)});
      tl.fromTo("#rule3-eq2 .eqt", {{ opacity: 0, filter: "blur(8px)" }}, {{ opacity: 1, filter: "blur(0px)", duration: 0.18 }}, {T(36.0)});
      tl.fromTo("#rule3-eq2 .gold", {{ scale: 1.6 }}, {{ scale: 1, duration: 0.3, ease: "expo.out" }}, {T(36.74)});
      // to the pot
      tl.to(["#rule3-eq1", "#rule3-eq2"], {{ y: -200, opacity: 0, filter: "blur(10px)", duration: 0.28, stagger: 0.05, ease: "power3.in" }}, {T(37.5)});
      tl.set("#rule3-pot", {{ opacity: 1 }}, {T(37.75)});
      tl.fromTo("#rule3-pot", {{ y: 200, filter: "blur(10px)" }}, {{ y: 0, filter: "blur(0px)", duration: 0.4, ease: "expo.out" }}, {T(37.75)});
      tl.set("#rule3-m1", {{ opacity: 1 }}, {T(37.85)});
      tl.fromTo("#rule3-m1", {{ x: -80, opacity: 0 }}, {{ x: 0, opacity: 1, duration: 0.35, ease: "expo.out" }}, {T(37.85)});
      const pot = {{ n: 0 }};
      const show = () => {{ document.querySelector("#rule3-num").textContent = Math.round(pot.n).toLocaleString("fr-FR"); }};
      tl.to(pot, {{ n: 10000, duration: 1.4, ease: "power2.out", onUpdate: show }}, {T(38.4)});
      tl.to("#rule3-fill", {{ scaleX: 0.166, duration: 1.4, ease: "power2.out" }}, {T(38.4)});
      tl.set("#rule3-m2", {{ opacity: 1 }}, {T(40.0)});
      tl.fromTo("#rule3-m2", {{ x: -80, opacity: 0 }}, {{ x: 0, opacity: 1, duration: 0.35, ease: "expo.out" }}, {T(40.0)});
      tl.to(pot, {{ n: 60000, duration: 1.5, ease: "power3.out", onUpdate: show }}, {T(40.9)});
      tl.to("#rule3-fill", {{ scaleX: 1, duration: 1.5, ease: "power3.out" }}, {T(40.9)});
      tl.fromTo(".potnum", {{ scale: 1 }}, {{ scale: 1.08, duration: 0.15, ease: "power2.out", yoyo: true, repeat: 1 }}, {T(42.3)});
      // Max pops up, jaw drops at the total
      tl.set("#rule3-maxwrap", {{ opacity: 1 }}, {T(38.2)});
      tl.fromTo("#rule3-maxwrap", {{ y: 700 }}, {{ y: 0, duration: 0.5, ease: "back.out(1.3)" }}, {T(38.2)});
      tl.to(r.head, {{ rotation: -14, svgOrigin: "150 170", duration: 0.4, ease: "power2.inOut" }}, {T(38.5)});
      tl.to(r.eyes, {{ x: -5, y: -7, duration: 0.3 }}, {T(38.5)});
      talk(r, {json.dumps(ws)});
      tl.set(r.mO, {{ opacity: 1 }}, {T(42.75)});
      tl.to(r.eyes, {{ scaleY: 1.35, scaleX: 1.2, transformOrigin: "50% 50%", duration: 0.2, ease: "back.out(3)" }}, {T(42.3)});
      arm(r.armL, "L", 150, {T(42.3)}, 0.3); arm(r.armR, "R", -150, {T(42.34)}, 0.3);
      hop(r, {T(42.2)}, 40);
      blink(r, {T(40.2)});
      // exit: whip up
      tl.to("#rule3-cam", {{ y: -500, filter: "blur(18px)", duration: 0.28, ease: "power3.in" }}, {d - 0.28});
"""
    return scene_file(sid, body, script, css)


# ================================================================ S6 BUILD 43.05 - 48.5
def s_build():
    sid = "build"
    t0 = SC[sid][0]
    d = SC[sid][1] - t0
    T = lambda a: L(sid, a)
    jersey = lambda c1, c2, n: f'<svg viewBox="0 0 200 200" width="200" height="200"><path d="M60 30 L20 60 L40 100 L58 90 L58 180 L142 180 L142 90 L160 100 L180 60 L140 30 Q100 54 60 30z" fill="{c1}" stroke="#0a1f18" stroke-width="6" stroke-linejoin="round"/><rect x="58" y="100" width="84" height="18" fill="{c2}"/><rect x="58" y="138" width="84" height="18" fill="{c2}"/><text x="100" y="90" font-family="League Gothic" font-size="44" text-anchor="middle" fill="{c2}">{n}</text></svg>'
    ballsvg = '<svg viewBox="0 0 120 80" width="170" height="113"><ellipse cx="60" cy="40" rx="54" ry="34" fill="#f7f4ea" stroke="#0a1f18" stroke-width="5"/><path d="M14 46 Q60 6 106 34" stroke="#0f4431" stroke-width="8" fill="none"/><path d="M48 30 l6 8 M58 26 l6 8 M68 24 l6 8" stroke="#0a1f18" stroke-width="3.5" stroke-linecap="round"/></svg>'
    players = ""
    xs = [60, 190, 820, 940, 300, 700]
    for i, x in enumerate(xs):
        players += f'<div id="build-pl{i}" class="abs crowd" style="left:{x}px;top:{900 + (i%2)*30}px">{max_svg("bp%d" % i, 150, jersey="#ffcf1f")}</div>'
    body = f"""    <div id="build-cam" class="cam">
      <div id="build-t" class="row disp" style="top:220px"><div class="sub">AVEC ÇA…</div></div>
      <div id="build-items" class="abs" style="left:0;top:470px;width:1080px;height:420px">
        <div id="build-i0" class="item" style="left:70px">{jersey("#0f4431", "#ffcf1f", "9")}<div class="ilabel">MAILLOTS</div></div>
        <div id="build-i1" class="item" style="left:400px">{ballsvg}<div class="ilabel" style="margin-top:44px">BALLONS</div></div>
        <div id="build-i2" class="item" style="left:730px"><svg viewBox="0 0 200 200" width="200" height="200"><path d="M50 10 V196 M150 10 V196 M50 110 H150" stroke="#f5f1e4" stroke-width="16" stroke-linecap="round"/><rect x="38" y="150" width="24" height="46" fill="#ff2d55"/><rect x="138" y="150" width="24" height="46" fill="#ff2d55"/></svg><div class="ilabel">POTEAUX</div></div>
      </div>
      <div id="build-posts" class="abs" style="left:240px;top:520px"><div style="transform:scale(1,0.86);transform-origin:50% 100%"><svg viewBox="0 0 600 700" width="600" height="700"><path d="M120 0 V700 M480 0 V700 M120 420 H480" stroke="#f5f1e4" stroke-width="26" stroke-linecap="round"/><rect x="100" y="560" width="40" height="140" fill="#ff2d55"/><rect x="460" y="560" width="40" height="140" fill="#ff2d55"/></svg></div></div>
      {players}
      <div id="build-maxwrap" class="abs" style="left:390px;top:810px">{max_svg("bm", 300, ball=True)}</div>
      <div id="build-all" class="row disp" style="top:220px"><div class="sub">TOUT LE CLUB</div><div class="sub gold">SE CONSTRUIT AVEC VOUS</div></div>
    </div>"""
    css = """
      .sub { font-size: 112px; }
      .item svg { transform: scale(1.35); margin: 30px 0 40px; }
      .item { position: absolute; top: 0; width: 280px; display: flex; flex-direction: column; align-items: center; }
      .ilabel { font-family: "League Gothic"; font-size: 84px; margin-top: 10px; }
"""
    pl_script = ""
    for i in range(len(xs)):
        delay = [0.0, 0.14, 0.07, 0.21, 0.3, 0.36][i]
        pl_script += f"""
      tl.fromTo("#build-pl{i}", {{ y: 1300 }}, {{ y: 0, duration: 0.5, ease: "back.out(1.2)" }}, {T(46.0)} + {delay});
      {{ const q = rig("bp{i}"); arm(q.armL, "L", {[150,130,160,140,120,155][i]}, {T(46.6)} + {delay}, 0.3); arm(q.armR, "R", -{[140,160,120,150,135,125][i]}, {T(46.66)} + {delay}, 0.3); hop(q, {T(47.2)} + {delay * 0.8}, {[40,55,35,50,45,30][i]}); }}"""
    script = f"""
      const r = rig("bm");
      tl.set("#build-posts, #build-all, #build-maxwrap", {{ opacity: 0 }}, 0);
      tl.set(".crowd", {{ y: 1300 }}, 0);
      tl.fromTo("#build-cam", {{ y: 500, filter: "blur(18px)" }}, {{ y: 0, filter: "blur(0px)", duration: 0.35, ease: "power3.out" }}, 0);
      tl.fromTo("#build-t .sub", {{ opacity: 0, filter: "blur(8px)" }}, {{ opacity: 1, filter: "blur(0px)", duration: 0.18 }}, {T(43.17)});
      // items drop onto the pitch on each noun
      [[0, 43.76], [1, 44.56], [2, 45.34]].forEach(([i, t]) => {{
        tl.fromTo("#build-i" + i, {{ y: -700, rotation: i === 1 ? -30 : 8 }}, {{ y: 0, rotation: 0, duration: 0.42, ease: "bounce.out" }}, t - {t0} - 0.12);
      }});
      // items gather into the real club: posts rise, Max with the ball, the team arrives
      tl.to(["#build-t", "#build-items"], {{ opacity: 0, scale: 0.7, filter: "blur(10px)", duration: 0.25, ease: "power2.in" }}, {T(45.85)});
      tl.set("#build-posts", {{ opacity: 1 }}, {T(45.95)});
      tl.fromTo("#build-posts", {{ y: 900 }}, {{ y: 0, duration: 0.5, ease: "expo.out" }}, {T(45.95)});
      tl.set("#build-maxwrap", {{ opacity: 1 }}, {T(46.0)});
      tl.fromTo("#build-maxwrap", {{ y: 900 }}, {{ y: 0, duration: 0.45, ease: "back.out(1.3)" }}, {T(46.0)});
      tl.set("#build-all", {{ opacity: 1 }}, {T(46.0)});
      tl.fromTo("#build-all .sub", {{ opacity: 0, filter: "blur(8px)" }}, {{ opacity: 1, filter: "blur(0px)", duration: 0.18, stagger: 0.5 }}, {T(46.0)});
      {pl_script}
      arm(r.armL, "L", 150, {T(46.6)}, 0.3);
      hop(r, {T(47.0)}, 60);
      // exit: the lights go down (colour flood handled by name scene)
      tl.to("#build-cam", {{ opacity: 0, duration: 0.3, ease: "power2.in" }}, {d - 0.3});
"""
    return scene_file(sid, body, script, css)


# ================================================================ S7 NAME 48.5 - 57.5
def s_name():
    sid = "name"
    t0 = SC[sid][0]
    d = SC[sid][1] - t0
    T = lambda a: L(sid, a)
    ws = wstarts(48.5, 51.9, t0)
    rolls = ["XV DES POTES", "RC DU QUARTIER", "LES SANGLIERS", "AS OVALIE", "FC ???", "? ? ?"]
    body = f"""    <div id="name-dark" class="abs" style="inset:0;background:#050d0a"></div>
    <div id="name-spot" class="abs" style="inset:0"></div>
    <div id="name-cam" class="cam">
      <div id="name-t" class="row disp" style="top:220px"><div class="sub">IL MANQUE</div><div class="sub gold">LE NOM DU CLUB</div></div>
      <div id="name-crest" class="abs" style="left:240px;top:520px;width:600px;height:700px">
        <svg viewBox="0 0 600 700" width="600" height="700">
          <path d="M300 20 L560 90 Q570 420 300 680 Q30 420 40 90 Z" fill="#0f4431" stroke="#ffcf1f" stroke-width="18"/>
          <path d="M300 70 L515 128 Q520 400 300 620 Q80 400 85 128 Z" fill="none" stroke="#f5f1e4" stroke-width="6" stroke-dasharray="18 14"/>
          <ellipse cx="300" cy="430" rx="120" ry="76" fill="#f7f4ea" stroke="#0a1f18" stroke-width="8" transform="rotate(-30 300 430)"/>
          <path d="M210 470 Q300 380 390 390" stroke="#ffcf1f" stroke-width="12" fill="none"/>
          <text data-layout-ignore x="300" y="610" font-family="League Gothic" font-size="54" text-anchor="middle" fill="#ffcf1f">EST. 2026</text>
        </svg>
        <div id="name-banner" class="banner disp"><div id="name-roll" class="roll">{''.join(f'<div class="ri">{x}</div>' for x in rolls)}</div></div>
      </div>
      <div id="name-ep" class="row" style="top:1030px"><span id="name-ep-pill" class="eppill disp">ANNONCÉ DANS L'ÉPISODE 2</span></div>
      <div id="name-input" class="abs" style="left:90px;top:950px;width:900px">
        <div class="inp" data-layout-allow-overlap><span class="ph">Ajouter un commentaire…</span><span id="name-typed" class="typed"></span><span id="name-caret" class="caret"></span></div>
        <div class="disp propose">PROPOSE <span class="gold">TON NOM</span> EN COMMENTAIRE</div>
      </div>
      <div id="name-maxwrap" class="abs" style="left:-40px;top:1060px">{max_svg("nm", 260)}</div>
    </div>"""
    css = """
      #name-dark { opacity: 0; }
      #name-spot { opacity: 0; background: radial-gradient(circle 560px at 50% 47%, rgba(255,207,31,0.28), rgba(0,0,0,0) 70%); }
      .sub { font-size: 130px; }
      .banner { position: absolute; left: -60px; top: 150px; width: 720px; height: 150px; background: var(--gold); color: var(--ink);
                border: 10px solid var(--ink); border-radius: 18px; overflow: hidden; box-shadow: 0 14px 0 rgba(0,0,0,0.4); }
      .roll { position: absolute; left: 0; top: 0; width: 100%; }
      .ri { height: 130px; line-height: 146px; text-align: center; font-size: 118px; }
      .eppill { display: inline-block; background: var(--heart); color: #fff; font-size: 96px; padding: 16px 40px 4px; border-radius: 20px; }
      .inp { position: relative; height: 120px; border-radius: 999px; background: #f7f4ea; color: var(--ink); font-weight: 700; font-size: 44px;
             line-height: 120px; padding-left: 50px; }
      .ph { color: #8b8f8c; }
      .typed { position: absolute; left: 50px; top: 0; font-weight: 900; }
      .caret { display: inline-block; width: 5px; height: 56px; background: var(--ink); vertical-align: middle; margin-left: 6px; }
      .propose { margin-top: 24px; font-size: 76px; text-align: center; white-space: nowrap; }
"""
    typed = "Moi je propose : "
    script = f"""
      const r = rig("nm");
      tl.set("#name-crest, #name-ep, #name-input, #name-maxwrap", {{ opacity: 0 }}, 0);
      // entry: the lights go down
      tl.to("#name-dark", {{ opacity: 0.82, duration: 0.5, ease: "power2.inOut" }}, 0);
      tl.fromTo("#name-t .sub", {{ opacity: 0, filter: "blur(8px)" }}, {{ opacity: 1, filter: "blur(0px)", duration: 0.18, stagger: 0.0 }}, {T(48.67)});
      tl.set("#name-t .gold", {{ opacity: 0 }}, 0);
      tl.fromTo("#name-t .gold", {{ opacity: 0, scale: 1.3, filter: "blur(10px)" }}, {{ opacity: 1, scale: 1, filter: "blur(0px)", duration: 0.25, ease: "expo.out" }}, {T(50.96)});
      // crest rises into the spotlight
      tl.set("#name-crest", {{ opacity: 1 }}, {T(49.3)});
      tl.fromTo("#name-crest", {{ y: 300, scale: 0.6, opacity: 0 }}, {{ y: 0, scale: 1, opacity: 1, duration: 0.7, ease: "expo.out" }}, {T(49.3)});
      tl.to("#name-spot", {{ opacity: 1, duration: 0.6 }}, {T(49.3)});
      // slot machine on the banner: rolls then lands on "? ? ?"
      const step = 130;
      tl.set("#name-roll", {{ y: 0 }}, 0);
      for (let k = 1; k <= 5; k++) {{
        tl.to("#name-roll", {{ y: -k * step, duration: 0.1 + k * 0.03, ease: k === 5 ? "back.out(2)" : "power1.inOut" }}, {T(51.15)} + (k - 1) * 0.16 + (k * (k - 1)) * 0.015);
      }}
      // Max peeks in, hand on chin
      tl.set("#name-maxwrap", {{ opacity: 1 }}, {T(48.6)});
      tl.fromTo("#name-maxwrap", {{ x: -300 }}, {{ x: 0, duration: 0.5, ease: "power3.out" }}, {T(48.6)});
      arm(r.armR, "R", -150, {T(49.0)}, 0.4, "power2.inOut");
      tl.to(r.head, {{ rotation: 10, svgOrigin: "150 170", duration: 0.4 }}, {T(49.0)});
      tl.to(r.eyes, {{ x: 6, y: -5, duration: 0.3 }}, {T(49.0)});
      talk(r, {json.dumps(ws)});
      blink(r, {T(50.4)});
      // EPISODE 2 stamp on "annoncé"
      tl.set("#name-ep", {{ opacity: 1 }}, {T(52.4)});
      tl.fromTo("#name-ep-pill", {{ scale: 2.4, rotation: -12, opacity: 0 }}, {{ scale: 1, rotation: -4, opacity: 1, duration: 0.24, ease: "power4.in" }}, {T(52.4)});
      tl.fromTo("#name-crest", {{ x: 0 }}, {{ x: 0, keyframes: [{{ x: -10, duration: 0.04 }}, {{ x: 9, duration: 0.04 }}, {{ x: -5, duration: 0.04 }}, {{ x: 0, duration: 0.04 }}] }}, {T(52.64)});
      // "propose le tien": comment box types a suggestion
      tl.to("#name-ep", {{ opacity: 0, y: -40, filter: "blur(8px)", duration: 0.2 }}, {T(54.4)});
      tl.to("#name-maxwrap", {{ x: -320, duration: 0.35, ease: "power3.in" }}, {T(54.3)});
      tl.to("#name-crest", {{ scale: 0.72, y: -90, duration: 0.45, ease: "power3.inOut" }}, {T(54.45)});
      tl.set("#name-input", {{ opacity: 1 }}, {T(54.6)});
      tl.fromTo("#name-input", {{ y: 120, opacity: 0 }}, {{ y: 0, opacity: 1, duration: 0.4, ease: "expo.out" }}, {T(54.6)});
      const typed = {json.dumps(typed)} + "…";
      tl.set("#name-typed", {{ textContent: "" }}, 0);
      for (let i = 1; i <= typed.length; i++) {{
        tl.set("#name-typed", {{ textContent: typed.slice(0, i) }}, {T(55.4)} + i * 0.055);
      }}
      tl.set(".ph", {{ opacity: 0 }}, {T(55.45)});
      tl.set(".ph", {{ opacity: 1 }}, 0);
      tl.set("#name-caret", {{ opacity: 0 }}, 0);
      // exit: zoom through the crest
      tl.to("#name-cam", {{ scale: 3, transformOrigin: "50% 45%", opacity: 0, filter: "blur(16px)", duration: 0.32, ease: "power3.in" }}, {d - 0.32});
      tl.to("#name-dark", {{ opacity: 0, duration: 0.3 }}, {d - 0.3});
"""
    return scene_file(sid, body, script, css)


# ================================================================ S8 CTA 57.5 - 66
def s_cta():
    sid = "cta"
    t0 = SC[sid][0]
    d = SC[sid][1] - t0
    T = lambda a: L(sid, a)
    ws = wstarts(57.5, 63.0, t0)
    body = f"""    <div id="cta-cam" class="cam">
      <div id="cta-btns" class="abs" style="left:90px;top:230px;width:900px">
        <div id="cta-b0" class="cbtn" style="background:var(--heart)"><span class="ic">+</span>ABONNE-TOI</div>
        <div id="cta-b1" class="cbtn" style="background:#f7f4ea;color:var(--ink)"><span class="ic" style="color:var(--heart)">♥</span>LIKE</div>
        <div id="cta-b2" class="cbtn" style="background:var(--gold);color:var(--ink)"><span class="ic">✎</span>COMMENTE</div>
      </div>
      <div id="cta-q" class="row disp" style="top:230px">
        <div class="qa">JOUEUR</div><div class="qou">OU</div><div class="qa gold">BÉNÉVOLE ?</div>
      </div>
      <div id="cta-end" class="row disp" style="top:250px">
        <div class="endl">ON SE RETROUVE</div><div class="endl gold">SUR LE TERRAIN</div>
        <div id="cta-next" class="next"><span class="ep">ÉPISODE 2</span><br/>LE NOM DU CLUB</div>
      </div>
      <div id="cta-maxwrap" class="abs" style="left:330px;top:820px">{max_svg("cm", 420, ball=True)}</div>
    </div>"""
    css = """
      .cbtn { height: 150px; border-radius: 999px; margin-bottom: 36px; color: #fff; font-weight: 900; font-size: 70px; display: flex;
              align-items: center; justify-content: center; gap: 26px; box-shadow: 0 14px 0 rgba(0,0,0,0.3); }
      .ic { font-size: 80px; line-height: 1; }
      .qa { font-size: 190px; }
      .qou { font-size: 90px; color: rgba(245,241,228,0.75); margin: 6px 0; }
      .endl { font-size: 150px; }
      .next { display: inline-block; margin-top: 40px; font-size: 70px; color: var(--ink); background: var(--chalk); border: 6px solid var(--ink); border-radius: 20px;
              padding: 18px 40px 6px; line-height: 1.05; }
      .ep { color: #d1123a; font-size: 96px; }
"""
    script = f"""
      const r = rig("cm");
      tl.set("#cta-q, #cta-end", {{ opacity: 0 }}, 0);
      // entry: settles from large after zooming through the crest
      tl.fromTo("#cta-cam", {{ scale: 1.3, opacity: 0, filter: "blur(14px)" }}, {{ scale: 1, opacity: 1, filter: "blur(0px)", duration: 0.4, ease: "expo.out" }}, 0);
      [[0, 57.88], [1, 58.89], [2, 59.23]].forEach(([i, t]) => {{
        tl.fromTo("#cta-b" + i, {{ x: i % 2 ? 1000 : -1000, opacity: 0 }}, {{ x: 0, opacity: 1, duration: 0.4, ease: "expo.out" }}, t - {t0} - 0.1);
        tl.to("#cta-b" + i, {{ scale: 0.94, duration: 0.06 }}, t - {t0} + 0.32);
        tl.to("#cta-b" + i, {{ scale: 1, duration: 0.2, ease: "back.out(3)" }}, t - {t0} + 0.38);
      }});
      tl.to("#cta-btns", {{ opacity: 0, y: -80, filter: "blur(10px)", duration: 0.22, ease: "power2.in" }}, {T(59.85)});
      tl.set("#cta-q", {{ opacity: 1 }}, {T(60.0)});
      tl.fromTo("#cta-q .qa", {{ opacity: 0, scale: 1.3, filter: "blur(10px)" }}, {{ opacity: 1, scale: 1, filter: "blur(0px)", duration: 0.25, ease: "expo.out", stagger: 0.83 }}, {T(60.06)});
      tl.fromTo("#cta-q .qou", {{ opacity: 0 }}, {{ opacity: 1, duration: 0.15 }}, {T(60.5)});
      tl.to("#cta-q", {{ opacity: 0, filter: "blur(8px)", duration: 0.2 }}, {T(61.35)});
      tl.set("#cta-end", {{ opacity: 1 }}, {T(61.5)});
      tl.fromTo("#cta-end .endl", {{ opacity: 0, filter: "blur(8px)" }}, {{ opacity: 1, filter: "blur(0px)", duration: 0.18, stagger: 0.5 }}, {T(61.5)});
      tl.fromTo("#cta-next", {{ opacity: 0, scale: 0.6 }}, {{ opacity: 1, scale: 1, duration: 0.4, ease: "back.out(1.7)" }}, {T(62.5)});
      // Max: points at the buttons, then the classic ball-under-arm pose and a wink
      arm(r.armL, "L", 150, {T(57.9)}, 0.3);
      tl.to(r.head, {{ rotation: -8, svgOrigin: "150 170", duration: 0.3 }}, {T(57.9)});
      arm(r.armL, "L", 8, {T(60.0)}, 0.35, "power2.inOut");
      tl.to(r.head, {{ rotation: 0, svgOrigin: "150 170", duration: 0.3 }}, {T(60.0)});
      tl.to(r.brows, {{ y: -6, duration: 0.2 }}, {T(60.5)});
      tl.to(r.brows, {{ y: 0, duration: 0.2 }}, {T(61.2)});
      hop(r, {T(61.9)}, 70);
      arm(r.armL, "L", 165, {T(62.0)}, 0.3);
      tl.to("#cm-eyeL", {{ scaleY: 0.1, transformOrigin: "50% 50%", duration: 0.08 }}, {T(63.6)});
      tl.to("#cm-eyeL", {{ scaleY: 1, transformOrigin: "50% 50%", duration: 0.12 }}, {T(64.1)});
      blink(r, {T(59.0)});
      talk(r, {json.dumps(ws)});
"""
    return scene_file(sid, body, script, css)


# ================================================================ CAPTIONS
def captions():
    toks = []
    for w in words:
        t = w["text"].strip()
        t = re.sub(r"[.,;:!]+$", "", t)
        toks.append({"text": t, "start": w["start"], "end": w["end"], "brk": bool(re.search(r"[.,;:!?]$", w["text"].strip()))})
    # merge "10" "000" style thousands
    merged = []
    for t in toks:
        if merged and t["text"] == "000" and merged[-1]["text"].isdigit():
            merged[-1]["text"] += " 000"; merged[-1]["end"] = t["end"]; merged[-1]["brk"] = t["brk"]
        else:
            merged.append(dict(t))
    for t in merged:
        if t["text"] == "1000": t["text"] = "1 000"
        if t["text"].lower() == "euros": t["text"] = "€"
    groups, cur = [], []
    for i, t in enumerate(merged):
        cur.append(t)
        nxt = merged[i + 1] if i + 1 < len(merged) else None
        gap = (nxt["start"] - t["end"]) if nxt else 9
        if t["brk"] or len(cur) >= 3 or gap > 0.15 or nxt is None:
            groups.append(cur); cur = []
    html, js = "", []
    for gi, g in enumerate(groups):
        spans = " ".join(f'<span id="cap-g{gi}w{wi}" class="cw">{w["text"].upper()}</span>' for wi, w in enumerate(g))
        html += f'      <div id="cap-g{gi}" class="cg"><span class="cbox">{spans}</span></div>\n'
        nxt_start = groups[gi + 1][0]["start"] if gi + 1 < len(groups) else TOTAL
        end = min(g[-1]["end"] + 0.25, nxt_start - 0.02)
        prev_end = js[-1]["end"] if js else 0.1
        js.append({"id": gi, "start": round(max(g[0]["start"] - 0.05, prev_end + 0.01, 0.1), 3), "end": round(end, 3), "w": [round(w["start"], 3) for w in g]})
    body = f"""    <div id="cap-band" class="abs" style="left:0;top:1190px;width:1080px;height:130px">
{html}    </div>"""
    css = """
      #root { position: absolute; inset: 0; overflow: hidden; }
      .cg { position: absolute; left: 0; top: 0; width: 100%; text-align: center; font-family: "Montserrat", sans-serif; font-weight: 900;
            font-size: 66px; line-height: 130px; color: #fff; opacity: 0; letter-spacing: 0.01em;
            text-shadow: 0 5px 0 #0a1f18, 0 -2px 0 #0a1f18, 3px 0 0 #0a1f18, -3px 0 0 #0a1f18, 0 0 22px rgba(0,0,0,0.6); }
      .cw { display: inline-block; margin: 0 6px; }
      #cap-band { position: absolute; }
      .cbox { display: inline-block; background: rgba(6,22,16,0.78); border-radius: 26px; padding: 0 22px; line-height: 116px; }
"""
    script = f"""
      const G = {json.dumps(js)};
      G.forEach((g) => {{
        const el = "#cap-g" + g.id;
        tl.fromTo(el, {{ opacity: 0, scale: 0.85 }}, {{ opacity: 1, scale: 1, duration: 0.12, ease: "back.out(2)" }}, g.start);
        g.w.forEach((ws, i) => {{
          const w = "#cap-g" + g.id + "w" + i;
          tl.set(w, {{ color: "#ffcf1f" }}, ws);
          if (i > 0) tl.set("#cap-g" + g.id + "w" + (i - 1), {{ color: "#ffffff" }}, ws);
        }});
        tl.to(el, {{ opacity: 0, duration: 0.08, ease: "power2.in" }}, g.end - 0.08);
        tl.set(el, {{ opacity: 0, visibility: "hidden" }}, g.end);
      }});
"""
    return f"""<template id="captions-template">
  <style>
{css}
  </style>
  <div id="root" data-composition-id="captions" data-start="0" data-duration="{TOTAL}" data-width="{W}" data-height="{H}">
{body}
  </div>
  <script>
    (() => {{
      const tl = gsap.timeline({{ paused: true }});
{script}
      window.__timelines = window.__timelines || {{}};
      window.__timelines["captions"] = tl;
    }})();
  </script>
</template>
"""


# ================================================================ INDEX
SFX = [  # file, absolute time of the visual hit, volume
    ("pop", 0.15, 0.55), ("pop", 1.38, 0.6), ("pop", 2.28, 0.65),
    ("whoosh-short", 4.0, 0.5), ("impact-bass-1", 5.0, 0.5),
    ("whoosh", 6.1, 0.5),
    ("pop", 8.1, 0.45), ("pop", 10.65, 0.55),
    ("impact-bass-1", 13.42, 0.35),
    ("whoosh-short", 15.45, 0.55),
    ("ping", 16.6, 0.35),
    ("click", 18.85, 0.8),
    ("whoosh-short", 21.3, 0.45),
    ("whoosh", 24.3, 0.5),
    ("pop", 27.92, 0.5), ("pop", 28.04, 0.45), ("pop", 28.16, 0.4),
    ("sparkle", 29.3, 0.35),
    ("whoosh-short", 31.35, 0.55),
    ("pop", 33.2, 0.5), ("pop", 36.0, 0.5),
    ("sparkle", 38.4, 0.35), ("chime", 42.35, 0.45),
    ("whoosh", 42.9, 0.5),
    ("pop", 43.76, 0.5), ("pop", 44.56, 0.5), ("pop", 45.34, 0.55),
    ("whoosh-short", 46.0, 0.45),
    ("impact-bass-1", 52.42, 0.6),
    ("typing", 55.45, 0.4),
    ("whoosh-short", 57.3, 0.5),
    ("click-soft", 57.95, 0.6), ("pop", 58.95, 0.5), ("click-soft", 59.3, 0.6),
    ("chime", 63.2, 0.35),
]
PEAK = {"chime": 0.418, "click-soft": 0.073, "click": 0.073, "impact-bass-1": 0.073, "ping": 0.324, "pop": 0.12, "riser": 3.472,
        "sparkle": 0.027, "typing": 0.457, "whoosh-short": 0.162, "whoosh": 0.162}


def index():
    hosts = ""
    for k, (sid, a, b) in enumerate(SCENES):
        hosts += f"""      <div id="{sid}" data-composition-id="{sid}" data-composition-src="compositions/{sid}.html" class="clip"
        data-start="{a}" data-duration="{round(b-a,3)}" data-track-index="{k%2+1}" data-track-kind="graphics"
        data-width="{W}" data-height="{H}" style="z-index:{10+k}"></div>
"""
    audio = ""
    # riser into the name reveal: peak lands on 52.42
    sfx = SFX + [("riser", 52.42 - 0.0, 0.45)]
    DUR = {"chime": 2.5, "click-soft": 0.37, "click": 0.37, "impact-bass-1": 2.12, "ping": 1.32, "pop": 0.72, "riser": 10.03,
           "sparkle": 1.8, "typing": 1.5, "whoosh-short": 0.57, "whoosh": 0.57}
    lanes = []  # end time per lane
    for i, (f, t, v) in enumerate(sorted(sfx, key=lambda x: x[1] - PEAK[x[0]])):
        start = round(max(t - PEAK[f] + 1 / 30, 0), 3)
        dur = round(min(DUR[f], TOTAL - start) - 0.01, 3)
        lane = next((k for k, e in enumerate(lanes) if e <= start), None)
        if lane is None:
            lanes.append(0); lane = len(lanes) - 1
        lanes[lane] = start + dur
        audio += f'      <audio id="sfx{i:02d}" class="clip" src="assets/sfx/{f}.mp3" data-start="{start}" data-duration="{dur}" data-track-index="{20+lane}" data-volume="{v}"></audio>\n'
    return f"""<!doctype html>
<html lang="fr" data-resolution="portrait">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width={W}, height={H}" />
    <title>Mon club de rugby — Épisode 1</title>
    <script src="https://cdn.jsdelivr.net/npm/gsap@3.15.0/dist/gsap.min.js"></script>
    <style>
      * {{ margin: 0; padding: 0; box-sizing: border-box; }}
      html, body {{ margin: 0; width: {W}px; height: {H}px; overflow: hidden; background: #0d3a2b; }}
      #main {{ position: relative; width: 100%; height: 100%; }}
      #stage-ground {{ position: absolute; inset: 0; background: #0d3a2b; }}
    </style>
  </head>
  <body>
    <div id="main" data-composition-id="main" data-start="0" data-duration="{TOTAL}" data-width="{W}" data-height="{H}">
      <div id="stage-ground"></div>
      <div id="pitch" data-composition-id="pitch" data-composition-src="compositions/pitch.html" class="clip"
        data-start="0" data-duration="{TOTAL}" data-track-index="0" data-track-kind="graphics"
        data-width="{W}" data-height="{H}" style="z-index:1"></div>
{hosts}      <div id="captions" data-composition-id="captions" data-composition-src="compositions/captions.html" class="clip"
        data-start="0" data-duration="{TOTAL}" data-track-index="3" data-track-kind="captions"
        data-width="{W}" data-height="{H}" style="z-index:40"></div>
      <audio id="voiceover" class="clip" src="assets/audio/voiceover.mp3" data-start="0" data-track-index="10" data-volume="1"></audio>
{audio}    </div>
    <script>
      window.__timelines = window.__timelines || {{}};
      window.__timelines["main"] = gsap.timeline({{ paused: true }});
    </script>
  </body>
</html>
"""


os.makedirs(f"{P}/compositions", exist_ok=True)
files = {
    "index.html": index(),
    "compositions/pitch.html": pitch(),
    "compositions/hook.html": s_hook(),
    "compositions/max.html": s_max(),
    "compositions/rule1.html": s_rule1(),
    "compositions/rule2.html": s_rule2(),
    "compositions/rule3.html": s_rule3(),
    "compositions/build.html": s_build(),
    "compositions/name.html": s_name(),
    "compositions/cta.html": s_cta(),
    "compositions/captions.html": captions(),
}
for k, v in files.items():
    v = re.sub(r"tl\.set\(([^;]*?), 0\);", r"gsap.set(\1);", v)
    open(f"{P}/{k}", "w").write(v)
print("ok", len(files))
