const questionTitles = document.querySelectorAll(".question-title");

questionTitles.forEach((title) => {
  title.addEventListener("click", () => {
    const question = title.parentElement;
    const answer = question.querySelector(".answer");
    if (answer.style.display === "none") {
      answer.style.display = "block";
    } else {
      answer.style.display = "none";
    }
  });
});
const hamburger = document.getElementById("hamburger");
const closeMenu = document.getElementById("close-menu");
const header_menu = document.getElementById("header_menu");
document.addEventListener("click", (e) => {
  if (hamburger.contains(e.target)) {
    header_menu.classList.toggle("hidden");
  } else {
  }
});
import Swiper from "https://cdn.jsdelivr.net/npm/swiper@9/swiper-bundle.esm.browser.min.js";

const swiper_1 = new Swiper(".mySwiper-img", {
  loop: true,
  navigation: {
    nextEl: ".button-next-img",
    prevEl: ".button-prev-img",
  },
});
const swiper_2 = new Swiper(".mySwiper-price", {
  loop: true,
  navigation: {
    nextEl: ".button-next-price",
    prevEl: ".button-prev-price",
  },
});
const swiper_3 = new Swiper(".mySwiper-discount", {
  slidesPerView: 1,
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
