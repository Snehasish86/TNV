import { Link, useParams } from 'react-router-dom';
import { PageHero, Btn, Icon, Kicker, SecHead, Faq, IconCards } from '../components/ui.jsx';
import { Cta, ProductCard } from '../components/blocks.jsx';
import { products } from '../data/products.js';
import { SITE, homeFaqs } from '../data/site.js';
import { team } from '../data/team.js';
import { articles, articleBySlug } from '../data/articles.js';
import { serviceBySlug, coreServices } from '../data/services.js';
import { legal } from '../data/legal.js';
import { hireFaqs } from '../data/common.js';
import { fmtDate } from './Other.jsx';
import NotFound from './NotFound.jsx';

const Para = ({ item }) => (typeof item === 'string'
  ? <p className="mt-4 leading-relaxed text-ink-soft">{item}</p>
  : <ul className="mt-4 space-y-2.5">{item.list.map((x) => <li key={x} className="flex gap-3 text-ink-soft"><span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-volt text-ink" aria-hidden="true"><Icon name="check" className="h-3 w-3" /></span>{x}</li>)}</ul>);

/* ================= OUR PROCESS ================= */
export const PROCESS = [
  ['search', 'Discovery', 'We learn about your business, users and goals, review anything that already exists, and agree what success looks like.', ['Goals, users and constraints', 'Existing systems and content', 'Rough budget and timeline']],
  ['layers', 'Planning', 'We turn the discovery into a written scope: pages or features, technology, milestones and acceptance criteria.', ['Sitemap or feature list', 'Technology choice', 'Milestones and quote']],
  ['pen', 'Design', 'Wireframes first, then visual design you can click through and approve before development begins.', ['Wireframes', 'Visual design for mobile and desktop', 'Your feedback and approval']],
  ['code', 'Development', 'We build in short cycles on a private staging link, so you can see progress and give feedback as we go.', ['Staging link for reviews', 'Regular progress updates', 'Clean, documented code']],
  ['shield', 'Testing and QA', 'We test on real devices and browsers, check forms, speed, accessibility and security basics, and fix what we find.', ['Device and browser testing', 'Speed and SEO checks', 'Security basics']],
  ['rocket', 'Launch', 'We move the project live, connect analytics and Search Console where relevant, and hand over every account and file.', ['Go-live and monitoring', 'Account and code handover', 'Short training for your team']],
  ['refresh', 'Support and improvement', 'After launch we can keep the product updated, secure and improving through a support plan, if you need one.', ['Updates and fixes', 'Backups and monitoring', 'New features over time']]
];
export function OurProcess() {
  return (
    <>
      <PageHero crumbs={[['Home', '/'], ['Our process', '/our-process/']]} icon="layers"
        title={<>Our process, from discovery <span className="text-volt">to launch and beyond</span></>}
        lede="Every Twenova project follows the same clear stages, with a review at the end of each one, so you always know what is done and what comes next.">
        <Btn to="/contact/" variant="cream">Start your project</Btn>
      </PageHero>
      <section className="sec" aria-labelledby="pr-title">
        <div className="wrap">
          <h2 id="pr-title" className="sr-only">The seven stages</h2>
          <ol className="space-y-5">
            {PROCESS.map(([ic, t, d, items], i) => (
              <li key={t} data-rv className="card grid gap-6 sm:grid-cols-[90px_1fr_1fr] sm:items-start">
                <span className="font-display text-4xl font-semibold text-nova">{String(i + 1).padStart(2, '0')}</span>
                <div><h3 className="flex items-center gap-3 text-2xl font-semibold"><Icon name={ic} className="h-6 w-6 text-nova" />{t}</h3><p className="mt-3 text-ink-soft">{d}</p></div>
                <ul className="space-y-2">{items.map((x) => <li key={x} className="flex gap-3 text-ink-soft"><span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-volt text-ink" aria-hidden="true"><Icon name="check" className="h-3 w-3" /></span>{x}</li>)}</ul>
              </li>
            ))}
          </ol>
        </div>
      </section>
      <section className="sec bg-cream-200" aria-labelledby="svc-links">
        <div className="wrap">
          <SecHead kicker="Services" title="Where this process applies" sub="The same stages adapt to each type of project." id="svc-links" />
          <IconCards items={coreServices.map((s) => [s.icon, s.name, s.short, `/${s.slug}/`])} cols={4} />
        </div>
      </section>
      <Cta />
    </>
  );
}

/* ================= FOUNDER / CO-FOUNDER ================= */
export function PersonPage({ slug }) {
  const m = team.find((x) => x.slug === slug);
  if (!m) return <NotFound />;
  const links = Object.entries(m.links || {}).filter(([, u]) => u);
  const other = team.filter((x) => x.slug !== slug);
  const intro = m.headline || `${m.name} is the ${m.role} of ${SITE.name}, a software development agency based in ${SITE.country}.`;
  return (
    <>
      <PageHero crumbs={[['Home', '/'], ['About us', '/about-us/'], [m.name, `/${m.slug}/`]]} icon="users"
        title={<>{m.name}</>} lede={`${m.role}, ${SITE.name}`}>
        <Btn to="/contact/" variant="cream">Discuss a project</Btn>
      </PageHero>
      <section className="sec" aria-labelledby="p-title">
        <div className="wrap grid items-start gap-12 lg:grid-cols-[.8fr_1.2fr] lg:gap-20">
          <img src={m.photo} alt={`${m.name}, ${m.role} of ${SITE.name}`} width={m.photoW} height={m.photoH} decoding="async" className="img-tone aspect-[4/5] w-full max-w-md rounded-[2rem] object-cover shadow-[0_40px_80px_-50px_rgba(6,19,64,.6)]" />
          <div data-rv>
            <Kicker>{m.role}</Kicker>
            <h2 id="p-title" className="h-sec">About {m.name.split(' ')[0]}</h2>
            <p className="lede mt-6">{intro}</p>
            {m.bio.map((b) => <p key={b} className="mt-4 text-ink-soft">{b}</p>)}
            {m.responsibilities.length > 0 && <><h3 className="mt-10 text-xl font-semibold">What {m.name.split(' ')[0]} leads at {SITE.name}</h3><ul className="mt-4 space-y-2">{m.responsibilities.map((x) => <li key={x} className="flex gap-3 text-ink-soft"><span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-volt text-ink" aria-hidden="true"><Icon name="check" className="h-3 w-3" /></span>{x}</li>)}</ul></>}
            {m.skills.length > 0 && <><h3 className="mt-10 text-xl font-semibold">Expertise</h3><ul className="mt-4 flex flex-wrap gap-2">{m.skills.map((x) => <li key={x} className="rounded-full bg-cream-200 px-4 py-2 text-sm font-bold">{x}</li>)}</ul></>}
            {m.experience.length > 0 && <><h3 className="mt-10 text-xl font-semibold">Experience</h3><ul className="mt-4 space-y-3">{m.experience.map(([r, c, d]) => <li key={r + c} className="text-ink-soft"><b className="text-ink">{r}</b>, {c} <span className="text-sm">({d})</span></li>)}</ul></>}
            {m.message && <blockquote className="mt-10 rounded-3xl bg-cream-200 p-7 font-display text-xl leading-snug">“{m.message}”</blockquote>}
            {links.length > 0 && <div className="mt-10 flex flex-wrap gap-3">{links.map(([k, u]) => <Btn key={k} to={u} variant="ghost-dark" icon={false} rel="me noopener">{{ linkedin: 'LinkedIn', github: 'GitHub', portfolio: 'Portfolio' }[k] || k}</Btn>)}</div>}
          </div>
        </div>
      </section>
      {other.length > 0 && (
        <section className="sec bg-cream-200" aria-labelledby="o-title">
          <div className="wrap">
            <h2 id="o-title" className="h-sec">Also leading {SITE.name}</h2>
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:max-w-3xl">
              {other.map((o) => (
                <Link key={o.slug} to={`/${o.slug}/`} className="card group flex items-center gap-5">
                  <img src={o.photo} alt={`${o.name}, ${o.role} of ${SITE.name}`} width="96" height="120" loading="lazy" className="img-tone h-24 w-20 rounded-2xl object-cover" />
                  <div><p className="text-sm font-bold text-nova">{o.role}</p><p className="text-xl font-semibold">{o.name}</p></div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
      <Cta />
    </>
  );
}

/* ================= BLOG ARTICLE ================= */
export function BlogPost() {
  const { slug } = useParams();
  const a = articleBySlug[slug];
  if (!a) return <NotFound />;
  const rel = a.services.map((s) => serviceBySlug[s]).filter(Boolean);
  const more = articles.filter((x) => x.slug !== a.slug);
  return (
    <>
      <PageHero crumbs={[['Home', '/'], ['Blog', '/blog/'], [a.title, `/blog/${a.slug}/`]]} icon="chat" title={<>{a.title}</>} lede={a.desc} />
      <article className="sec" aria-labelledby="art-h">
        <div className="wrap grid gap-14 lg:grid-cols-[1fr_300px]">
          <div className="max-w-[72ch]">
            <p className="text-sm font-bold text-ink-soft">By {a.author}{a.reviewer ? `, reviewed by ${a.reviewer}` : ''} · Published <time dateTime={a.date}>{fmtDate(a.date)}</time>{a.updated !== a.date ? <> · Updated <time dateTime={a.updated}>{fmtDate(a.updated)}</time></> : null} · {a.mins} min read</p>
            <h2 id="art-h" className="sr-only">{a.title}</h2>
            <div className="mt-8 rounded-3xl bg-cream-200 p-7"><p className="text-sm font-extrabold uppercase tracking-wider text-nova">Short answer</p><p className="mt-3 text-lg leading-relaxed">{a.answer}</p></div>
            {a.sections.map(([h, items]) => (
              <section key={h} className="mt-12"><h2 className="text-[clamp(1.4rem,2.4vw,1.9rem)] font-semibold tracking-[-0.02em]">{h}</h2>{items.map((it, i) => <Para key={i} item={it} />)}</section>
            ))}
          </div>
          <aside className="space-y-6 lg:sticky lg:top-28 lg:self-start">
            {rel.length > 0 && <div className="card"><p className="text-sm font-extrabold text-nova">Related services</p><ul className="mt-4 space-y-3">{rel.map((s) => <li key={s.slug}><Link to={`/${s.slug}/`} className="font-bold hover:text-nova">{s.name}</Link></li>)}</ul></div>}
            <div className="card"><p className="text-sm font-extrabold text-nova">More guides</p><ul className="mt-4 space-y-3">{more.map((x) => <li key={x.slug}><Link to={`/blog/${x.slug}/`} className="font-bold hover:text-nova">{x.title}</Link></li>)}</ul></div>
          </aside>
        </div>
      </article>
      <Cta title="Planning a project like this?" />
    </>
  );
}

/* ================= FAQS ================= */
export const FAQ_GROUPS = () => [
  ['General', homeFaqs.slice(0, 4)],
  ['Services', coreServices.flatMap((s) => s.faqs.slice(0, 2))],
  ['Hiring developers', hireFaqs('Twenova')]
];
export function Faqs() {
  return (
    <>
      <PageHero crumbs={[['Home', '/'], ['FAQs', '/faqs/']]} icon="chat" title={<>Frequently asked <span className="text-volt">questions</span></>} lede="Straight answers to the questions businesses ask most before starting a project with Twenova." />
      {FAQ_GROUPS().map(([g, items], i) => <Faq key={g} items={items} title={g} id={`faq-${i}`} />)}
      <Cta />
    </>
  );
}

/* ================= LEGAL ================= */
export function LegalPage({ slug }) {
  const d = legal.find((x) => x.slug === slug);
  if (!d) return <NotFound />;
  return (
    <>
      <PageHero crumbs={[['Home', '/'], [d.title, `/${d.slug}/`]]} icon="lock" title={<>{d.title}</>} lede={d.desc} />
      <section className="sec" aria-labelledby="lg-title">
        <div className="wrap grid gap-14 lg:grid-cols-[1fr_260px]">
          <div className="max-w-[72ch]">
            <h2 id="lg-title" className="sr-only">{d.title}</h2>
            <p className="text-sm font-bold text-ink-soft">Last updated <time dateTime={d.updated}>{fmtDate(d.updated)}</time></p>
            {d.sections().map(([h, items]) => (
              <section key={h} className="mt-10"><h2 className="text-[clamp(1.25rem,2.2vw,1.6rem)] font-semibold">{h}</h2>{items.map((it, i) => <Para key={i} item={it} />)}</section>
            ))}
          </div>
          <nav aria-label="Legal pages" className="card self-start lg:sticky lg:top-28"><p className="text-sm font-extrabold text-nova">Policies</p>
            <ul className="mt-4 space-y-3">{legal.map((x) => <li key={x.slug}><Link to={`/${x.slug}/`} className={`font-bold hover:text-nova ${x.slug === slug ? 'text-nova' : ''}`} aria-current={x.slug === slug ? 'page' : undefined}>{x.title}</Link></li>)}</ul></nav>
        </div>
      </section>
    </>
  );
}

/* ================= PRODUCTS ================= */
export function ProductsHub() {
  return (
    <>
      <PageHero crumbs={[['Home', '/'], ['Products', '/products/']]} icon="box"
        title={<>Products built <span className="text-volt">by Twenova</span></>}
        lede="Besides client work, we build and run our own products. They are ongoing and keep improving with every release.">
        <Btn to="/contact/" variant="cream">Build your product with us</Btn>
      </PageHero>
      <section className="sec" aria-labelledby="prod-title">
        <div className="wrap">
          <SecHead kicker="Our products" title="Two products, built and run in-house" sub="The same team and process we use for client projects." id="prod-title" />
          <div className="grid gap-6 md:grid-cols-2">{products.map((p, i) => <ProductCard key={p.slug} p={p} i={i} />)}</div>
        </div>
      </section>
      <Cta title="Have a product idea of your own?" />
    </>
  );
}

export function ProductPage({ slug }) {
  const p = products.find((x) => x.slug === slug);
  if (!p) return <NotFound />;
  const other = products.filter((x) => x.slug !== slug);
  return (
    <>
      <PageHero crumbs={[['Home', '/'], ['Products', '/products/'], [p.name, `/products/${p.slug}/`]]} icon="box"
        title={<>{p.name}</>} lede={p.tagline}>
        {p.url ? <Btn to={p.url} variant="cream">Visit {p.name}</Btn> : <Btn to="/contact/" variant="cream">Ask about {p.name}</Btn>}
        <Btn to="/products/" variant="ghost" icon={false}>All products</Btn>
      </PageHero>
      <section className="sec" aria-labelledby="pp-title">
        <div className="wrap grid items-center gap-12 lg:grid-cols-[1.15fr_.85fr] lg:gap-16">
          <figure data-rv className="group overflow-hidden rounded-[2rem] shadow-[0_40px_80px_-50px_rgba(6,19,64,.6)] ring-1 ring-nova/10">
            <img src={p.image} alt={`${p.name} homepage: ${p.category} by Twenova`} width={p.imageW} height={p.imageH} decoding="async" className="img-tone w-full" />
          </figure>
          <div data-rv style={{ '--d': '.1s' }}>
            <span className="inline-flex items-center gap-2 rounded-full bg-volt px-3.5 py-1.5 text-xs font-extrabold text-ink"><i className="h-1.5 w-1.5 rounded-full bg-ink" />Twenova product · {p.status}</span>
            <h2 id="pp-title" className="h-sec mt-5">What it is</h2>
            <p className="lede mt-5">{p.intro}</p>
            <dl className="mt-8 divide-y divide-nova/15 rounded-3xl bg-cream-200 px-6">
              {[['Category', p.category], ['Status', p.status], ['Built and run by', 'Twenova'], ...(p.price ? [['Price', `₹${p.price} per resume`]] : [])].map(([k, v]) => (
                <div key={k} className="flex justify-between gap-4 py-3.5"><dt className="text-sm font-bold text-ink-soft">{k}</dt><dd className="text-right font-bold">{v}</dd></div>
              ))}
            </dl>
          </div>
        </div>
      </section>
      <section className="sec bg-cream-200" aria-labelledby="pf-title">
        <div className="wrap grid gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <SecHead kicker="Audience" title="Who it is for" id="pf-title" />
            <IconCards items={p.forWho} cols={1} />
          </div>
          <div data-rv>
            <Kicker>Features</Kicker>
            <h2 className="h-sec">What you can do</h2>
            <ul className="mt-8 space-y-3">{p.features.map((f) => <li key={f} className="flex items-center gap-3.5 rounded-2xl bg-cream p-4 font-bold shadow-[inset_0_0_0_1px_rgba(18,52,152,.14)]"><span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-volt text-ink"><Icon name="check" className="h-4 w-4" /></span>{f}</li>)}</ul>
          </div>
        </div>
      </section>
      <section className="sec" aria-labelledby="po-title">
        <div className="wrap">
          <SecHead kicker="Also by Twenova" title="Our other product" id="po-title" />
          <div className="grid gap-6 md:grid-cols-2">{other.map((x, i) => <ProductCard key={x.slug} p={x} i={i} />)}</div>
        </div>
      </section>
      <Cta title="Want a product like this for your business?" />
    </>
  );
}
