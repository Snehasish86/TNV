import { useState } from 'react';
import { Btn, Icon, Kicker, SecHead, Faq, Steps, PageHero, IconCards, Mark } from '../components/ui.jsx';
import { Cta, ProjectCard, Screen, Field, useForm, Honeypot, FormNote, CaseCard } from '../components/blocks.jsx';
import { cases } from '../data/cases.js';
import { projects, apps, posts, homeFaqs, SITE } from '../data/site.js';

/* ================= ABOUT ================= */
export function About() {
  return (
    <>
      <PageHero crumbs={[['Home', '/'], ['About', '/about']]} icon="heart"
        title={<>We build digital products that <span className="text-sky-nova">move businesses forward</span></>}
        lede="tweNova is a 360-degree digital studio. Strategy, design, engineering and marketing under one roof, for ventures of every size."
        stats={[['50+', 'Projects delivered'], ['30+', 'Clients'], ['4+', 'Years in business']]}>
        <Btn to="/contact" variant="cream">Start a project</Btn>
        <Btn to="/portfolio" variant="ghost" icon={false}>See our work</Btn>
      </PageHero>
      <section className="sec" aria-labelledby="story-title">
        <div className="wrap grid items-end gap-10 lg:grid-cols-[1.4fr_.9fr] lg:gap-20">
          <div data-rv><Kicker>Think. Feel. Do.</Kicker><h2 id="story-title" className="max-w-[22ch] font-display text-[clamp(1.7rem,3.6vw,3.1rem)] font-medium leading-[1.15] tracking-[-0.03em]">We help clients with strategy, experience and brand, taking the initiative while working in sync with your team.</h2></div>
          <div data-rv style={{ '--d': '.1s' }} className="space-y-4"><p className="lede">Mobile apps, websites, cloud, AI agents and digital marketing, designed to scale with you.</p><p className="text-ink-soft">Our team has built a trusted name with businesses in India and Europe. We work as partners, not vendors.</p></div>
        </div>
      </section>
      <section className="sec bg-cream-200" aria-labelledby="values-title">
        <div className="wrap">
          <SecHead kicker="Core values" title="Values that make tweNova… tweNova" sub="Honest, accountable work. These five values shape every project we take on." id="values-title" />
          <div className="border-t border-nova/15">
            {[['Client satisfaction', 'We take time to understand your needs and deliver beyond the brief.'], ['Delivering results', 'A data-driven approach so your investment turns into measurable growth.'], ['Trailblazing speed', 'Agile sprints and modern tooling help us ship faster without cutting corners.'], ['Impeccable quality', 'Every line of code and every pixel is reviewed and tested before it ships.'], ['Result-driven work', 'Outcomes over outputs. Each task maps back to a goal you care about.']].map(([t, d], i) => (
              <div key={t} data-rv className="grid gap-3 border-b border-nova/15 py-8 sm:grid-cols-[80px_1fr_1.2fr] sm:items-baseline sm:gap-8">
                <span className="text-sm font-bold text-sky-nova">{String(i + 1).padStart(2, '0')}</span>
                <h3 className="text-[clamp(1.35rem,2.6vw,2.1rem)] font-medium tracking-[-0.03em]">{t}</h3>
                <p className="text-ink-soft">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="sec" aria-labelledby="culture-title">
        <div className="wrap">
          <SecHead kicker="Our culture" title="Rules to live by" sub="They unite us as a team and inspire us every day." id="culture-title" />
          <IconCards items={[['users', 'Teamwork', 'Collaboration unlocks results no one could reach alone.'], ['target', 'Pursue excellence', 'Relentless effort and care in everything we ship.'], ['heart', 'Create value', 'Meaningful connections and positive impact for clients.'], ['rocket', 'Go bravely', 'We take on hard problems with determination.'], ['check', 'Finish well', 'Focus through the final stretch, every time.'], ['refresh', 'Keep evolving', 'Every launch is a starting point. We measure and improve.']]} />
        </div>
      </section>
      <section className="sec pt-0" aria-labelledby="vm-title">
        <div className="wrap">
          <h2 id="vm-title" className="sr-only">Vision and mission</h2>
          <div className="grid gap-5 md:grid-cols-2">
            {[['Our vision', 'To be a global leader in technology innovation, helping businesses and people use technology to reach their full potential.', 'bg-nova'], ['Our mission', 'To build products that streamline processes, improve efficiency and drive growth for our clients. Make together, grow together.', 'bg-nova-900']].map(([t, d, bg]) => (
              <article key={t} data-rv className={`dark-sec flex min-h-[340px] flex-col justify-end rounded-[2rem] p-9 text-cream sm:p-12 ${bg}`}>
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
      <PageHero crumbs={[['Home', '/'], ['Work', '/portfolio']]} icon="globe"
        title={<>Work that is <span className="text-sky-nova">live and growing</span></>}
        lede="Websites, mobile apps and security audits we delivered for education, healthcare, travel, media and local businesses."
        stats={[[String(projects.length), 'Live websites'], [String(apps.length), 'Published apps'], [String(cases.length), 'Security audits']]}>
        <Btn to="/contact" variant="cream">Start a project</Btn>
      </PageHero>
      <section className="sec" aria-labelledby="pf-title">
        <div className="wrap">
          <h2 id="pf-title" className="sr-only">All projects</h2>
          <div role="group" aria-label="Filter projects" className="mb-12 flex flex-wrap gap-2.5">
            {[['all', 'All', projects.length + apps.length + cases.length], ['web', 'Websites', projects.length], ['app', 'Mobile apps', apps.length], ['audit', 'Security audits', cases.length]].map(([k, n, c]) => (
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
const JOBS = [
  { t: 'Full stack developer', loc: 'Remote', d: 'Build and maintain web applications using modern frameworks, from database to user interface.', resp: ['Build features across frontend and backend', 'Write clean, tested and documented code', 'Work with designers to ship polished interfaces', 'Join code reviews and improve our tooling'], req: ['2+ years building web apps', 'Strong JavaScript plus PHP or Node.js', 'Experience with MySQL or MongoDB', 'Clear written English for remote work'] },
  { t: 'UI/UX designer', loc: 'Hybrid', d: 'Design clear, intuitive interfaces for websites and mobile apps used by real customers.', resp: ['Turn requirements into flows, wireframes and prototypes', 'Design polished UI for web and mobile', 'Build and maintain design systems', 'Test designs with users and iterate'], req: ['A portfolio of shipped web or app work', 'Strong Figma skills', 'Understanding of accessibility and responsive design', 'Able to explain design decisions clearly'] }
];
export function Careers() {
  return (
    <>
      <PageHero crumbs={[['Home', '/'], ['Careers', '/careers']]} icon="brief"
        title={<>Do the best work of your career, <span className="text-sky-nova">with us</span></>}
        lede="Join a team that builds real products for real users, and grows with every launch."
        stats={[['2', 'Open roles'], ['Remote', 'and hybrid'], ['30+', 'Teammates']]}>
        <Btn to="#roles" variant="cream">See open roles</Btn>
        <Btn to={`mailto:${SITE.email}?subject=CV%20for%20tweNova`} variant="ghost" icon={false}>Send your CV</Btn>
      </PageHero>
      <section className="sec" aria-labelledby="perks-title">
        <div className="wrap">
          <SecHead kicker="Why join" title="A place to learn fast and ship often" sub="Small enough that your work matters, busy enough that you never stop learning." id="perks-title" />
          <IconCards cols={4} items={[['globe', 'Real products', 'Your work goes live for clients in India and Europe.'], ['layers', 'Modern stack', 'React, Laravel, Node.js, Flutter, cloud and AI tools.'], ['users', 'Mentorship', 'Learn from senior developers through reviews and pairing.'], ['clock', 'Flexible work', 'Remote and hybrid roles focused on output, not hours.']]} />
        </div>
      </section>
      <section className="sec faq bg-cream-200" id="roles" aria-labelledby="jobs-title">
        <div className="wrap">
          <SecHead kicker="Open positions" title="Current openings" sub={`Do not see your role? Email your CV to ${SITE.email}.`} id="jobs-title" />
          <div className="border-t border-nova/15">
            {JOBS.map((j) => (
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
      <Cta preset="Hire developers" title="Need developers instead? We can help." sub="tweNova provides developers, designers and tech leads for full-time, part-time or project work." />
    </>
  );
}

/* ================= BLOG ================= */
const fmt = (d) => new Date(d + 'T00:00:00Z').toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' });
export function Blog() {
  const [first, ...rest] = posts;
  return (
    <>
      <PageHero crumbs={[['Home', '/'], ['Insights', '/blog']]} icon="chat" title={<>Insights from <span className="text-sky-nova">the build floor</span></>} lede="Practical notes on technology, design and growth from the tweNova team." />
      <section className="sec" aria-labelledby="blog-title">
        <div className="wrap">
          <h2 id="blog-title" className="sr-only">All articles</h2>
          <article id={first.slug} data-rv className="dark-sec mb-12 grid gap-8 rounded-[2rem] bg-nova p-8 text-cream sm:p-12 lg:grid-cols-[1.2fr_.8fr] lg:items-center">
            <div><p className="mb-4 flex gap-4 text-sm font-bold text-mist"><span>{first.cat}</span><time dateTime={first.date}>{fmt(first.date)}</time></p><h2 className="text-[clamp(1.8rem,3.4vw,2.7rem)] font-semibold">{first.title}</h2><p className="mt-4 text-[#D7DFF8]">{first.excerpt}</p>{first.body.map((b) => <p key={b} className="mt-3 text-mist">{b}</p>)}</div>
            <div aria-hidden="true" className="grid aspect-[4/3] place-items-center rounded-3xl bg-nova-900"><Icon name="spark" className="h-24 w-24 text-sky-nova" /></div>
          </article>
          <div className="faq grid gap-5 md:grid-cols-2">
            {rest.map((p, i) => (
              <article key={p.slug} id={p.slug} data-rv style={{ '--d': `${(i % 2) * 0.08}s` }} className="card flex flex-col">
                <span className="self-start rounded-full bg-nova/10 px-3 py-1.5 text-xs font-extrabold text-nova">{p.cat}</span>
                <time dateTime={p.date} className="mt-10 text-sm font-bold text-ink-soft">{fmt(p.date)}</time>
                <h3 className="mt-2 text-xl font-medium leading-snug">{p.title}</h3>
                <p className="mt-3 text-ink-soft">{p.excerpt}</p>
                <details className="mt-4"><summary className="inline-flex cursor-pointer items-center gap-2 font-extrabold text-nova">Read summary <Icon name="crumb" className="h-4 w-4" /></summary>{p.body.map((b) => <p key={b} className="mt-3 text-ink-soft">{b}</p>)}</details>
              </article>
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
      <PageHero crumbs={[['Home', '/'], ['Contact', '/contact']]} icon="mail" title={<>Let’s talk about <span className="text-sky-nova">your next build</span></>} lede="Tell us what you need. We reply within one working day with next steps and a rough estimate." />
      <section className="sec" id="start" aria-labelledby="form-title">
        <div className="wrap grid items-start gap-12 lg:grid-cols-[.85fr_1.15fr] lg:gap-20">
          <div data-rv>
            <Kicker>Get in touch</Kicker>
            <h2 id="form-title" className="h-sec">Start a conversation</h2>
            <div className="mt-9 space-y-3.5">
              {[['mail', 'Email us', SITE.email, `mailto:${SITE.email}`], ['clock', 'Response time', 'Within one working day'], ['globe', 'Where we work', SITE.location]].map(([ic, k, v, href]) => {
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
              <div className="flex flex-wrap gap-2">{['Website', 'Mobile app', 'Custom software', 'UI/UX design', 'SEO & marketing', 'Security audit', 'Hire developers'].map((o) => (
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
