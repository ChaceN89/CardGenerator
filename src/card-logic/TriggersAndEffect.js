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
    trigger: "You activate this ability in prep phase …",
    rarity: "Common",
    effects: [
      { name: "This card gains +1 ACC for one combat phase it’s fielded for. (Can stack)" },
      { name: "You choose one opponent's card on the field, which loses -1 ACC and -1 DEF until the end of combat phase." },
      { name: "2 HP is restored to your card on the field." },
      { name: "Choose an opponent; one random card on their bench loses -1 Max HP. (Can’t reduce below 1)" },
      { name: "Your card on the field gains +1 ACC and DEF until the end of the next combat round, but so does another random opponent’s fielded card." },
      { name: "You create a new card for free, and choose an opponent. You both get a copy of the card." },
    ],
  },
  {
    trigger: "You create another card and it’s added to your bench …", // might not make sense to have this trigger on the card as it is when you are making a card and will therfore alway happen
    rarity: "Common",
    effects: [
      { name: "The created card permanently gains +1 ACC and +1 DMG (Up to max. 5 and 4, respectively.)"},
      { name: "The created card permanently gains +1 DEF and +1 Max HP (Up to max. 5 and 4, respectively.)"},
      { name: "You swap the created card’s ability with any other card you own that you choose."},
      { name: "The new card can switch one random stat with that of any fielded card." },
      { name: "One card you own restores 2 HP." },
      { name: "You gain +1 card reroll." },
    ],
  },
  {
    trigger: "This card is attacked and wins the fight …",
    rarity: "Common",
    effects: [
      { name: "Deal 1 DMG to the attacker. (Can’t reduce below 1)"},
      { name: "The attacker loses -1 DEF for 1 round, until the end of the next combat phase." },
      { name: "This card gains +1 DMG until the next time this card deals damage (Can stack)." },
      { name: "You can immediately switch this card out with one in your bench." },
      { name: "Disables the attacker's ability for 1 round, until the end of the next combat phase." },
    ],
  },
  {
    trigger: "You activate this ability in place of this card’s attack in the combat phase …",
    rarity: "Common",
    effects: [
      { name: "Deal half of this card’s DMG to one card on the field you choose. (Rounded up, can’t reduce below 1 HP)" },
      { name: "This card attacks a random opponent's card, but gains +2 acc for that fight." },
      { name: "This card attacks two random opponent’s cards. (Can roll twice into the same target)." },
      { name: "Choose an opponent. This card attacks a random card they own (Even on the bench)." },
      { name: "This card permanently gains +1 ACC." },
      { name: "This card swaps ownership with another card on the field that you choose." },
    ],
  },
  {
    trigger: "This card is on the field and any opponent switches out their fielded card …",
    rarity: "Common",
    effects: [
      { name: "The card that switches in takes 1 damage." },
      { name: "The card that switches in loses -1 ACC until the end of the next combat phase." },
      { name: "The card that switches in is banished at the end of combat phase if its ACC or DEF is 5 or greater, unless it dies." },
      { name: "One card you own restores 2 HP." },
      { name: "The opponent instead switches out to a random card they own." },
    ],
  },
    {
    trigger: "During prep phase, you choose an opponent with equal or more life points than you …",
    rarity: "Common",
    effects: [
      { name: "At the start of the next combat phase, both your cards on the field gain +4 DMG, but you can only attack each other." },
      { name: "This card steals the permanent and temporary stat boosts of their fielded card, then this ability is disabled." },
      { name: "You choose who that player attacks at the start of the next combat phase. You can’t choose that opponent again for the rest of this card’s lifetime." },
      { name: "This card swaps its ability with a random card on their bench." },
      { name: "You pick a card in their bench, and they pick a card in your bench; both cards then swap ownership." },
    ],
  },
  {
    trigger: "You lose a life point …",
    rarity: "Uncommon",
    effects: [
      { name: "This card gains +1 to ATK, DMG, and DEF permanently." },
      { name: "This card gains +2 Max HP permanently." },
      { name: "Banish up to two cards that any player owns (Each must be from a unique player)." },
      { name: "Deal 2 damage to one card you choose that any player owns." },
      { name: "During the next combat phase, nobody can attack your fielded monster, except for one player you choose." },
      { name: "This card becomes angry. If it reduces a card to or below 0 HP during the next combat phase, you restore 1 LP." },
    ],
  },
  {
    trigger: "This card attacks and wins the fight …",
    rarity: "Uncommon",
    effects: [
      { name: "This card restores 2 HP and steals a character from the target’s name to add to itself." },
      { name: "This card permanently gains +1 ACC and steals a character from the target’s name to add to itself." },
      { name: "All opponent cards on the field take 1 DMG (can’t reduce below 1)." },
      { name: "Disable the target's ability for 1 round, until the end of the next combat phase." },
      { name: "The target card loses -1 DEF and you can change 1 letter in its name." },
    ],
  },
  {
    trigger: "This card is played on the field …",
    rarity: "Uncommon",
    effects: [
      { name: "This card permanently gains +1 Max HP." },
      { name: "Deal 1 damage to one card any opponent owns." },
      { name: "All opponent cards on the field take 1 DMG." },
      { name: "At the start of the next combat phase, disables the ability of one card on the field you choose until the end of the phase)." },
      { name: "Every player must attack this card during the next combat phase, but this card deals DMG to an attacker if it wins the fight." },
      { name: "This card gains +2 ACC and +1 DMG, but it’s banished at the end of the next combat phase, unless it dies." },
    ],
  },
  {
    trigger: "During prep phase, you choose to sacrifice one card in your bench …",
    rarity: "Uncommon",
    effects: [
      { name: "Until the end of the next combat phase, this card gains a shield that blocks one instance of damage." },
      { name: "This card permanently gains +1 ACC." },
      { name: "This card gains +1 ACC, +1 DEF, and +1 DMG for one combat phase it's fielded for (Can stack)." },
      { name: "Deal 1 damage to one card on the field." },
      { name: "Choose up to 3 opponents. They must also each sacrifice a card on their bench." },
    { name: "The sacrificed card is returned to your hand with full HP in 3 rounds at the start of your turn, gaining +1 to all stats. You have -1 bench slots until then." },
    ],
  },
  {
    trigger: "This card survives a combat phase on the field …",
    rarity: "Uncommon",
    effects: [
      { name: "This card immediately attacks any card an opponent owns."},
      { name: "All enemy cards on the field lose -1 DEF permanently (to a min. of 1)." },
      { name: "The next card you create during your next prep phase turn gains +2 randomly distributed stat points." },
      { name: "This card permanently gains +1 ACC and +1 DEF." },
      { name: "This card deals 1 damage to all cards on the field (Including itself)." },
    ],
  },
  {
    trigger: "Any player discards a card …",
    rarity: "Uncommon",
    effects: [
      { name: "You can choose to keep the discarded card, adding it to your bench. You can rename it."},
      { name: "This card gains +1 ACC for one combat phase it’s fielded for (Can stack)." },
      { name: "If that player is an opponent, the next card that player gains loses -1 Max HP (to a min. of 1) You can then add a prefix or suffix to its name." },
      { name: "That player cannot attack your fielded card during the next combat phase, unless there are no other possible targets." },
      { name: "Swap this card with a random card in their bench." },
    ],
  },
  {
    trigger: "During prep phase, you choose to sacrifice this card …",
    rarity: "Uncommon",
    effects: [
      { name: "One card you own gains +3 ACC. This bonus is reduced by 1 at the end of every combat phase."},
      { name: "Until the end of the next combat phase, this card grants a shield to one card you own that blocks one instance of damage." },
      { name: "Deal 1 damage to one card on the field." },
      { name: "All your cards are fully healed." },
      { name: "If you sacrifice another card with the exact same trigger and effect, you immediately create a new card, but its stats are 6 ATK, 6 DEF, 5 DMG, and 5 HP." },
    { name: "Choose an opponent. You both can choose for your fielded card to permanently gain either +1 ACC and DMG or +3 ACC and +2 DMG, but if both of you choose the latter, both your cards instead lose -1 ACC and DMG." },
    ],
  },
  {
    trigger: "This card wins 3 fights …",
    rarity: "Rare",
    effects: [
      { name: "You immediately create a new card, but its stats are 5 ATK, 5 DEF, 4 DMG, and 4 HP." },
      { name: "Deal 1 LP damage to the player with the most LP. (Choose if tie, can’t reduce below 1)." },
      { name: "Choose an opponent; you banish a card that you choose from their bench." },
      { name: "You restore 1 LP." },
      { name: "Clone any card that any player owns, which goes to your bench." },
      { name: "This card gains a crown and can no longer be banished; all of its stats are increased by +1." },
    { name: "Choose one card in the graveyard that you owned and revive it in a fresh state, returning them to your bench." },
    ],
  },
  {
    trigger: "You sacrifice 1 LP at the start of your turn in prep phase …",
    rarity: "Rare",
    effects: [
      { name: "You immediately create a new card, but its stats are 5 ATK, 5 DEF, 4 DMG, and 4 HP."},
      { name: "Deal 2 damage to every opponent’s card on the field." },
      { name: "You steal 1 card from up to 2 player's benches." },
      { name: "You banish half of the cards in every player’s bench (rounded up) of your choice." },
      { name: "Every player’s bench is switched around and given to their adjacent opponent clockwise from them." },
      { name: "Choose ANY card in the graveyard and revive it in the last state it was in with full HP, adding it to your bench." },
    ],
  },
  {
    trigger: "During the prep phase, you give this card to another player …",
    rarity: "Rare",
    effects: [
      {name: "You steal a random card on that player’s bench (Which can be this one)"},
      {name: "That player can’t choose to attack your cards during the next combat phase, unless you’re the only possible target."},
      {name: "This card’s ACC, DEF, DMG, and Max HP is reduced by -1. (min. of 1.) This card cannot be discarded."},
      {name: "This card has a 20% chance to instantly deal 1 LP damage to the owner and banish itself. This card cannot be discarded."},
      {name: "This card’s trigger is disabled. If this card isn’t fielded by the end of the owner’s prep phase turn on the next round, this card’s HP is reduced to 0."},
    ],
  },
  {
    trigger: "During prep phase, you attach this card to another card you own …",
    rarity: "Common",
    effects: [
      {name: "The host card that this attaches to gains +1 ACC, DMG, and max HP until this card is no longer attached."},
      {name: "The first time during every combat phase that the host card would take damage, it’s redirected to this card."},
      {name: "If the host card dies, this card leaps onto a random card on the field aboved 0 HP. You steal whichever card it lands on."},
      {name: "The host card’s defense is capped at 4, but the host card can no longer be banished, and it can only be damaged by losing fights."},
      {name: "The host gains a new ability at the end of every round."},
    ],
  },
  {
    trigger: "This card loses any fight …",
    rarity: "Common",
    effects: [
      {name: "You can choose to deal 1 damage to both this card and the card it lost against."},
      {name: "This card restores 1 HP."},
      {name: "You can immediately switch out this card with another in your bench."},
      {name: "This card immediately attacks the card that just won against it with -2 ACC and -1 DMG (Min. of 1) for the fight. This ability won’t trigger again off losing this fight."},
      {name: "You can choose a card on your bench, which takes damage instead of this card."},
    ],
  },
  {
    trigger: "This card attacks or is attacked and the fight would be an unfair fight for this card …",
    rarity: "Common",
    effects: [
      {name: "This card gains +1 ACC and DEF for the fight."},
      {name: "This card gains +1 DMG for the fight, and takes 1 less damage (min. 1) if it loses and would take damage."},
      {name: "This card takes 1 damage, but you swap yours and the opponent’s values for the fight."},
      {name: "After the fight, the opponent card permanently loses -1 DEF (if it was the defender) or -1 ACC (if it was the attacker)"},
      {name: "This card permanently copies the opponent’s DEF (if attacking) or ACC (if defending) if this card wins the fight."},
    ],
  },
];