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




