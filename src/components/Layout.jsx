import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { Header, Footer } from './chrome.jsx';
import { getMeta } from '../seo.js';
import { useNovaCursor, useGlobalFx, useMotion } from './effects.js';
import { getScroll } from './smooth.js';
import Preloader from './Preloader.jsx';
import { Mark } from './ui.jsx';

const useIso = typeof window === 'undefined' ? useEffect : useLayoutEffect;

function useReveal(pathname) {
  useEffect(() => {
    const show = (e) => e.classList.add('in');
    if (!('IntersectionObserver' in window)) { document.querySelectorAll('[data-rv]').forEach(show); return; }
    const io = new IntersectionObserver((entries) => {
      entries.forEach((en) => { if (en.isIntersecting) { show(en.target); io.unobserve(en.target); } });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });
    const watch = (root) => {
      const els = [];
      if (root.matches?.('[data-rv]:not(.in)')) els.push(root);
      root.querySelectorAll?.('[data-rv]:not(.in)').forEach((e) => els.push(e));
      els.forEach((e) => io.observe(e));
      // safety net: anything already in or above the viewport must be visible
      setTimeout(() => els.forEach((e) => { if (e.getBoundingClientRect().top < window.innerHeight) show(e); }), 900);
    };
    watch(document);
    // cards added later (filters, tabs) are revealed too
    const mo = new MutationObserver((list) => list.forEach((m) => m.addedNodes.forEach((n) => n.nodeType === 1 && watch(n))));
    mo.observe(document.getElementById('root') || document.body, { childList: true, subtree: true });
    return () => { io.disconnect(); mo.disconnect(); };
  }, [pathname]);
}

function useSmoothScroll() {
  useEffect(() => { getScroll(); }, []);
}

function scrollToHash(hash) {
  const el = hash && document.getElementById(decodeURIComponent(hash.slice(1)));
  const y = el ? el.getBoundingClientRect().top + window.scrollY - 80 : 0;
  if (window.__lenis) window.__lenis.scrollTo(y, { immediate: !el, duration: 1.2 });
  else window.scrollTo({ top: y, behavior: el ? 'smooth' : 'auto' });
}

export default function Layout() {
  const { pathname, hash } = useLocation();
  useSmoothScroll();
  useNovaCursor();
  useGlobalFx();
  useReveal(pathname);
  useMotion(pathname);
  const [loader] = useState(() => pathname === '/');
  // route curtain: pure CSS animation, so it can never stay on screen
  const first = useRef(true);
  const [run, setRun] = useState(0);
  useEffect(() => { if (first.current) { first.current = false; return; } setRun((n) => n + 1); }, [pathname]);
  const [top, setTop] = useState(false);
  useEffect(() => { const on = () => setTop(window.scrollY > 900); on(); window.addEventListener('scroll', on, { passive: true }); return () => window.removeEventListener('scroll', on); }, []);
  useEffect(() => { document.documentElement.classList.add('js'); }, []);
  // new page: jump to top (or to #hash) instantly, no stuck overlays
  useIso(() => { if (!hash) { window.__lenis?.scrollTo(0, { immediate: true }); window.scrollTo(0, 0); } }, [pathname]);
  useEffect(() => { if (hash) { const t = setTimeout(() => scrollToHash(hash), 60); return () => clearTimeout(t); } }, [pathname, hash]);
  // keep <title> and description in sync during client-side navigation
  useEffect(() => {
    const m = getMeta(pathname);
    document.title = m.title;
    const set = (sel, attr, val) => { const el = document.head.querySelector(sel); if (el) el.setAttribute(attr, val); };
    set('meta[name="description"]', 'content', m.desc);
    set('link[rel="canonical"]', 'href', m.url);
    set('meta[property="og:title"]', 'content', m.title);
    set('meta[property="og:description"]', 'content', m.desc);
    set('meta[property="og:url"]', 'content', m.url);
  }, [pathname]);

  return (
    <>
      <a href="#main" className="fixed left-4 top-[-80px] z-[300] rounded-lg bg-cream px-4 py-2.5 font-bold text-nova focus:top-4">Skip to content</a>
      {loader && <Preloader />}
      <div key={run} className={`route-curtain ${run ? 'run' : ''}`} aria-hidden="true"><Mark /></div>
      <div className="progress-bar" aria-hidden="true" />
      <Header />
      <main id="main" key={pathname} className="page-enter"><Outlet /></main>
      <Footer />
      <button type="button" data-stick aria-label="Back to top" onClick={() => (window.__lenis ? window.__lenis.scrollTo(0, { duration: 1.4 }) : window.scrollTo({ top: 0, behavior: 'smooth' }))}
        className={`fixed bottom-[calc(20px+env(safe-area-inset-bottom))] right-5 z-[80] grid h-14 w-14 place-items-center rounded-full bg-nova text-cream shadow-[0_14px_30px_-12px_rgba(6,19,64,.6)] transition-[opacity,transform] duration-500 ease-out ${top ? 'opacity-100' : 'pointer-events-none translate-y-4 opacity-0'}`}>
        <svg viewBox="0 0 54 54" className="absolute inset-0 h-14 w-14 -rotate-90" aria-hidden="true"><circle cx="27" cy="27" r="25" fill="none" stroke="#FEFAEF" strokeWidth="2" strokeDasharray="157" style={{ strokeDashoffset: 'calc(157 - 157 * var(--sp, 0))' }} /></svg>
        <span aria-hidden="true" className="text-lg font-bold">↑</span>
      </button>
    </>
  );
}
