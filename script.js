document.addEventListener('DOMContentLoaded', function () {
    const navbar = document.querySelector('.navbar__container');
    const sections = document.querySelectorAll("section[id]");
    const navLinks = document.querySelectorAll(".navbar__links");
    const toggleBtn = document.getElementById("menu-toggle");
    const navMenu = document.getElementById("navbar-menu");

    // Hamburger menu toggle
    toggleBtn.addEventListener("click", () => {
        navMenu.classList.toggle("active");
    });

    // Highlight section + navbar blur
    window.addEventListener('scroll', function () {
        if (window.scrollY > 10) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }

        let current = "";
        sections.forEach((section) => {
            const sectionTop = section.offsetTop - 120;
            const sectionHeight = section.offsetHeight;

            if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
                current = section.getAttribute("id");
            }
        });

        navLinks.forEach((link) => {
            link.classList.remove("active");
            if (link.getAttribute("href") === `#${current}`) {
                link.classList.add("active");
            }
        });
    });

    // Auto-close on click
    navLinks.forEach(link => {
        link.addEventListener("click", () => {
            navMenu.classList.remove("active");
        });
    });
});
