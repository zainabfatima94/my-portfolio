
// Market Updates Page
document.addEventListener('DOMContentLoaded', function() {
    // Filter functionality
    const filterButtons = document.querySelectorAll('.filter-btn');
    const updateCards = document.querySelectorAll('.update-card');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to clicked button
            this.classList.add('active');
            
            const filterValue = this.getAttribute('data-filter');
            
            updateCards.forEach(card => {
                if (filterValue === 'all' || card.classList.contains(filterValue)) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });
    
    // Calendar navigation
    const monthDisplay = document.querySelector('.calendar-month');
    const prevMonthBtn = document.getElementById('prev-month');
    const nextMonthBtn = document.getElementById('next-month');
    
    const months = [
        'January', 'February', 'March', 'April', 
        'May', 'June', 'July', 'August',
        'September', 'October', 'November', 'December'
    ];
    
    let currentMonth = new Date().getMonth();
    
    function updateCalendar() {
        monthDisplay.textContent = `${months[currentMonth]} 2023`;
    }
    
    prevMonthBtn.addEventListener('click', function() {
        currentMonth = (currentMonth - 1 + 12) % 12;
        updateCalendar();
    });
    
    nextMonthBtn.addEventListener('click', function() {
        currentMonth = (currentMonth + 1) % 12;
        updateCalendar();
    });
    
    // Sort functionality
    const sortSelect = document.getElementById('sort-select');
    
    sortSelect.addEventListener('change', function() {
        const updatesGrid = document.querySelector('.updates-grid');
        const updateCards = Array.from(document.querySelectorAll('.update-card'));
        
        updateCards.sort((a, b) => {
            const dateA = new Date(a.querySelector('.date').textContent);
            const dateB = new Date(b.querySelector('.date').textContent);
            
            if (this.value === 'newest') {
                return dateB - dateA;
            } else if (this.value === 'oldest') {
                return dateA - dateB;
            } else {
                const viewsA = parseInt(a.querySelector('.stat').textContent);
                const viewsB = parseInt(b.querySelector('.stat').textContent);
                return viewsB - viewsA;
            }
        });
        
        // Re-append sorted cards
        updateCards.forEach(card => updatesGrid.appendChild(card));
    });
});

document.addEventListener('DOMContentLoaded', function() {
    // Filter functionality
    const filterButtons = document.querySelectorAll('.filter-btn');
    const updateCards = document.querySelectorAll('.update-card');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to clicked button
            this.classList.add('active');
            
            const filterValue = this.getAttribute('data-filter');
            
            updateCards.forEach(card => {
                card.style.display = 'none'; // Hide all first
                
                if (filterValue === 'all' || card.classList.contains(filterValue)) {
                    // Add fade-in animation
                    card.style.opacity = '0';
                    card.style.display = 'block';
                    
                    // Animate opacity
                    setTimeout(() => {
                        card.style.transition = 'opacity 0.3s ease';
                        card.style.opacity = '1';
                    }, 10);
                    
                    // Remove transition after animation completes
                    setTimeout(() => {
                        card.style.transition = '';
                    }, 310);
                }
            });
        });
    });
    
    // Calendar navigation
    const monthDisplay = document.querySelector('.calendar-month');
    const prevMonthBtn = document.getElementById('prev-month');
    const nextMonthBtn = document.getElementById('next-month');
    
    const months = [
        'January', 'February', 'March', 'April', 
        'May', 'June', 'July', 'August',
        'September', 'October', 'November', 'December'
    ];
    
    let currentMonth = new Date().getMonth();
    
    function updateCalendar() {
        monthDisplay.textContent = `${months[currentMonth]} 2023`;
    }
    
    prevMonthBtn.addEventListener('click', function() {
        currentMonth = (currentMonth - 1 + 12) % 12;
        updateCalendar();
    });
    
    nextMonthBtn.addEventListener('click', function() {
        currentMonth = (currentMonth + 1) % 12;
        updateCalendar();
    });
    
    // Sort functionality
    const sortSelect = document.getElementById('sort-select');
    
    sortSelect.addEventListener('change', function() {
        const updatesGrid = document.querySelector('.updates-grid');
        const updateCards = Array.from(document.querySelectorAll('.update-card'));
        
        updateCards.sort((a, b) => {
            const dateA = new Date(a.querySelector('.date').textContent);
            const dateB = new Date(b.querySelector('.date').textContent);
            const viewsA = parseInt(a.querySelector('.stat').textContent.replace(/\D/g,''));
            const viewsB = parseInt(b.querySelector('.stat').textContent.replace(/\D/g,''));
            
            if (this.value === 'newest') {
                return dateB - dateA;
            } else if (this.value === 'oldest') {
                return dateA - dateB;
            } else {
                return viewsB - viewsA;
            }
        });
        
        // Clear grid
        updatesGrid.innerHTML = '';
        
        // Re-append sorted cards with animation
        updateCards.forEach((card, index) => {
            card.style.opacity = '0';
            updatesGrid.appendChild(card);
            
            setTimeout(() => {
                card.style.transition = 'opacity 0.3s ease';
                card.style.opacity = '1';
            }, index * 50);
            
            setTimeout(() => {
                card.style.transition = '';
            }, index * 50 + 310);
        });
    });
});

/* ==================================== blog / categories / archive.html ==================================== */
// Tab filtering functionality
const tabButtons = document.querySelectorAll('.tab-btn');
const archiveCards = document.querySelectorAll('.archive-card');

tabButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Remove active class from all buttons
        tabButtons.forEach(btn => btn.classList.remove('active'));
        // Add active class to clicked button
        button.classList.add('active');
        
        const category = button.getAttribute('data-category');
        
        archiveCards.forEach(card => {
            if (category === 'all' || card.getAttribute('data-category') === category) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    });
});

// Year filter functionality
const yearFilter = document.querySelector('.year-filter');
yearFilter.addEventListener('change', () => {
    const year = yearFilter.value;
    
    archiveCards.forEach(card => {
        if (!year || card.getAttribute('data-year') === year) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
});

// Search functionality
const searchInput = document.querySelector('.search-box input');
searchInput.addEventListener('input', (e) => {
    const searchTerm = e.target.value.toLowerCase();
    
    archiveCards.forEach(card => {
        const title = card.querySelector('h3').textContent.toLowerCase();
        const excerpt = card.querySelector('.excerpt').textContent.toLowerCase();
        const author = card.querySelector('.author').textContent.toLowerCase();
        
        if (title.includes(searchTerm) || excerpt.includes(searchTerm) || author.includes(searchTerm)) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
});

/* =================================== blog / categories / market-analysis.html =================================== */
// Filter functionality
document.addEventListener('DOMContentLoaded', function() {
    const timeframeFilter = document.getElementById('timeframe-filter');
    const regionFilter = document.getElementById('region-filter');
    const sortBy = document.getElementById('sort-by');
    const researchItems = document.querySelectorAll('.research-item');
    
    function filterResearch() {
        const timeframe = timeframeFilter.value;
        const region = regionFilter.value;
        const sort = sortBy.value;
        
        researchItems.forEach(item => {
            const itemTimeframe = item.getAttribute('data-timeframe');
            const itemRegion = item.getAttribute('data-region');
            
            const timeframeMatch = timeframe === 'all' || itemTimeframe === timeframe;
            const regionMatch = region === 'all' || itemRegion === region;
            
            if (timeframeMatch && regionMatch) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        });
        
        sortResearch(sort);
    }
    
    function sortResearch(criteria) {
        const container = document.querySelector('.research-grid');
        const items = Array.from(document.querySelectorAll('.research-item'));
        
        items.sort((a, b) => {
            if (criteria === 'newest') {
                return new Date(b.querySelector('.date').textContent) - new Date(a.querySelector('.date').textContent);
            } else if (criteria === 'oldest') {
                return new Date(a.querySelector('.date').textContent) - new Date(b.querySelector('.date').textContent);
            } else if (criteria === 'popular') {
                return parseInt(b.getAttribute('data-views')) - parseInt(a.getAttribute('data-views'));
            }
            return 0;
        });
        
        // Re-append sorted items
        items.forEach(item => container.appendChild(item));
    }
    
    // Event listeners
    timeframeFilter.addEventListener('change', filterResearch);
    regionFilter.addEventListener('change', filterResearch);
    sortBy.addEventListener('change', filterResearch);
});

// Tab functionality
const tabs = document.querySelectorAll('.category-tab');
tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        tabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        // Here you would add filtering logic
    });
});

// Animate stats on scroll
const animateStats = () => {
    const statValues = document.querySelectorAll('.stat-value');
    statValues.forEach(value => {
        const target = +value.getAttribute('data-target') || 0;
        const suffix = value.textContent.replace(/[0-9]/g, '');
        let start = 0;
        const duration = 2000;
        const startTime = performance.now();
        
        const animate = (currentTime) => {
            const elapsedTime = currentTime - startTime;
            const progress = Math.min(elapsedTime / duration, 1);
            const currentValue = Math.floor(progress * target);
            value.textContent = currentValue + suffix;
            
            if (progress < 1) {
                requestAnimationFrame(animate);
            }
        };
        
        requestAnimationFrame(animate);
    });
};

// Initialize animation when hero section is in view
const observer = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting) {
        animateStats();
        observer.unobserve(entries[0].target);
    }
}, { threshold: 0.5 });

observer.observe(document.querySelector('.market-hero'));
