let tnb = document.querySelector(".tnb");
let allMenuBtn = document.querySelector(".all-menu-btn > span");

allMenuBtn.addEventListener("click", function () {
  this.textContent = this.textContent === "menu" ? "close" : "menu";
  tnb.classList.toggle("active");
});
