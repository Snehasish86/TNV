// One shared clock for smooth scrolling and scroll animations.
// Lenis is driven by GSAP's ticker and tells ScrollTrigger about every scroll frame,
// so pinned sections, scrubbed animations and the page always move together.
let ready = null;

export function getScroll() {
  if (typeof window === 'undefined') return Promise.resolve({});
  if (ready) return ready;
  ready = Promise.all([import('lenis'), import('gsap'), import('gsap/ScrollTrigger')]).then(([{ default: Lenis }, { gsap }, { ScrollTrigger }]) => {
    gsap.registerPlugin(ScrollTrigger);
    // Mobile browsers resize the viewport when the address bar hides; do not recalculate (and jump) for that.
    ScrollTrigger.config({ ignoreMobileResize: true });
    let lenis = null;
    if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      lenis = new Lenis({ lerp: 0.1, smoothWheel: true, wheelMultiplier: 1, touchMultiplier: 1 });
      lenis.on('scroll', ScrollTrigger.update);
      gsap.ticker.add((time) => lenis.raf(time * 1000));
      gsap.ticker.lagSmoothing(0);
      window.__lenis = lenis;
    }
    return { gsap, ScrollTrigger, lenis };
  });
  return ready;
}
