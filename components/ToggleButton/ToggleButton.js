function toggleButton() {
  const headerElement = document.querySelector('[data-js="header"]');
  const footerElement = document.querySelector('[data-js="footer"]');
  const toggleDarkMode = document.querySelector('[data-js="toggle"]');
  toggleDarkMode.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    headerElement.classList.toggle("dark");
    footerElement.classList.toggle("dark");
  });
}
toggleButton();
