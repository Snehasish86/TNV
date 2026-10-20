import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout.jsx';
import Home from './pages/Home.jsx';
import { ServicesHub, ServiceDetail } from './pages/Services.jsx';
import { HireHub, HireDetail } from './pages/Hire.jsx';
import { About, Portfolio, Careers, Blog, Contact } from './pages/Other.jsx';
import NotFound from './pages/NotFound.jsx';
import CaseStudy from './pages/CaseStudy.jsx';

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="services" element={<ServicesHub />} />
        <Route path="services/:slug" element={<ServiceDetail />} />
        <Route path="case-studies/:slug" element={<CaseStudy />} />
        <Route path="hire" element={<HireHub />} />
        <Route path="hire/:slug" element={<HireDetail />} />
        <Route path="portfolio" element={<Portfolio />} />
        <Route path="careers" element={<Careers />} />
        <Route path="blog" element={<Blog />} />
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
