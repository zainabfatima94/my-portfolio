// Contact Form Validation
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('investmentInquiryForm');
    
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        const submitBtn = form.querySelector('.btn-submit');
        
        // Validate form
        if (validateForm()) {
            // Simulate form submission
            submitBtn.classList.add('loading');
            
            // In a real implementation, this would be an AJAX call
            setTimeout(() => {
                submitBtn.classList.remove('loading');
                showSuccessMessage();
                form.reset();
            }, 1500);
        }
    });
    
    function validateForm() {
        let isValid = true;
        
        // Validate name
        const name = document.getElementById('name');
        if (name.value.trim() === '') {
            showError(name, 'Please enter your name');
            isValid = false;
        } else {
            showSuccess(name);
        }
        
        // Validate email
        const email = document.getElementById('email');
        if (email.value.trim() === '') {
            showError(email, 'Please enter your email');
            isValid = false;
        } else if (!isValidEmail(email.value.trim())) {
            showError(email, 'Please enter a valid email');
            isValid = false;
        } else {
            showSuccess(email);
        }
        
        // Validate subject
        const subject = document.getElementById('subject');
        if (subject.value === '') {
            showError(subject, 'Please select a subject');
            isValid = false;
        } else {
            showSuccess(subject);
        }
        
        // Validate message
        const message = document.getElementById('message');
        if (message.value.trim() === '') {
            showError(message, 'Please enter your message');
            isValid = false;
        } else {
            showSuccess(message);
        }
        
        return isValid;
    }
    
    function showError(input, message) {
        const formGroup = input.closest('.form-group');
        const errorMessage = formGroup.querySelector('.error-message');
        formGroup.classList.add('error');
        errorMessage.textContent = message;
    }
    
    function showSuccess(input) {
        const formGroup = input.closest('.form-group');
        const errorMessage = formGroup.querySelector('.error-message');
        formGroup.classList.remove('error');
        errorMessage.textContent = '';
    }
    
    function isValidEmail(email) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }
    
    function showSuccessMessage() {
        // In a real implementation, you might show a toast or modal
        alert('Thank you for your message. We will respond shortly.');
    }
    
    // Back to top button smooth scroll
    document.querySelector('.back-to-top a').addEventListener('click', function(e) {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    // FAQ Accordion Functionality
    const faqQuestions = document.querySelectorAll('.faq-question');
    
    faqQuestions.forEach(question => {
        question.addEventListener('click', () => {
            const answer = question.nextElementSibling;
            const isActive = question.classList.contains('active');
            
            // Close all other FAQs
            faqQuestions.forEach(q => {
                q.classList.remove('active');
                q.nextElementSibling.classList.remove('active');
            });
            
            // Open current if it wasn't active
            if (!isActive) {
                question.classList.add('active');
                answer.classList.add('active');
            }
        });
    });
    
    // Form Submission Handling
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Basic validation
            const requiredFields = contactForm.querySelectorAll('[required]');
            let isValid = true;
            
            requiredFields.forEach(field => {
                if (!field.value.trim()) {
                    field.style.borderColor = '#ff4d4f';
                    isValid = false;
                } else {
                    field.style.borderColor = '';
                }
            });
            
            if (isValid) {
                // Here you would typically send the form data to your server
                // For demo purposes, we'll just show a success message
                alert('Thank you for your message. We will respond within 24 business hours.');
                contactForm.reset();
            } else {
                alert('Please fill in all required fields.');
            }
        });
    }
});