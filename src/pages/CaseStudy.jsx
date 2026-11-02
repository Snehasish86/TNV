import { useParams } from 'react-router-dom';
import { PageHero, Btn, Icon, Kicker, SecHead, Steps, IconCards, Split } from '../components/ui.jsx';
import { Cta, CaseCard } from '../components/blocks.jsx';
import { cases, caseBySlug } from '../data/cases.js';
import { serviceBySlug } from '../data/services.js';
import NotFound from './NotFound.jsx';

const AUDIT = serviceBySlug['security-audit'];
// Twenova's standard audit deliverables (service description, not client-specific claims)
const STANDARD_DELIVERABLES = ['Executive summary for management', 'Technical report with evidence for each finding', 'Fix plan ranked by risk', 'Retest after fixes are applied'];

export function CaseStudiesHub() {
  return (
    <>
      <PageHero crumbs={[['Home', '/'], ['Case studies', '/case-studies/']]} icon="shield"
        title={<>Case <span className="text-sky-nova">studies</span></>}
        lede="Projects Twenova has delivered, with details shared only where clients have approved them.">
        <Btn to="/portfolio/" variant="cream">See the full portfolio</Btn>
      </PageHero>
      <section className="sec" aria-labelledby="cs-title">
        <div className="wrap">
          <SecHead kicker="Security audits" title="Security audits for healthcare organisations" sub="Detailed findings stay confidential. Each page explains the engagement and how Twenova approaches security audits." id="cs-title" />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">{cases.map((c, i) => <CaseCard key={c.slug} c={c} i={i} />)}</div>
        </div>
      </section>
      <Cta preset="Security audit" title="Have a project you want reviewed?" />
    </>
  );
}

export default function CaseStudy() {
  const { slug } = useParams();
  const c = caseBySlug[slug];
  if (!c) return <NotFound />;
  const others = cases.filter((x) => x.slug !== c.slug);
  const v = c.verified;
  const hasScope = v && c.scope.length > 0, hasDel = v && c.deliverables.length > 0, hasCh = v && c.challenge.length > 0;
  const scope = hasScope ? c.scope : AUDIT.offerings;
  const deliverables = hasDel ? c.deliverables : STANDARD_DELIVERABLES;

  return (
    <>
      <PageHero
        crumbs={[['Home', '/'], ['Case studies', '/case-studies/'], [c.client, `/case-studies/${c.slug}/`]]}
        icon="shield" title={<>{c.headline}</>} lede={c.summary}>
        <Btn to="#start" variant="cream">Get a security audit</Btn>
        <Btn to="/security-audit/" variant="ghost" icon={false}>About the service</Btn>
      </PageHero>

      <section className="sec" aria-labelledby="ov-title">
        <div className="wrap grid items-start gap-12 lg:grid-cols-[1.25fr_.75fr] lg:gap-20">
          <div>
            <Kicker>Overview</Kicker>
            <h2 id="ov-title" className="h-sec" data-split><Split text={hasCh ? 'Why the audit was needed' : 'About this engagement'} /></h2>
            <div className="mt-7 space-y-5" data-rv>
              {hasCh
                ? c.challenge.map((t, i) => <p key={i} className={i === 0 ? 'lede' : 'text-ink-soft'}>{t}</p>)
                : <>
                    <p className="lede">Twenova carried out a security audit for {c.client}. To protect the client and its patients, specific findings, systems and results are not published.</p>
                    <p className="text-ink-soft">The sections below describe how Twenova approaches security audits for healthcare organisations: what we usually cover, how we work and what clients receive.</p>
                  </>}
            </div>
          </div>
          <aside data-rv style={{ '--d': '.1s' }} className="rounded-[2rem] bg-cream-200 p-7 sm:p-9" aria-label="Project facts">
            <dl className="divide-y divide-nova/15">
              {[['Client', c.client], ['Industry', c.sector], ['Service', c.service], ['Delivered by', 'Twenova']].map(([k, val]) => (
                <div key={k} className="py-4 first:pt-0 last:pb-0"><dt className="text-sm font-bold text-ink-soft">{k}</dt><dd className="mt-1 font-bold">{val}</dd></div>
              ))}
            </dl>
          </aside>
        </div>
      </section>

      <section className="sec bg-cream-200" aria-labelledby="scope-title">
        <div className="wrap">
          <SecHead kicker="Scope" title={hasScope ? 'What we audited' : 'What our security audits cover'} sub={hasScope ? 'Every system below was tested with written consent and within agreed testing windows.' : 'The exact scope is agreed with each client in writing before any testing starts.'} id="scope-title" />
          <IconCards items={scope} cols={hasScope ? 2 : 3} />
        </div>
      </section>

      <Steps steps={AUDIT.process} title="How a Twenova audit is carried out" sub="A clear, safe process that never puts live services at risk." kicker="Approach" id="ap-title" />

      <section className="sec" aria-labelledby="std-title">
        <div className="wrap grid gap-12 lg:grid-cols-2 lg:gap-20">
          <div data-rv>
            <Kicker>Standards and tools</Kicker>
            <h2 id="std-title" className="h-sec" data-split><Split text="Based on recognised standards" /></h2>
            <ul className="mt-8 flex flex-wrap gap-2.5">{AUDIT.tech.map((t) => <li key={t} className="rounded-2xl bg-cream-200 px-5 py-3.5 font-extrabold">{t}</li>)}</ul>
          </div>
          <div data-rv style={{ '--d': '.1s' }}>
            <Kicker>Deliverables</Kicker>
            <h2 className="h-sec" data-split><Split text={hasDel ? 'What the client received' : 'What clients receive'} /></h2>
            <ul className="mt-8 space-y-3">{deliverables.map((t) => <li key={t} className="flex items-center gap-3.5 rounded-2xl p-4 font-bold shadow-[inset_0_0_0_1px_rgba(18,52,152,.14)]"><span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-nova text-cream"><Icon name="check" className="h-4 w-4" /></span>{t}</li>)}</ul>
          </div>
        </div>
      </section>

      {v && c.outcomes.length > 0 && (
        <section className="sec dark-sec bg-nova text-cream" aria-labelledby="out-title">
          <div className="wrap">
            <SecHead kicker="Outcome" title="What changed" sub="Shared with the client’s approval." id="out-title" dark />
            <IconCards items={c.outcomes.map(([t, d], i) => [['target', 'shield', 'refresh'][i % 3], t, d])} cols={3} dark />
          </div>
        </section>
      )}

      <section className="sec" aria-labelledby="more-title">
        <div className="wrap">
          <SecHead kicker="More case studies" title="Other security audits" id="more-title" />
          <div className="grid gap-6 md:grid-cols-2">{others.map((x, i) => <CaseCard key={x.slug} c={x} i={i} />)}</div>
        </div>
      </section>

      <Cta preset="Security audit" title="Want your systems checked?" sub="Tell us which systems you want reviewed. We reply with a proposed scope and a quote." />
    </>
  );
}
