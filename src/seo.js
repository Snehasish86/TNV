// Per-route metadata and structured data. Used at build time (prerender) and during client-side navigation.
import { SITE, projects, apps, homeFaqs } from './data/site.js';
import { services, serviceBySlug, coreServices } from './data/services.js';
import { roles, roleBySlug } from './data/hire.js';
import { hireFaqs } from './data/common.js';
import { cases, caseBySlug } from './data/cases.js';
import { team } from './data/team.js';
import { articles, articleBySlug } from './data/articles.js';
import { legal } from './data/legal.js';
import { JOBS, JOBS_OPEN } from './data/jobs.js';
import { products, productBySlug } from './data/products.js';

const U = (p) => SITE.url + p;
const ORG_ID = U('/#organization');
const social = Object.values(SITE.social || {}).filter(Boolean);
const ORG = {
  '@type': 'Organization', '@id': ORG_ID, name: SITE.name, url: U('/'), logo: U('/twenova-logo.png'), description: SITE.description,
  email: SITE.email, slogan: SITE.slogan, areaServed: 'Worldwide', knowsAbout: coreServices.map((s) => s.name),
  founder: team.map((m) => ({ '@id': U(`/${m.slug}/#person`) })),
  ...(SITE.address ? { address: SITE.address } : { address: { '@type': 'PostalAddress', addressCountry: 'IN' } }),
  ...(SITE.phone ? { telephone: SITE.phone, contactPoint: (SITE.phones || [SITE.phone]).map((t) => ({ '@type': 'ContactPoint', telephone: t.replace(/\s/g, ''), contactType: 'sales', email: SITE.email, areaServed: 'Worldwide', availableLanguage: ['en', 'hi', 'bn'] })) } : {}),
  ...(social.length ? { sameAs: social } : {})
};
const faqLd = (items) => ({ '@type': 'FAQPage', mainEntity: items.map(([q, a]) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })) });
const crumbs = (items) => ({ '@type': 'BreadcrumbList', itemListElement: items.map(([n, p], i) => ({ '@type': 'ListItem', position: i + 1, name: n, item: U(p) })) });
const person = (m) => ({
  '@type': 'Person', '@id': U(`/${m.slug}/#person`), name: m.name, jobTitle: m.role, image: U(m.photo), url: U(`/${m.slug}/`),
  worksFor: { '@id': ORG_ID }, ...(Object.values(m.links || {}).filter(Boolean).length ? { sameAs: Object.values(m.links).filter(Boolean) } : {})
});

export const ROUTES = [
  '/', '/about-us/', '/our-process/', ...team.map((m) => `/${m.slug}/`),
  '/services/', ...services.map((s) => `/${s.slug}/`),
  '/portfolio/', '/products/', ...products.map((p) => `/products/${p.slug}/`), '/case-studies/', ...cases.map((c) => `/case-studies/${c.slug}/`),
  '/blog/', ...articles.map((a) => `/blog/${a.slug}/`), '/faqs/',
  '/hire/', ...roles.map((r) => `/hire/${r.slug}/`),
  '/careers/', '/contact/', ...legal.map((d) => `/${d.slug}/`)
];

export function getMeta(pathname) {
  const p = pathname === '/' ? '/' : pathname.replace(/\/*$/, '/');
  const url = U(p);
  const base = { url, robots: 'index, follow, max-image-preview:large' };
  const m = (title, desc, ld = []) => ({ ...base, title, desc, ld: [ORG, ...ld] });
  const seg = p.split('/').filter(Boolean);

  if (p === '/') return m('Twenova – Software Development Company in India', 'Twenova is a software development agency in India building custom websites, mobile apps, business software and SaaS products for startups and businesses worldwide.', [
    { '@type': 'WebSite', '@id': U('/#website'), url: U('/'), name: SITE.name, publisher: { '@id': ORG_ID }, inLanguage: 'en-IN' },
    { '@type': 'ItemList', name: 'Selected work by Twenova', itemListElement: [...projects, ...apps].map((x, i) => ({ '@type': 'ListItem', position: i + 1, url: x.url, name: x.name })) },
    faqLd(homeFaqs)
  ]);
  if (p === '/about-us/') return m('About Twenova | Software Development Agency in India', 'Twenova is a software development agency based in India, building websites, mobile apps, custom software and SaaS products for clients in India and abroad.', [crumbs([['Home', '/'], ['About us', p]]), { '@type': 'AboutPage', url, mainEntity: { '@id': ORG_ID } }]);
  if (p === '/our-process/') return m('Our Process | How Twenova Builds Software', 'How Twenova delivers projects: discovery, planning, design, development, testing, launch and ongoing support, with a review at every stage.', [crumbs([['Home', '/'], ['Our process', p]])]);
  const mem = team.find((x) => `/${x.slug}/` === p);
  if (mem) return m(`${mem.name} – ${mem.role} of Twenova`, `Meet ${mem.name}, ${mem.role} at Twenova, a software development agency based in India building websites, apps and software products.`, [crumbs([['Home', '/'], ['About us', '/about-us/'], [mem.name, p]]), person(mem), { '@type': 'ProfilePage', url, mainEntity: { '@id': U(`/${mem.slug}/#person`) } }]);
  if (p === '/services/') return m('Software Development Services | Twenova', 'Website, mobile app, custom software and SaaS development by Twenova, plus UI/UX, branding and logo design, PR campaigns, e-commerce and security audits.', [crumbs([['Home', '/'], ['Services', p]]), { '@type': 'ItemList', itemListElement: services.map((s, i) => ({ '@type': 'ListItem', position: i + 1, url: U(`/${s.slug}/`), name: s.name })) }]);
  if (seg.length === 1 && serviceBySlug[seg[0]]) {
    const s = serviceBySlug[seg[0]];
    return m(s.seoTitle, s.seoDesc, [crumbs([['Home', '/'], ['Services', '/services/'], [s.name, p]]), { '@type': 'Service', '@id': url + '#service', name: s.name, serviceType: s.name, description: s.lede, provider: { '@id': ORG_ID }, areaServed: 'Worldwide', url }, faqLd(s.faqs)]);
  }
  if (p === '/portfolio/') return m('Portfolio | Websites and Mobile Apps by Twenova', 'Selected websites and mobile apps designed and developed by Twenova for clients in education, healthcare, travel, media and local business.', [crumbs([['Home', '/'], ['Portfolio', p]])]);
  if (p === '/products/') return m('Products by Twenova | Make Your Own Course and R9Resume', 'Twenova’s own products: Make Your Own Course, a full LMS where teachers earn on their own terms, and R9Resume, an ATS-friendly AI resume builder for ₹9.', [crumbs([['Home', '/'], ['Products', p]]), { '@type': 'ItemList', itemListElement: products.map((x, i) => ({ '@type': 'ListItem', position: i + 1, url: U(`/products/${x.slug}/`), name: x.name })) }]);
  if (seg[0] === 'products' && productBySlug[seg[1]]) {
    const x = productBySlug[seg[1]];
    return m(x.seoTitle, x.seoDesc, [crumbs([['Home', '/'], ['Products', '/products/'], [x.name, p]]), { '@type': 'SoftwareApplication', '@id': url + '#app', name: x.name, description: x.intro, applicationCategory: x.slug === 'r9resume' ? 'BusinessApplication' : 'EducationalApplication', operatingSystem: 'Web', image: U(x.image), url: x.url || url, creator: { '@id': ORG_ID }, publisher: { '@id': ORG_ID }, ...(x.price ? { offers: { '@type': 'Offer', price: x.price, priceCurrency: x.currency } } : {}) }]);
  }
  if (p === '/case-studies/') return m('Case Studies | Twenova', 'Projects delivered by Twenova, including security audits for healthcare organisations, with details shared only where clients approve.', [crumbs([['Home', '/'], ['Case studies', p]])]);
  if (seg[0] === 'case-studies' && caseBySlug[seg[1]]) {
    const c = caseBySlug[seg[1]];
    return m(c.seoTitle, c.seoDesc, [crumbs([['Home', '/'], ['Case studies', '/case-studies/'], [c.client, p]]), { '@type': 'Article', headline: c.headline, description: c.summary, author: { '@id': ORG_ID }, publisher: { '@id': ORG_ID }, mainEntityOfPage: url, about: { '@type': 'Organization', name: c.client } }]);
  }
  if (p === '/blog/') return m('Blog | Guides on Websites, Apps and Software | Twenova', 'Practical guides from Twenova on planning and building websites, mobile apps, custom software and SaaS products.', [crumbs([['Home', '/'], ['Blog', p]]), { '@type': 'Blog', '@id': url + '#blog', name: 'Twenova Blog', url, publisher: { '@id': ORG_ID } }]);
  if (seg[0] === 'blog' && articleBySlug[seg[1]]) {
    const a = articleBySlug[seg[1]];
    return m(`${a.title} | Twenova`, a.desc, [crumbs([['Home', '/'], ['Blog', '/blog/'], [a.title, p]]), { '@type': 'Article', headline: a.title, description: a.desc, datePublished: a.date, dateModified: a.updated, author: { '@type': 'Organization', name: a.author, url: U('/') }, publisher: { '@id': ORG_ID }, mainEntityOfPage: url, image: U('/og-cover.jpg'), isPartOf: { '@id': U('/blog/#blog') } }]);
  }
  if (p === '/faqs/') return m('FAQs | Twenova', 'Answers to common questions about working with Twenova: cost, timelines, process, ownership, support and hiring dedicated developers.', [crumbs([['Home', '/'], ['FAQs', p]])]);
  if (p === '/hire/') return m('Hire Dedicated Developers in India | Twenova', 'Hire dedicated PHP, Laravel, Node.js, React, Angular, Vue, Flutter, iOS and Android developers from Twenova on hourly, monthly or project plans.', [crumbs([['Home', '/'], ['Hire developers', p]]), faqLd(hireFaqs('developers'))]);
  if (seg[0] === 'hire' && roleBySlug[seg[1]]) {
    const r = roleBySlug[seg[1]];
    return m(`Hire Dedicated ${r.tech} Developers | Twenova`, `Hire dedicated ${r.tech} developers from Twenova for ${r.tags.slice(0, 3).join(', ')} work, on hourly, monthly or project-based plans.`, [crumbs([['Home', '/'], ['Hire developers', '/hire/'], [r.tech, p]]), { '@type': 'Service', name: `Hire dedicated ${r.tech} developers`, serviceType: 'Dedicated developers', description: r.intro, provider: { '@id': ORG_ID }, url }, faqLd(hireFaqs(r.tech))]);
  }
  if (p === '/careers/') return m('Careers at Twenova', 'Interested in working with Twenova? See current openings or send your CV and portfolio to the Twenova team.', [crumbs([['Home', '/'], ['Careers', p]]),
    ...(JOBS_OPEN ? JOBS.map((j) => ({ '@type': 'JobPosting', title: j.t, description: j.d, datePosted: '2026-11-02', employmentType: 'FULL_TIME', hiringOrganization: { '@id': ORG_ID }, ...(j.loc === 'Remote' ? { jobLocationType: 'TELECOMMUTE', applicantLocationRequirements: { '@type': 'Country', name: 'India' } } : { jobLocation: { '@type': 'Place', address: { '@type': 'PostalAddress', addressCountry: 'IN' } } }) })) : [])]);
  if (p === '/contact/') return m('Contact Twenova | Start Your Project', `Contact Twenova to discuss a website, mobile app, custom software or SaaS project. Email ${SITE.email}.`, [crumbs([['Home', '/'], ['Contact', p]]), { '@type': 'ContactPage', url, mainEntity: { '@id': ORG_ID } }]);
  const lg = legal.find((d) => `/${d.slug}/` === p);
  if (lg) return m(`${lg.title} | Twenova`, lg.desc, [crumbs([['Home', '/'], [lg.title, p]])]);
  return { url: U('/404/'), title: 'Page not found | Twenova', desc: 'The page you are looking for does not exist.', robots: 'noindex, follow', ld: [ORG], notFound: true };
}

export function headTags(pathname) {
  const m = getMeta(pathname);
  const e = (s) => String(s).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;');
  return [
    `<title>${e(m.title)}</title>`,
    `<meta name="description" content="${e(m.desc)}">`,
    `<meta name="robots" content="${m.robots}">`,
    ...(m.notFound ? [] : [`<link rel="canonical" href="${m.url}">`]),
    `<meta property="og:type" content="${pathname.startsWith('/blog/') && pathname.length > 6 ? 'article' : 'website'}">`, `<meta property="og:site_name" content="${SITE.name}">`,
    `<meta property="og:title" content="${e(m.title)}">`, `<meta property="og:description" content="${e(m.desc)}">`,
    `<meta property="og:url" content="${m.url}">`, `<meta property="og:image" content="${U('/og-cover.jpg')}">`, `<meta property="og:image:width" content="1200">`, `<meta property="og:image:height" content="630">`, `<meta property="og:image:alt" content="Twenova: software development company in India">`, `<meta property="og:locale" content="en_IN">`,
    `<meta name="twitter:card" content="summary_large_image">`, `<meta name="twitter:title" content="${e(m.title)}">`, `<meta name="twitter:description" content="${e(m.desc)}">`, `<meta name="twitter:image" content="${U('/og-cover.jpg')}">`,
    `<script type="application/ld+json">${JSON.stringify({ '@context': 'https://schema.org', '@graph': m.ld }).replace(/</g, '\\u003c')}</script>`
  ].join('\n');
}

// Text files generated at build time from the same data.
export function siteFiles() {
  const robots = `User-agent: *\nAllow: /\n\nSitemap: ${U('/sitemap.xml')}\n`;
  const L = (t, p, d) => `- [${t}](${U(p)})${d ? `: ${d}` : ''}`;
  const llms = [
    `# ${SITE.name}`, '', `> ${SITE.description}`, '',
    'See the official service pages, portfolio and case studies below for current capabilities and project evidence.', '',
    '## Company', L('About Twenova', '/about-us/'), L('Our process', '/our-process/'), ...team.map((m) => L(`${m.name}, ${m.role}`, `/${m.slug}/`)), L('Contact', '/contact/', SITE.email), '',
    '## Core services', ...coreServices.map((s) => L(s.name, `/${s.slug}/`, s.short)), '',
    '## More services', ...services.filter((s) => !s.core).map((s) => L(s.name, `/${s.slug}/`, s.short)), '',
    '## Twenova products', ...products.map((x) => L(x.name, `/products/${x.slug}/`, x.tagline)), '',
    '## Work', L('Portfolio', '/portfolio/', 'Client websites and mobile apps'), L('Case studies', '/case-studies/'), '',
    '## Guides', ...articles.map((a) => L(a.title, `/blog/${a.slug}/`, a.desc)), L('FAQs', '/faqs/'), ''
  ].join('\n');
  return { robots, llms };
}
