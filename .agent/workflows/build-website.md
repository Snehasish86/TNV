---
description: how to build and deploy the tweNova website
---

# tweNova Website Build & Deployment Workflow

This workflow outlines the steps to build, verify, and prepare the tweNova website for deployment.

## 1. Environment Setup
- Ensure you have a modern browser (Chrome/Firefox/Safari) for testing.
- No build tools (like npm/vite) are required as this is a static HTML/CSS/JS project.

## 2. Development & Implementation
- All source files are located in the project root.
- **HTML**: Use semantic HTML5 tags as specified in `tweNova_Tech_Stack.pdf`.
- **CSS**: Use `style.css` with CSS variables for the design system.
- **JS**: Use `script.js` for all interactivity (AOS, counters, form validation).

## 3. Verification & Testing
### Real-time Preview
- Use a local server (e.g., VS Code Live Server or `npx serve .`) to preview changes.

### Automated Checks
- Run Lighthouse in Chrome DevTools to verify Performance (95+), Accessibility (95+), and SEO (100).
- Validate HTML using [W3C Validator](https://validator.w3.org/).
- Validate CSS using [W3C CSS Validator](https://jigsaw.w3.org/css-validator/).

### Manual QC
- Check responsiveness across Mobile (320px+), Tablet (768px+), and Desktop (1280px+).
- Verify all AOS animations trigger correctly on scroll.
- Test contact form validation and "success" state.

## 4. Deployment
- The project is configured for **Netlify**.
- Ensure `netlify.toml` is present in the root for redirects and headers.
- **Deploy via Git**:
    ```bash
    git add .
    git commit -m "feat: [section name] implementation"
    git push origin main
    ```
- **Manual Deploy**: Drag and drop the project folder into the Netlify dashboard.

## 5. Post-Deployment
- Verify the live site at the assigned URL.
- Run a final Lighthouse audit on the production URL.
