/* Shared cut schedule: read by index.html (picture) and scripts/mix-sfx.mjs (sound).
   Every time is in seconds on the root timeline. */
(function (g) {
  // Watermelon semi-axes (scene units). The melon rests on the board (y = 0).
  var A = { x: 1.6, y: 0.98, z: 1.02 };

  function mulberry32(a) {
    return function () {
      a |= 0;
      a = (a + 0x6d2b79f5) | 0;
      var t = Math.imul(a ^ (a >>> 15), 1 | a);
      t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
      return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
  }

  // Score the melon (y and z planes), then chop it left to right (x planes).
  function makeRound(opts) {
    var rnd = mulberry32(opts.seed);
    var yIdx = [],
      zIdx = [];
    for (var i = 1; i < opts.ny; i++) yIdx.push(i);
    for (var k = 1; k < opts.nz; k++) zIdx.push(k);
    function shuffle(a) {
      for (var i = a.length - 1; i > 0; i--) {
        var j = Math.floor(rnd() * (i + 1));
        var t = a[i];
        a[i] = a[j];
        a[j] = t;
      }
      return a;
    }
    if (opts.shuffle) {
      shuffle(yIdx);
      shuffle(zIdx);
    }
    var scoring = [];
    var t = opts.scoreStart;
    var n = yIdx.length + zIdx.length;
    var zi = 0,
      yi = 0;
    for (var c = 0; c < n; c++) {
      var useZ = (c % 2 === 0 && zi < zIdx.length) || yi >= yIdx.length;
      scoring.push(useZ ? { t: t, axis: "z", idx: zIdx[zi++] } : { t: t, axis: "y", idx: yIdx[yi++] });
      var f = n > 1 ? c / (n - 1) : 0;
      t += opts.scoreGapStart + (opts.scoreGapEnd - opts.scoreGapStart) * f;
    }
    var chops = [];
    var limit = opts.nxChops === undefined ? opts.nx - 1 : opts.nxChops;
    for (var x = 1; x <= limit; x++) {
      chops.push({ t: opts.chopStart + (x - 1) * opts.chopGap, idx: x });
    }
    return {
      start: opts.start,
      end: opts.end,
      nx: opts.nx,
      ny: opts.ny,
      nz: opts.nz,
      scoring: scoring,
      chops: chops,
      poise: opts.poise || null,
    };
  }

  var rounds = [
    makeRound({
      seed: 7,
      start: 0,
      end: 11.2,
      nx: 5,
      ny: 3,
      nz: 3,
      scoreStart: 0.9,
      scoreGapStart: 1.1,
      scoreGapEnd: 1.0,
      chopStart: 5.8,
      chopGap: 0.95,
    }),
    makeRound({
      seed: 21,
      shuffle: true,
      start: 11.2,
      end: 38.4,
      nx: 22,
      ny: 12,
      nz: 12,
      scoreStart: 12.0,
      scoreGapStart: 0.8,
      scoreGapEnd: 0.4,
      chopStart: 25.9,
      chopGap: 0.52,
      poise: 24.6,
    }),
    // A fresh melon and its first cut: the loop starts again.
    makeRound({
      seed: 3,
      start: 38.4,
      end: 41,
      nx: 5,
      ny: 3,
      nz: 3,
      scoreStart: 39.3,
      scoreGapStart: 1,
      scoreGapEnd: 1,
      chopStart: 99,
      chopGap: 1,
      nxChops: 0,
    }),
  ];
  // Round 3 shows a single scoring cut only.
  rounds[2].scoring = rounds[2].scoring.slice(0, 1);

  g.MELON = { A: A, rounds: rounds, duration: 41, mulberry32: mulberry32 };
})(typeof window !== "undefined" ? window : globalThis);
