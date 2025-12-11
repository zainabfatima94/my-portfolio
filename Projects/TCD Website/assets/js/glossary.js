// Glossary Page JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // Alphabet navigation highlighting
    const alphabetLinks = document.querySelectorAll('.alphabet-link');
    
    alphabetLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetLetter = this.textContent;
            
            // Remove active class from all links
            alphabetLinks.forEach(l => l.classList.remove('active'));
            
            // Add active class to clicked link
            this.classList.add('active');
            
            // In full implementation, this would filter terms
            console.log(`Filtering terms starting with: ${targetLetter}`);
        });
    });
    
    // Glossary search functionality
    const glossarySearch = document.getElementById('glossary-search');
    
    glossarySearch.addEventListener('input', function() {
        const searchTerm = this.value.trim().toLowerCase();
        
        if (searchTerm.length > 2) {
            console.log(`Searching glossary for: ${searchTerm}`);
            // In full implementation, this would filter terms
        }
    });
    
    // Highlight current letter when scrolling through terms
    window.addEventListener('scroll', function() {
        // In full implementation, this would detect which letter section is visible
        // and highlight the corresponding alphabet link
    });
});

// Enhanced Glossary Page JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // Existing alphabet navigation and search functionality...
    
    // Highlight current letter when scrolling
    const letterSections = document.querySelectorAll('.letter-section');
    const alphabetLinks = document.querySelectorAll('.alphabet-link');
    
    function highlightCurrentLetter() {
        let currentLetter = '';
        
        letterSections.forEach(section => {
            const rect = section.getBoundingClientRect();
            if (rect.top <= 150 && rect.bottom >= 150) {
                currentLetter = section.id;
            }
        });
        
        alphabetLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${currentLetter}`) {
                link.classList.add('active');
            }
        });
    }
    
    window.addEventListener('scroll', highlightCurrentLetter);
    highlightCurrentLetter(); // Run once on load
    
    // Smooth scroll for alphabet links
    alphabetLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 100,
                    behavior: 'smooth'
                });
                
                // Update URL without page jump
                history.pushState(null, null, targetId);
            }
        });
    });
    
    // Term card hover effects
    const termCards = document.querySelectorAll('.term-card');
    termCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            const icon = this.querySelector('.term-icon');
            icon.style.transform = 'scale(1.1)';
            icon.style.backgroundColor = 'rgba(0, 122, 141, 0.2)';
        });
        
        card.addEventListener('mouseleave', function() {
            const icon = this.querySelector('.term-icon');
            icon.style.transform = 'scale(1)';
            icon.style.backgroundColor = 'rgba(0, 122, 141, 0.1)';
        });
    });
});