// Header Scroll Effect
window.addEventListener('scroll', function() {
    const header = document.getElementById('mainHeader');
    const scrollPosition = window.scrollY;
    
    if (scrollPosition > 100) {
        header.classList.add('header-scrolled');
    } else {
        header.classList.remove('header-scrolled');
    }
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// Active link highlighting
const navLinks = document.querySelectorAll('.nav-link');

function setActiveLink() {
    const scrollPosition = window.scrollY;
    
    document.querySelectorAll('section').forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
}

window.addEventListener('scroll', setActiveLink);

// Hero Slider Functionality
document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelectorAll('.hero-slide');
    const indicators = document.querySelectorAll('.slider-indicator');
    let currentSlide = 0;
    let slideInterval;
    
    // Initialize slider
    function startSlider() {
        slideInterval = setInterval(nextSlide, 6000); // Change slide every 6 seconds
    }
    
    // Go to specific slide
    function goToSlide(n) {
        slides[currentSlide].classList.remove('active');
        indicators[currentSlide].classList.remove('active');
        currentSlide = (n + slides.length) % slides.length;
        slides[currentSlide].classList.add('active');
        indicators[currentSlide].classList.add('active');
    }
    
    // Next slide
    function nextSlide() {
        goToSlide(currentSlide + 1);
    }
    
    // Previous slide
    function prevSlide() {
        goToSlide(currentSlide - 1);
    }
    
    // Click on indicator
    indicators.forEach((indicator, index) => {
        indicator.addEventListener('click', () => {
            clearInterval(slideInterval);
            goToSlide(index);
            startSlider();
        });
    });
    
    // Pause on hover
    const heroSection = document.getElementById('hero');
    heroSection.addEventListener('mouseenter', () => {
        clearInterval(slideInterval);
    });
    
    heroSection.addEventListener('mouseleave', startSlider);
    
    // Start the slider
    startSlider();
    
    // Keyboard navigation
    document.addEventListener('keydown', function(e) {
        if (e.key === 'ArrowLeft') {
            prevSlide();
        } else if (e.key === 'ArrowRight') {
            nextSlide();
        }
    });
});

// Scroll Animation Functionality
document.addEventListener('DOMContentLoaded', function() {
    const animateOnScroll = function() {
        const elements = document.querySelectorAll('.about-image img, .about-text h3, .about-text p, .feature-item, .btn-about');
        const windowHeight = window.innerHeight;
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const elementVisible = 100;
            
            if (elementPosition < windowHeight - elementVisible) {
                element.classList.add('animated');
            }
        });
    };
    
    // Run on initial load
    animateOnScroll();
    
    // Run on scroll
    window.addEventListener('scroll', animateOnScroll);
    
    // Intersection Observer for more precise animations
    if ('IntersectionObserver' in window) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animated');
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.1
        });
        
        document.querySelectorAll('.about-image img, .about-text h3, .about-text p, .feature-item, .btn-about').forEach(element => {
            observer.observe(element);
        });
    }
});

// Scroll Animation Functionality
document.addEventListener('DOMContentLoaded', function() {
    // Animate elements on scroll
    const animateOnScroll = function() {
        const elements = document.querySelectorAll('.section-title h2, .section-title p, .event-filters, .event-card, .view-all');
        const windowHeight = window.innerHeight;
        
        elements.forEach((element, index) => {
            const elementPosition = element.getBoundingClientRect().top;
            const elementVisible = 100;
            
            if (elementPosition < windowHeight - elementVisible) {
                // Stagger animation for event cards
                if (element.classList.contains('event-card')) {
                    setTimeout(() => {
                        element.classList.add('animated');
                    }, index * 100);
                } else {
                    element.classList.add('animated');
                }
            }
        });
    };
    
    // Run on initial load
    animateOnScroll();
    
    // Run on scroll
    window.addEventListener('scroll', animateOnScroll);
    
    // Event Filtering
    const filterButtons = document.querySelectorAll('.filter-btn');
    const eventCards = document.querySelectorAll('.event-card');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Update active button
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            
            const filterValue = button.getAttribute('data-filter');
            
            // Filter events
            eventCards.forEach(card => {
                if (filterValue === 'all' || card.getAttribute('data-category').includes(filterValue)) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });
});

// Scroll Animation Functionality
document.addEventListener('DOMContentLoaded', function() {
    // Animate elements on scroll
    const animateOnScroll = function() {
        const elements = document.querySelectorAll('.highlight-card, .speaker-card, .schedule-container, .conference-cta');
        const windowHeight = window.innerHeight;
        
        elements.forEach((element, index) => {
            const elementPosition = element.getBoundingClientRect().top;
            const elementVisible = 100;
            
            if (elementPosition < windowHeight - elementVisible) {
                // Stagger animation for speaker cards
                if (element.classList.contains('speaker-card')) {
                    setTimeout(() => {
                        element.classList.add('animated');
                    }, index * 100);
                } else {
                    element.classList.add('animated');
                }
            }
        });
    };
    
    // Run on initial load
    animateOnScroll();
    
    // Run on scroll
    window.addEventListener('scroll', animateOnScroll);
});

// Testimonial Carousel Functionality
document.addEventListener('DOMContentLoaded', function() {
    const testimonials = document.querySelectorAll('.testimonial-item');
    const indicators = document.querySelectorAll('.carousel-indicator');
    let currentTestimonial = 0;
    let carouselInterval;
    
    // Show specific testimonial
    function showTestimonial(index) {
        testimonials.forEach(testimonial => testimonial.classList.remove('active'));
        indicators.forEach(indicator => indicator.classList.remove('active'));
        
        currentTestimonial = index;
        testimonials[currentTestimonial].classList.add('active');
        indicators[currentTestimonial].classList.add('active');
    }
    
    // Next testimonial
    function nextTestimonial() {
        let nextIndex = (currentTestimonial + 1) % testimonials.length;
        showTestimonial(nextIndex);
    }
    
    // Start auto-rotation
    function startCarousel() {
        carouselInterval = setInterval(nextTestimonial, 5000);
    }
    
    // Click on indicator
    indicators.forEach((indicator, index) => {
        indicator.addEventListener('click', () => {
            clearInterval(carouselInterval);
            showTestimonial(index);
            startCarousel();
        });
    });
    
    // Start the carousel
    startCarousel();
    
    // Scroll Animation Functionality
    const animateOnScroll = function() {
        const elements = document.querySelectorAll('.testimonial-carousel, .clients-section');
        const windowHeight = window.innerHeight;
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const elementVisible = 100;
            
            if (elementPosition < windowHeight - elementVisible) {
                element.classList.add('animated');
            }
        });
    };
    
    // Run on initial load
    animateOnScroll();
    
    // Run on scroll
    window.addEventListener('scroll', animateOnScroll);
});

// Form Submission
document.querySelector('.newsletter-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const email = this.querySelector('input[type="email"]').value;
    // Here you would typically send the email to your server
    alert(`Thank you for subscribing! We've sent a confirmation to ${email}`);
    this.reset();
});

// Scroll Animation Functionality
document.addEventListener('DOMContentLoaded', function() {
    const animateOnScroll = function() {
        const elements = document.querySelectorAll('.newsletter-content, .ticket-options');
        const windowHeight = window.innerHeight;
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const elementVisible = 100;
            
            if (elementPosition < windowHeight - elementVisible) {
                element.classList.add('animated');
            }
        });
    };
    
    // Run on initial load
    animateOnScroll();
    
    // Run on scroll
    window.addEventListener('scroll', animateOnScroll);
});

// Newsletter Form Submission
document.querySelector('.footer-newsletter button').addEventListener('click', function() {
    const emailInput = document.querySelector('.footer-newsletter input');
    if (emailInput.value) {
        alert('Thank you for subscribing to our newsletter!');
        emailInput.value = '';
    } else {
        alert('Please enter your email address');
    }
});



