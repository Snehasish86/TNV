import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Hero3D from '../components/Hero3D.jsx';
import BinaryRain from '../components/BinaryRain.jsx';
import { runDecode, runConsole } from '../components/effects.js';
import { Btn, Icon, Kicker, SecHead, Faq, Steps, Mark, Split, Scrub, Decode } from '../components/ui.jsx';
import { Cta, ProjectCard, AppPhone, ProductCard } from '../components/blocks.jsx';
import { products } from '../data/products.js';
import { projects, apps, homeFaqs, industries } from '../data/site.js';
import { coreServices, services } from '../data/services.js';
import { roles } from '../data/hire.js';

const CARD_BG = ['#123498', '#0A1F66', '#1B42B8', '#061340', '#163FAE', '#0D2A82', '#123498', '#0A1F66', '#1B42B8'];
const TECH = [
  [['HTML5', 'Frontend'], ['CSS3', 'Frontend'], ['JavaScript', 'Frontend'], ['React', 'Frontend'], ['Next.js', 'Frontend'], ['Vue.js', 'Frontend'], ['Angular', 'Frontend'], ['Tailwind', 'Frontend'], ['Three.js', '3D web'], ['GSAP', 'Motion']],
  [['PHP', 'Backend'], ['Laravel', 'Backend'], ['CodeIgniter', 'Backend'], ['Node.js', 'Backend'], ['Python', 'Backend'], ['MySQL', 'Database'], ['PostgreSQL', 'Database'], ['MongoDB', 'Database'], ['Firebase', 'Backend']],
  [['Flutter', 'Mobile'], ['React Native', 'Mobile'], ['Swift', 'iOS'], ['Kotlin', 'Android'], ['AWS', 'Cloud'], ['Google Cloud', 'Cloud'], ['Docker', 'DevOps'], ['Shopify', 'Commerce'], ['WooCommerce', 'Commerce'], ['OpenAI & Claude', 'AI']]
];
const SHIPS = [...projects.map((p) => [p.name, p.domain]), ...apps.map((a) => [a.name, a.store])];
const FAN = [-2, -1, 0, 1, 2];

export default function Home() {
  const decodeRef = useRef(null), consoleRef = useRef(null), countRef = useRef(null);
  useEffect(() => {
    // wait for the first-visit preloader before decoding the headline
    const seen = document.documentElement.classList.contains('seen') || !document.querySelector('.loader');
    let stopD = () => {}; const t = setTimeout(() => { stopD = runDecode(decodeRef.current); }, seen ? 150 : 1900);
    const stopC = runConsole(consoleRef.current, countRef.current, SHIPS);
    return () => { clearTimeout(t); stopD(); stopC(); };
  }, []);

  return (
    <>
      {/* HERO: binary rain + 3D logo + decoding headline */}
      <section className="dark-sec relative isolate flex min-h-[max(100svh,680px)] items-center overflow-hidden bg-nova-900 text-cream" aria-labelledby="hero-title">
        <BinaryRain opacity={0.7} />
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-20 bg-[radial-gradient(60%_75%_at_15%_55%,rgba(6,19,64,.95),rgba(6,19,64,.5)_60%,transparent),radial-gradient(45%_55%_at_72%_48%,rgba(27,66,184,.45),transparent_70%),linear-gradient(180deg,rgba(6,19,64,.4),transparent_25%,transparent_75%,#061340)]" />
        <Hero3D />
        <div className="wrap pb-24 pt-[52svh] lg:pb-28 lg:pt-36">
          <div className="max-w-[min(720px,100%)] lg:max-w-[58%]" data-par>
            <h1 id="hero-title" className="flex flex-col gap-6">
              <span className="hero-in inline-flex items-center gap-3 font-sans text-[clamp(1rem,1.3vw,1.15rem)] font-semibold tracking-normal text-mist"><span className="ping h-2.5 w-2.5 rounded-full bg-volt" />Software development company in India</span>
              <span ref={decodeRef} className="block text-[clamp(2.3rem,min(5.4vw,9.5vh),5.2rem)] font-semibold leading-[1] tracking-[-0.045em]">
                <Decode lines={[{ text: 'Turning Ideas Into' }, { text: 'Powerful Digital' }, { text: 'Products.', className: 'text-volt' }]} />
              </span>
            </h1>
            <p className="lede hero-in mt-8 text-[#D7DFF8]" style={{ '--d': '.25s' }}>Twenova builds websites, mobile applications, custom software and SaaS products for startups and businesses in India and around the world.</p>
            <div className="hero-in mt-10 flex flex-wrap gap-3" style={{ '--d': '.4s' }}>
              <Btn to="/contact/" variant="cream">Start Your Project</Btn>
              <Btn to="/portfolio/" variant="ghost" icon={false}>Explore Our Work</Btn>
            </div>
          </div>
        </div>
        <div className="hero-in absolute bottom-8 right-10 hidden w-[300px] overflow-hidden rounded-2xl bg-nova-700/50 font-mono text-[.76rem] shadow-[inset_0_0_0_1px_rgba(254,250,239,.14)] backdrop-blur-md xl:block" style={{ '--d': '.6s' }} aria-hidden="true">
          <div className="flex items-center gap-1.5 border-b border-white/10 px-3.5 py-2.5 text-[#9FB0E4]"><i className="h-2 w-2 rounded-full bg-white/25" /><i className="h-2 w-2 rounded-full bg-white/25" /><i className="h-2 w-2 rounded-full bg-white/25" /><b className="ml-auto font-medium text-emerald-300">● <span ref={countRef}>0</span>/12 live</b></div>
          <div ref={consoleRef} className="h-[110px] overflow-hidden px-3.5 py-2.5 leading-[1.85]" />
        </div>
        <div className="hero-in absolute bottom-7 left-[clamp(20px,4vw,48px)] flex items-center gap-3.5 text-sm font-semibold text-mist" style={{ '--d': '.7s' }} aria-hidden="true">
          <i className="relative h-11 w-[1.5px] overflow-hidden bg-white/20"><i className="absolute inset-0 animate-[drip_2s_cubic-bezier(.76,0,.24,1)_infinite] bg-cream" /></i>Scroll to explore
        </div>
      </section>

      {/* VELOCITY MARQUEE */}
      <section className="dark-sec overflow-hidden bg-nova py-[clamp(28px,4vw,50px)] text-cream" aria-hidden="true">
        {[1, -1].map((dir) => (
          <div key={dir} className={`vm-row ${dir < 0 ? 'ghost' : ''}`} data-vm={dir}>
            {[0, 1].flatMap((k) => ['Innovate', 'Build', 'Evolve'].map((w) => <span key={k + w}>{w}<Icon name="star" /></span>))}
          </div>
        ))}
      </section>

      {/* INTRO */}
      <section className="sec" aria-labelledby="intro-title">
        <div className="wrap">
          <Kicker>Who we are</Kicker>
          <div className="grid items-end gap-10 lg:grid-cols-[1.5fr_.9fr] lg:gap-20">
            <h2 id="intro-title" className="scrub max-w-[22ch] font-display text-[clamp(1.8rem,4vw,3.6rem)] font-medium leading-[1.12] tracking-[-0.03em]">
              <Scrub text="We are Twenova" />
              <span className="sw mx-1 inline-flex h-[.9em] items-center rounded-full bg-nova px-[.35em] align-middle text-cream" aria-hidden="true"><Mark className="h-[.55em] w-auto" /></span>{' '}
              <Scrub text="a product studio that turns ideas into fast, reliable websites and apps, then keeps improving them as your business grows." />
            </h2>
            <div data-rv style={{ '--d': '.1s' }}>
              <p className="lede">One team for strategy, design, engineering and marketing, so nothing gets lost between agencies.</p>
              <p className="mt-4 text-ink-soft">We start with the business problem, agree a clear scope, and build in stages you can review, for startups, growing businesses and established companies.</p>
              <div className="mt-7"><Btn to="/about-us/" variant="ghost-dark" icon={false}>About Twenova</Btn></div>
            </div>
          </div>
          <div className="mt-20 border-t-[1.5px] border-ink pt-8" data-rv>
            <p className="text-sm font-bold uppercase tracking-[0.14em] text-ink-soft">Websites and apps we have built</p>
            <ul className="mt-5 flex flex-wrap gap-x-8 gap-y-3 font-display text-[clamp(1.05rem,1.8vw,1.4rem)] font-semibold tracking-[-0.02em]">
              {[...projects.map((p) => p.name), ...apps.map((a) => a.name)].map((n) => <li key={n}>{n}</li>)}
            </ul>
            <div className="mt-7"><Btn to="/portfolio/" variant="ghost-dark" icon={false}>See the portfolio</Btn></div>
          </div>
        </div>
      </section>

      {/* SERVICES: stacking cards with 3D cubes */}
      <section className="sec bg-cream-200" aria-labelledby="svc-title">
        <div className="wrap">
          <SecHead kicker="What we do" title="Everything you need to launch and grow online" sub="Pick one service or bring us the whole product. Every build ships with responsive design, technical SEO and performance tuning." id="svc-title" />
          <div className="flex flex-col gap-7">
            {coreServices.map((s, i) => (
              <article key={s.slug} className="scard dark-sec relative grid min-h-[min(68vh,560px)] items-center gap-8 overflow-hidden rounded-[2rem] p-7 text-cream shadow-[0_-20px_60px_-30px_rgba(6,19,64,.5)] sm:p-12 lg:grid-cols-[1.1fr_.9fr] lg:p-16" style={{ '--i': i, background: CARD_BG[i % CARD_BG.length] }}>
                <div className="scard-bits pointer-events-none absolute inset-0 -z-0" aria-hidden="true" />
                <div className="relative">
                  <h3 className="text-[clamp(1.8rem,3.8vw,3.2rem)] font-semibold tracking-[-0.035em]">{s.name}</h3>
                  <p className="mt-4 max-w-[44ch] text-[1.05rem] text-[#D7DFF8]">{s.short}</p>
                  <ul className="mt-6 flex flex-wrap gap-2">{s.offerings.slice(0, 4).map(([, t]) => <li key={t} className="chip !text-[.85rem]">{t}</li>)}</ul>
                  <div className="mt-8"><Btn to={`/${s.slug}/`} variant="cream">Explore service</Btn></div>
                </div>
                <div className="relative order-first grid min-h-[200px] place-items-center [perspective:900px] lg:order-none" aria-hidden="true">
                  <div className="cube" style={{ '--i': i }}><b><Icon name={s.icon} /></b><b><Icon name={s.icon} /></b><b><Icon name={s.icon} /></b><b><Icon name={s.icon} /></b><b>0101</b><b>1010</b></div>
                </div>
              </article>
            ))}
          </div>
          <div className="mt-12 flex flex-wrap items-center gap-4" data-rv><Btn to="/services/">All services</Btn><span className="text-ink-soft">Also: {services.filter((x) => !x.core).map((x) => x.name).join(', ')}.</span></div>
        </div>
      </section>

      {/* WORK: horizontal carousel */}
      <section className="hwork overflow-hidden" id="work" aria-labelledby="work-title" data-hwork>
        <div className="hwork__pin">
          <div className="hwork__track">
            <div className="hwork__intro">
              <Kicker>Selected websites</Kicker>
              <h2 id="work-title" className="h-sec" data-split><Split text="Live sites we designed and built" /></h2>
              <p className="mt-5 text-ink-soft" data-rv>Every project is live. Click any card to open the real site.</p>
              <div className="hwork__count mt-10 flex items-baseline gap-2.5 font-display font-semibold" aria-hidden="true"><b className="text-[3.4rem] leading-none tracking-[-0.04em] text-nova tabular-nums" data-wnum>01</b><span className="text-ink-soft">/ {String(projects.length).padStart(2, '0')}</span></div>
              <div className="hwork__bar hwork__count mt-4 h-[3px] max-w-[300px] overflow-hidden rounded bg-nova/15" aria-hidden="true"><i /></div>
            </div>
            {projects.map((p, i) => <ProjectCard key={p.name} p={p} i={i} className="hcard" rv={false} />)}
            <div className="shrink-0 pr-[6vw]"><Btn to="/portfolio/">Full portfolio</Btn></div>
          </div>
        </div>
      </section>

      {/* OUR PRODUCTS */}
      <section className="sec" aria-labelledby="prod-title">
        <div className="wrap">
          <SecHead kicker="Our products" title="Products we build and run ourselves" sub="Besides client work, Twenova builds its own products. Both are ongoing." id="prod-title" />
          <div className="grid gap-6 md:grid-cols-2">{products.map((p, i) => <ProductCard key={p.slug} p={p} i={i} />)}</div>
        </div>
      </section>

      {/* APPS: 3D phone fan */}
      <section className="sec dark-sec overflow-hidden bg-nova-900 text-cream" id="apps" aria-labelledby="apps-title">
        <div className="wrap">
          <SecHead kicker="Mobile apps" title="Apps people open every day" sub="Healthcare, pharmacy, education, school management and games, published on the App Store and Google Play." id="apps-title" dark />
          <div className="fan">
            <div className="fan__inner">
              {apps.map((a, i) => <div key={a.name} className="fan-phone" style={{ '--o': FAN[i] ?? 0, '--ao': Math.abs(FAN[i] ?? 0) }}><AppPhone a={a} /></div>)}
            </div>
          </div>
        </div>
      </section>

      <Steps steps={[['Discover', 'We learn your business, users and goals, then agree on scope and budget.'], ['Design', 'Wireframes and visual design you can click through before any code is written.'], ['Build', 'Clean, tested code delivered in weekly sprints on a staging link.'], ['Evolve', 'We launch, monitor and keep improving with data and support.']]} title="From first call to launch, and beyond" sub="A clear four-stage process with a demo at every milestone." kicker="How we work" />

      {/* INDUSTRIES */}
      <section className="sec" aria-labelledby="ind-title">
        <div className="wrap">
          <SecHead kicker="Industries" title="Built for the way your industry works" sub="We have shipped products for these sectors, so we already know the features and rules that matter." id="ind-title" />
          <div className="grid border-l border-t border-nova/15 sm:grid-cols-2 lg:grid-cols-3">
            {industries.map(([ic, t, d, ex], i) => (
              <article key={t} data-rv style={{ '--d': `${(i % 3) * 0.07}s` }} className="spot relative flex min-h-[270px] flex-col border-b border-r border-nova/15 p-8 transition-colors duration-500 sm:p-10">
                <Icon name={ic} className="spot-ico h-9 w-9 text-nova" />
                <h3 className="mt-auto pt-10 text-xl font-medium">{t}</h3>
                <p className="mt-2.5 text-[.96rem] text-ink-soft transition-colors">{d}</p>
                <p className="spot-sub mt-5 border-t border-dashed border-nova/20 pt-4 text-sm font-bold text-nova">{ex}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* TECH: three marquee rows */}
      <section className="sec overflow-hidden bg-cream-200" aria-labelledby="tech-title">
        <div className="wrap"><SecHead kicker="Technology" title="Proven tools, chosen for your project" sub="We pick the stack that fits your budget, scale and team, not the one that is trending this month." id="tech-title" /></div>
        <div className="tm marquee flex flex-col gap-4">
          {TECH.map((row, r) => (
            <div key={r} className={`tm-row ${r === 1 ? 'rev' : ''}`} style={{ '--dur': `${46 + r * 8}s` }}>
              {[...row, ...row].map(([t, k], i) => (
                <span key={i} className="inline-flex items-center gap-3 whitespace-nowrap rounded-2xl bg-cream px-6 py-4 text-[1.02rem] font-extrabold shadow-[inset_0_0_0_1px_rgba(18,52,152,.14)] transition-[transform,background-color,color] duration-500 ease-out hover:-translate-y-1.5 hover:-rotate-2 hover:bg-volt hover:text-ink">{t}<small className="text-xs font-semibold opacity-60">{k}</small></span>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* HIRE */}
      <section className="sec dark-sec bg-nova text-cream" aria-labelledby="hire-title">
        <div className="wrap grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <Kicker>Hire developers</Kicker>
            <h2 id="hire-title" className="h-sec" data-split><Split text="Add skilled developers to your team this week" /></h2>
            <p className="lede mt-5 text-mist" data-rv>Dedicated engineers who work your hours, use your tools and report to you. Scale up or down month to month.</p>
            <div className="mt-10 grid max-w-md grid-cols-2 gap-6" data-rv><div><b className="block font-display text-3xl font-semibold">You choose</b><span className="text-sm text-mist">interview before you hire</span></div><div><b className="block font-display text-3xl font-semibold">Monthly</b><span className="text-sm text-mist">or hourly contracts</span></div></div>
          </div>
          <div data-rv style={{ '--d': '.1s' }}>
            <div className="flex flex-wrap gap-2.5">
              {roles.map((r) => <Link key={r.slug} to={`/hire/${r.slug}/`} className="rounded-full px-5 py-3 text-[.95rem] font-bold shadow-[inset_0_0_0_1px_rgba(254,250,239,.2)] transition-colors hover:bg-cream hover:text-nova">{r.label}</Link>)}
            </div>
            <div className="mt-9"><Btn to="/hire/" variant="cream">How hiring works</Btn></div>
          </div>
        </div>
      </section>

      {/* TESTIMONIAL: removed until a verified client quote with permission is available. TODO(owner) */}

      <Faq items={homeFaqs} />
      <Cta />
    </>
  );
}
