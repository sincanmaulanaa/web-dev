//Menampilkan/menyembunyikan layanan lain
const moreServices = document.getElementById("more-services");
const moreBtn = document.getElementById("more");

moreServices.classList.add("hidden");

moreBtn.addEventListener("click", function () {
  moreServices.classList.remove("hidden");
  moreBtn.remove();
});

//Melakukan perulangan untuk menampilkan bintang disetiap testimonial item
const testimonialStar = document.querySelectorAll(".testimonial-star");
console.log(testimonialStar);
for (let i = 0; i < testimonialStar.length; i++) {
  const star = testimonialStar[i];

  star.innerText = "⭐⭐⭐⭐⭐";
}

// Mobile menu
const burgerIcon = document.getElementById("burger-icon");
const mobileMenu = document.getElementById("nav-menu");

burgerIcon.addEventListener("click", function () {
  mobileMenu.classList.toggle("hidden");
  mobileMenu.classList.toggle("display");
});

// klik diluar mobile menu
window.addEventListener("click", function (e) {
  if (e.target != burgerIcon && e.target != mobileMenu) {
    mobileMenu.classList.add("hidden");
    mobileMenu.classList.remove("display");
  }
});

// Back to top
window.onscroll = function () {
  const header = document.querySelector("header");
  const fixedNav = header.offsetTop;
  const backToTop = document.querySelector(".to-top");

  if (window.pageYOffset > fixedNav) {
    backToTop.classList.add("back-to-top");
  } else {
    backToTop.classList.remove("back-to-top");
  }
};
