// *******************
// Initialize Swiper
// *******************
var swiper1 = new Swiper(".visual-swiper", {
  slidesPerView: 1,
  spaceBetween: 0,
  loop: true,
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

var swiper2 = new Swiper(".subscribe-swiper", {
  slidesPerView: 3,
  spaceBetween: 19,
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

var swiper3 = new Swiper(".postscript-swiper", {
  slidesPerView: 4,
  spaceBetween: 15,
  loop: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
});

// *************************
// tab menu-payment,product
// *************************
function tabMenu(titles, contents) {
  titles.forEach((title, index) => {
    title.addEventListener("click", function () {
      for (title of titles) title.classList.remove("active");
      for (content of contents) content.classList.remove("active");
      this.classList.add("active");
      contents[index].classList.add("active");
    });
  });
  titles[0].click();
}

let paymentTitles = document.querySelectorAll(".payment-list > .sec-wrap-tit");
let paymentContents = document.querySelectorAll(".payment-list > .payment-contents");
let productTitles = document.querySelectorAll(".product-list > .sec-wrap-tit");
let productContents = document.querySelectorAll(".product-list > .product-introduce");
tabMenu(paymentTitles, paymentContents);
tabMenu(productTitles, productContents);