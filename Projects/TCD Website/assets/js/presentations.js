// Presentations Page JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // Filter functionality
    const searchInput = document.getElementById('presentation-search');
    const yearFilter = document.getElementById('year-filter');
    const typeFilter = document.getElementById('type-filter');
    const resetBtn = document.querySelector('.filter-reset');
    const filterTags = document.querySelectorAll('.tag');
    
    function applyFilters() {
        const searchTerm = searchInput.value.trim().toLowerCase();
        const yearValue = yearFilter.value;
        const typeValue = typeFilter.value;
        
        console.log(`Applying filters - Search: ${searchTerm}, Year: ${yearValue}, Type: ${typeValue}`);
        // In full implementation, this would filter the presentations
    }
    
    // Event listeners
    searchInput.addEventListener('keyup', function(e) {
        if (e.key === 'Enter') {
            applyFilters();
        }
    });
    
    yearFilter.addEventListener('change', applyFilters);
    typeFilter.addEventListener('change', applyFilters);
    
    resetBtn.addEventListener('click', function() {
        searchInput.value = '';
        yearFilter.value = '';
        typeFilter.value = '';
        applyFilters();
    });
    
    filterTags.forEach(tag => {
        tag.addEventListener('click', function(e) {
            e.preventDefault();
            const filter = this.getAttribute('data-filter');
            const [key, value] = filter.split('=');
            
            if (key === 'year') {
                yearFilter.value = value;
            } else if (key === 'type') {
                typeFilter.value = value;
            }
            
            applyFilters();
        });
    });
    
    // In full implementation, would include:
    // - Fetching presentation data
    // - Dynamic filtering
    // - Pagination
    // - Download tracking
});

// Enhanced Presentations Page JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // Existing filter functionality...
    
    // View Toggle Functionality
    const viewOptions = document.querySelectorAll('.view-option');
    const gridView = document.querySelector('.presentations-grid');
    const listView = document.querySelector('.presentations-list');
    
    viewOptions.forEach(option => {
        option.addEventListener('click', function() {
            const viewType = this.getAttribute('data-view');
            
            // Update active button
            viewOptions.forEach(opt => opt.classList.remove('active'));
            this.classList.add('active');
            
            // Show/hide views
            if (viewType === 'grid') {
                gridView.style.display = '';
                listView.style.display = 'none';
            } else {
                gridView.style.display = 'none';
                listView.style.display = '';
            }
        });
    });
    
    // Pagination functionality
    const pageNumbers = document.querySelectorAll('.page-number');
    const prevBtn = document.querySelector('.pagination-prev');
    const nextBtn = document.querySelector('.pagination-next');
    
    pageNumbers.forEach(number => {
        number.addEventListener('click', function() {
            if (this.classList.contains('active')) return;
            
            // Update active page
            document.querySelector('.page-number.active').classList.remove('active');
            this.classList.add('active');
            
            // In full implementation, this would load the new page
            console.log(`Loading page ${this.textContent}`);
            
            // Update pagination buttons
            updatePaginationButtons(parseInt(this.textContent));
        });
    });
    
    prevBtn.addEventListener('click', function() {
        if (this.disabled) return;
        
        const currentPage = parseInt(document.querySelector('.page-number.active').textContent);
        const newPage = currentPage - 1;
        
        // In full implementation, this would load the previous page
        console.log(`Loading page ${newPage}`);
        
        // Update active page
        document.querySelector('.page-number.active').classList.remove('active');
        document.querySelector(`.page-number:nth-child(${newPage})`).classList.add('active');
        
        updatePaginationButtons(newPage);
    });
    
    nextBtn.addEventListener('click', function() {
        if (this.disabled) return;
        
        const currentPage = parseInt(document.querySelector('.page-number.active').textContent);
        const newPage = currentPage + 1;
        
        // In full implementation, this would load the next page
        console.log(`Loading page ${newPage}`);
        
        // Update active page
        document.querySelector('.page-number.active').classList.remove('active');
        document.querySelector(`.page-number:nth-child(${newPage})`).classList.add('active');
        
        updatePaginationButtons(newPage);
    });
    
    function updatePaginationButtons(currentPage) {
        const totalPages = 5; // Would be dynamic in full implementation
        
        prevBtn.disabled = currentPage === 1;
        nextBtn.disabled = currentPage === totalPages;
    }
    
    // In full implementation, would also include:
    // - Dynamic loading of presentations
    // - Filtering logic
    // - Download tracking
    // - Pagination controls
});

// Enhanced Presentations Page JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // Existing filter, view toggle, and pagination functionality...
    
    // Featured Presentation Play Button
    const playButton = document.querySelector('.play-button');
    if (playButton) {
        playButton.addEventListener('click', function() {
            // In full implementation, this would launch a video modal
            console.log('Launching presentation video');
        });
    }
    
    // Resource Card Analytics
    const resourceLinks = document.querySelectorAll('.resource-link');
    resourceLinks.forEach(link => {
        link.addEventListener('click', function() {
            const resourceTitle = this.closest('.resource-card').querySelector('.resource-title').textContent;
            console.log(`Resource accessed: ${resourceTitle}`);
            // In real implementation, track this event
        });
    });
    
    // In full implementation, would also include:
    // - Video playback functionality
    // - Download tracking
    // - Analytics for featured presentation
});
