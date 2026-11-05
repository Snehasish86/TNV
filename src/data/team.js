// Founder profiles. Each person gets a page at /<slug>/ with Person structured data.
// Only facts approved by each founder should be added here. Empty fields are hidden on the site.
export const team = [
  {
    slug: 'founder',
    name: 'Snehasish Mandal',
    role: 'Founder',
    photo: '/images/team/snehasish-mandal-founder-twenova.jpg',
    photoW: 900, photoH: 1125,
    headline: 'Full-stack Java developer and Founder of Twenova.',
    bio: [
      'Snehasish Mandal is the Founder of Twenova and a full-stack Java developer. He works across the whole stack, from server-side logic, APIs and databases to the web interfaces people use every day.',
      'At Twenova, Snehasish leads the technical side of client projects and of Twenova’s own products, Make Your Own Course and R9Resume. He works with clients to turn their requirements into a clear plan, chooses the right architecture for each project, and makes sure what ships is reliable, secure and easy to maintain.',
      'His focus is simple: build software that solves a real business problem, explain the trade-offs honestly, and keep improving it after launch.'
    ],
    responsibilities: ['Technical direction and architecture', 'Full-stack and backend development', 'Project planning with clients', 'Twenova products: Make Your Own Course and R9Resume'],
    skills: ['Java', 'Full-stack development', 'Backend and API development', 'Databases', 'Web application architecture'],
    experience: [],
    message: '',
    // TODO(owner): add full public profile URLs
    links: { linkedin: '', github: '', portfolio: '' }
  },
  {
    slug: 'co-founder',
    name: 'Jhilik Das',
    role: 'Co-Founder',
    photo: '/images/team/jhilik-das-co-founder-twenova.jpg',
    photoW: 900, photoH: 1125,
    headline: 'Creative frontend developer and MERN stack developer, Co-Founder of Twenova.',
    bio: [
      'Jhilik Das is the Co-Founder of Twenova, a creative frontend developer and a MERN stack developer. She builds the parts of a product people see and touch, and connects them to the backend with MongoDB, Express.js, React and Node.js.',
      'At Twenova, Jhilik leads frontend development and the look and feel of client websites and apps. She turns designs into fast, responsive interfaces, adds the motion and details that make a product feel polished, and makes sure every screen works well on phones as well as desktops.',
      'She cares about interfaces that are clear, accessible and enjoyable to use, so that customers understand a product at first glance.'
    ],
    responsibilities: ['Frontend development', 'User interface and interaction design', 'MERN stack development', 'Responsive and accessible web experiences'],
    skills: ['React', 'JavaScript', 'MongoDB', 'Express.js', 'Node.js', 'Frontend development', 'Responsive design', 'UI animation'],
    experience: [],
    message: '',
    // TODO(owner): add full public profile URLs
    links: { linkedin: '', github: '', portfolio: '' }
  }
];
export const personBySlug = Object.fromEntries(team.map((p) => [p.slug, p]));
