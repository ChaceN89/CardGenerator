// the card class with information about the card
export class Card {
  constructor() {
    this.cardName = "";
    this.cardSprite = null;
    this.Accuracy = 0;
    this.Retaliation = 0;
    this.Damage = 0;
    this.HealthPoints = 0;
    this.abilityRarity = AbilityRarity.Common;
    this.Trigger = "";
    this.Effect = "";
  }
}

// the enum for the rarity of the card
export const AbilityRarity = {
  Common: 'Common',
  Uncommon: 'Uncommon',
  Rare: 'Rare'
};


