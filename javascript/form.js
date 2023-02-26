/*Missing: 
- Functionaltiy on new Card
- Minlength function answer*/

console.clear();

const form = document.querySelector('[data-js="form"]');
const mainElement = document.querySelector('[data-js="form_main"]');
const questionInput = document.querySelector('[data-js="textarea-question"]');
const questionLength = document.querySelector('[data-js="questionlength"]');
const answerInput = document.querySelector('[data-js="textarea-answer"]');
const answerLength = document.querySelector('[data-js="answerlength"]');

//Create new card
form.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData);

  const newCard = document.createElement("article");
  newCard.classList.add("card");
  const cardText = question.value;
  const answerText = answer.value;
  const tagText = tag.value;
  newCard.innerHTML = `
  <h2>${cardText}</h2>
    <svg class="card__bookmark" data-js="card__bookmark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" heigth="64px" width="64px"><path d="M17,3H7A2,2 0 0,0 5,5V21L12,18L19,21V5C19,3.89 18.1,3 17,3Z" /></svg>
          <button type="button" class="card__button" data-showanswer="false" data-js="card__button" aria-label="show answer">Show Answer</button>
          <p class="card__answer" data-js="answer1">${answerText}</p>
          <ul class="card__hashtagList">
            <li class="card__hashtag card--flexbox">${tagText}</li>
          </ul>
  `;
  mainElement.append(newCard);
});

// Minlength question
questionInput.addEventListener("input", (event) => {
  showTextareaLength(event.target.value, event.target.maxLength);
});

function showTextareaLength(text, maxLength) {
  const inputLength = text.length;
  const caractersLeft = maxLength - inputLength;
  if (inputLength < 1) {
    questionLength.textContent = "";
  } else if (inputLength < maxLength) {
    questionLength.textContent = `${caractersLeft}/150 characters left`;
  } else {
    questionLength.textContent = "Only 150 characters allowed";
  }
}
