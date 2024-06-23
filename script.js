// script.js
window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 0) {
        navbar.classList.remove('transparent');
        navbar.classList.add('solid');
    } else {
        navbar.classList.remove('solid');
        navbar.classList.add('transparent');
    }
});

// Initialize navbar as transparent
document.addEventListener('DOMContentLoaded', function() {
    const navbar = document.getElementById('navbar');
    navbar.classList.add('transparent');
});
