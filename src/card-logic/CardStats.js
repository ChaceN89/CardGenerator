import React, { createContext, useContext, useState } from 'react';

// The card class with information about the card
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

// Initial values for context
const initialGlobalCardStats = {
  healthRange: [2, 5],
  damageRange: [1, 4],
  defenceRange: [2, 4],
  accuracyRange: [1, 5],
  distributionPoints: 12
};

const initialUsePointDistributionSystem = true;

// Create context
const CardStatsContext = createContext();

export const CardStatsProvider = ({ children }) => {
  const [globalCardStats, setGlobalCardStats] = useState(initialGlobalCardStats);
  const [usePointDistributionSystem, setUsePointDistributionSystem] = useState(initialUsePointDistributionSystem);

  return (
    <CardStatsContext.Provider value={{ globalCardStats, setGlobalCardStats, usePointDistributionSystem, setUsePointDistributionSystem }}>
      {children}
    </CardStatsContext.Provider>
  );
};

export const useCardStats = () => useContext(CardStatsContext);
