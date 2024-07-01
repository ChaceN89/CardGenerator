import { Card, globalCardStats, triggersAndEffects } from './CardStats';

/**
 * Generates random card stats and assigns a random trigger and effect based on the card's rarity.
 * @returns {Card} - The generated card with random stats, trigger, and effect.
 */
function generateRandomCardStats() {
  const card = new Card();

  // Assign random stats to the card within the defined ranges
  card.Accuracy = getRandomInt(globalCardStats.accuracy[0], globalCardStats.accuracy[1] + 1);
  card.Retaliation = getRandomInt(globalCardStats.defense[0], globalCardStats.defense[1] + 1);
  card.Damage = getRandomInt(globalCardStats.damage[0], globalCardStats.damage[1] + 1);
  card.HealthPoints = getRandomInt(globalCardStats.health[0], globalCardStats.health[1] + 1);

  // Generate a random trigger and effect
  const triggerEffect = generateRandomTriggerEffect();
  card.Trigger = triggerEffect.trigger;
  card.Effect = triggerEffect.effect;
  card.abilityRarity = triggerEffect.rarity;

  return card;
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
