// Smooth scrolling for anchor links
    document.addEventListener('DOMContentLoaded', function() {
        document.querySelectorAll('.scroll-to').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });
    });