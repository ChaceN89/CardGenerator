// function to get the default card data for 1 random car
export function generateRandomDefaultCard() {
  const card = cardList[Math.floor(Math.random() * cardList.length)];
  return card;
}

const cardList = [
  {
    name: "Bush",
    filePath: "card1.png"
  },
  {
    name: "Angle",
    filePath: "card2.png"
  },
  {
    name: "Water Thing",
    filePath: "card3.png"
  }
];
