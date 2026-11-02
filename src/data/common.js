export const hireFaqs = (tech) => [
  [`How quickly can a ${tech} developer start?`, 'We share matching profiles after we understand your requirements, and the developer starts once you approve.'],
  ['Can I interview the developers first?', 'Yes. You interview the shortlisted candidates and choose who joins your team.'],
  ['Can I hire part time or for a short project?', 'Yes. The hourly model suits part-time and short-term work.'],
  ['What if the developer is not the right fit?', 'Tell us and we will discuss a replacement or change in scope.'],
  ['Who owns the code and IP?', 'You do. We sign an NDA before work starts and all code belongs to you.']
];

export const plans = (who = 'developer') => [
  { name: 'Hourly', desc: 'Pay only for hours worked. Ideal for short tasks, bug fixes and quick features.', items: ['No minimum commitment', 'Daily progress reports', 'Scale up or down anytime'] },
  { name: 'Monthly', hot: true, desc: `A dedicated ${who} working full time on your product. Best for ongoing development.`, items: ['160 dedicated hours a month', 'Weekly sprint reviews', 'Priority support'] },
  { name: 'Project', desc: 'Fixed scope and fixed cost with milestones agreed up front.', items: ['Clear milestones and deliverables', 'Fixed budget', 'Post-launch support'] }
];

export const hireSteps = (tech = '') => [
  ['Share your requirements', 'Tell us the skills, experience level and engagement model you need.'],
  ['Screen and select', `We shortlist ${tech ? tech + ' ' : ''}candidates. You interview and pick your match.`],
  ['Onboard and integrate', 'Your developer joins your tools, stand-ups and workflow on day one.'],
  ['Build and scale', 'Start building right away and scale the team as the project grows.']
];

export const hireWhy = [
  ['target', 'Dedicated to you', 'Your developer focuses on your project during the agreed hours.'],
  ['rocket', 'Faster time to market', 'Reviewed developers who can start without a long recruitment cycle.'],
  ['coin', 'Cost-effective scaling', 'Grow or shrink the team without the cost of in-house hiring.'],
  ['layers', 'Flexible engagement', 'Hourly, monthly or project-based. Pick what fits.'],
  ['chat', 'Transparent communication', 'Daily stand-ups, weekly reports and your choice of tools.'],
  ['lock', 'IP protection and NDA', 'Your code, data and intellectual property belong to you.']
];
