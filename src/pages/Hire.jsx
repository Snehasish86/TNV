import { Link, useParams } from 'react-router-dom';
import { Btn, Icon, Kicker, SecHead, Faq, Steps, PageHero, IconCards } from '../components/ui.jsx';
import { Cta } from '../components/blocks.jsx';
import { roles, roleBySlug, groups } from '../data/hire.js';
import { plans, hireSteps, hireFaqs, hireWhy } from '../data/common.js';
import NotFound from './NotFound.jsx';

function Plans({ who }) {
  return (
    <section className="sec" aria-labelledby="plans-title">
      <div className="wrap">
        <SecHead kicker="Engagement models" title="Choose how you want to work" sub="Flexible options to match your scope and budget." id="plans-title" />
        <div className="grid gap-5 md:grid-cols-3">
          {plans(who).map((p, i) => (
            <article key={p.name} data-rv style={{ '--d': `${i * 0.08}s` }} className={`relative flex flex-col rounded-[1.75rem] p-8 transition-transform duration-500 ease-out hover:-translate-y-2 sm:p-10 ${p.hot ? 'dark-sec bg-nova text-cream' : 'bg-cream shadow-[inset_0_0_0_1px_rgba(18,52,152,.14)]'}`}>
              {p.hot && <span className="absolute right-6 top-6 rounded-full bg-cream px-3 py-1.5 text-xs font-extrabold text-nova">Most popular</span>}
              <h3 className="text-2xl font-semibold">{p.name}</h3>
              <p className={`mt-3 ${p.hot ? 'text-mist' : 'text-ink-soft'}`}>{p.desc}</p>
              <ul className="mb-9 mt-6 space-y-3">{p.items.map((x) => <li key={x} className={`flex gap-3 text-[.96rem] ${p.hot ? 'text-mist' : 'text-ink-soft'}`}><Icon name="check" className={`mt-0.5 h-5 w-5 shrink-0 ${p.hot ? 'text-volt' : 'text-nova'}`} />{x}</li>)}</ul>
              <div className="mt-auto"><Btn to="#start" variant={p.hot ? 'cream' : 'primary'}>Get started</Btn></div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function HireHub() {
  return (
    <>
      <PageHero crumbs={[['Home', '/'], ['Hire developers', '/hire/']]} icon="users"
        title={<>Build your dream team with <span className="text-volt">dedicated developers</span></>}
        lede="One expert or a full product team. Reviewed developers who join your tools, your stand-ups and your roadmap, on an hourly, monthly or project basis."
        stats={[['3', 'Engagement models'], ['NDA', 'Before work starts'], ['You', 'Interview and choose']]}>
        <Btn to="#start" variant="cream">Hire now</Btn>
        <Btn to="#roles" variant="ghost" icon={false}>Explore roles</Btn>
      </PageHero>
      <section className="sec" id="roles" aria-labelledby="roles-title">
        <div className="wrap">
          <SecHead kicker="Our talent pool" title="Hire dedicated developers by technology" sub="Each role has its own page with skills, expertise and hiring details." id="roles-title" />
          {groups.map((g) => (
            <div key={g} className="mb-14 last:mb-0">
              <h3 className="mb-6 flex items-center gap-4 font-display text-lg font-medium after:h-px after:flex-1 after:bg-nova/15" data-rv>{g} developers</h3>
              <IconCards items={roles.filter((r) => r.group === g).map((r) => [r.icon, `${r.label} developers`, r.short, `/hire/${r.slug}/`])} cols={4} />
            </div>
          ))}
        </div>
      </section>
      <section className="sec dark-sec bg-nova-700 text-cream" aria-labelledby="why-title">
        <div className="wrap">
          <SecHead kicker="Why Twenova" title="Why hire from Twenova?" sub="We provide partners who fit into your workflow, not just CVs." id="why-title" dark />
          <IconCards items={hireWhy} dark />
        </div>
      </section>
      <Plans />
      <Steps steps={hireSteps()} title="Simple 4-step hiring process" sub="Share what you need, interview the shortlist, and start once you are happy." />
      <Faq items={hireFaqs('developer')} title="Hiring developers: FAQ" />
      <Cta preset="Hire developers" title="Ready to scale your development team?" />
    </>
  );
}

export function HireDetail() {
  const { slug } = useParams();
  const r = roleBySlug[slug];
  if (!r) return <NotFound />;
  const others = roles.filter((x) => x.slug !== r.slug);
  return (
    <>
      <PageHero crumbs={[['Home', '/'], ['Hire developers', '/hire/'], [r.tech, `/hire/${r.slug}/`]]} icon={r.icon}
        title={<>Hire dedicated <span className="text-volt">{r.tech}</span> developers</>} lede={r.intro} tags={r.tags}
        stats={[['3', 'Engagement models'], ['NDA', 'Before work starts'], ['You', 'Interview and choose']]}>
        <Btn to="#start" variant="cream">{`Hire ${r.tech} developers`}</Btn>
        <Btn to="#expertise" variant="ghost" icon={false}>View expertise</Btn>
      </PageHero>
      <section className="sec" id="expertise" aria-labelledby="exp-title">
        <div className="wrap">
          <SecHead kicker="Core expertise" title={`What our ${r.tech} developers deliver`} sub={`From simple builds to complex enterprise systems, our ${r.tech} team covers the full range.`} id="exp-title" />
          <IconCards items={r.expertise} />
        </div>
      </section>
      <section className="sec dark-sec bg-nova-700 text-cream" aria-labelledby="why-title">
        <div className="wrap">
          <SecHead kicker="Why choose us" title={`Why hire ${r.tech} developers from Twenova?`} sub="Senior, vetted engineers with a transparent process and a quick start." id="why-title" dark />
          <IconCards items={r.why} cols={2} dark />
        </div>
      </section>
      <section className="sec" aria-labelledby="skills-title">
        <div className="wrap grid gap-8 lg:grid-cols-[.8fr_1.2fr] lg:gap-20">
          <div data-rv><Kicker>Skills</Kicker><h2 id="skills-title" className="h-sec">{r.tech} skills on your team</h2></div>
          <ul data-rv style={{ '--d': '.1s' }} className="flex flex-wrap content-start gap-2.5">{r.tags.map((t) => <li key={t} className="rounded-2xl bg-cream-200 px-5 py-3.5 font-extrabold">{t}</li>)}</ul>
        </div>
      </section>
      <Plans who={`${r.tech} developer`} />
      <Steps steps={hireSteps(r.tech)} title="Simple 4-step hiring process" sub={`Share what you need, interview ${r.tech} candidates, and start once you are happy.`} />
      <Faq items={hireFaqs(r.tech)} title={`Hiring ${r.tech} developers: FAQ`} />
      <section className="sec" aria-labelledby="more-title">
        <div className="wrap">
          <div data-rv><Kicker>More roles</Kicker><h2 id="more-title" className="h-sec mb-9">Hire other developers</h2></div>
          <div className="flex flex-wrap gap-2.5" data-rv style={{ '--d': '.1s' }}>
            {others.map((x) => <Link key={x.slug} to={`/hire/${x.slug}/`} className="rounded-full px-5 py-3 font-bold shadow-[inset_0_0_0_1px_rgba(18,52,152,.16)] transition-colors hover:bg-nova hover:text-cream">{x.label}</Link>)}
          </div>
        </div>
      </section>
      <Cta preset="Hire developers" title={`Ready to hire expert ${r.tech} developers?`} />
    </>
  );
}
