// Each service has its own page at /services/:slug
export const services = [
  {
    slug: 'web-development', legacy: 'web', icon: 'code', name: 'Web development',
    short: 'Fast, SEO-ready websites and web apps built around how your business works.',
    title: 'Web development that turns visitors into customers',
    lede: 'Business websites, portals and web applications that load fast, rank well and are easy for your team to update.',
    seoTitle: 'Web Development Company in India | tweNova',
    seoDesc: 'Custom websites and web applications by tweNova: fast, responsive, SEO-ready builds with PHP, Laravel, React and Node.js. Get a free quote.',
    overview: [
      'Your website is often the first conversation a customer has with your business. We design and build sites that explain what you do in seconds, work perfectly on phones and load quickly on any connection.',
      'For more complex needs we build web applications: customer portals, booking systems, dashboards and internal tools, with clean code your team can maintain long after launch.'
    ],
    offerings: [
      ['layers', 'Business websites', 'Multi-page company sites with clear messaging, lead forms and analytics.'],
      ['code', 'Custom web applications', 'Portals, dashboards and booking systems built around your workflow.'],
      ['box', 'CMS development', 'WordPress or custom CMS so your team can edit content without a developer.'],
      ['bolt', 'Progressive web apps', 'App-like experiences that install from the browser and work offline.'],
      ['chain', 'API and integrations', 'Payment gateways, CRMs, ERPs and third-party services connected cleanly.'],
      ['refresh', 'Redesign and migration', 'Modernise an old site without losing your search rankings.']
    ],
    benefits: [
      ['Fast by default', 'Lean code and optimised assets, so pages load in about two seconds.'],
      ['Built to rank', 'Technical SEO, structured data and clean URLs are part of every build.'],
      ['Easy to update', 'Content you can change yourself, plus clear documentation.'],
      ['Secure and stable', 'HTTPS, backups and regular updates keep your site safe.']
    ],
    process: [
      ['Discover', 'We map your goals, audience and the pages you need.'],
      ['Design', 'Wireframes and a clickable design you approve before coding.'],
      ['Build', 'Development on a staging link with weekly reviews.'],
      ['Launch', 'Speed and SEO checks, go-live and training for your team.']
    ],
    tech: ['HTML5', 'CSS3', 'JavaScript', 'React', 'Next.js', 'PHP', 'Laravel', 'Node.js', 'WordPress', 'MySQL'],
    work: ['Admission Points', 'Kodlyx', 'Dutch Travel Group', 'Royal City DGP'],
    faqs: [
      ['How long does a business website take?', 'Most business websites take 2 to 5 weeks, depending on the number of pages and features.'],
      ['Will my website work on mobile?', 'Yes. Every site is designed mobile-first and tested on phones, tablets and desktops.'],
      ['Can I update the content myself?', 'Yes. We set up an easy editor and show your team how to use it.'],
      ['Do you provide hosting?', 'We can set up and manage hosting for you, or deploy to your existing provider.']
    ]
  },
  {
    slug: 'mobile-app-development', legacy: 'mobile', icon: 'mobile', name: 'Mobile app development',
    short: 'iOS and Android apps designed to grow revenue and keep users coming back.',
    title: 'Mobile apps people open every day',
    lede: 'Native and cross-platform apps for iOS and Android, from first prototype to App Store and Google Play launch.',
    seoTitle: 'Mobile App Development Company | iOS & Android | tweNova',
    seoDesc: 'tweNova builds iOS and Android apps with Flutter, React Native, Swift and Kotlin. From MVP to store launch, with design, backend and support.',
    overview: [
      'We have shipped apps for healthcare, pharmacy search, school management, online classes and games. Each one started with a simple question: what does the user need to do in under a minute?',
      'We handle everything: UX design, the app itself, the backend and admin panel, store listings and updates after launch.'
    ],
    offerings: [
      ['mobile', 'iOS apps', 'Native Swift and SwiftUI apps for iPhone and iPad.'],
      ['mobile', 'Android apps', 'Kotlin apps built for the wide range of Android devices.'],
      ['layers', 'Cross-platform apps', 'One codebase for both platforms with Flutter or React Native.'],
      ['db', 'Backend and admin panel', 'APIs, databases and dashboards to manage users and content.'],
      ['search', 'App Store optimisation', 'Listings, screenshots and keywords that help users find you.'],
      ['refresh', 'Maintenance and updates', 'OS updates, bug fixes and new features after launch.']
    ],
    benefits: [
      ['Proven in production', 'Our apps are live on the App Store and Google Play today.'],
      ['One team end to end', 'Design, app, backend and store launch handled together.'],
      ['Built for performance', 'Smooth on budget phones, not just flagships.'],
      ['Measurable results', 'Analytics and crash reporting set up from day one.']
    ],
    process: [
      ['Plan', 'Define features, users and the MVP scope.'],
      ['Design', 'Interactive prototype tested before development.'],
      ['Develop', 'Two-week sprints with test builds on your phone.'],
      ['Publish', 'Store submission, launch and ongoing updates.']
    ],
    tech: ['Flutter', 'React Native', 'Swift', 'SwiftUI', 'Kotlin', 'Firebase', 'Node.js', 'Laravel', 'REST APIs'],
    work: ['Deblakshmi Healthcare', 'PharmSearch', 'ERP School', 'Smit Sir', 'Sudoku'],
    faqs: [
      ['Should I build native or cross-platform?', 'Cross-platform (Flutter or React Native) suits most apps and saves cost. We recommend native when you need deep device features or the highest performance.'],
      ['How long does an app take to build?', 'An MVP usually takes 8 to 12 weeks. Larger apps are delivered in milestones.'],
      ['Do you publish the app to the stores?', 'Yes. We prepare the listing and handle submission to the App Store and Google Play.'],
      ['Who owns the app and code?', 'You do. The source code, store accounts and data belong to you.']
    ]
  },
  {
    slug: 'ai-ml-development', legacy: 'ai', icon: 'spark', name: 'AI and ML development',
    short: 'Intelligent automation that saves time and speeds up growth.',
    title: 'AI that does real work for your business',
    lede: 'Chatbots, AI agents, smart search and predictive models that plug into the tools you already use.',
    seoTitle: 'AI & ML Development Services | Chatbots & Agents | tweNova',
    seoDesc: 'AI chatbots, agents, NLP, predictive analytics and automation from tweNova. Practical AI solutions integrated into your website, app or workflow.',
    overview: [
      'AI is most valuable when it removes a repetitive task or answers customers faster. We start with one clear use case, prove the value and then expand.',
      'We work with leading AI APIs and open models, and we build the guardrails, data pipelines and dashboards that make AI dependable in production.'
    ],
    offerings: [
      ['chat', 'AI chatbots', 'Answer customer questions 24/7 on your website or WhatsApp.'],
      ['spark', 'AI agents', 'Automate multi-step tasks like lead qualification or report writing.'],
      ['search', 'Smart search', 'Search that understands meaning, not just keywords.'],
      ['trend', 'Predictive analytics', 'Forecast demand, churn or sales from your own data.'],
      ['layers', 'Document processing', 'Extract data from invoices, forms and PDFs automatically.'],
      ['shield', 'AI integration', 'Add AI features safely to your existing app or CRM.']
    ],
    benefits: [
      ['Start small', 'A focused pilot shows value before a bigger investment.'],
      ['Your data stays yours', 'Privacy-first design and clear data handling.'],
      ['Human in the loop', 'Review steps where accuracy matters.'],
      ['Measured impact', 'We track time saved and accuracy, not just usage.']
    ],
    process: [
      ['Identify', 'Pick the use case with the clearest return.'],
      ['Prototype', 'A working demo on your real data.'],
      ['Integrate', 'Connect to your systems with monitoring.'],
      ['Improve', 'Tune prompts and models based on results.']
    ],
    tech: ['OpenAI', 'Claude', 'Python', 'LangChain', 'Vector databases', 'TensorFlow', 'FastAPI', 'Node.js'],
    work: ['Kodlyx'],
    faqs: [
      ['Is AI expensive to run?', 'Costs depend on usage. We design for efficiency and give you a monthly estimate before launch.'],
      ['Can AI work with our existing data?', 'Yes. We connect to your documents, databases or CRM securely.'],
      ['Will the chatbot give wrong answers?', 'We limit answers to your approved content and add fallbacks to a human when unsure.'],
      ['How fast can we start?', 'A pilot is usually ready in 2 to 4 weeks.']
    ]
  },
  {
    slug: 'product-engineering', legacy: 'product', icon: 'box', name: 'Product engineering',
    short: 'Scalable software products from first prototype to growth.',
    title: 'From idea to a product people pay for',
    lede: 'We help founders and companies design, build and scale software products, from MVP to SaaS platform.',
    seoTitle: 'Product Engineering & MVP Development | tweNova',
    seoDesc: 'MVP development, prototyping, SaaS platforms and product scaling by tweNova. A product team that builds fast and grows with you.',
    overview: [
      'Building a product is different from building a project. We focus on the smallest version that proves your idea, then improve it with real user feedback.',
      'As you grow, we scale the architecture, add features and keep the codebase healthy so speed does not drop.'
    ],
    offerings: [
      ['rocket', 'MVP development', 'Launch a focused first version in weeks, not months.'],
      ['pen', 'Product prototyping', 'Clickable prototypes to test ideas with users and investors.'],
      ['layers', 'SaaS development', 'Multi-tenant platforms with billing, roles and dashboards.'],
      ['trend', 'Product scaling', 'Performance, architecture and infrastructure for growth.'],
      ['refresh', 'Legacy modernisation', 'Rebuild old systems on a modern, maintainable stack.'],
      ['users', 'Product team on demand', 'Designers, developers and QA working as your team.']
    ],
    benefits: [
      ['Speed to market', 'Ship early, learn fast and avoid building the wrong thing.'],
      ['Clean architecture', 'A codebase that stays easy to change as you grow.'],
      ['Business focused', 'Every feature tied to a user or revenue goal.'],
      ['Transparent progress', 'Weekly demos and a shared roadmap.']
    ],
    process: [
      ['Validate', 'Define the problem, users and success metrics.'],
      ['Prototype', 'Test the core flow before writing production code.'],
      ['Build the MVP', 'Launch the smallest valuable version.'],
      ['Grow', 'Iterate, scale and add features from real data.']
    ],
    tech: ['React', 'Next.js', 'Node.js', 'Laravel', 'PostgreSQL', 'AWS', 'Docker', 'Stripe', 'Razorpay'],
    work: ['ERP School', 'Admission Points'],
    faqs: [
      ['What is an MVP?', 'A minimum viable product is the simplest version that solves the core problem, so you can launch and learn quickly.'],
      ['How much does an MVP cost?', 'It depends on scope. After a short discovery call we give you a fixed quote.'],
      ['Can you work with our in-house team?', 'Yes. We can lead the build or join your existing team.'],
      ['Do you sign an NDA?', 'Yes, before we discuss any details of your idea.']
    ]
  },
  {
    slug: 'blockchain-development', legacy: 'blockchain', icon: 'chain', name: 'Blockchain development',
    short: 'Future-ready blockchain solutions for modern businesses.',
    title: 'Blockchain solutions built on solid engineering',
    lede: 'Smart contracts, decentralised apps and token platforms designed with security and real use cases first.',
    seoTitle: 'Blockchain Development Services | Smart Contracts | tweNova',
    seoDesc: 'Smart contract development, dApps, DeFi and NFT platforms by tweNova. Secure, audited blockchain solutions for real business needs.',
    overview: [
      'Blockchain makes sense when you need shared records, transparent transactions or digital ownership. We help you decide if it fits before writing any code.',
      'When it does, we build secure smart contracts, user-friendly apps on top of them and the backend that ties everything together.'
    ],
    offerings: [
      ['chain', 'Smart contracts', 'Secure, tested contracts for tokens, escrow and automation.'],
      ['layers', 'dApp development', 'Web apps that connect to wallets and the blockchain.'],
      ['coin', 'DeFi solutions', 'Staking, swaps and lending features with careful risk controls.'],
      ['box', 'NFT platforms', 'Minting, marketplaces and digital ownership features.'],
      ['shield', 'Security reviews', 'Code reviews and testing before contracts go live.'],
      ['db', 'Blockchain integration', 'Connect on-chain data to your existing systems.']
    ],
    benefits: [
      ['Security first', 'Thorough testing because deployed contracts are hard to change.'],
      ['Honest advice', 'We tell you when a regular database is the better choice.'],
      ['User friendly', 'Simple onboarding so non-crypto users can take part.'],
      ['Multi-chain', 'Ethereum, Polygon and other EVM-compatible networks.']
    ],
    process: [
      ['Assess', 'Confirm the use case and choose the right chain.'],
      ['Design', 'Contract architecture, token model and user flows.'],
      ['Build and test', 'Contracts, app and full test coverage on testnet.'],
      ['Deploy', 'Mainnet launch with monitoring and support.']
    ],
    tech: ['Solidity', 'Ethereum', 'Polygon', 'Hardhat', 'Ethers.js', 'Web3.js', 'IPFS', 'Node.js', 'React'],
    work: [],
    faqs: [
      ['Does my business need blockchain?', 'Only if you need shared, tamper-proof records or digital ownership. We will advise honestly.'],
      ['Which blockchain should I use?', 'It depends on cost, speed and audience. Polygon and other EVM chains are common choices.'],
      ['Are smart contracts safe?', 'They are when carefully written and tested. We test extensively and recommend an external audit for high-value contracts.'],
      ['Can users join without crypto knowledge?', 'Yes. We can add email login and simple wallets to remove friction.']
    ]
  },
  {
    slug: 'cloud-devops', legacy: 'cloud', icon: 'cloud', name: 'Cloud and DevOps',
    short: 'Reliable hosting, automated deployments and monitoring.',
    title: 'Cloud and DevOps that keep you online and moving fast',
    lede: 'Cloud migration, CI/CD pipelines and infrastructure as code, matched to your goals and budget.',
    seoTitle: 'Cloud & DevOps Services | AWS, CI/CD, Docker | tweNova',
    seoDesc: 'Cloud migration, CI/CD, Docker, Kubernetes and monitoring from tweNova. Reliable, cost-efficient infrastructure on AWS, Google Cloud and more.',
    overview: [
      'Slow releases and surprise outages cost money. We set up infrastructure that deploys automatically, scales with demand and alerts you before users notice a problem.',
      'We also review cloud bills. Right-sizing servers and removing waste often pays for the work itself.'
    ],
    offerings: [
      ['cloud', 'Cloud migration', 'Move from shared hosting or on-premise servers with zero data loss.'],
      ['refresh', 'CI/CD pipelines', 'Automatic testing and deployment on every code change.'],
      ['box', 'Containers', 'Docker and Kubernetes for consistent, scalable apps.'],
      ['code', 'Infrastructure as code', 'Reproducible environments with Terraform.'],
      ['chart', 'Monitoring and alerts', 'Uptime, logs and performance dashboards.'],
      ['coin', 'Cost optimisation', 'Lower cloud bills without hurting performance.']
    ],
    benefits: [
      ['Fewer outages', 'Redundancy, backups and alerts built in.'],
      ['Faster releases', 'Ship updates in minutes, not days.'],
      ['Lower costs', 'Pay for what you use, nothing more.'],
      ['Clear documentation', 'Your team knows exactly how everything runs.']
    ],
    process: [
      ['Audit', 'Review your current setup, costs and risks.'],
      ['Plan', 'Target architecture and migration plan.'],
      ['Implement', 'Build pipelines, migrate and test.'],
      ['Operate', 'Monitoring, support and ongoing optimisation.']
    ],
    tech: ['AWS', 'Google Cloud', 'DigitalOcean', 'Docker', 'Kubernetes', 'Terraform', 'GitHub Actions', 'Nginx', 'Cloudflare'],
    work: [],
    faqs: [
      ['Will my site go down during migration?', 'We plan migrations to avoid downtime, usually switching over at a low-traffic time.'],
      ['Which cloud provider is best?', 'AWS and Google Cloud suit most needs. Smaller projects often do well on DigitalOcean.'],
      ['Can you manage our servers long term?', 'Yes. Our support plans cover updates, monitoring and incident response.'],
      ['Do we need Kubernetes?', 'Not always. We recommend it only when your scale and team justify it.']
    ]
  },
  {
    slug: 'ui-ux-design', legacy: 'design', icon: 'pen', name: 'UI/UX design',
    short: 'Interfaces that look premium, feel intuitive and convert.',
    title: 'Design that makes the next step obvious',
    lede: 'User research, wireframes, interface design and design systems for websites and apps.',
    seoTitle: 'UI/UX Design Services | Web & App Design | tweNova',
    seoDesc: 'User research, wireframes, prototypes, UI design and design systems by tweNova. Intuitive, accessible designs that convert visitors into customers.',
    overview: [
      'Good design is not decoration. It helps people understand your offer and act on it. We design every screen around the one thing a user needs to do there.',
      'You get clickable prototypes to test early, and a design system that keeps your product consistent as it grows.'
    ],
    offerings: [
      ['users', 'User research', 'Interviews and analysis to understand what users need.'],
      ['layers', 'Wireframes', 'Page structure and flows agreed before visual design.'],
      ['pen', 'UI design', 'Polished, on-brand interfaces for web and mobile.'],
      ['bolt', 'Prototypes', 'Clickable prototypes for testing and investor demos.'],
      ['box', 'Design systems', 'Reusable components that keep products consistent.'],
      ['search', 'Usability testing', 'Watch real users and fix what slows them down.']
    ],
    benefits: [
      ['Higher conversions', 'Clear layouts and calls to action that guide users.'],
      ['Accessible', 'Readable contrast, sizes and keyboard support.'],
      ['Developer ready', 'Organised Figma files and specs for smooth handover.'],
      ['Brand consistent', 'Colours, type and tone applied everywhere.']
    ],
    process: [
      ['Research', 'Understand users, competitors and goals.'],
      ['Structure', 'Wireframes and user flows.'],
      ['Design', 'Visual design and prototypes.'],
      ['Test and hand over', 'Usability testing and developer handoff.']
    ],
    tech: ['Figma', 'FigJam', 'Adobe Illustrator', 'Protopie', 'Maze', 'Hotjar'],
    work: ['ClipUp Media', 'Admission Points', 'Deblakshmi Healthcare'],
    faqs: [
      ['Can you redesign our existing website?', 'Yes. We review what works today, keep it, and fix what does not.'],
      ['Do we get the design files?', 'Yes. You receive the full Figma files and assets.'],
      ['Do you also build the design?', 'Yes. Our developers can build it, or we hand over to your team.'],
      ['How many revisions are included?', 'Two rounds per stage are included, and we agree any extras up front.']
    ]
  },
  {
    slug: 'digital-marketing-seo', legacy: 'seo', icon: 'chart', name: 'Digital marketing and SEO',
    short: 'Data-driven marketing that reaches the right audience.',
    title: 'Be found first by the customers you want',
    lede: 'Technical SEO, local SEO, content and paid campaigns, reported every month in plain numbers.',
    seoTitle: 'SEO & Digital Marketing Services in India | tweNova',
    seoDesc: 'Technical SEO, local SEO, Google Ads, social media and content marketing from tweNova. Clear monthly reports focused on leads and sales.',
    overview: [
      'Traffic only matters if it turns into enquiries. We focus on the searches and audiences most likely to become customers, then measure leads, not just clicks.',
      'Our developers fix technical SEO issues directly in your code, which is often where the biggest gains are.'
    ],
    offerings: [
      ['search', 'Technical SEO', 'Speed, indexing, structured data and site health fixes.'],
      ['pin', 'Local SEO', 'Google Business Profile and local rankings for nearby customers.'],
      ['pen', 'Content strategy', 'Articles and pages that answer what customers search for.'],
      ['target', 'Google Ads', 'Search and display campaigns with tight budget control.'],
      ['users', 'Social media marketing', 'Organic and paid campaigns on the platforms your audience uses.'],
      ['chart', 'Analytics and reporting', 'GA4, conversions and a clear monthly report.']
    ],
    benefits: [
      ['Leads over vanity metrics', 'We report enquiries and sales, not just impressions.'],
      ['Developers on the team', 'Technical fixes done properly, not just recommended.'],
      ['Transparent pricing', 'You see exactly where the budget goes.'],
      ['No long lock-ins', 'Month-to-month plans after the first period.']
    ],
    process: [
      ['Audit', 'Technical, content and competitor review.'],
      ['Plan', 'Keyword map, content plan and channel budget.'],
      ['Execute', 'Fixes, content and campaigns launched.'],
      ['Report', 'Monthly results and next steps.']
    ],
    tech: ['Google Search Console', 'GA4', 'Google Ads', 'Meta Ads', 'Ahrefs', 'Semrush', 'Tag Manager', 'Looker Studio'],
    work: ['Royal City DGP', 'Coalfield Drug House', 'EasyTrip Tour & Travels'],
    faqs: [
      ['How long does SEO take to work?', 'Technical fixes can help within weeks. Strong ranking gains usually take 3 to 6 months.'],
      ['Do you guarantee first page rankings?', 'No one can honestly guarantee rankings. We commit to clear work and transparent results.'],
      ['Can you run our Google Ads?', 'Yes. We set up, manage and optimise campaigns with weekly checks.'],
      ['Will I get reports?', 'Yes, a plain-language report every month with leads, rankings and next steps.']
    ]
  },
  {
    slug: 'ecommerce-development', legacy: 'ecommerce', icon: 'cart', name: 'E-commerce development',
    short: 'Online stores with secure payments and easy product management.',
    title: 'Online stores that make buying easy',
    lede: 'Shopify, WooCommerce and custom storefronts with secure payments, inventory and order management.',
    seoTitle: 'E-commerce Website Development | Shopify & WooCommerce | tweNova',
    seoDesc: 'E-commerce development by tweNova: Shopify, WooCommerce and custom stores with Razorpay, Stripe, inventory and fast checkout.',
    overview: [
      'Every extra step in checkout loses sales. We design stores that make products easy to find and buying quick, especially on mobile.',
      'Behind the scenes, we connect payments, shipping, inventory and accounting so your team spends less time on admin.'
    ],
    offerings: [
      ['cart', 'Shopify stores', 'Custom themes and apps on the Shopify platform.'],
      ['box', 'WooCommerce stores', 'Flexible WordPress-based stores you fully control.'],
      ['code', 'Custom storefronts', 'Headless or fully custom builds for unique needs.'],
      ['coin', 'Payment integration', 'Razorpay, Stripe, PayPal, UPI and cash on delivery.'],
      ['truck', 'Shipping and inventory', 'Courier integration, stock sync and order tracking.'],
      ['chart', 'Store growth', 'SEO, analytics and conversion improvements after launch.']
    ],
    benefits: [
      ['Fast checkout', 'Fewer steps and trusted payment options.'],
      ['Mobile first', 'Most shoppers buy on phones, so we design for them first.'],
      ['Easy management', 'Add products and manage orders without technical help.'],
      ['Secure', 'PCI-compliant payment providers and SSL as standard.']
    ],
    process: [
      ['Plan', 'Catalogue, payments, shipping and platform choice.'],
      ['Design', 'Store layout and product page design.'],
      ['Build', 'Store setup, integrations and product import.'],
      ['Launch', 'Test orders, go-live and training.']
    ],
    tech: ['Shopify', 'WooCommerce', 'Magento', 'React', 'Next.js', 'Razorpay', 'Stripe', 'Shiprocket'],
    work: [],
    faqs: [
      ['Shopify or WooCommerce?', 'Shopify is easiest to run. WooCommerce gives more control and lower fees. We help you choose.'],
      ['Can you migrate my existing store?', 'Yes, including products, customers and order history where possible.'],
      ['Which payment gateways do you support?', 'Razorpay, Stripe, PayPal, PayU, UPI and cash on delivery, among others.'],
      ['How long does a store take?', 'A standard store takes 3 to 6 weeks, depending on catalogue size and integrations.']
    ]
  },
  {
    slug: 'security-audit', legacy: 'security', icon: 'shield', name: 'Security audit',
    short: 'Find and fix security gaps in your website, apps and servers before attackers do.',
    title: 'Security audits that protect your data and your patients',
    lede: 'We test your websites, apps, APIs and servers the way an attacker would, then give you a clear, prioritised plan to fix every gap.',
    seoTitle: 'Security Audit & VAPT Services in India | tweNova',
    seoDesc: 'Website, mobile app, API and server security audits (VAPT) by tweNova. OWASP-based testing, a prioritised fix plan and a retest. Trusted by hospitals.',
    overview: [
      'A single weak password, an outdated plugin or an exposed API can leak customer data and stop your business for days. Hospitals, clinics and other businesses that hold sensitive records are frequent targets.',
      'Our security audit combines automated scanning with manual testing by our engineers. You get a report written in plain language, a ranked list of fixes, and a retest to confirm every issue is closed.'
    ],
    offerings: [
      ['globe', 'Website and web app testing', 'OWASP Top 10 checks: injection, broken login, exposed data, misconfiguration and more.'],
      ['mobile', 'Mobile app security', 'Android and iOS apps checked for insecure storage, weak APIs and data leaks.'],
      ['chain', 'API security testing', 'Authentication, access control and data exposure across every endpoint.'],
      ['db', 'Server and cloud review', 'Open ports, patch levels, firewall rules, backups and cloud permissions.'],
      ['lock', 'Access and password review', 'Admin accounts, user roles, two-factor login and password policies.'],
      ['check', 'Fix support and retest', 'We help your team fix issues, or fix them for you, then retest to confirm.']
    ],
    benefits: [
      ['Plain-language report', 'Every finding explained with its risk, proof and exact steps to fix it.'],
      ['Prioritised by risk', 'Critical and high issues first, so your team fixes what matters most.'],
      ['Safe testing', 'Agreed scope, testing windows and no disruption to live services.'],
      ['Confidential', 'NDA before we start, and findings shared only with your team.']
    ],
    process: [
      ['Scope', 'We agree on the systems to test, test windows and access rules.'],
      ['Test', 'Automated scans plus manual testing of logins, data and APIs.'],
      ['Report', 'A ranked report with risk ratings, evidence and fix steps.'],
      ['Retest', 'After fixes, we retest and confirm every issue is closed.']
    ],
    tech: ['OWASP Top 10', 'OWASP MASVS', 'Burp Suite', 'OWASP ZAP', 'Nmap', 'Nessus', 'SSL Labs', 'MobSF'],
    work: [],
    cases: ['sonoscan-hospital', 'mmc-hospital', 'drl-hospital'],
    faqs: [
      ['What is the difference between a security audit and VAPT?', 'VAPT (vulnerability assessment and penetration testing) is the hands-on testing part. Our security audit includes VAPT plus a review of servers, access and policies, with a full report.'],
      ['Will the audit slow down or break our live systems?', 'No. We agree on a scope and testing window in advance and use safe testing methods. Heavier tests can run on a staging copy.'],
      ['How long does a security audit take?', 'A typical website or app audit takes 5 to 10 working days, plus a retest after your team applies the fixes.'],
      ['Do you keep our data confidential?', 'Yes. We sign an NDA before starting, and findings are shared only with the people you choose.']
    ]
  }
];

export const serviceBySlug = Object.fromEntries(services.map((s) => [s.slug, s]));
