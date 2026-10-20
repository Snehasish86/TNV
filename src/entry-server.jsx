import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import App from './App.jsx';
import { headTags, ROUTES } from './seo.js';

export function render(url) {
  return { html: renderToString(<StaticRouter location={url} future={{ v7_startTransition: true, v7_relativeSplatPath: true }}><App /></StaticRouter>), head: headTags(url) };
}
export { ROUTES };
