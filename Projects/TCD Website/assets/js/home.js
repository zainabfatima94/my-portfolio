// Initialize Charts when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Quarterly Performance Chart
    const quarterlyCtx = document.getElementById('quarterlyChart').getContext('2d');
    new Chart(quarterlyCtx, {
        type: 'bar',
        data: {
            labels: ['TCD Fund', 'S&P 500', 'Bloomberg', 'HFRI Composite'],
            datasets: [{
                label: 'Q1 2025 Returns',
                data: [0.7, -4.3, 2.8, -0.4],
                backgroundColor: [
                    'rgba(0, 122, 141, 0.8)',
                    'rgba(100, 116, 139, 0.6)',
                    'rgba(100, 116, 139, 0.6)',
                    'rgba(100, 116, 139, 0.6)'
                ],
                borderColor: [
                    'rgba(0, 122, 141, 1)',
                    'rgba(100, 116, 139, 1)',
                    'rgba(100, 116, 139, 1)',
                    'rgba(100, 116, 139, 1)'
                ],
                borderWidth: 1,
                borderRadius: 4
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
                    callbacks: {
                        label: function(context) {
                            return context.raw > 0 ? '+' + context.raw + '%' : context.raw + '%';
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
    
    // Cumulative Growth Chart
    const growthCtx = document.getElementById('growthChart').getContext('2d');
    new Chart(growthCtx, {
        type: 'line',
        data: {
            labels: ['2013', '2015', '2017', '2019', '2021', '2023', '2025'],
            datasets: [
                {
                    label: 'TCD Opportunity Fund',
                    data: [0, 85, 180, 290, 380, 450, 483.7],
                    borderColor: 'rgba(0, 122, 141, 1)',
                    backgroundColor: 'rgba(0, 122, 141, 0.1)',
                    borderWidth: 3,
                    tension: 0.3,
                    fill: true,
                    pointBackgroundColor: 'rgba(0, 122, 141, 1)',
                    pointRadius: 4,
                    pointHoverRadius: 6
                },
                {
                    label: 'S&P 500',
                    data: [0, 45, 95, 150, 220, 260, 272.8],
                    borderColor: 'rgba(124, 58, 237, 0.7)',
                    backgroundColor: 'rgba(124, 58, 237, 0.05)',
                    borderWidth: 2,
                    tension: 0.3,
                    borderDash: [5, 5],
                    pointBackgroundColor: 'rgba(124, 58, 237, 0.7)',
                    pointRadius: 0,
                    pointHoverRadius: 4
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false
                },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            return context.dataset.label + ': ' + context.raw + '%';
                        }
                    }
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
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
});

// Tab Functionality
document.addEventListener('DOMContentLoaded', function() {
    const tabButtons = document.querySelectorAll('.tab-button');
    
    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons and content
            document.querySelectorAll('.tab-button').forEach(btn => {
                btn.classList.remove('active');
            });
            document.querySelectorAll('.tab-content').forEach(content => {
                content.classList.remove('active');
            });
            
            // Add active class to clicked button
            button.classList.add('active');
            
            // Show corresponding content
            const tabId = button.getAttribute('data-tab');
            document.getElementById(tabId).classList.add('active');
        });
    });
});