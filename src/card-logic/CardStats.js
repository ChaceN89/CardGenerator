import React, { createContext, useContext, useState } from 'react';
import cloneDeep from 'lodash/cloneDeep';


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
  healthRange: [1, 4],
  damageRange: [1, 4],
  defenceRange: [1, 5],
  accuracyRange: [1, 5],
  distributionPoints: 12
};

const initialUsePointDistributionSystem = true;

// Create context
const GlobalCardStatsContext = createContext();

export const GlobalCardStatsProvider = ({ children }) => {
  // Create state with initial values
  const [globalCardStats, setGlobalCardStats] = useState(cloneDeep(initialGlobalCardStats));
  const [usePointDistributionSystem, setUsePointDistributionSystem] = useState(initialUsePointDistributionSystem);

  // Function to reset state
  const resetGlobalCardStats = () => {
    setGlobalCardStats(cloneDeep(initialGlobalCardStats));
    setUsePointDistributionSystem(initialUsePointDistributionSystem);
  };

  return (
    <GlobalCardStatsContext.Provider value={{ globalCardStats, setGlobalCardStats, usePointDistributionSystem, setUsePointDistributionSystem, resetGlobalCardStats }}>
      {children}
    </GlobalCardStatsContext.Provider>
  );
};

// Custom hook to use the context
export const useGlobalCardStats = () => {
  return useContext(GlobalCardStatsContext);
};