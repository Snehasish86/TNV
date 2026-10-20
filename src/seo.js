import { SITE, projects, apps, posts, homeFaqs } from './data/site.js';
import { services, serviceBySlug } from './data/services.js';
import { roles, roleBySlug } from './data/hire.js';
import { hireFaqs } from './data/common.js';
import { cases, caseBySlug } from './data/cases.js';

const ORG = { '@type': 'Organization', '@id': SITE.url + '/#org', name: 'tweNova', url: SITE.url + '/', logo: SITE.url + '/logo-mark.svg', slogan: SITE.slogan, email: SITE.email, areaServed: ['IN', 'EU'], ...(Object.values(SITE.social || {}).filter(Boolean).length ? { sameAs: Object.values(SITE.social).filter(Boolean) } : {}) };
const faqLd = (items) => ({ '@type': 'FAQPage', mainEntity: items.map(([q, a]) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })) });
const crumbs = (items) => ({ '@type': 'BreadcrumbList', itemListElement: items.map(([n, p], i) => ({ '@type': 'ListItem', position: i + 1, name: n, item: SITE.url + p })) });

export const ROUTES = [
  '/', '/about', '/services', ...services.map((s) => `/services/${s.slug}`), ...cases.map((c) => `/case-studies/${c.slug}`),
  '/hire', ...roles.map((r) => `/hire/${r.slug}`), '/portfolio', '/careers', '/blog', '/contact'
];

export function getMeta(pathname) {
  const p = pathname.replace(/\/+$/, '') || '/';
  const url = SITE.url + (p === '/' ? '/' : p);
  const base = { url, ld: [ORG], robots: 'index, follow, max-image-preview:large' };
  const m = (title, desc, ld = []) => ({ ...base, title, desc, ld: [ORG, ...ld] });

  if (p === '/') return m('tweNova | Web & App Development Company in India', 'tweNova designs and builds fast websites, iOS and Android apps and custom software for growing businesses. See 12 live projects and start yours.', [
    { '@type': 'WebSite', '@id': SITE.url + '/#site', url: SITE.url + '/', name: 'tweNova', publisher: { '@id': ORG['@id'] } },
    { '@type': 'ItemList', name: 'Work by tweNova', itemListElement: [...projects.map((x, i) => ({ '@type': 'ListItem', position: i + 1, url: x.url, name: x.name })), ...apps.map((x, i) => ({ '@type': 'ListItem', position: projects.length + i + 1, url: x.url, name: x.name }))] },
    ...apps.map((a) => ({ '@type': 'MobileApplication', name: a.name, operatingSystem: a.store === 'App Store' ? 'iOS' : 'Android', applicationCategory: /health|pharm/i.test(a.category) ? 'HealthApplication' : /game/i.test(a.category) ? 'GameApplication' : 'EducationalApplication', url: a.url, creator: { '@id': ORG['@id'] } })),
    faqLd(homeFaqs)
  ]);
  if (p === '/about') return m('About tweNova | Digital Product Studio in India', 'Meet tweNova: a digital studio for websites, mobile apps, AI and marketing. Our values, culture, vision and the team behind 50+ projects.', [crumbs([['Home', '/'], ['About', '/about']])]);
  if (p === '/services') return m('Services | Web, App, AI & Cloud Development | tweNova', 'Web development, mobile apps, AI/ML, product engineering, blockchain, cloud, UI/UX, SEO, e-commerce and security audit services from tweNova.', [crumbs([['Home', '/'], ['Services', '/services']]), { '@type': 'ItemList', itemListElement: services.map((s, i) => ({ '@type': 'ListItem', position: i + 1, url: `${SITE.url}/services/${s.slug}`, name: s.name })) }]);
  if (p.startsWith('/services/')) {
    const s = serviceBySlug[p.split('/')[2]];
    if (s) return m(s.seoTitle, s.seoDesc, [crumbs([['Home', '/'], ['Services', '/services'], [s.name, p]]), { '@type': 'Service', name: s.name, serviceType: s.name, description: s.lede, provider: { '@id': ORG['@id'] }, areaServed: ['IN', 'EU'], url }, faqLd(s.faqs)]);
  }
  if (p.startsWith('/case-studies/')) {
    const c = caseBySlug[p.split('/')[2]];
    if (c) return m(c.seoTitle, c.seoDesc, [crumbs([['Home', '/'], ['Services', '/services'], ['Security audit', '/services/security-audit'], [c.client, p]]),
      { '@type': 'Article', headline: c.headline, description: c.summary, author: { '@id': ORG['@id'] }, publisher: { '@id': ORG['@id'] }, about: { '@type': 'Organization', name: c.client }, mainEntityOfPage: url }]);
  }
  if (p === '/hire') return m('Hire Dedicated Developers in India | tweNova', 'Hire dedicated PHP, Laravel, Node.js, React, Angular, Vue, Flutter, iOS and Android developers. Onboard in 48 hours, hourly or monthly.', [crumbs([['Home', '/'], ['Hire developers', '/hire']]), faqLd(hireFaqs('developers'))]);
  if (p.startsWith('/hire/')) {
    const r = roleBySlug[p.split('/')[2]];
    if (r) return m(`Hire Dedicated ${r.tech} Developers | tweNova`, `Hire dedicated ${r.tech} developers from tweNova. Pre-vetted experts in ${r.tags.slice(0, 3).join(', ')}. Onboard in 48 hours with hourly, monthly or project plans.`, [crumbs([['Home', '/'], ['Hire developers', '/hire'], [r.tech, p]]), { '@type': 'Service', name: `Hire dedicated ${r.tech} developers`, serviceType: 'Dedicated developers', description: r.intro, provider: { '@id': ORG['@id'] }, url }, faqLd(hireFaqs(r.tech))]);
  }
  if (p === '/portfolio') return m('Portfolio | Websites & Mobile Apps by tweNova', 'See 12 live projects by tweNova: websites for education, travel, pharma and media brands, plus iOS and Android apps.', [crumbs([['Home', '/'], ['Work', '/portfolio']])]);
  if (p === '/careers') return m('Careers at tweNova | Developer & Designer Jobs', 'Join tweNova. Open roles for a full stack developer (remote) and a UI/UX designer (hybrid). Work on real products with a modern stack.', [crumbs([['Home', '/'], ['Careers', '/careers']]),
    { '@type': 'JobPosting', title: 'Full stack developer', description: 'Build and maintain web applications using modern frameworks.', datePosted: '2026-10-18', employmentType: 'FULL_TIME', jobLocationType: 'TELECOMMUTE', applicantLocationRequirements: { '@type': 'Country', name: 'India' }, hiringOrganization: { '@id': ORG['@id'] } },
    { '@type': 'JobPosting', title: 'UI/UX designer', description: 'Design clear, intuitive interfaces for websites and mobile apps.', datePosted: '2026-10-18', employmentType: 'FULL_TIME', jobLocation: { '@type': 'Place', address: { '@type': 'PostalAddress', addressCountry: 'IN' } }, hiringOrganization: { '@id': ORG['@id'] } }]);
  if (p === '/blog') return m('Insights | Technology, Design & Growth Blog | tweNova', 'Articles from tweNova on AI, tech stacks, web design trends and digital strategy for growing businesses.', [crumbs([['Home', '/'], ['Insights', '/blog']]), { '@type': 'Blog', name: 'tweNova Insights', url, blogPost: posts.map((x) => ({ '@type': 'BlogPosting', headline: x.title, datePublished: x.date, description: x.excerpt, author: { '@id': ORG['@id'] } })) }]);
  if (p === '/contact') return m('Contact tweNova | Start Your Website or App Project', 'Contact tweNova to start a website, mobile app or software project. Email twenovaitc@gmail.com. We reply within one working day.', [crumbs([['Home', '/'], ['Contact', '/contact']]), { '@type': 'ContactPage', url }]);
  return { ...base, title: 'Page not found | tweNova', desc: 'The page you are looking for does not exist.', robots: 'noindex, follow' };
}

export function headTags(pathname) {
  const m = getMeta(pathname);
  const e = (s) => String(s).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;');
  return [
    `<title>${e(m.title)}</title>`,
    `<meta name="description" content="${e(m.desc)}">`,
    `<meta name="robots" content="${m.robots}">`,
    `<link rel="canonical" href="${m.url}">`,
    `<meta property="og:type" content="website">`, `<meta property="og:site_name" content="tweNova">`,
    `<meta property="og:title" content="${e(m.title)}">`, `<meta property="og:description" content="${e(m.desc)}">`,
    `<meta property="og:url" content="${m.url}">`, `<meta property="og:image" content="${SITE.url}/og-cover.jpg">`, `<meta property="og:image:width" content="1200">`, `<meta property="og:image:height" content="630">`, `<meta property="og:image:alt" content="tweNova: Innovate. Build. Evolve.">`, `<meta property="og:locale" content="en_IN">`,
    `<meta name="twitter:card" content="summary_large_image">`, `<meta name="twitter:title" content="${e(m.title)}">`, `<meta name="twitter:description" content="${e(m.desc)}">`, `<meta name="twitter:image" content="${SITE.url}/og-cover.jpg">`,
    `<script type="application/ld+json">${JSON.stringify({ '@context': 'https://schema.org', '@graph': m.ld }).replace(/</g, '\\u003c')}</script>`
  ].join('\n');
}
