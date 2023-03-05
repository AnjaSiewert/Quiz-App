import { Card } from "../Card/Card.js";

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
  const questionContainer = document.querySelector(".containerNewCards");
  const newCard = Card(data);
  form.reset();
  questionInput.focus();
  questionContainer.append(newCard);
});

// Minlength display

questionInput.addEventListener("input", (event) => {
  showTextareaLength(
    questionLength,
    event.target.value,
    event.target.maxLength
  );
});

answerInput.addEventListener("input", (event) => {
  showTextareaLength(answerLength, event.target.value, event.target.maxLength);
});

function showTextareaLength(output, text, maxLength) {
  const inputLength = text.length;
  const caractersLeft = maxLength - inputLength;
  if (inputLength < 1) {
    output.textContent = "";
  } else if (inputLength < maxLength) {
    output.textContent = `${caractersLeft}/150 characters left`;
  } else {
    output.textContent = "Only 150 characters allowed";
  }
}
