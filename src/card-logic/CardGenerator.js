import { Card, globalCardStats, usePointDistributionSystem } from './CardStats';
import { triggersAndEffects } from './TriggersAndEffect';

/**
 * Generates random card stats and assigns a random trigger and effect based on the card's rarity.
 * @returns {Card} - The generated card with random stats, trigger, and effect.
 */
function generateRandomCardStats() {
  const card = new Card();

  if (usePointDistributionSystem) {
    // Distribute points among the stats
    const distributedStats = distributePoints(globalCardStats.distributionPoints);
    card.HealthPoints = distributedStats.health;
    card.DamagePoints = distributedStats.damage;
    card.DefencePoints = distributedStats.defence;
    card.AccuracyPoints = distributedStats.accuracy;

  } else {
    // Assign random stats to the card within the defined ranges
    card.AccuracyPoints = getRandomInt(
      globalCardStats.accuracyRange[0], 
      globalCardStats.accuracyRange[1] + 1
    );
    card.DefencePoints = getRandomInt(
      globalCardStats.defenceRange[0], 
      globalCardStats.defenceRange[1] + 1
    );
    card.DamagePoints = getRandomInt(
      globalCardStats.damageRange[0], 
      globalCardStats.damageRange[1] + 1
    );
    card.HealthPoints = getRandomInt(
      globalCardStats.healthRange[0], 
      globalCardStats.healthRange[1] + 1
    );
  }

  // Generate a random trigger and effect
  const triggerEffect = generateRandomTriggerEffect();
  card.Trigger = triggerEffect.trigger;
  card.Effect = triggerEffect.effect;
  card.rarity = triggerEffect.rarity;

  return card;
}

/**
 * Distributes a given number of points across four stats while respecting min and max values.
 * @param {number} totalPoints - The total points to distribute.
 * @returns {Object} - An object containing the distributed stats.
 */
function distributePoints(totalPoints) {
  // they results start at the min values
  const setStats = { 
    health: globalCardStats.healthRange[0], 
    damage: globalCardStats.damageRange[0], 
    defence: globalCardStats.defenceRange[0], 
    accuracy: globalCardStats.accuracyRange[0] 
  };

  // Calculate the points left after setting the min values
  var pointsLeft = totalPoints- setStats.health - setStats.damage - setStats.defence - setStats.accuracy;

  // Distribute the remaining points randomly
  while (pointsLeft > 0) {
    const stat = getRandomInt(0, 4);
    switch (stat) {
      case 0:
        if (setStats.health < globalCardStats.healthRange[1]) {
          setStats.health++;
          pointsLeft--;
        }
        break;
      case 1:
        if (setStats.damage < globalCardStats.damageRange[1]) {
          setStats.damage++;
          pointsLeft--;
        }
        break;
      case 2:
        if (setStats.defence < globalCardStats.defenceRange[1]) {
          setStats.defence++;
          pointsLeft--;
        }
        break;
      case 3:
        if (setStats.accuracy < globalCardStats.accuracyRange[1]) {
          setStats.accuracy++;
          pointsLeft--;
        }
        break;
      default:
        break
    }
  }

  return setStats
}

/**
 * Generates a random trigger and effect based on their weights.
 * @returns {Object} - An object containing the selected trigger, effect, and rarity.
 */
function generateRandomTriggerEffect() {
  // Select a random trigger based on weights
  const trigger = getRandomElementWithWeight(triggersAndEffects);
  
  // Select a random effect from the chosen trigger's effects based on weights
  const effect = getRandomElementWithWeight(trigger.effects);

  return { trigger: trigger.trigger, effect: effect.name, rarity: trigger.rarity };
}

/**
 * Selects a random element from an array based on their weights.
 * @param {Array} elements - The array of elements to choose from.
 * @returns {Object} - The selected element.
 */
function getRandomElementWithWeight(elements) {
  const totalWeight = elements.reduce((acc, element) => acc + parseFloat(element.weight), 0);
  const randomValue = Math.random() * totalWeight;
  let cumulativeWeight = 0;

  // Select an element based on the random value
  for (const element of elements) {
    cumulativeWeight += parseFloat(element.weight);
    if (randomValue < cumulativeWeight) {
      return element;
    }
  }

  return elements[0]; // Fallback to the first element if no element is selected
}

/**
 * Generates a random integer between the specified min (inclusive) and max (exclusive).
 * @param {number} min - The minimum value.
 * @param {number} max - The maximum value.
 * @returns {number} - The generated random integer.
 */
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

export default generateRandomCardStats;
