// function to get the default card data for 1 random car
export function generateRandomDefaultCard() {
  const card = defaultCards[Math.floor(Math.random() * defaultCards.length)];
  const name = card.names[Math.floor(Math.random() * card.names.length)];
  const filePath = card.files[Math.floor(Math.random() * card.files.length)];
  return { name, filePath };
}

const defaultCards = [
  {
    names: ["Bush", "Tree", "Plant", "Shrub"],
    files: ["card1.png", "card1-alt1.png", "card1-alt2.png"]
  },
  {
    names: ["Angel", "Halo", "Heavenly", "Divine"],
    files: ["card2.png", "card2-alt1.png", "card2-alt2.png"]
  },
  {
    names: ["Water Thing", "Ocean", "Lake", "River"],
    files: ["card3.png", "card3-alt1.png", "card3-alt2.png", "card3-alt3.png"]
  },
  {
    names: ["Squid", "Cephalopod", "Tentacles", "Ink"],
    files: ["card4.png", "card4-alt1.png"]
  },
  {
    names: ["Cblob", "Blob", "Goo", "Slime"],
    files: ["card5.png", "card5-alt1.png", "card5-alt2.png", "card5-alt3.png"]
  },
  {
    names: ["Dragon", "Wyvern", "Drake", "Serpent"],
    files: ["card6.png", "card6-alt1.png"]
  },
  {
    names: ["Cunning Fox", "Sly Fox", "Trickster Fox"],
    files: ["card7.png"]
  },
  {
    names: ["Nocturnal Moth", "Luminous Moth", "Giant Moth"],
    files: ["card8.png"]
  },
  {
    names: ["Jumping Frog", "River Frog", "Swamp Frog"],
    files: ["card9.png"]
  },
  {
    names: ["Tiny Mouse", "Clever Mouse", "Brave Mouse"],
    files: ["card10.png"]
  },
  {
    names: ["Cute Axolotl", "Mystic Axolotl", "Playful Axolotl"],
    files: ["card11.png"]
  },
  {
    names: ["Sushi Chef Fish", "Nigiri Fish", "Maki Roll Fish"],
    files: ["card12.png"]
  },
  {
    names: ["Curious Cat", "Sneaky Cat", "Playful Cat"],
    files: ["card13.png"]
  },
  {
    names: ["Bone Fox Dog", "Fox Dog", "Ghost Dog"],
    files: ["card14.png"]
  },
  {
    names: ["Skeleton Warrior", "Skeleton Mage", "Skeleton Archer"],
    files: ["card15.png"]
  },
  {
    names: ["Magic Lamp", "Ancient Lamp", "Enchanted Lamp"],
    files: ["card16.png"]
  },
  {
    names: ["Headless Horseman", "Decapitated Fiend", "Phantom Knight"],
    files: ["card17.png"]
  }
];
