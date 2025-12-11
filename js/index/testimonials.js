// Testimonial carousel animation
document.addEventListener('DOMContentLoaded', function() {
    // Simple logo carousel animation
    const logoCarousel = document.querySelector('.logo-carousel');
    const logos = document.querySelectorAll('.logo-item');
    
    // Animate carousel
    let position = 0;
    const speed = 0.5;
    
    function animateCarousel() {
        position -= speed;
        if (position <= -logoCarousel.scrollWidth / 2) {
            position = 0;
        }
        logoCarousel.style.transform = `translateX(${position}px)`;
        requestAnimationFrame(animateCarousel);
    }
    
    // Start animation
    animateCarousel();
    
    // Intersection Observer to pause animation when not in view
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                logoCarousel.style.animationPlayState = 'running';
            } else {
                logoCarousel.style.animationPlayState = 'paused';
            }
        });
    }, { threshold: 0.1 });
    
    observer.observe(document.querySelector('.client-logos'));
});