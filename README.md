# Twenova website (React + Tailwind)

See **SEO-HANDOVER.md** for the SEO + GEO changes, URL map, redirects and the owner TODO list.

React 18, Vite 5, Tailwind CSS 3 and React Router 6. Every page is prerendered to static HTML at build time, so search engines get full content and the site loads fast on Vercel.

## Pages (30)
- `/` home, `/about`, `/portfolio`, `/careers`, `/blog`, `/contact`, and a 404 page
- `/services` plus 9 service pages: `/services/web-development`, `/services/mobile-app-development`, `/services/ai-ml-development`, `/services/product-engineering`, `/services/blockchain-development`, `/services/cloud-devops`, `/services/ui-ux-design`, `/services/digital-marketing-seo`, `/services/ecommerce-development`
- `/hire` plus 12 role pages, for example `/hire/php-developers`, `/hire/flutter-developers`

## Run locally
```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # outputs the static site to dist/
npm run preview    # preview the production build
```
Requires Node.js 18 or newer.

## Edit content
All text lives in `src/data/`:
- `services.js`: the 9 services (overview, offerings, benefits, process, tech, FAQs)
- `hire.js`: the 12 developer roles
- `site.js`: contact email, projects, apps, blog posts, home FAQs
- `common.js`: hiring plans, steps and FAQs

Page titles, descriptions and structured data are in `src/seo.js`.

## Deploy on Vercel
`vercel.json` already sets the build. In Vercel: Add New, Project, import the GitHub repo, and press Deploy. Framework is detected as Vite, the build command is `npm run build` and the output folder is `dist`.
Old `.html` URLs (for example `/hire-php-developers.html`) redirect permanently to the new clean URLs.

## Animations and effects
All motion lives in `src/components/effects.js`, `src/components/BinaryRain.jsx`, `src/components/Hero3D.jsx`, `src/components/Preloader.jsx` and `src/styles/effects.css`.

- Binary rain on the homepage hero, every inner page hero and the 404 page
- 3D extruded TN logo on the homepage (three.js, loaded after the page is interactive)
- Headline that decodes from binary, plus the live "deploy console"
- Nova cursor: binary trail, velocity stretch, star on links, rotating "Visit site" disc on cards, sticky snap, click burst (desktop only)
- First-visit preloader on the homepage (skipped for the rest of the session)
- Velocity marquee, stacking service cards with 3D cubes, horizontal project carousel, 3D phone fan, word-by-word headings, scroll-lit statement, counters, process rail, magnetic buttons
- Route curtain between pages (pure CSS, it cannot get stuck)

Everything turns off automatically for visitors who enable "reduce motion", and the custom cursor is disabled on touch devices.

## Security audit case studies
The Security audit service lives at `/services/security-audit`, and each audit has its own page:
`/case-studies/sonoscan-hospital`, `/case-studies/mmc-hospital` and `/case-studies/drl-hospital`.
Edit the scope, standards, deliverables and outcomes in `src/data/cases.js`. To add a new case study, copy one entry,
give it a new `slug`, and add that slug to `cases` in the security-audit entry of `src/data/services.js`.
The page, Portfolio card, sitemap entry and SEO tags are created automatically on the next build.

## Contact forms
Forms work out of the box: until you connect a service, pressing Send opens the visitor's email app with the message filled in, addressed to the email in `src/data/site.js`.

To receive messages directly in your inbox:
1. Create a free form at https://formspree.io and copy its URL (for example `https://formspree.io/f/abcdwxyz`).
2. Either paste it into `formEndpoint` in `src/data/site.js`, or add an environment variable `VITE_FORM_ENDPOINT` with that URL in Vercel (Project, Settings, Environment Variables) and redeploy.

Spam protection: every form has a hidden field that bots fill in; those submissions are ignored.

## Social links
Add your profile URLs to `social` in `src/data/site.js`. Icons only appear in the footer for links you fill in, and they are added to the Organization schema for Google.

## Social share image
`public/og-cover.jpg` (1200x630) is used when a page is shared on WhatsApp, LinkedIn, Facebook or X. Replace it with your own image of the same size if you like.
