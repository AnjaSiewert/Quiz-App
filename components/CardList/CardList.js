import { cards } from "../../utils/cards.js";
import { Card } from "../Card/Card.js";

export function CardList() {
  const cardList = document.createElement("section");

  cards.forEach((card) => {
    const cardElement = Card(card);
    cardList.append(cardElement);
  });
  return cardList;
}
