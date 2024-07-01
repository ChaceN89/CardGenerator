import React, { useState, useRef } from 'react';
import { FaBullseye, FaShieldAlt, FaHeart } from 'react-icons/fa';
import { LuSword } from 'react-icons/lu';
import generateRandomCardStats from './card-logic/CardGenerator';
import { generateRandomDefaultCard } from './card-logic/DefaultCardData';
import { toPng } from 'html-to-image';
import { toast, Toaster } from 'react-hot-toast';

function App() {
  const [card, setCard] = useState(null);
  const [isCustom, setIsCustom] = useState(true);
  const [customText, setCustomText] = useState('');
  const [customImage, setCustomImage] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const cardRef = useRef();

  const handleImageUpload = (e) => {
    setCustomImage(URL.createObjectURL(e.target.files[0]));
  };

  const handleCustomTextChange = (e) => {
    setCustomText(e.target.value);
  };

  const generateCustomCard = () => {
    const newCard = generateRandomCardStats();
    newCard.cardName = customText;
    newCard.customSprite = customImage;
    setCard(newCard);
  };

  const generateDefaultCard = () => {
    const defaultCard = generateRandomDefaultCard();
    const newCard = generateRandomCardStats();
    newCard.cardName = defaultCard.name;
    newCard.cardSprite = `${process.env.PUBLIC_URL}/cardImages/${defaultCard.filePath}`;
    setCard(newCard);
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
    <div className="min-h-screen flex flex-col items-center justify-start bg-gray-200 p-4">
      <Toaster />

      <div className="mb-8 flex">
        <button
          onClick={() => setIsCustom(true)}
          className={`mr-4 px-6 py-2 bg-blue-600 text-white font-semibold rounded-md shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-75 ${
            isCustom ? 'border-4 border-double border-black' : ''
          }`}
        >
          Custom Cards
        </button>
        <button
          onClick={() => setIsCustom(false)}
          className={`px-6 py-2 bg-green-600 text-white font-semibold rounded-md shadow-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-75 ${
            !isCustom ? 'border-4 border-double border-black' : ''
          }`}
        >
          Default Cards
        </button>
        <button
          onClick={() => setIsModalOpen(true)}
          className="ml-4 px-6 py-2 bg-yellow-600 text-white font-semibold rounded-md shadow-md hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-opacity-75"
        >
          Info
        </button>
      </div>

      {isCustom ? (
        <div className="mb-8">
          <input
            id="file-upload"
            type="file"
            accept="image/png, image/jpeg, image/jpg"
            onChange={handleImageUpload}
          />
          <input
            type="text"
            placeholder="Enter Card Name"
            value={customText}
            onChange={handleCustomTextChange}
            className="mb-4 p-2 border rounded-md mr-1"
          />
          <button
            onClick={generateCustomCard}
            className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-md shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-75"
          >
            Generate Custom Card
          </button>
        </div>
      ) : (
        <button
          onClick={generateDefaultCard}
          className="px-6 py-2 bg-green-600 text-white font-semibold rounded-md shadow-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-75 mb-10"
        >
          Generate Card
        </button>
      )}

      {card && (
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
            <button
              onClick={downloadCardImage}
              className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-md shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-75"
            >
              Download Image
            </button>
            <button
              onClick={copyCardImageToClipboard}
              className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-md shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-75"
            >
              Copy to Clipboard
            </button>
          </div>
        </div>
      )}

      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6  sm:max-w-lg md:max-w-xl w-full">
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
            <p className="mt-4 text-center">When a card is attacked, the attacker's accuracy is compared to the defender's defense. A roulette wheel is used to determine the winner, with the weights of accuracy and defense influencing the outcome. So if your attack is higher than the defenders defense you have a much higher chance of winning the fight.</p>
            <button
              onClick={() => setIsModalOpen(false)}
              className="mt-4 px-6 py-2 bg-blue-600 text-white font-semibold rounded-md shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-75 w-full"
            >
              Close
            </button>
          </div>
        </div>
      )}

    </div>
  );
}

export default App;
