import { useState, useId } from 'react';
import { Link } from 'react-router-dom';
import { Icon, Mark, Btn, Split } from './ui.jsx';
import { SITE } from '../data/site.js';

const OPTIONS = ['New website', 'Mobile app', 'Custom software', 'UI/UX design', 'PR campaign', 'Branding & logo', 'E-commerce store', 'AI solution', 'Security audit', 'Hire developers'];

const ENDPOINT = (import.meta.env?.VITE_FORM_ENDPOINT || SITE.formEndpoint || '').trim();
const LABELS = { name: 'Name', email: 'Email', phone: 'Phone', company: 'Company', type: 'Need', service: 'Services', budget: 'Budget', message: 'Message' };

export function useForm() {
  const [errors, setErrors] = useState({});
  const [state, setState] = useState({ status: 'idle', note: '' });
  async function onSubmit(e) {
    e.preventDefault();
    const form = e.currentTarget;
    const f = new FormData(form);
    if (String(f.get('_gotcha') || '')) return; // spam bot filled the hidden field
    const er = {};
    if (!String(f.get('name') || '').trim()) er.name = 'Enter your name.';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(f.get('email') || ''))) er.email = 'Enter a valid email address.';
    setErrors(er);
    if (Object.keys(er).length) { form.querySelector(`[name="${Object.keys(er)[0]}"]`)?.focus(); return; }

    const fields = {};
    for (const [k, v] of f.entries()) { if (k === '_gotcha' || !String(v).trim()) continue; fields[k] = fields[k] ? fields[k] + ', ' + v : String(v); }
    fields.page = typeof window !== 'undefined' ? window.location.pathname : '';

    if (ENDPOINT) {
      setState({ status: 'sending', note: 'Sending…' });
      try {
        const res = await fetch(ENDPOINT, { method: 'POST', headers: { Accept: 'application/json', 'Content-Type': 'application/json' }, body: JSON.stringify({ ...fields, _subject: `New enquiry from ${fields.name}` }) });
        if (!res.ok) throw new Error(String(res.status));
        setState({ status: 'sent', note: 'Thank you! Your enquiry has been sent. We will reply within one working day.' });
        form.reset();
      } catch {
        setState({ status: 'error', note: `Sorry, the message could not be sent. Please email us at ${SITE.email}.` });
      }
      return;
    }
    // No endpoint yet: open the visitor's email app with everything filled in.
    const body = Object.entries(fields).map(([k, v]) => `${LABELS[k] || k}: ${v}`).join('\n');
    window.location.href = `mailto:${SITE.email}?subject=${encodeURIComponent(`Project enquiry from ${fields.name}`)}&body=${encodeURIComponent(body)}`;
    setState({ status: 'sent', note: `Your email app should now open with the message ready. Press send there, or email ${SITE.email} directly.` });
  }
  return { errors, ...state, sent: state.status !== 'idle', onSubmit };
}

// Hidden field that only bots fill in.
export function Honeypot() {
  return <input type="text" name="_gotcha" tabIndex={-1} autoComplete="off" aria-hidden="true" className="absolute -left-[9999px] h-0 w-0 opacity-0" />;
}

export function FormNote({ status, note, dark }) {
  if (status === 'idle') return null;
  const tone = status === 'error' ? (dark ? 'bg-[#FFB49A]/15 text-[#FFD9CB]' : 'bg-[#B3261E]/10 text-[#8C1D18]') : (dark ? 'bg-emerald-300/15 text-emerald-100' : 'bg-nova/10 text-nova');
  return <p role="status" aria-live="polite" className={`rounded-2xl p-4 font-bold ${tone}`}>{note}</p>;
}

export function Field({ name, label, type = 'text', error, textarea, children, ...rest }) {
  const id = useId();
  const common = { id, name, placeholder: ' ', 'aria-invalid': !!error, 'aria-describedby': error ? id + '-e' : undefined, ...rest };
  return (
    <div className="field">
      {children ? <select id={id} name={name} {...rest}>{children}</select> : textarea ? <textarea {...common} /> : <input type={type} {...common} />}
      <label htmlFor={id}>{label}</label>
      {error && <p id={id + '-e'} className="mt-1.5 text-sm font-semibold text-[#FFB49A]">{error}</p>}
    </div>
  );
}

export function Cta({ preset = 'New website', title = 'Have an idea? Let’s build it together.', sub = 'Tell us what you need. We will reply within one working day with next steps and a rough estimate.' }) {
  const { errors, status, note, onSubmit } = useForm();
  const opts = OPTIONS.includes(preset) ? OPTIONS : [preset, ...OPTIONS];
  return (
    <div className="sec" id="start">
      <div className="wrap">
        <section aria-labelledby="cta-title" data-cta className="dark-sec relative isolate overflow-hidden rounded-[2rem] bg-nova px-6 py-12 text-cream sm:rounded-[2.75rem] sm:px-12 sm:py-16 lg:px-20 lg:py-20">
          <Mark className="pointer-events-none absolute -bottom-[22%] -right-[8%] -z-10 w-[min(64%,640px)] rotate-[-10deg] text-white/[0.06]" />
          <div className="grid items-end gap-10 lg:grid-cols-[1.1fr_.9fr] lg:gap-16">
            <div data-rv>
              <h2 id="cta-title" className="h-sec" data-split><Split text={title} /></h2>
              <p className="lede mt-5 text-mist">{sub}</p>
              <p className="mt-7 text-mist">Prefer email? <a href={`mailto:${SITE.email}`} className="font-bold text-cream underline underline-offset-4">{SITE.email}</a></p>
            </div>
            <form noValidate onSubmit={onSubmit} className="form-dark relative grid gap-3.5" data-rv style={{ '--d': '.1s' }}>
              <div className="grid gap-3.5 sm:grid-cols-2">
                <Field name="name" label="Your name" autoComplete="name" error={errors.name} />
                <Field name="email" type="email" label="Work email" autoComplete="email" error={errors.email} />
              </div>
              <Field name="type" label="What do you need?" defaultValue={preset}>{opts.map((o) => <option key={o}>{o}</option>)}</Field>
              <Field name="message" label="Tell us about your project (optional)" textarea />
              <Honeypot />
              <div><Btn variant="cream" type="submit" disabled={status === 'sending'}>{status === 'sending' ? 'Sending…' : 'Send enquiry'}</Btn></div>
              <FormNote status={status} note={note} dark />
            </form>
          </div>
        </section>
      </div>
    </div>
  );
}

export function ProjectCard({ p, i = 0, className = '', rv = true }) {
  return (
    <article {...(rv ? { 'data-rv': true } : {})} style={{ '--d': `${(i % 2) * 0.08}s` }} className={`group flex flex-col gap-4 ${className}`}>
      <div className="frame relative aspect-[16/11] overflow-hidden rounded-[1.75rem] text-cream shadow-[0_34px_60px_-38px_rgba(6,19,64,.6)] transition-transform duration-700 ease-out" style={{ background: p.color }} data-cursor="Visit site" data-tilt>
        <div className="absolute inset-x-0 top-0 z-10 flex h-11 items-center gap-1.5 bg-black/20 px-4" aria-hidden="true">
          <i className="h-2.5 w-2.5 rounded-full bg-white/35" /><i className="h-2.5 w-2.5 rounded-full bg-white/35" /><i className="h-2.5 w-2.5 rounded-full bg-white/35" />
          <span className="ml-3 truncate rounded-full bg-white/10 px-3.5 py-1 text-xs font-semibold">{p.domain}</span>
        </div>
        <div className="absolute inset-0 top-11 flex flex-col justify-end p-7 transition-transform duration-[1.2s] ease-out group-hover:scale-[1.03] sm:p-10" aria-hidden="true">
          <span className="mono absolute right-6 top-6 font-display text-[clamp(4.5rem,11vw,9rem)] font-bold leading-none tracking-[-0.07em] text-white/10">{p.mono}</span>
          <span className="font-display text-[clamp(1.6rem,3vw,2.6rem)] font-semibold leading-none tracking-[-0.04em]">{p.name}</span>
          <span className="mt-3 max-w-[38ch] text-[.97rem] text-white/80">{p.line}</span>
        </div>
        <a href={p.url} target="_blank" rel="noopener" className="absolute inset-0 z-20 rounded-[inherit]" aria-label={`Visit ${p.name} website (opens in a new tab)`} />
      </div>
      <div className="flex items-start justify-between gap-4">
        <div><h3 className="text-lg font-semibold">{p.name}</h3><p className="mt-1 text-sm text-ink-soft">{p.category} · {p.owner || 'Client project'}</p></div>
        <div className="flex flex-wrap justify-end gap-2">{p.tags.map((t) => <span key={t} className="chip !py-1.5 !text-xs text-ink-soft">{t}</span>)}</div>
      </div>
    </article>
  );
}

const SUDOKU = (() => {
  let seed = 3; const rnd = () => ((seed = (seed * 9301 + 49297) % 233280) / 233280);
  const out = [];
  for (let r = 0; r < 9; r++) for (let c = 0; c < 9; c++) { const v = ((r * 3 + Math.floor(r / 3) + c) % 9) + 1, x = rnd(); out.push(x < 0.45 ? [v, ''] : x < 0.62 ? [v, 'u'] : ['', '']); }
  return out;
})();

export function Screen({ kind }) {
  const bar = <div className="appbar"><i /><i /><i /><i /></div>;
  if (kind === 'pharm') return <div className="screen"><small>Find medicines</small><h4>PharmSearch</h4><div className="ui-search">Search: Paracetamol</div>{[['Paracetamol 500', 'In stock'], ['Pantoprazole 40', '2 stores'], ['Azithromycin', 'In stock'], ['Cetirizine 10', 'Nearby'], ['Vitamin D3', 'In stock']].map(([a, b]) => <div key={a} className="ui-row">{a}<span>{b}</span></div>)}{bar}</div>;
  if (kind === 'health') return <div className="screen"><small>Good morning</small><h4>Your health</h4><div className="ui-card"><small className="!text-mist">Heart rate</small><div className="font-display text-xl">72 bpm</div></div>{[['Dr. appointment', '10:30'], ['Lab report', 'Ready'], ['Medicine reminder', '9:00 PM'], ['Blood pressure', '120/80']].map(([a, b]) => <div key={a} className="ui-row">{a}<span>{b}</span></div>)}{bar}</div>;
  if (kind === 'erp') return <div className="screen"><small>Dashboard</small><h4>ERP School</h4><div className="mt-2 grid grid-cols-2 gap-1.5"><div className="ui-row !block"><small>Attendance</small><b className="block font-display text-sm text-nova">94%</b></div><div className="ui-row !block"><small>Fees paid</small><b className="block font-display text-sm text-nova">₹4.2L</b></div></div><div className="bars">{[60, 85, 45, 95, 70, 80].map((h, i) => <i key={i} style={{ height: h + '%' }} />)}</div>{[['Class 8-B homework', 'New'], ['Parent meeting', 'Sat']].map(([a, b]) => <div key={a} className="ui-row">{a}<span>{b}</span></div>)}{bar}</div>;
  if (kind === 'class') return <div className="screen"><small>Continue learning</small><h4>Smit Sir</h4><div className="mt-2.5 grid aspect-[16/10] place-items-center rounded-xl bg-gradient-to-br from-nova to-nova-900"><span className="grid h-9 w-9 place-items-center rounded-full bg-cream"><span className="ml-0.5 border-y-[6px] border-l-[10px] border-y-transparent border-l-nova" /></span></div>{[['Chapter 4: Algebra', '32 min'], ['Weekly test', 'Sun'], ['Doubt session', 'Live']].map(([a, b]) => <div key={a} className="ui-row">{a}<span>{b}</span></div>)}{bar}</div>;
  return <div className="screen"><small>Medium, 04:12</small><h4>Sudoku</h4><div className="sudoku">{SUDOKU.map(([v, c], i) => <i key={i} className={c}>{v}</i>)}</div><div className="mt-auto grid grid-cols-5 gap-1">{[1, 2, 3, 4, 5, 6, 7, 8, 9, '⌫'].map((n) => <i key={n} className="grid h-6 place-items-center rounded-md bg-[#EEF2FF] font-extrabold not-italic text-nova">{n}</i>)}</div></div>;
}

export function AppPhone({ a, className = '' }) {
  return (
    <div className={`group relative ${className}`} data-cursor="Open app">
      <div className="phone transition-transform duration-700 ease-out group-hover:-translate-y-3"><Screen kind={a.screen} /></div>
      <a href={a.url} target="_blank" rel="noopener" className="absolute inset-0 z-10 rounded-[34px]" aria-label={`${a.name} on ${a.store} (opens in a new tab)`} />
      <div className="mt-5 text-center"><b className="block text-[.95rem]">{a.name}</b><span className="mt-0.5 inline-flex items-center gap-1.5 text-xs text-mist"><Icon name={a.store === 'App Store' ? 'apple' : 'play'} className="h-3.5 w-3.5" />{a.category}, {a.store}</span></div>
    </div>
  );
}

/** Card that links to a security audit case study. */
export function CaseCard({ c, i = 0 }) {
  return (
    <article data-rv style={{ '--d': `${(i % 3) * 0.08}s` }} className="group relative flex flex-col overflow-hidden rounded-[1.75rem] text-cream shadow-[0_34px_60px_-38px_rgba(6,19,64,.6)]" data-cursor="Read case">
      <div className="relative flex min-h-[260px] flex-col justify-between p-7 sm:p-9" style={{ background: c.color }}>
        <div className="flex items-center justify-between">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3.5 py-1.5 text-xs font-bold"><Icon name="shield" className="h-3.5 w-3.5" />{c.service}</span>
          <span className="font-display text-sm font-semibold text-white/60">{c.sector}</span>
        </div>
        <span aria-hidden="true" className="pointer-events-none absolute -bottom-4 right-4 font-display text-[7rem] font-bold leading-none tracking-[-0.07em] text-white/10 transition-transform duration-700 ease-out group-hover:-translate-y-2">{c.mono}</span>
        <div className="relative mt-10">
          <h3 className="font-display text-[clamp(1.4rem,2.4vw,1.9rem)] font-semibold leading-tight tracking-[-0.03em]"><Link to={`/case-studies/${c.slug}/`} className="stretched">{c.client}</Link></h3>
          <p className="mt-3 max-w-[40ch] text-[.95rem] text-white/80">{c.summary}</p>
          <span className="mt-6 inline-flex items-center gap-2 text-sm font-bold">Read case study <Icon name="arrow" className="h-4 w-4 transition-transform duration-500 ease-out group-hover:translate-x-1" /></span>
        </div>
      </div>
    </article>
  );
}

/** Card for a Twenova-owned product. */
export function ProductCard({ p, i = 0 }) {
  return (
    <article data-rv style={{ '--d': `${(i % 2) * 0.08}s` }} className="group relative flex flex-col overflow-hidden rounded-[2rem] bg-nova-900 text-cream shadow-[0_34px_60px_-38px_rgba(6,19,64,.6)]" data-cursor="View product">
      <div className="relative overflow-hidden">
        <img src={p.image} alt={`${p.name} by Twenova: ${p.category}`} width={p.imageW} height={p.imageH} loading="lazy" decoding="async" className="aspect-[16/10] w-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.04]" />
        <span className="absolute left-5 top-5 inline-flex items-center gap-2 rounded-full bg-volt px-3.5 py-1.5 text-xs font-extrabold text-ink"><i className="h-1.5 w-1.5 rounded-full bg-ink" />Twenova product · {p.status}</span>
      </div>
      <div className="flex flex-1 flex-col p-7 sm:p-9">
        <p className="text-sm font-bold text-mist">{p.category}</p>
        <h3 className="mt-2 font-display text-[clamp(1.5rem,2.6vw,2rem)] font-semibold tracking-[-0.03em]"><Link to={`/products/${p.slug}/`} className="stretched">{p.name}</Link></h3>
        <p className="mt-3 text-[#D7DFF8]">{p.tagline}</p>
        <span className="mt-auto pt-7 inline-flex items-center gap-2 text-sm font-extrabold text-volt">See the product <Icon name="arrow" className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-1" /></span>
      </div>
    </article>
  );
}
