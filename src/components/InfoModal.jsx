import React from 'react';
import Button from './Button';

const InfoModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 sm:max-w-lg md:max-w-xl w-full">
        <h2 className="text-xl font-bold mb-4 text-center">Card Information</h2>
        <p className="mb-2 text-center">You can choose your own card name and upload custom art or you can use default ones.</p>
        <ul className="list-disc list-inside">
          <li><strong>Health:</strong> Determines the HP of the card. When this reaches zero, your card is destroyed, and your overall life is decreased by one.</li>
          <li><strong>Damage:</strong> Determines the attack strength of the card. This is the damage done to an opponent's card when you win a fight.</li>
          <li><strong>Defense:</strong> Determines the defensive strength of the card. This stat indicates how many slots on the roulette wheel you have when being attacked.</li>
          <li><strong>Accuracy:</strong> Indicates how many slots on the roulette wheel you have when attacking, determining the likelihood of successful attacks.</li>
          <li><strong>Trigger:</strong> The condition under which the card's ability activates.</li>
          <li><strong>Effect:</strong> The result of the card's ability when the trigger condition is met.</li>
        </ul>
        <p className="mt-4 text-center">When a card is attacked, the attacker's accuracy is compared to the defender's defense. A roulette wheel is used to determine the winner, with the weights of accuracy and defense influencing the outcome. So if your attack is higher than the defender's defense, you have a much higher chance of winning the fight.</p>
        <Button
          onClick={onClose}
          color="blue"
          className="mt-4 w-full"
        >
          Close
        </Button>
      </div>
    </div>
  );
};

export default InfoModal;
