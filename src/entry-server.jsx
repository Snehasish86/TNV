import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import App from './App.jsx';
import { headTags, ROUTES, siteFiles } from './seo.js';
import { SITE } from './data/site.js';

export function render(url) {
  return { html: renderToString(<StaticRouter location={url} future={{ v7_startTransition: true, v7_relativeSplatPath: true }}><App /></StaticRouter>), head: headTags(url) };
}
export { ROUTES, siteFiles, SITE };
