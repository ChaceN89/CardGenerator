import React, { useState } from 'react';
import generateRandomCardStats from './card-logic/CardGenerator';
import { generateRandomDefaultCard } from './card-logic/DefaultCardData';

function App() {
  const [card, setCard] = useState(null);
  const [isCustom, setIsCustom] = useState(false);
  const [customText, setCustomText] = useState('');
  const [customImage, setCustomImage] = useState(null);

  const handleImageUpload = (e) => {
    setCustomImage(URL.createObjectURL(e.target.files[0]));
  };

  const handleCustomTextChange = (e) => {
    setCustomText(e.target.value);
  };

  const generateCustomCard = () => {
    const newCard = generateRandomCardStats();
    newCard.customText = customText;
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

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-red-100">
      <div className="mb-8 flex">
        <button
          onClick={() => setIsCustom(true)}
          className="mr-4 px-6 py-2 bg-blue-600 text-white font-semibold rounded-md shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-75"
        >
          Create Custom Card
        </button>
        <button
          onClick={() => setIsCustom(false)}
          className="px-6 py-2 bg-green-600 text-white font-semibold rounded-md shadow-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-75"
        >
          Generate Default Card
        </button>
      </div>

      {isCustom ? (
        <div className="mb-8">
          <input
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            className="mb-4"
          />
          <input
            type="text"
            placeholder="Enter custom text"
            value={customText}
            onChange={handleCustomTextChange}
            className="mb-4 p-2 border rounded-md"
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
          className="px-6 py-2 bg-green-600 text-white font-semibold rounded-md shadow-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-75"
        >
          Generate Default Card
        </button>
      )}

      {card && (
        <div className="card bg-white p-6 rounded-lg shadow-lg w-80">
          <h2 className="text-xl font-bold mb-4">
            {card.cardName || "Generated Card!"}
          </h2>
          {card.customSprite ? (
            <img src={card.customSprite} alt="Custom Card Sprite" className="mb-4" />
          ) : (
            <img src={card.cardSprite} alt="Card Sprite" className="mb-4" />
          )}
          <p className="mb-2"><strong>Custom Text:</strong> {card.customText}</p>
          <p className="mb-2"><strong>Accuracy:</strong> {card.Accuracy}</p>
          <p className="mb-2"><strong>Retaliation:</strong> {card.Retaliation}</p>
          <p className="mb-2"><strong>Damage:</strong> {card.Damage}</p>
          <p className="mb-2"><strong>Health Points:</strong> {card.HealthPoints}</p>
          <p className="mb-2"><strong>Rarity:</strong> {card.abilityRarity}</p>
          <p className="mb-2"><strong>Trigger:</strong> {card.Trigger}</p>
          <p className="mb-2"><strong>Effect:</strong> {card.Effect}</p>
        </div>
      )}
    </div>
  );
}

export default App;
