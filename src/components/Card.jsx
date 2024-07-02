import React from 'react';
import { FaBullseye, FaShieldAlt, FaHeart } from 'react-icons/fa';
import { LuSword } from 'react-icons/lu';
import Button from './Button';

const Card = ({ cardRef, card, downloadCardImage, copyCardImageToClipboard }) => (
  <div className="flex flex-col items-center">
    <div ref={cardRef} className="card py-4 px-2 rounded-lg shadow-lg w-72 bg-slate-100 border-2 border-black">
      <h2 className="text-xl font-bold mb-2 text-center">
        {card.cardName || "Generated Card!"}
      </h2>
      {card.customSprite ? (
        <img src={card.customSprite} alt="Custom Card Sprite" className="mb-4 mx-auto h-56 w-full object-contain" />
      ) : (
        <img src={card.cardSprite} alt="Card Sprite" className="mb-4 mx-auto h-56 w-full object-contain" />
      )}
      <div className="flex justify-around items-center mb-2 text-xl">
        <div className="flex items-center">
          <FaBullseye className="mr-0.5 text-red-500" /> {card.Accuracy}
        </div>
        <div className="flex items-center">
          <LuSword className="mr-0.5 text-gray-500" /> {card.Retaliation}
        </div>
        <div className="flex items-center">
          <FaShieldAlt className="mr-0.5 text-blue-500" /> {card.Damage}
        </div>
        <div className="flex items-center">
          <FaHeart className="mr-0.5 text-red-500" /> {card.HealthPoints}
        </div>
      </div>
      <div className="flex flex-col justify-around items-center mb-2 text-xl">
        <h4 className="font-bold mb-1">Ability: <i className='font-normal'>{card.rarity}</i></h4>
        <div>
          <p className="mb-1 text-sm"><strong>If:</strong> {card.Trigger}</p>
          <p className="mb-1 text-sm"><strong>Then:</strong> {card.Effect}</p>
        </div>
      </div>
    </div>

    <div className="mt-4 flex gap-1 justify-between w-80">
      <Button
        onClick={downloadCardImage}
        color="blue"
      >
        Download Image
      </Button>
      <Button
        onClick={copyCardImageToClipboard}
        color="blue"
      >
        Copy to Clipboard
      </Button>
    </div>
  </div>
);

export default Card;
