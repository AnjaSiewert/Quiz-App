const mainElement = document.querySelector('[data-js="main"]');
const buttonDarkMode = document.querySelector('[data-js="button-darkmode"]');

buttonDarkMode.addEventListener("click", () => {
  mainElement.classList.toggle("dark");
});
