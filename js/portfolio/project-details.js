// Image gallery functionality
document.addEventListener('DOMContentLoaded', function() {
    const thumbnails = document.querySelectorAll('.thumbnail');
    const mainImage = document.querySelector('.gallery-image');
    
    thumbnails.forEach(thumbnail => {
        thumbnail.addEventListener('click', function() {
            // Update active thumbnail
            thumbnails.forEach(t => t.classList.remove('active'));
            this.classList.add('active');
            
            // Change main image
            const newImageSrc = this.dataset.image;
            mainImage.src = newImageSrc;
            mainImage.alt = this.querySelector('img').alt;
        });
    });
});