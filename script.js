document.addEventListener("DOMContentLoaded", () => {

  // WhatsApp system
  const whatsappNumber = "94777728779";

  document.querySelectorAll(".wa-link").forEach(link => {
    const service = link.dataset.service;

    const message = service
      ? `Hi, I found your website and I want to request the ${service} service.\n\nCan you share more details?`
      : `Hi, I found your website and I’d like to know more.`;

    link.href = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
  });


  // Header scroll behavior
//   const header = document.querySelector("header");

//   if (!header) return; // safety guard

//   let lastScrollY = window.scrollY;

//   window.addEventListener("scroll", () => {
//     const currentScrollY = window.scrollY;

//     if (currentScrollY > lastScrollY && currentScrollY > 100) {
//       header.classList.add("hide");
//     } else {
//       header.classList.remove("hide");
//     }

//     lastScrollY = currentScrollY;
//   });

// });




// Header scroll behavior
const header = document.querySelector("header");

if (!header) return; // safety guard

// Define the media query breakpoint
const mediaQuery = window.matchMedia("(min-width: 768px)");
let lastScrollY = window.scrollY;

window.addEventListener("scroll", () => {
  // If the screen is smaller than 768px, stop execution here 
  // and clear the 'hide' class just in case it was left open
  if (!mediaQuery.matches) {
    header.classList.remove("hide");
    return;
  }

  const currentScrollY = window.scrollY;

  if (currentScrollY > lastScrollY && currentScrollY > 100) {
    header.classList.add("hide");
  } else {
    header.classList.remove("hide");
  }

  lastScrollY = currentScrollY;
});