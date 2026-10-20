import { useParams } from 'react-router-dom';
import { PageHero, Btn, Icon, Kicker, SecHead, Steps, IconCards, Split } from '../components/ui.jsx';
import { Cta, CaseCard } from '../components/blocks.jsx';
import { cases, caseBySlug } from '../data/cases.js';
import NotFound from './NotFound.jsx';

export default function CaseStudy() {
  const { slug } = useParams();
  const c = caseBySlug[slug];
  if (!c) return <NotFound />;
  const others = cases.filter((x) => x.slug !== c.slug);

  return (
    <>
      <PageHero
        crumbs={[['Home', '/'], ['Services', '/services'], ['Security audit', '/services/security-audit'], [c.client, `/case-studies/${c.slug}`]]}
        icon="shield"
        title={<>{c.headline}</>}
        lede={c.summary}
        tags={c.standards}
      >
        <Btn to="#start" variant="cream">Get a security audit</Btn>
        <Btn to="/services/security-audit" variant="ghost" icon={false}>About the service</Btn>
      </PageHero>

      {/* CHALLENGE + FACTS */}
      <section className="sec" aria-labelledby="ch-title">
        <div className="wrap grid items-start gap-12 lg:grid-cols-[1.25fr_.75fr] lg:gap-20">
          <div>
            <Kicker>The challenge</Kicker>
            <h2 id="ch-title" className="h-sec" data-split><Split text="Why the hospital needed an audit" /></h2>
            <div className="mt-7 space-y-5" data-rv>{c.challenge.map((t, i) => <p key={i} className={i === 0 ? 'lede' : 'text-ink-soft'}>{t}</p>)}</div>
          </div>
          <aside data-rv style={{ '--d': '.1s' }} className="rounded-[2rem] bg-cream-200 p-7 sm:p-9" aria-label="Project facts">
            <dl className="divide-y divide-nova/15">
              {[['Client', c.client], ['Industry', c.sector], ['Service', c.service], ['Systems audited', c.scope.map((s) => s[1]).join(', ')]].map(([k, v]) => (
                <div key={k} className="py-4 first:pt-0 last:pb-0"><dt className="text-sm font-bold text-ink-soft">{k}</dt><dd className="mt-1 font-bold">{v}</dd></div>
              ))}
            </dl>
          </aside>
        </div>
      </section>

      {/* SCOPE */}
      <section className="sec bg-cream-200" aria-labelledby="scope-title">
        <div className="wrap">
          <SecHead kicker="Scope" title="What we audited" sub="Every system below was tested with the hospital’s written consent and within agreed testing windows." id="scope-title" />
          <IconCards items={c.scope} cols={2} />
        </div>
      </section>

      <Steps steps={c.approach} title="How the audit was carried out" sub="A clear, safe process that never put live hospital services at risk." kicker="Approach" id="ap-title" />

      {/* STANDARDS + DELIVERABLES */}
      <section className="sec" aria-labelledby="std-title">
        <div className="wrap grid gap-12 lg:grid-cols-2 lg:gap-20">
          <div data-rv>
            <Kicker>Standards</Kicker>
            <h2 id="std-title" className="h-sec" data-split><Split text="Tested against recognised standards" /></h2>
            <ul className="mt-8 flex flex-wrap gap-2.5">{c.standards.map((t) => <li key={t} className="rounded-2xl bg-cream-200 px-5 py-3.5 font-extrabold">{t}</li>)}</ul>
          </div>
          <div data-rv style={{ '--d': '.1s' }}>
            <Kicker>Deliverables</Kicker>
            <h2 className="h-sec" data-split><Split text="What the hospital received" /></h2>
            <ul className="mt-8 space-y-3">{c.deliverables.map((t) => <li key={t} className="flex items-center gap-3.5 rounded-2xl p-4 font-bold shadow-[inset_0_0_0_1px_rgba(18,52,152,.14)]"><span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-nova text-cream"><Icon name="check" className="h-4 w-4" /></span>{t}</li>)}</ul>
          </div>
        </div>
      </section>

      {/* OUTCOMES */}
      <section className="sec dark-sec bg-nova text-cream" aria-labelledby="out-title">
        <div className="wrap">
          <SecHead kicker="Outcome" title="What changed for the hospital" sub="Findings and system details stay confidential. This is the impact we can share." id="out-title" dark />
          <IconCards items={c.outcomes.map(([t, d], i) => [['target', 'shield', 'refresh'][i % 3], t, d])} cols={3} dark />
        </div>
      </section>

      {/* OTHER CASES */}
      <section className="sec" aria-labelledby="more-title">
        <div className="wrap">
          <SecHead kicker="More case studies" title="Other security audits we have delivered" id="more-title" />
          <div className="grid gap-6 md:grid-cols-2">{others.map((x, i) => <CaseCard key={x.slug} c={x} i={i} />)}</div>
        </div>
      </section>

      <Cta preset="Security audit" title="Want the same level of protection?" sub="Tell us which systems you want checked. We reply within one working day with a scope and a fixed quote." />
    </>
  );
}
