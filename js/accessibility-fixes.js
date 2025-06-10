/**
 * Accessibility fixes for S3 deployment website
 * This script adds necessary attributes to elements for better accessibility
 */
document.addEventListener('DOMContentLoaded', function() {
    // Fix heart icon links
    document.querySelectorAll('.shop-icon.bi-heart').forEach(function(link) {
        link.setAttribute('title', 'Add to favorites');
        const span = document.createElement('span');
        span.className = 'sr-only';
        span.textContent = 'Add to favorites';
        link.appendChild(span);
    });

    // Fix bookmark icon links
    document.querySelectorAll('.shop-icon.bi-bookmark').forEach(function(link) {
        link.setAttribute('title', 'Bookmark item');
        const span = document.createElement('span');
        span.className = 'sr-only';
        span.textContent = 'Bookmark item';
        link.appendChild(span);
    });

    // Fix arrow down link
    const arrowLink = document.querySelector('.bi-arrow-down.hero-btn-link');
    if (arrowLink) {
        arrowLink.setAttribute('title', 'Scroll to About section');
        const span = document.createElement('span');
        span.className = 'sr-only';
        span.textContent = 'Scroll Down';
        arrowLink.appendChild(span);
    }

    // Fix iframe
    const mapIframe = document.querySelector('.google-map');
    if (mapIframe) {
        mapIframe.setAttribute('title', 'Store location map');
        // Remove inline style
        mapIframe.removeAttribute('style');
    }
});