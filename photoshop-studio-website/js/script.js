// Example of adding interactivity
document.addEventListener("DOMContentLoaded", function() {
    const heroText = document.querySelector('.hero h2');
    heroText.addEventListener('mouseover', function() {
        heroText.style.color = '#1abc9c';
    });
    heroText.addEventListener('mouseout', function() {
        heroText.style.color = '#333';
    });
});
