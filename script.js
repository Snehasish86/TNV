/**
 * tweNova Digital Solutions Agency - Main JavaScript
 * Author: tweNova Team
 * Version: 1.0.0
 */

'use strict';

// =====================
// Initialize on DOM Load
// =====================
document.addEventListener('DOMContentLoaded', function() {
    initNavbar();
    initMobileMenu();
    initMegaMenu();
    initAOS();
    initSmoothScroll();
    initFormValidation();
    initLazyLoading();
    initCounters();
    initBackToTop();
    initSliders();
    initTechTabs();

    // Case Study Swiper Initialization
    if (document.querySelector('.caseStudySwiper')) {
        new Swiper(".caseStudySwiper", {
            slidesPerView: 1,
            spaceBetween: 30,
            loop: false,
            autoplay: {
                delay: 5000,
                disableOnInteraction: false,
            },
            pagination: {
                el: ".cs-pagination",
                clickable: true,
            },
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
            observer: true,
            observeParents: true,
            breakpoints: {
                1024: {
                    spaceBetween: 50,
                }
            }
        });
    }

    // Hero Image Slider Initialization (single instance only)
    // Defer until images are loaded to prevent Swiper calculating garbage dimensions
    var heroEl = document.querySelector('.heroSwiper');
    if (heroEl) {
        var heroImages = heroEl.querySelectorAll('img');
        var loaded = 0;
        var total = heroImages.length;

        function initHeroSwiper() {
            new Swiper(".heroSwiper", {
                effect: "fade",
                fadeEffect: {
                    crossFade: true
                },
                loop: false,
                autoplay: {
                    delay: 4000,
                    disableOnInteraction: false,
                },
                speed: 1500,
                observer: true,
                observeParents: true,
            });
        }

        if (total === 0) {
            initHeroSwiper();
        } else {
            heroImages.forEach(function(img) {
                if (img.complete && img.naturalWidth > 0) {
                    loaded++;
                } else {
                    img.addEventListener('load', function() {
                        loaded++;
                        if (loaded >= total) initHeroSwiper();
                    });
                    img.addEventListener('error', function() {
                        loaded++;
                        if (loaded >= total) initHeroSwiper();
                    });
                }
            });
            // If all images were already cached / complete
            if (loaded >= total) {
                initHeroSwiper();
            }
            // Safety fallback: init after 3s max regardless
            setTimeout(function() {
                if (!heroEl.swiper) initHeroSwiper();
            }, 3000);
        }
    }

    // Fact Counter Animation
    initFactCounters();
});

// =====================
// Fact Counter Animation
// =====================
function initFactCounters() {
    const counters = document.querySelectorAll('.fact-counter');
    if (!counters.length) return;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const el = entry.target;
                const target = parseInt(el.getAttribute('data-target'));
                const duration = 2000;
                const step = Math.ceil(target / (duration / 16));
                let current = 0;

                const timer = setInterval(() => {
                    current += step;
                    if (current >= target) {
                        el.textContent = target;
                        clearInterval(timer);
                    } else {
                        el.textContent = current;
                    }
                }, 16);

                observer.unobserve(el);
            }
        });
    }, { threshold: 0.5 });

    counters.forEach(counter => observer.observe(counter));
}

// =====================
// Sticky Navbar
// =====================
function initNavbar() {
    const header = document.querySelector('header');
    if (!header) return;

    function handleScroll() {
        if (window.scrollY > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    }

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial state
}

// =====================
// Mobile Menu Toggle
// =====================
function initMobileMenu() {
    const hamburger = document.querySelector('.hamburger');
    const mobileOverlay = document.querySelector('.mobile-overlay');
    const closeMenu = document.querySelector('.close-menu');
    const mobileLinks = document.querySelectorAll('.mobile-nav-links a');

    if (!hamburger || !mobileOverlay) return;

    // Open menu
    hamburger.addEventListener('click', function() {
        mobileOverlay.classList.add('active');
        hamburger.classList.add('active');
        document.body.style.overflow = 'hidden';
    });

    // Close menu
    function closeMobileMenu() {
        mobileOverlay.classList.remove('active');
        hamburger.classList.remove('active');
        document.body.style.overflow = '';
    }

    if (closeMenu) {
        closeMenu.addEventListener('click', closeMobileMenu);
    }

    // Close on link click
    mobileLinks.forEach(link => {
        link.addEventListener('click', closeMobileMenu);
    });

    // Close on outside click
    mobileOverlay.addEventListener('click', function(e) {
        if (e.target === mobileOverlay) {
            closeMobileMenu();
        }
    });

    // Close on escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && mobileOverlay.classList.contains('active')) {
            closeMobileMenu();
        }
    });
}

// =====================
// Initialize AOS Animations
// =====================
function initAOS() {
    if (typeof AOS !== 'undefined') {
        AOS.init({
            duration: 800,
            easing: 'ease-in-out',
            once: true,
            offset: 100,
            disable: window.innerWidth < 768 // Disable AOS on mobile to prevent visibility issues
        });
    }
}

// =====================
// Smooth Scroll for Anchor Links
// =====================
function initSmoothScroll() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            // Skip if it's just '#'
            if (href === '#') {
                e.preventDefault();
                return;
            }

            const target = document.querySelector(href);
            if (target) {
                e.preventDefault();
                const headerHeight = document.querySelector('header').offsetHeight;
                const targetPosition = target.offsetTop - headerHeight - 20;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// =====================
// Form Validation
// =====================
function initFormValidation() {
    const forms = document.querySelectorAll('form[data-validate]');
    
    forms.forEach(form => {
        // Real-time validation on blur
        const inputs = form.querySelectorAll('input, textarea, select');
        inputs.forEach(input => {
            input.addEventListener('blur', function() {
                validateField(this);
            });

            input.addEventListener('input', function() {
                if (this.parentElement.classList.contains('has-error')) {
                    validateField(this);
                }
            });
        });

        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            let isValid = true;
            const successMessage = form.querySelector('#successMessage');
            const errorMessage = form.querySelector('#errorMessage');
            
            // Hide messages
            if (successMessage) successMessage.style.display = 'none';
            if (errorMessage) errorMessage.style.display = 'none';

            // Validate all fields
            inputs.forEach(input => {
                if (!validateField(input)) {
                    isValid = false;
                }
            });

            if (isValid) {
                handleFormSubmit(form);
            } else {
                if (errorMessage) {
                    errorMessage.style.display = 'flex';
                    errorMessage.scrollIntoView({ behavior: 'smooth', block: 'center' });
                }
            }
        });
    });
}

function validateField(field) {
    const formGroup = field.parentElement;
    const errorText = formGroup.querySelector('.error-text');
    const validateType = field.getAttribute('data-validate');
    const errorMsg = field.getAttribute('data-error-message') || 'This field is invalid';
    const value = field.value.trim();

    // Clear previous error
    formGroup.classList.remove('has-error');
    if (errorText) errorText.textContent = '';

    // Required validation
    if (validateType === 'required' || field.hasAttribute('required')) {
        if (!value) {
            showFieldError(formGroup, errorText, errorMsg);
            return false;
        }
    }

    // Email validation
    if (validateType === 'email' && value) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) {
            showFieldError(formGroup, errorText, errorMsg);
            return false;
        }
    }

    // Phone validation
    if (validateType === 'phone' && value) {
        const phoneRegex = /^[\d\s\-\+\(\)]+$/;
        if (!phoneRegex.test(value) || value.replace(/\D/g, '').length < 10) {
            showFieldError(formGroup, errorText, errorMsg);
            return false;
        }
    }

    return true;
}

function showFieldError(formGroup, errorText, message) {
    formGroup.classList.add('has-error');
    if (errorText) {
        errorText.textContent = message;
    }
}

function handleFormSubmit(form) {
    const submitBtn = form.querySelector('[type="submit"]');
    const btnText = submitBtn.querySelector('.btn-text');
    const btnLoading = submitBtn.querySelector('.btn-loading');
    const successMessage = form.querySelector('#successMessage');
    const errorMessage = form.querySelector('#errorMessage');
    
    // Show loading state
    submitBtn.classList.add('loading');
    submitBtn.disabled = true;
    if (btnText) btnText.style.display = 'none';
    if (btnLoading) btnLoading.style.display = 'inline-block';

    // Get form data
    const formData = new FormData(form);
    const data = {};
    for (let [key, value] of formData.entries()) {
        data[key] = value;
    }

    // Simulate form submission (replace with actual AJAX call to your backend)
    setTimeout(() => {
        // Success
        submitBtn.classList.remove('loading');
        submitBtn.disabled = false;
        if (btnText) btnText.style.display = 'inline';
        if (btnLoading) btnLoading.style.display = 'none';

        if (successMessage) {
            successMessage.style.display = 'flex';
            successMessage.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }

        form.reset();

        // Hide success message after 10 seconds
        setTimeout(() => {
            if (successMessage) successMessage.style.display = 'none';
        }, 10000);

        // Here you would typically send the data to your server
        // Example using fetch:
        /*
        fetch('/api/contact', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        })
        .then(response => response.json())
        .then(data => {
            // Handle success
            if (successMessage) {
                successMessage.style.display = 'flex';
            }
            form.reset();
        })
        .catch(error => {
            // Handle error
            if (errorMessage) {
                errorMessage.style.display = 'flex';
            }
        })
        .finally(() => {
            submitBtn.classList.remove('loading');
            submitBtn.disabled = false;
        });
        */
    }, 2000);
}

// =====================
// Lazy Loading Images
// =====================
function initLazyLoading() {
    const images = document.querySelectorAll('img[loading="lazy"]');
    
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src || img.src;
                    img.classList.add('loaded');
                    observer.unobserve(img);
                }
            });
        });

        images.forEach(img => imageObserver.observe(img));
    }
}

// =====================
// Animated Counters
// =====================
function initCounters() {
    const counters = document.querySelectorAll('.stat-value, .stat-number');
    let activated = false;

    if (counters.length === 0) return;

    function animateCounter(counter) {
        const target = parseInt(counter.textContent.replace(/\D/g, ''));
        if (isNaN(target)) return;
        
        const duration = 2000;
        const increment = target / (duration / 16);
        let current = 0;

        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                counter.textContent = counter.textContent.replace(/\d+/, target);
                clearInterval(timer);
            } else {
                counter.textContent = counter.textContent.replace(/\d+/, Math.floor(current));
            }
        }, 16);
    }

    function checkCounters() {
        if (activated) return;

        counters.forEach(counter => {
            const rect = counter.getBoundingClientRect();
            const isVisible = rect.top < window.innerHeight && rect.bottom > 0;

            if (isVisible) {
                activated = true;
                animateCounter(counter);
            }
        });
    }

    window.addEventListener('scroll', checkCounters);
    checkCounters(); // Check on load
}

// =====================
// Initialize Sliders
// =====================
function initSliders() {
    // Hero Slider is initialized in DOMContentLoaded (above) — do NOT duplicate here

    // Testimonial Slider
    if (typeof Swiper !== 'undefined' && document.querySelector('.testimonialSwiper')) {
        new Swiper('.testimonialSwiper', {
            loop: false,
            speed: 800,
            autoplay: {
                delay: 6000,
            },
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            observer: true,
            observeParents: true,
        });
    }
}

// =====================
// Tech Tabs Switching (High-Fidelity)
// =====================
function initTechTabs() {
    const pills = document.querySelectorAll('.tech-pill');
    const contents = document.querySelectorAll('.tech-tab-content');
    
    if (!pills.length || !contents.length) return;

    pills.forEach(pill => {
        pill.addEventListener('click', () => {
            const targetId = pill.getAttribute('data-target');
            
            // Update pills
            pills.forEach(p => p.classList.remove('active'));
            pill.classList.add('active');
            
            // Update contents
            contents.forEach(content => {
                content.classList.remove('active');
                if (content.id === targetId) {
                    content.classList.add('active');
                }
            });
        });
    });
}


// =====================
// Back to Top Button
// =====================
function initBackToTop() {
    // Create back to top button
    const backToTop = document.createElement('button');
    backToTop.className = 'back-to-top';
    backToTop.innerHTML = '<i class="fas fa-arrow-up"></i>';
    backToTop.setAttribute('aria-label', 'Back to top');
    backToTop.style.cssText = `
        position: fixed;
        bottom: 2rem;
        right: 2rem;
        width: 50px;
        height: 50px;
        background: linear-gradient(135deg, #4A8EC2, #4A8EC2);
        color: white;
        border: none;
        border-radius: 50%;
        cursor: pointer;
        opacity: 0;
        visibility: hidden;
        transition: all 0.3s ease;
        z-index: 999;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
    `;
    
    document.body.appendChild(backToTop);

    // Show/hide on scroll
    window.addEventListener('scroll', () => {
        if (window.scrollY > 500) {
            backToTop.style.opacity = '1';
            backToTop.style.visibility = 'visible';
        } else {
            backToTop.style.opacity = '0';
            backToTop.style.visibility = 'hidden';
        }
    });

    // Scroll to top on click
    backToTop.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Hover effect
    backToTop.addEventListener('mouseenter', () => {
        backToTop.style.transform = 'translateY(-5px)';
        backToTop.style.boxShadow = '0 8px 20px rgba(0, 0, 0, 0.3)';
    });

    backToTop.addEventListener('mouseleave', () => {
        backToTop.style.transform = 'translateY(0)';
        backToTop.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.2)';
    });
}

// =====================
// Active Navigation Link Highlighting
// =====================
function updateActiveNavLink() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-links a');

    window.addEventListener('scroll', () => {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (window.scrollY >= sectionTop - 200) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
}

// Initialize active nav link highlighting
if (document.querySelectorAll('section[id]').length > 0) {
    updateActiveNavLink();
}

// =====================
// Parallax Effect for Hero Section
// =====================
function initParallax() {
    const heroSection = document.querySelector('.hero-section');
    if (!heroSection) return;

    window.addEventListener('scroll', () => {
        const scrolled = window.scrollY;
        const parallaxElements = heroSection.querySelectorAll('[data-parallax]');

        parallaxElements.forEach(element => {
            const speed = element.dataset.parallaxSpeed || 0.5;
            element.style.transform = `translateY(${scrolled * speed}px)`;
        });
    });
}

initParallax();

// =====================
// Typing Effect for Hero Text (Optional)
// =====================
function initTypingEffect() {
    const typingElement = document.querySelector('[data-typing]');
    if (!typingElement) return;

    const text = typingElement.textContent;
    const speed = 100;
    let index = 0;

    typingElement.textContent = '';
    typingElement.style.borderRight = '2px solid';

    function type() {
        if (index < text.length) {
            typingElement.textContent += text.charAt(index);
            index++;
            setTimeout(type, speed);
        } else {
            typingElement.style.borderRight = 'none';
        }
    }

    // Start typing after a delay
    setTimeout(type, 500);
}

// =====================
// Portfolio Filter (if needed)
// =====================
function initPortfolioFilter() {
    const filterButtons = document.querySelectorAll('[data-filter]');
    const portfolioItems = document.querySelectorAll('[data-category]');

    if (filterButtons.length === 0) return;

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            const filter = button.dataset.filter;

            // Update active button
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            // Filter items
            portfolioItems.forEach(item => {
                if (filter === 'all' || item.dataset.category === filter) {
                    item.style.display = 'block';
                    setTimeout(() => {
                        item.style.opacity = '1';
                        item.style.transform = 'scale(1)';
                    }, 10);
                } else {
                    item.style.opacity = '0';
                    item.style.transform = 'scale(0.8)';
                    setTimeout(() => {
                        item.style.display = 'none';
                    }, 300);
                }
            });
        });
    });
}

initPortfolioFilter();

// =====================
// Loading Screen (Optional)
// =====================
function initLoadingScreen() {
    const loader = document.querySelector('.page-loader');
    if (!loader) return;

    window.addEventListener('load', () => {
        setTimeout(() => {
            loader.style.opacity = '0';
            setTimeout(() => {
                loader.style.display = 'none';
            }, 500);
        }, 1000);
    });
}

initLoadingScreen();

// =====================
// Prevent Default for Empty Links
// =====================
document.querySelectorAll('a[href="#"]').forEach(link => {
    link.addEventListener('click', (e) => {
        if (link.getAttribute('href') === '#') {
            e.preventDefault();
        }
    });
});

// =====================
// Console Welcome Message
// =====================
console.log(
    '%c👋 Welcome to tweNova Digital Solutions Agency!',
    'color: #4A8EC2; font-size: 20px; font-weight: bold;'
);
console.log(
    '%cMake Together Grow Together 🚀',
    'color: #4A8EC2; font-size: 14px;'
);

// =====================
// Mega Menu Handlers
// =====================
function initMegaMenu() {
    // Mega menu show/hide is handled purely by CSS :hover rules.
    // No JS toggling needed — avoids display:none race conditions.
}

// =====================
// Binary Rain Animation
// =====================
(function initBinaryRain() {
    const canvas = document.getElementById('binaryCanvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    const FONT_SIZE = 14;
    const CHARS = ['0', '1'];
    let columns = [];
    let drops = [];
    let frame = 0;

    function resize() {
        canvas.width = canvas.offsetWidth;
        canvas.height = canvas.offsetHeight;
        const cols = Math.floor(canvas.width / FONT_SIZE);
        if (cols !== columns.length) {
            columns = Array.from({ length: cols }, (_, i) => i);
            // Start each column drop at a random position from the bottom
            drops = columns.map(() => Math.floor(Math.random() * (canvas.height / FONT_SIZE)));
        }
    }

    function draw() {
        frame++;
        // Slow fade trail so characters stay visible longer
        ctx.fillStyle = 'rgba(0, 0, 0, 0.04)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        ctx.font = FONT_SIZE + 'px monospace';

        for (let i = 0; i < drops.length; i++) {
            const char = CHARS[Math.random() < 0.5 ? 0 : 1];
            const x = i * FONT_SIZE;
            // y rises from bottom
            const y = canvas.height - drops[i] * FONT_SIZE;

            // Head glyph: bright white
            ctx.fillStyle = '#F6F4F1';
            ctx.fillText(char, x, y);

            // Gradient trail below the head
            const gradient = ctx.createLinearGradient(x, y, x, y + FONT_SIZE * 6);
            gradient.addColorStop(0, 'rgba(144,180,212,1.0)');
            gradient.addColorStop(1, 'rgba(74,142,194,0.0)');
            ctx.fillStyle = gradient;
            ctx.fillText(char, x, y + FONT_SIZE);

            // Only advance drops every 3rd frame to slow the rise
            if (frame % 3 === 0) {
                drops[i]++;
            }

            // Reset to bottom when it exits the top
            if (drops[i] * FONT_SIZE > canvas.height + FONT_SIZE * 20) {
                if (Math.random() > 0.97) {
                    drops[i] = 0;
                }
            }
        }
    }

    window.addEventListener('resize', resize);
    resize();
    setInterval(draw, 80);
})();

// =====================
// Custom Initialization for external use
// =====================
window.tweNova = {
    initAOS,
    initNavbar,
    initMobileMenu,
    initSmoothScroll,
    initFormValidation,
    initMegaMenu
};
