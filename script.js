// Theme Toggle
const themeToggle = document.getElementById('themeToggle');
const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');

// Check for saved theme preference or default to light
function getThemePreference() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        return savedTheme;
    }
    // Default to light theme as requested
    return 'light';
}

function setTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
}

// Initialize theme
setTheme(getThemePreference());

// Toggle theme on button click
themeToggle.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
});

// Navigation Active State
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link');
const indicatorLines = document.querySelectorAll('.indicator-line');
const bottomIndicator = document.getElementById('bottomIndicator');
const nextSectionName = document.getElementById('nextSectionName');
const scrollIndicator = document.getElementById('scrollIndicator');

// Section names mapping (current section -> next section name to display)
const sectionNames = {
    'profile': 'SHOWCASES',
    'showcases': 'PROJECTS',
    'projects': 'CONTACT',
    'contact': ''
};

function updateActiveNav() {
    const scrollPosition = window.scrollY + window.innerHeight / 3;

    sections.forEach((section, index) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            // Update nav links
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });

            // Update indicator lines
            indicatorLines.forEach((line, i) => {
                line.classList.remove('active');
                if (i === index) {
                    line.classList.add('active');
                }
            });

            // Update bottom section indicator
            const nextName = sectionNames[sectionId];
            if (nextName) {
                nextSectionName.textContent = nextName;
                bottomIndicator.classList.remove('hidden');
            } else {
                bottomIndicator.classList.add('hidden');
            }
        }
    });
}

window.addEventListener('scroll', updateActiveNav);
updateActiveNav();

// Carousel Functionality
const carousel = document.getElementById('showcaseCarousel');
const carouselTrack = carousel.querySelector('.carousel-track');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const dots = document.querySelectorAll('.dot');

let currentSlide = 0;
const totalSlides = 2; // Number of slide positions (pages)

function getCardsPerView() {
    const width = window.innerWidth;
    if (width <= 768) return 1;
    if (width <= 992) return 2;
    return 4;
}

function updateCarousel() {
    const cardsPerView = getCardsPerView();
    const cards = carouselTrack.querySelectorAll('.showcase-card');
    const cardWidth = cards[0].offsetWidth;
    const gap = 24; // 1.5rem gap

    const maxSlide = Math.max(0, Math.ceil(cards.length / cardsPerView) - 1);
    currentSlide = Math.min(currentSlide, maxSlide);

    const offset = currentSlide * (cardsPerView * (cardWidth + gap));
    carouselTrack.style.transform = `translateX(-${offset}px)`;

    // Update dots
    dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === currentSlide);
    });

    // Update button states
    prevBtn.style.opacity = currentSlide === 0 ? '0.5' : '1';
    nextBtn.style.opacity = currentSlide === maxSlide ? '0.5' : '1';
}

prevBtn.addEventListener('click', () => {
    if (currentSlide > 0) {
        currentSlide--;
        updateCarousel();
    }
});

nextBtn.addEventListener('click', () => {
    const cardsPerView = getCardsPerView();
    const cards = carouselTrack.querySelectorAll('.showcase-card');
    const maxSlide = Math.max(0, Math.ceil(cards.length / cardsPerView) - 1);

    if (currentSlide < maxSlide) {
        currentSlide++;
        updateCarousel();
    }
});

dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        currentSlide = index;
        updateCarousel();
    });
});

// Update carousel on resize
let resizeTimeout;
window.addEventListener('resize', () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(updateCarousel, 100);
});

// Initialize carousel
updateCarousel();

// Smooth scroll for navigation links
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        const targetSection = document.querySelector(targetId);

        if (targetSection) {
            targetSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Intersection Observer for animations
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const animateOnScroll = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Add animation to elements
document.querySelectorAll('.showcase-card, .project-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    animateOnScroll.observe(el);
});

// Add staggered animation delay to cards
document.querySelectorAll('.showcase-card').forEach((card, index) => {
    card.style.transitionDelay = `${index * 0.1}s`;
});

document.querySelectorAll('.project-card').forEach((card, index) => {
    card.style.transitionDelay = `${index * 0.1}s`;
});

// Navbar background on scroll
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.style.boxShadow = 'var(--shadow-sm)';
    } else {
        navbar.style.boxShadow = 'none';
    }
});

// Hide scroll indicator after scrolling (slides down and fades)
window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        scrollIndicator.classList.add('hidden');
    } else {
        scrollIndicator.classList.remove('hidden');
    }
});

// Console greeting
console.log('%cHello! Welcome to Diego Cosca\'s portfolio.', 'color: #e74c3c; font-size: 16px; font-weight: bold;');
console.log('%cFeel free to explore the code!', 'color: #666; font-size: 12px;');
