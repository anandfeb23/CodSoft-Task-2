const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

const toggleMenu = () => {
  navLinks.classList.toggle("open");
  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
};

menuBtn.addEventListener("click", toggleMenu);

navLinks.addEventListener("click", () => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-line");
});

const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

const revealElement = (selector, options) => {
  ScrollReveal().reveal(selector, { ...scrollRevealOption, ...options });
};

revealElement(".header__image img", { origin: "right" });
revealElement(".header__content h1", { delay: 500 });
revealElement(".header__content .section__description", { delay: 1000 });
revealElement(".header__content .header__btn", { delay: 1500 });

revealElement(".explore__image img", { origin: "left" });
revealElement(".explore__content .section__header", { delay: 500 });
revealElement(".explore__content .section__description", { delay: 1000 });
revealElement(".explore__content .explore__btn", { delay: 1500 });

revealElement(".banner__card", { interval: 500 });

revealElement(".chef__image img", { origin: "right" });
revealElement(".chef__content .section__header", { delay: 500 });
revealElement(".chef__content .section__description", { delay: 1000 });
revealElement(".chef__list li", { delay: 1500, interval: 500 });

const swiper = new Swiper(".swiper", {
  loop: true,
  pagination: {
    el: ".swiper-pagination",
  },
});
