// Animate progress bars on scroll
document.addEventListener('DOMContentLoaded', function() {
    const skillItems = document.querySelectorAll('.skill-item');
    
    const animateSkills = () => {
        skillItems.forEach(item => {
            const progressBar = item.querySelector('.progress-bar');
            const percent = progressBar.getAttribute('aria-valuenow');
            
            // Reset width for animation
            progressBar.style.width = '0%';
            
            // Animate after short delay
            setTimeout(() => {
                progressBar.style.width = percent + '%';
            }, 200);
        });
    };
    
    // Intersection Observer to trigger animation when section is in view
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateSkills();
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.2 });
    
    observer.observe(document.querySelector('.skills-section'));
});