/* tweNova v2 — motion engine (GSAP + ScrollTrigger + Lenis, graceful without them) */
(function () {
  'use strict';
  var root = document.documentElement;
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var fine = window.matchMedia('(hover:hover) and (pointer:fine)').matches;
  var gsap = window.gsap, ST = window.ScrollTrigger;
  var G = !!(gsap && ST) && !reduce;
  var PREVIEW = root.hasAttribute('data-preview');
  root.classList.add('js', G ? 'gs' : 'no-gs');
  if (G) gsap.registerPlugin(ST);
  var $ = function (s, c) { return (c || document).querySelector(s); };
  var $$ = function (s, c) { return Array.prototype.slice.call((c || document).querySelectorAll(s)); };
  var BIT = function () { return Math.random() < .5 ? '0' : '1'; };

  /* ================= Smooth scroll ================= */
  var lenis = null;
  if (G && window.Lenis) {
    lenis = new window.Lenis({ lerp: 0.085, smoothWheel: true, wheelMultiplier: 1 });
    lenis.on('scroll', ST.update);
    gsap.ticker.add(function (t) { lenis.raf(t * 1000); });
    gsap.ticker.lagSmoothing(0);
  }
  function anchorY(el) {
    var cs = getComputedStyle(el);
    if (cs.position === 'sticky') {
      var prev = el.style.position; el.style.position = 'relative';
      var y = el.getBoundingClientRect().top + window.scrollY; el.style.position = prev;
      return Math.max(0, y - (parseFloat(cs.top) || 0));
    }
    return Math.max(0, el.getBoundingClientRect().top + window.scrollY);
  }
  function scrollTo(target) {
    if (target && target.nodeType === 1) target = anchorY(target);
    if (lenis) lenis.scrollTo(target, { offset: -70, duration: 1.6, easing: function (t) { return t === 1 ? 1 : 1 - Math.pow(2, -10 * t); } });
    else (typeof target === 'number' ? window.scrollTo({ top: target, behavior: reduce ? 'auto' : 'smooth' }) : target.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth' }));
  }
  $$('a[href^="#"]').forEach(function (a) {
    a.addEventListener('click', function (e) {
      var id = a.getAttribute('href'); if (id.length < 2) return;
      var t = $(id); if (!t) return;
      e.preventDefault(); closeMenu(); scrollTo(id === '#main' ? 0 : t);
      if (history.replaceState) history.replaceState(null, '', id === '#main' ? location.pathname : id);
    });
  });

  /* ================= Binary rain (original effect, kept) ================= */
  (function binaryRain() {
    var canvas = document.getElementById('binaryCanvas'); if (!canvas) return;
    var ctx = canvas.getContext('2d'), FONT = 14, CH = ['0', '1'];
    var drops = [], frame = 0, w = 0, h = 0, running = false, last = 0, mouse = { x: -9999, y: -9999 };
    function resize() {
      var dpr = Math.min(window.devicePixelRatio || 1, 1.5);
      w = canvas.offsetWidth; h = canvas.offsetHeight; canvas.width = w * dpr; canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0); ctx.fillStyle = '#061340'; ctx.fillRect(0, 0, w, h);
      var cols = Math.floor(w / FONT);
      if (cols !== drops.length) { drops = []; for (var i = 0; i < cols; i++) drops.push(Math.floor(Math.random() * (h / FONT))); }
    }
    function draw() {
      frame++;
      ctx.fillStyle = 'rgba(6, 19, 64, 0.06)'; ctx.fillRect(0, 0, w, h);
      ctx.font = FONT + 'px "JetBrains Mono", monospace';
      for (var i = 0; i < drops.length; i++) {
        var c = CH[Math.random() < .5 ? 0 : 1], x = i * FONT, y = h - drops[i] * FONT;
        var dx = x - mouse.x, dy = y - mouse.y, near = dx * dx + dy * dy < 26000;
        ctx.fillStyle = near ? '#FFFFFF' : '#FEFAEF'; ctx.fillText(c, x, y);
        ctx.fillStyle = near ? 'rgba(254,250,239,.85)' : 'rgba(143,167,242,.55)'; ctx.fillText(c, x, y + FONT);
        if (frame % 3 === 0) drops[i]++;
        if (drops[i] * FONT > h + FONT * 20 && Math.random() > .97) drops[i] = 0;
      }
    }
    function loop(t) { if (!running) return; if (t - last > 80) { draw(); last = t; } requestAnimationFrame(loop); }
    function start() { if (!running && !reduce) { running = true; requestAnimationFrame(loop); } }
    function stop() { running = false; }
    resize();
    if (reduce) { for (var k = 0; k < 60; k++) draw(); return; }
    var rt; window.addEventListener('resize', function () { clearTimeout(rt); rt = setTimeout(resize, 150); });
    canvas.parentElement.addEventListener('pointermove', function (e) { var r = canvas.getBoundingClientRect(); mouse.x = e.clientX - r.left; mouse.y = e.clientY - r.top; });
    canvas.parentElement.addEventListener('pointerleave', function () { mouse.x = mouse.y = -9999; });
    if ('IntersectionObserver' in window) new IntersectionObserver(function (e) { e[0].isIntersecting ? start() : stop(); }).observe(canvas); else start();
    document.addEventListener('visibilitychange', function () { document.hidden ? stop() : start(); });
  })();

  /* ================= Headline decode ================= */
  var decodeCells = [];
  (function prepDecode() {
    var el = $('[data-decode]'); if (!el) return;
    $$('.w', el).forEach(function (wd) {
      var txt = wd.textContent; wd.textContent = ''; wd.setAttribute('aria-hidden', 'true');
      txt.split('').forEach(function (c) { var s = document.createElement('span'); s.className = 'c'; s.dataset.t = c; s.textContent = c; wd.appendChild(s); decodeCells.push(s); });
    });
    if (!reduce) decodeCells.forEach(function (s) { s.textContent = BIT(); s.classList.add('bit'); s.style.opacity = G ? 0 : 1; });
  })();
  function runDecode() {
    if (reduce || !decodeCells.length) return;
    var t0 = performance.now();
    (function tick(now) {
      var done = 0;
      decodeCells.forEach(function (s, i) {
        var show = t0 + i * 22, at = t0 + 300 + i * 45;
        if (now >= show) s.style.opacity = 1;
        if (now >= at) { if (s.classList.contains('bit')) { s.textContent = s.dataset.t; s.classList.remove('bit'); } done++; }
        else if (now >= show && Math.random() < .4) s.textContent = BIT();
      });
      if (done < decodeCells.length) requestAnimationFrame(tick);
    })(t0);
  }

  /* ================= Console ================= */
  function runConsole() {
    var box = document.getElementById('console'), cnt = document.getElementById('shipCount'); if (!box) return;
    var items = [['Admission Points', 'admissionpoints.com'], ['Deblakshmi Healthcare', 'App Store'], ['Kodlyx', 'kodlyx.com'], ['ERP School', 'Google Play'], ['ClipUp Media', 'clipupmedia.com'], ['PharmSearch', 'Google Play'], ['Dutch Travel Group', 'dutchtravelgroup.eu'], ['Smit Sir', 'Google Play'], ['EasyTrip', 'easytriptourandtravels.com'], ['Sudoku', 'Google Play'], ['Coalfield Drug House', 'coalfielddrughouse.com'], ['Royal City', 'royalcitydgp.com']];
    var idx = 0, shipped = 0;
    function line(h) { var d = document.createElement('div'); d.className = 'console__line'; d.innerHTML = h; box.appendChild(d); while (box.children.length > 4) box.removeChild(box.firstChild); return d; }
    (function run() {
      var s = items[idx % items.length];
      var d = line('<span class="p">$</span><span class="t"></span><span class="caret"></span>'), t = $('.t', d), txt = 'twenova ship "' + s[0] + '"', i = 0;
      (function step() {
        t.textContent = txt.slice(0, ++i);
        if (i < txt.length) setTimeout(step, 24 + Math.random() * 30);
        else {
          d.removeChild($('.caret', d));
          setTimeout(function () {
            line('<span class="ok">✓</span><span class="dim">build, test, SEO</span>');
            setTimeout(function () {
              line('<span class="ok">✓</span>live → ' + s[1]);
              if (shipped < items.length) cnt.textContent = ++shipped;
              idx++; setTimeout(run, 900);
            }, 350);
          }, 250);
        }
      })();
    })();
  }

  /* ================= Preloader → intro ================= */
  function intro() {
    try { sessionStorage.removeItem('tnv-nav'); } catch (e) {}
    if (root.classList.contains('is-entering')) setTimeout(function () { root.classList.remove('is-entering'); }, 1300);
    runDecode(); runConsole();
    if (window.TNV3D) window.TNV3D.intro();
    if (G) gsap.to('.hero-in', { opacity: 1, y: 0, duration: 1.3, ease: 'expo.out', stagger: .12, delay: .5 });
  }
  (function preloader() {
    var L = $('.loader');
    var seen = false; try { seen = sessionStorage.getItem('tnv-seen') === '1'; sessionStorage.setItem('tnv-seen', '1'); } catch (e) {}
    if (!L || !G || seen) { if (L) L.remove(); intro(); return; }
    if (lenis) lenis.stop();
    var num = $('#lnum'), bits = $('#lbits'), o = { v: 0 };
    var bt = setInterval(function () { var s = ''; for (var i = 0; i < 8; i++) s += BIT(); bits.textContent = s; }, 60);
    var tl = gsap.timeline({ onComplete: function () { L.remove(); if (lenis) lenis.start(); } });
    tl.to(o, { v: 100, duration: 1.5, ease: 'power3.inOut', onUpdate: function () { num.textContent = Math.round(o.v); L.style.setProperty('--lp', o.v + '%'); } })
      .add(function () { clearInterval(bt); bits.textContent = 'READY'; })
      .to('.loader__in', { y: -40, opacity: 0, duration: .6, ease: 'power3.in' }, '+=.15')
      .to('.loader__panel i', { scaleY: 0, duration: 1, ease: 'expo.inOut', stagger: { each: .07, from: 'center' } }, '-=.2')
      .add(intro, '-=.65');
  })();

  /* ================= Header ================= */
  var hdr = $('#hdr'), lastY = 0, totop = $('.totop');
  function onScroll(y) {
    var max = root.scrollHeight - window.innerHeight, p = max > 0 ? y / max : 0;
    root.style.setProperty('--sp', p.toFixed(4));
    if (hdr) { hdr.classList.toggle('is-solid', y > 40); hdr.classList.toggle('is-hidden', y > 600 && y > lastY + 2 && !document.body.classList.contains('menu-open')); if (y < lastY - 2) hdr.classList.remove('is-hidden'); }
    if (totop) totop.classList.toggle('show', y > 900);
    lastY = y;
  }
  if (lenis) lenis.on('scroll', function (e) { onScroll(e.scroll); });
  else window.addEventListener('scroll', function () { onScroll(window.scrollY); }, { passive: true });
  onScroll(window.scrollY);

  /* ================= Mobile menu ================= */
  var burger = $('.burger');
  function closeMenu() { if (document.body.classList.contains('menu-open')) toggleMenu(); }
  function toggleMenu() {
    var open = document.body.classList.toggle('menu-open');
    burger.setAttribute('aria-expanded', open); burger.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    $$('.mnav a').forEach(function (a, i) { a.style.transitionDelay = open ? (0.25 + i * 0.05) + 's' : '0s'; });
    if (lenis) open ? lenis.stop() : lenis.start();
  }
  if (burger) {
    burger.addEventListener('click', toggleMenu);
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape') closeMenu(); });
  }

  /* ================= NOVA CURSOR ================= */
  if (fine && !reduce) (function novaCursor() {
    root.classList.add('has-cursor');
    var NS = 'http://www.w3.org/2000/svg';
    var dot = document.createElement('div'); dot.className = 'nc nc-dot';
    var ring = document.createElement('div'); ring.className = 'nc nc-ring';
    ring.innerHTML = '<div class="nc-body"><div class="nc-shape"></div>' +
      '<div class="nc-star"><svg viewBox="0 0 24 24" width="34" height="34"><path fill="currentColor" d="M12 0c.9 6.5 4.6 10.6 12 12-7.4 1.4-11.1 5.5-12 12-.9-6.5-4.6-10.6-12-12C7.4 10.6 11.1 6.5 12 0Z"/></svg></div>' +
      '<div class="nc-disc"><svg class="ring-txt" viewBox="0 0 100 100"><defs><path id="ncPath" d="M50,50 m-40,0 a40,40 0 1,1 80,0 a40,40 0 1,1 -80,0"/></defs><text><textPath href="#ncPath"></textPath></text></svg>' +
      '<svg class="arr" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg></div></div>';
    var cvs = document.createElement('canvas'); cvs.id = 'curTrail';
    document.body.append(cvs, ring, dot);
    var body = ring.querySelector('.nc-body'), shape = ring.querySelector('.nc-shape'), tp = ring.querySelector('textPath');
    var ctx = cvs.getContext('2d'), W = 0, H = 0;
    function size() { W = cvs.width = innerWidth; H = cvs.height = innerHeight; }
    size(); window.addEventListener('resize', size);

    var P = { x: innerWidth / 2, y: innerHeight / 2 }, R = { x: P.x, y: P.y }, D = { x: P.x, y: P.y }, last = { x: P.x, y: P.y };
    var shown = false, dirty = false, stick = null, parts = [], sx = 1, sy = 1, ang = 0, travel = 0, dirty = false;
    function emit(x, y, n, burst) {
      for (var i = 0; i < n; i++) {
        var a = burst ? Math.random() * Math.PI * 2 : -Math.PI / 2 + (Math.random() - .5) * .8;
        var sp = burst ? 1.5 + Math.random() * 3.5 : .3 + Math.random() * .6;
        parts.push({ x: x + (Math.random() - .5) * 6, y: y + (Math.random() - .5) * 6, vx: Math.cos(a) * sp, vy: Math.sin(a) * sp, life: 1, decay: burst ? .022 : .016 + Math.random() * .01, c: BIT(), s: burst ? 12 + Math.random() * 6 : 10 + Math.random() * 4 });
      }
      if (parts.length > 140) parts.splice(0, parts.length - 140);
    }
    window.addEventListener('pointermove', function (e) {
      P.x = e.clientX; P.y = e.clientY;
      if (!shown) { shown = true; R.x = D.x = last.x = P.x; R.y = D.y = last.y = P.y; }
      travel += Math.hypot(P.x - last.x, P.y - last.y); last.x = P.x; last.y = P.y;
      if (travel > 16 && !ring.classList.contains('is-label') && !ring.classList.contains('is-text')) { travel = 0; emit(P.x, P.y, 1, false); }
    }, { passive: true });
    document.addEventListener('pointerdown', function (e) { ring.classList.add('is-down'); emit(e.clientX, e.clientY, 14, true); });
    document.addEventListener('pointerup', function () { ring.classList.remove('is-down'); });
    root.addEventListener('pointerleave', function () { ring.classList.add('is-hidden'); dot.classList.add('is-hidden'); });
    root.addEventListener('pointerenter', function () { ring.classList.remove('is-hidden'); dot.classList.remove('is-hidden'); });

    function setState(cls, label) {
      ['is-link', 'is-label', 'is-big', 'is-bigo', 'is-stick', 'is-text'].forEach(function (c) { ring.classList.toggle(c, c === cls); });
      dot.classList.toggle('dim', cls === 'is-label' || cls === 'is-big');
      if (label) {
        var unit = label.toUpperCase() + ' \u2726 ', reps = Math.max(1, Math.round(246 / (unit.length * 8.6)));
        tp.textContent = unit.repeat(reps);
        tp.parentNode.setAttribute('textLength', '246'); tp.parentNode.setAttribute('lengthAdjust', 'spacing');
      }
    }
    document.addEventListener('pointerover', function (e) {
      var t = e.target;
      var inp = t.closest('input:not([type=radio]):not([type=checkbox]),textarea');
      ring.classList.toggle('is-hidden', !!inp); dot.classList.toggle('is-hidden', !!inp);
      root.classList.toggle('has-cursor', !inp);
      if (inp) return;
      var dark = !!t.closest('.on-dark, .page-curtain, .mnav');
      ring.classList.toggle('on-light', !dark); dot.classList.toggle('on-light', !dark);
      var lab = t.closest('[data-cursor]'), st = t.closest('[data-stick]'), lnk = t.closest('a,button,summary,label,[role="tab"],select,.chip');
      var big = t.closest('h1,h2,.statement,.bigquote');
      var bigDark = big && big.closest('.on-dark');
      stick = null; body.style.removeProperty('--w'); body.style.removeProperty('--h'); body.style.removeProperty('--br');
      if (lab) setState('is-label', lab.getAttribute('data-cursor'));
      else if (st) {
        stick = st; setState('is-stick');
        var b = st.getBoundingClientRect(), cs = getComputedStyle(st);
        body.style.setProperty('--w', (b.width + 12) + 'px'); body.style.setProperty('--h', (b.height + 12) + 'px'); body.style.setProperty('--br', cs.borderRadius === '0px' ? '14px' : cs.borderRadius);
      }
      else if (lnk) setState('is-link');
      else if (big) setState(bigDark ? 'is-bigo' : 'is-big');
      else setState(null);
    });

    (function loop() {
      var tx = P.x, ty = P.y;
      if (stick) { var b = stick.getBoundingClientRect(); tx = b.left + b.width / 2 + (P.x - (b.left + b.width / 2)) * .18; ty = b.top + b.height / 2 + (P.y - (b.top + b.height / 2)) * .18; }
      D.x += (P.x - D.x) * .6; D.y += (P.y - D.y) * .6;
      var px = R.x, py = R.y;
      R.x += (tx - R.x) * .16; R.y += (ty - R.y) * .16;
      var vx = R.x - px, vy = R.y - py, v = Math.min(Math.hypot(vx, vy), 40);
      var plain = !ring.className.match(/is-(label|big|bigo|stick|text|link)/);
      var tsx = plain ? 1 + v * .018 : 1, tsy = plain ? 1 - v * .009 : 1;
      sx += (tsx - sx) * .2; sy += (tsy - sy) * .2;
      if (v > .4) ang = Math.atan2(vy, vx) * 180 / Math.PI;
      shape.style.setProperty('--sx', sx.toFixed(3)); shape.style.setProperty('--sy', sy.toFixed(3)); shape.style.setProperty('--ang', ang.toFixed(1) + 'deg');
      ring.style.transform = 'translate3d(' + R.x + 'px,' + R.y + 'px,0)';
      dot.style.transform = 'translate3d(' + D.x + 'px,' + D.y + 'px,0)';
      // binary trail
      if (parts.length || dirty) { ctx.clearRect(0, 0, W, H); dirty = parts.length > 0; }
      if (parts.length) {
        ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
        for (var i = parts.length - 1; i >= 0; i--) {
          var q = parts[i]; q.x += q.vx; q.y += q.vy; q.vx *= .96; q.vy *= .96; q.life -= q.decay;
          if (q.life <= 0) { parts.splice(i, 1); continue; }
          if (Math.random() < .06) q.c = BIT();
          ctx.globalAlpha = q.life;
          ctx.font = '500 ' + q.s + 'px "JetBrains Mono", monospace';
          ctx.fillStyle = ring.classList.contains('on-light') ? (q.life > .7 ? '#123498' : '#8FA7F2') : (q.life > .7 ? '#FEFAEF' : '#8FA7F2');
          ctx.fillText(q.c, q.x, q.y);
        }
        ctx.globalAlpha = 1;
      }
      requestAnimationFrame(loop);
    })();
  })();

  /* ================= Magnetic ================= */
  if (fine && G) {
    $$('[data-magnetic]').forEach(function (el) {
      var xTo = gsap.quickTo(el, 'x', { duration: .8, ease: 'elastic.out(1,.4)' }), yTo = gsap.quickTo(el, 'y', { duration: .8, ease: 'elastic.out(1,.4)' });
      el.addEventListener('pointermove', function (e) { var b = el.getBoundingClientRect(); xTo((e.clientX - b.left - b.width / 2) * .35); yTo((e.clientY - b.top - b.height / 2) * .45); });
      el.addEventListener('pointerleave', function () { xTo(0); yTo(0); });
    });
  }

  /* ================= Nav text scramble ================= */
  if (fine && !reduce) {
    $$('.nav__link, .ftr li a').forEach(function (a) {
      var node = Array.prototype.find.call(a.childNodes, function (n) { return n.nodeType === 3 && n.textContent.trim(); });
      if (!node) return; var orig = node.textContent, busy = false;
      a.addEventListener('pointerenter', function () {
        if (busy) return; busy = true; var f = 0, len = orig.length;
        (function tick() {
          node.textContent = orig.split('').map(function (c, i) { return c === ' ' ? ' ' : i < f / 2 ? orig[i] : BIT(); }).join('');
          if (++f <= len * 2) requestAnimationFrame(tick); else { node.textContent = orig; busy = false; }
        })();
      });
    });
  }

  /* ================= Split headings into masked words ================= */
  function splitWords(el) {
    var walk = function (node) {
      Array.prototype.slice.call(node.childNodes).forEach(function (n) {
        if (n.nodeType === 3) {
          var frag = document.createDocumentFragment();
          n.textContent.split(/(\s+)/).forEach(function (w) {
            if (!w) return;
            if (/^\s+$/.test(w)) { frag.appendChild(document.createTextNode(' ')); return; }
            var m = document.createElement('span'); m.className = 'wm'; var i = document.createElement('span'); i.className = 'wi'; i.textContent = w; m.appendChild(i); frag.appendChild(m);
          });
          n.parentNode.replaceChild(frag, n);
        } else if (n.nodeType === 1 && !n.matches('svg,em')) walk(n);
      });
    };
    walk(el);
  }

  /* ================= Counters ================= */
  function countUp(el) {
    var to = +el.dataset.count, suf = el.dataset.suffix || '';
    if (!G) { el.textContent = to + suf; return; }
    var o = { v: 0 };
    gsap.to(o, { v: to, duration: 2.2, ease: 'expo.out', onUpdate: function () { el.textContent = Math.round(o.v) + suf; } });
  }

  /* ================= Without GSAP: simple observer ================= */
  if (!G) {
    $$('[data-count]').forEach(countUp);
    $$('.statement .sw').forEach(function (s) { s.style.opacity = 1; });
  }

  /* ================= GSAP scenes ================= */
  if (G) {
    // masked word reveals
    $$('[data-split]').forEach(function (el) {
      splitWords(el);
      gsap.from($$('.wi', el), { yPercent: 115, rotate: 6, duration: 1.3, ease: 'expo.out', stagger: .045, scrollTrigger: { trigger: el, start: 'top 88%' } });
    });
    // generic reveals
    ST.batch('[data-rv]', {
      start: 'top 90%',
      onEnter: function (b) { gsap.to(b, { opacity: 1, y: 0, duration: 1.3, ease: 'expo.out', stagger: .1, overwrite: true, clearProps: 'transform' }); }
    });
    // counters
    $$('[data-count]').forEach(function (el) { ST.create({ trigger: el, start: 'top 90%', once: true, onEnter: function () { countUp(el); } }); });

    // hero copy parallax out
    if ($('.hero__inner')) gsap.to('.hero__inner', { yPercent: -18, opacity: .2, ease: 'none', scrollTrigger: { trigger: '.hero', start: 'top top', end: 'bottom top', scrub: true } });

    // statement: words light up while scrolling
    $$('[data-scrub]').forEach(function (el) {
      var walk = function (node) {
        Array.prototype.slice.call(node.childNodes).forEach(function (n) {
          if (n.nodeType === 3) {
            var f = document.createDocumentFragment();
            n.textContent.split(/(\s+)/).forEach(function (w) { if (!w) return; if (/^\s+$/.test(w)) f.appendChild(document.createTextNode(' ')); else { var s = document.createElement('span'); s.className = 'sw'; s.textContent = w; f.appendChild(s); } });
            n.parentNode.replaceChild(f, n);
          } else if (n.nodeType === 1 && n.tagName === 'EM') n.classList.add('sw');
        });
      };
      walk(el);
      gsap.to($$('.sw', el), { opacity: 1, stagger: .1, ease: 'none', scrollTrigger: { trigger: el, start: 'top 80%', end: 'bottom 45%', scrub: .6 } });
    });

    if ($('.phero .phero__grid')) gsap.to('.phero__grid', { yPercent: -10, opacity: .35, ease: 'none', scrollTrigger: { trigger: '.phero', start: 'top top', end: 'bottom top', scrub: true } });
    // velocity marquee
    (function () {
      var rows = $$('[data-vm]'); if (!rows.length) return;
      var x = [0, 0], vel = 0, skew = 0, halves = [];
      function measure() { halves = rows.map(function (r) { return r.scrollWidth / 2; }); }
      measure(); window.addEventListener('resize', measure); window.addEventListener('load', measure);
      if (lenis) lenis.on('scroll', function (e) { vel = e.velocity; });
      gsap.ticker.add(function () {
        if (!lenis) vel *= .9;
        rows.forEach(function (r, i) {
          var dir = +r.dataset.vm, half = halves[i] || 1;
          x[i] -= (1.1 + Math.abs(vel) * .35) * dir;
          if (x[i] <= -half) x[i] += half; if (x[i] > 0) x[i] -= half;
          skew += ((-vel * .35) - skew) * .1;
          r.style.transform = 'translate3d(' + x[i] + 'px,0,0) skewX(' + Math.max(-12, Math.min(12, skew)) + 'deg)';
        });
      });
    })();

    // stacking service cards
    var cards = $$('.scard');
    cards.forEach(function (c, i) {
      if (i === cards.length - 1) return;
      gsap.fromTo(c, { scale: 1, '--dim': 0 }, { scale: .92, '--dim': .55, ease: 'none', scrollTrigger: { trigger: cards[i + 1], start: 'top bottom', end: 'top 25%', scrub: .5 } });
    });

    gsap.matchMedia().add('(min-width: 901px)', function () {
        // horizontal work gallery
        var sec = $('#work.work'); if (!sec) return;
        var track = $('.work__track', sec), projs = $$('.proj', sec), num = $('#wnum');
        var dist = function () { return track.scrollWidth - window.innerWidth; };
        var tween = gsap.to(track, {
          x: function () { return -dist(); }, ease: 'none',
          scrollTrigger: {
            trigger: sec, pin: '.work__pin', scrub: 1, start: 'top top', end: function () { return '+=' + dist(); }, invalidateOnRefresh: true,
            onUpdate: function (s) { sec.style.setProperty('--wp', s.progress.toFixed(3)); var n = Math.min(projs.length, Math.max(1, Math.round(s.progress * (projs.length - 1)) + 1)); num.textContent = (n < 10 ? '0' : '') + n; }
          }
        });
        projs.forEach(function (p) {
          gsap.fromTo($('.proj__mono', p), { xPercent: 30 }, { xPercent: -30, ease: 'none', scrollTrigger: { trigger: p, containerAnimation: tween, start: 'left right', end: 'right left', scrub: true } });
          gsap.fromTo(p, { scale: .9, opacity: .6 }, { scale: 1, opacity: 1, ease: 'power2.out', scrollTrigger: { trigger: p, containerAnimation: tween, start: 'left right', end: 'left 45%', scrub: true } });
        });
        // phones fan out
        var stage = $('#stage');
        if (stage) gsap.fromTo(stage, { '--fan': 0 }, { '--fan': 1, ease: 'power2.out', scrollTrigger: { trigger: stage, start: 'top 85%', end: 'center 55%', scrub: 1 } });
    });

    // process rail
    var steps = $('#steps');
    if (steps) {
      var stepEls = $$('.step', steps), rail = $('.steps__rail i', steps);
      ST.create({ trigger: steps, start: 'top 75%', end: 'bottom 55%', scrub: true, onUpdate: function (s) {
        rail.style.setProperty('--p', s.progress.toFixed(3));
        stepEls.forEach(function (el, i) { el.classList.toggle('lit', s.progress >= i / stepEls.length + .02); });
      } });
    }

    // CTA grows from a rounded card
    var cta = $('[data-cta]');
    if (cta) gsap.fromTo(cta, { scale: .86, borderRadius: '120px' }, { scale: 1, borderRadius: '48px', ease: 'none', scrollTrigger: { trigger: cta, start: 'top bottom', end: 'top 35%', scrub: true } });
    var cm = $('.cta__mark');
    if (cm) gsap.fromTo(cm, { rotate: -30, xPercent: 20 }, { rotate: -6, xPercent: 0, ease: 'none', scrollTrigger: { trigger: cta, start: 'top bottom', end: 'bottom top', scrub: true } });

    // footer wordmark rises
    var word = $('[data-word]');
    if (word) gsap.fromTo(word, { yPercent: 60, opacity: 0, clipPath: 'inset(100% 0 0 0)' }, { yPercent: 0, opacity: 1, clipPath: 'inset(0% 0 0 0)', ease: 'none', scrollTrigger: { trigger: word, start: 'top bottom', end: 'bottom bottom', scrub: true } });

    window.addEventListener('load', function () {
      ST.refresh();
      if (location.hash) { var t = document.getElementById(location.hash.slice(1)); if (t) setTimeout(function () { if (lenis) lenis.scrollTo(anchorY(t), { immediate: true }); else window.scrollTo(0, anchorY(t)); ST.update(); revealInView(); }, 60); }
      setTimeout(revealInView, 200);
    });
    // anything already above the fold or scrolled past must never stay hidden
    function revealInView() {
      $$('[data-rv]').forEach(function (el) { if (getComputedStyle(el).opacity < .99 && el.getBoundingClientRect().top < window.innerHeight) gsap.to(el, { opacity: 1, y: 0, duration: .9, ease: 'expo.out', clearProps: 'transform' }); });
      $$('.wi').forEach(function (w) { if (w.getBoundingClientRect().top < window.innerHeight && gsap.getProperty(w, 'yPercent') !== 0) gsap.to(w, { yPercent: 0, rotate: 0, duration: .9, ease: 'expo.out', overwrite: true }); });
    }
    var rvT; window.addEventListener('scroll', function () { clearTimeout(rvT); rvT = setTimeout(revealInView, 400); }, { passive: true });
  }

  /* ================= Project cards tilt ================= */
  if (fine && !reduce) {
    $$('.proj').forEach(function (p) {
      var f = $('.proj__frame', p);
      p.addEventListener('pointermove', function (e) { var r = f.getBoundingClientRect(); f.style.setProperty('--ry', (((e.clientX - r.left) / r.width - .5) * 8).toFixed(2) + 'deg'); f.style.setProperty('--rx', ((-(e.clientY - r.top) / r.height + .5) * 8).toFixed(2) + 'deg'); });
      p.addEventListener('pointerleave', function () { f.style.setProperty('--ry', '0deg'); f.style.setProperty('--rx', '0deg'); });
    });
    var stg = $('#stage'), inner = stg && $('.stage__inner', stg);
    if (stg) {
      stg.addEventListener('pointermove', function (e) { var r = stg.getBoundingClientRect(); inner.style.setProperty('--ty', (((e.clientX - r.left) / r.width - .5) * 14).toFixed(2) + 'deg'); inner.style.setProperty('--tx', (6 - ((e.clientY - r.top) / r.height - .5) * 10).toFixed(2) + 'deg'); });
      stg.addEventListener('pointerleave', function () { inner.style.setProperty('--ty', '0deg'); inner.style.setProperty('--tx', '6deg'); });
    }
  }
  $$('.proj__frame[data-shot]').forEach(function (f) {
    if (!f.dataset.shot) return;
    var img = new Image(); img.className = 'proj__shot'; img.loading = 'lazy'; img.decoding = 'async'; img.alt = '';
    img.onload = function () { f.appendChild(img); }; img.src = f.dataset.shot;
  });

  /* ================= Industries spotlight ================= */
  $$('[data-spot] > *, .card').forEach(function (c) {
    c.addEventListener('pointerenter', function (e) { var r = c.getBoundingClientRect(); c.style.setProperty('--mx', (e.clientX - r.left) + 'px'); c.style.setProperty('--my', (e.clientY - r.top) + 'px'); });
  });

  /* ================= FAQ ================= */
  $$('.faq details').forEach(function (d) {
    var sum = $('summary', d), body = $('.faq__a', d);
    sum.addEventListener('click', function (e) {
      if (reduce || !body.animate) return;
      e.preventDefault();
      if (d.open) { var a = body.animate([{ height: body.offsetHeight + 'px', opacity: 1 }, { height: '0px', opacity: 0 }], { duration: 450, easing: 'cubic-bezier(.76,0,.24,1)' }); a.onfinish = function () { d.open = false; if (ST) ST.refresh(); }; }
      else { d.open = true; body.animate([{ height: '0px', opacity: 0 }, { height: body.offsetHeight + 'px', opacity: 1 }], { duration: 600, easing: 'cubic-bezier(.16,1,.3,1)' }).onfinish = function () { if (ST) ST.refresh(); }; }
    });
  });

  /* ================= Form ================= */
  $$('[data-form]').forEach(function (f) {
    f.addEventListener('submit', function (e) {
      e.preventDefault(); var ok = true;
      $$('input[required]', f).forEach(function (i) {
        var bad = !i.value.trim() || (i.type === 'email' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(i.value));
        i.closest('.field').classList.toggle('bad', bad); i.setAttribute('aria-invalid', bad);
        if (bad && ok) { i.focus(); ok = false; }
      });
      if (!ok) return;
      /* connect to Netlify Forms / Formspree / PHP mail here */
      f.classList.add('sent'); f.reset();
    });
  });

  /* ================= Page transitions ================= */
  var toast = $('.toast'), tt;
  function showToast(m) { toast.textContent = m; toast.classList.add('show'); clearTimeout(tt); tt = setTimeout(function () { toast.classList.remove('show'); }, 2600); }
  function closeDrops() {
    $$('.nav__item').forEach(function (n) { n.classList.add('no-drop'); setTimeout(function () { n.classList.remove('no-drop'); }, 400); });
    if (document.activeElement && document.activeElement.blur) document.activeElement.blur();
  }
  function hideCurtain() {
    root.classList.remove('is-entering');
    var c = $('.page-curtain'); if (!c) return;
    if (G) gsap.set(c, { y: '100%' }); else c.style.transform = 'translateY(100%)';
  }
  document.addEventListener('click', function (e) {
    var a = e.target.closest('a[href]'); if (!a || e.defaultPrevented || e.metaKey || e.ctrlKey || e.shiftKey || e.button > 0 || a.target === '_blank') return;
    var href = a.getAttribute('href');
    if (/^(https?:|mailto:|tel:|#)/.test(href) || !/\.html(#.*)?$/.test(href)) return;
    var parts = href.split('#'), file = parts[0], hash = parts[1] ? '#' + parts[1] : '';
    var here = decodeURIComponent(location.pathname.split('/').pop() || 'index.html');
    e.preventDefault(); closeMenu(); closeDrops();
    if (file === here) {                                   // same page: just scroll, never show the curtain
      var t = hash && document.getElementById(hash.slice(1));
      scrollTo(t ? anchorY(t) : 0);
      if (hash && history.replaceState) history.replaceState(null, '', hash);
      return;
    }
    if (PREVIEW) { showToast('Preview: open the zip to browse every page'); return; }
    if (!G) { location.href = href; return; }
    try { sessionStorage.setItem('tnv-nav', '1'); } catch (e2) {}
    gsap.fromTo('.page-curtain', { y: '100%' }, { y: 0, duration: .7, ease: 'expo.inOut', onComplete: function () { location.href = href; } });
    setTimeout(hideCurtain, 4000);                         // failsafe if navigation is blocked
  });
  window.addEventListener('pageshow', function (e) { if (e.persisted) { try { sessionStorage.removeItem('tnv-nav'); } catch (er) {} hideCurtain(); } });
  /* ================= Portfolio filter ================= */
  $$('[data-filter]').forEach(function (b) {
    b.addEventListener('click', function () {
      var f = b.dataset.filter;
      $$('[data-filter]').forEach(function (x) { x.setAttribute('aria-pressed', x === b); });
      var items = $$('[data-kind]');
      var show = items.filter(function (it) { return f === 'all' || it.dataset.kind.split(' ').indexOf(f) > -1; });
      items.forEach(function (it) { it.classList.toggle('is-out', show.indexOf(it) < 0); });
      if (G) { gsap.fromTo(show, { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: .9, ease: 'expo.out', stagger: .06, clearProps: 'transform' }); ST.refresh(); }
    });
  });

  $$('[data-year]').forEach(function (y) { y.textContent = new Date().getFullYear(); });
})();
