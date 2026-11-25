set -e
cd "$(dirname "$0")"
bun build src/entry.js --outfile /tmp/claude-0/world.raw.js --format iife --minify
python3 - <<'PY'
s=open('/tmp/claude-0/world.raw.js').read()
s=s.replace('Math.random()','__hfRand()').replace('requestAnimationFrame','hfNoFrameLoop').replace('cancelAnimationFrame','hfNoFrameCancel')
pre='var __hfSeed=12345;function __hfRand(){__hfSeed=(__hfSeed*1664525+1013904223)>>>0;return __hfSeed/4294967296;}\n'
open('../assets/world.bundle.js','w').write(pre+s)
PY
echo bundled
