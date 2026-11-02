export const SITE = {
  name: 'Twenova',
  // TODO(owner): confirm the production domain. Change it here only; canonicals, sitemap, robots and schema follow.
  url: 'https://twenova.com',
  legalName: 'Twenova', // TODO(owner): registered business name if different
  description: 'Twenova is a software development agency based in India. It provides website development, mobile app development, custom software development and SaaS product development for startups and businesses in India and international markets.',
  country: 'India',
  address: '', // TODO(owner): public business address, if you want it published
  phone: '+91 95933 62928',
  phones: ['+91 95933 62928', '+91 87100 27526'],
  jurisdiction: 'India', // TODO(owner): city for legal jurisdiction, e.g. 'Kolkata, West Bengal'
  email: 'twenovaitc@gmail.com',
  slogan: 'Innovate. Build. Evolve.',
  location: 'India, serving clients worldwide',
  // Paste your Formspree form URL here (https://formspree.io → New form), for example
  // 'https://formspree.io/f/abcdwxyz'. You can also set VITE_FORM_ENDPOINT in Vercel instead.
  // While this is empty, forms open the visitor's email app with the message filled in.
  formEndpoint: '',
  // Add full profile URLs. Empty links are hidden from the footer automatically.
  social: { instagram: 'https://www.instagram.com/twe.nova/', facebook: 'https://www.facebook.com/profile.php?id=61594595612046', linkedin: '' }
};

// TODO(owner): for each project confirm it is client work, Twenova's role, the stack used, and permission to show it.
export const projects = [
  { name: 'Admission Points', url: 'https://www.admissionpoints.com/', domain: 'admissionpoints.com', mono: 'AP', category: 'Education', line: 'Website designed and developed by Twenova.', owner: 'Client project', role: 'Design and development', tags: ['Education', 'Lead generation'], color: '#123498' },
  { name: 'Kodlyx', url: 'https://kodlyx.com/', domain: 'kodlyx.com', mono: 'Kx', category: 'Technology', line: 'Website designed and developed by Twenova.', owner: 'Client project', role: 'Design and development', tags: ['Tech', 'Corporate'], color: '#061340' },
  { name: 'ClipUp Media', url: 'https://clipupmedia.com/', domain: 'clipupmedia.com', mono: 'CU', category: 'Media', line: 'Website designed and developed by Twenova.', owner: 'Client project', role: 'Design and development', tags: ['Media', 'Portfolio'], color: '#1B42B8' },
  { name: 'Dutch Travel Group', url: 'https://dutchtravelgroup.eu/', domain: 'dutchtravelgroup.eu', mono: 'DT', category: 'Travel, Europe', line: 'Website designed and developed by Twenova.', owner: 'Client project', role: 'Design and development', tags: ['Travel', 'Europe'], color: '#0A1F66' },
  { name: 'EasyTrip Tour & Travels', url: 'https://easytriptourandtravels.com/', domain: 'easytriptourandtravels.com', mono: 'ET', category: 'Tours & travel', line: 'Website designed and developed by Twenova.', owner: 'Client project', role: 'Design and development', tags: ['Travel', 'Booking'], color: '#163FAE' },
  { name: 'Coalfield Drug House', url: 'https://www.coalfielddrughouse.com/', domain: 'coalfielddrughouse.com', mono: 'CD', category: 'Healthcare & pharma', line: 'Website designed and developed by Twenova.', owner: 'Client project', role: 'Design and development', tags: ['Healthcare', 'Distribution'], color: '#0D2A82' },
  { name: 'Royal City DGP', url: 'https://www.royalcitydgp.com/', domain: 'royalcitydgp.com', mono: 'RC', category: 'Local business, Durgapur', line: 'Website designed and developed by Twenova.', owner: 'Client project', role: 'Design and development', tags: ['Local SEO', 'Brand site'], color: '#123498' }
];

export const apps = [
  { name: 'PharmSearch', store: 'Google Play', owner: 'Client project', url: 'https://play.google.com/store/apps/details?id=com.mmc.pharmsearch&hl=en_IN', category: 'Pharmacy search', screen: 'pharm', color: '#0A1F66' },
  { name: 'Deblakshmi Healthcare', store: 'App Store', owner: 'Client project', url: 'https://apps.apple.com/in/app/deblakshmi-healthcare/id6763724467', category: 'Healthcare', screen: 'health', color: '#123498' },
  { name: 'ERP School', store: 'Google Play', owner: 'Client project', url: 'https://play.google.com/store/apps/details?id=com.gd.erpschool&hl=en_IN', category: 'School management', screen: 'erp', color: '#061340' },
  { name: 'Smit Sir', store: 'Google Play', owner: 'Client project', url: 'https://play.google.com/store/apps/details?id=com.smitsir&hl=en_IN', category: 'Online classes', screen: 'class', color: '#1B42B8' },
  { name: 'Sudoku', store: 'Google Play', owner: 'Client project', url: 'https://play.google.com/store/apps/details?id=com.diamantgames.sudoku&hl=en_IN', category: 'Puzzle game', screen: 'sudoku', color: '#0D2A82' }
];

// Blog articles live in data/articles.js


export const homeFaqs = [
  ['How much does a website cost with Twenova?', 'Pricing depends on the number of pages, features and integrations. After a free consultation we send a fixed quote with a clear scope.'],
  ['How long does it take to build a website or app?', 'A business website usually takes 2 to 5 weeks. Mobile apps and custom software typically take 8 to 16 weeks, delivered in milestones.'],
  ['Is SEO included in every website?', 'Every site we build includes technical SEO basics: clean markup, fast loading, meta tags, structured data and a sitemap. Ongoing SEO campaigns are a separate service.'],
  ['Do you work with clients outside India?', 'Yes. We work with businesses in India and international markets, and schedule calls to suit your time zone.'],
  ['What happens after my website goes live?', 'Maintenance plans cover updates, backups, security monitoring and content changes, plus ongoing SEO if you need it.'],
  ['Can I hire a dedicated developer from Twenova?', 'Yes. Hire dedicated PHP, Laravel, Node.js, React, Angular, Vue, Flutter, iOS and Android developers monthly or hourly.']
];

export const industries = [
  ['cap', 'Education', 'Admission portals, online classes and school ERP apps.', 'Admission Points, Smit Sir, ERP School'],
  ['pill', 'Healthcare & pharma', 'Patient apps, medicine search and distributor sites.', 'Deblakshmi, PharmSearch, Coalfield'],
  ['plane', 'Travel & tourism', 'Package listings and booking enquiries for India and Europe.', 'Dutch Travel, EasyTrip'],
  ['film', 'Media & games', 'Showreel sites and casual games that stay fast.', 'ClipUp Media, Sudoku'],
  ['code', 'Technology', 'Corporate sites and SaaS front-ends.', 'Kodlyx'],
  ['bld', 'Local business', 'Brand websites with local SEO.', 'Royal City DGP']
];
