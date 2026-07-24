/* ============================================================
   HERO — tea flow-field (the "hero video")
   Hundreds of leaf-fragment particles drift through a slowly
   rotating noise field, like leaves unfurling in hot water.
   ============================================================ */
(function () {
  const canvas = document.getElementById('teaField');
  const ctx = canvas.getContext('2d');
  const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;

  let W, H, dpr, particles = [];
  const COLORS = [
    [47, 143, 91], [47, 143, 91], [35, 115, 74], [35, 115, 74],
    [88, 168, 119], [24, 84, 58], [24, 84, 58],
    [203, 162, 88],            // rare gold
    [233, 226, 211]            // rare cream
  ];

  function resize() {
    dpr = Math.min(devicePixelRatio || 1, 2);
    W = canvas.clientWidth; H = canvas.clientHeight;
    canvas.width = W * dpr; canvas.height = H * dpr;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    ctx.fillStyle = 'rgba(11,29,24,1)';
    seed();
  }

  function makeP() {
    const cw = Math.random();
    // weight colors: last two entries are rare
    let ci = Math.floor(Math.random() * 7);
    if (cw > 0.975) ci = 8; else if (cw > 0.93) ci = 7;
    return {
      x: Math.random() * W,
      y: Math.random() * H,
      px: 0, py: 0,
      v: 0.35 + Math.random() * 0.85,
      w: 0.6 + Math.random() * 1.3,
      c: COLORS[ci],
      a: 0.03 + Math.random() * 0.09,
      life: 200 + Math.random() * 500
    };
  }

  function seed() {
    const n = Math.min(850, Math.round((W * H) / 2100));
    particles = Array.from({ length: n }, makeP);
    particles.forEach(p => { p.px = p.x; p.py = p.y; });
  }

  let t = 0;
  const mouse = { x: -9999, y: -9999 };
  addEventListener('pointermove', e => {
    const r = canvas.getBoundingClientRect();
    mouse.x = e.clientX - r.left; mouse.y = e.clientY - r.top;
  }, { passive: true });

  function field(x, y) {
    return (
      Math.sin(x * 0.0016 + t * 0.00035) * 1.6 +
      Math.cos(y * 0.0013 - t * 0.00028) * 1.4 +
      Math.sin((x + y) * 0.0006 + t * 0.0002) * 0.9
    );
  }

  function frame(now) {
    t = now;
    // translucent fade — leaves silky trails
    ctx.fillStyle = 'rgba(11,29,24,0.05)';
    ctx.fillRect(0, 0, W, H);

    for (const p of particles) {
      const a = field(p.x, p.y);
      let vx = Math.cos(a) * p.v;
      let vy = Math.sin(a) * p.v - 0.22;   // gentle upward drift, like steam

      // soft swirl away from the pointer
      const dx = p.x - mouse.x, dy = p.y - mouse.y;
      const d2 = dx * dx + dy * dy;
      if (d2 < 22000) {
        const f = (1 - d2 / 22000) * 1.4;
        vx += (dx / Math.sqrt(d2 + 1)) * f;
        vy += (dy / Math.sqrt(d2 + 1)) * f;
      }

      p.px = p.x; p.py = p.y;
      p.x += vx; p.y += vy;
      p.life--;

      if (p.x < -20 || p.x > W + 20 || p.y < -20 || p.y > H + 20 || p.life <= 0) {
        Object.assign(p, makeP(), { y: H + 10, x: Math.random() * W });
        p.px = p.x; p.py = p.y;
        continue;
      }

      ctx.strokeStyle = `rgba(${p.c[0]},${p.c[1]},${p.c[2]},${p.a})`;
      ctx.lineWidth = p.w;
      ctx.beginPath();
      ctx.moveTo(p.px, p.py);
      ctx.lineTo(p.x, p.y);
      ctx.stroke();
    }
    rafId = requestAnimationFrame(frame);
  }

  let rafId = null;
  let intersecting = true;

  function updatePlayState() {
    const shouldPlay = intersecting && !document.hidden;
    if (shouldPlay && rafId === null) {
      rafId = requestAnimationFrame(frame);
    } else if (!shouldPlay && rafId !== null) {
      cancelAnimationFrame(rafId);
      rafId = null;
    }
  }

  const io = new IntersectionObserver(([entry]) => {
    intersecting = entry.isIntersecting;
    updatePlayState();
  }, { threshold: 0 });
  io.observe(canvas);

  document.addEventListener('visibilitychange', updatePlayState, { passive: true });

  resize();
  addEventListener('resize', resize);

  if (reduced) {
    // static still: run a few hundred silent steps once, then stop
    for (let i = 0; i < 240; i++) {
      t = i * 16;
      ctx.fillStyle = 'rgba(11,29,24,0.05)';
      ctx.fillRect(0, 0, W, H);
      for (const p of particles) {
        const a = field(p.x, p.y);
        p.px = p.x; p.py = p.y;
        p.x += Math.cos(a) * p.v; p.y += Math.sin(a) * p.v - 0.22;
        ctx.strokeStyle = `rgba(${p.c[0]},${p.c[1]},${p.c[2]},${p.a})`;
        ctx.lineWidth = p.w;
        ctx.beginPath(); ctx.moveTo(p.px, p.py); ctx.lineTo(p.x, p.y); ctx.stroke();
      }
    }
  } else {
    updatePlayState();
  }
})();
