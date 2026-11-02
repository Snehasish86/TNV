// Renders every route to static HTML so search engines and Vercel get real pages.
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const dist = path.join(root, 'dist');
const { render, ROUTES, siteFiles, SITE } = await import(path.join(root, 'dist-ssr', 'entry-server.js'));
const template = fs.readFileSync(path.join(dist, 'index.html'), 'utf8');

// Runs before React loads: hides reveal items for the fade-in, but un-hides them if JS never starts.
const boot = `<script>document.documentElement.classList.add('js');try{if(sessionStorage.getItem('tnv-seen')==='1')document.documentElement.classList.add('seen')}catch(e){}setTimeout(function(){if(!window.__tnvReady)document.documentElement.classList.remove('js')},4000)</script>`;

function write(url, file) {
  const { html, head } = render(url);
  const out = template.replace('<!--app-head-->', head + '\n' + boot).replace('<!--app-html-->', html);
  const dest = path.join(dist, file);
  fs.mkdirSync(path.dirname(dest), { recursive: true });
  fs.writeFileSync(dest, out);
}

// trailing-slash URLs: /about-us/ -> dist/about-us/index.html
for (const url of ROUTES) write(url, url === '/' ? 'index.html' : path.join(url.slice(1), 'index.html'));
write('/404/', '404.html');

const today = new Date().toISOString().slice(0, 10);
const prio = (u) => (u === '/' ? '1.0' : ['/services/', '/portfolio/', '/web-development/', '/mobile-app-development/', '/custom-software-development/', '/saas-development/'].includes(u) ? '0.9' : u.split('/').filter(Boolean).length > 1 ? '0.6' : '0.8');
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${ROUTES.map((u) => `  <url><loc>${SITE.url}${u}</loc><lastmod>${today}</lastmod><priority>${prio(u)}</priority></url>`).join('\n')}\n</urlset>\n`;
fs.writeFileSync(path.join(dist, 'sitemap.xml'), sitemap);
const { robots, llms } = siteFiles();
fs.writeFileSync(path.join(dist, 'robots.txt'), robots);
fs.writeFileSync(path.join(dist, 'llms.txt'), llms);
fs.rmSync(path.join(root, 'dist-ssr'), { recursive: true, force: true });
console.log(`Prerendered ${ROUTES.length + 1} pages, sitemap.xml, robots.txt and llms.txt`);
