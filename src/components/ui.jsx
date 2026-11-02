import { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { ICONS } from '../data/icons.js';
import { MARK, WORD } from '../data/logo.js';

import BinaryRain from './BinaryRain.jsx';

export function Icon({ name, className = 'h-5 w-5' }) {
  return <svg viewBox="0 0 24 24" aria-hidden="true" className={className} dangerouslySetInnerHTML={{ __html: ICONS[name] || '' }} />;
}

export function Mark({ className = '' }) {
  return (
    <svg viewBox="0 0 2190 1332" aria-hidden="true" className={className}>
      <g transform={MARK.t} fill="currentColor">{MARK.d.map((d, i) => <path key={i} d={d} />)}</g>
    </svg>
  );
}
export function Wordmark({ className = '' }) {
  return (
    <svg viewBox="0 0 4758 588" aria-hidden="true" className={className}>
      <g transform={WORD.t} fill="currentColor">{WORD.d.map((d, i) => <path key={i} d={d} />)}</g>
    </svg>
  );
}
export function Brand({ className = '' }) {
  return (
    <Link to="/" aria-label="Twenova home" className={`flex shrink-0 items-center gap-3 ${className}`}>
      <Mark className="h-auto w-11 sm:w-12" />
      <Wordmark className="h-auto w-[108px] sm:w-[128px]" />
    </Link>
  );
}

/** Button that works for internal routes, hashes, external links and mailto */
export function Btn({ to, children, variant = 'primary', icon = true, className = '', ...rest }) {
  const cls = `btn btn-${variant} ${className}`;
  const inner = <>{children}{icon && <Icon name="arrow" />}</>;
  if (!to) return <button className={cls} {...rest}>{inner}</button>;
  if (/^(https?:|mailto:|tel:)/.test(to)) return <a href={to} className={cls} {...(to.startsWith('http') ? { target: '_blank', rel: 'noopener' } : {})} {...rest}>{inner}</a>;
  return <Link to={to} className={cls} {...rest}>{inner}</Link>;
}

/** Wraps each word so headings can rise word by word. */
export function Split({ text }) {
  if (typeof text !== 'string') return text;
  const words = text.split(' ');
  return words.map((w, i) => <Fragment key={i}><span className="wm"><span className="wi">{w}</span></span>{i < words.length - 1 ? ' ' : ''}</Fragment>);
}

/** Words that light up while scrolling. */
export function Scrub({ text }) {
  return text.split(' ').map((w, i) => <span key={i} className="sw">{w} </span>);
}

/** Headline whose letters decode from binary on load. Real text stays in aria-label for SEO and screen readers. */
export function Decode({ lines, className = '' }) {
  return (
    <span className={`decode block ${className}`} aria-label={lines.map((l) => l.text).join(' ')}>
      {lines.map((l, i) => (
        <span key={i} aria-hidden="true" className={`block ${l.className || ''}`}>
          {l.text.split(' ').map((w, k, arr) => (
            <Fragment key={k}>
              <span className="inline-block whitespace-nowrap">{w.split('').map((c, j) => <span key={j} className="c" data-t={c}>{c}</span>)}</span>
              {k < arr.length - 1 ? ' ' : ''}
            </Fragment>
          ))}
        </span>
      ))}
    </span>
  );
}

export function Kicker({ children }) {
  return <p className="kicker"><span className="h-2 w-2 rounded-full bg-volt shadow-[0_0_0_1.5px_currentColor]" aria-hidden="true" />{children}</p>;
}

export function SecHead({ kicker, title, sub, id, dark }) {
  return (
    <div className="mb-12 grid items-end gap-6 lg:mb-16 lg:grid-cols-[1.15fr_.85fr] lg:gap-16">
      <div data-rv>
        {kicker && <Kicker>{kicker}</Kicker>}
        <h2 id={id} className="h-sec" data-split><Split text={title} /></h2>
      </div>
      {sub && <p data-rv style={{ '--d': '.1s' }} className={`max-w-[46ch] ${dark ? 'text-mist' : 'text-ink-soft'}`}>{sub}</p>}
    </div>
  );
}

export function Faq({ items, title = 'Questions clients ask us first', id = 'faq' }) {
  return (
    <section className="sec bg-cream-200" aria-labelledby={id}>
      <div className="wrap faq grid gap-10 lg:grid-cols-[.8fr_1.2fr] lg:gap-20">
        <div data-rv>
          <Kicker>FAQ</Kicker>
          <h2 id={id} className="h-sec" data-split><Split text={title} /></h2>
          <p className="mt-5 text-ink-soft">Something else on your mind? Email <a className="font-bold text-nova" href="mailto:twenovaitc@gmail.com">twenovaitc@gmail.com</a>.</p>
        </div>
        <div data-rv style={{ '--d': '.1s' }}>
          {items.map(([q, a], i) => (
            <details key={i} className={`border-b border-nova/15 ${i === 0 ? 'border-t' : ''}`}>
              <summary className="flex cursor-pointer items-center justify-between gap-5 py-6 text-[1.08rem] font-bold transition-colors hover:text-nova">
                {q}<span className="pm" aria-hidden="true" />
              </summary>
              <p className="pb-6 pr-0 text-ink-soft sm:pr-14">{a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Steps({ steps, title, sub, kicker = 'How it works', id = 'steps' }) {
  return (
    <section className="sec dark-sec bg-nova-700 text-cream" aria-labelledby={id}>
      <div className="wrap">
        <SecHead kicker={kicker} title={title} sub={sub} id={id} dark />
        <div className="relative" data-steps>
          <div className="absolute left-7 right-7 top-7 hidden h-[2px] overflow-hidden bg-white/20 lg:block" aria-hidden="true"><i className="rail-fill absolute inset-0 bg-volt" /></div>
          <ol className="relative grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
            {steps.map(([t, d], i) => (
              <li key={i} data-rv data-step style={{ '--d': `${i * 0.08}s` }} className="relative">
                <span className="step-n grid h-14 w-14 place-items-center rounded-full bg-nova-700 font-display text-base font-semibold text-cream shadow-[inset_0_0_0_1.5px_rgba(254,250,239,.4)]">{String(i + 1).padStart(2, '0')}</span>
                <h3 className="mt-7 text-xl font-medium">{t}</h3>
                <p className="mt-3 text-[.98rem] text-mist">{d}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

export function IconCards({ items, cols = 3, dark = false, linkBase }) {
  const grid = { 1: '', 2: 'sm:grid-cols-2', 3: 'sm:grid-cols-2 lg:grid-cols-3', 4: 'sm:grid-cols-2 lg:grid-cols-4' }[cols];
  return (
    <div className={`grid gap-5 ${grid}`}>
      {items.map(([ic, t, d, to], i) => (
        <article key={t} data-rv style={{ '--d': `${(i % cols) * 0.07}s` }} className={`${dark ? 'card-dark' : 'card spot'} group flex flex-col`}>
          <span className={`ico ${dark ? '!bg-cream !text-nova' : 'spot-ico'}`}><Icon name={ic} /></span>
          <h3 className="mt-7 text-xl font-medium">{to ? <Link to={to} className="stretched outline-none">{t}</Link> : t}</h3>
          <p className={`mt-3 text-[.97rem] ${dark ? 'text-mist' : 'text-ink-soft'}`}>{d}</p>
          {to && <span className="spot-sub mt-6 inline-flex items-center gap-2 text-sm font-bold text-nova transition-transform duration-500 ease-out group-hover:translate-x-1">Learn more <Icon name="arrow" className="h-4 w-4" /></span>}
        </article>
      ))}
    </div>
  );
}

export function Crumbs({ items }) {
  return (
    <nav aria-label="Breadcrumb" className="mb-6 flex flex-wrap items-center gap-2 text-sm font-semibold text-mist hero-in">
      {items.map(([n, to], i) => (
        <span key={n} className="flex items-center gap-2">
          {i > 0 && <Icon name="crumb" className="h-3 w-3 text-sky-nova" />}
          {i < items.length - 1 ? <Link to={to} className="opacity-80 hover:underline hover:underline-offset-4 hover:opacity-100">{n}</Link> : <span aria-current="page">{n}</span>}
        </span>
      ))}
    </nav>
  );
}

export function PageHero({ crumbs, title, lede, children, tags, stats, icon = 'code' }) {
  return (
    <section className="dark-sec relative isolate overflow-hidden bg-nova-900 pb-20 pt-36 text-cream sm:pb-24 sm:pt-44 lg:pb-28" aria-labelledby="page-title">
      <BinaryRain opacity={0.55} />
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(65%_80%_at_12%_70%,rgba(6,19,64,.96),rgba(6,19,64,.55)_60%,transparent)] " />
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(50%_60%_at_80%_30%,rgba(27,66,184,.45),transparent_70%),radial-gradient(40%_50%_at_0%_100%,rgba(18,52,152,.35),transparent_70%)]" />
      <div className="wrap relative grid items-center gap-12 lg:grid-cols-[1.4fr_.6fr]">
        <div data-par>
          <Crumbs items={crumbs} />
          <h1 id="page-title" className="hero-in text-[clamp(2.3rem,5.4vw,4.6rem)] font-semibold leading-[1.02] tracking-[-0.04em]" style={{ '--d': '.05s' }}>{title}</h1>
          {lede && <p className="lede hero-in mt-6 text-[#D7DFF8]" style={{ '--d': '.15s' }}>{lede}</p>}
          {children && <div className="hero-in mt-9 flex flex-wrap gap-3" style={{ '--d': '.25s' }}>{children}</div>}
          {tags && <div className="hero-in mt-8 flex flex-wrap gap-2" style={{ '--d': '.3s' }}>{tags.map((t) => <span key={t} className="chip">{t}</span>)}</div>}
          {stats && (
            <dl className="hero-in mt-12 grid max-w-2xl grid-cols-2 gap-6 border-t border-white/15 pt-7 sm:grid-cols-3" style={{ '--d': '.35s' }}>
              {stats.map(([a, b]) => <div key={b}><dt className="sr-only">{b}</dt><dd className="font-display text-3xl font-semibold tracking-[-0.04em] sm:text-4xl">{a}</dd><dd className="mt-2 text-sm text-mist">{b}</dd></div>)}
            </dl>
          )}
        </div>
        <div aria-hidden="true" className="hero-in hidden min-h-[320px] place-items-center [perspective:1000px] lg:grid" style={{ '--d': '.2s' }}>
          <div className="cube cube--xl" style={{ '--i': 0 }}>
            <b><Icon name={icon} /></b><b><Mark className="w-[46%]" /></b><b><Icon name={icon} /></b><b><Mark className="w-[46%]" /></b><b>0101</b><b>1010</b>
          </div>
        </div>
      </div>
    </section>
  );
}
