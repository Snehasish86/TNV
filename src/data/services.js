// Each service has its own page at /<slug>/ . Set enabled: false on any service Twenova does not offer.
const ALL = [
  {
    slug: 'web-development', legacy: 'web', icon: 'code', name: 'Web development', core: true,
    short: 'Fast, SEO-ready websites and web apps built around how your business works.',
    title: 'Web development that turns visitors into customers',
    lede: 'Business websites, portals and web applications that load fast, rank well and are easy for your team to update.',
    seoTitle: 'Web Development Company in India | Twenova',
    seoDesc: 'Custom websites and web applications by Twenova: fast, responsive, SEO-ready builds with PHP, Laravel, React and Node.js. Get a free quote.',
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
      ['Fast by default', 'Lean code and optimised images so pages load quickly, even on mobile data.'],
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
    slug: 'mobile-app-development', legacy: 'mobile', icon: 'mobile', name: 'Mobile app development', core: true,
    short: 'iOS and Android apps designed to grow revenue and keep users coming back.',
    title: 'Mobile apps people open every day',
    lede: 'Native and cross-platform apps for iOS and Android, from first prototype to App Store and Google Play launch.',
    seoTitle: 'Mobile App Development Company | iOS & Android | Twenova',
    seoDesc: 'Twenova builds iOS and Android apps with Flutter, React Native, Swift and Kotlin. From MVP to store launch, with design, backend and support.',
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
    slug: 'custom-software-development', legacy: 'custom', icon: 'layers', name: 'Custom software development', core: true,
    short: 'Business software built around the way your team actually works.',
    title: 'Custom software for workflows off-the-shelf tools cannot handle',
    lede: 'When spreadsheets and ready-made tools start slowing your team down, we design and build software that fits your process, connects to your other systems and grows with you.',
    seoTitle: 'Custom Software Development Company in India | Twenova',
    seoDesc: 'Twenova builds custom business software: internal tools, portals, dashboards, ERP and CRM modules and workflow automation, designed around your process.',
    overview: [
      'Ready-made software is a good start, but many businesses reach a point where they are paying for features they do not use and working around the ones they need. Custom software is worth considering when a process is central to how you make money, when you need several tools to talk to each other, or when your data and access rules are specific to your business.',
      'We start by mapping your current workflow, then agree on a first release that solves the most expensive problem. Every build includes user roles, documentation and a handover, so your team stays in control after launch.'
    ],
    offerings: [
      ['layers', 'Internal tools and portals', 'Admin panels, staff portals and customer portals for your daily operations.'],
      ['chart', 'Dashboards and reporting', 'One place to see the numbers that matter, built from your own data.'],
      ['refresh', 'Workflow automation', 'Replace manual steps, repeated data entry and email chains.'],
      ['db', 'ERP and CRM modules', 'Modules for inventory, orders, billing, students or customers, where off-the-shelf tools fall short.'],
      ['chain', 'Integrations and APIs', 'Connect accounting, payments, messaging and other systems you already use.'],
      ['shield', 'Roles, permissions and audit trails', 'Control who can see and change what, with a record of important actions.']
    ],
    benefits: [
      ['Fits your process', 'Software shaped around how your team works, not the other way round.'],
      ['You own it', 'The code and data belong to you, with documentation for future developers.'],
      ['Grows in stages', 'Start with the most valuable module and add more as you go.'],
      ['Fewer manual steps', 'Automation removes repeated work and the errors that come with it.']
    ],
    process: [
      ['Discover', 'We map the current workflow, users, data and pain points.'],
      ['Plan', 'Agree the first release, architecture and acceptance criteria.'],
      ['Build and test', 'Development in short cycles with a staging link and QA.'],
      ['Roll out and support', 'Training, documentation, handover and ongoing support if you need it.']
    ],
    tech: ['PHP', 'Laravel', 'Node.js', 'React', 'Vue.js', 'MySQL', 'PostgreSQL', 'REST APIs', 'AWS', 'Docker'],
    work: ['ERP School'],
    faqs: [
      ['When is custom software better than ready-made software?', 'When a process is central to your business, when you need several tools to work together, or when monthly licences for features you do not use cost more than building what you need. If a ready-made tool fits well, we will tell you.'],
      ['Can it connect to the tools we already use?', 'Usually, yes. Most accounting, payment, messaging and CRM tools offer APIs. We confirm what is possible during discovery.'],
      ['Who owns the software?', 'You do. The source code, data and documentation are handed over to you.'],
      ['What happens when we need changes later?', 'Changes are scoped and estimated separately, or covered by a support plan if you choose one.']
    ]
  },
  {
    slug: 'ai-ml-development', legacy: 'ai', icon: 'spark', name: 'AI and ML development',
    short: 'Intelligent automation that saves time and speeds up growth.',
    title: 'AI that does real work for your business',
    lede: 'Chatbots, AI agents, smart search and predictive models that plug into the tools you already use.',
    seoTitle: 'AI & ML Development Services | Chatbots & Agents | Twenova',
    seoDesc: 'AI chatbots, agents, NLP, predictive analytics and automation from Twenova. Practical AI solutions integrated into your website, app or workflow.',
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
    slug: 'saas-development', legacy: 'product', icon: 'box', name: 'SaaS development', core: true,
    short: 'SaaS products and MVPs, from first version to a platform customers pay for.',
    title: 'SaaS product development, from MVP to a product customers pay for',
    lede: 'We help founders and companies plan, build and grow SaaS products: a focused MVP first, then the accounts, subscriptions, admin tools and scale a real product needs.',
    seoTitle: 'SaaS Development Company in India | SaaS MVP | Twenova',
    seoDesc: 'Twenova builds SaaS products and MVPs: product discovery, multi-user accounts, subscriptions and billing, admin panels and scalable cloud architecture.',
    overview: [
      'A SaaS product has to do more than work. Customers sign up on their own, pay on a schedule, invite their team and expect it to be available whenever they need it. We plan for that from the start, while keeping the first release small enough to launch and learn from.',
      'We begin with product discovery: who the users are, the one job the product must do well, and what can wait. Then we build the MVP, measure how people use it and add features based on real usage rather than guesses.'
    ],
    offerings: [
      ['rocket', 'SaaS MVP development', 'A focused first version with the core feature, sign-up and payments.'],
      ['pen', 'Product discovery and prototyping', 'Clickable prototypes to test the idea with users before full development.'],
      ['users', 'Accounts, teams and roles', 'Sign-up, login, team invites and role-based access, with data kept separate per customer account.'],
      ['coin', 'Subscriptions and billing', 'Plans, trials and recurring payments through Razorpay or Stripe.'],
      ['chart', 'Admin panel and analytics', 'Tools for your team to manage customers, plans and product usage.'],
      ['trend', 'Scaling and iteration', 'Performance, monitoring and new features as your customer base grows.']
    ],
    benefits: [
      ['Launch sooner', 'A tight MVP scope gets the product in front of customers earlier.'],
      ['Built for many customers', 'Account separation, roles and billing planned from day one.'],
      ['Clean architecture', 'A codebase that stays easy to change as the product grows.'],
      ['Transparent progress', 'Regular demos and a shared roadmap.']
    ],
    process: [
      ['Validate', 'Define the problem, the users and how success will be measured.'],
      ['Prototype', 'Test the core flow with a clickable design before writing production code.'],
      ['Build the MVP', 'Launch the smallest version that delivers real value.'],
      ['Grow', 'Iterate, monitor and scale based on how customers use the product.']
    ],
    tech: ['React', 'Next.js', 'Node.js', 'Laravel', 'PostgreSQL', 'MySQL', 'AWS', 'Docker', 'Razorpay', 'Stripe'],
    work: [],
    faqs: [
      ['What should go into a SaaS MVP?', 'Only what a customer needs to get the core value: the main feature, sign-up and login, and usually payments. Everything else waits until real users ask for it.'],
      ['How is SaaS pricing for development decided?', 'It depends on the features, number of user roles, integrations and billing setup. After a discovery call we share a scoped estimate.'],
      ['Can you add subscriptions and recurring billing?', 'Yes. We integrate payment providers such as Razorpay or Stripe for plans, trials and recurring payments.'],
      ['Who owns the product and code?', 'You do. All source code and intellectual property belong to you, and we can sign an NDA before discussing your idea.']
    ]
  },
  {
    slug: 'blockchain-development', legacy: 'blockchain', icon: 'chain', name: 'Blockchain development',
    short: 'Future-ready blockchain solutions for modern businesses.',
    title: 'Blockchain solutions built on solid engineering',
    lede: 'Smart contracts, decentralised apps and token platforms designed with security and real use cases first.',
    seoTitle: 'Blockchain Development Services | Smart Contracts | Twenova',
    seoDesc: 'Smart contract development, dApps, DeFi and NFT platforms by Twenova. Secure, audited blockchain solutions for real business needs.',
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
    seoTitle: 'Cloud & DevOps Services | AWS, CI/CD, Docker | Twenova',
    seoDesc: 'Cloud migration, CI/CD, Docker, Kubernetes and monitoring from Twenova. Reliable, cost-efficient infrastructure on AWS, Google Cloud and more.',
    overview: [
      'Slow releases and surprise outages cost money. We set up infrastructure that deploys automatically, scales with demand and alerts you before users notice a problem.',
      'We also review cloud bills. Right-sizing servers and removing waste often pays for the work itself.'
    ],
    offerings: [
      ['cloud', 'Cloud migration', 'Move from shared hosting or on-premise servers with a tested backup and rollback plan.'],
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
    seoTitle: 'UI/UX Design Services | Web & App Design | Twenova',
    seoDesc: 'User research, wireframes, prototypes, UI design and design systems by Twenova. Intuitive, accessible designs that convert visitors into customers.',
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
    slug: 'pr-campaigns', legacy: 'pr', icon: 'chat', name: 'PR campaigns',
    short: 'Campaigns that get your brand, launch or product talked about.',
    title: 'PR campaigns that get people talking about your brand',
    lede: 'We plan and run PR campaigns for launches, milestones and brand stories: the message, the content and the channels, so the right people hear about you.',
    seoTitle: 'PR Campaigns for Startups and Businesses | Twenova',
    seoDesc: 'Twenova plans and runs PR campaigns for product launches, announcements and brand stories: messaging, press material, content and campaign rollout.',
    overview: [
      'A good product can still go unnoticed. A PR campaign gives people a reason to pay attention: a clear story, told at the right moment, in the places your audience already looks.',
      'We start with what you want to achieve, such as a launch, a new service or a milestone, then shape the story, prepare the material and plan where and when it goes out. We keep the claims honest and the message consistent across every channel.'
    ],
    offerings: [
      ['rocket', 'Launch campaigns', 'Campaigns for new products, apps, websites and services.'],
      ['chat', 'Messaging and storytelling', 'The core story, key messages and the words your brand uses.'],
      ['pen', 'Press material', 'Press releases, media kits, founder bios and fact sheets.'],
      ['users', 'Social and community campaigns', 'Campaign content and posting plans for Instagram, LinkedIn and Facebook.'],
      ['film', 'Campaign creatives', 'Reels, posters and visuals that carry the campaign message.'],
      ['chart', 'Campaign reporting', 'A clear summary of what went out and how people responded.']
    ],
    benefits: [
      ['One clear story', 'The same message across your website, social media and press material.'],
      ['Ready-to-use material', 'Press releases, visuals and posts you can use again later.'],
      ['Built around a goal', 'Every campaign is planned around one outcome you choose.'],
      ['Design and content together', 'Creatives and copy made by the same team, so they match.']
    ],
    process: [
      ['Brief', 'Agree the goal, audience, timeline and what makes the story worth telling.'],
      ['Story', 'Shape the key messages and the angle for each channel.'],
      ['Create', 'Prepare press material, posts, reels and visuals.'],
      ['Launch and review', 'Roll out the campaign and share a summary of the response.']
    ],
    tech: ['Press releases', 'Media kits', 'Instagram', 'LinkedIn', 'Facebook', 'Reels', 'Canva', 'Figma'],
    work: [],
    faqs: [
      ['What kind of PR campaigns do you run?', 'Launches of products, apps and websites, announcements, milestones and brand stories, mainly through press material and social channels.'],
      ['Do you guarantee media coverage?', 'No. No honest agency can promise coverage. We prepare strong material and a clear plan to give your story the best chance.'],
      ['Can you also make the visuals and reels?', 'Yes. Our design team creates the posters, social posts and reels for the campaign.'],
      ['How long does a campaign take?', 'It depends on the goal and channels. We share a timeline after the first brief.']
    ]
  },
  {
    slug: 'branding-logo-design', legacy: 'branding', icon: 'pen', name: 'Branding and logo design',
    short: 'Logos and brand identities that make a strong first impression.',
    title: 'Branding and logo design that makes your business memorable',
    lede: 'We design logos and complete brand identities: the symbol, the colours, the type and the guidelines that keep your brand consistent everywhere.',
    seoTitle: 'Branding and Logo Design Company in India | Twenova',
    seoDesc: 'Logo design, brand identity, colour palettes, typography and brand guidelines by Twenova, for startups and businesses that want a strong first impression.',
    overview: [
      'Your logo is often the first thing people see. A clear, well-made identity makes a business look trustworthy before anyone reads a word, and keeps it recognisable on a website, an app icon, a business card or a social media profile.',
      'We start by understanding your business and audience, explore a few directions, and refine the chosen one into a complete identity. You receive the files in every format you need and a guideline document that explains how to use them.'
    ],
    offerings: [
      ['pen', 'Logo design', 'A distinctive logo and icon that work at every size, from favicon to billboard.'],
      ['layers', 'Brand identity', 'Colour palette, typography and visual style that fit together.'],
      ['refresh', 'Logo redesign', 'A modern update to an existing logo that keeps what people recognise.'],
      ['box', 'Brand guidelines', 'A guide that shows how to use the logo, colours and fonts correctly.'],
      ['mobile', 'Brand mockups', 'Your identity shown on websites, apps, social profiles and stationery.'],
      ['users', 'Social media kit', 'Profile pictures, cover banners and post templates in your brand style.']
    ],
    benefits: [
      ['Strong first impression', 'A professional identity that builds trust from the first look.'],
      ['Consistent everywhere', 'Guidelines keep the brand looking the same on every channel.'],
      ['All the files you need', 'Vector and image formats for print, web and social media.'],
      ['Design that explains itself', 'We show the thinking behind every shape and colour.']
    ],
    process: [
      ['Discover', 'Learn about your business, audience, competitors and taste.'],
      ['Explore', 'Present a few design directions to choose from.'],
      ['Refine', 'Develop the chosen direction into a complete identity.'],
      ['Deliver', 'Final files, mockups and brand guidelines.']
    ],
    tech: ['Logo design', 'Brand identity', 'Brand guidelines', 'Figma', 'Adobe Illustrator', 'SVG', 'Mockups'],
    work: [],
    faqs: [
      ['What do I receive at the end?', 'Your logo in vector and image formats (SVG, PNG, PDF), colour and font details, mockups and a brand guideline document.'],
      ['Can you redesign our existing logo?', 'Yes. We can modernise an existing logo while keeping what your customers already recognise.'],
      ['How many design options do I get?', 'We agree the number of initial directions and revision rounds in the proposal before we start.'],
      ['Who owns the final logo?', 'You do, once the project is paid in full.']
    ]
  },
  {
    slug: 'ecommerce-development', legacy: 'ecommerce', icon: 'cart', name: 'E-commerce development',
    short: 'Online stores with secure payments and easy product management.',
    title: 'Online stores that make buying easy',
    lede: 'Shopify, WooCommerce and custom storefronts with secure payments, inventory and order management.',
    seoTitle: 'E-commerce Website Development | Shopify & WooCommerce | Twenova',
    seoDesc: 'E-commerce development by Twenova: Shopify, WooCommerce and custom stores with Razorpay, Stripe, inventory and fast checkout.',
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
    seoTitle: 'Security Audit & VAPT Services in India | Twenova',
    seoDesc: 'Website, mobile app, API and server security audits (VAPT) by Twenova. OWASP-based testing, a prioritised fix plan and a retest. Trusted by hospitals.',
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

// Core services first, then the rest. Services with enabled: false are hidden everywhere (pages, menu, sitemap).
export const services = [...ALL.filter((s) => s.core), ...ALL.filter((s) => !s.core)].filter((s) => s.enabled !== false);
export const coreServices = services.filter((s) => s.core);
export const serviceBySlug = Object.fromEntries(services.map((s) => [s.slug, s]));
