/*Missing: 
- Functionaltiy on new Card
- Minlength function*/

console.clear();

//Create new card

const form = document.querySelector('[data-js="form"]');
const mainElement = document.querySelector('[data-js="form_main"]');

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

// Minlength
const textareaInput = document.querySelector('[data-js="textarea-question"]');
textareaInput.addEventListener("input", (event) => {
  showLength(event.target.value, event.target.value.minLength);
});

const formHint = document.querySelector('[data-js="formhint"]');
function showLength(text, minlength) {
  const inputHint = text.length;
  if (inputHint < 1) {
    inputHint.textContent = "";
  } else if (inputHint < minlength) {
    inputHint.textContent = `${inputHint} characters left`;
  } else {
    inputHint.textContent = "Only 150 characters allowed";
  }
}
