// Reports Page JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // View Toggle Functionality
    const viewOptions = document.querySelectorAll('.view-option');
    
    viewOptions.forEach(option => {
        option.addEventListener('click', function() {
            const viewType = this.getAttribute('data-view');
            
            // Update active button
            viewOptions.forEach(opt => opt.classList.remove('active'));
            this.classList.add('active');
            
            // In full implementation, this would change the report listing view
            console.log(`Switched to ${viewType} view`);
        });
    });
    
    // Filter Functionality
    const searchInput = document.getElementById('reports-search');
    const typeFilter = document.getElementById('report-type');
    const timeframeFilter = document.getElementById('timeframe');
    const analystFilter = document.getElementById('analyst');
    const filterTags = document.querySelectorAll('.tag');
    
    function applyFilters() {
        const searchTerm = searchInput.value.trim().toLowerCase();
        const typeValue = typeFilter.value;
        const timeframeValue = timeframeFilter.value;
        const analystValue = analystFilter.value;
        
        console.log(`Applying filters - Search: ${searchTerm}, Type: ${typeValue}, Timeframe: ${timeframeValue}, Analyst: ${analystValue}`);
        // In full implementation, this would filter the reports
    }
    
    // Event listeners
    searchInput.addEventListener('keyup', function(e) {
        if (e.key === 'Enter') {
            applyFilters();
        }
    });
    
    typeFilter.addEventListener('change', applyFilters);
    timeframeFilter.addEventListener('change', applyFilters);
    analystFilter.addEventListener('change', applyFilters);
    
    filterTags.forEach(tag => {
        tag.addEventListener('click', function(e) {
            e.preventDefault();
            const filter = this.getAttribute('data-filter');
            const [key, value] = filter.split('=');
            
            if (key === 'type') {
                typeFilter.value = value;
            } else if (key === 'timeframe') {
                timeframeFilter.value = value;
            } else if (key === 'analyst') {
                analystFilter.value = value;
            }
            
            applyFilters();
        });
    });
    
    // In full implementation, would also include:
    // - Dynamic loading of reports
    // - View switching functionality
    // - Pagination
    // - Download tracking
});

// Enhanced Reports Page JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // Existing filter functionality...
    
    // View Toggle Functionality
    const viewOptions = document.querySelectorAll('.view-option');
    const detailedView = document.querySelector('.reports-detailed');
    const compactView = document.querySelector('.reports-compact');
    
    viewOptions.forEach(option => {
        option.addEventListener('click', function() {
            const viewType = this.getAttribute('data-view');
            
            // Update active button
            viewOptions.forEach(opt => opt.classList.remove('active'));
            this.classList.add('active');
            
            // Show/hide views
            if (viewType === 'detailed') {
                detailedView.style.display = '';
                compactView.style.display = 'none';
            } else {
                detailedView.style.display = 'none';
                compactView.style.display = '';
            }
        });
    });
    
    // Pagination functionality
    const pageNumbers = document.querySelectorAll('.page-number');
    const prevBtn = document.querySelector('.pagination-prev');
    const nextBtn = document.querySelector('.pagination-next');
    const perPageSelect = document.getElementById('per-page');
    
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
    
    perPageSelect.addEventListener('change', function() {
        console.log(`Items per page changed to ${this.value}`);
        // In full implementation, this would reload content with new pagination
    });
    
    function updatePaginationButtons(currentPage) {
        const totalPages = 4; // Would be dynamic in full implementation
        
        prevBtn.disabled = currentPage === 1;
        nextBtn.disabled = currentPage === totalPages;
    }
    
    // Sort functionality
    const sortSelect = document.getElementById('sort-by');
    sortSelect.addEventListener('change', function() {
        console.log(`Sorting by ${this.value}`);
        // In full implementation, this would re-sort the reports
    });
    
    // In full implementation, would also include:
    // - Dynamic loading of reports
    // - Download tracking
    // - Bookmark functionality
});
