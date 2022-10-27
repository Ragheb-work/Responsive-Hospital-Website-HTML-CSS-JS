let navItems = document.getElementById("nav-items");
let openBtn = document.getElementById("open-nav-btn"),
  closeBtn = document.getElementById("close-nav-btn");
let links = document.querySelectorAll("#nav-items li a");
let nav = document.querySelector("nav");
let scrollBtn = document.querySelector(".scroll i");

// change nav background on scroll and Show Scroll Btn
window.addEventListener("scroll", () => {
  nav.classList.toggle("window-scroll", window.scrollY > 0);
  window.scrollY > 150
    ? scrollBtn.classList.add("show")
    : scrollBtn.classList.remove("show");
});
// Scroll To Top Click
scrollBtn.onclick = () => {
  window.scrollTo(top);
};
// Scroll To Top Click

let closeNav = () => {
  navItems.style.display = "none";
  openBtn.style.display = "inline-block";
  closeBtn.style.display = "none";
};

openBtn.addEventListener("click", () => {
  navItems.style.display = "flex";
  openBtn.style.display = "none";
  closeBtn.style.display = "inline-block";
});

closeBtn.addEventListener("click", closeNav);

// close nav menu when an item of the menu clicked
if (window.innerWidth < 1024) {
  links.forEach((link) => {
    link.addEventListener("click", closeNav);
  });
}

/*Testimonials Section (Swiper Js)*/
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    // When width is > 600px
    600: {
      slidesPerView: 2,
    },
    // When width is > 1000px
    1024: {
      slidesPerView: 3,
    },
  },
});
/*Testimonials Section (Swiper Js)*/
