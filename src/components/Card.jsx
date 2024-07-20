import React, { useRef, useState } from 'react';
import { FaBullseye, FaShieldAlt, FaHeart } from 'react-icons/fa';
import { LuSword } from 'react-icons/lu';
import Button from './Button';
import { toPng } from 'html-to-image';
import { toast } from 'react-hot-toast';

const Card = ({ card }) => {
  const cardRef = useRef();
  const [hideStats, setHideStats] = useState(false);

  const getBorderColor = (rarity) => {
    switch (rarity) {
      case 'Rare':
        return 'border-red-900';
      case 'Uncommon':
        return 'border-blue-800';
      default:
        return 'border-green-300';
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

  const copyCardToClipboard = () => {
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

  const copyCardTextToClipboard = () => {
    const htmlToCopy = `
      <div style="font-size: 7px; display: flex; justify-content: space-around; align-items: center; margin-bottom: 8px;">
        <div style="display: flex; align-items: center;">
          <span style="color: red; margin-right: 4px;">&#x1F3AF;</span> 
          <span style="font-size: 6px; margin-right: 20px;">${card.AccuracyPoints}</span> &nbsp;&nbsp;
          <span style="color: gray; margin-right: 4px;">&#x1F5E1;</span> 
          <span style="font-size: 6px; margin-right: 20px;">${card.DefencePoints}</span> &nbsp;&nbsp;
          <span style="color: blue; margin-right: 4px;">&#x1F6E1;</span> 
          <span style="font-size: 6px; margin-right: 20px;">${card.DamagePoints}</span> &nbsp;&nbsp;
          <span style="color: red; margin-right: 4px;">&#x2764;</span> 
          <span style="font-size: 6px; margin-right: 20px;">${card.HealthPoints} / ${card.HealthPoints}</span>
        </div>
      </div>
      <div style="font-size: 6px;">
        <p style="margin-bottom: 2px;"><strong>If:</strong> ${card.Trigger}</p>
        <p style="margin-bottom: 2px;"><strong>Then:</strong> ${card.Effect}</p>
      </div>
    `;

    const blob = new Blob([htmlToCopy], { type: 'text/html' });
    const item = new ClipboardItem({ 'text/html': blob });

    navigator.clipboard.write([item])
      .then(() => {
        toast.success('Text copied to clipboard!');
      })
      .catch((error) => {
        console.error('Oops, something went wrong!', error);
      });
  };

  const copyCardImageToClipboard = () => {
    setHideStats(true);
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
      })
      .finally(() => {
        setHideStats(false);
      });
  };

  return (
    <div className="flex flex-col items-center">
      <div
        ref={cardRef}
        className={`card py-4 px-2 rounded-lg shadow-lg w-72 bg-slate-100 border-4 min-h-[440px] ${getBorderColor(
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
            className="mb-4 mx-auto h-44 w-full object-contain"
          />
        ) : (
          <img
            src={card.cardSprite}
            alt="Card Sprite"
            className="mb-4 mx-auto h-44 w-full object-contain"
          />
        )}
        <div className={`flex justify-around items-center mb-2 text-xl card-stats ${hideStats ? 'hidden' : ''}`}>
          <div className="flex items-center">
            <FaBullseye className="mr-0.5 text-red-500" /> {card.AccuracyPoints}
          </div>
          <div className="flex items-center">
            <LuSword className="mr-0.5 text-gray-500" /> {card.DamagePoints}
          </div>
          <div className="flex items-center">
            <FaShieldAlt className="mr-0.5 text-blue-500" /> {card.DefencePoints}
          </div>
          <div className="flex items-center">
            <FaHeart className="mr-0.5 text-red-500" /> {card.HealthPoints} / {card.HealthPoints}
          </div>
        </div>

        <div className={`flex flex-col justify-around items-center mb-2 text-xl ${hideStats ? 'hidden' : ''}`}>
          <div>
            <p className="mb-1 text-sm card-stats">
              <strong>If:</strong> {card.Trigger}
            </p>
            <p className="mb-1 text-sm card-stats">
              <strong>Then:</strong> {card.Effect}
            </p>
          </div>
        </div>
      </div>

      <div className="mt-4 grid grid-cols-2 gap-1">
        <Button onClick={copyCardImageToClipboard} color="blue">
          Copy Card & Image
        </Button>
        <Button onClick={copyCardTextToClipboard} color="blue">
          Copy Stats
        </Button>
        <hr className='col-span-2 border-2 border-blue-500'/>
        <Button onClick={copyCardToClipboard} color="blue">
          Copy Whole Card 
        </Button>
        <Button onClick={downloadCardImage} color="blue">
          Download Card
        </Button>
      </div>
    </div>
  );
};

export default Card;
