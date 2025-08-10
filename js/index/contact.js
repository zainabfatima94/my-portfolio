// Contact Form Validation and Submission
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    const submitBtn = contactForm.querySelector('button[type="submit"]');
    const submitText = contactForm.querySelector('.submit-text');
    const spinner = contactForm.querySelector('.spinner-border');
    const successAlert = document.getElementById('successAlert');
    const errorAlert = document.getElementById('errorAlert');
    
    // Form Validation
    contactForm.addEventListener('submit', function(event) {
        event.preventDefault();
        event.stopPropagation();
        
        if (contactForm.checkValidity()) {
            // Form is valid - submit via AJAX
            submitForm();
        }
        
        contactForm.classList.add('was-validated');
    }, false);
    
    // Form Submission
    function submitForm() {
        // Show loading state
        submitText.textContent = 'Sending...';
        spinner.classList.remove('d-none');
        submitBtn.disabled = true;
        
        // Hide any previous alerts
        successAlert.classList.add('d-none');
        errorAlert.classList.add('d-none');
        
        // Simulate AJAX submission (replace with actual fetch/XHR)
        setTimeout(() => {
            // This is where you would normally make your AJAX call
            // For demo purposes, we'll simulate a successful submission
            const isSuccess = Math.random() > 0.2; // 80% success rate for demo
            
            if (isSuccess) {
                // Success case
                successAlert.classList.remove('d-none');
                contactForm.reset();
                contactForm.classList.remove('was-validated');
            } else {
                // Error case
                errorAlert.classList.remove('d-none');
            }
            
            // Reset button state
            submitText.textContent = 'Send Message';
            spinner.classList.add('d-none');
            submitBtn.disabled = false;
            
            // Scroll to alert
            if (isSuccess) {
                successAlert.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
            } else {
                errorAlert.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
            }
        }, 1500);
    }
    
    // Initialize tooltips
    const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl);
    });
});