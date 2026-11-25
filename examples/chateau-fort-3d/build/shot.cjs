const { chromium } = require('playwright');
(async () => {
  const times = process.argv.slice(2).map(Number);
  const b = await chromium.launch({ args: ['--use-gl=angle', '--use-angle=swiftshader', '--enable-unsafe-swiftshader'] });
  const p = await b.newPage({ viewport: { width: 1920, height: 1080 } });
  const errs = [];
  p.on('pageerror', e => errs.push(String(e)));
  p.on('console', m => { if (m.type() === 'error' || m.type()==='warning') errs.push(m.text()); });
  await p.goto('http://localhost:8124/build/dev.html');
  await p.waitForFunction(() => window.ready || window.err, null, { timeout: 120000 });
  const err = await p.evaluate(() => window.err);
  if (err) { console.log('ERR', err); }
  for (const t of times) {
    const ms = await p.evaluate((t) => { const a = performance.now(); W.render(t); W.renderer.getContext().finish(); return performance.now() - a; }, t);
    await p.screenshot({ path: `/tmp/claude-0/shots/t${t}.jpg`, type: 'jpeg', quality: 80 });
    console.log('t', t, Math.round(ms), 'ms');
  }
  console.log([...new Set(errs)].slice(0, 10).join('\n'));
  await b.close();
})();
