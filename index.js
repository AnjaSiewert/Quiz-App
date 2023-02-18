const headerElement = document.querySelector('[data-js="header"]');
const bodyElement = document.querySelector('[data-js="body"]');
const footerElement = document.querySelector('[data-js="footer"]');
const buttonDarkMode = document.querySelector('[data-js="toggle"]');

buttonDarkMode.addEventListener("click", () => {
  headerElement.classList.toggle("dark");
  bodyElement.classList.toggle("dark");
  footerElement.classList.toggle("dark");
});
