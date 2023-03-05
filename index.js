import { CardList } from "./components/CardList/CardList.js";

function render() {
  const container = document.querySelector(".container");
  container.append(CardList());
}
render();
