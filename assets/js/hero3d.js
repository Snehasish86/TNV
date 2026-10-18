/* tweNova hero 3D — extruded TN monogram + orbiting binary ring (three.js r128) */
(function () {
  'use strict';
  var THREE = window.THREE, SHAPES = window.TNV_MARK;
  var canvas = document.getElementById('hero3d');
  if (!THREE || !SHAPES || !canvas) return;
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var hero = canvas.parentElement;

  var renderer;
  try { renderer = new THREE.WebGLRenderer({ canvas: canvas, antialias: true, alpha: true, powerPreference: 'high-performance' }); }
  catch (e) { return; }
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.6));
  renderer.outputEncoding = THREE.sRGBEncoding;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.05;

  var scene = new THREE.Scene();
  var camera = new THREE.PerspectiveCamera(32, 1, 0.1, 100);
  camera.position.set(0, 0, 11);

  /* --- lights --- */
  scene.add(new THREE.HemisphereLight(0xfefaef, 0x123498, 0.9));
  var key = new THREE.DirectionalLight(0xffffff, 1.4); key.position.set(4, 5, 7); scene.add(key);
  var fill = new THREE.DirectionalLight(0x8fa7f2, 0.8); fill.position.set(-6, -1, 4); scene.add(fill);
  var rim = new THREE.DirectionalLight(0x8fa7f2, 2.4); rim.position.set(-5, 3, -6); scene.add(rim);
  var glow = new THREE.PointLight(0x3b62e0, 2.5, 20); glow.position.set(-3, -2, 4); scene.add(glow);

  /* --- logo --- */
  var root = new THREE.Group(); scene.add(root);
  var logo = new THREE.Group(); root.add(logo);
  var K = 1 / 300; // 2190px → 7.3 units
  var shapes = SHAPES.map(function (s) {
    var sh = new THREE.Shape(s.o.map(function (p) { return new THREE.Vector2((p[0] - 1095) * K, (666 - p[1]) * K); }));
    (s.h || []).forEach(function (h) { sh.holes.push(new THREE.Path(h.map(function (p) { return new THREE.Vector2((p[0] - 1095) * K, (666 - p[1]) * K); }))); });
    return sh;
  });
  var geo = new THREE.ExtrudeGeometry(shapes, { depth: 0.7, bevelEnabled: true, bevelThickness: 0.09, bevelSize: 0.05, bevelSegments: 5, curveSegments: 4 });
  geo.translate(0, 0, -0.35);
  geo.computeVertexNormals();
  var face = new THREE.MeshStandardMaterial({ color: 0xfefaef, metalness: 0.05, roughness: 0.35, emissive: 0x1b2a66, emissiveIntensity: 0.15 });
  var side = new THREE.MeshStandardMaterial({ color: 0x1b42b8, metalness: 0.3, roughness: 0.4, emissive: 0x0a1f66, emissiveIntensity: 0.35 });
  var mesh = new THREE.Mesh(geo, [face, side]);
  logo.add(mesh);

  // ghost wireframe echo behind the logo
  var edges = new THREE.LineSegments(new THREE.EdgesGeometry(geo, 25), new THREE.LineBasicMaterial({ color: 0x8fa7f2, transparent: true, opacity: 0.35 }));
  edges.position.z = -0.9; edges.scale.setScalar(1.06);
  logo.add(edges);

  /* --- binary orbit ring --- */
  function glyphTex(ch) {
    var c = document.createElement('canvas'); c.width = c.height = 64;
    var x = c.getContext('2d'); x.fillStyle = '#FEFAEF';
    x.font = '600 48px "JetBrains Mono", monospace'; x.textAlign = 'center'; x.textBaseline = 'middle';
    x.fillText(ch, 32, 34);
    var t = new THREE.CanvasTexture(c); t.encoding = THREE.sRGBEncoding; return t;
  }
  var mobile = window.innerWidth < 700;
  var ring = new THREE.Group(); root.add(ring);
  ['0', '1'].forEach(function (ch, j) {
    var n = mobile ? 160 : 340, pos = new Float32Array(n * 3);
    for (var i = 0; i < n; i++) {
      var a = Math.random() * Math.PI * 2, r = 4.6 + Math.random() * 1.6 + (Math.random() < .15 ? Math.random() * 2 : 0);
      pos[i * 3] = Math.cos(a) * r; pos[i * 3 + 1] = (Math.random() - .5) * 0.5; pos[i * 3 + 2] = Math.sin(a) * r;
    }
    var g = new THREE.BufferGeometry(); g.setAttribute('position', new THREE.BufferAttribute(pos, 3));
    var m = new THREE.PointsMaterial({ map: glyphTex(ch), size: 0.26, transparent: true, depthWrite: false, opacity: j ? 0.85 : 0.6, color: j ? 0xfefaef : 0x8fa7f2, sizeAttenuation: true });
    ring.add(new THREE.Points(g, m));
  });
  var orbit = new THREE.Mesh(new THREE.TorusGeometry(4.4, 0.006, 6, 220), new THREE.MeshBasicMaterial({ color: 0xfefaef, transparent: true, opacity: 0.35 }));
  orbit.rotation.x = Math.PI / 2; ring.add(orbit);
  var orbit2 = orbit.clone(); orbit2.scale.setScalar(1.45); orbit2.material = orbit.material.clone(); orbit2.material.opacity = 0.12; ring.add(orbit2);
  ring.rotation.set(1.15, 0, 0.25);

  // dust
  var dn = mobile ? 120 : 260, dp = new Float32Array(dn * 3);
  for (var d = 0; d < dn; d++) { dp[d * 3] = (Math.random() - .5) * 26; dp[d * 3 + 1] = (Math.random() - .5) * 16; dp[d * 3 + 2] = (Math.random() - .5) * 12 - 3; }
  var dg = new THREE.BufferGeometry(); dg.setAttribute('position', new THREE.BufferAttribute(dp, 3));
  var dust = new THREE.Points(dg, new THREE.PointsMaterial({ color: 0x8fa7f2, size: 0.035, transparent: true, opacity: 0.7, depthWrite: false }));
  scene.add(dust);

  /* --- layout --- */
  var W = 0, H = 0, base = { x: 0, y: 0, s: 1 };
  function layout() {
    W = hero.clientWidth; H = hero.clientHeight;
    renderer.setSize(W, H, false);
    camera.aspect = W / H; camera.updateProjectionMatrix();
    var vh = 2 * Math.tan(THREE.MathUtils.degToRad(camera.fov / 2)) * camera.position.z, vw = vh * camera.aspect;
    if (W > 900) { base.s = Math.min(vw * 0.3 / 7.3, vh * 0.42 / 4.4); base.x = vw * 0.25; base.y = vh * 0.06; }
    else { base.s = Math.min(vw * 0.62 / 7.3, vh * 0.3 / 4.4); base.x = 0; base.y = vh * 0.25; }
  }
  layout();
  var rt; window.addEventListener('resize', function () { clearTimeout(rt); rt = setTimeout(layout, 120); });

  /* --- interaction state --- */
  var mx = 0, my = 0, tmx = 0, tmy = 0, scrollP = 0, intro = reduce ? 1 : 0, spin = 0;
  window.addEventListener('pointermove', function (e) { tmx = e.clientX / window.innerWidth * 2 - 1; tmy = e.clientY / window.innerHeight * 2 - 1; }, { passive: true });
  window.addEventListener('deviceorientation', function (e) { if (e.gamma != null) { tmx = Math.max(-1, Math.min(1, e.gamma / 30)); tmy = Math.max(-1, Math.min(1, (e.beta - 45) / 30)); } }, { passive: true });
  window.addEventListener('scroll', function () { scrollP = Math.min(1, window.scrollY / (H || 1)); }, { passive: true });

  window.TNV3D = {
    intro: function () {
      if (window.gsap) {
        var o = { v: 0 };
        window.gsap.to(o, { v: 1, duration: 2.4, ease: 'expo.out', onUpdate: function () { intro = o.v; } });
        window.gsap.fromTo(window.TNV3D, { spin: Math.PI * 2 }, { spin: 0, duration: 2.8, ease: 'expo.out' });
      } else intro = 1;
    },
    spin: 0
  };

  /* --- render loop (only while hero is visible) --- */
  var running = false, clock = new THREE.Clock();
  function frame() {
    if (!running) return;
    var t = clock.getElapsedTime();
    mx += (tmx - mx) * 0.05; my += (tmy - my) * 0.05;
    var s = base.s * (0.55 + 0.45 * intro) * (1 - scrollP * 0.25);
    root.position.set(base.x + mx * 0.25, base.y - scrollP * 2.2 + Math.sin(t * 0.8) * 0.12, 0);
    root.scale.setScalar(s);
    logo.rotation.y = mx * 0.55 + Math.sin(t * 0.45) * 0.18 + scrollP * 1.4 + window.TNV3D.spin;
    logo.rotation.x = my * 0.32 + Math.cos(t * 0.5) * 0.06;
    ring.rotation.y = t * 0.12 + mx * 0.2;
    ring.children[0].rotation.y = -t * 0.05;
    edges.material.opacity = 0.2 + Math.sin(t * 1.4) * 0.12;
    dust.rotation.y = t * 0.01; dust.position.x = -mx * 0.4; dust.position.y = my * 0.3;
    glow.position.x = -3 + mx * 3; glow.position.y = -2 - my * 2;
    renderer.render(scene, camera);
    if (!reduce) requestAnimationFrame(frame); else running = false;
  }
  function start() { if (!running) { running = true; requestAnimationFrame(frame); } }
  function stop() { running = false; }
  if ('IntersectionObserver' in window) new IntersectionObserver(function (e) { e[0].isIntersecting ? start() : stop(); }).observe(hero);
  else start();
  document.addEventListener('visibilitychange', function () { document.hidden ? stop() : start(); });
  requestAnimationFrame(function () { canvas.classList.add('ready'); });
  if (reduce) { running = true; frame(); }
})();
