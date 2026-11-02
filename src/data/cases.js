// Security audit case studies. Each one has its own page at /case-studies/<slug>/
// verified: false means the client-specific details below have NOT been confirmed yet. In that mode the page only states
// that Twenova carried out a security audit for the client, and shows Twenova's standard audit approach (clearly labelled).
// TODO(owner): for each client, confirm permission to publish the name, then fill in scope, deliverables and outcomes
// (only what can be evidenced) and set verified: true.
const base = (slug, client, mono, color) => ({
  slug, client, mono, color, sector: 'Healthcare', service: 'Security audit', verified: false,
  headline: `Security audit for ${client}`,
  summary: `Twenova carried out a security audit for ${client}. Specific findings and system details stay confidential.`,
  seoTitle: `${client} Security Audit | Twenova Case Study`,
  seoDesc: `Twenova carried out a security audit for ${client}. See how Twenova approaches security audits for healthcare organisations.`,
  challenge: [],   // TODO(owner): the real reason for the audit, without confidential details
  scope: [],       // TODO(owner): [['globe', 'Hospital website', 'What was checked'], ...]
  deliverables: [],// TODO(owner): what the client actually received
  outcomes: []     // TODO(owner): only results you can evidence and the client approves
});
export const cases = [
  base('sonoscan-hospital', 'Sonoscan Hospital', 'SH', '#123498'),
  base('mmc-hospital', 'MMC Hospital', 'MM', '#0A1F66'),
  base('drl-hospital', 'DRL Hospital', 'DR', '#1B42B8')
];
export const caseBySlug = Object.fromEntries(cases.map((c) => [c.slug, c]));
