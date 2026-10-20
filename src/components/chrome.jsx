import { useEffect, useRef, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Brand, Btn, Icon, Wordmark, Split } from './ui.jsx';
import { services } from '../data/services.js';
import { roles, groups } from '../data/hire.js';
import { SITE } from '../data/site.js';

function Dropdown({ label, to, children, wide }) {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();
  const timer = useRef();
  useEffect(() => setOpen(false), [pathname]);
  const show = () => { clearTimeout(timer.current); setOpen(true); };
  const hide = () => { timer.current = setTimeout(() => setOpen(false), 120); };
  const active = pathname.startsWith(to);
  return (
    <li className="relative" onMouseEnter={show} onMouseLeave={hide}
      onFocus={show} onBlur={(e) => { if (!e.currentTarget.contains(e.relatedTarget)) hide(); }}
      onKeyDown={(e) => { if (e.key === 'Escape') setOpen(false); }}>
      <div className="flex items-center">
        <Link to={to} aria-current={active ? 'page' : undefined} className={`rounded-full py-2.5 pl-4 pr-1 text-[.95rem] font-semibold transition-colors ${active ? 'text-white' : 'text-white/80 hover:text-white'}`}>{label}</Link>
        <button type="button" aria-expanded={open} aria-label={`Show ${label} menu`} onClick={() => setOpen((v) => !v)} className="grid h-8 w-7 place-items-center text-white/70 hover:text-white">
          <Icon name="chev" className={`h-3 w-3 transition-transform duration-300 ${open ? 'rotate-180' : ''}`} />
        </button>
      </div>
      <div className={`absolute left-1/2 top-full z-50 pt-3 transition-[opacity,transform,visibility] duration-300 ease-out ${open ? 'visible translate-y-0 opacity-100' : 'invisible translate-y-2 opacity-0'}`} style={{ transform: `translateX(-50%) translateY(${open ? 0 : 8}px)` }}>
        <div className={`rounded-3xl bg-cream p-5 text-ink shadow-[0_30px_60px_-20px_rgba(6,19,64,.5)] ${wide ? 'w-[720px]' : 'w-[560px]'}`}>{children}</div>
      </div>
    </li>
  );
}

const linkCls = 'flex items-center gap-3 rounded-xl px-3 py-2.5 text-[.94rem] font-semibold transition-colors hover:bg-cream-200 hover:text-nova';

export function Header() {
  const [solid, setSolid] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [menu, setMenu] = useState(false);
  const { pathname } = useLocation();
  useEffect(() => setMenu(false), [pathname]);
  useEffect(() => {
    let last = window.scrollY;
    const on = () => {
      const y = window.scrollY;
      setSolid(y > 30);
      setHidden(y > 500 && y > last + 4);
      if (y < last - 4) setHidden(false);
      last = y;
    };
    on(); window.addEventListener('scroll', on, { passive: true });
    return () => window.removeEventListener('scroll', on);
  }, []);
  useEffect(() => {
    document.documentElement.classList.toggle('menu-open', menu);
    window.__lenis?.[menu ? 'stop' : 'start']();
    const k = (e) => { if (e.key === 'Escape') setMenu(false); };
    window.addEventListener('keydown', k);
    return () => window.removeEventListener('keydown', k);
  }, [menu]);

  return (
    <>
      <header className={`fixed inset-x-0 top-0 z-[100] pt-[env(safe-area-inset-top)] text-cream transition-[background-color,transform,box-shadow] duration-500 ease-out ${solid || menu ? 'bg-nova-900/95 shadow-[0_1px_0_rgba(254,250,239,.1)] backdrop-blur-md' : ''} ${hidden && !menu ? '-translate-y-full' : ''}`}>
        <div className="wrap flex h-20 items-center justify-between gap-6">
          <Brand />
          <nav aria-label="Main" className="hidden lg:block">
            <ul className="flex items-center gap-1">
              <Dropdown label="Services" to="/services">
                <div className="grid grid-cols-2 gap-1">
                  {services.map((s) => <Link key={s.slug} to={`/services/${s.slug}`} className={linkCls}><Icon name={s.icon} className="h-4 w-4 shrink-0 text-nova" />{s.name}</Link>)}
                  <Link to="/services" className={`${linkCls} text-nova`}><Icon name="arrow" className="h-4 w-4" />All services</Link>
                </div>
              </Dropdown>
              <Dropdown label="Hire developers" to="/hire" wide>
                <div className="grid grid-cols-3 gap-x-4">
                  {groups.map((g) => (
                    <div key={g}>
                      <p className="mx-3 mb-1 mt-1 text-xs font-extrabold uppercase tracking-wider text-ink-soft">{g}</p>
                      {roles.filter((r) => r.group === g).map((r) => <Link key={r.slug} to={`/hire/${r.slug}`} className={linkCls}>{r.label}</Link>)}
                    </div>
                  ))}
                </div>
                <Link to="/hire" className={`${linkCls} mt-2 border-t border-nova/10 pt-3 text-nova`}><Icon name="arrow" className="h-4 w-4" />How hiring works</Link>
              </Dropdown>
              {[['Work', '/portfolio'], ['About', '/about'], ['Careers', '/careers']].map(([n, to]) => (
                <li key={to}><NavLink to={to} className={({ isActive }) => `rounded-full px-4 py-2.5 text-[.95rem] font-semibold transition-colors ${isActive ? 'text-white' : 'text-white/80 hover:text-white'}`}>{n}</NavLink></li>
              ))}
            </ul>
          </nav>
          <div className="flex items-center gap-3">
            <Btn to="/contact" variant="cream" className="!hidden !px-5 !py-3.5 text-[.95rem] sm:!inline-flex">Start a project</Btn>
            <button type="button" onClick={() => setMenu((v) => !v)} aria-expanded={menu} aria-controls="mnav" aria-label={menu ? 'Close menu' : 'Open menu'} className="grid h-12 w-12 place-items-center rounded-full shadow-[inset_0_0_0_1.5px_rgba(254,250,239,.2)] lg:hidden">
              <Icon name={menu ? 'close' : 'menu'} className="h-5 w-5" />
            </button>
          </div>
        </div>
      </header>
      <div id="mnav" className={`fixed inset-0 z-[90] overflow-y-auto bg-nova-900 px-5 pb-10 pt-28 text-cream transition-[opacity,visibility] duration-500 lg:hidden ${menu ? 'visible opacity-100' : 'invisible opacity-0'}`} aria-hidden={!menu}>
        <nav aria-label="Mobile" className="wrap !px-0">
          {[['Home', '/'], ['Services', '/services'], ['Hire developers', '/hire'], ['Work', '/portfolio'], ['About', '/about'], ['Careers', '/careers'], ['Insights', '/blog'], ['Contact', '/contact']].map(([n, to], i) => (
            <Link key={to} to={to} tabIndex={menu ? 0 : -1} className={`block border-b border-white/10 py-3 font-display text-[clamp(1.6rem,7vw,2.3rem)] font-medium transition-[transform,opacity] duration-700 ease-out ${menu ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'}`} style={{ transitionDelay: menu ? `${0.08 + i * 0.04}s` : '0s' }}>{n}</Link>
          ))}
          <Btn to="/contact" variant="cream" className="mt-8" tabIndex={menu ? 0 : -1}>Start a project</Btn>
        </nav>
      </div>
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
          <Btn to="/contact" variant="cream">Start a project</Btn>
        </div>
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1fr_1fr]">
          <div>
            <Brand />
            <p className="mt-5 max-w-[34ch] text-[.97rem] text-mist">Websites, mobile apps and custom software for businesses that want to grow. Make together, grow together.</p>
            {SOCIALS.length > 0 && <div className="mt-6 flex gap-2.5">
              {SOCIALS.map(([ic, n, href]) => (
                <a key={ic} href={href} target="_blank" rel="noopener me" aria-label={`tweNova on ${n} (opens in a new tab)`} className="grid h-11 w-11 place-items-center rounded-full shadow-[inset_0_0_0_1px_rgba(254,250,239,.18)] transition-colors hover:bg-cream hover:text-nova"><Icon name={ic} className="h-[18px] w-[18px]" /></a>
              ))}
            </div>}
          </div>
          <div><h3 className={col + ' font-sans'}>Services</h3><ul className="space-y-2.5">{services.slice(0, 6).map((s) => <li key={s.slug}><Link className={a} to={`/services/${s.slug}`}>{s.name}</Link></li>)}<li><Link className={a} to="/services">All services</Link></li></ul></div>
          <div><h3 className={col + ' font-sans'}>Hire developers</h3><ul className="space-y-2.5">{roles.filter((r) => ['php', 'laravel', 'reactjs', 'nodejs', 'flutter', 'android'].some((k) => r.slug.startsWith(k + '-'))).map((r) => <li key={r.slug}><Link className={a} to={`/hire/${r.slug}`}>{r.label} developers</Link></li>)}<li><Link className={a} to="/hire">All roles</Link></li></ul></div>
          <div><h3 className={col + ' font-sans'}>Company</h3><ul className="space-y-2.5">{[['About', '/about'], ['Work', '/portfolio'], ['Careers', '/careers'], ['Insights', '/blog'], ['Contact', '/contact']].map(([n, to]) => <li key={to}><Link className={a} to={to}>{n}</Link></li>)}<li><a className={a} href={`mailto:${SITE.email}`}>{SITE.email}</a></li></ul></div>
        </div>
        <div data-word><Wordmark className="mt-20 h-auto w-full text-white/[0.07]" /></div>
        <div className="mt-8 flex flex-wrap justify-between gap-4 border-t border-white/10 pt-6 text-sm text-[#9FB0E4]">
          <span>© {new Date().getFullYear()} tweNova. All rights reserved.</span>
          <span className="font-display text-xs tracking-[0.3em]">INNOVATE. BUILD. EVOLVE.</span>
        </div>
      </div>
    </footer>
  );
}
