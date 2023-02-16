const sideMenu = document.querySelector("aside");

const menuBtn = document.querySelector("#menu-btn");

const closeBtn = document.querySelector("#close-btn");

const themeToggler = document.querySelector(".theme-toggler");

const themes = document.querySelectorAll(".theme-toggler span");

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

if (!localStorage.getItem("theme")) {
  if (
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches
  ) {
    themeToggler.querySelector("span:nth-child(2)").classList.add("active");

    document.body.classList.toggle("dark");
  } else {
    themeToggler.querySelector("span:nth-child(1)").classList.add("active");
  }
} else {
  if (localStorage.getItem("theme") == "dark") {
    document.body.classList.add("dark");

    themeToggler.querySelector("span:nth-child(2)").classList.add("active");
  }

  if (localStorage.getItem("theme") == "light") {
    document.body.classList.remove("dark");

    themeToggler.querySelector("span:nth-child(1)").classList.add("active");
  }
}

themes.forEach((theme) => {
  theme.addEventListener("click", (e) => {
    themes.forEach((themeItem) => {
      themeItem.classList.remove("active");
    });

    localStorage.setItem("theme", e.target.id);

    e.target.classList.add("active");

    if (e.target.id == "dark") {
      if (!e.target.classList.contains("dark")) {
        document.body.classList.add("dark");
      }
    }

    if (e.target.id == "light") {
      document.body.classList.remove("dark");
    }
  });
});
