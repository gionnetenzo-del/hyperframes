import json, subprocess, numpy as np
SR=44100
TL=json.load(open('build/timeline.json')); TOTAL=TL['total']
def load(p):
    raw=subprocess.run(['ffmpeg','-v','error','-i',p,'-f','f32le','-ac','2','-ar',str(SR),'-'],capture_output=True).stdout
    return np.frombuffer(raw,dtype=np.float32).reshape(-1,2)
N=int((TOTAL+1)*SR); bed=np.zeros((N,2),np.float32)
cues=[('m1_ouverture',0.0,0.0,42.6,2.4),('m2_chantier',43.0,1.2,226.0,2.6),('m3_batir',226.6,2.0,424.6,2.8),('m4_siege',424.8,2.0,546.6,2.4),('m5_pause',548.2,0.8,575.2,2.2),('m6_finale',574.6,1.5,TOTAL-3.0,3.0)]
for name,start,fin,fout_at,fout in cues:
    a=load(f'assets/music/{name}.mp3'); n=len(a); t=np.arange(n)/SR
    g=np.clip(t/fin,0,1) if fin>0 else np.ones(n)
    tabs=start+t
    g*=np.clip(1-(tabs-fout_at)/fout,0,1)
    a=a*g[:,None]
    i0=int(start*SR); i1=min(N,i0+n); bed[i0:i1]+=a[:i1-i0]
# ducking envelope
env=np.full(N,0.52,np.float32)
segs=TL['segs']
voice=np.zeros(N,bool)
for k,v in segs.items():
    a=int((v['start']-0.25)*SR); b=int((v['start']+v['dur']+0.2)*SR); voice[max(0,a):b]=True
env[voice]=0.17
# smooth with ~0.35s moving average (cumsum)
w=int(0.35*SR); c=np.cumsum(np.concatenate([[0],env]))
sm=(c[w:]-c[:-w])/w; env=np.concatenate([np.full(w//2,sm[0]),sm,np.full(N-len(sm)-w//2,sm[-1])])[:N]
bed*=env[:,None]
pk=np.abs(bed).max(); print('peak',pk)
if pk>0.89: bed*=0.89/pk
subprocess.run(['ffmpeg','-v','error','-y','-f','f32le','-ac','2','-ar',str(SR),'-i','-','-c:a','aac','-b:a','192k','assets/music/music_bed.m4a'],input=bed.tobytes())
print('ok')
