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
