export const SITE = {
  name: 'tweNova',
  url: 'https://www.twenova.com',
  email: 'twenovaitc@gmail.com',
  slogan: 'Innovate. Build. Evolve.',
  location: 'India, serving clients worldwide',
  // Paste your Formspree form URL here (https://formspree.io → New form), for example
  // 'https://formspree.io/f/abcdwxyz'. You can also set VITE_FORM_ENDPOINT in Vercel instead.
  // While this is empty, forms open the visitor's email app with the message filled in.
  formEndpoint: '',
  // Add full profile URLs. Empty links are hidden from the footer automatically.
  social: { linkedin: '', instagram: '', facebook: '' }
};

export const projects = [
  { name: 'Admission Points', url: 'https://www.admissionpoints.com/', domain: 'admissionpoints.com', mono: 'AP', category: 'Education', line: 'Admission guidance platform that helps students compare colleges, courses and fees.', tags: ['Education', 'Lead generation'], color: '#123498' },
  { name: 'Kodlyx', url: 'https://kodlyx.com/', domain: 'kodlyx.com', mono: 'Kx', category: 'Technology', line: 'Corporate website for a software and IT services brand.', tags: ['Tech', 'Corporate'], color: '#061340' },
  { name: 'ClipUp Media', url: 'https://clipupmedia.com/', domain: 'clipupmedia.com', mono: 'CU', category: 'Media', line: 'Showreel-led website for a video and content production studio.', tags: ['Media', 'Portfolio'], color: '#1B42B8' },
  { name: 'Dutch Travel Group', url: 'https://dutchtravelgroup.eu/', domain: 'dutchtravelgroup.eu', mono: 'DT', category: 'Travel, Europe', line: 'Travel company website built for European travellers and group bookings.', tags: ['Travel', 'Europe'], color: '#0A1F66' },
  { name: 'EasyTrip Tour & Travels', url: 'https://easytriptourandtravels.com/', domain: 'easytriptourandtravels.com', mono: 'ET', category: 'Tours & travel', line: 'Tour packages, destinations and quick booking enquiries in one place.', tags: ['Travel', 'Booking'], color: '#163FAE' },
  { name: 'Coalfield Drug House', url: 'https://www.coalfielddrughouse.com/', domain: 'coalfielddrughouse.com', mono: 'CD', category: 'Healthcare & pharma', line: 'Website for a pharmaceutical distributor serving the coalfield region.', tags: ['Healthcare', 'Distribution'], color: '#0D2A82' },
  { name: 'Royal City DGP', url: 'https://www.royalcitydgp.com/', domain: 'royalcitydgp.com', mono: 'RC', category: 'Local business, Durgapur', line: 'Brand website that puts a Durgapur business on the map and in search.', tags: ['Local SEO', 'Brand site'], color: '#123498' }
];

export const apps = [
  { name: 'PharmSearch', store: 'Google Play', url: 'https://play.google.com/store/apps/details?id=com.mmc.pharmsearch&hl=en_IN', category: 'Pharmacy search', screen: 'pharm', color: '#0A1F66' },
  { name: 'Deblakshmi Healthcare', store: 'App Store', url: 'https://apps.apple.com/in/app/deblakshmi-healthcare/id6763724467', category: 'Healthcare', screen: 'health', color: '#123498' },
  { name: 'ERP School', store: 'Google Play', url: 'https://play.google.com/store/apps/details?id=com.gd.erpschool&hl=en_IN', category: 'School management', screen: 'erp', color: '#061340' },
  { name: 'Smit Sir', store: 'Google Play', url: 'https://play.google.com/store/apps/details?id=com.smitsir&hl=en_IN', category: 'Online classes', screen: 'class', color: '#1B42B8' },
  { name: 'Sudoku', store: 'Google Play', url: 'https://play.google.com/store/apps/details?id=com.diamantgames.sudoku&hl=en_IN', category: 'Puzzle game', screen: 'sudoku', color: '#0D2A82' }
];

export const posts = [
  { slug: 'future-of-ai-2026', cat: 'Development', title: 'The future of AI in 2026', date: '2026-03-12', excerpt: 'How artificial intelligence is reshaping the digital landscape and opening new opportunities for businesses of every size.', body: ['AI is moving from experiments to everyday tools: chat assistants for customer support, smart search on websites and automation inside internal workflows.', 'For small and mid-size businesses, the opportunity is practical. Start with one repetitive process, measure the time saved and expand from there.'] },
  { slug: 'ai-in-digital-marketing', cat: 'Marketing', title: 'The role of AI in digital marketing', date: '2026-03-11', excerpt: 'Customers expect personalised experiences on every channel. Here is how AI makes that affordable.', body: ['AI helps segment audiences, write first drafts of ad copy and spot which campaigns are working, so your team spends time on strategy.', 'Keep a human in the loop: review generated content and check that personalisation respects user privacy.'] },
  { slug: 'choose-tech-stack-startup', cat: 'Engineering', title: 'How to choose the right tech stack for your startup', date: '2026-03-10', excerpt: 'The decision that shapes your speed, hiring and costs for years. A practical checklist.', body: ['Pick tools your team can hire for, that fit your budget and that have mature ecosystems. Boring technology is often the fastest way to launch.', 'Plan for growth, but do not over-engineer. A clean monolith beats a premature microservices setup for most early products.'] },
  { slug: 'web-design-trends-2026', cat: 'Design', title: 'Web design trends worth adopting in 2026', date: '2026-03-09', excerpt: 'Which trends improve conversions, and which only look good in a portfolio.', body: ['Bold typography, purposeful motion and fast-loading pages win. Heavy effects that slow the page down cost you visitors and rankings.', 'Test every trend against one question: does it help the visitor do what they came to do?'] },
  { slug: 'digital-strategy-for-growth', cat: 'Marketing', title: 'Digital strategy for growth', date: '2026-03-08', excerpt: 'Essential steps to building a digital strategy that drives real business results.', body: ['Start with clear goals, know your audience and choose the two or three channels where they spend time.', 'Measure monthly, keep what works and cut what does not. Strategy is a loop, not a document.'] }
];

export const homeFaqs = [
  ['How much does a website cost with tweNova?', 'Pricing depends on the number of pages, features and integrations. After a free consultation we send a fixed quote with a clear scope.'],
  ['How long does it take to build a website or app?', 'A business website usually takes 2 to 5 weeks. Mobile apps and custom software typically take 8 to 16 weeks, delivered in milestones.'],
  ['Is SEO included in every website?', 'Yes. Every site ships with technical SEO: clean markup, fast loading, structured data, meta tags, a sitemap and Search Console setup.'],
  ['Do you work with clients outside India?', 'Yes. We work with clients across India and Europe and schedule calls to fit your time zone.'],
  ['What happens after my website goes live?', 'Maintenance plans cover updates, backups, security monitoring and content changes, plus ongoing SEO if you need it.'],
  ['Can I hire a dedicated developer from tweNova?', 'Yes. Hire dedicated PHP, Laravel, Node.js, React, Angular, Vue, Flutter, iOS and Android developers monthly or hourly.']
];

export const industries = [
  ['cap', 'Education', 'Admission portals, online classes and school ERP apps.', 'Admission Points, Smit Sir, ERP School'],
  ['pill', 'Healthcare & pharma', 'Patient apps, medicine search and distributor sites.', 'Deblakshmi, PharmSearch, Coalfield'],
  ['plane', 'Travel & tourism', 'Package listings and booking enquiries for India and Europe.', 'Dutch Travel, EasyTrip'],
  ['film', 'Media & games', 'Showreel sites and casual games that stay fast.', 'ClipUp Media, Sudoku'],
  ['code', 'Technology', 'Corporate sites and SaaS front-ends.', 'Kodlyx'],
  ['bld', 'Local business', 'Brand websites with local SEO.', 'Royal City DGP']
];
