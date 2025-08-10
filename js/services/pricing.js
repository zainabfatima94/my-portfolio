document.addEventListener('DOMContentLoaded', function() {
    // Pricing card hover effects
    const pricingCards = document.querySelectorAll('.pricing-card:not(.featured)');
    
    pricingCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-5px)';
            card.style.boxShadow = '0 10px 20px rgba(0, 0, 0, 0.1)';
            card.style.borderColor = 'rgba(99, 102, 241, 0.3)';
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = '';
            card.style.boxShadow = '';
            card.style.borderColor = 'rgba(255, 255, 255, 0.05)';
        });
    });
});