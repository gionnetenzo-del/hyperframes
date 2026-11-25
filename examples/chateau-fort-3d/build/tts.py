import json, sys, base64, urllib.request, os, subprocess
VOICE="3BZLNrQEzQVYs6kPOW4S"
d=json.load(open('build/script.json'))
only=set(sys.argv[1:])
for scene,segs in d.items():
  for sid,text in segs:
    if only and sid not in only: continue
    out=f'assets/vo/{sid}.mp3'
    if os.path.exists(out) and not only: continue
    body=json.dumps({"text":text,"model_id":"eleven_multilingual_v2","language_code":"fr",
      "voice_settings":{"stability":0.5,"similarity_boost":0.8,"style":0.15,"use_speaker_boost":True,"speed":1.1}}).encode()
    req=urllib.request.Request(f"https://api.elevenlabs.io/v1/text-to-speech/{VOICE}/with-timestamps?output_format=mp3_44100_192",data=body,headers={"Content-Type":"application/json","xi-api-key":"x"})
    r=json.load(urllib.request.urlopen(req,timeout=300))
    open(out,'wb').write(base64.b64decode(r['audio_base64']))
    json.dump({"text":text,"alignment":r.get('alignment'),"norm":r.get('normalized_alignment')},open(f'build/align/{sid}.json','w'),ensure_ascii=False)
    dur=subprocess.run(['ffprobe','-v','error','-show_entries','format=duration','-of','csv=p=0',out],capture_output=True,text=True).stdout.strip()
    print(sid,dur,flush=True)
