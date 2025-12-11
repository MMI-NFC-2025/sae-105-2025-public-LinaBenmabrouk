const toggle = document.querySelector(".menu-btn");
const nav = document.querySelector(".nav-list");

toggle.addEventListener("click", () => {
    nav.classList.toggle("open");
});
