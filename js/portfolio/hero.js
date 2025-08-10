// Basic filter functionality (can be enhanced further)
document.addEventListener('DOMContentLoaded', function() {
    const filterButtons = document.querySelectorAll('.filter-button');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            
            // Add active class to clicked button
            this.classList.add('active');
            
            // Filter functionality would go here
            const filterValue = this.getAttribute('data-filter');
            console.log('Filter by:', filterValue);
            // In a real implementation, you would filter your portfolio items here
        });
    });
});