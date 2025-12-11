// ======================================= About Page JavaScript Start ========================================== //
// Decade Timeline Functionality
document.addEventListener('DOMContentLoaded', function() {
    // Tab switching
    const decadeBtns = document.querySelectorAll('.decade-btn');
    const decadeContents = document.querySelectorAll('.decade-content');
    
    decadeBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            // Remove active class from all buttons and contents
            decadeBtns.forEach(b => b.classList.remove('active'));
            decadeContents.forEach(c => c.classList.remove('active'));
            
            // Add active class to clicked button
            this.classList.add('active');
            
            // Show corresponding content
            const decade = this.getAttribute('data-decade');
            document.querySelector(`.decade-content[data-decade="${decade}"]`).classList.add('active');
        });
    });
    
    // Initialize 2010s Chart
    const ctx = document.getElementById('2010sChart').getContext('2d');
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['2013', '2014', '2015', '2016', '2017', '2018', '2019'],
            datasets: [{
                label: 'TCD Opportunity Fund',
                data: [22.4, 18.7, 15.2, 28.3, 19.8, 24.1, 17.6],
                borderColor: 'rgba(0, 122, 141, 1)',
                backgroundColor: 'rgba(0, 122, 141, 0.1)',
                borderWidth: 3,
                tension: 0.3,
                fill: true
            }, {
                label: 'S&P 500',
                data: [29.6, 11.4, -0.7, 9.5, 19.4, -6.2, 28.9],
                borderColor: 'rgba(124, 58, 237, 0.7)',
                backgroundColor: 'rgba(124, 58, 237, 0.05)',
                borderWidth: 2,
                borderDash: [5, 5],
                tension: 0.3
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'top',
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
});

// Achievements Load More Functionality
document.querySelector('.btn-load-more')?.addEventListener('click', function() {
    // In a real implementation, this would load more content via AJAX
    const achievementsGrid = document.querySelector('.achievements-grid');
    
    // Simulate loading
    this.innerHTML = 'Loading... <i class="fas fa-spinner fa-spin"></i>';
    
    setTimeout(() => {
        // This would be replaced with actual content loading
        this.style.display = 'none';
        
        // Show message (in reality you'd append new cards)
        const message = document.createElement('p');
        message.textContent = 'All achievements loaded';
        message.style.textAlign = 'center';
        message.style.color = 'var(--text-medium)';
        document.querySelector('.section-footer').appendChild(message);
    }, 1500);
});

// Testimonial Carousel Functionality
function initTestimonialCarousel() {
    const slides = document.querySelectorAll('.testimonial-slide');
    const dots = document.querySelectorAll('.carousel-dots .dot');
    const prevBtn = document.querySelector('.control-prev');
    const nextBtn = document.querySelector('.control-next');
    let currentSlide = 0;

    function showSlide(index) {
        slides.forEach(slide => slide.classList.remove('active'));
        dots.forEach(dot => dot.classList.remove('active'));
        
        slides[index].classList.add('active');
        dots[index].classList.add('active');
        currentSlide = index;
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }

    function prevSlide() {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        showSlide(currentSlide);
    }

    // Button events
    nextBtn.addEventListener('click', nextSlide);
    prevBtn.addEventListener('click', prevSlide);

    // Dot navigation
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => showSlide(index));
    });

    // Auto-advance (optional)
    // setInterval(nextSlide, 5000);
}

document.addEventListener('DOMContentLoaded', initTestimonialCarousel);

// ======================================= About Page JavaScript End ========================================== //