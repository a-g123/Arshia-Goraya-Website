// will highlight section in navbar depending on page location
document.addEventListener('DOMContentLoaded', function () {
    const navbar = document.querySelector('.navbar__container');
    const sections = document.querySelectorAll("section[id]");
    const navLinks = document.querySelectorAll(".navbar__links");

    // Navbar scroll blur logic
    window.addEventListener('scroll', function () {
        if (window.scrollY > 10) {
          navbar.classList.add('scrolled');
        } else {
          navbar.classList.remove('scrolled');
        }
        
        // Scroll spy logic
        let current = "";
        sections.forEach((section) => {
          const sectionTop = section.offsetTop - 120; // adjust for navbar height
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
});
