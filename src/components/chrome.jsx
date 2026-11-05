import { useEffect, useRef, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Brand, Btn, Icon, Wordmark, Split } from './ui.jsx';
import { services, coreServices } from '../data/services.js';
import { team } from '../data/team.js';
import { legal } from '../data/legal.js';
import { SITE } from '../data/site.js';
import { roles } from '../data/hire.js';

const COMPANY = [
  ['About us', '/about-us/', 'Who we are and who leads Twenova'],
  ['Our process', '/our-process/', 'How we take projects from idea to launch'],
  ['Contact', '/contact/', 'Email, phone and social media']
];
// Plain, instant navigation: no hover effects, no transitions. Dropdowns open on click only.
const navItem = (on) => `rounded-full px-4 py-2.5 text-[.95rem] font-semibold ${on ? 'bg-white/10 text-white' : 'text-white/80 hover:text-white'}`;

export function Header() {
  const [solid, setSolid] = useState(false);
  const [menu, setMenu] = useState(false);
  const [open, setOpen] = useState(null); // 'services' | 'company' | null
  const navRef = useRef(null);
  const { pathname } = useLocation();
  useEffect(() => { setMenu(false); setOpen(null); }, [pathname]);
  useEffect(() => {
    let raf = 0, cur = null;
    const on = () => {
      if (raf) return;
      raf = requestAnimationFrame(() => { raf = 0; const v = window.scrollY > 24; if (v !== cur) { cur = v; setSolid(v); } });
    };
    on(); window.addEventListener('scroll', on, { passive: true });
    return () => { window.removeEventListener('scroll', on); cancelAnimationFrame(raf); };
  }, []);
  useEffect(() => {
    if (!open) return;
    const away = (e) => { if (navRef.current && !navRef.current.contains(e.target)) setOpen(null); };
    const esc = (e) => { if (e.key === 'Escape') setOpen(null); };
    document.addEventListener('mousedown', away); document.addEventListener('keydown', esc);
    return () => { document.removeEventListener('mousedown', away); document.removeEventListener('keydown', esc); };
  }, [open]);
  useEffect(() => {
    document.documentElement.classList.toggle('menu-open', menu);
    window.__lenis?.[menu ? 'stop' : 'start']();
    const k = (e) => { if (e.key === 'Escape') setMenu(false); };
    window.addEventListener('keydown', k);
    return () => window.removeEventListener('keydown', k);
  }, [menu]);

  const inServices = pathname === '/services/' || services.some((x) => pathname.startsWith(`/${x.slug}/`));
  const inCompany = COMPANY.some(([, to]) => pathname.startsWith(to));
  const toggle = (k) => setOpen((v) => (v === k ? null : k));

  return (
    <>
      <header data-nav className={`fixed inset-x-0 top-0 z-[100] pt-[env(safe-area-inset-top)] text-cream ${solid || menu || open ? 'bg-nova-900 shadow-[0_1px_0_rgba(254,250,239,.1)]' : ''}`}>
        <div className="wrap flex h-[72px] items-center justify-between gap-6">
          <Brand />
          <nav aria-label="Main" className="hidden lg:block" ref={navRef}>
            <ul className="flex items-center gap-1">
              <li><NavLink end to="/" className={({ isActive }) => navItem(isActive)}>Home</NavLink></li>
              <li><NavLink to="/portfolio/" className={({ isActive }) => navItem(isActive)}>Work</NavLink></li>
              <li><NavLink to="/products/" className={({ isActive }) => navItem(isActive)}>Products</NavLink></li>
              <li className="relative">
                <button type="button" aria-expanded={open === 'services'} aria-controls="dd-services" onClick={() => toggle('services')} className={`${navItem(open === 'services' || inServices)} inline-flex items-center gap-1.5`}>
                  Services <Icon name="chev" className={`h-3 w-3 ${open === 'services' ? 'rotate-180' : ''}`} />
                </button>
                {open === 'services' && (
                  <div id="dd-services" className="absolute left-1/2 top-full z-50 mt-3 max-h-[calc(100vh-110px)] w-[min(640px,calc(100vw-48px))] -translate-x-1/2 overflow-y-auto overscroll-contain rounded-3xl bg-nova-900 p-3 text-cream shadow-[0_30px_60px_-20px_rgba(0,0,0,.6)] ring-1 ring-white/10" data-lenis-prevent>
                    <ul className="grid grid-cols-2 gap-0.5">
                      {services.map((x) => (
                        <li key={x.slug}><Link to={`/${x.slug}/`} className="flex items-center gap-3 rounded-xl px-3.5 py-2.5 text-[.92rem] font-semibold leading-snug hover:bg-white/10">
                          <Icon name={x.icon} className="h-4 w-4 shrink-0 text-volt" />{x.name}</Link></li>
                      ))}
                    </ul>
                    <Link to="/services/" className="mt-1.5 flex items-center gap-2 border-t border-white/10 px-3.5 pb-1.5 pt-3 text-sm font-bold text-volt hover:underline">All services <Icon name="arrow" className="h-4 w-4" /></Link>
                  </div>
                )}
              </li>
              <li className="relative">
                <button type="button" aria-expanded={open === 'company'} aria-controls="dd-company" onClick={() => toggle('company')} className={`${navItem(open === 'company' || inCompany)} inline-flex items-center gap-1.5`}>
                  Company <Icon name="chev" className={`h-3 w-3 ${open === 'company' ? 'rotate-180' : ''}`} />
                </button>
                {open === 'company' && (
                  <div id="dd-company" className="absolute right-0 top-full z-50 mt-3 w-[340px] rounded-3xl bg-nova-900 p-3 text-cream shadow-[0_30px_60px_-20px_rgba(0,0,0,.6)] ring-1 ring-white/10">
                    <ul>
                      {COMPANY.map(([n, to, d]) => (
                        <li key={to}><Link to={to} className={`block rounded-2xl px-4 py-3.5 hover:bg-white/10 ${pathname.startsWith(to) ? 'bg-white/10' : ''}`}>
                          <span className="block text-[1.02rem] font-bold">{n}</span><span className="mt-0.5 block text-sm text-mist">{d}</span></Link></li>
                      ))}
                    </ul>
                  </div>
                )}
              </li>
            </ul>
          </nav>
          <div className="flex items-center gap-3">
            <Link to="/contact/" className="hidden items-center gap-2 rounded-full bg-cream px-5 py-3 text-[.95rem] font-extrabold text-nova hover:bg-volt hover:text-ink sm:inline-flex">Start a project <Icon name="arrow" className="h-4 w-4" /></Link>
            <button type="button" onClick={() => setMenu((v) => !v)} aria-expanded={menu} aria-controls="mnav" aria-label={menu ? 'Close menu' : 'Open menu'} className="grid h-12 w-12 place-items-center rounded-full shadow-[inset_0_0_0_1.5px_rgba(254,250,239,.25)] lg:hidden">
              <Icon name={menu ? 'close' : 'menu'} className="h-5 w-5" />
            </button>
          </div>
        </div>
      </header>
      {menu && (
        <div id="mnav" className="fixed inset-0 z-[90] overflow-y-auto bg-nova-900 px-5 pb-10 pt-24 text-cream lg:hidden">
          <nav aria-label="Mobile" className="wrap !px-0">
            <ul>
              {[['Home', '/'], ['Work', '/portfolio/'], ['Products', '/products/'], ['Services', '/services/'], ...COMPANY.map(([n, to]) => [n, to])].map(([n, to]) => (
                <li key={to}><Link to={to} className={`block border-b border-white/10 py-4 font-display text-[clamp(1.5rem,6.5vw,2.1rem)] font-medium ${pathname === to ? 'text-volt' : ''}`}>{n}</Link></li>
              ))}
            </ul>
            <Link to="/contact/" className="mt-8 inline-flex items-center gap-2 rounded-full bg-cream px-6 py-4 font-extrabold text-nova">Start a project <Icon name="arrow" className="h-4 w-4" /></Link>
          </nav>
        </div>
      )}
    </>
  );
}

const SOCIALS = [['in', 'LinkedIn', SITE.social?.linkedin], ['ig', 'Instagram', SITE.social?.instagram], ['fb', 'Facebook', SITE.social?.facebook]].filter(([, , u]) => u);

export function Footer() {
  const col = 'mb-4 text-sm font-bold text-[#9FB0E4]';
  const a = 'text-[#E5EBFC] transition-colors hover:text-white';
  return (
    <footer className="dark-sec overflow-hidden bg-nova-900 pb-[calc(2rem+env(safe-area-inset-bottom))] pt-20 text-cream sm:pt-28">
      <div className="wrap">
        <div className="mb-16 flex flex-wrap items-end justify-between gap-8 border-b border-white/10 pb-16">
          <h2 className="max-w-[14ch] text-[clamp(2.2rem,6vw,5rem)] font-semibold tracking-[-0.045em]" data-split><Split text="Let’s make something people love." /></h2>
          <Btn to="/contact/" variant="cream">Start a project</Btn>
        </div>
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1fr_1fr_1fr]">
          <div>
            <Brand />
            <p className="mt-5 max-w-[34ch] text-[.97rem] text-mist">Software development agency based in {SITE.country}, building websites, mobile apps, custom software and SaaS products for clients in India and around the world.</p>
            <p className="mt-4 space-y-1 text-[.95rem]"><a className={`${a} block`} href={`mailto:${SITE.email}`}>{SITE.email}</a>{SITE.phones.map((ph) => <a key={ph} className={`${a} block`} href={`tel:${ph.replace(/\s/g, '')}`}>{ph}</a>)}</p>
            {SOCIALS.length > 0 && <div className="mt-6 flex gap-2.5">
              {SOCIALS.map(([ic, n, href]) => (
                <a key={ic} href={href} target="_blank" rel="noopener me" aria-label={`Twenova on ${n} (opens in a new tab)`} className="grid h-11 w-11 place-items-center rounded-full shadow-[inset_0_0_0_1px_rgba(254,250,239,.18)] transition-colors hover:bg-cream hover:text-nova"><Icon name={ic} className="h-[18px] w-[18px]" /></a>
              ))}
            </div>}
          </div>
          <div><h3 className={col + ' font-sans'}>Services</h3><ul className="space-y-2.5">{coreServices.map((s) => <li key={s.slug}><Link className={a} to={`/${s.slug}/`}>{s.name}</Link></li>)}<li><Link className={a} to="/services/">All services</Link></li></ul></div>
          <div><h3 className={col + ' font-sans'}>Hire developers</h3><ul className="space-y-2.5">{roles.filter((r) => ['php', 'laravel', 'reactjs', 'nodejs', 'flutter', 'android'].some((k) => r.slug.startsWith(k + '-'))).map((r) => <li key={r.slug}><Link className={a} to={`/hire/${r.slug}/`}>{r.label} developers</Link></li>)}<li><Link className={a} to="/hire/">All roles</Link></li></ul></div>
          <div><h3 className={col + ' font-sans'}>Company</h3><ul className="space-y-2.5">{[['About us', '/about-us/'], ...team.map((m) => [m.role, `/${m.slug}/`]), ['Portfolio', '/portfolio/'], ['Products', '/products/'], ['Careers', '/careers/'], ['Contact', '/contact/']].map(([n, to]) => <li key={to}><Link className={a} to={to}>{n}</Link></li>)}</ul></div>
          <div><h3 className={col + ' font-sans'}>Resources</h3><ul className="space-y-2.5">{[['Our process', '/our-process/'], ['Case studies', '/case-studies/'], ['Blog', '/blog/'], ['FAQs', '/faqs/']].map(([n, to]) => <li key={to}><Link className={a} to={to}>{n}</Link></li>)}</ul></div>
        </div>
        <div data-word><Wordmark className="mt-20 h-auto w-full text-white/[0.07]" /></div>
        <div className="mt-8 flex flex-wrap justify-between gap-4 border-t border-white/10 pt-6 text-sm text-[#9FB0E4]">
          <span>© {new Date().getFullYear()} {SITE.legalName}. All rights reserved.</span>
          <nav aria-label="Legal"><ul className="flex flex-wrap gap-x-5 gap-y-2">{legal.map((d) => <li key={d.slug}><Link className="transition-colors hover:text-white" to={`/${d.slug}/`}>{d.slug === 'usage-rules' ? 'Rules' : d.title}</Link></li>)}</ul></nav>
          <span className="font-display text-xs tracking-[0.3em] text-volt">INNOVATE. BUILD. EVOLVE.</span>
        </div>
      </div>
    </footer>
  );
}
