//***************
//swiper
//***************
var swiper = new Swiper(".card-swiper", {
  loop: true,
  slidesPerView: 3,
  spaceBetween: 30,
  slidesOffsetBefore : 0,
  centeredSlides: true,
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    1301:{slidesPerView: 3},
    551: {slidesPerView: 2, spaceBetween: 25, centeredSlides: false},
    0:{slidesPerView: 1}
  }
});