"""Mix assets/sfx.wav from the cut schedule (assets/schedule.js dumped to JSON, argv[1])."""
import json, subprocess, sys, numpy as np
SR = 44100
def load(path, a, b, rate=1.0):
    af = f"atrim={a}:{b},asetpts=N/SR/TB" + (f",asetrate={int(SR*rate)},aresample={SR}" if rate != 1 else "")
    raw = subprocess.run(["ffmpeg","-v","error","-i",path,"-af",af,"-ac","2","-ar",str(SR),"-f","f32le","-"],capture_output=True,check=True).stdout
    x = np.frombuffer(raw, np.float32).reshape(-1, 2).copy()
    n = min(len(x), int(0.01*SR)); x[:n] *= np.linspace(0,1,n)[:,None]
    n = int(0.05*SR); x[-n:] *= np.linspace(1,0,n)[:,None]
    return x
S = json.load(open(sys.argv[1]))
out = np.zeros((int(S["duration"]*SR)+SR, 2), np.float32)
# (clip, seconds from clip start to its hit)
slices = [(load("assets/slice.mp3",0.45,1.0,r),0.2) for r in (1.0,1.07,0.94)]
chops = [(load("assets/chop.mp3",0.07,0.5),0.04),(load("assets/chop.mp3",0.55,1.0),0.05),(load("assets/chop.mp3",0.07,0.5,1.08),0.04)]
tumble = [(load("assets/tumble.mp3",1.1,1.48,r),0.16) for r in (1.0,1.12)]
def place(clip, t, gain):
    x, hit = clip; i = int((t - hit + 1/30) * SR)
    if i < 0: x = x[-i:]; i = 0
    out[i:i+len(x)] += x[:len(out)-i] * gain
for R in S["rounds"]:
    for n, c in enumerate(R["scoring"]): place(slices[n % 3], c["t"], 0.9)
    for n, c in enumerate(R["chops"]):
        place(chops[n % 3], c["t"], 1.0)
        place(tumble[n % 2], c["t"] + 0.3, 0.55 if R["nx"] > 6 else 0.8)
peak = np.abs(out).max(); out *= 0.89 / peak
subprocess.run(["ffmpeg","-v","error","-y","-f","f32le","-ar",str(SR),"-ac","2","-i","-","assets/sfx.wav"],input=out.tobytes(),check=True)
print("peak scaled from", peak)
