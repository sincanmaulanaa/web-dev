//Menampilkan/menyembunyikan layanan lain

const moreServices = document.getElementById("more-services");
const moreBtn = document.getElementById("more");

moreServices.style.display = "none";

moreBtn.addEventListener("click", function () {
  moreServices.style.display = "flex";
  moreBtn.remove();
});

//Melakukan perulangan untuk menampilkan bintang disetiap testimonial item

const testimonialStar = document.querySelectorAll(".testimonial-star");
console.log(testimonialStar);
for (let i = 0; i < testimonialStar.length; i++) {
  const star = testimonialStar[i];

  star.innerText = "⭐⭐⭐⭐⭐";
}
