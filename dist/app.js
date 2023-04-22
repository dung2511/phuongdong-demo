let slideIndex = 1;
showSlides(slideIndex);
function plusSlides(n) {
  showSlides((slideIndex += n));
}
function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slides[slideIndex - 1].style.display = "block";
}
showSlide(slideIndex);
function plusSlide(n) {
  showSlide((slideIndex += n));
}
function showSlide(n) {
  let i;
  let slides = document.getElementsByClassName("mySlide");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slides[slideIndex - 1].style.display = "block";
}
function slideItem(n) {
  showItemShow((slideIndex += n));
}

const carousel = document.querySelector(".discount_slide_list");
const arrowIcons = document.querySelectorAll(".btn-arrowItems");
const firstImg = carousel.querySelectorAll(".discount-items")[0];

let isDragStart = false,
  prevPageX,
  prevScrollLeft;
let firstImgWidth = firstImg.clientWidth + 14;
arrowIcons.forEach((icon) => {
  icon.addEventListener("click", () => {
    carousel.scrollLeft +=
      icon.id == "btn-arrowItems-left" ? -firstImgWidth : firstImgWidth;
  });
});
const dragging = (e) => {
  if (!dragStart) return;
  e.preventDefault();
  // let positionDiff = e.pageX - prevPageX;
  // carousel.scrollLeft = prevScrollLeft - positionDiff;
};
const dragStart = (e) => {
  isDragStart = true;
  prevPageX = e.pageX;
  prevScrollLeft = carousel.scrollLeft;
};
const dragStop = () => {
  isDragStart = false;
};
carousel.addEventListener("mousemove", dragging);
carousel.addEventListener("mousedown", dragStart);
carousel.addEventListener("mouseup", dragStop);
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
const closeMenu = document.getElementById("close-menu");
const header_menu = document.getElementById("header_menu");
function openNav() {
  header_menu.style.width = "max-content";
  header_menu.style.display = "block";
  closeMenu.style.display = "block";
  header_menu.style.padding = "20px";
}
function closeNav() {
  header_menu.style.padding = "0";
  header_menu.style.width = "0";
  closeMenu.style.display = "none";
  header_menu.style.display = "none";
}
