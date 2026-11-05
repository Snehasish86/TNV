# Twenova: SEO + GEO implementation handover

Date: 2 November 2026. Built against the *Twenova SEO + GEO Implementation Blueprint*.

## 1. What changed and why

| Area | Change | Reason (blueprint section) |
|---|---|---|
| Brand + domain | Brand text is "Twenova" everywhere; one domain setting in `src/data/site.js` (`https://twenova.com`) drives canonicals, sitemap, robots, schema and llms.txt | Entity consistency (§11) |
| URL structure | Blueprint architecture with trailing slashes; old URLs 301-redirect to the new ones | Architecture (§3), redirects (§9.1) |
| Core services | Four core pages first; new **Custom Software Development** page; **Product Engineering** became **SaaS Development**; every service has an `enabled` switch | Service specs (§5) |
| Accuracy | Removed unverified stats, the unverified testimonial, inflated hiring claims ("48 hrs", "5-stage", "certified", "millions"), and guessed project descriptions; case studies switched to a clearly labelled "standard approach" mode until real details are approved | Accuracy rules (§1, §7) |
| New pages | About us, Our process, Founder, Co-Founder, Case studies hub, FAQs, 3 blog articles, Privacy Policy, Terms & Conditions, Refund Policy, Usage Rules | §3, §6, §8, §13 |
| Homepage | Blueprint H1, supporting copy and CTAs; trust strip of real project names instead of counters | §4 |
| Technical SEO | Unique title/description/canonical per page; one H1 per page; generated sitemap, robots.txt and llms.txt; PNG logo for schema; 404 without canonical | §9 |
| Structured data | Organization (with founders), WebSite, Service, BreadcrumbList, Article, Person, ProfilePage, AboutPage, ContactPage, FAQPage; JobPosting only when hiring is switched on | §10 |
| Careers | Jobs hidden and no JobPosting schema until `JOBS_OPEN = true` in `src/data/jobs.js` | §3 ("only if actively recruiting") |

## 2. URLs

Company: `/`, `/about-us/`, `/our-process/`, `/founder/`, `/co-founder/`, `/careers/`, `/contact/`
Services: `/services/`, `/web-development/`, `/mobile-app-development/`, `/custom-software-development/`, `/saas-development/`, `/ui-ux-design/`, `/ecommerce-development/`, `/security-audit/`, `/ai-ml-development/`, `/cloud-devops/`, `/digital-marketing-seo/`, `/blockchain-development/`
Work: `/portfolio/`, `/case-studies/`, `/case-studies/sonoscan-hospital/`, `/case-studies/mmc-hospital/`, `/case-studies/drl-hospital/`
Resources: `/blog/`, `/blog/website-development-process/`, `/blog/how-to-plan-an-mvp/`, `/blog/custom-software-vs-ready-made-software/`, `/faqs/`
Hire: `/hire/` and 12 role pages such as `/hire/php-developers/`
Legal: `/privacy-policy/`, `/terms-and-conditions/`, `/refund-policy/`, `/usage-rules/`
Files: `/sitemap.xml`, `/robots.txt`, `/llms.txt`

## 3. Redirects (in `vercel.json`, permanent)

- `/about` → `/about-us/`
- `/services/<slug>` → `/<slug>/` for every service
- `/services/product-engineering` → `/saas-development/`
- Old static site: `/about.html`, `/services.html`, `/hire.html`, `/portfolio.html`, `/careers.html`, `/blog.html`, `/contact.html`, `/index.html` and all 12 `/hire-*-developers.html` pages go straight to their final URLs (no chains)

## 4. Owner TODOs (search the code for `TODO(owner)`)

| File | What to provide |
|---|---|
| `src/data/site.js` | Confirm domain; registered business name, public address and phone (optional); legal jurisdiction city; Formspree URL; social profile URLs; for each project: client or own product, Twenova's role, stack, permission |
| `src/data/team.js` | For both founders: headline, 100–200 word bio, responsibilities, skills, optional experience, founder message, LinkedIn / GitHub / portfolio URLs. Empty fields stay hidden |
| `src/data/cases.js` | Permission to name each hospital; real scope, deliverables and approved outcomes; then `verified: true` |
| `src/data/services.js` | Confirm each service is offered (set `enabled: false` otherwise); confirm FAQ timelines such as "2 to 5 weeks" |
| `src/data/jobs.js` | Set `JOBS_OPEN = true` only while hiring |
| `src/data/articles.js` | Add a reviewer for each article |
| `src/data/legal.js` | Lawyer review of all four policies |

Not yet on the site (needs your material): R9Resume and MYOC product pages, verified testimonials, real project screenshots, real numbers.

## 5. QA performed

- `npm run build`: 47 pages prerendered, plus sitemap (46 URLs), robots.txt and llms.txt
- Static audit of every page: unique title (≤ 65 chars), description (70–165 chars), self-referencing canonical, exactly one H1, valid JSON-LD, zero broken internal links, no leaked TODO text or removed claims
- Browser test of all 46 URLs at 1440×900 and 390×844: no JS errors, no hydration warnings, no hidden content after scrolling, no horizontal overflow
- Not tested here: Vercel redirect behaviour on the live host, Core Web Vitals field data, Search Console indexing

## 6. Deploy and rollback

1. Push to `main`. Vercel builds with `npm run build` and serves `dist`.
2. Connect the production domain in Vercel and choose one hostname (apex or www) with the other redirecting.
3. After go-live, check a few old URLs (for example `/about`, `/hire-php-developers.html`) redirect once to the new page.
4. Submit `https://<domain>/sitemap.xml` in Google Search Console and Bing Webmaster Tools.
5. Rollback: in Vercel, open Deployments and "Promote" the previous deployment, or `git revert` the commit.

## 7. 30 / 60 / 90 days

- **Days 1–30:** domain live; Search Console and Bing verified; founder bios and links added; services confirmed; Formspree connected; privacy and terms reviewed.
- **Days 31–60:** two case studies with permission; first verified testimonials; R9Resume / MYOC pages if they are Twenova products; two more articles; LinkedIn company and founder profiles completed and added to `social` / `links`.
- **Days 61–90:** eligible directory profiles (Clutch, GoodFirms); review Search Console queries and Bing AI citations; improve the pages with impressions but low clicks; run the AI prompt monitoring set from the blueprint and record results.

## 8. Update: products, services, founders, navbar (2 November 2026)

- **Products:** new `/products/` hub with `/products/make-your-own-course/` (LMS where teachers earn on their own terms) and `/products/r9resume/` (ATS-friendly AI resume builder, ₹9 per resume). Shown on the homepage, portfolio ("Our products" filter), menu and footer. SoftwareApplication schema (R9Resume with a ₹9 Offer). Data: `src/data/products.js` (add each product's public `url`).
- **Services:** "Digital marketing and SEO" removed; added **PR campaigns** (`/pr-campaigns/`) and **Branding and logo design** (`/branding-logo-design/`). Old marketing URLs redirect to `/services/`.
- **Founders:** bios, responsibilities and skills for Snehasish Mandal (full-stack Java developer) and Jhilik Das (creative frontend and MERN stack developer). LinkedIn / GitHub links still to add in `src/data/team.js`.
- **Contact:** phones +91 95933 62928 and +91 87100 27526, Instagram and Facebook added to the contact page, footer and Organization schema (`sameAs`, `contactPoint`).
- **Navbar:** no longer hides on scroll (that flickered with smooth scrolling); it stays visible and turns solid and compact once. Tested on desktop, tablet and mobile.
- **Accent colour:** `#70FF00` (Tailwind `volt`) used sparingly: hero highlight, section dots, active menu dot, button hover, process rail, product badges, scroll bar, marquee stars, text selection. Never used as text on cream, for readability.
- **Smoother binary rain:** 30 fps instead of 12.5 fps, same speed and trail.
- QA: 51 pages built, 0 SEO issues, 50 URLs tested at 1440 px and 390 px with no errors.

## 9. Update: navigation and smoother experience (3 November 2026)

- **Navigation:** Home · Work · Products · Services ▾ · Company ▾ (About us, Our process, Contact). Blog, Hire developers and Careers are no longer in the menu; their pages still exist and are linked from the footer, sitemap and internal links.
- **No nav animation:** dropdowns open instantly on click (one at a time) and close on outside click, Esc or page change; no hover scramble, magnetic effect, fade, height change or cursor trail inside the header or mobile menu. Header height is a fixed 72 px.
- **Less congestion on the homepage:** removed the hero console, the duplicate list of project names and the Hire section; industries cards are shorter; tech stack is two rows; the project carousel cards are smaller so the pinned scroll is about half as long. Page height 19,720 px → 16,804 px on desktop.
- **Phones:** service cards are a plain list (no stacking overlap, no 3D cube).
- **Animation timing:** headings reveal in 1.0 s instead of 1.3 s; cards rise 20 px in 0.8 s instead of 28 px in 1 s.
- **cPanel:** `public/.htaccess` (tested on Apache 2.4) handles HTTPS, www → apex, all old-URL redirects, trailing slashes, the 404 page and caching.

## 10. Update: polish (3 November 2026)

- Services dropdown is compact and never taller than the screen (scrolls inside if needed).
- Case study cards: colour fills the whole card. Card headings in 4-column grids scale down so long words such as "Manufacturing" fit.
- Form labels no longer wrap; selected form options are neon green.
- Green scroll-progress line removed.
- More `#70FF00`: highlighted words in page headings, check-mark badges on key points, service icons in the menu, breadcrumb arrows.
- Photos and product screenshots are black and white until hovered; on touch screens they show in colour.
