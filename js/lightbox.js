// Add this code to a new file called lightbox.js

document.addEventListener('DOMContentLoaded', function () {
    // Create lightbox elements
    const lightbox = document.createElement('div');
    lightbox.id = 'lightbox';
    lightbox.style.display = 'none';
    lightbox.style.position = 'fixed';
    lightbox.style.top = '0';
    lightbox.style.left = '0';
    lightbox.style.width = '100%';
    lightbox.style.height = '100%';
    lightbox.style.backgroundColor = 'rgba(0, 0, 0, 0.9)';
    lightbox.style.zIndex = '1000';
    lightbox.style.display = 'none';
    lightbox.style.justifyContent = 'center';
    lightbox.style.alignItems = 'center';
    lightbox.style.cursor = 'pointer';

    const lightboxImg = document.createElement('img');
    lightboxImg.id = 'lightbox-img';
    lightboxImg.style.maxWidth = '80%';
    lightboxImg.style.maxHeight = '80%';
    lightboxImg.style.objectFit = 'contain';
    lightboxImg.style.border = '2px solid #444';

    lightbox.appendChild(lightboxImg);
    document.body.appendChild(lightbox);

    // Add click handlers to all simulation images
    const simImages = document.querySelectorAll('.sim-image');
    simImages.forEach(img => {
        img.style.cursor = 'zoom-in';

        img.addEventListener('click', function () {
            lightboxImg.src = this.src;
            lightbox.style.display = 'flex';
        });
    });

    // Close lightbox when clicking on it
    lightbox.addEventListener('click', function () {
        this.style.display = 'none';
    });
});