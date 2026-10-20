// Renders every route to static HTML so search engines and Vercel get real pages.
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const dist = path.join(root, 'dist');
const { render, ROUTES } = await import(path.join(root, 'dist-ssr', 'entry-server.js'));
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

for (const url of ROUTES) write(url, url === '/' ? 'index.html' : url.slice(1) + '.html');
write('/404', '404.html');

const today = new Date().toISOString().slice(0, 10);
const prio = (u) => (u === '/' ? '1.0' : ['/services', '/hire', '/portfolio'].includes(u) ? '0.9' : u.split('/').length > 2 ? '0.8' : '0.7');
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${ROUTES.map((u) => `  <url><loc>https://www.twenova.com${u === '/' ? '/' : u}</loc><lastmod>${today}</lastmod><priority>${prio(u)}</priority></url>`).join('\n')}\n</urlset>\n`;
fs.writeFileSync(path.join(dist, 'sitemap.xml'), sitemap);
fs.rmSync(path.join(root, 'dist-ssr'), { recursive: true, force: true });
console.log(`Prerendered ${ROUTES.length + 1} pages and sitemap.xml`);
