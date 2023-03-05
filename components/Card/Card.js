export function Card(props) {
  const card = document.createElement("article");
  card.classList.add("card");

  const question = document.createElement("h2");
  question.textContent = props.question;

  const bookmark = document.createElement("svg");
  bookmark.classList.add("card__bookmark");
  bookmark.setAttribute("xmlns", "http://www.w3.org/2000/svg");
  bookmark.setAttribute("viewbox", "0 0 24 24");
  bookmark.setAttribute("height", "64px");
  bookmark.setAttribute("width", "64px");
  bookmark.innerHTML = `<path
d="M17,3H7A2,2 0 0,0 5,5V21L12,18L19,21V5C19,3.89 18.1,3 17,3Z"
/>`;
  /*  const path = document.createElement("path");
  path.setAttribute(
    "d",
    "M17,3H7A2,2 0 0,0 5,5V21L12,18L19,21V5C19,3.89 18.1,3 17,3Z"
  );
  bookmark.append(path); */

  const answerButton = document.createElement("button");
  answerButton.classList.add("card__button");
  answerButton.setAttribute("type", "button");
  answerButton.setAttribute("aria-label", "answer-button");
  answerButton.textContent = "Show answer";

  const answer = document.createElement("p");
  answer.classList.add("card__answer");
  answer.setAttribute("hidden", "");
  answer.textContent = props.answer;

  const list = document.createElement("ul");
  list.classList.add("card__hashtagList");

  const listElement = document.createElement("li");
  listElement.classList.add("card__hashtag", "card--html");
  listElement.textContent = props.tag;

  card.append(question, bookmark, answerButton, answer, list, listElement);

  return card;
}

//Bookmark click fill change

/* export function bookmarkChange() {
  const bookmarks = document.querySelectorAll('[data-js="card__bookmark"]');
  console.log(bookmarks);
  bookmarks.forEach((bookmark) => {
    bookmark.addEventListener("click", () => {
      bookmark.classList.toggle("card__bookmark--clicked");
    });
  });
}
bookmarkChange(); */

//Button show/hide answer + Hidden Answer

/* function answerButtonShowAndHide() {
  const answerButton = document.querySelector('[data-js="card__button"]');
  const answer = document.querySelector('[data-js="answer"]');

  answerButton.addEventListener("click", () => {
    answer.classList.toggle("card__answer--active");

    if (answer.classList.contains("card__answer--active")) {
      answerButton.textContent = "Hide Answer";
    } else {
      answerButton.textContent = "Show Answer";
    }
  });
}
answerButtonShowAndHide(); */

//Card1
/* export function showAndHideAnswers() {
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
}
showAndHideAnswers(); */

//Card2
/* const answerButton2 = document.querySelector('[data-js="card__button2"]');
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
 */
