// Lightbox functionality
document.addEventListener('DOMContentLoaded', function() {
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = lightbox.querySelector('.lightbox-content');
    const closeBtn = lightbox.querySelector('.lightbox-close');

    // Add click event to all artwork images
    document.querySelectorAll('.artwork-card img').forEach(img => {
        img.addEventListener('click', function() {
            lightboxImg.src = this.src;
            lightboxImg.alt = this.alt;
            lightbox.classList.add('active');
        });
    });

    // Close lightbox
    closeBtn.addEventListener('click', function() {
        lightbox.classList.remove('active');
    });

    lightbox.addEventListener('click', function(e) {
        if (e.target === lightbox) {
            lightbox.classList.remove('active');
        }
    });

    // Close with Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            lightbox.classList.remove('active');
        }
    });
});
