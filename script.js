document.addEventListener('DOMContentLoaded', function() {
    const videoSlider = document.getElementById('videoSlider');

    videoSlider.addEventListener('click', function() {
        const categoriesSection = document.getElementById('categories');
        categoriesSection.scrollIntoView({ behavior: 'smooth' });
    });
});

