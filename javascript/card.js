//Bookmark click fill change
const bookmark = document.querySelector('[data-js="card__bookmark"]');
bookmark.addEventListener("click", (event) => {
  event.target.classList.toggle("card__bookmark--clicked");
});

const bookmark2 = document.querySelector('[data-js="card__bookmark2"]');
bookmark2.addEventListener("click", (event) => {
  event.target.classList.toggle("card__bookmark--clicked");
});

const bookmark3 = document.querySelector('[data-js="card__bookmark3"]');
bookmark3.addEventListener("click", (event) => {
  event.target.classList.toggle("card__bookmark--clicked");
});
const bookmark4 = document.querySelector('[data-js="card__bookmark4"]');
bookmark4.addEventListener("click", (event) => {
  event.target.classList.toggle("card__bookmark--clicked");
});

//Button show/hide answer + Hidden Answer

//Card1
const answerButton = document.querySelector('[data-js="card__button"]');
const cardAnswer = document.querySelector('[data-js="answer"]');
answerButton.addEventListener("click", (event) => {
  if (event.target.dataset.showanswer === "false") {
    event.target.setAttribute("data-showanswer", "true");
    answerButton.textContent = "Hide Answer";
    cardAnswer.removeAttribute("hidden", "");
  } else {
    event.target.setAttribute("data-showanswer", "false");
    answerButton.textContent = "Show Answer";
    cardAnswer.setAttribute("hidden", "");
  }
});

//Card2
const answerButton2 = document.querySelector('[data-js="card__button2"]');
const cardAnswer2 = document.querySelector('[data-js="answer2"]');
answerButton2.addEventListener("click", (event) => {
  if (event.target.dataset.showanswer === "false") {
    event.target.setAttribute("data-showanswer", "true");
    answerButton2.textContent = "Hide Answer";
    cardAnswer2.removeAttribute("hidden", "");
  } else {
    event.target.setAttribute("data-showanswer", "false");
    answerButton2.textContent = "Show Answer";
    cardAnswer2.setAttribute("hidden", "");
  }
});

//Card3
const answerButton3 = document.querySelector('[data-js="card__button3"]');
const cardAnswer3 = document.querySelector('[data-js="answer3"]');
answerButton3.addEventListener("click", (event) => {
  if (event.target.dataset.showanswer === "false") {
    event.target.setAttribute("data-showanswer", "true");
    answerButton3.textContent = "Hide Answer";
    cardAnswer3.removeAttribute("hidden", "");
  } else {
    event.target.setAttribute("data-showanswer", "false");
    answerButton3.textContent = "Show Answer";
    cardAnswer3.setAttribute("hidden", "");
  }
});

//Card4
const answerButton4 = document.querySelector('[data-js="card__button4"]');
const cardAnswer4 = document.querySelector('[data-js="answer4"]');
answerButton4.addEventListener("click", (event) => {
  if (event.target.dataset.showanswer === "false") {
    event.target.setAttribute("data-showanswer", "true");
    answerButton4.textContent = "Hide Answer";
    cardAnswer4.removeAttribute("hidden", "");
  } else {
    event.target.setAttribute("data-showanswer", "false");
    answerButton4.textContent = "Show Answer";
    cardAnswer4.setAttribute("hidden", "");
  }
});
