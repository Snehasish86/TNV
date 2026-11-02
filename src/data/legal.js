import { SITE } from './site.js';

// TODO(owner): these documents are a careful starting point written for an Indian software agency.
// Have them reviewed by a qualified lawyer and adjusted to your contracts before relying on them.
const UPDATED = '2026-11-02';
const who = () => SITE.legalName || SITE.name;
const contactLine = () => `Email: ${SITE.email}${SITE.phone ? ` · Phone: ${SITE.phone}` : ''}${SITE.address ? ` · Address: ${SITE.address}` : ''}`;

export const legal = [
  {
    slug: 'privacy-policy', title: 'Privacy Policy', short: 'Privacy',
    desc: 'How Twenova collects, uses and protects personal information shared through this website and during projects.',
    updated: UPDATED,
    sections: () => [
      ['Who we are', [`${who()} ("we", "us") is a software development agency based in ${SITE.country}. This policy explains how we handle personal information when you use ${SITE.url.replace('https://', '')} or work with us. It is written with the Information Technology Act, 2000 and the Digital Personal Data Protection Act, 2023 in mind.`]],
      ['Information we collect', [
        'Information you give us: when you send an enquiry or apply for a job, we receive the details you enter, such as your name, email address, phone number, company, the services you are interested in, budget range, your message and any files or links you share.',
        'Project information: while working together, we may receive information about your business, users or systems that you choose to share so we can deliver the work.',
        'Technical information: like most websites, our hosting provider records basic technical data such as IP address, browser type and pages requested, for security and to keep the site running. If we add analytics in future, we will update this policy.',
        'Browser storage: the site stores a small value in your browser’s session storage so the opening animation is not repeated during the same visit. It is not used to identify you and is cleared when you close the tab.'
      ]],
      ['How we use your information', [{ list: [
        'To reply to your enquiry and prepare proposals or quotes.',
        'To deliver, support and invoice the services you ask for.',
        'To review job applications.',
        'To keep the website secure and working properly.',
        'To meet legal, tax and accounting obligations.'
      ] }, 'We do not sell your personal information, and we do not use it for unrelated marketing without your consent.']],
      ['Consent and your choices', ['By submitting a form or emailing us, you consent to us using your details to respond. You can withdraw consent at any time by emailing us. Withdrawing consent does not affect work already carried out, or records we must keep by law.']],
      ['Who we share information with', [
        'We share personal information only where needed to run our business, for example with our website hosting provider, email provider, form-handling service and payment or accounting tools. These providers process data on our behalf and only for that purpose.',
        'We may also disclose information if required by law, court order or a government authority, or to protect our rights and the safety of others.'
      ]],
      ['Storage and international transfers', ['Some of our service providers may store data on servers outside India. Where this happens, we choose reputable providers and take reasonable steps to keep the data protected.']],
      ['How long we keep information', ['We keep enquiry and project information only as long as needed for the purpose it was collected, to resolve disputes, and to meet legal and accounting requirements. After that, we delete or anonymise it.']],
      ['How we protect information', ['We use reasonable security practices, such as HTTPS, access controls and limiting who can see client data. No method of transmission or storage is completely secure, so we cannot guarantee absolute security, but we act promptly if an issue occurs.']],
      ['Your rights', [{ list: [
        'Ask what personal information we hold about you.',
        'Ask us to correct or update inaccurate information.',
        'Ask us to delete information we no longer need.',
        'Withdraw consent you have given.',
        'Raise a grievance about how your information is handled.'
      ] }, `To use any of these rights, email ${SITE.email}. We may need to confirm your identity before acting on a request.`]],
      ['Children', ['Our website and services are intended for businesses and adults. We do not knowingly collect personal information from children.']],
      ['Grievances and contact', [`If you have a question or complaint about privacy, contact us and we will respond as soon as we can. ${contactLine()}`]],
      ['Changes to this policy', ['We may update this policy from time to time. The latest version will always be on this page with the date it was last updated.']]
    ]
  },
  {
    slug: 'terms-and-conditions', title: 'Terms & Conditions', short: 'Terms',
    desc: 'The terms that apply when you use the Twenova website or engage Twenova for software development services.',
    updated: UPDATED,
    sections: () => [
      ['About these terms', [`These terms apply to your use of this website and to services provided by ${who()}. If you sign a separate proposal, contract or statement of work with us, that document takes priority over these terms where the two differ.`]],
      ['Our services', ['We provide website development, mobile app development, custom software development, SaaS product development and related services. The exact scope, deliverables, timeline and price for each project are set out in a written proposal or quote that you accept.']],
      ['Quotes and proposals', ['Quotes are based on the information you share with us. If the scope changes, we will tell you how it affects cost and timeline before doing the extra work. Unless stated otherwise, a quote is valid for 30 days.']],
      ['Payments', [
        'Payments are due as set out in the proposal or invoice, usually as an advance followed by milestone payments. Prices are exclusive of applicable taxes unless stated otherwise.',
        'If a payment is overdue, we may pause work until it is cleared. Third-party costs such as domains, hosting, paid plugins, licences and app store fees are paid by the client, directly or through us, as agreed.'
      ]],
      ['Your responsibilities', [{ list: [
        'Provide content, feedback, approvals and access in good time.',
        'Make sure any content, images, data or brand assets you give us are yours to use and do not break any law.',
        'Keep your own login details, accounts and backups secure once handed over.',
        'Review and test deliverables when we share them, and report issues promptly.'
      ] }]],
      ['Intellectual property', [
        'Once the project is paid in full, you own the final deliverables we create specifically for you, such as the source code and designs for your website, app or software.',
        'We keep ownership of our pre-existing tools, libraries, templates and know-how, and you receive a licence to use them as part of your deliverables. Open-source components remain under their own licences.',
        'With your permission, we may show the work in our portfolio. We will not publish confidential information.'
      ]],
      ['Confidentiality', ['We keep your business information confidential and use it only to deliver your project. We are happy to sign a non-disclosure agreement before discussing your idea in detail.']],
      ['Third-party services', ['Projects often rely on third-party platforms such as hosting, payment gateways, app stores and APIs. We are not responsible for changes, outages or policies of those providers, but we will help you respond to them where reasonable.']],
      ['Warranties', ['We deliver our work with reasonable skill and care. Except as stated in your proposal, the website and services are provided without other warranties, express or implied. Bugs reported within the agreed support period are fixed as described in the proposal.']],
      ['Limitation of liability', ['To the extent allowed by law, our total liability for any claim relating to a project is limited to the amount you paid us for that project. We are not liable for indirect or consequential losses such as loss of profit, data or business opportunity.']],
      ['Using this website', ['You may use this website to learn about our services and contact us. Please follow our Usage Rules. Website content is provided for general information and may change without notice.']],
      ['Ending a project', ['Either party may end a project in writing if the other seriously breaches these terms or the proposal and does not fix the breach within a reasonable time. You pay for work completed up to the date it ends. Refunds are handled under our Refund Policy.']],
      ['Governing law', [`These terms are governed by the laws of India. Any disputes are subject to the jurisdiction of the courts of ${SITE.jurisdiction}.`]],
      ['Contact', [contactLine()]]
    ]
  },
  {
    slug: 'refund-policy', title: 'Refund Policy', short: 'Refunds',
    desc: 'How refunds and cancellations work for Twenova projects and developer engagements.',
    updated: UPDATED,
    sections: () => [
      ['Overview', ['Our work is custom and delivered in stages, so refunds depend on how much work has been done. This policy applies unless your signed proposal or contract says otherwise, in which case the contract takes priority.']],
      ['Cancelling before work starts', ['If you cancel after paying an advance but before we have started any work, we refund the advance, minus any third-party costs already paid on your behalf.']],
      ['Cancelling during a project', [{ list: [
        'Payments for milestones that are completed and delivered are not refundable.',
        'For a milestone in progress, you pay for the work done so far, and any unused part of the payment for that milestone is refunded.',
        'Payments made in advance for milestones that have not started are refunded.'
      ] }]],
      ['Dedicated developers and hourly work', ['Hourly and monthly developer engagements are billed for time worked. Hours already worked are not refundable. If a monthly engagement ends early, unused prepaid time is refunded or credited as agreed in writing.']],
      ['Non-refundable items', [{ list: [
        'Domains, hosting, SSL certificates, paid plugins, themes, licences and app store fees paid to third parties.',
        'Work that has been delivered and approved.',
        'Delays caused by missing content, feedback or access from the client side.'
      ] }]],
      ['If you are unhappy with the work', ['Please tell us first. We will review the issue against the agreed scope and fix anything that does not meet it. Most concerns are resolved this way, before a refund is needed.']],
      ['How to request a refund', [`Email ${SITE.email} with your name, project name, invoice number and the reason for the request. We will review it and reply by email. Approved refunds are paid to the original payment method, after deducting any bank or payment gateway charges.`]],
      ['Contact', [contactLine()]]
    ]
  },
  {
    slug: 'usage-rules', title: 'Usage Rules', short: 'Rules',
    desc: 'Rules for using the Twenova website, contact forms and services in a fair, lawful and safe way.',
    updated: UPDATED,
    sections: () => [
      ['Why these rules exist', ['These rules keep our website, our team and our clients safe. They apply to everyone who visits this website, contacts us or uses a product we build and host for a client.']],
      ['You agree not to', [{ list: [
        'Use the website or our services for anything unlawful, fraudulent or harmful.',
        'Try to break into, overload or disrupt the website, its servers or any connected systems.',
        'Scan, probe or test the security of our systems or our clients’ systems without written permission. Security testing is only done under a signed security audit agreement.',
        'Send spam, malware, abusive messages or misleading information through our forms or email.',
        'Copy, reuse or sell our content, designs or code without permission.',
        'Pretend to be someone else, or use another person’s details without their consent.',
        'Ask us to build anything that infringes others’ rights, deceives users or breaks the law.'
      ] }]],
      ['Content you share with us', ['You are responsible for the content, data and materials you send us. Please only share what you have the right to share, and remove passwords or sensitive data unless we specifically need them for the work, in which case share them through a secure method.']],
      ['Respectful communication', ['We treat our clients, candidates and partners with respect and expect the same. We may stop working with anyone who is abusive or threatening towards our team.']],
      ['Reporting a problem', [`If you notice a security issue or misuse of our website, please report it to ${SITE.email}. We appreciate responsible disclosure and will look into every report.`]],
      ['What happens if rules are broken', ['We may block access, stop a project, remove content or report the matter to the relevant authorities, depending on how serious it is.']],
      ['Contact', [contactLine()]]
    ]
  }
];
export const legalBySlug = Object.fromEntries(legal.map((d) => [d.slug, d]));
