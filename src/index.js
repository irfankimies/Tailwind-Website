const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("nav-menu");
const navClose = document.getElementById("nav-close");
const navLink = document.querySelectorAll(".nav_link");

navLink.forEach((link) => {
  link.addEventListener("click", () => {
    navMenu.classList.toggle("hidden");
  });
});

hamburger.addEventListener("click", () => {
  navMenu.classList.toggle("hidden");
});
navClose.addEventListener("click", () => {
  navMenu.classList.toggle("hidden");
});

const tabs = document.querySelectorAll(".tabs_wrap ul li");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    tabs.forEach((tab) => {
      tab.classList.remove("active");
    });
    tab.classList.toggle("active");

    const tabval = tab.getAttribute("data-tabs");
    const all = document.querySelectorAll(".item_wrap");
    const foods = document.querySelectorAll(".food");
    const snacks = document.querySelectorAll(".snack");
    const beverages = document.querySelectorAll(".bevarage");

    all.forEach((item) => {
      item.style.display = "none";
    });

    if (tabval === "food") {
      foods.forEach((item) => {
        item.style.display = "block";
      });
    } else if (tabval === "snack") {
      snacks.forEach((item) => {
        item.style.display = "block";
      });
    } else if (tabval === "beverage") {
      beverages.forEach((item) => {
        item.style.display = "block";
      });
    } else {
      all.forEach((item) => {
        item.style.display = "block";
      });
    }
  });
});

const swiper = new Swiper(".swiper", {
  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  speed: 400,
  spaceBetween: 30,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  grabcursor: true,
  breakpoints: {
    // when window width is >= 640px
    640: {
      slidesPerView: 1,
    },
    // when window width is >= 720px
    720: {
      slidesPerView: 2,
    },
    // when window width is >= 1024px
    1024: {
      slidesPerView: 3,
    },
  },
});

const scrollUp = () => {
  const scrollUpBTn = document.getElementById("scroll-up");

  if (window.scrollY >= 250) {
    scrollUpBTn.classList.remove("-bottom-1/2");
    scrollUpBTn.classList.add("bottom-4");
  } else {
    scrollUpBTn.classList.remove("bottom-4");
    scrollUpBTn.classList.add("-bottom-1/2");
  }
};
window.addEventListener("scroll", scrollUp);

const scrollHeader = () => {
  const header = document.getElementById("header");

  if (window.scrollY >= 50) {
    header.classList.add("border-b", "border-secondaryColor");
  } else {
    header.classList.remove("border-b", "border-secondaryColor");
  }
};

window.addEventListener("scroll", scrollHeader);

// DarkMode

const html = document.querySelector("html");
const themeBtn = document.getElementById("theme-toggle");

if (localStorage.getItem("mode") == "dark") {
  darkMode();
} else {
  lightMode();
}

themeBtn.addEventListener("click", () => {
  if (localStorage.getItem("mode") == "light") {
    darkMode();
  } else {
    lightMode();
  }
});

function darkMode() {
  html.classList.add("dark");
  themeBtn.classList.replace("fa-moon", "fa-sun");
  localStorage.setItem("mode", "dark");
}

function lightMode() {
  html.classList.remove("dark");
  themeBtn.classList.replace("fa-sun", "fa-moon");
  localStorage.setItem("mode", "light");
}

// active link

const activeLink = () => {
  const sections = document.querySelectorAll("section");
  const navLink = document.querySelectorAll(".nav_link");

  let current = "home";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;

    if (this.scrollY >= sectionTop - 60) {
      current = section.getAttribute("id");
    }
  });

  navLink.forEach((item) => {
    item.classList.remove("text-secondaryColor");
    if (item.href.includes(current)) {
      item.classList.add("text-secondaryColor");
    }
  });
};
window.addEventListener("scroll", activeLink);

// SCROLL reveal animation

const sr = ScrollReveal({
  origin: "top",
  distance: "60px",
  duration: 2000,
  delay: 400,
});

sr.reveal(".home_image");
sr.reveal(".home_content", { origin: "bottom" });
sr.reveal(".category_card", { interval: 300 });

sr.reveal(".promo_card-1", { origin: "left" });
sr.reveal(".promo_card-2", { origin: "right" });

sr.reveal(".abt_img", { origin: "bottom" });
sr.reveal(".abt_content", { origin: "top" });

sr.reveal(".menu_content", { origin: "left" });

sr.reveal(".customer_review", { origin: "right" });
sr.reveal(".footer");
