# tweNova website

Static site: HTML, CSS and vanilla JavaScript. No build step needed to deploy.

## Structure
- 21 pages: index, about, services, portfolio, hire, 12 hire-*-developers pages, careers, blog, contact, 404
- assets/css/main.css: the whole design system (one file)
- assets/js/main.js: binary rain, Nova cursor, smooth scroll, GSAP animations, forms, page transitions
- assets/js/hero3d.js + mark-data.js: 3D logo on the homepage only
- assets/img: vector logo and favicon

## Libraries (CDN, pinned)
GSAP 3.12.5 + ScrollTrigger, Lenis 1.0.42 on every page; three.js r128 on the homepage only.
Every page still works without them.

## Editing
Pages were generated from a shared template, so header and footer are identical on every page.
If you change the header or footer, change it in every .html file (search and replace).

## To do
- Forms: connect an endpoint in assets/js/main.js (search "connect to Netlify Forms").
- Project screenshots: set data-shot="assets/img/work/name.webp" on any .proj__frame.
- Add assets/img/og-cover.jpg (1200x630) for social sharing.
- Social links in the footer currently point to "#".

## Run locally
npx serve .   (or VS Code Live Server)
