const bookmark = document.querySelector('[data-js="card__bookmark"]');
bookmark.addEventListener("click", (event) => {
  event.target.classList.toggle("card__bookmark--clicked");
});

const answerButton = document.querySelector('[data-js="card__button"]');
const cardAnswer = document.querySelector('[data-js="answer1"]');
console.log(cardAnswer);
answerButton.addEventListener("click", (event) => {
  if (event.target.dataset.showanswer === "false") {
    event.target.setAttribute("data-showanswer", "true");
    answerButton.textContent = "Hide Answer";
    cardAnswer.setAttribute("hidden", "");
  } else {
    event.target.setAttribute("data-showanswer", "false");
    answerButton.textContent = "Show Answer";
    cardAnswer.removeAttribute("hidden");
  }
});
