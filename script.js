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
    'profile': 'BLOG',
    'blog': 'PROJECTS',
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
document.querySelectorAll('.blog-card, .project-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    animateOnScroll.observe(el);
});

// Add staggered animation delay to cards
document.querySelectorAll('.blog-card').forEach((card, index) => {
    card.style.transitionDelay = `${index * 0.15}s`;
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

// Auto-scroll to sections on wheel event
const sectionElements = document.querySelectorAll('section[id]');
let currentSectionIndex = 0;
let isScrolling = false;
let scrollCooldown = 800; // ms cooldown between scroll actions
let touchStartY = 0;

// Get the current section based on scroll position
function getCurrentSectionIndex() {
    const scrollPosition = window.scrollY + window.innerHeight / 2;

    for (let i = sectionElements.length - 1; i >= 0; i--) {
        if (scrollPosition >= sectionElements[i].offsetTop) {
            return i;
        }
    }
    return 0;
}

// Scroll to a specific section
function scrollToSection(index) {
    if (index < 0 || index >= sectionElements.length) return;

    isScrolling = true;
    currentSectionIndex = index;

    sectionElements[index].scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });

    // Reset scrolling flag after animation completes
    setTimeout(() => {
        isScrolling = false;
    }, scrollCooldown);
}

// Handle wheel events for auto-scroll
function handleWheel(e) {
    // Skip if already scrolling or on mobile
    if (isScrolling || window.innerWidth <= 768) return;

    e.preventDefault();

    // Update current section based on actual position
    currentSectionIndex = getCurrentSectionIndex();

    // Determine scroll direction
    if (e.deltaY > 0) {
        // Scrolling down - go to next section
        scrollToSection(currentSectionIndex + 1);
    } else if (e.deltaY < 0) {
        // Scrolling up - go to previous section
        scrollToSection(currentSectionIndex - 1);
    }
}

// Handle touch events for mobile swipe
function handleTouchStart(e) {
    touchStartY = e.touches[0].clientY;
}

function handleTouchEnd(e) {
    if (isScrolling || window.innerWidth <= 768) return;

    const touchEndY = e.changedTouches[0].clientY;
    const deltaY = touchStartY - touchEndY;
    const minSwipeDistance = 50; // Minimum swipe distance to trigger scroll

    if (Math.abs(deltaY) < minSwipeDistance) return;

    currentSectionIndex = getCurrentSectionIndex();

    if (deltaY > 0) {
        // Swiped up - go to next section
        scrollToSection(currentSectionIndex + 1);
    } else {
        // Swiped down - go to previous section
        scrollToSection(currentSectionIndex - 1);
    }
}

// Handle keyboard navigation
function handleKeydown(e) {
    if (isScrolling) return;

    currentSectionIndex = getCurrentSectionIndex();

    if (e.key === 'ArrowDown' || e.key === 'PageDown') {
        e.preventDefault();
        scrollToSection(currentSectionIndex + 1);
    } else if (e.key === 'ArrowUp' || e.key === 'PageUp') {
        e.preventDefault();
        scrollToSection(currentSectionIndex - 1);
    } else if (e.key === 'Home') {
        e.preventDefault();
        scrollToSection(0);
    } else if (e.key === 'End') {
        e.preventDefault();
        scrollToSection(sectionElements.length - 1);
    }
}

// Add event listeners for auto-scroll (desktop only for wheel)
window.addEventListener('wheel', handleWheel, { passive: false });
window.addEventListener('keydown', handleKeydown);

// Touch events for potential tablet/large mobile landscape
document.addEventListener('touchstart', handleTouchStart, { passive: true });
document.addEventListener('touchend', handleTouchEnd, { passive: true });

// Update current section index on manual scroll (for nav clicks)
window.addEventListener('scroll', () => {
    if (!isScrolling) {
        currentSectionIndex = getCurrentSectionIndex();
    }
});

// Console greeting
console.log('%cHello! Welcome to Diego Cosca\'s portfolio.', 'color: #e74c3c; font-size: 16px; font-weight: bold;');
console.log('%cFeel free to explore the code!', 'color: #666; font-size: 12px;');
