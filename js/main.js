// Enhanced Navbar Scroll Effect
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 30) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Add active class to current page in navigation
document.addEventListener('DOMContentLoaded', function() {
    const currentPage = location.pathname.split('/').pop();
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        }
    });
    
    // Close mobile menu when clicking a link
    const offcanvas = bootstrap.Offcanvas.getInstance(document.getElementById('offcanvasNavbar'));
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            if (window.innerWidth < 992) {
                offcanvas.hide();
            }
        });
    });
});

// Update copyright year automatically
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('currentYear').textContent = new Date().getFullYear();
    
    // Newsletter form submission
    const newsletterForm = document.querySelector('.newsletter-form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const emailInput = this.querySelector('input[type="email"]');
            
            // Simple validation
            if (emailInput.value && emailInput.value.includes('@')) {
                // Here you would typically send the data to your newsletter service
                alert('Thank you for subscribing!');
                emailInput.value = '';
            } else {
                alert('Please enter a valid email address.');
            }
        });
    }
});