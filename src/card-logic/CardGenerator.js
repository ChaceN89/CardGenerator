import { Card, AbilityRarity } from './Card';
import { GlobalCardStats } from './GlobalCardStats';

function generateRandomCard() {
  const card = new Card();

  card.Accuracy = getRandomInt(GlobalCardStats.MinAccuracy, GlobalCardStats.MaxAccuracy + 1);
  card.Retaliation = getRandomInt(GlobalCardStats.MinRetaliation, GlobalCardStats.MaxRetaliation + 1);
  card.Damage = getRandomInt(GlobalCardStats.MinDamage, GlobalCardStats.MaxDamage + 1);
  card.HealthPoints = getRandomInt(GlobalCardStats.MinHealthPoints, GlobalCardStats.MaxHealthPoints + 1);

  card.abilityRarity = generateRandomRarity();

  card.Trigger = generateRandomTrigger(card);
  card.Effect = generateRandomEffect(card);

  return card;
}

function generateRandomRarity() {
  const rarityWeights = {
    [AbilityRarity.Common]: GlobalCardStats.CommonChance,
    [AbilityRarity.Uncommon]: GlobalCardStats.UncommonChance,
    [AbilityRarity.Rare]: GlobalCardStats.RareChance
  };

  const totalWeight = Object.values(rarityWeights).reduce((acc, weight) => acc + weight, 0);
  const randomValue = getRandomInt(0, totalWeight);
  let cumulativeWeight = 0;

  for (const [rarity, weight] of Object.entries(rarityWeights)) {
    cumulativeWeight += weight;
    if (randomValue < cumulativeWeight) {
      return rarity;
    }
  }

  return AbilityRarity.Common;
}

function generateRandomTrigger(card) {
  if (card.abilityRarity === AbilityRarity.Common) {
    return getRandomTextWithWeight(GlobalCardStats.CommonTriggers);
  } else if (card.abilityRarity === AbilityRarity.Uncommon) {
    return getRandomTextWithWeight(GlobalCardStats.UncommonTriggers);
  } else if (card.abilityRarity === AbilityRarity.Rare) {
    return getRandomTextWithWeight(GlobalCardStats.RareTriggers);
  }
  return "";
}

function generateRandomEffect(card) {
  let result = "";
  if (card.abilityRarity === AbilityRarity.Common) {
    result = getRandomTextWithWeight(GlobalCardStats.CommonEffects);
  } else if (card.abilityRarity === AbilityRarity.Uncommon) {
    result = getRandomTextWithWeight(GlobalCardStats.UncommonEffects);
  } else if (card.abilityRarity === AbilityRarity.Rare) {
    result = getRandomTextWithWeight(GlobalCardStats.RareEffects);
  }

  result = result.trim();
  let loopCount = 0;

  while ([GlobalCardStats.RollCommon, GlobalCardStats.RollUnCommon, GlobalCardStats.RollRare].includes(result)) {
    loopCount++;
    if (loopCount >= 2000) {
      console.log("Infinite Loop");
      break;
    }
    if (result === GlobalCardStats.RollCommon) {
      console.log(`Rolled Common`);
      result = getRandomTextWithWeight(GlobalCardStats.CommonEffects);
    } else if (result === GlobalCardStats.RollUnCommon) {
      console.log(`Rolled UnCommon`);
      result = getRandomTextWithWeight(GlobalCardStats.UncommonEffects);
    } else if (result === GlobalCardStats.RollRare) {
      console.log(`Rolled Rare`);
      result = getRandomTextWithWeight(GlobalCardStats.RareEffects);
    }
  }

  return result;
}

function getRandomTextWithWeight(textAndWeight) {
  const texts = [];
  textAndWeight.forEach(tw => {
    for (let i = 0; i < tw.Weight; i++) {
      texts.push(tw.Text);
    }
  });
  return getRandomElement(texts);
}

function getRandomElement(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

export default generateRandomCard;
