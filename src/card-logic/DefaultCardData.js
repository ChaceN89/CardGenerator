// function to get the default card data for 1 random car
export function generateRandomDefaultCard() {
  const card = defaultCards[Math.floor(Math.random() * defaultCards.length)];
  const name = card.names[Math.floor(Math.random() * card.names.length)];
  const filePath = card.files[Math.floor(Math.random() * card.files.length)];
  return { name, filePath };
}

const defaultCards = [
  {
    names: ["Bush", "Tree", "Plant", "Shrub", "Sapling", "Forest", "Greenery", "Bramble"],
    files: ["card1.png","card1.png","card1.png", "card1-alt1.png", "card1-alt2.png"]
  },
  {
    names: ["Angel", "Halo", "Heavenly", "Divine", "Cherub", "Seraph", "Celestial", "Holy"],
    files: ["card2.png","card2.png","card2.png", "card2-alt1.png", "card2-alt2.png"]
  },
  {
    names: ["Water Thing", "Ocean", "Lake", "River", "Pond", "Sea", "Aqua", "Lagoon"],
    files: ["card3.png", "card3.png", "card3.png","card3-alt1.png", "card3-alt2.png", "card3-alt3.png"]
  },
  {
    names: ["Squid", "Cephalopod", "Tentacles", "Ink", "Octopus", "Kraken", "Cuttlefish", "Nautilus"],
    files: ["card4.png", "card4-alt1.png"]
  },
  {
    names: ["Cblob", "Blob", "Goo", "Slime", "Ooze", "Muck", "Gelatin", "Gunk"],
    files: ["card5.png", "card5-alt1.png", "card5-alt2.png", "card5-alt3.png"]
  },
  {
    names: ["Dragon", "Wyvern", "Drake", "Serpent", "Wyrm", "Hydra", "Lizard", "Behemoth"],
    files: ["card6.png", "card6-alt1.png"]
  },
  {
    names: ["Cunning Fox", "Sly Fox", "Sly Prowler", "Trickster", "Crafty Vixen", "Furtive Hunter", "Wily Beast"],
    files: ["card7.png"]
  },
  {
    names: ["Nocturnal Moth", "Luminous Flier", "Giant Insect", "Twilight Flutterer", "Moonlit Wing", "Dusky Moth"],
    files: ["card8.png"]
  },
  {
    names: ["Jumping Frog", "River Hopper", "Swamp Dweller", "Leaping Amphibian", "Pond Leaper", "Tree Frog"],
    files: ["card9.png"]
  },
  {
    names: ["Tiny Mouse", "Clever Rodent", "Brave Critter", "Quick Squeaker", "Sneaky Nibbler", "Nibble Mouse"],
    files: ["card10.png"]
  },
  {
    names: ["Cute Axolotl", "Mystic Salamander", "Playful Newt", "Adorable Creature", "Magic Axolotl", "Curious Amphibian"],
    files: ["card11.png"]
  },
  {
    names: ["Sushi Chef Fish", "Nigiri Master", "Maki Roll Artisan", "Sashimi Expert", "Tempura Fryer", "Wasabi Warrior"],
    files: ["card12.png"]
  },
  {
    names: ["Curious Cat", "Sneaky Feline", "Playful Kitty", "Mischievous Puss", "Stealthy Hunter", "Purring Pet"],
    files: ["card13.png"]
  },
  {
    names: ["Bone Fox Dog", "Spirit Hound", "Ghost Canine", "Phantom Pooch", "Ethereal Pup", "Spectral Mutt"],
    files: ["card14.png"]
  },
  {
    names: ["Skeleton Warrior", "Undead Fighter", "Bone Mage", "Bony Archer", "Skeleton Knight", "Skeleton Sorcerer"],
    files: ["card15.png"]
  },
  {
    names: ["Magic Lamp", "Ancient Lantern", "Enchanted Light", "Mystic Beacon", "Cursed Luminary", "Genie Vessel"],
    files: ["card16.png"]
  },
  {
    names: ["Headless Horseman", "Decapitated Fiend", "Phantom Knight", "Haunted Rider", "Ghostly Cavalier", "Spectral Horseman"],
    files: ["card17.png"]
  }
];

