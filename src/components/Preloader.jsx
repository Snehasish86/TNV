import { useEffect, useRef, useState } from 'react';
import { Mark } from './ui.jsx';
import { getScroll } from './smooth.js';

const BIT8 = () => Array.from({ length: 8 }, () => (Math.random() < 0.5 ? '0' : '1')).join('');

/** First-visit preloader on the homepage: TN mark fills up while the counter runs 0 to 100. */
export default function Preloader() {
  const [done, setDone] = useState(false);
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current; if (!el) return;
    let seen = false;
    try { seen = sessionStorage.getItem('tnv-seen') === '1'; sessionStorage.setItem('tnv-seen', '1'); } catch {}
    if (seen || window.matchMedia('(prefers-reduced-motion: reduce)').matches) { setDone(true); return; }
    window.__lenis?.stop();
    const num = el.querySelector('[data-num]'), bits = el.querySelector('[data-bits]');
    const bt = setInterval(() => { bits.textContent = BIT8(); }, 60);
    let tl, alive = true;
    getScroll().then(({ gsap, lenis }) => {
      if (!alive || !gsap) { setDone(true); return; }
      lenis?.stop();
      const o = { v: 0 };
      tl = gsap.timeline({ onComplete: () => { window.__lenis?.start(); setDone(true); } });
      tl.to(o, { v: 100, duration: 1.5, ease: 'power3.inOut', onUpdate: () => { num.textContent = Math.round(o.v); el.style.setProperty('--lp', o.v + '%'); } })
        .add(() => { clearInterval(bt); bits.textContent = 'READY'; })
        .to(el.querySelector('.loader__in'), { y: -40, opacity: 0, duration: 0.6, ease: 'power3.in' }, '+=.15')
        .to(el.querySelectorAll('.loader__panels i'), { scaleY: 0, duration: 1, ease: 'expo.inOut', stagger: { each: 0.07, from: 'center' } }, '-=.2');
    });
    const failsafe = setTimeout(() => { window.__lenis?.start(); setDone(true); }, 5000);
    return () => { alive = false; clearInterval(bt); clearTimeout(failsafe); tl?.kill(); window.__lenis?.start(); };
  }, []);
  if (done) return null;
  return (
    <div ref={ref} className="loader" aria-hidden="true">
      <div className="loader__panels"><i /><i /><i /><i /><i /></div>
      <div className="loader__in">
        <div className="loader__mark"><Mark /><div className="loader__fill"><Mark /></div></div>
        <div className="loader__num"><span data-num>0</span>%</div>
        <div className="loader__bits" data-bits>01101110</div>
      </div>
    </div>
  );
}
