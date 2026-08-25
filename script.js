document.addEventListener("DOMContentLoaded", () => {

  // WhatsApp system
  const whatsappNumber = "94777728779";

  document.querySelectorAll(".wa-link").forEach(link => {
    const service = link.dataset.service;

    const message = service
      ? `Hi, I found your website and I want to request the ${service} service.\n\nCan you share more details?`
      : `Hi, I found your website and I'd like to know more.`;

    link.href = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
  });


  // Header scroll behavior
  const header = document.querySelector("header");
  const HIDE_THRESHOLD = 300;

  if (header) {
    let lastScrollY = window.scrollY;

    window.addEventListener("scroll", () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > HIDE_THRESHOLD) {
        // scrolling down past the threshold — hide
        header.classList.add("hide");
      } else if (currentScrollY < lastScrollY) {
        // scrolling up — reveal
        header.classList.remove("hide");
      }

      lastScrollY = currentScrollY;
    });
  }


  // Mobile menu toggle
  const menuBtn = document.querySelector("#mobile-menu-btn");
  const navMenu = document.querySelector("nav ul");

  if (menuBtn && navMenu) {
    menuBtn.addEventListener("click", () => {
      const isOpen = navMenu.classList.toggle("open");
      menuBtn.setAttribute("aria-expanded", isOpen);
    });

    // Close the menu when a nav link is tapped (common mobile UX expectation)
    navMenu.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", () => {
        navMenu.classList.remove("open");
        menuBtn.setAttribute("aria-expanded", "false");
      });
    });
  }

});