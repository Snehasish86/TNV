import { useEffect } from 'react';
import { getScroll } from './smooth.js';

const BIT = () => (Math.random() < 0.5 ? '0' : '1');
const isFine = () => typeof window !== 'undefined' && window.matchMedia('(hover: hover) and (pointer: fine)').matches;
const isReduced = () => typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/* =========================================================
   NOVA CURSOR: binary trail, velocity stretch, star morph,
   rotating label disc, sticky snap, click burst
   ========================================================= */
export function useNovaCursor() {
  useEffect(() => {
    if (!isFine() || isReduced()) return;
    const root = document.documentElement;
    root.classList.add('has-cursor');
    const dot = document.createElement('div'); dot.className = 'nc nc-dot';
    const ring = document.createElement('div'); ring.className = 'nc nc-ring';
    ring.innerHTML = '<div class="nc-body"><div class="nc-shape"></div>' +
      '<div class="nc-star"><svg viewBox="0 0 24 24"><path fill="currentColor" d="M12 0c.9 6.5 4.6 10.6 12 12-7.4 1.4-11.1 5.5-12 12-.9-6.5-4.6-10.6-12-12C7.4 10.6 11.1 6.5 12 0Z"/></svg></div>' +
      '<div class="nc-disc"><svg class="ring-txt" viewBox="0 0 100 100"><defs><path id="ncPath" d="M50,50 m-40,0 a40,40 0 1,1 80,0 a40,40 0 1,1 -80,0"/></defs><text textLength="246" lengthAdjust="spacing"><textPath href="#ncPath"></textPath></text></svg>' +
      '<svg class="arr" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg></div></div>';
    const cvs = document.createElement('canvas'); cvs.id = 'curTrail';
    document.body.append(cvs, ring, dot);
    const body = ring.querySelector('.nc-body'), shape = ring.querySelector('.nc-shape'), tp = ring.querySelector('textPath');
    const ctx = cvs.getContext('2d');
    let W = 0, H = 0;
    const size = () => { W = cvs.width = innerWidth; H = cvs.height = innerHeight; };
    size(); window.addEventListener('resize', size);

    const P = { x: innerWidth / 2, y: innerHeight / 2 }, R = { ...P }, D = { ...P }, last = { ...P };
    let shown = false, dirty = false, stick = null, parts = [], sx = 1, sy = 1, ang = 0, travel = 0, raf = 0;
    const emit = (x, y, n, burst) => {
      for (let i = 0; i < n; i++) {
        const a = burst ? Math.random() * Math.PI * 2 : -Math.PI / 2 + (Math.random() - 0.5) * 0.8;
        const sp = burst ? 1.5 + Math.random() * 3.5 : 0.3 + Math.random() * 0.6;
        parts.push({ x: x + (Math.random() - 0.5) * 6, y: y + (Math.random() - 0.5) * 6, vx: Math.cos(a) * sp, vy: Math.sin(a) * sp, life: 1, decay: burst ? 0.022 : 0.016 + Math.random() * 0.01, c: BIT(), s: burst ? 12 + Math.random() * 6 : 10 + Math.random() * 4 });
      }
      if (parts.length > 140) parts.splice(0, parts.length - 140);
    };
    const move = (e) => {
      P.x = e.clientX; P.y = e.clientY;
      if (!shown) { shown = true; Object.assign(R, P); Object.assign(D, P); Object.assign(last, P); }
      travel += Math.hypot(P.x - last.x, P.y - last.y); last.x = P.x; last.y = P.y;
      if (travel > 16 && !ring.classList.contains('is-label')) { travel = 0; emit(P.x, P.y, 1, false); }
    };
    const down = (e) => { ring.classList.add('is-down'); emit(e.clientX, e.clientY, 14, true); };
    const up = () => ring.classList.remove('is-down');
    const leave = () => { ring.classList.add('is-hidden'); dot.classList.add('is-hidden'); };
    const enter = () => { ring.classList.remove('is-hidden'); dot.classList.remove('is-hidden'); };
    const setState = (cls, label) => {
      ['is-link', 'is-label', 'is-big', 'is-bigo', 'is-stick'].forEach((c) => ring.classList.toggle(c, c === cls));
      dot.classList.toggle('dim', cls === 'is-label' || cls === 'is-big');
      if (label) { const unit = label.toUpperCase() + ' \u2726 '; tp.textContent = unit.repeat(Math.max(1, Math.round(246 / (unit.length * 8.6)))); }
    };
    const over = (e) => {
      const t = e.target;
      const inp = t.closest?.('input:not([type=radio]):not([type=checkbox]),textarea');
      ring.classList.toggle('is-hidden', !!inp); dot.classList.toggle('is-hidden', !!inp);
      root.classList.toggle('has-cursor', !inp);
      if (inp) return;
      const lab = t.closest('[data-cursor]'), st = t.closest('[data-stick]'), lnk = t.closest('a,button,summary,label,select');
      const big = t.closest('h1,h2,blockquote,.scrub');
      stick = null; body.style.removeProperty('--w'); body.style.removeProperty('--h'); body.style.removeProperty('--br');
      if (lab) setState('is-label', lab.getAttribute('data-cursor'));
      else if (st) {
        stick = st; setState('is-stick');
        const b = st.getBoundingClientRect(), cs = getComputedStyle(st);
        body.style.setProperty('--w', b.width + 12 + 'px'); body.style.setProperty('--h', b.height + 12 + 'px'); body.style.setProperty('--br', cs.borderRadius === '0px' ? '14px' : cs.borderRadius);
      } else if (lnk) setState('is-link');
      else if (big) setState(big.closest('.dark-sec') ? 'is-bigo' : 'is-big');
      else setState(null);
    };
    const loop = () => {
      let tx = P.x, ty = P.y;
      if (stick) { const b = stick.getBoundingClientRect(); tx = b.left + b.width / 2 + (P.x - (b.left + b.width / 2)) * 0.18; ty = b.top + b.height / 2 + (P.y - (b.top + b.height / 2)) * 0.18; }
      D.x += (P.x - D.x) * 0.6; D.y += (P.y - D.y) * 0.6;
      const px = R.x, py = R.y;
      R.x += (tx - R.x) * 0.16; R.y += (ty - R.y) * 0.16;
      const vx = R.x - px, vy = R.y - py, v = Math.min(Math.hypot(vx, vy), 40);
      const plain = !/is-(label|big|bigo|stick|link)/.test(ring.className);
      sx += ((plain ? 1 + v * 0.018 : 1) - sx) * 0.2; sy += ((plain ? 1 - v * 0.009 : 1) - sy) * 0.2;
      if (v > 0.4) ang = (Math.atan2(vy, vx) * 180) / Math.PI;
      shape.style.setProperty('--sx', sx.toFixed(3)); shape.style.setProperty('--sy', sy.toFixed(3)); shape.style.setProperty('--ang', ang.toFixed(1) + 'deg');
      ring.style.transform = `translate3d(${R.x}px,${R.y}px,0)`;
      dot.style.transform = `translate3d(${D.x}px,${D.y}px,0)`;
      if (parts.length || dirty) { ctx.clearRect(0, 0, W, H); dirty = parts.length > 0; }
      if (parts.length) {
        ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
        for (let i = parts.length - 1; i >= 0; i--) {
          const q = parts[i]; q.x += q.vx; q.y += q.vy; q.vx *= 0.96; q.vy *= 0.96; q.life -= q.decay;
          if (q.life <= 0) { parts.splice(i, 1); continue; }
          if (Math.random() < 0.06) q.c = BIT();
          ctx.globalAlpha = q.life; ctx.font = `500 ${q.s}px ui-monospace, Menlo, monospace`;
          ctx.fillStyle = q.life > 0.7 ? '#FEFAEF' : '#8FA7F2'; ctx.fillText(q.c, q.x, q.y);
        }
        ctx.globalAlpha = 1;
      }
      raf = requestAnimationFrame(loop);
    };
    window.addEventListener('pointermove', move, { passive: true });
    document.addEventListener('pointerdown', down); document.addEventListener('pointerup', up);
    document.addEventListener('pointerover', over);
    root.addEventListener('pointerleave', leave); root.addEventListener('pointerenter', enter);
    raf = requestAnimationFrame(loop);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', size); window.removeEventListener('pointermove', move);
      document.removeEventListener('pointerdown', down); document.removeEventListener('pointerup', up); document.removeEventListener('pointerover', over);
      root.removeEventListener('pointerleave', leave); root.removeEventListener('pointerenter', enter);
      ring.remove(); dot.remove(); cvs.remove(); root.classList.remove('has-cursor');
    };
  }, []);
}

/* =========================================================
   Global niceties: scroll progress, nav scramble, spotlight
   ========================================================= */
export function useGlobalFx() {
  useEffect(() => {
    const root = document.documentElement;
    const onScroll = () => { const max = root.scrollHeight - innerHeight; root.style.setProperty('--sp', max > 0 ? (scrollY / max).toFixed(4) : 0); };
    onScroll(); window.addEventListener('scroll', onScroll, { passive: true });
    const spot = (e) => { const c = e.target.closest?.('.spot'); if (!c) return; const r = c.getBoundingClientRect(); c.style.setProperty('--mx', e.clientX - r.left + 'px'); c.style.setProperty('--my', e.clientY - r.top + 'px'); };
    document.addEventListener('pointerover', spot);
    // binary scramble on nav and footer links
    const busy = new WeakSet();
    const scramble = (e) => {
      if (!isFine() || isReduced()) return;
      const a = e.target.closest?.('header nav a, footer li a'); if (!a || busy.has(a)) return;
      const node = Array.from(a.childNodes).find((n) => n.nodeType === 3 && n.textContent.trim()); if (!node) return;
      busy.add(a); const orig = node.textContent; let f = 0;
      const tick = () => {
        node.textContent = orig.split('').map((c, i) => (c === ' ' ? ' ' : i < f / 2 ? orig[i] : BIT())).join('');
        if (++f <= orig.length * 2) requestAnimationFrame(tick); else { node.textContent = orig; busy.delete(a); }
      };
      tick();
    };
    document.addEventListener('pointerover', scramble);
    return () => { window.removeEventListener('scroll', onScroll); document.removeEventListener('pointerover', spot); document.removeEventListener('pointerover', scramble); };
  }, []);
}

/* =========================================================
   GSAP scroll scenes, rebuilt on every route
   ========================================================= */
export function useMotion(pathname) {
  useEffect(() => {
    if (isReduced()) { document.querySelectorAll('.scrub .sw').forEach((s) => (s.style.opacity = 1)); return; }
    let alive = true, ctx, tick, cleanups = [];
    getScroll().then(({ gsap, ScrollTrigger }) => {
      if (!alive || !gsap) return;
      const $$ = (s, c = document) => Array.from(c.querySelectorAll(s));
      ctx = gsap.context(() => {
        // masked word reveals
        $$('[data-split]').forEach((el) => {
          const words = $$('.wi', el); if (!words.length) return;
          gsap.from(words, { yPercent: 115, rotate: 6, duration: 1.3, ease: 'expo.out', stagger: 0.045, scrollTrigger: { trigger: el, start: 'top 90%' } });
        });
        // statement: words light up while scrolling
        $$('.scrub').forEach((el) => gsap.to($$('.sw', el), { opacity: 1, stagger: 0.1, ease: 'none', scrollTrigger: { trigger: el, start: 'top 80%', end: 'bottom 45%', scrub: true } }));
        // counters
        $$('[data-count]').forEach((el) => {
          const to = +el.dataset.count, suf = el.dataset.suffix || '', o = { v: 0 };
          ScrollTrigger.create({ trigger: el, start: 'top 92%', once: true, onEnter: () => gsap.to(o, { v: to, duration: 2.2, ease: 'expo.out', onUpdate: () => (el.textContent = Math.round(o.v) + suf) }) });
        });
        // hero parallax
        $$('[data-par]').forEach((el) => gsap.to(el, { yPercent: -16, opacity: 0.25, ease: 'none', scrollTrigger: { trigger: el.closest('section'), start: 'top top', end: 'bottom top', scrub: true } }));
        // stacking service cards (dim layer, never a CSS filter)
        const cards = $$('.scard');
        cards.forEach((c, i) => {
          if (i === cards.length - 1) return;
          gsap.fromTo(c, { scale: 1, '--dim': 0 }, { scale: 0.92, '--dim': 0.55, ease: 'none', scrollTrigger: { trigger: cards[i + 1], start: 'top bottom', end: 'top 25%', scrub: true } });
        });
        // process rail
        $$('[data-steps]').forEach((steps) => {
          const items = $$('[data-step]', steps), rail = steps.querySelector('.rail-fill');
          ScrollTrigger.create({ trigger: steps, start: 'top 75%', end: 'bottom 55%', scrub: true, onUpdate: (s) => { rail?.style.setProperty('--p', s.progress.toFixed(3)); items.forEach((it, i) => it.classList.toggle('lit', s.progress >= i / items.length + 0.02)); } });
        });
        // CTA grows in
        $$('[data-cta]').forEach((cta) => gsap.fromTo(cta, { scale: 0.88 }, { scale: 1, ease: 'none', scrollTrigger: { trigger: cta, start: 'top bottom', end: 'top 40%', scrub: true } }));
        // footer wordmark rises
        $$('[data-word]').forEach((w) => gsap.fromTo(w, { yPercent: 60, opacity: 0 }, { yPercent: 0, opacity: 1, ease: 'none', scrollTrigger: { trigger: w, start: 'top bottom', end: 'bottom bottom', scrub: true } }));

        gsap.matchMedia().add('(min-width: 901px)', () => {
          // horizontal work carousel
          const sec = document.querySelector('[data-hwork]');
          if (sec) {
            const track = sec.querySelector('.hwork__track'), cardsH = $$('.hcard', sec), num = sec.querySelector('[data-wnum]');
            const dist = () => track.scrollWidth - innerWidth;
            const tween = gsap.to(track, {
              x: () => -dist(), ease: 'none',
              scrollTrigger: { trigger: sec, pin: sec.querySelector('.hwork__pin'), anticipatePin: 1, scrub: true, start: 'top top', end: () => '+=' + dist(), invalidateOnRefresh: true,
                onUpdate: (s) => { sec.style.setProperty('--wp', s.progress.toFixed(3)); const n = Math.min(cardsH.length, Math.max(1, Math.round(s.progress * (cardsH.length - 1)) + 1)); if (num) num.textContent = String(n).padStart(2, '0'); } }
            });
            cardsH.forEach((p) => {
              const mono = p.querySelector('.mono');
              if (mono) gsap.fromTo(mono, { xPercent: 30 }, { xPercent: -30, ease: 'none', scrollTrigger: { trigger: p, containerAnimation: tween, start: 'left right', end: 'right left', scrub: true } });
              gsap.fromTo(p, { scale: 0.9, opacity: 0.6 }, { scale: 1, opacity: 1, ease: 'power2.out', scrollTrigger: { trigger: p, containerAnimation: tween, start: 'left right', end: 'left 45%', scrub: true } });
            });
          }
          // phones fan out
          const fan = document.querySelector('.fan');
          if (fan) gsap.fromTo(fan, { '--fan': 0 }, { '--fan': 1, ease: 'power2.out', scrollTrigger: { trigger: fan, start: 'top 85%', end: 'center 55%', scrub: true } });
        });

        // velocity marquee
        const rows = $$('[data-vm]');
        if (rows.length) {
          const x = rows.map(() => 0); let vel = 0, skew = 0, lastY = scrollY;
          tick = () => {
            vel += (scrollY - lastY - vel) * 0.2; lastY = scrollY;
            skew += (-vel * 0.35 - skew) * 0.1;
            rows.forEach((r, i) => {
              const dir = +r.dataset.vm, half = r.scrollWidth / 2 || 1;
              x[i] -= (1.1 + Math.abs(vel) * 0.35) * dir;
              if (x[i] <= -half) x[i] += half; if (x[i] > 0) x[i] -= half;
              r.style.transform = `translate3d(${x[i]}px,0,0) skewX(${Math.max(-12, Math.min(12, skew))}deg)`;
            });
          };
          gsap.ticker.add(tick);
        }
      });

      // magnetic buttons + card tilt + fan tilt (pointer only)
      if (isFine()) {
        $$('.btn, [data-magnetic]').forEach((el) => {
          const xTo = gsap.quickTo(el, 'x', { duration: 0.8, ease: 'elastic.out(1,.4)' }), yTo = gsap.quickTo(el, 'y', { duration: 0.8, ease: 'elastic.out(1,.4)' });
          const mv = (e) => { const b = el.getBoundingClientRect(); xTo((e.clientX - b.left - b.width / 2) * 0.3); yTo((e.clientY - b.top - b.height / 2) * 0.4); };
          const lv = () => { xTo(0); yTo(0); };
          el.addEventListener('pointermove', mv); el.addEventListener('pointerleave', lv);
          cleanups.push(() => { el.removeEventListener('pointermove', mv); el.removeEventListener('pointerleave', lv); gsap.set(el, { clearProps: 'transform' }); });
        });
        $$('[data-tilt]').forEach((f) => {
          const mv = (e) => { const r = f.getBoundingClientRect(); f.style.transform = `perspective(1400px) rotateY(${(((e.clientX - r.left) / r.width - 0.5) * 8).toFixed(2)}deg) rotateX(${((-(e.clientY - r.top) / r.height + 0.5) * 8).toFixed(2)}deg)`; };
          const lv = () => { f.style.transform = ''; };
          f.addEventListener('pointermove', mv); f.addEventListener('pointerleave', lv);
          cleanups.push(() => { f.removeEventListener('pointermove', mv); f.removeEventListener('pointerleave', lv); });
        });
        const stage = document.querySelector('.fan'), inner = stage?.querySelector('.fan__inner');
        if (stage && inner) {
          const mv = (e) => { const r = stage.getBoundingClientRect(); inner.style.setProperty('--ty', (((e.clientX - r.left) / r.width - 0.5) * 14).toFixed(2) + 'deg'); inner.style.setProperty('--tx', (6 - ((e.clientY - r.top) / r.height - 0.5) * 10).toFixed(2) + 'deg'); };
          const lv = () => { inner.style.setProperty('--ty', '0deg'); inner.style.setProperty('--tx', '6deg'); };
          stage.addEventListener('pointermove', mv); stage.addEventListener('pointerleave', lv);
          cleanups.push(() => { stage.removeEventListener('pointermove', mv); stage.removeEventListener('pointerleave', lv); });
        }
      }
      const refresh = () => ScrollTrigger.refresh();
      const t1 = setTimeout(refresh, 250), t2 = setTimeout(refresh, 1200);
      window.addEventListener('load', refresh);
      cleanups.push(() => { clearTimeout(t1); clearTimeout(t2); window.removeEventListener('load', refresh); if (tick) gsap.ticker.remove(tick); });
    });
    return () => { alive = false; cleanups.forEach((f) => f()); ctx?.revert(); };
  }, [pathname]);
}

/* =========================================================
   Hero helpers
   ========================================================= */
export function runDecode(el) {
  if (!el || isReduced()) return () => {};
  const cells = Array.from(el.querySelectorAll('.c'));
  cells.forEach((s) => { s.textContent = BIT(); s.classList.add('bit'); s.style.opacity = 0; });
  const t0 = performance.now() + 250; let raf = 0;
  const step = (now) => {
    let done = 0;
    cells.forEach((s, i) => {
      const show = t0 + i * 22, at = t0 + 300 + i * 45;
      if (now >= show) s.style.opacity = 1;
      if (now >= at) { if (s.classList.contains('bit')) { s.textContent = s.dataset.t; s.classList.remove('bit'); } done++; }
      else if (now >= show && Math.random() < 0.4) s.textContent = BIT();
    });
    if (done < cells.length) raf = requestAnimationFrame(step);
  };
  raf = requestAnimationFrame(step);
  return () => { cancelAnimationFrame(raf); cells.forEach((s) => { s.textContent = s.dataset.t; s.classList.remove('bit'); s.style.opacity = 1; }); };
}

export function runConsole(box, countEl, items) {
  if (!box) return () => {};
  let idx = 0, shipped = 0, alive = true; const timers = [];
  const later = (fn, ms) => timers.push(setTimeout(() => alive && fn(), ms));
  const line = (html) => { const d = document.createElement('div'); d.className = 'truncate'; d.innerHTML = html; box.appendChild(d); while (box.children.length > 4) box.removeChild(box.firstChild); return d; };
  const run = () => {
    const [name, where] = items[idx % items.length];
    const d = line('<span style="color:#8FA7F2;margin-right:8px">$</span><span class="t"></span><span class="caret"></span>');
    const t = d.querySelector('.t'), txt = `twenova ship "${name}"`; let i = 0;
    const type = () => {
      t.textContent = txt.slice(0, ++i);
      if (i < txt.length) later(type, 24 + Math.random() * 30);
      else {
        d.querySelector('.caret')?.remove();
        later(() => { line('<span style="color:#7CF0B0;margin-right:8px">✓</span><span style="color:#8D9BC8">build, test, SEO</span>');
          later(() => { line(`<span style="color:#7CF0B0;margin-right:8px">✓</span>live → ${where}`); if (shipped < items.length && countEl) countEl.textContent = ++shipped; idx++; later(run, 900); }, 350); }, 250);
      }
    };
    type();
  };
  later(run, 900);
  return () => { alive = false; timers.forEach(clearTimeout); box.innerHTML = ''; };
}
