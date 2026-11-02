// Twenova's own products (not client work). Each has a page at /products/<slug>/
export const products = [
  {
    slug: 'make-your-own-course',
    name: 'Make Your Own Course',
    tagline: 'A complete LMS where teachers create courses and earn on their own terms.',
    status: 'Ongoing',
    category: 'Learning management system (LMS)',
    image: '/images/products/make-your-own-course-lms-twenova.jpg', imageW: 1255, imageH: 777,
    url: '', // TODO(owner): public product URL
    intro: 'Make Your Own Course is a full learning management system built by Twenova. Teachers create and publish their own courses and earn on their own terms, while learners find practical courses in one place.',
    forWho: [
      ['users', 'For teachers', 'Create your own courses, set them up the way you teach, and earn from your knowledge on your own terms.'],
      ['rocket', 'For learners', 'Find practical courses in one place to learn new skills and grow your career.']
    ],
    features: ['Teachers create and publish their own courses', 'Teachers earn on their own terms', 'Course catalogue for learners', 'Learner accounts and login', 'One platform for all learning'],
    seoTitle: 'Make Your Own Course: LMS for Teachers to Earn | Twenova',
    seoDesc: 'Make Your Own Course is a full LMS built by Twenova where teachers create courses and earn on their own terms, and learners find practical courses in one place.'
  },
  {
    slug: 'r9resume',
    name: 'R9Resume',
    tagline: 'An ATS-friendly resume, built with AI, for just ₹9.',
    status: 'Ongoing',
    category: 'AI resume builder',
    image: '/images/products/r9resume-ai-resume-builder-twenova.jpg', imageW: 1232, imageH: 807,
    url: '', // TODO(owner): public product URL
    price: '9', currency: 'INR',
    intro: 'R9Resume is an AI resume builder from Twenova. Build your resume with the help of AI, see it live as you write, and download a recruiter-ready, ATS-friendly PDF. It is free to build and costs ₹9 per resume.',
    forWho: [
      ['users', 'For job seekers', 'Students, freshers and professionals who need a clean, ATS-friendly resume quickly.'],
      ['coin', 'For tight budgets', 'Free to build, and only ₹9 to download each finished resume.']
    ],
    features: ['AI help while you write', 'Live preview as you type', 'ATS-friendly layout', 'Recruiter-ready PDF download', 'Free to build, ₹9 per resume'],
    seoTitle: 'R9Resume: ATS-Friendly AI Resume Builder for ₹9 | Twenova',
    seoDesc: 'R9Resume by Twenova is an AI resume builder: write once, see it live and download an ATS-friendly, recruiter-ready PDF for just ₹9 per resume.'
  }
];
export const productBySlug = Object.fromEntries(products.map((p) => [p.slug, p]));
