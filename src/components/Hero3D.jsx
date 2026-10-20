import { useEffect, useRef, useState } from 'react';
import SHAPES from '../data/mark-shapes.json';

/** Extruded tweNova monogram. three.js loads only after the page is interactive. */
export default function Hero3D() {
  const ref = useRef(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const canvas = ref.current; if (!canvas) return;
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let dispose = () => {}, cancelled = false;

    const start = () => import('three').then((THREE) => {
      if (cancelled) return;
      const host = canvas.parentElement;
      let renderer;
      try { renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true, powerPreference: 'high-performance' }); } catch { return; }
      renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.6));
      renderer.outputEncoding = THREE.sRGBEncoding;
      renderer.toneMapping = THREE.ACESFilmicToneMapping;

      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(32, 1, 0.1, 100);
      camera.position.set(0, 0, 11);
      scene.add(new THREE.HemisphereLight(0xfefaef, 0x123498, 0.9));
      const key = new THREE.DirectionalLight(0xffffff, 1.4); key.position.set(4, 5, 7); scene.add(key);
      const fill = new THREE.DirectionalLight(0x8fa7f2, 0.8); fill.position.set(-6, -1, 4); scene.add(fill);
      const rim = new THREE.DirectionalLight(0x8fa7f2, 2.2); rim.position.set(-5, 3, -6); scene.add(rim);

      const root = new THREE.Group(); scene.add(root);
      const logo = new THREE.Group(); root.add(logo);
      const K = 1 / 300;
      const v = (p) => new THREE.Vector2((p[0] - 1095) * K, (666 - p[1]) * K);
      const shapes = SHAPES.map((s) => { const sh = new THREE.Shape(s.o.map(v)); (s.h || []).forEach((h) => sh.holes.push(new THREE.Path(h.map(v)))); return sh; });
      const geo = new THREE.ExtrudeGeometry(shapes, { depth: 0.7, bevelEnabled: true, bevelThickness: 0.09, bevelSize: 0.05, bevelSegments: 5, curveSegments: 4 });
      geo.translate(0, 0, -0.35);
      const face = new THREE.MeshStandardMaterial({ color: 0xfefaef, metalness: 0.05, roughness: 0.35, emissive: 0x1b2a66, emissiveIntensity: 0.15 });
      const side = new THREE.MeshStandardMaterial({ color: 0x1b42b8, metalness: 0.3, roughness: 0.4, emissive: 0x0a1f66, emissiveIntensity: 0.35 });
      logo.add(new THREE.Mesh(geo, [face, side]));

      const rings = new THREE.Group(); root.add(rings);
      [[4.4, 0.32], [5.8, 0.14]].forEach(([r, o]) => {
        const m = new THREE.Mesh(new THREE.TorusGeometry(r, 0.008, 6, 220), new THREE.MeshBasicMaterial({ color: 0xfefaef, transparent: true, opacity: o }));
        m.rotation.x = Math.PI / 2; rings.add(m);
      });
      const n = window.innerWidth < 700 ? 90 : 180, pos = new Float32Array(n * 3);
      for (let i = 0; i < n; i++) { const a = Math.random() * Math.PI * 2, r = 4.4 + (Math.random() - 0.5) * 0.6; pos[i * 3] = Math.cos(a) * r; pos[i * 3 + 1] = (Math.random() - 0.5) * 0.25; pos[i * 3 + 2] = Math.sin(a) * r; }
      const pg = new THREE.BufferGeometry(); pg.setAttribute('position', new THREE.BufferAttribute(pos, 3));
      rings.add(new THREE.Points(pg, new THREE.PointsMaterial({ color: 0x8fa7f2, size: 0.05, transparent: true, opacity: 0.9, depthWrite: false })));
      rings.rotation.set(1.15, 0, 0.25);

      const base = { x: 0, y: 0, s: 1 };
      const layout = () => {
        const W = host.clientWidth, H = host.clientHeight;
        renderer.setSize(W, H, false); camera.aspect = W / H; camera.updateProjectionMatrix();
        const vh = 2 * Math.tan(THREE.MathUtils.degToRad(camera.fov / 2)) * camera.position.z, vw = vh * camera.aspect;
        if (W > 1024) { base.s = Math.min((vw * 0.3) / 7.3, (vh * 0.42) / 4.4); base.x = vw * 0.25; base.y = vh * 0.04; }
        else { base.s = Math.min((vw * 0.6) / 7.3, (vh * 0.26) / 4.4); base.x = 0; base.y = vh * 0.27; }
      };
      layout();
      const ro = new ResizeObserver(layout); ro.observe(host);

      let mx = 0, my = 0, tx = 0, ty = 0, intro = reduce ? 1 : 0, sp = 0;
      const onMove = (e) => { tx = (e.clientX / window.innerWidth) * 2 - 1; ty = (e.clientY / window.innerHeight) * 2 - 1; };
      const onScroll = () => { sp = Math.min(1, window.scrollY / (host.clientHeight || 1)); };
      window.addEventListener('pointermove', onMove, { passive: true });
      window.addEventListener('scroll', onScroll, { passive: true });

      let running = false, raf = 0; const t0 = performance.now();
      const frame = (now) => {
        if (!running) return;
        const t = (now - t0) / 1000;
        if (intro < 1) intro = Math.min(1, intro + 0.012);
        const e = 1 - Math.pow(1 - intro, 4);
        mx += (tx - mx) * 0.05; my += (ty - my) * 0.05;
        root.position.set(base.x + mx * 0.2, base.y - sp * 2 + Math.sin(t * 0.8) * 0.1, 0);
        root.scale.setScalar(base.s * (0.7 + 0.3 * e));
        logo.rotation.y = mx * 0.5 + Math.sin(t * 0.45) * 0.16 + sp * 1.2 + (1 - e) * 2.4;
        logo.rotation.x = my * 0.28;
        rings.rotation.y = t * 0.1;
        renderer.render(scene, camera);
        if (!reduce) raf = requestAnimationFrame(frame); else running = false;
      };
      const play = () => { if (!running) { running = true; raf = requestAnimationFrame(frame); } };
      const pause = () => { running = false; cancelAnimationFrame(raf); };
      const io = new IntersectionObserver(([en]) => (en.isIntersecting ? play() : pause()));
      io.observe(host);
      const vis = () => (document.hidden ? pause() : play());
      document.addEventListener('visibilitychange', vis);
      setReady(true);
      if (reduce) { running = true; frame(performance.now()); }

      dispose = () => {
        pause(); io.disconnect(); ro.disconnect();
        window.removeEventListener('pointermove', onMove); window.removeEventListener('scroll', onScroll);
        document.removeEventListener('visibilitychange', vis);
        geo.dispose(); face.dispose(); side.dispose(); renderer.dispose();
      };
    });

    const idle = window.requestIdleCallback || ((cb) => setTimeout(cb, 200));
    const h = idle(start);
    return () => { cancelled = true; (window.cancelIdleCallback || clearTimeout)(h); dispose(); };
  }, []);

  return <canvas ref={ref} aria-hidden="true" className={`absolute inset-0 -z-10 h-full w-full transition-opacity duration-[1.4s] ${ready ? 'opacity-100' : 'opacity-0'}`} />;
}
