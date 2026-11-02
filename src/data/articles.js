// Blog articles. Each has its own page at /blog/<slug>/ with Article structured data.
// TODO(owner): add a reviewer (name + role) once someone on the team has checked each article.
export const articles = [
  {
    slug: 'website-development-process',
    title: 'Website Development Process: From Idea to Launch',
    desc: 'The seven stages of building a business website, what happens in each one, and what you need to prepare so the project runs on time.',
    cat: 'Web development', date: '2026-11-02', updated: '2026-11-02', mins: 7,
    author: 'Twenova Team', reviewer: '',
    services: ['web-development', 'ui-ux-design'],
    answer: 'A website project usually moves through seven stages: discovery, planning and sitemap, content, design, development, testing, and launch with handover. Most delays come from content and feedback rather than code, so agreeing on who supplies what, and when, matters as much as choosing the technology.',
    sections: [
      ['1. Discovery: agree what the website must do', [
        'Before anyone designs a page, write down why the website exists. Is it there to generate enquiries, sell products, support existing customers, or recruit staff? Each goal leads to different pages and features.',
        { list: ['Who are the main visitors and what do they need to find quickly?', 'What should a visitor do next: call, fill a form, book, or buy?', 'Which competitor or reference sites do you like, and why?', 'What integrations are needed, such as payments, CRM, WhatsApp or booking tools?'] }
      ]],
      ['2. Planning: sitemap, features and scope', [
        'The answers from discovery become a sitemap (the list of pages and how they connect) and a feature list. This is the point to separate must-haves from nice-to-haves. A clear scope protects both budget and timeline, because every later change can be compared against it.',
        'This is also where the technology is chosen. A content-heavy company site may suit a CMS such as WordPress, while a site with custom logic, logins or dashboards may need a framework such as Laravel, React or Next.js.'
      ]],
      ['3. Content: the step that most often causes delays', [
        'Design works best when the real text and images exist. Placeholder text hides problems: a heading that is too long, a section with nothing useful to say, or a missing photo. Start collecting content early.',
        { list: ['Page copy for every page in the sitemap', 'Logo files, brand colours and fonts', 'Photos of your team, office, products or work', 'Testimonials and case studies, with permission from clients'] }
      ]],
      ['4. Design: wireframes first, then visuals', [
        'Wireframes are simple layouts that show where information goes on each page, without colours or styling. Agreeing on structure first makes the visual design faster and avoids rework. The visual design then applies your brand, and should be reviewed on mobile as well as desktop, since many visitors will arrive on a phone.'
      ]],
      ['5. Development: building on a staging site', [
        'Developers turn the approved design into a working website on a private staging link, so you can review progress without affecting your live site. Good development includes responsive layouts, accessible markup, optimised images and technical SEO basics such as titles, descriptions, headings, structured data and a sitemap.'
      ]],
      ['6. Testing: check before customers do', [
        { list: ['Pages on different phones, tablets and browsers', 'Every form, button and link, including what happens after a form is sent', 'Loading speed, especially on mobile data', 'Spelling, contact details, prices and legal pages', 'Redirects from old URLs, if you are replacing an existing site'] }
      ]],
      ['7. Launch and handover', [
        'At launch, the site moves to its live domain, HTTPS is confirmed, analytics and Google Search Console are connected, and the sitemap is submitted. A good handover includes access to every account, a short guide for updating content, and a plan for backups, updates and support.'
      ]],
      ['What you can do to keep the project on time', [
        'Name one person on your side who gives feedback and approvals. Collect content before design starts. Keep a list of changes and review them together at each stage rather than one by one. These habits usually save more time than any technical decision.'
      ]]
    ]
  },
  {
    slug: 'how-to-plan-an-mvp',
    title: 'How to Plan an MVP for Your Startup',
    desc: 'A practical guide to scoping a minimum viable product: choosing the one problem to solve, cutting features, and deciding what to measure after launch.',
    cat: 'Startups and SaaS', date: '2026-11-02', updated: '2026-11-02', mins: 8,
    author: 'Twenova Team', reviewer: '',
    services: ['saas-development', 'mobile-app-development'],
    answer: 'An MVP (minimum viable product) is the smallest version of your product that lets real users get the core value, so you can learn whether the idea works before investing in everything else. To plan one, define a single problem and user, list every feature, keep only those needed to solve that problem end to end, and decide in advance what you will measure after launch.',
    sections: [
      ['Start with one user and one problem', [
        'Most early products try to serve several audiences at once. Pick the user who feels the problem most and is most likely to pay or keep using the product. Describe the problem in one sentence from their point of view, for example: "Tutors spend hours every week chasing fee payments from parents."'
      ]],
      ['Map the core journey', [
        'Write the steps that user takes to get value, from first visit to the moment the problem is solved. For the tutor example: sign up, add students, send a payment request, get paid, see who is pending. Anything outside this journey is a candidate to cut.'
      ]],
      ['List every feature, then cut hard', [
        'Write down every feature you imagine, then sort them into three groups.',
        { list: ['Must have: without it, the core journey breaks.', 'Should have: improves the experience but the journey still works without it.', 'Later: useful once you have users and data.'] },
        'Build only the first group. Admin dashboards, detailed settings, multiple user roles and integrations often feel essential but can usually wait, or be handled manually at the start.'
      ]],
      ['Decide what "manual first" can replace', [
        'Many successful products began by doing some work by hand behind the scenes. Onboarding, reports or approvals can be handled by your team for the first customers. This lets you launch sooner and only automate what customers actually use.'
      ]],
      ['Choose a stack you can grow with', [
        'For most MVPs, choose well-supported, widely used technologies, so it is easy to hire developers and fix problems later. Plan basic foundations from day one, such as secure login, separate data for each customer account and backups, because these are expensive to add later.'
      ]],
      ['Define success before you launch', [
        'Pick two or three signals that show whether the MVP is working, and agree on them before launch, so you judge results honestly.',
        { list: ['Activation: how many sign-ups complete the core journey?', 'Retention: do users come back the following week?', 'Willingness to pay: do users accept a price, or upgrade?'] }
      ]],
      ['After launch: learn, then build', [
        'Talk to early users, watch where they get stuck, and review your success signals regularly. Use what you learn to decide what to build next. The goal of an MVP is not a small product; it is fast, reliable learning.'
      ]]
    ]
  },
  {
    slug: 'custom-software-vs-ready-made-software',
    title: 'Custom Software vs Ready-Made Software: How to Choose',
    desc: 'When an off-the-shelf tool is the right choice, when custom software makes more sense, and the questions to ask before deciding.',
    cat: 'Business software', date: '2026-11-02', updated: '2026-11-02', mins: 6,
    author: 'Twenova Team', reviewer: '',
    services: ['custom-software-development', 'saas-development'],
    answer: 'Ready-made software is usually the better choice when your process is standard and a popular tool already fits it well. Custom software makes more sense when the process is central to how you make money, when you need several systems to work together, or when workarounds and licences for unused features cost more over time than building what you need.',
    sections: [
      ['What each option means', [
        'Ready-made (off-the-shelf) software is built once and sold to many businesses, usually as a monthly subscription. Examples include accounting, CRM, HR and project management tools. Custom software is designed and built for one organisation and its specific way of working.'
      ]],
      ['When ready-made software is the right choice', [
        { list: ['Your process is similar to most businesses in your industry.', 'You need to start immediately.', 'The tool covers most of what you need without heavy workarounds.', 'Support, updates and security are handled by the vendor.'] },
        'If a well-known tool fits, use it. Building something custom to replace a good, inexpensive tool rarely pays off.'
      ]],
      ['When custom software makes more sense', [
        { list: ['The process is what makes your business different, so a generic tool would force you to work like everyone else.', 'Your team copies data between several tools, or uses spreadsheets to fill gaps.', 'You pay for many seats or modules but use a small part of them.', 'You need specific access rules, reports or approvals that tools do not support.', 'You want to own the system and its data, or offer it to your own customers.'] }
      ]],
      ['The middle path: integrate before you rebuild', [
        'Often the best answer is a mix: keep the ready-made tools that work well and build a small custom layer that connects them, automates the manual steps, or adds the one feature that is missing. This gives you most of the benefit at a fraction of the effort of rebuilding everything.'
      ]],
      ['Questions to ask before deciding', [
        { list: ['What does the current process cost in time, errors and licence fees each month?', 'Which part of the process causes the most frustration or lost revenue?', 'Could an integration or automation fix that part without a full rebuild?', 'Who will own, maintain and improve the software after launch?', 'How will the software need to grow over the next two to three years?'] }
      ]],
      ['How we approach it', [
        'At Twenova we start with the workflow, not the technology. If a ready-made tool or a simple integration solves the problem, we recommend it. When custom software is the right answer, we build it in stages, starting with the part that creates the most value, so you see results early and keep control of the budget.'
      ]]
    ]
  }
];
export const articleBySlug = Object.fromEntries(articles.map((a) => [a.slug, a]));
