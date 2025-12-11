// Counter Animation for Stats
document.addEventListener('DOMContentLoaded', function() {
    const counters = document.querySelectorAll('.stat-number');
    const speed = 200;
    
    counters.forEach(counter => {
        const target = +counter.getAttribute('data-count');
        const count = +counter.innerText;
        const increment = target / speed;
        
        if (count < target) {
            const updateCount = () => {
                const current = +counter.innerText;
                const incrementValue = Math.ceil(target / speed);
                
                if (current < target) {
                    counter.innerText = Math.ceil(current + incrementValue);
                    setTimeout(updateCount, 1);
                } else {
                    counter.innerText = target;
                }
            };
            
            updateCount();
        }
    });
    
    // Smooth scroll for "How I Work" button
    document.querySelectorAll('.scroll-to').forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            document.querySelector(targetId).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});