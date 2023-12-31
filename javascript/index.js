// ---------UNFOLD MENU -------------

const menuBox = document.querySelector(".nav__icon-menu");
const menuBtn = menuBox.querySelector("#icon-menu");
const closeBtn = menuBox.querySelector("#icon-close");

const menuMobile = document.querySelector(".nav__list-mobile");
const menuMobileLink = menuMobile.querySelectorAll(".nav__list-mobile-link");

const changeIsMenuShow = () => {
  menuBtn.classList.toggle("hidden");
  closeBtn.classList.toggle("hidden");
  menuMobile.classList.toggle("hidden");
};

menuBox.addEventListener("click", changeIsMenuShow);

menuMobileLink.forEach((item) =>
  item.addEventListener("click", changeIsMenuShow)
);
