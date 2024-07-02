// the card class with information about the card
// default values
export class Card {
  constructor() {
    this.cardName = "";
    this.cardSprite = null;
    this.AccuracyPoints = 0;
    this.DefencePoints = 0;
    this.DamagePoints = 0;
    this.HealthPoints = 0;
    this.rarity = null; 
    this.Trigger = "";
    this.Effect = "";
  }
}

export const usePointDistributionSystem = true;

//  the default stats that a card can have and the max points that can be distributed 
export const globalCardStats = {
  healthRange:[2,5],
  damageRange:[1,4],
  defenceRange:[2,4],
  accuracyRange:[1,5],
  distributionPoints: 12
};


// list of triggers and effects that can be applied to cards
export const triggersAndEffects = [
  {
    weight: 40,
    rarity: "Common",
    trigger: "This card dies (not banished)",
    effects: [
      { name: "banish one card any other player owns", weight: 1 },
      { name: "All enemy cards on the field lose -1 ACC, -1 DEF, -1 DMG, and -1 Max HP permanently (to a min. of 1)", weight: 1 },
      { name: "One card you own gains +2 ACC and +1 DEF permanently", weight: 1 },
      { name: "You can immediately create a new card in your hand", weight: 1 },
      { name: "Disable the ability of every other card on the field until the end of the next round", weight: 1}
    ],
  },
  {
    weight: 1,
    rarity: "Uncommon",
    trigger: "You activate this ability in place of this card's attack in the combat phase",
    effects: [
      { name: "Deal 1 DMG to one card on the field you choose (Can't reduce below 1 HP)", weight: 1 },
      { name: "This card gains +2 acc for one fight, but attacks a random player's card", weight: 1 },
      { name: "Choose an opponent. This card attacks a random card they own (Even on the bench)", weight: 1 },
      { name: "This card's DMG is halved (rounded up) until combat phase ends, but makes two attacks", weight: 1 }
    ],
  },
  {
    weight: 1,
    rarity: "Rare",
    trigger: "You sacrifice 1 LP at the start of your turn in prep phase",
    effects: [
      { name: "You immediately create a new card, but its stats become 5/4/4/5", weight: 1 },
      { name: "Deal 100 DMG to one card on the field", weight: 1 },
      { name: "Banish two cards any other player owns", weight: 1 },
      { name: "Clone any card an opponent owns and add it to your hand", weight: 2 },
      { name: "Choose any card of yours that died or was banished and revive it in the last state it was in with full HP, returning it to your bench", weight: 1 }
    ],
  }
];


