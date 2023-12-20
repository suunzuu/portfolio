// *******************
// Initialize Swiper
// *******************
var swiper = new Swiper(".interest-swiper", {
  slidesPerView: 3,
  spaceBetween: 100,
  loop: true,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
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
});