const headerElement = document.querySelector('[data-js="header"]');
const bodyElement = document.querySelector('[data-js="body"]');
const footerElement = document.querySelector('[data-js="footer"]');
const buttonDarkMode = document.getElementById("darkmode-toggle");

buttonDarkMode.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  headerElement.classList.toggle("dark");
});
