// Strategies Page JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // Category Card Interactions
    const categoryCards = document.querySelectorAll('.category-card');
    
    categoryCards.forEach(card => {
        card.addEventListener('click', function(e) {
            // Don't navigate if user clicked on a link
            if (e.target.tagName === 'A' || e.target.parentElement.tagName === 'A') {
                return;
            }
            
            const link = this.querySelector('a');
            if (link) {
                window.location.href = link.href;
            }
        });
        
        // Add hover effect to entire card
        card.addEventListener('mouseenter', function() {
            const icon = this.querySelector('.category-icon');
            icon.style.transform = 'scale(1.1)';
        });
        
        card.addEventListener('mouseleave', function() {
            const icon = this.querySelector('.category-icon');
            icon.style.transform = 'scale(1)';
        });
    });
    
    // In full implementation, would also include:
    // - Strategy filtering functionality
    // - Performance chart integration
    // - Interactive elements
});

// Enhanced Strategies Page JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // Existing category card interactions...
    
    // Performance metric animations
    const metricCards = document.querySelectorAll('.metric-card');
    
    metricCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            const value = this.querySelector('.metric-value');
            value.style.transform = 'scale(1.05)';
        });
        
        card.addEventListener('mouseleave', function() {
            const value = this.querySelector('.metric-value');
            value.style.transform = 'scale(1)';
        });
    });
    
    // In full implementation, would also include:
    // - Interactive performance charts
    // - Strategy comparison tool
    // - Dynamic content loading
    // - More detailed hover effects
});

// Enhanced Strategies Page JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // Existing interactions...
    
    // Strategy Comparison Table Interactions
    const tableRows = document.querySelectorAll('tbody tr');
    
    tableRows.forEach(row => {
        row.addEventListener('click', function(e) {
            // Don't navigate if user clicked on a link or button
            if (e.target.tagName === 'A' || e.target.tagName === 'BUTTON' || e.target.parentElement.tagName === 'A') {
                return;
            }
            
            const link = this.querySelector('a');
            if (link) {
                window.location.href = link.href;
            }
        });
        
        // Add hover effect to risk bars
        const riskBar = row.querySelector('.risk-bar');
        if (riskBar) {
            row.addEventListener('mouseenter', function() {
                riskBar.style.transform = 'scaleX(1.05)';
            });
            
            row.addEventListener('mouseleave', function() {
                riskBar.style.transform = 'scaleX(1)';
            });
        }
    });
    
    // Testimonial Card Interactions
    const testimonialCards = document.querySelectorAll('.testimonial-card');
    
    testimonialCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            const quoteMark = this.querySelector('.testimonial-text::before');
            if (quoteMark) {
                quoteMark.style.transform = 'scale(1.1)';
            }
        });
        
        card.addEventListener('mouseleave', function() {
            const quoteMark = this.querySelector('.testimonial-text::before');
            if (quoteMark) {
                quoteMark.style.transform = 'scale(1)';
            }
        });
    });
    
    // In full implementation, would also include:
    // - Interactive strategy comparison tool
    // - Testimonial carousel/slider
    // - Dynamic content loading
});


// ------------------------------------- Opportunity Fund --------------------------------- //
// Portfolio Chart Functionality
document.addEventListener('DOMContentLoaded', function() {
    // Initialize portfolio chart if on opportunity fund page
    if (document.getElementById('portfolioChart')) {
        const ctx = document.getElementById('portfolioChart').getContext('2d');
        const portfolioChart = new Chart(ctx, {
            type: 'doughnut',
            data: {
                labels: ['Technology', 'Healthcare', 'Financials', 'Consumer', 'Industrials', 'Other'],
                datasets: [{
                    data: [30, 20, 15, 15, 12, 8],
                    backgroundColor: [
                        '#0a2540',
                        '#007a8d',
                        '#3a86ff',
                        '#8338ec',
                        '#ff006e',
                        '#fb5607'
                    ],
                    borderWidth: 0
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                cutout: '65%',
                plugins: {
                    legend: {
                        position: 'right',
                        labels: {
                            boxWidth: 15,
                            padding: 20,
                            font: {
                                family: "'Neue Haas Grotesk', 'Helvetica Now', -apple-system, sans-serif",
                                size: 12
                            }
                        }
                    },
                    tooltip: {
                        bodyFont: {
                            family: "'Neue Haas Grotesk', 'Helvetica Now', -apple-system, sans-serif"
                        },
                        callbacks: {
                            label: function(context) {
                                return `${context.label}: ${context.raw}%`;
                            }
                        }
                    }
                }
            }
        });
    }
});

// Performance Chart Functionality
document.addEventListener('DOMContentLoaded', function() {
    // Initialize performance chart if on opportunity fund page
    if (document.getElementById('performanceChart')) {
        const ctx = document.getElementById('performanceChart').getContext('2d');
        const performanceChart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: ['2015', '2016', '2017', '2018', '2019', '2020', '2021', '2022', '2023', '2024', '2025'],
                datasets: [{
                    label: 'TCD Opportunity Fund',
                    data: [100, 132, 175, 191, 243, 213, 287, 245, 312, 378, 437],
                    borderColor: '#007a8d',
                    backgroundColor: 'rgba(0, 122, 141, 0.05)',
                    borderWidth: 3,
                    fill: true,
                    tension: 0.3
                },
                {
                    label: 'S&P 500 TR',
                    data: [100, 112, 137, 132, 174, 198, 256, 203, 237, 275, 302],
                    borderColor: '#0a2540',
                    backgroundColor: 'rgba(10, 37, 64, 0.05)',
                    borderWidth: 2,
                    borderDash: [5, 5],
                    fill: true,
                    tension: 0.3
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        display: false
                    },
                    tooltip: {
                        mode: 'index',
                        intersect: false,
                        bodyFont: {
                            family: "'Neue Haas Grotesk', 'Helvetica Now', -apple-system, sans-serif"
                        },
                        callbacks: {
                            label: function(context) {
                                return `${context.dataset.label}: ${context.raw}%`;
                            }
                        }
                    }
                },
                scales: {
                    y: {
                        beginAtZero: false,
                        ticks: {
                            callback: function(value) {
                                return value + '%';
                            }
                        },
                        grid: {
                            color: 'rgba(0, 0, 0, 0.05)'
                        }
                    },
                    x: {
                        grid: {
                            display: false
                        }
                    }
                }
            }
        });
    }
});
