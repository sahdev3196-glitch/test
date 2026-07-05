/**
 * URBAN FRILL PORTFOLIO - PRODUCTION ENGINE INTERACTIVE SYSTEM
 */

document.addEventListener("DOMContentLoaded", () => {
    
    // --- Mobile Menu Controller Logic ---
    const menuToggle = document.querySelector(".menu-toggle");
    const primaryNav = document.querySelector("#primary-nav");
    const navLinks = document.querySelectorAll(".nav-menu a");

    const toggleMenu = () => {
        const isExpanded = menuToggle.getAttribute("aria-expanded") === "true";
        menuToggle.setAttribute("aria-expanded", !isExpanded);
        primaryNav.classList.toggle("active");
    };

    menuToggle.addEventListener("click", toggleMenu);

    // Auto Collapse menu on click targeting internal anchor states
    navLinks.forEach(link => {
        link.addEventListener("click", () => {
            if (primaryNav.classList.contains("active")) {
                toggleMenu();
            }
        });
    });

    // --- Performance Lazy Loading Engine ---
    const lazyImages = document.querySelectorAll("img.lazy-load");

    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.getAttribute("data-src");
                img.addEventListener("load", () => {
                    img.classList.add("loaded");
                });
                observer.unobserve(img);
            }
        });
    }, {
        rootMargin: "0px 0px 200px 0px" // Pre-loads images 200px before viewport entry
    });

    lazyImages.forEach(image => imageObserver.observe(image));

    // --- Elegant Micro-Animation Scroll Observer ---
    const animatedElements = document.querySelectorAll(".fade-in");

    const scrollObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                observer.unobserve(entry.target); // Trigger animation once
            }
        });
    }, {
        threshold: 0.05
    });

    animatedElements.forEach(element => scrollObserver.observe(element));
    
    // Ensure landing view assets update immediately for optimal CLS matching
    setTimeout(() => {
        const heroText = document.querySelector(".hero-text-box");
        if(heroText) heroText.classList.add("visible");
    }, 100);
});
