import React, { useState } from 'react';
import Card from './components/Card';
import InfoModal from './components/InfoModal';
import Button from './components/Button';
import generateRandomCardStats from './card-logic/CardGenerator';
import { generateRandomDefaultCard } from './card-logic/DefaultCardData';
import { Toaster } from 'react-hot-toast';

function App() {
  const [card, setCard] = useState(null);
  const [isCustom, setIsCustom] = useState(true);
  const [customText, setCustomText] = useState('');
  const [customImage, setCustomImage] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

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

  return (
    <div className="min-h-screen flex flex-col items-center justify-start bg-gray-200 p-4">
      <Toaster />

      <div className="mb-8 flex">
        <Button
          onClick={() => setIsCustom(true)}
          color="blue"
          isActive={isCustom}
          className="mr-4"
        >
          Custom Cards
        </Button>
        <Button
          onClick={() => setIsCustom(false)}
          color="green"
          isActive={!isCustom}
        >
          Default Cards
        </Button>
        <Button
          onClick={() => setIsModalOpen(true)}
          color="yellow"
          className="ml-4"
        >
          Info
        </Button>
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
          <Button
            onClick={generateCustomCard}
            color="blue"
          >
            Generate Custom Card
          </Button>
        </div>
      ) : (
        <Button
          onClick={generateDefaultCard}
          color="green"
          className="mb-10"
        >
          Generate Card
        </Button>
      )}

      {card && (
        <Card card={card} />
      )}

      <InfoModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}

export default App;
