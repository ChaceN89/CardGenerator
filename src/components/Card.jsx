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
          <span style="font-size: 6px; margin-right: 20px;">${card.Accuracy}</span> &nbsp;&nbsp;
          <span style="color: gray; margin-right: 4px;">&#x1F5E1;</span> 
          <span style="font-size: 6px; margin-right: 20px;">${card.Retaliation}</span> &nbsp;&nbsp;
          <span style="color: blue; margin-right: 4px;">&#x1F6E1;</span> 
          <span style="font-size: 6px; margin-right: 20px;">${card.Damage}</span> &nbsp;&nbsp;
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
    const originalStats = cardRef.current.querySelectorAll('.card-stats');
    const originalStatsContent = Array.from(originalStats).map(stat => stat.innerHTML);
  
    // Set stats content to blank
    originalStats.forEach(stat => {
      stat.innerHTML = '&nbsp;&nbsp;&nbsp;<br/>';
    });
  
    // Generate the PNG and copy to clipboard
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
        // Restore the original stats content
        originalStats.forEach((stat, index) => {
          stat.innerHTML = originalStatsContent[index];
        });
      });
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
        <div className="flex justify-around items-center mb-2 text-xl card-stats">
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
            <FaHeart className="mr-0.5 text-red-500" /> {card.HealthPoints} / {card.HealthPoints}
          </div>
        </div>

        <div className="flex flex-col justify-around items-center mb-2 text-xl">
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
        <Button onClick={copyCardTextToClipboard} color="blue">
          Copy Stats
        </Button>
        <Button onClick={copyCardImageToClipboard} color="blue">
          Copy Card Image
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
