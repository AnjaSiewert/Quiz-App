import { CardList } from "./components/CardList/CardList.js";
//import { toggleButton } from "./components/ToggleButton/ToggleButton.js";

function render() {
  const container = document.querySelector(".container");
  container.append(CardList());
}
render();

//toggleButton();
