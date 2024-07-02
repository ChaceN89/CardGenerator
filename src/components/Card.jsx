import React, { useRef } from 'react';
import { FaBullseye, FaShieldAlt, FaHeart } from 'react-icons/fa';
import { LuSword } from 'react-icons/lu';
import Button from './Button';
import { toPng } from 'html-to-image';
import { toast } from 'react-hot-toast';

const Card = ({ card }) => {
  const cardRef = useRef();

  const getBorderColor = (rarity) => {
    switch (rarity) {
      case 'Rare':
        return 'border-yellow-500';
      case 'Uncommon':
        return 'border-blue-500';
      default:
        return 'border-green-500';
    }
  };

  const downloadCardImage = () => {
    if (cardRef.current) {
      toPng(cardRef.current)
        .then((dataUrl) => {
          const link = document.createElement('a');
          link.download = card.cardName + ".png" || "card.png";
          link.href = dataUrl;
          link.click();
        })
        .catch((error) => {
          console.error('Oops, something went wrong!', error);
        });
    }
  };

  const copyCardImageToClipboard = () => {
    if (cardRef.current) {
      toPng(cardRef.current)
        .then((dataUrl) => {
          fetch(dataUrl)
            .then(res => res.blob())
            .then(blob => {
              const item = new ClipboardItem({ 'image/png': blob });
              navigator.clipboard.write([item])
                .then(() => {
                  toast.success('Image copied to clipboard!');
                })
                .catch((error) => {
                  console.error('Oops, something went wrong!', error);
                });
            });
        });
    }
  };

  return (
    <div className="flex flex-col items-center">
      <div
        ref={cardRef}
        className={`card py-4 px-2 rounded-lg shadow-lg w-72 bg-slate-100 border-4 ${getBorderColor(
          card.rarity
        )}`}
      >
        <h2 className="text-xl font-bold mb-2 text-center">
          {card.cardName || 'Generated Card!'}
        </h2>
        {card.customSprite ? (
          <img
            src={card.customSprite}
            alt="Custom Card Sprite"
            className="mb-4 mx-auto h-56 w-full object-contain"
          />
        ) : (
          <img
            src={card.cardSprite}
            alt="Card Sprite"
            className="mb-4 mx-auto h-56 w-full object-contain"
          />
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
          <div>
            <p className="mb-1 text-sm">
              <strong>If:</strong> {card.Trigger}
            </p>
            <p className="mb-1 text-sm">
              <strong>Then:</strong> {card.Effect}
            </p>
          </div>
        </div>
      </div>

      <div className="mt-4 flex gap-1 justify-between w-80">
        <Button onClick={downloadCardImage} color="blue">
          Download Image
        </Button>
        <Button onClick={copyCardImageToClipboard} color="blue">
          Copy to Clipboard
        </Button>
      </div>
    </div>
  );
};

export default Card;
