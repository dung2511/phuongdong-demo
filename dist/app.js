const questionTitles = document.querySelectorAll(".question-title");
questionTitles.forEach((title) => {
  title.addEventListener("click", (e) => {
    const question = title.parentElement,
      answer = question.querySelector(".answer"),
      minus = question.querySelector(".minus"),
      plus = question.querySelector(".plus");
    if (title.contains(e.target)) {
      answer.classList.toggle("hidden");
      minus.classList.toggle("hidden");
      plus.classList.toggle("hidden");
    }
  });
});
const list_menu_items = document.querySelector(".list-items"),
  angle_right = document.querySelector(".fa-angle-right"),
  list_items_menu = document.querySelector(".list-items-menu");
list_menu_items.addEventListener("click", (e) => {
  if (list_menu_items.contains(e.target)) {
    list_items_menu.classList.toggle("hidden");
    angle_right.classList.toggle("rotate-90");
  }
});
const hamburger = document.getElementById("hamburger"),
  closeMenu = document.getElementById("close-menu"),
  header_menu = document.getElementById("header_menu");
document.addEventListener("click", (e) => {
  if (hamburger.contains(e.target)) {
    header_menu.classList.toggle("hidden");
    closeMenu.classList.toggle("hidden");
  } else if (closeMenu.contains(e.target)) {
    header_menu.classList.toggle("hidden");
    closeMenu.classList.toggle("hidden");
    list_items_menu.classList.toggle("hidden");
  }
});

import Swiper from "https://cdn.jsdelivr.net/npm/swiper@9/swiper-bundle.esm.browser.min.js";

const swiper_1 = new Swiper(".mySwiper-img", {
  loop: true,
  pagination: {
    el: ".slider__pagination__img",
    clickable: true,
  },
  navigation: {
    nextEl: ".button-next-img",
    prevEl: ".button-prev-img",
  },
});
const swiper_2 = new Swiper(".mySwiper-price", {
  loop: true,
  pagination: {
    el: ".slider__pagination__price",
    clickable: true,
  },
  navigation: {
    nextEl: ".button-next-price",
    prevEl: ".button-prev-price",
  },
});
const swiper_3 = new Swiper(".mySwiper-discount", {
  slidesPerView: 1,
  loop: true,
  navigation: {
    nextEl: ".button-next-discount",
    prevEl: ".button-prev-discount",
  },
  breakpoints: {
    640: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});
