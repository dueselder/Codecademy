// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Sticky Navbar
const navbar = document.querySelector('nav');
window.addEventListener('scroll', function() {
    if(window.scrollY > 300) { // Adjusted value for mobile screens
        navbar.classList.add('sticky');
    } else {
        navbar.classList.remove('sticky');
    }
});

// Navbar Toggle
document.getElementById("navToggle").addEventListener("click", function() {
    const navItems = document.getElementById("navItems");
    navItems.classList.toggle('show');
});

// Close navbar when a nav item is clicked on mobile
document.querySelectorAll('#navItems a').forEach(item => {
    item.addEventListener('click', () => {
        document.getElementById("navItems").classList.remove('show');
    });
});

// Loading Bars
document.addEventListener("DOMContentLoaded", function() {
    const fills = document.querySelectorAll(".fill");
    fills.forEach(fill => {
        const percentage = fill.getAttribute("data-percent");
        fill.style.width = percentage + "%";
    });
});
