document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".nav");
  const body = document.body;

  function toggleMenu() {
    const isExpanded = menuToggle.getAttribute("aria-expanded") === "true";

    nav.classList.toggle("active");
    body.classList.toggle("menu-open");

    menuToggle.setAttribute("aria-expanded", String(!isExpanded));
  }

  menuToggle.addEventListener("click", toggleMenu);

  document.querySelectorAll(".nav-link").forEach(link => {
    link.addEventListener("click", () => {
      nav.classList.remove("active");
      body.classList.remove("menu-open");
      menuToggle.setAttribute("aria-expanded", "false");
    });
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && nav.classList.contains("active")) {
      nav.classList.remove("active");
      body.classList.remove("menu-open");
      menuToggle.setAttribute("aria-expanded", "false");
    }
  });
});

const carousel = document.querySelector(".carousel");
  const items = document.querySelectorAll(".carousel-item");

  items.forEach(item => {
    const clone = item.cloneNode(true);
    carousel.appendChild(clone);
  });

  let position = 0;
  const speed = 0.5;

  function animateCarousel() {
    position -= speed;
    const itemWidth = items[0].offsetWidth;

    if (Math.abs(position) >= itemWidth) {
      position = 0;
      carousel.appendChild(carousel.firstElementChild);
    }

    carousel.style.transform = `translateX(${position}px)`;
    requestAnimationFrame(animateCarousel);
  }

  animateCarousel();
