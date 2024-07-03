// list of triggers and effects that can be applied to cards
// each trigger has a weight:1 element by defulat- if you want a different weight add it to the object
// the same can be said for each of the effects 
/** for example 
{
    weight: 2,
    rarity: "Common",
    trigger: "Trigger Description",
    effects: [
      { name: "Effect number 1", weight: 0.5 },
      { name: "Effect number 2" }, // has a default weight of 1

    ],
  },
 */
export const triggersAndEffects = [
  {
    trigger: "Your turn in prep phase begins",
    rarity: "Common",
    effects: [
      { name: "This card gains +1 ACC and +1 DEF for one combat phase it’s fielded for. (Can stack)"},
      { name: "You choose one opponent's card on the field, which loses -1 ACC and -1 DEF until the end of combat phase." },
      { name: "This card restores 1 HP to your card on the field."},
      { name: "Choose an opponent; one random card on their bench takes 1 DMG. (Can’t reduce below 1)" },
      { name: "You immediately create a free card, but its stats are all 1." }
    ],
  },
  {
    trigger: "You create another card", // might not make sense to have this trigger on the card as it is when you are making a card and will therfore alway happen
    rarity: "Common",
    effects: [
      { name: "The created card permanently gains +1 ACC."},
      { name: "The created card permanently gains +1 DEF." },
      { name: "The created card permanently gains +1 DMG." },
      { name: "You swap the created card's ability with any other card you own you choose." },
      { name: "This card can switch one of its stats of your choice with the new card." }
    ],
  },
  {
    trigger: "This card is attacked and wins the fight",
    rarity: "Common",
    effects: [
      { name: "Deal 1 DMG to the attacker. (Can’t reduce below 1)"},
      { name: "The attacker loses -1 DEF until the end of the next combat phase." },
      { name: "This card gains +1 DMG until the next time this card deals damage (Can stack)." },
      { name: "You can immediately switch this card out with one in your bench." },
      { name: "Disables the attacker's ability for 1 round, until the end of the next combat phase." },
      { name: "You immediately create a free card, but its stats are all 1. ." }
    ],
  },
  {
    trigger: "You activate this ability in place of this card’s attack in the combat phase",
    rarity: "Common",
    effects: [
      { name: "Deal half of this card’s DMG to one card on the field you choose. (Rounded up, can’t reduce below 1 HP)" },
      { name: "This card attacks a random player's card, but gains +2 acc for that fight." },
      { name: "Choose an opponent. This card attacks a random card they own. (Even on the bench)" },
      { name: "This card permanently gains 2 ACC." },
      { name: "One card you own restores 1 HP." }
    ],
  },
  {
    trigger: "This card is on the field and any opponent switches out their fielded card",
    rarity: "Common",
    effects: [
      { name: "The card that switches in takes 1 DMG." },
      { name: "The card that switches in loses -1 ACC until the end of the next combat phase." },
      { name: "This card gains +1 ACC until the end of the next combat phase." },
      { name: "You can immediately switch out this card with another in your bench." },
      { name: "Disable the ability of a random card which that opponent owns." },
      { name: "One card you own restores 1 HP." }
    ],
  },
  {
    trigger: "You lose a life point ",
    rarity: "Uncommon",
    effects: [
      { name: "This card gains +1 ACC and +1 DEF for one combat phase it’s fielded for. (Can stack)"},
      { name: "This card permanently gains +1 max HP." },
      { name: "Deal 1 damage to one card in any player's bench." },
      { name: "This card restores 2 HP." },
      { name: "You immediately create a free card, but its stats are all 1." }
    ],
  },
  {
    trigger: "This card attacks and wins the fight",
    rarity: "Uncommon",
    effects: [
      { name: "This card restores 2 HP."},
      { name: "This card permanently gains +1 ACC." },
      { name: "The attacked card takes 1 DMG the next time it's benched." },
      { name: "All opponent cards on the field take 1 DMG (can’t reduce below 1)." },
      { name: "Disable the target's ability for 1 round, until the end of the next combat phase." },
      { name: "The target card loses -1 DEF and you can change 1 letter in its name." }
    ],
  },
  {
    trigger: "This card is played on the field",
    rarity: "Uncommon",
    effects: [
      { name: "This card permanently gains +1 Max HP." },
      { name: "Deal 1 damage to one card on the field." },
      { name: "At the start of the next combat phase, disables the ability of one card on the field you choose until the end of the phase." },
      { name: "All opponent cards on the field take 1 DMG (can’t reduce below 1)." },
      { name: "One card on the field you choose permanently loses -1 ACC and -1 DEF." }
    ],
  },
  {
    trigger: "At the start of your turn in prep phase, you choose to discard one card in your hand",
    rarity: "Uncommon",
    effects: [
      { name: "This card restores 2 HP." },
      { name: "This card permanently gains +1 ACC." },
      { name: "This card gains +1 ACC, +1 DEF, and +1 DMG for one combat phase it's fielded for. (Can stack)" },
      { name: "Deal 1 damage to one card on the field." },
      { name: "Disable the ability of any one opponent's card you choose for 1 round, until the end of the next combat phase." }
    ],
  },
  {
    trigger: "This card survives a combat phase on the field",
    rarity: "Uncommon",
    effects: [
      { name: "This card immediately attacks any card an opponent owns."},
      { name: "All enemy cards on the field lose -1 DEF permanently (to a min. of 1)." },
      { name: "You immediately create a free card." },
      { name: "This card permanently gains +1 ACC and +1 DEF." },
      { name: "Deal 2 damage to one card on the field." }
    ],
  },
  {
    trigger: "This card wins 3 fights",
    rarity: "Rare",
    effects: [
      { name: "You immediately create a new card, but its stats are 5 ATK, 4 DEF, 4 DMG, and 5 HP." },
      { name: "Deal 1 LP damage to the player with the most LP. (Choose if tie, can’t reduce below 1)." },
      { name: "Choose an opponent; you banish a random card from their bench." },
      { name: "You restore 1 LP." },
      { name: "Clone this card or another card in your bench, which goes to your bench." },
      { name: "This card gains a crown and can no longer be banished; all of its stats are increased by +1." }
    ],
  },
  {
    trigger: "This card dies (not banished)",
    rarity: "Rare",
    effects: [
      { name: "Banish one card any opponent owns." },
      { name: "All enemy cards on the field lose -1 on all stats permanently (to a min. of 1)." },
      { name: "One card you own gains +1 ACC, +1 DEF, and +1 DMG permanently." },
      { name: "You can immediately create a new card in your hand." },
      { name: "Disable the ability of every other card on the field until the end of the next combat phase." }
    ],
  },
  {
    trigger: "You sacrifice 1 LP at the start of your turn in prep phase",
    rarity: "Rare",
    effects: [
      { name: "You immediately create a new card, but its stats are 5 ATK, 4 DEF, 4 DMG, and 5 HP."},
      { name: "Deal 100 damage to one card on the field." },
      { name: "Banish two cards any opponent owns. (These must be from separate players)" },
      { name: "Clone any card an opponent owns and add it to your hand." },
      { name: "Choose any card of yours that died or was banished and revive it in the last state it was in with full HP, returning it to your bench." },
      { name: "You restore 1 LP. Then you can rename any card an opponent owns." },
    ],
  },
  {
    trigger: "At the start of your turn in prep phase, you give this card to another player",
    rarity: "Rare",
    effects: [
      {name: "You steal a random card on that player’s bench (Which can be this one)"},
      {name: "That player can’t choose to attack your cards during the next combat phase, unless you’re the only possible target."},
      {name: "This card’s ACC, DEF, DMG, and Max HP is reduced by -1. (min. of 1.) This card cannot be discarded."},
      {name: "This card’s trigger is disabled. Every round, this card reduces the ACC of owner’s card on the field by -1 (min. of 1)"},
      {name: "This card’s trigger is disabled. If this card isn’t fielded by the end of the owner’s prep phase turn on the next round, this card’s HP is reduced to 0."},
    ],
  },
];
