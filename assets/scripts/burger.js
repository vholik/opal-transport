const burgerMenu = document.querySelector(".burger-menu");
const openBurgerButton = document.querySelector(".burger");
const closeBurgerButton = document.querySelector(".cancel-icon");

openBurgerButton.addEventListener("click", () => {
  burgerMenu.classList.remove("hide");
});

closeBurgerButton.addEventListener("click", () => {
  burgerMenu.classList.add("hide");
});
