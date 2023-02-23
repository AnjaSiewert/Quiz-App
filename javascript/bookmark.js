const bookmark = document.querySelector('[data-js="card__bookmark"]');
bookmark.addEventListener("click", (event) => {
  console.log(event.target);
  event.target.classList.toggle("card__bookmark--clicked");
});
