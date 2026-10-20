import { useEffect, useRef } from 'react';

/** The original tweNova hero effect: rising 0/1 columns that glow near the pointer. */
export default function BinaryRain({ opacity = 0.7, className = '' }) {
  const ref = useRef(null);
  useEffect(() => {
    const canvas = ref.current; if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const FONT = 14, CH = ['0', '1'];
    let drops = [], frame = 0, w = 0, h = 0, running = false, last = 0, raf = 0;
    const mouse = { x: -9999, y: -9999 };
    const host = canvas.parentElement;

    function resize() {
      const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
      w = canvas.offsetWidth; h = canvas.offsetHeight;
      canvas.width = w * dpr; canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.fillStyle = '#061340'; ctx.fillRect(0, 0, w, h);
      const cols = Math.floor(w / FONT);
      if (cols !== drops.length) { drops = []; for (let i = 0; i < cols; i++) drops.push(Math.floor(Math.random() * (h / FONT))); }
    }
    function draw() {
      frame++;
      ctx.fillStyle = 'rgba(6, 19, 64, 0.06)'; ctx.fillRect(0, 0, w, h);
      ctx.font = FONT + 'px "JetBrains Mono", ui-monospace, monospace';
      for (let i = 0; i < drops.length; i++) {
        const c = CH[Math.random() < 0.5 ? 0 : 1], x = i * FONT, y = h - drops[i] * FONT;
        const dx = x - mouse.x, dy = y - mouse.y, near = dx * dx + dy * dy < 26000;
        ctx.fillStyle = near ? '#FFFFFF' : '#FEFAEF'; ctx.fillText(c, x, y);
        const g = ctx.createLinearGradient(x, y, x, y + FONT * 6);
        g.addColorStop(0, near ? 'rgba(254,250,239,1)' : 'rgba(143,167,242,1)'); g.addColorStop(1, 'rgba(18,52,152,0)');
        ctx.fillStyle = g; ctx.fillText(c, x, y + FONT);
        if (frame % 3 === 0) drops[i]++;
        if (drops[i] * FONT > h + FONT * 20 && Math.random() > 0.97) drops[i] = 0;
      }
    }
    const loop = (t) => { if (!running) return; if (t - last > 80) { draw(); last = t; } raf = requestAnimationFrame(loop); };
    const start = () => { if (!running && !reduce) { running = true; raf = requestAnimationFrame(loop); } };
    const stop = () => { running = false; cancelAnimationFrame(raf); };

    resize();
    if (reduce) { for (let k = 0; k < 60; k++) draw(); return; }
    let rt; const onResize = () => { clearTimeout(rt); rt = setTimeout(resize, 150); };
    const onMove = (e) => { const r = canvas.getBoundingClientRect(); mouse.x = e.clientX - r.left; mouse.y = e.clientY - r.top; };
    const onLeave = () => { mouse.x = mouse.y = -9999; };
    const onVis = () => (document.hidden ? stop() : start());
    window.addEventListener('resize', onResize);
    host.addEventListener('pointermove', onMove); host.addEventListener('pointerleave', onLeave);
    document.addEventListener('visibilitychange', onVis);
    const io = new IntersectionObserver((e) => (e[0].isIntersecting ? start() : stop()));
    io.observe(canvas);
    return () => { stop(); io.disconnect(); clearTimeout(rt); window.removeEventListener('resize', onResize); host.removeEventListener('pointermove', onMove); host.removeEventListener('pointerleave', onLeave); document.removeEventListener('visibilitychange', onVis); };
  }, []);
  return <canvas ref={ref} aria-hidden="true" className={`binary-rain ${className}`} style={{ opacity }} />;
}
