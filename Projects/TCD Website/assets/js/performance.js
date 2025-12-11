// Performance Table Toggle
document.addEventListener('DOMContentLoaded', function() {
    const toggleButtons = document.querySelectorAll('.toggle-btn');
    const tables = document.querySelectorAll('.performance-table');
    
    toggleButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons and tables
            toggleButtons.forEach(btn => btn.classList.remove('active'));
            tables.forEach(table => table.classList.remove('active'));
            
            // Add active class to clicked button
            this.classList.add('active');
            
            // Show corresponding table
            const period = this.getAttribute('data-period');
            document.getElementById(`${period}-table`).classList.add('active');
        });
    });

    // Initialize Quarterly Chart
    const quarterlyCtx = document.getElementById('quarterlyChart').getContext('2d');
    const quarterlyChart = new Chart(quarterlyCtx, {
        type: 'bar',
        data: {
            labels: ['TCD Fund', 'S&P 500', 'HFRI Composite', 'Bloomberg Agg'],
            datasets: [{
                label: 'Q1 2025 Performance',
                data: [0.7, -4.3, -0.4, 2.8],
                backgroundColor: [
                    'rgba(0, 122, 141, 0.8)',
                    'rgba(100, 116, 139, 0.8)',
                    'rgba(100, 116, 139, 0.8)',
                    'rgba(100, 116, 139, 0.8)'
                ],
                borderColor: [
                    'rgba(0, 122, 141, 1)',
                    'rgba(100, 116, 139, 1)',
                    'rgba(100, 116, 139, 1)',
                    'rgba(100, 116, 139, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    display: false
                },
                tooltip: {
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
                    }
                }
            }
        }
    });

    // Chart Zoom Controls
    const zoomButtons = document.querySelectorAll('.zoom-btn');
    zoomButtons.forEach(button => {
        button.addEventListener('click', function() {
            zoomButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            // In a real implementation, this would update the chart data
            // For this example, we'll just log the action
            console.log(`Switched to ${this.getAttribute('data-period')} view`);
        });
    });
});

// Historical Performance Chart
const growthCtx = document.getElementById('growthChart').getContext('2d');
const growthChart = new Chart(growthCtx, {
    type: 'line',
    data: {
        labels: ['2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020', '2021', '2022', '2023', '2024', '2025*'],
        datasets: [
            {
                label: 'TCD Fund',
                data: [100, 122, 145, 167, 203, 241, 287, 264, 342, 298, 371, 439, 442],
                borderColor: 'rgba(0, 122, 141, 1)',
                backgroundColor: 'rgba(0, 122, 141, 0.1)',
                borderWidth: 3,
                tension: 0.3,
                fill: true
            },
            {
                label: 'S&P 500',
                data: [100, 111, 113, 127, 152, 156, 193, 182, 231, 192, 219, 248, 237],
                borderColor: 'rgba(100, 116, 139, 1)',
                backgroundColor: 'rgba(100, 116, 139, 0.05)',
                borderWidth: 2,
                tension: 0.3,
                fill: true
            }
        ]
    },
    options: {
        responsive: true,
        plugins: {
            tooltip: {
                callbacks: {
                    label: function(context) {
                        return `${context.dataset.label}: ${context.raw.toFixed(0)}%`;
                    }
                }
            },
            legend: {
                position: 'top',
            }
        },
        scales: {
            y: {
                beginAtZero: true,
                ticks: {
                    callback: function(value) {
                        return value + '%';
                    }
                }
            }
        }
    }
});

// Sector Allocation Chart
const sectorCtx = document.getElementById('sectorChart').getContext('2d');
const sectorChart = new Chart(sectorCtx, {
    type: 'doughnut',
    data: {
        labels: ['Information Technology', 'Financials', 'Health Care', 'Consumer Discretionary', 'Communication Services', 'Other'],
        datasets: [{
            data: [28.5, 22.3, 18.7, 12.5, 8.2, 9.8],
            backgroundColor: [
                'rgba(0, 122, 141, 0.8)',
                'rgba(10, 37, 64, 0.8)',
                'rgba(0, 168, 107, 0.8)',
                'rgba(255, 193, 7, 0.8)',
                'rgba(156, 39, 176, 0.8)',
                'rgba(158, 158, 158, 0.8)'
            ],
            borderColor: 'rgba(255, 255, 255, 1)',
            borderWidth: 2
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'right',
            },
            tooltip: {
                callbacks: {
                    label: function(context) {
                        return `${context.label}: ${context.raw}%`;
                    }
                }
            }
        },
        cutout: '65%'
    }
});

// Tab Functionality
document.querySelectorAll('.tab-btn').forEach(button => {
    button.addEventListener('click', () => {
        const tab = button.dataset.tab;
        
        // Update active tab button
        document.querySelectorAll('.tab-btn').forEach(btn => {
            btn.classList.remove('active');
        });
        button.classList.add('active');
        
        // Update active tab content
        document.querySelectorAll('.tab-content').forEach(content => {
            content.classList.remove('active');
        });
        document.querySelector(`.tab-content[data-tab="${tab}"]`).classList.add('active');
    });
});

// Chart Zoom Controls
document.querySelectorAll('.zoom-btn').forEach(button => {
    button.addEventListener('click', function() {
        document.querySelectorAll('.zoom-btn').forEach(btn => {
            btn.classList.remove('active');
        });
        this.classList.add('active');
        
        // In a real implementation, this would update the chart data
        console.log(`Switched to ${this.dataset.period} view`);
    });
});

// Table Toggle Functionality
// Performance Table Toggle
document.addEventListener('DOMContentLoaded', function() {
    // Initialize all toggle buttons
    const toggleButtons = document.querySelectorAll('.toggle-btn');
    const tables = document.querySelectorAll('.performance-table');
    
    toggleButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons and tables
            toggleButtons.forEach(btn => btn.classList.remove('active'));
            tables.forEach(table => table.classList.remove('active'));
            
            // Add active class to clicked button
            this.classList.add('active');
            
            // Show corresponding table
            const period = this.getAttribute('data-period');
            document.getElementById(`${period}-table`).classList.add('active');
        });
    });

    // Initialize Quarterly Chart if it exists on the page
    const quarterlyChartEl = document.getElementById('quarterlyChart');
    if (quarterlyChartEl) {
        const quarterlyCtx = quarterlyChartEl.getContext('2d');
        new Chart(quarterlyCtx, {
            type: 'bar',
            data: {
                labels: ['TCD Fund', 'S&P 500', 'HFRI Composite', 'Bloomberg Agg'],
                datasets: [{
                    label: 'Q1 2025 Performance',
                    data: [0.7, -4.3, -0.4, 2.8],
                    backgroundColor: [
                        'rgba(0, 122, 141, 0.8)',
                        'rgba(100, 116, 139, 0.8)',
                        'rgba(100, 116, 139, 0.8)',
                        'rgba(100, 116, 139, 0.8)'
                    ],
                    borderColor: [
                        'rgba(0, 122, 141, 1)',
                        'rgba(100, 116, 139, 1)',
                        'rgba(100, 116, 139, 1)',
                        'rgba(100, 116, 139, 1)'
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                responsive: true,
                plugins: {
                    legend: {
                        display: false
                    },
                    tooltip: {
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
                        }
                    }
                }
            }
        });
    }

    // Initialize Growth Chart if it exists on the page
    const growthChartEl = document.getElementById('growthChart');
    if (growthChartEl) {
        const growthCtx = growthChartEl.getContext('2d');
        new Chart(growthCtx, {
            type: 'line',
            data: {
                labels: ['2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020', '2021', '2022', '2023', '2024', '2025*'],
                datasets: [
                    {
                        label: 'TCD Opportunity Fund',
                        data: [10000, 12200, 14500, 16700, 20300, 24100, 28700, 26400, 34200, 29800, 37100, 43900, 44200],
                        borderColor: 'rgba(0, 122, 141, 1)',
                        backgroundColor: 'rgba(0, 122, 141, 0.1)',
                        borderWidth: 3,
                        tension: 0.3,
                        fill: true
                    },
                    {
                        label: 'S&P 500 Index',
                        data: [10000, 11100, 11300, 12700, 15200, 15600, 19300, 18200, 23100, 19200, 21900, 24800, 23700],
                        borderColor: 'rgba(100, 116, 139, 1)',
                        backgroundColor: 'rgba(100, 116, 139, 0.05)',
                        borderWidth: 2,
                        tension: 0.3,
                        fill: true
                    },
                    {
                        label: 'HFRI Composite',
                        data: [10000, 10800, 11500, 12400, 13700, 14200, 15800, 14600, 17200, 15200, 16800, 18300, 18200],
                        borderColor: 'rgba(124, 58, 237, 1)',
                        backgroundColor: 'rgba(124, 58, 237, 0.05)',
                        borderWidth: 2,
                        tension: 0.3,
                        fill: true
                    }
                ]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    tooltip: {
                        callbacks: {
                            label: function(context) {
                                return `${context.dataset.label}: $${context.raw.toLocaleString()}`;
                            }
                        }
                    },
                    legend: {
                        display: false
                    }
                },
                scales: {
                    y: {
                        beginAtZero: false,
                        ticks: {
                            callback: function(value) {
                                return '$' + value.toLocaleString();
                            }
                        }
                    }
                }
            }
        });
    }

    // Initialize Sector Chart if it exists on the page
    const sectorChartEl = document.getElementById('sectorChart');
    if (sectorChartEl) {
        const sectorCtx = sectorChartEl.getContext('2d');
        new Chart(sectorCtx, {
            type: 'doughnut',
            data: {
                labels: ['Information Technology', 'Financials', 'Health Care', 'Consumer Discretionary', 'Communication Services', 'Other'],
                datasets: [{
                    data: [28.5, 22.3, 18.7, 12.5, 8.2, 9.8],
                    backgroundColor: [
                        'rgba(0, 122, 141, 0.8)',
                        'rgba(10, 37, 64, 0.8)',
                        'rgba(0, 168, 107, 0.8)',
                        'rgba(255, 193, 7, 0.8)',
                        'rgba(156, 39, 176, 0.8)',
                        'rgba(158, 158, 158, 0.8)'
                    ],
                    borderColor: 'rgba(255, 255, 255, 1)',
                    borderWidth: 2
                }]
            },
            options: {
                responsive: true,
                plugins: {
                    legend: {
                        position: 'right',
                    },
                    tooltip: {
                        callbacks: {
                            label: function(context) {
                                return `${context.label}: ${context.raw}%`;
                            }
                        }
                    }
                },
                cutout: '65%'
            }
        });
    }

    // Initialize Period Buttons
    const periodButtons = document.querySelectorAll('.period-btn');
    periodButtons.forEach(button => {
        button.addEventListener('click', function() {
            periodButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            // In a real implementation, this would update the chart data
            console.log(`Switched to ${this.dataset.period} view`);
        });
    });

    // Initialize Tab Functionality
    document.querySelectorAll('.tab-btn').forEach(button => {
        button.addEventListener('click', () => {
            const tab = button.dataset.tab;
            
            // Update active tab button
            document.querySelectorAll('.tab-btn').forEach(btn => {
                btn.classList.remove('active');
            });
            button.classList.add('active');
            
            // Update active tab content
            document.querySelectorAll('.tab-content').forEach(content => {
                content.classList.remove('active');
            });
            document.querySelector(`.tab-content[data-tab="${tab}"]`).classList.add('active');
        });
    });
});

