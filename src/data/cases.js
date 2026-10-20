// Security audit case studies. Each one has its own page at /case-studies/:slug
// Please review the scope and deliverables of each audit and edit them to match exactly what was delivered.
export const cases = [
  {
    slug: 'sonoscan-hospital',
    client: 'Sonoscan Hospital',
    mono: 'SH',
    color: '#123498',
    sector: 'Healthcare',
    service: 'Security audit',
    headline: 'Keeping patient reports private at Sonoscan Hospital',
    summary: 'A full security audit of Sonoscan Hospital’s website, online report access and hosting server, with a ranked fix plan and a retest.',
    seoTitle: 'Sonoscan Hospital Security Audit Case Study | tweNova',
    seoDesc: 'How tweNova audited Sonoscan Hospital’s website, patient report access and server, then delivered a prioritised fix plan and retest.',
    challenge: [
      'Patients use the hospital’s website to find services, book visits and access reports. Any weakness there could expose personal and medical information.',
      'The hospital wanted an independent check of its public-facing systems, and a clear list of what to fix first, written so that both its team and its vendors could act on it.'
    ],
    scope: [
      ['globe', 'Hospital website', 'Every public page, form and file upload checked against the OWASP Top 10.'],
      ['lock', 'Patient report access', 'Login, session handling and access control, so one patient can never see another patient’s report.'],
      ['mail', 'Appointment and enquiry forms', 'Input validation, spam protection and safe handling of submitted details.'],
      ['db', 'Hosting server', 'Open ports, software versions, SSL/TLS setup, backups and admin access.']
    ],
    approach: [
      ['Scope and consent', 'Agreed systems, testing windows and contacts with the hospital team before any testing began.'],
      ['Testing', 'Automated scanning followed by manual testing of logins, report access and forms.'],
      ['Reporting', 'Each finding rated by risk, with evidence and exact steps to fix it.'],
      ['Retest', 'After fixes were applied, the affected areas were tested again to confirm they were closed.']
    ],
    standards: ['OWASP Top 10', 'OWASP ASVS', 'CERT-In guidelines', 'Digital Personal Data Protection Act, 2023'],
    deliverables: ['Executive summary for management', 'Detailed technical report with evidence', 'Risk-ranked fix plan', 'Retest report'],
    outcomes: [
      ['Clear priorities', 'The hospital team knew exactly which issues to fix first and why.'],
      ['Safer patient data', 'Report access and forms were reviewed so personal information stays private.'],
      ['Verified fixes', 'A retest confirmed the fixes worked, not just that they were applied.']
    ]
  },
  {
    slug: 'mmc-hospital',
    client: 'MMC Hospital',
    mono: 'MM',
    color: '#0A1F66',
    sector: 'Healthcare',
    service: 'Security audit',
    headline: 'Securing MMC Hospital’s website, admin panel and APIs',
    summary: 'A security audit of MMC Hospital’s website, admin panel, APIs and email domain, with fixes ranked by risk and a retest.',
    seoTitle: 'MMC Hospital Security Audit Case Study | tweNova',
    seoDesc: 'How tweNova audited MMC Hospital’s website, admin panel, APIs and email domain security, then delivered a ranked fix plan and retest.',
    challenge: [
      'MMC Hospital runs several connected systems: a public website, an admin panel for staff and APIs that power its digital services. Each connection is a possible entry point.',
      'The hospital also wanted to stop attackers from sending fake emails that appear to come from its domain, a common trick used against patients and staff.'
    ],
    scope: [
      ['globe', 'Website', 'Public pages, forms and content checked for common web vulnerabilities.'],
      ['lock', 'Admin panel', 'Login strength, user roles, session timeouts and protection against brute-force attacks.'],
      ['chain', 'APIs', 'Authentication, access control and data exposure on every endpoint.'],
      ['mail', 'Email domain security', 'SPF, DKIM and DMARC records reviewed to prevent spoofed emails.']
    ],
    approach: [
      ['Scope and consent', 'Systems, accounts and testing windows agreed with the hospital before testing.'],
      ['Testing', 'Automated scans plus manual testing of the admin panel and APIs.'],
      ['Reporting', 'Findings ranked from critical to low, each with proof and fix steps.'],
      ['Retest', 'Fixed areas were tested again to confirm the issues were resolved.']
    ],
    standards: ['OWASP Top 10', 'OWASP API Security Top 10', 'CERT-In guidelines', 'Digital Personal Data Protection Act, 2023'],
    deliverables: ['Executive summary for management', 'Technical report with evidence', 'Email domain hardening checklist', 'Retest report'],
    outcomes: [
      ['Stronger admin access', 'Login and role settings reviewed so only the right staff reach sensitive tools.'],
      ['Safer integrations', 'APIs checked so data is only shared with authorised apps and users.'],
      ['Harder to impersonate', 'Email records reviewed to make spoofed hospital emails easier to block.']
    ]
  },
  {
    slug: 'drl-hospital',
    client: 'DRL Hospital',
    mono: 'DR',
    color: '#1B42B8',
    sector: 'Healthcare',
    service: 'Security audit',
    headline: 'A security health check for DRL Hospital',
    summary: 'A security audit of DRL Hospital’s website, staff login portal, internet-facing servers and backups, with a ranked fix plan and a retest.',
    seoTitle: 'DRL Hospital Security Audit Case Study | tweNova',
    seoDesc: 'How tweNova audited DRL Hospital’s website, staff portal, internet-facing servers and backup setup, then delivered a ranked fix plan and retest.',
    challenge: [
      'Hospitals depend on their systems being available around the clock. A ransomware attack or a leaked staff password can stop admissions, billing and reporting.',
      'DRL Hospital wanted to know how its internet-facing systems would stand up to a real attacker, and whether it could recover quickly if something went wrong.'
    ],
    scope: [
      ['globe', 'Hospital website', 'Public pages, forms and plugins checked for known and common vulnerabilities.'],
      ['users', 'Staff login portal', 'Password policy, two-factor login, session handling and account lockout.'],
      ['db', 'Internet-facing servers', 'Exposed services, open ports, patch levels and remote access settings.'],
      ['refresh', 'Backups and recovery', 'Backup frequency, storage location and a review of the recovery process.']
    ],
    approach: [
      ['Scope and consent', 'Systems, IP addresses and testing windows agreed in writing before testing.'],
      ['Testing', 'External scanning and manual testing of the website and staff portal.'],
      ['Reporting', 'Every finding rated by risk with clear, step-by-step fixes.'],
      ['Retest', 'Fixed issues were tested again to confirm they were closed.']
    ],
    standards: ['OWASP Top 10', 'CIS Controls', 'CERT-In guidelines', 'Digital Personal Data Protection Act, 2023'],
    deliverables: ['Executive summary for management', 'Technical report with evidence', 'Backup and recovery recommendations', 'Retest report'],
    outcomes: [
      ['Smaller attack surface', 'Unneeded exposed services identified so they could be closed or protected.'],
      ['Better staff account safety', 'Clear steps to strengthen passwords and add two-factor login.'],
      ['Faster recovery', 'Backup gaps identified so the hospital can restore systems with confidence.']
    ]
  }
];
export const caseBySlug = Object.fromEntries(cases.map((c) => [c.slug, c]));
