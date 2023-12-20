//***************
//swiper
//***************
var swiper = new Swiper(".visual-swiper", {
  spaceBetween: 0,
  loop: true,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    // dynamicBullets: true,
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

var swiper = new Swiper(".franchise-swiper", {
  spaceBetween: 0,
  loop: true,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
});

var swiper = new Swiper(".sns-swiper", {
  slidesPerView: 3,
  spaceBetween: 30,
  loop: true,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  breakpoints: {
    1001:{slidesPerView: 3},
    641: {slidesPerView: 2, spaceBetween: 25, centeredSlides: false},
    0: {slidesPerView: 1},
  }
});

//***************
//탭메뉴
//***************
let categoryWraps = document.querySelectorAll(".beverage-category-wrap")
let categorys = document.querySelectorAll(".beverage-category")

categorys.forEach((category, index)=>{
  category.addEventListener("click",function(){
    for(categoryWrap of categoryWraps) categoryWrap.classList.remove("active")
    categoryWraps[index].classList.add("active");
  })
});
categorys[0].click();