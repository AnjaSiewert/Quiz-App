//Creating cards on homepage - Bookmark svg not working

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
  const path = document.createElement("path");
  path.setAttribute(
    "d",
    "M17,3H7A2,2 0 0,0 5,5V21L12,18L19,21V5C19,3.89 18.1,3 17,3Z"
  );
  bookmark.append(path);

  //Show and Hide Answer
  const answerButton = document.createElement("button");
  answerButton.classList.add("card__button");
  answerButton.setAttribute("type", "button");
  answerButton.setAttribute("aria-label", "answer-button");
  answerButton.textContent = "Show answer";
  answerButton.addEventListener("click", () => {
    answer.classList.toggle("card__answer--active");
    if (answer.classList.contains("card__answer--active")) {
      answerButton.textContent = "Hide Answer";
    } else {
      answerButton.textContent = "Show Answer";
    }
  });

  const answer = document.createElement("p");
  answer.classList.add("card__answer");
  answer.setAttribute("hidden", "");
  answer.textContent = props.answer;

  const list = document.createElement("ul");
  list.classList.add("card__hashtagList");

  const listElement1 = document.createElement("li");
  listElement1.classList.add("card__hashtag");
  listElement1.textContent = props.tag[0];

  const listElement2 = document.createElement("li");
  listElement2.classList.add("card__hashtag");
  listElement2.textContent = props.tag[1];

  const listElement3 = document.createElement("li");
  listElement3.classList.add("card__hashtag");
  listElement3.textContent = props.tag[2];

  card.append(question, bookmark, answerButton, answer, list);
  list.append(listElement1, listElement2, listElement3);
  return card;
}

//Bookmark click fill change

export function bookmarkChange() {
  const bookmarks = document.querySelectorAll(".card__bookmark");
  console.log(bookmarks);
  bookmarks.forEach((bookmark) => {
    bookmark.addEventListener("click", () => {
      bookmark.classList.toggle("card__bookmark--clicked");
    });
  });
}
bookmarkChange();
