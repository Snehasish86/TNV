# tweNova Digital Solutions Agency

**Tagline:** Make Together Grow Together

A modern, responsive business website for tweNova Digital Solutions Agency - a full-service digital agency providing innovative technology solutions, creative design, and powerful digital marketing services.

---

## 🌟 Overview

tweNova Digital Solutions Agency is a professional IT services website built with modern web technologies, featuring a clean design, smooth animations, and a premium user experience. The website showcases the agency's services, portfolio, team, and provides easy ways for potential clients to get in touch.

---

## 📋 Website Structure

### Pages

1. **Homepage** (`index.html`)
   - Hero section with compelling headline and CTAs
   - About preview
   - Services overview (6 main services)
   - Why Choose Us section
   - Portfolio showcase
   - Client testimonials
   - Our Process (4-step workflow)
   - Technology Stack
   - CTA section

2. **About Us** (`about.html`)
   - Company introduction
   - Mission & Vision
   - Core Values (6 principles)
   - Our Story timeline
   - Team profiles (6 key members)
   - Company statistics

3. **Services** (`services.html`)
   - Detailed service pages for:
     - Website Development
     - Mobile App Development
     - UI/UX Design
     - Digital Marketing
     - SEO Services
     - Social Media Marketing
     - Software Development
     - IT Consulting
   - Each service includes: description, benefits, process, and CTA
   - FAQ section

4. **Portfolio** (`portfolio.html`)
   - Filterable project gallery
   - 12 featured projects
   - Categories: Web Development, Mobile Apps, UI/UX, Branding, Marketing
   - Project cards with hover effects

5. **Blog** (`blog.html`)
   - Featured blog post
   - Blog grid with 9 posts
   - Sidebar with recent posts, categories, and newsletter
   - Pagination
   - Author information and dates

6. **Careers** (`careers.html`)
   - Why Work With Us section
   - Company culture showcase
   - 6 current job openings
   - Application modal/form
   - Team culture photos

7. **Contact** (`contact.html`)
   - Contact form with validation
   - Company information (email, phone, address)
   - Office locations
   - Business hours
   - Google Maps integration
   - Social media links

---

## 🎨 Design Specifications

### Color Palette

```css
Primary Color:    #0f172a (Dark Blue/Black)
Accent Color:     #3b82f6 (Blue)
Alt Accent:       #f97316 (Orange)
White:            #ffffff
Gray:             #64748b
Light Gray:       #f1f5f9
```

### Typography

- **Headings:** Poppins / Montserrat (700-800 weight)
- **Body Text:** Poppins (400-600 weight)
- **Font Stack:** System fonts with fallbacks

### Design Principles

- ✅ Modern, clean, professional IT agency aesthetic
- ✅ Smooth animations and transitions
- ✅ Premium feel with attention to detail
- ✅ Consistent spacing and typography scale
- ✅ Accessibility-friendly (ARIA labels, semantic HTML)

---

## 🚀 Features

### User Experience
- **Smooth Scrolling:** Enhanced navigation experience
- **Sticky Navigation:** Header stays visible while scrolling
- **Mobile Menu:** Hamburger menu for mobile devices
- **Lazy Loading:** Optimized image loading
- **Scroll Animations:** AOS (Animate On Scroll) library integration
- **Back to Top Button:** Auto-appearing scroll-to-top functionality

### Functionality
- **Form Validation:** Real-time client-side validation
- **Portfolio Filtering:** Interactive project filtering by category
- **FAQ Accordion:** Expandable/collapsible FAQ items
- **Animated Counters:** Statistics that count up on scroll
- **Newsletter Signup:** Email capture for marketing
- **Application Modal:** Job application submission

### Technical
- **Responsive Design:** Works on all screen sizes (mobile, tablet, desktop)
- **Cross-Browser Compatible:** Modern browser support
- **SEO Optimized:** Semantic HTML, meta tags, proper heading structure
- **Performance Optimized:** Fast loading times
- **Accessibility:** WCAG compliant markup

---

## 🛠️ Technologies Used

### Frontend
- **HTML5** - Semantic markup
- **CSS3** - Modern styling with Flexbox and Grid
- **JavaScript (ES6+)** - Interactive functionality
- **Font Awesome 6.5.1** - Icon library
- **AOS 2.3.4** - Scroll animation library
- **Google Fonts** - Poppins, Montserrat typography

### External Services
- **Google Maps** - Location embedding
- **Unsplash** - Placeholder images

---

## 📁 File Structure

```
tweNova/
├── index.html              # Homepage
├── about.html              # About Us page
├── services.html           # Services page
├── portfolio.html          # Portfolio page
├── blog.html               # Blog page
├── careers.html            # Careers page
├── contact.html            # Contact page
├── style.css               # Main stylesheet
├── script.js               # Main JavaScript file
├── robots.txt              # SEO robots file
├── sitemap.xml             # SEO sitemap
├── netlify.toml            # Netlify configuration
├── 404.html                # Custom 404 page
├── assets/
│   ├── fonts/              # Custom fonts (if any)
│   ├── icons/              # Favicon and icons
│   └── images/             # Local images and graphics
└── document/
    └── task.md.resolved    # Project documentation
```

---

## 🔧 Setup & Installation

### Prerequisites
- Modern web browser (Chrome, Firefox, Safari, Edge)
- Text editor (VS Code, Sublime Text, etc.)
- Local server (optional: Live Server, Python SimpleHTTPServer)

### Installation Steps

1. **Clone or Download the Project**
   ```bash
   git clone <repository-url>
   cd tweNova
   ```

2. **Open in Browser**
   - Option 1: Double-click `index.html`
   - Option 2: Use Live Server in VS Code
   - Option 3: Run a local server:
     ```bash
     # Python 3
     python -m http.server 8000
     
     # Node.js
     npx serve
     ```

3. **View the Website**
   - Navigate to `http://localhost:8000` (if using server)
   - Or simply open `index.html` in your browser

---

## 📝 Customization Guide

### Updating Colors

Edit the CSS variables in `style.css`:

```css
:root {
  --color-primary: #0f172a;
  --color-accent: #3b82f6;
  --color-accent-alt: #f97316;
  /* Add your colors here */
}
```

### Changing Content

1. **Company Information:** Update text in HTML files
2. **Images:** Replace placeholder images in `assets/images/`
3. **Services:** Edit service descriptions in `services.html`
4. **Team Members:** Update profiles in `about.html`
5. **Contact Details:** Modify email, phone, address in `contact.html`

### Adding New Sections

1. Create HTML structure following existing patterns
2. Add corresponding CSS in `style.css`
3. Add JavaScript functionality if needed in `script.js`
4. Include AOS animations with `data-aos` attributes

---

## 🌐 Deployment

### Netlify Deployment

1. **Push to GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin <your-repo-url>
   git push -u origin main
   ```

2. **Connect to Netlify:**
   - Go to [Netlify](https://netlify.com)
   - Click "New site from Git"
   - Select your repository
   - Deploy settings are in `netlify.toml`

3. **Custom Domain (Optional):**
   - Add custom domain in Netlify settings
   - Update DNS records

### Other Hosting Options

- **GitHub Pages:** Push to GitHub and enable Pages
- **Vercel:** Import project and deploy
- **Traditional Hosting:** Upload files via FTP

---

## 📧 Company Information

- **Company Name:** tweNova Digital Solutions Agency
- **Tagline:** Make Together Grow Together
- **Email:** [twenovaitc@gmail.com](mailto:twenovaitc@gmail.com)
- **Services:** 
  - Website Development
  - Mobile App Development
  - UI/UX Design
  - Digital Marketing
  - SEO Services
  - Social Media Marketing
  - Software Development
  - IT Consulting

---

## 🎯 Business Services Overview

### Website Development
Custom, responsive websites built with modern technologies for optimal performance and user experience.

### Mobile App Development
Native and cross-platform mobile applications for iOS and Android.

### UI/UX Design
Beautiful, intuitive interfaces that provide exceptional user experiences.

### Digital Marketing
Data-driven marketing strategies that increase brand visibility and drive results.

### SEO Services
Comprehensive SEO strategies to improve search rankings and drive organic traffic.

### Social Media Marketing
Engaging social media campaigns that build brand awareness and community.

### Software Development
Custom software solutions tailored to unique business needs.

### IT Consulting
Expert guidance on technology strategy and digital transformation.

---

## 📱 Responsive Breakpoints

```css
/* Mobile First Approach */
Base:           320px - 767px
Tablet:         768px - 1023px
Desktop:        1024px - 1279px
Large Desktop:  1280px+
```

---

## ⚡ Performance Optimization

- **Lazy Loading:** Images load as needed
- **Minification:** Production CSS/JS should be minified
- **Compression:** Enable Gzip compression on server
- **Caching:** Browser caching enabled
- **CDN:** External libraries loaded from CDN
- **Image Optimization:** Use WebP format when possible

---

## 🔒 SEO & Meta Tags

Each page includes:
- Descriptive title tags
- Meta descriptions
- Open Graph tags (for social sharing)
- Canonical URLs
- Structured data (Schema.org)
- Sitemap.xml
- Robots.txt

---

## 🐛 Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Opera (latest)
- ⚠️ IE11 (partial support)

---

## 📄 License

This project is proprietary software created for tweNova Digital Solutions Agency.

---

## 👥 Credits

- **Design Inspiration:** Professional IT agency websites
- **Images:** Unsplash, Pravatar
- **Icons:** Font Awesome
- **Fonts:** Google Fonts
- **Animation:** AOS Library

---

## 📞 Support & Contact

For questions, support, or inquiries:

- **Email:** twenovaitc@gmail.com
- **Website:** [Your Domain]
- **Social Media:** [Links in footer]

---

## 🔄 Version History

### Version 1.0.0 (2026-03-10)
- ✅ Initial website launch
- ✅ All 7 pages created and deployed
- ✅ Responsive design implemented
- ✅ SEO optimization completed
- ✅ Form validation added
- ✅ Animation system integrated

---

## 🚧 Future Enhancements

- [ ] Blog functionality with CMS integration
- [ ] Client portal/dashboard
- [ ] Live chat support
- [ ] Multi-language support
- [ ] Dark mode toggle
- [ ] Case study detail pages
- [ ] Team member detail pages
- [ ] Job application tracking system
- [ ] Newsletter automation
- [ ] Analytics dashboard

---

## 💡 Development Notes

### JavaScript Functions

Key functions in `script.js`:
- `initNavbar()` - Sticky header
- `initMobileMenu()` - Mobile navigation
- `initAOS()` - Scroll animations
- `initFormValidation()` - Form validation
- `initCounters()` - Animated statistics
- `initBackToTop()` - Scroll to top button

### CSS Architecture

The CSS follows a modular approach:
1. CSS Variables (root)
2. Base styles
3. Layout components
4. Page-specific styles
5. Utility classes
6. Responsive media queries

---

## 🎓 Learning Resources

- [MDN Web Docs](https://developer.mozilla.org/)
- [CSS-Tricks](https://css-tricks.com/)
- [JavaScript.info](https://javascript.info/)
- [A11Y Project](https://www.a11yproject.com/)

---

**Built with ❤️ by tweNova Team**

*Make Together Grow Together* 🚀
