// *********
// gnb
// *********
let tnbIcons = document.querySelectorAll(".tnb-icon");
let tnbMenus = document.querySelectorAll(".tnb-menu-wrap");
let tnbSearch = document.querySelector(".search-wrap");
let tnbSearchClose = document.querySelector(".search .close");
let tnbAllMenu = document.querySelector(".allmenu-wrap");
let tnbAllMenuClose = document.querySelector(".allmenu .close");

tnbIcons.forEach((tnbIcon, index) => {
  tnbIcon.addEventListener("click", () => {
    tnbMenus[index].classList.toggle("active");
  });
});
tnbSearchClose.addEventListener("click", () => {
  tnbSearch.classList.remove("active")
})
tnbAllMenuClose.addEventListener("click", () => {
  tnbAllMenu.classList.remove("active")
})









