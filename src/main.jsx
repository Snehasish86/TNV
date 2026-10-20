import { StrictMode } from 'react';
import { createRoot, hydrateRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import './styles/index.css';
import './styles/effects.css';

window.__tnvReady = true;
const el = document.getElementById('root');
const app = <StrictMode><BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}><App /></BrowserRouter></StrictMode>;
if (el.hasChildNodes()) hydrateRoot(el, app);
else createRoot(el).render(app);
