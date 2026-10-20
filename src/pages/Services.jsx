import { Link, useParams } from 'react-router-dom';
import { Btn, Icon, Kicker, SecHead, Faq, Steps, PageHero, IconCards } from '../components/ui.jsx';
import { Cta, ProjectCard, AppPhone, CaseCard } from '../components/blocks.jsx';
import { services, serviceBySlug } from '../data/services.js';
import { projects, apps } from '../data/site.js';
import NotFound from './NotFound.jsx';
import { cases } from '../data/cases.js';

// lower-case only the first letter, and keep acronyms like AI, UI/UX, SEO intact
const lc = (t) => (/^[A-Z]{2}/.test(t) ? t : t.charAt(0).toLowerCase() + t.slice(1));

const INDUSTRIES = [['cap', 'Education', 'Admissions, e-learning and school ERP.'], ['bank', 'Financial services', 'Secure dashboards, payments and reporting.'], ['pill', 'Healthcare', 'Patient apps, pharmacy search and records.'], ['code', 'IT companies', 'Corporate sites, SaaS and internal tools.'], ['bld', 'Real estate', 'Listings, lead capture and CRM integration.'], ['factory', 'Manufacturing', 'Inventory, ERP and production tracking.'], ['truck', 'Logistics', 'Fleet tracking, orders and delivery apps.'], ['bag', 'Retail', 'E-commerce, POS and loyalty programmes.']];

export function ServicesHub() {
  return (
    <>
      <PageHero crumbs={[['Home', '/'], ['Services', '/services']]} icon="layers"
        title={<>Turning ideas into <span className="text-sky-nova">products that perform</span></>}
        lede="End-to-end digital services that help businesses build, grow and lead. Pick one, or bring us the whole product.">
        <Btn to="/contact" variant="cream">Start a project</Btn>
        <Btn to="#all" variant="ghost" icon={false}>Explore services</Btn>
      </PageHero>
      <section className="sec" id="all" aria-labelledby="all-title">
        <div className="wrap">
          <SecHead kicker="Our expertise" title="Nine ways we help you grow" sub="Each service has its own team, process and page. Open one to see exactly what is included." id="all-title" />
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {services.map((s, i) => (
              <article key={s.slug} data-rv style={{ '--d': `${(i % 3) * 0.07}s` }} className="card group flex flex-col">
                <span className="ico"><Icon name={s.icon} /></span>
                <h3 className="mt-8 text-xl font-medium"><Link to={`/services/${s.slug}`} className="stretched">{s.name}</Link></h3>
                <p className="mt-3 text-[.97rem] text-ink-soft">{s.short}</p>
                <ul className="mt-5 flex flex-wrap gap-1.5">{s.offerings.slice(0, 3).map(([, t]) => <li key={t} className="chip !px-3 !py-1.5 !text-xs text-ink-soft">{t}</li>)}</ul>
                <span className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-nova transition-transform duration-500 ease-out group-hover:translate-x-1">View service <Icon name="arrow" className="h-4 w-4" /></span>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="sec bg-cream-200" aria-labelledby="ind-title">
        <div className="wrap">
          <SecHead kicker="Industries" title="Powering organisations across industries" sub="We help businesses connect people and work better across sectors and geographies." id="ind-title" />
          <IconCards items={INDUSTRIES} cols={4} />
        </div>
      </section>
      <Steps steps={[['Strategic analysis', 'Recommendations and a high-level plan for your goals.'], ['Planning and design', 'Wireframes, user flows and technical architecture.'], ['Solution delivery', 'A market-ready product built in agile sprints.'], ['Managing and innovating', 'Support, optimisation and new features as you grow.']]} title="Getting you from vision to reality" sub="We listen, advise, design and deliver, with a demo at every milestone." kicker="Our process" />
      <Faq items={[['Which service should I start with?', 'Most clients start with a website or app. We suggest the right first step in a free consultation.'], ['Do you work with startups and small businesses?', 'Yes. We size the team and scope to fit your stage and budget.'], ['Can you take over an existing project?', 'Yes. We audit the code, fix critical issues first and then continue development.'], ['Is SEO included in every website?', 'Yes. Every site ships with technical SEO, fast loading, structured data and a sitemap.']]} />
      <Cta />
    </>
  );
}

export function ServiceDetail() {
  const { slug } = useParams();
  const s = serviceBySlug[slug];
  if (!s) return <NotFound />;
  const work = projects.filter((p) => s.work.includes(p.name));
  const appWork = apps.filter((a) => s.work.includes(a.name));
  const caseList = cases.filter((c) => (s.cases || []).includes(c.slug));
  const related = services.filter((x) => x.slug !== s.slug).slice(0, 3);
  const preset = { 'web-development': 'New website', 'mobile-app-development': 'Mobile app', 'ai-ml-development': 'AI solution', 'ui-ux-design': 'UI/UX design', 'digital-marketing-seo': 'SEO & marketing', 'ecommerce-development': 'E-commerce store', 'security-audit': 'Security audit' }[s.slug] || 'Custom software';

  return (
    <>
      <PageHero crumbs={[['Home', '/'], ['Services', '/services'], [s.name, `/services/${s.slug}`]]} icon={s.icon} title={s.title} lede={s.lede} tags={s.tech.slice(0, 6)}>
        <Btn to="#start" variant="cream">Get a free quote</Btn>
        <Btn to="#offer" variant="ghost" icon={false}>What’s included</Btn>
      </PageHero>

      <section className="sec" aria-labelledby="ov-title">
        <div className="wrap grid gap-10 lg:grid-cols-[.9fr_1.1fr] lg:gap-20">
          <div data-rv><Kicker>Overview</Kicker><h2 id="ov-title" className="h-sec">{s.name}</h2></div>
          <div data-rv style={{ '--d': '.1s' }} className="space-y-5 text-[1.08rem] leading-relaxed text-ink-soft">{s.overview.map((p, i) => <p key={i} className={i === 0 ? 'text-ink' : ''}>{p}</p>)}</div>
        </div>
      </section>

      <section className="sec bg-cream-200" id="offer" aria-labelledby="offer-title">
        <div className="wrap">
          <SecHead kicker="What we offer" title={`Our ${lc(s.name)} services`} sub="Pick what you need. Every engagement includes planning, quality checks and support after launch." id="offer-title" />
          <IconCards items={s.offerings} />
        </div>
      </section>

      <section className="sec" aria-labelledby="ben-title">
        <div className="wrap">
          <SecHead kicker="Why tweNova" title="What you can expect" id="ben-title" />
          <div className="grid gap-px overflow-hidden rounded-3xl bg-nova/15 sm:grid-cols-2">
            {s.benefits.map(([t, d], i) => (
              <div key={t} data-rv style={{ '--d': `${(i % 2) * 0.08}s` }} className="bg-cream p-8 sm:p-10">
                <Icon name="check" className="h-7 w-7 text-nova" />
                <h3 className="mt-6 text-xl font-medium">{t}</h3>
                <p className="mt-2.5 text-ink-soft">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Steps steps={s.process} title={`How we deliver ${lc(s.name)}`} sub="Four clear stages, with a review at the end of each one." kicker="Our process" />

      <section className="sec" aria-labelledby="tech-title">
        <div className="wrap">
          <div className="grid gap-8 lg:grid-cols-[.8fr_1.2fr] lg:gap-20">
            <div data-rv><Kicker>Technology</Kicker><h2 id="tech-title" className="h-sec">Tools we use</h2></div>
            <ul data-rv style={{ '--d': '.1s' }} className="flex flex-wrap content-start gap-2.5">
              {s.tech.map((t) => <li key={t} className="rounded-2xl bg-cream-200 px-5 py-3.5 font-extrabold">{t}</li>)}
            </ul>
          </div>
        </div>
      </section>

      {(work.length > 0 || appWork.length > 0) && (
        <section className="sec bg-cream-200" aria-labelledby="w-title">
          <div className="wrap">
            <SecHead kicker="Related work" title="Projects in this area" sub="Live work you can open and try today." id="w-title" />
            {work.length > 0 && <div className="grid gap-x-7 gap-y-12 md:grid-cols-2">{work.map((p, i) => <ProjectCard key={p.name} p={p} i={i} />)}</div>}
            {appWork.length > 0 && (
              <div className="dark-sec mt-10 rounded-[2rem] bg-nova-900 p-8 text-cream sm:p-12">
                <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-5">{appWork.map((a) => <AppPhone key={a.name} a={a} />)}</div>
              </div>
            )}
          </div>
        </section>
      )}

      {caseList.length > 0 && (
        <section className="sec bg-cream-200" aria-labelledby="cs-title">
          <div className="wrap">
            <SecHead kicker="Case studies" title="Security audits we have delivered" sub="Hospitals trust us with systems that hold sensitive patient data. Open a case study to see the scope and approach." id="cs-title" />
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">{caseList.map((c, i) => <CaseCard key={c.slug} c={c} i={i} />)}</div>
          </div>
        </section>
      )}

      <Faq items={s.faqs} title={`${s.name}: common questions`} />

      <section className="sec" aria-labelledby="rel-title">
        <div className="wrap">
          <SecHead kicker="Related services" title="You might also need" id="rel-title" />
          <IconCards items={related.map((x) => [x.icon, x.name, x.short, `/services/${x.slug}`])} />
        </div>
      </section>

      <Cta preset={preset} title={`Let’s talk about your ${lc(s.name)} project`} />
    </>
  );
}
