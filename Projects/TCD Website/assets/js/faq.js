// FAQs Page JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // FAQ Search Functionality
    const faqSearch = document.getElementById('faq-search');
    const searchBtn = document.querySelector('.search-btn');
    
    function handleSearch() {
        const searchTerm = faqSearch.value.trim().toLowerCase();
        
        if (searchTerm.length > 2) {
            // In a real implementation, this would filter FAQs
            console.log(`Searching for: ${searchTerm}`);
            // Highlight matching FAQs
            // Show/hide relevant questions
        }
    }
    
    faqSearch.addEventListener('keyup', function(e) {
        if (e.key === 'Enter') {
            handleSearch();
        }
    });
    
    searchBtn.addEventListener('click', handleSearch);
    
    // Category Card Analytics (example)
    const categoryCards = document.querySelectorAll('.category-card');
    
    categoryCards.forEach(card => {
        card.addEventListener('click', function() {
            const category = this.querySelector('h3').textContent;
            console.log(`Category selected: ${category}`);
            // In real implementation, track this event
        });
    });
});

// Enhanced FAQ Accordion Functionality
document.addEventListener('DOMContentLoaded', function() {
    // FAQ Accordion - Enhanced
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        
        question.addEventListener('click', () => {
            const isActive = item.classList.contains('active');
            
            // Close all items first
            faqItems.forEach(faq => {
                faq.classList.remove('active');
                const answer = faq.querySelector('.faq-answer');
                answer.style.maxHeight = null;
            });
            
            // Open current item if it wasn't active
            if (!isActive) {
                item.classList.add('active');
                const answer = item.querySelector('.faq-answer');
                answer.style.maxHeight = answer.scrollHeight + 'px';
            }
        });
    });
    
    // Auto-open FAQ if URL has hash matching question ID
    if (window.location.hash) {
        const targetQuestion = document.querySelector(window.location.hash);
        if (targetQuestion && targetQuestion.classList.contains('faq-item')) {
            targetQuestion.classList.add('active');
            const answer = targetQuestion.querySelector('.faq-answer');
            answer.style.maxHeight = answer.scrollHeight + 'px';
            
            // Smooth scroll to question
            setTimeout(() => {
                targetQuestion.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }, 100);
        }
    }
    
    // Existing search functionality...
    // Existing category card analytics...
});