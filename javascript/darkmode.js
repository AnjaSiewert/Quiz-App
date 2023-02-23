const headerElement = document.querySelector('[data-js="header"]');
const footerElement = document.querySelector('[data-js="footer"]');
const buttonDarkMode = document.getElementById("darkmode-toggle");

buttonDarkMode.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  headerElement.classList.toggle("dark");
  footerElement.classList.toggle("dark");
});
