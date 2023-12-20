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


// *******************
// tab menu-payment,product
// *******************
let paymentTitles = document.querySelectorAll(".payment-list > .sec-wrap-tit")
let paymentContents = document.querySelectorAll(".payment-list > .payment-contents")

paymentTitles.forEach((paymentTitle, index)=>{
  paymentTitle.addEventListener("click", function() {
    for(paymentTitle of paymentTitles) paymentTitle.classList.remove("active");
    for(paymentContent of paymentContents) paymentContent.classList.remove("active");
    this.classList.add("active");
    paymentContents[index].classList.add("active");
  })
});
paymentTitles[0].click();

let productTitles = document.querySelectorAll(".product-list > .sec-wrap-tit")
let productContents = document.querySelectorAll(".product-list > .product-introduce")

productTitles.forEach((productTitle, index)=>{
  productTitle.addEventListener("click", function() {
    for(productTitle of productTitles) productTitle.classList.remove("active");
    for(productContent of productContents) productContent.classList.remove("active");
    this.classList.add("active");
    productContents[index].classList.add("active");
  })
});
productTitles[0].click();
