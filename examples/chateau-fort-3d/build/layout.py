import json, subprocess
d=json.load(open('build/script.json'))
def dur(s): return float(subprocess.run(['ffprobe','-v','error','-show_entries','format=duration','-of','csv=p=0',f'assets/vo/{s}.mp3'],capture_output=True,text=True).stdout)
# per-scene: (lead-in, default gap, tail, special gaps before segment)
cfg={
 's1':(8.0,1.0,5.0,{}),
 's2':(2.0,1.0,1.6,{'s2c':2.4,'s2d':2.4}),
 's3':(1.6,1.0,1.6,{'s3c':2.4,'s3d':2.6}),
 's4':(1.6,1.0,1.6,{'s4c':2.4,'s4d':2.6}),
 's5':(1.6,1.0,1.6,{'s5e':2.4,'s5f':2.6}),
 's6':(1.6,1.0,1.6,{'s6c':2.4,'s6d':2.6}),
 's7':(1.6,1.0,1.6,{'s7b':2.0,'s7c':2.6}),
 's8':(1.6,1.0,1.6,{'s8b':2.4,'s8c':2.6}),
 's9':(1.6,1.2,1.6,{}),
 's10':(1.2,0.8,1.2,{}),
 's11':(5.0,1.2,8.0,{'s11c':4.0}),
}
t=0;scenes=[];segs={}
for sc,lst in d.items():
  lead,gap,tail,sp=cfg[sc];st=t;t+=lead
  for i,(sid,text) in enumerate(lst):
    if i>0: t+=sp.get(sid,gap)
    dd=dur(sid);segs[sid]={'start':round(t,3),'dur':round(dd,3),'scene':sc,'text':text};t+=dd
  t+=tail;scenes.append({'id':sc,'start':round(st,3),'dur':round(t-st,3)})
total=round(t,3)
json.dump({'total':total,'scenes':scenes,'segs':segs},open('build/timeline.json','w'),ensure_ascii=False,indent=1)
open('assets/cues.js','w').write('window.CUES='+json.dumps({'total':total,'scenes':{s['id']:[s['start'],s['dur']] for s in scenes},'segs':{k:[v['start'],v['dur']] for k,v in segs.items()}})+';\n')
for s in scenes: print(s)
print('TOTAL',total, total/60)

# word-level cues
import re
words={}
for sid,v in segs.items():
  a=json.load(open(f'build/align/{sid}.json'))['alignment']
  ch=a['characters'];st=a['character_start_times_seconds'];en=a['character_end_times_seconds']
  ws=[];cur='';cs=None;ce=None
  for c,s,e in zip(ch,st,en):
    if c.isspace():
      if cur: ws.append([cur,round(v['start']+cs,3),round(v['start']+ce,3)]);cur=''
      continue
    if not cur: cs=s
    cur+=c;ce=e
  if cur: ws.append([cur,round(v['start']+cs,3),round(v['start']+ce,3)])
  words[sid]=ws
json.dump(words,open('build/words.json','w'),ensure_ascii=False)
cues={'total':total,'scenes':{s['id']:[s['start'],s['dur']] for s in scenes},'segs':{k:[v['start'],v['dur']] for k,v in segs.items()},'words':{k:[[w[0].lower().strip('.,:;!?…’\'"'),w[1]] for w in ws] for k,ws in words.items()}}
open('assets/cues.js','w').write('window.CUES='+json.dumps(cues,ensure_ascii=False)+';\n')
