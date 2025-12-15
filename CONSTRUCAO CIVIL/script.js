// Main JavaScript file for Civetch Angola website

// Initialize animations and interactions - optimized
function initAnimations() {
    if (typeof gsap === 'undefined') return;
    
    gsap.registerPlugin(ScrollTrigger);
    
    // Faster hero animation
    gsap.timeline()
        .to("#hero-subtitle", { opacity: 1, y: 0, duration: 0.5, delay: 0.2 })
        .to("#hero-ctas", { opacity: 1, y: 0, duration: 0.5 }, "-=0.3")
        .to("#hero-stats", { opacity: 1, y: 0, duration: 0.5 }, "-=0.3")
        .to("#hero-gallery", { opacity: 1, scale: 1, duration: 0.6 }, "-=0.4");
    
    // Scroll-triggered animations
    gsap.utils.toArray('.fade-in').forEach(element => {
        gsap.fromTo(element, 
            { opacity: 0, y: 50 },
            {
                opacity: 1,
                y: 0,
                duration: 0.8,
                scrollTrigger: {
                    trigger: element,
                    start: "top 80%",
                    end: "bottom 20%",
                    toggleActions: "play none none reverse"
                }
            }
        );
    });
    
    // Timeline items animation
    gsap.utils.toArray('.timeline-item').forEach((item, index) => {
        gsap.fromTo(item,
            { opacity: 0, x: index % 2 === 0 ? -100 : 100 },
            {
                opacity: 1,
                x: 0,
                duration: 0.8,
                delay: index * 0.2,
                scrollTrigger: {
                    trigger: item,
                    start: "top 80%",
                    toggleActions: "play none none reverse"
                }
            }
        );
    });
    
    // Service cards animation
    gsap.utils.toArray('.service-card').forEach((card, index) => {
        gsap.fromTo(card,
            { opacity: 0, y: 50, scale: 0.9 },
            {
                opacity: 1,
                y: 0,
                scale: 1,
                duration: 0.6,
                delay: index * 0.1,
                scrollTrigger: {
                    trigger: card,
                    start: "top 85%",
                    toggleActions: "play none none reverse"
                }
            }
        );
    });
}

// Project filtering functionality
document.addEventListener('DOMContentLoaded', function() {
    const filterButtons = document.querySelectorAll('.project-filter');
    const projectItems = document.querySelectorAll('.project-item');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            const filter = this.dataset.filter;
            
            // Update active button
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            // Filter projects
            projectItems.forEach(item => {
                if (filter === 'all' || item.dataset.category === filter) {
                    item.style.display = 'block';
                    gsap.fromTo(item, 
                        { opacity: 0, scale: 0.8 },
                        { opacity: 1, scale: 1, duration: 0.5 }
                    );
                } else {
                    gsap.to(item, {
                        opacity: 0,
                        scale: 0.8,
                        duration: 0.3,
                        onComplete: () => {
                            item.style.display = 'none';
                        }
                    });
                }
            });
        });
    });
    
    // Set default active filter
    document.querySelector('[data-filter="all"]').classList.add('active');
});

// Contact form handling
document.getElementById('contactForm')?.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const submitBtn = document.querySelector('#contactForm button[type="submit"]');
    const submitText = document.getElementById('submit-text');
    const submitSpinner = document.getElementById('submit-spinner');
    const successMsg = document.getElementById('form-success');
    const errorMsg = document.getElementById('form-error');
    
    // Show loading state
    submitText.textContent = 'Enviando...';
    submitSpinner.classList.remove('hidden');
    submitBtn.disabled = true;
    
    // Hide previous messages
    successMsg.classList.add('hidden');
    errorMsg.classList.add('hidden');
    
    // Simulate form submission (replace with actual form handling)
    setTimeout(() => {
        // Reset button state
        submitText.textContent = 'Enviar Mensagem';
        submitSpinner.classList.add('hidden');
        submitBtn.disabled = false;
        
        // Show success message
        successMsg.classList.remove('hidden');
        
        // Reset form
        this.reset();
        
        // Hide success message after 5 seconds
        setTimeout(() => {
            successMsg.classList.add('hidden');
        }, 5000);
    }, 2000);
});

// Dark mode toggle
document.getElementById('dark-mode-toggle')?.addEventListener('click', function() {
    document.documentElement.classList.toggle('dark');
    
    // Save preference
    const isDark = document.documentElement.classList.contains('dark');
    localStorage.setItem('darkMode', isDark);
});

// Load dark mode preference
if (localStorage.getItem('darkMode') === 'true') {
    document.documentElement.classList.add('dark');
}

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Logo carousel animation
function initLogoCarousel() {
    const carousel = document.getElementById('logo-carousel');
    if (carousel) {
        gsap.to(carousel, {
            x: '-50%',
            duration: 20,
            ease: 'none',
            repeat: -1
        });
    }
}

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
        }
    });
}, observerOptions);

// Observe elements for animation
document.querySelectorAll('.service-card, .team-card, .timeline-item').forEach(el => {
    observer.observe(el);
});

// FAQ functionality
document.addEventListener('DOMContentLoaded', function() {
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        const answer = item.querySelector('.faq-answer');
        const icon = question.querySelector('i');
        
        question.addEventListener('click', () => {
            const isOpen = !answer.classList.contains('hidden');
            
            // Close all other FAQ items
            faqItems.forEach(otherItem => {
                if (otherItem !== item) {
                    const otherAnswer = otherItem.querySelector('.faq-answer');
                    const otherIcon = otherItem.querySelector('.faq-question i');
                    otherAnswer.classList.add('hidden');
                    otherIcon.style.transform = 'rotate(0deg)';
                }
            });
            
            // Toggle current item
            if (isOpen) {
                answer.classList.add('hidden');
                icon.style.transform = 'rotate(0deg)';
            } else {
                answer.classList.remove('hidden');
                icon.style.transform = 'rotate(180deg)';
            }
        });
    });
});

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    initLogoCarousel();
    
    // Add loading class to body
    document.body.classList.add('loaded');
    
    // Initialize feather icons
    if (typeof feather !== 'undefined') {
        feather.replace();
    }
});

// Parallax effect for hero section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const parallax = document.querySelector('.hero-bg');
    if (parallax) {
        const speed = scrolled * 0.5;
        parallax.style.transform = `translateY(${speed}px)`;
    }
});

// Add scroll effect to navbar (if exists)
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('nav');
    if (navbar) {
        if (window.scrollY > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    }
});

// Project modal functionality
const projectItems = document.querySelectorAll('.project-item');
const modal = document.getElementById('project-modal');
const closeModal = document.getElementById('close-modal');

projectItems.forEach(item => {
    item.addEventListener('click', function() {
        // Get project data (you can expand this with real data)
        const title = this.querySelector('h4')?.textContent || 'Projeto';
        const category = this.querySelector('.bg-secondary, .bg-blue-500, .bg-green-500')?.textContent || 'Categoria';
        
        // Populate modal (expand with real project data)
        document.getElementById('modal-title').textContent = title;
        document.getElementById('modal-location').textContent = 'Luanda, Angola';
        document.getElementById('modal-description').textContent = 'Descrição detalhada do projeto...';
        
        // Show modal
        modal.classList.remove('opacity-0', 'pointer-events-none');
        modal.classList.add('opacity-100');
        document.body.style.overflow = 'hidden';
    });
});

// Close modal
closeModal?.addEventListener('click', function() {
    modal.classList.add('opacity-0', 'pointer-events-none');
    modal.classList.remove('opacity-100');
    document.body.style.overflow = 'auto';
});

// Close modal on backdrop click
modal?.addEventListener('click', function(e) {
    if (e.target === modal) {
        closeModal.click();
    }
});

// Add floating animation to elements
function addFloatingAnimation() {
    const floatingElements = document.querySelectorAll('.floating-element');
    floatingElements.forEach((element, index) => {
        gsap.to(element, {
            y: -20,
            duration: 2 + index * 0.5,
            ease: 'power2.inOut',
            yoyo: true,
            repeat: -1
        });
    });
}

// Initialize floating animations
document.addEventListener('DOMContentLoaded', addFloatingAnimation);