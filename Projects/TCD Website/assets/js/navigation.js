// Mobile Navigation Toggle
const mobileToggle = document.querySelector('.mobile-toggle');
const navLinks = document.querySelector('.nav-links');
const dropdownTriggers = document.querySelectorAll('.nav-item > .nav-link i');

mobileToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    mobileToggle.innerHTML = navLinks.classList.contains('active') ? 
        '<i class="fas fa-times"></i>' : '<i class="fas fa-bars"></i>';
});

// Mobile Dropdown Toggle
dropdownTriggers.forEach(trigger => {
    trigger.addEventListener('click', (e) => {
        if (window.innerWidth <= 768) {
            e.preventDefault();
            e.stopPropagation();
            const dropdown = trigger.parentElement.nextElementSibling;
            dropdown.classList.toggle('active');
            trigger.classList.toggle('fa-chevron-down');
            trigger.classList.toggle('fa-chevron-up');
        }
    });
});

// Close mobile menu when clicking on item
document.querySelectorAll('.nav-link:not(.nav-cta)').forEach(link => {
    link.addEventListener('click', () => {
        if (window.innerWidth <= 768) {
            navLinks.classList.remove('active');
            mobileToggle.innerHTML = '<i class="fas fa-bars"></i>';
        }
    });
});

