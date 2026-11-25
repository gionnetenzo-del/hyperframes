#!/bin/bash
cd /home/user/castle-doc
CH=("0 160" "160 320" "320 480" "480 -")
i=0
for c in "${CH[@]}"; do
  set -- $c
  out=renders/chunk_$i.mp4
  if [ -s "$out" ]; then echo "skip $out"; i=$((i+1)); continue; fi
  for attempt in 1 2; do
    if [ "$2" = "-" ]; then args="--start $1"; else args="--start $1 --end $2"; fi
    echo "[$(date +%T)] chunk $i ($args) attempt $attempt"
    npx hyperframes render . $args --workers 3 -o $out --skill=hyperframes > renders/chunk_$i.log 2>&1
    if [ -s "$out" ]; then echo "[$(date +%T)] chunk $i done"; break; fi
    echo "chunk $i failed"; tail -5 renders/chunk_$i.log
  done
  i=$((i+1))
done
echo ALLDONE
