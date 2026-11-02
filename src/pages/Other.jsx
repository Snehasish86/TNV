import { useState } from 'react';
import { Btn, Icon, Kicker, SecHead, Faq, Steps, PageHero, IconCards, Mark } from '../components/ui.jsx';
import { Cta, ProjectCard, Screen, Field, useForm, Honeypot, FormNote, CaseCard, ProductCard } from '../components/blocks.jsx';
import { products } from '../data/products.js';
import { cases } from '../data/cases.js';
import { Link } from 'react-router-dom';
import { projects, apps, homeFaqs, SITE } from '../data/site.js';
import { team } from '../data/team.js';
import { articles } from '../data/articles.js';

export const fmtDate = (d) => new Date(d + 'T00:00:00Z').toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' });
import { JOBS, JOBS_OPEN } from '../data/jobs.js';

/* ================= ABOUT ================= */
export function About() {
  return (
    <>
      <PageHero crumbs={[['Home', '/'], ['About us', '/about-us/']]} icon="heart"
        title={<>A software development agency for <span className="text-sky-nova">growing businesses</span></>}
        lede={SITE.description}>
        <Btn to="/contact/" variant="cream">Start your project</Btn>
        <Btn to="/our-process/" variant="ghost" icon={false}>How we work</Btn>
      </PageHero>
      <section className="sec" aria-labelledby="what-title">
        <div className="wrap grid items-start gap-12 lg:grid-cols-[1.3fr_.7fr] lg:gap-20">
          <div data-rv>
            <Kicker>Who we are</Kicker>
            <h2 id="what-title" className="h-sec">What Twenova does</h2>
            <p className="lede mt-6">Twenova designs and builds websites, mobile apps, custom business software and SaaS products. We work with startups validating a new idea, small and medium-sized businesses that need better digital tools, and established companies looking for a reliable development partner.</p>
            <p className="mt-4 text-ink-soft">We are based in {SITE.country} and work with clients in India and international markets. Every project starts with understanding the business problem, and is delivered in clear stages so you can review progress along the way.</p>
          </div>
          <aside data-rv style={{ '--d': '.1s' }} className="rounded-[2rem] bg-cream-200 p-7 sm:p-9" aria-label="Company facts">
            <dl className="divide-y divide-nova/15">
              {[['Company', SITE.name], ['Based in', SITE.country], ['Serving', 'India and international markets'], ['Core services', 'Websites, mobile apps, custom software, SaaS']].map(([k, v]) => (
                <div key={k} className="py-4 first:pt-0 last:pb-0"><dt className="text-sm font-bold text-ink-soft">{k}</dt><dd className="mt-1 font-bold">{v}</dd></div>
              ))}
            </dl>
          </aside>
        </div>
      </section>
      <section className="sec bg-cream-200" aria-labelledby="team-title">
        <div className="wrap">
          <SecHead kicker="Leadership" title="The people behind Twenova" sub="Meet the founders who lead Twenova’s work with clients." id="team-title" />
          <div className="grid gap-6 sm:grid-cols-2 lg:max-w-4xl">
            {team.map((m, i) => (
              <Link key={m.slug} to={`/${m.slug}/`} data-rv style={{ '--d': `${i * 0.08}s` }} className="card group flex flex-col overflow-hidden !p-0">
                <img src={m.photo} alt={`${m.name}, ${m.role} of Twenova`} width={m.photoW} height={m.photoH} loading="lazy" decoding="async" className="aspect-[4/5] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]" />
                <div className="p-7"><p className="text-sm font-bold text-nova">{m.role}</p><h3 className="mt-1 text-2xl font-semibold">{m.name}</h3>
                  <span className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-nova">View profile <Icon name="arrow" className="h-4 w-4 transition-transform group-hover:translate-x-1" /></span></div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <section className="sec" aria-labelledby="values-title">
        <div className="wrap">
          <SecHead kicker="How we work" title="What you can expect from us" sub="The principles behind every project." id="values-title" />
          <IconCards items={[['target', 'Clear scope', 'We agree what will be built, by when and for how much before work starts.'], ['chat', 'Honest advice', 'If a ready-made tool or a smaller first version is the better choice, we will say so.'], ['refresh', 'Work in stages', 'Regular reviews on a staging link, so there are no surprises at the end.'], ['lock', 'You own the result', 'Code, designs and data belong to you once the project is paid for.'], ['shield', 'Security in mind', 'Sensible security practices in everything we build.'], ['users', 'Support after launch', 'Help with updates, fixes and improvements when you need it.']]} />
          <div className="mt-12"><Btn to="/our-process/" variant="ghost-dark" icon={false}>See our process</Btn></div>
        </div>
      </section>
      <section className="sec pt-0" aria-labelledby="vm-title">
        <div className="wrap">
          <h2 id="vm-title" className="sr-only">Vision and mission</h2>
          <div className="grid gap-5 md:grid-cols-2">
            {[['Our vision', 'To help businesses of every size use technology with confidence, wherever they are.', 'bg-nova'], ['Our mission', 'To build reliable digital products that streamline processes and support growth. Make together, grow together.', 'bg-nova-900']].map(([t, d, bg]) => (
              <article key={t} data-rv className={`dark-sec flex min-h-[300px] flex-col justify-end rounded-[2rem] p-9 text-cream sm:p-12 ${bg}`}>
                <Mark className="mb-auto w-14 text-white/20" />
                <h3 className="text-[clamp(1.6rem,3vw,2.3rem)] font-semibold">{t}</h3>
                <p className="mt-4 max-w-[48ch] text-[#D7DFF8]">{d}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <Cta />
    </>
  );
}

/* ================= PORTFOLIO ================= */
export function Portfolio() {
  const [f, setF] = useState('all');
  return (
    <>
      <PageHero crumbs={[['Home', '/'], ['Work', '/portfolio/']]} icon="globe"
        title={<>Work that is <span className="text-sky-nova">live and growing</span></>}
        lede="Websites, mobile apps and security audits we delivered for education, healthcare, travel, media and local businesses."
        stats={[[String(projects.length), 'Live websites'], [String(apps.length), 'Published apps'], [String(cases.length), 'Security audits']]}>
        <Btn to="/contact/" variant="cream">Start a project</Btn>
      </PageHero>
      <section className="sec" aria-labelledby="pf-title">
        <div className="wrap">
          <h2 id="pf-title" className="sr-only">All projects</h2>
          <div role="group" aria-label="Filter projects" className="mb-12 flex flex-wrap gap-2.5">
            {[['all', 'All', projects.length + apps.length + cases.length + products.length], ['web', 'Websites', projects.length], ['app', 'Mobile apps', apps.length], ['audit', 'Security audits', cases.length], ['product', 'Our products', products.length]].map(([k, n, c]) => (
              <button key={k} type="button" aria-pressed={f === k} onClick={() => setF(k)} className={`rounded-full px-5 py-3 text-[.95rem] font-bold transition-colors ${f === k ? 'bg-nova text-cream' : 'text-ink-soft shadow-[inset_0_0_0_1px_rgba(18,52,152,.18)] hover:text-nova'}`}>{n}<sup className="ml-1 opacity-70">{c}</sup></button>
            ))}
          </div>
          {(f === 'all' || f === 'web') && <div className="grid gap-x-7 gap-y-12 md:grid-cols-2">{projects.map((p, i) => <ProjectCard key={p.name} p={p} i={i} />)}</div>}
          {(f === 'all' || f === 'app') && (
            <div className={`grid gap-6 sm:grid-cols-2 lg:grid-cols-3 ${f === 'all' ? 'mt-16' : ''}`}>
              {apps.map((a, i) => (
                <article key={a.name} data-rv style={{ '--d': `${(i % 3) * 0.07}s`, background: a.color }} className="dark-sec group relative overflow-hidden rounded-[1.75rem] p-7 text-cream" data-cursor="Open app">
                  <div className="mx-auto w-[62%] transition-transform duration-700 ease-out group-hover:-translate-y-2"><div className="phone"><Screen kind={a.screen} /></div></div>
                  <h3 className="mt-7 text-xl font-semibold">{a.name}</h3>
                  <p className="mt-1.5 inline-flex items-center gap-2 text-sm text-mist"><Icon name={a.store === 'App Store' ? 'apple' : 'play'} className="h-4 w-4" />{a.category}, {a.store}</p>
                  <a href={a.url} target="_blank" rel="noopener" className="absolute inset-0 rounded-[inherit]" aria-label={`${a.name} on ${a.store} (opens in a new tab)`} />
                </article>
              ))}
            </div>
          )}
          {(f === 'all' || f === 'product') && (
            <div className={f === 'all' ? 'mt-20' : ''}>
              {f === 'all' && <h3 className="mb-8 font-display text-[clamp(1.4rem,2.6vw,2rem)] font-semibold tracking-[-0.03em]">Our products</h3>}
              <div className="grid gap-6 md:grid-cols-2">{products.map((x, i) => <ProductCard key={x.slug} p={x} i={i} />)}</div>
            </div>
          )}
          {(f === 'all' || f === 'audit') && (
            <div className={f === 'all' ? 'mt-20' : ''}>
              {f === 'all' && <h3 className="mb-8 font-display text-[clamp(1.4rem,2.6vw,2rem)] font-semibold tracking-[-0.03em]">Security audits</h3>}
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">{cases.map((c, i) => <CaseCard key={c.slug} c={c} i={i} />)}</div>
            </div>
          )}
        </div>
      </section>
      <Cta title="Want your project here next?" />
    </>
  );
}

/* ================= CAREERS ================= */

export function Careers() {
  return (
    <>
      <PageHero crumbs={[['Home', '/'], ['Careers', '/careers/']]} icon="brief"
        title={<>Do the best work of your career, <span className="text-sky-nova">with us</span></>}
        lede="Join a team that builds real products for real users, and grows with every launch."
        >
        <Btn to="#roles" variant="cream">{JOBS_OPEN ? 'See open roles' : 'How to apply'}</Btn>
        <Btn to={`mailto:${SITE.email}?subject=CV%20for%20Twenova`} variant="ghost" icon={false}>Send your CV</Btn>
      </PageHero>
      <section className="sec" aria-labelledby="perks-title">
        <div className="wrap">
          <SecHead kicker="Why join" title="A place to learn fast and ship often" sub="Small enough that your work matters, busy enough that you never stop learning." id="perks-title" />
          <IconCards cols={4} items={[['globe', 'Real products', 'Your work goes live for clients in India and international markets.'], ['layers', 'Modern stack', 'React, Laravel, Node.js, Flutter, cloud and AI tools.'], ['users', 'Mentorship', 'Learn from senior developers through reviews and pairing.'], ['clock', 'Flexible work', 'Remote and hybrid roles focused on output, not hours.']]} />
        </div>
      </section>
      <section className="sec faq bg-cream-200" id="roles" aria-labelledby="jobs-title">
        <div className="wrap">
          <SecHead kicker="Open positions" title={JOBS_OPEN ? 'Current openings' : 'No open roles right now'} sub={JOBS_OPEN ? `Do not see your role? Email your CV to ${SITE.email}.` : `We are not actively hiring at the moment, but we are always happy to hear from good developers and designers. Email your CV and portfolio to ${SITE.email}.`} id="jobs-title" />
          {!JOBS_OPEN && <div data-rv><Btn to={`mailto:${SITE.email}?subject=CV%20for%20Twenova`}>Email your CV</Btn></div>}
          <div className="border-t border-nova/15">
            {(JOBS_OPEN ? JOBS : []).map((j) => (
              <details key={j.t} data-rv className="border-b border-nova/15">
                <summary className="flex cursor-pointer items-center gap-4 py-8">
                  <h3 className="flex-1 text-[clamp(1.3rem,2.6vw,2rem)] font-medium tracking-[-0.03em]">{j.t}</h3>
                  <span className="chip hidden text-ink-soft sm:inline-flex">{j.loc}</span><span className="chip hidden text-ink-soft sm:inline-flex">Full-time</span>
                  <span className="pm" aria-hidden="true" />
                </summary>
                <div className="grid gap-10 pb-10 md:grid-cols-2">
                  <div><p className="lede">{j.d}</p><h4 className="mt-6 font-sans text-base font-extrabold">What you will do</h4><ul className="mt-3 space-y-2 text-ink-soft">{j.resp.map((x) => <li key={x} className="flex gap-3"><Icon name="check" className="mt-0.5 h-5 w-5 shrink-0 text-nova" />{x}</li>)}</ul></div>
                  <div><h4 className="font-sans text-base font-extrabold">What we are looking for</h4><ul className="mt-3 space-y-2 text-ink-soft">{j.req.map((x) => <li key={x} className="flex gap-3"><Icon name="check" className="mt-0.5 h-5 w-5 shrink-0 text-nova" />{x}</li>)}</ul>
                    <div className="mt-7"><Btn to={`mailto:${SITE.email}?subject=${encodeURIComponent('Application: ' + j.t)}`}>Apply now</Btn></div></div>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>
      <Steps steps={[['Apply', 'Send your CV and portfolio or GitHub.'], ['Intro call', 'A 20-minute chat about you and the role.'], ['Skill round', 'A short practical task or portfolio review.'], ['Offer', 'Meet the team and receive your offer.']]} title="Our hiring process" sub="Simple, quick and respectful of your time." />
      <Cta preset="Hire developers" title="Need developers instead? We can help." sub="Twenova provides developers, designers and tech leads for full-time, part-time or project work." />
    </>
  );
}

/* ================= BLOG ================= */
export function Blog() {
  const [first, ...rest] = articles;
  return (
    <>
      <PageHero crumbs={[['Home', '/'], ['Blog', '/blog/']]} icon="chat" title={<>Guides for building <span className="text-sky-nova">better software</span></>} lede="Practical articles on planning, building and growing websites, apps and software products." />
      <section className="sec" aria-labelledby="blog-title">
        <div className="wrap">
          <h2 id="blog-title" className="sr-only">All articles</h2>
          <Link to={`/blog/${first.slug}/`} data-rv className="dark-sec group mb-12 grid gap-8 rounded-[2rem] bg-nova p-8 text-cream sm:p-12 lg:grid-cols-[1.2fr_.8fr] lg:items-center">
            <div><p className="mb-4 flex gap-4 text-sm font-bold text-mist"><span>{first.cat}</span><time dateTime={first.date}>{fmtDate(first.date)}</time><span>{first.mins} min read</span></p><h3 className="text-[clamp(1.8rem,3.4vw,2.7rem)] font-semibold leading-tight">{first.title}</h3><p className="mt-4 text-[#D7DFF8]">{first.desc}</p>
              <span className="mt-6 inline-flex items-center gap-2 font-extrabold">Read the guide <Icon name="arrow" className="h-4 w-4 transition-transform group-hover:translate-x-1" /></span></div>
            <div aria-hidden="true" className="grid aspect-[4/3] place-items-center rounded-3xl bg-nova-900"><Icon name="spark" className="h-24 w-24 text-sky-nova" /></div>
          </Link>
          <div className="grid gap-5 md:grid-cols-2">
            {rest.map((p, i) => (
              <Link key={p.slug} to={`/blog/${p.slug}/`} data-rv style={{ '--d': `${(i % 2) * 0.08}s` }} className="card spot group flex flex-col">
                <span className="self-start rounded-full bg-nova/10 px-3 py-1.5 text-xs font-extrabold text-nova">{p.cat}</span>
                <p className="mt-10 text-sm font-bold text-ink-soft"><time dateTime={p.date}>{fmtDate(p.date)}</time> · {p.mins} min read</p>
                <h3 className="mt-2 text-xl font-medium leading-snug">{p.title}</h3>
                <p className="mt-3 text-ink-soft">{p.desc}</p>
                <span className="spot-sub mt-6 inline-flex items-center gap-2 text-sm font-bold text-nova">Read article <Icon name="arrow" className="h-4 w-4" /></span>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <Cta title="Want advice for your project?" />
    </>
  );
}

/* ================= CONTACT ================= */
export function Contact() {
  const { errors, status, note, onSubmit } = useForm();
  return (
    <>
      <PageHero crumbs={[['Home', '/'], ['Contact', '/contact/']]} icon="mail" title={<>Let’s talk about <span className="text-sky-nova">your next build</span></>} lede="Tell us what you need. We reply within one working day with next steps and a rough estimate." />
      <section className="sec" id="start" aria-labelledby="form-title">
        <div className="wrap grid items-start gap-12 lg:grid-cols-[.85fr_1.15fr] lg:gap-20">
          <div data-rv>
            <Kicker>Get in touch</Kicker>
            <h2 id="form-title" className="h-sec">Start a conversation</h2>
            <div className="mt-9 space-y-3.5">
              {[['mail', 'Email us', SITE.email, `mailto:${SITE.email}`], ...SITE.phones.map((ph, i) => ['phone', i ? 'Or call' : 'Call or WhatsApp', ph, `tel:${ph.replace(/\s/g, '')}`]), ['globe', 'Where we work', SITE.location], ...Object.entries(SITE.social).filter(([, u]) => u).map(([k, u]) => [k === 'instagram' ? 'ig' : k === 'facebook' ? 'fb' : 'in', k[0].toUpperCase() + k.slice(1), k === 'instagram' ? '@twe.nova' : 'Twenova', u])].map(([ic, k, v, href]) => {
                const inner = <><span className="ico shrink-0"><Icon name={ic} /></span><span><small className="block text-sm font-bold text-ink-soft">{k}</small><b className="text-[1.05rem]">{v}</b></span></>;
                const cls = 'flex items-center gap-4 rounded-3xl p-5 shadow-[inset_0_0_0_1px_rgba(18,52,152,.14)]';
                return href ? <a key={k} href={href} className={`${cls} transition-colors hover:bg-cream-200`}>{inner}</a> : <div key={k} className={cls}>{inner}</div>;
              })}
            </div>
          </div>
          <form noValidate onSubmit={onSubmit} data-rv style={{ '--d': '.1s' }} className="form-light relative grid gap-4 rounded-[2rem] bg-cream-200 p-6 sm:p-10">
            <div className="grid gap-4 sm:grid-cols-2">
              <Field name="name" label="Your name" autoComplete="name" error={errors.name} />
              <Field name="email" type="email" label="Work email" autoComplete="email" error={errors.email} />
              <Field name="phone" type="tel" label="Phone (optional)" autoComplete="tel" />
              <Field name="company" label="Company (optional)" autoComplete="organization" />
            </div>
            <fieldset><legend className="mb-3 font-extrabold">What do you need?</legend>
              <div className="flex flex-wrap gap-2">{['Website', 'Mobile app', 'Custom software', 'UI/UX design', 'PR campaign', 'Branding & logo', 'Security audit', 'Hire developers'].map((o) => (
                <label key={o} className="relative"><input type="checkbox" name="service" value={o} className="peer absolute opacity-0" /><span className="inline-block cursor-pointer rounded-full px-4 py-2.5 text-sm font-bold text-ink-soft shadow-[inset_0_0_0_1px_rgba(18,52,152,.18)] transition-colors peer-checked:bg-nova peer-checked:text-cream peer-focus-visible:outline peer-focus-visible:outline-2 peer-focus-visible:outline-nova-600">{o}</span></label>
              ))}</div>
            </fieldset>
            <fieldset><legend className="mb-3 font-extrabold">Budget</legend>
              <div className="flex flex-wrap gap-2">{['Under ₹50k', '₹50k to ₹2L', '₹2L to ₹5L', '₹5L+', 'Not sure yet'].map((o, i) => (
                <label key={o} className="relative"><input type="radio" name="budget" value={o} defaultChecked={i === 1} className="peer absolute opacity-0" /><span className="inline-block cursor-pointer rounded-full px-4 py-2.5 text-sm font-bold text-ink-soft shadow-[inset_0_0_0_1px_rgba(18,52,152,.18)] transition-colors peer-checked:bg-nova peer-checked:text-cream peer-focus-visible:outline peer-focus-visible:outline-2 peer-focus-visible:outline-nova-600">{o}</span></label>
              ))}</div>
            </fieldset>
            <Field name="message" label="Tell us about your project" textarea />
            <Honeypot />
            <div><Btn type="submit" disabled={status === 'sending'}>{status === 'sending' ? 'Sending…' : 'Send message'}</Btn></div>
            <FormNote status={status} note={note} />
          </form>
        </div>
      </section>
      <Faq items={homeFaqs} />
    </>
  );
}
