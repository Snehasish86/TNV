import { useEffect, useRef } from 'react';
import { Btn, Mark, Decode } from '../components/ui.jsx';
import BinaryRain from '../components/BinaryRain.jsx';
import { runDecode } from '../components/effects.js';

export default function NotFound() {
  const ref = useRef(null);
  useEffect(() => runDecode(ref.current), []);
  return (
    <section className="dark-sec relative isolate grid min-h-[100svh] place-items-center overflow-hidden bg-nova-900 px-5 py-32 text-center text-cream" aria-labelledby="nf-title">
      <BinaryRain opacity={0.6} />
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(50%_50%_at_50%_45%,rgba(6,19,64,.9),rgba(6,19,64,.3)_70%,transparent)]" />
      <div className="relative">
        <Mark className="mx-auto mb-8 w-20 text-volt hero-in" />
        <h1 id="nf-title" ref={ref} className="text-[clamp(5rem,20vw,14rem)] font-semibold leading-[.85] tracking-[-0.07em]"><Decode lines={[{ text: '404' }]} /></h1>
        <p className="hero-in mx-auto mb-9 mt-6 max-w-[40ch] text-lg text-mist" style={{ '--d': '.1s' }}>We could not find that page. It may have moved, or the link may be wrong.</p>
        <div className="hero-in flex flex-wrap justify-center gap-3" style={{ '--d': '.2s' }}>
          <Btn to="/" variant="cream">Back to home</Btn>
          <Btn to="/contact/" variant="ghost" icon={false}>Contact us</Btn>
        </div>
      </div>
    </section>
  );
}
