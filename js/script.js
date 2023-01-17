const sideMenu = document.querySelector("aside");
const menuBtn = document.querySelector("#menu-btn");
const closeBtn = document.querySelector("#close-btn");
const themeToggler = document.querySelector(".theme-toggler");

// Show side bar
menuBtn.addEventListener("click", () => {
  // sideMenu.style.display = "block";
  sideMenu.style.animation = "showMenu 500ms ease forwards";
});

// Close sidebar
closeBtn.addEventListener("click", () => {
  sideMenu.style.animation = "closeMenu 600ms ease";
});

// Toggle Theme

themeToggler.addEventListener("click", () => {
  document.body.classList.toggle("dark");

  themeToggler.querySelector("span:nth-child(1)").classList.toggle("active");
  themeToggler.querySelector("span:nth-child(2)").classList.toggle("active");
});
