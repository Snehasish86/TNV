import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout.jsx';
import Home from './pages/Home.jsx';
import { ServicesHub, ServiceDetail } from './pages/Services.jsx';
import { HireHub, HireDetail } from './pages/Hire.jsx';
import { About, Portfolio, Careers, Blog, Contact } from './pages/Other.jsx';
import { OurProcess, PersonPage, BlogPost, Faqs, LegalPage, ProductsHub, ProductPage } from './pages/Company.jsx';
import { products } from './data/products.js';
import CaseStudy, { CaseStudiesHub } from './pages/CaseStudy.jsx';
import NotFound from './pages/NotFound.jsx';
import { team } from './data/team.js';
import { legal } from './data/legal.js';

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about-us" element={<About />} />
        <Route path="our-process" element={<OurProcess />} />
        {team.map((m) => <Route key={m.slug} path={m.slug} element={<PersonPage slug={m.slug} />} />)}
        <Route path="services" element={<ServicesHub />} />
        <Route path="portfolio" element={<Portfolio />} />
        <Route path="products" element={<ProductsHub />} />
        {products.map((p) => <Route key={p.slug} path={`products/${p.slug}`} element={<ProductPage slug={p.slug} />} />)}
        <Route path="case-studies" element={<CaseStudiesHub />} />
        <Route path="case-studies/:slug" element={<CaseStudy />} />
        <Route path="blog" element={<Blog />} />
        <Route path="blog/:slug" element={<BlogPost />} />
        <Route path="faqs" element={<Faqs />} />
        <Route path="hire" element={<HireHub />} />
        <Route path="hire/:slug" element={<HireDetail />} />
        <Route path="careers" element={<Careers />} />
        <Route path="contact" element={<Contact />} />
        {legal.map((d) => <Route key={d.slug} path={d.slug} element={<LegalPage slug={d.slug} />} />)}
        <Route path="404" element={<NotFound />} />
        {/* service pages live at the root, e.g. /web-development/ */}
        <Route path=":slug" element={<ServiceDetail />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
