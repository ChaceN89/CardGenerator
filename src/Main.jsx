import React, { useState } from 'react';
import Card from './components/Card';
import InfoModal from './components/InfoModal';
import EditParams from './components/EditParams';
import TriggerList from './components/TriggerList';
import Button from './components/Button';
import generateRandomCardStats from './card-logic/CardGenerator';
import { generateRandomDefaultCard } from './card-logic/DefaultCardData';
import { useGlobalCardStats } from './card-logic/CardStats';

function Main() {
  const { globalCardStats, usePointDistributionSystem } = useGlobalCardStats();
  const [card, setCard] = useState(null);
  const [isCustom, setIsCustom] = useState(true);
  const [customText, setCustomText] = useState('');
  const [customImage, setCustomImage] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditParamsOpen, setIsEditParamsOpen] = useState(false);
  const [isTriggerListOpen, setIsTriggerListOpen] = useState(false); // New state for TriggerList modal
  const [cardHistory, setCardHistory] = useState([]);

  const handleImageUpload = (e) => {
    setCustomImage(URL.createObjectURL(e.target.files[0]));
  };

  const handleCustomTextChange = (e) => {
    setCustomText(e.target.value);
  };

  const updateCardHistory = (newCard) => {
    setCardHistory((prevHistory) => {
      const updatedHistory = [newCard, ...prevHistory];
      return updatedHistory.slice(0, 40); // Keep only the last 40 cards including active card
    });
  };

  const generateCustomCard = () => {
    const newCard = generateRandomCardStats(globalCardStats, usePointDistributionSystem);
    newCard.cardName = customText;
    newCard.customSprite = customImage;
    setCard(newCard);
    updateCardHistory(newCard);
  };

  const generateDefaultCard = () => {
    const defaultCard = generateRandomDefaultCard();
    const newCard = generateRandomCardStats(globalCardStats, usePointDistributionSystem);
    newCard.cardName = defaultCard.name;
    newCard.cardSprite = `${process.env.PUBLIC_URL}/cardImages/${defaultCard.filePath}`;
    setCard(newCard);
    updateCardHistory(newCard);
  };

  return (
    <>
      <div className="mb-8 grid grid-cols-2 sm:flex gap-2">
        <Button onClick={() => setIsCustom(true)} color="blue" isActive={isCustom}>
          Custom Cards
        </Button>
        <Button onClick={() => setIsCustom(false)} color="green" isActive={!isCustom}>
          Default Cards
        </Button>
        <div className="hidden sm:block border-l-2 border-blue-500 mx-2"></div> {/* Vertical line */}
        <Button onClick={() => setIsEditParamsOpen(true)} color="yellow">
          Edit Generation Parameters
        </Button>
        <Button onClick={() => setIsModalOpen(true)} color="yellow">
          Game Info
        </Button>
        <Button onClick={() => setIsTriggerListOpen(true)} color="yellow">
          Trigger List
        </Button>
      </div>

      {isCustom ? (
        <div className="mb-8 text-center">
          <input
            type="text"
            placeholder="Enter Card Name"
            value={customText}
            onChange={handleCustomTextChange}
            className="mb-4 p-2 border rounded-md mr-1"
          />
          <input
            id="file-upload"
            type="file"
            accept="image/png, image/jpeg, image/jpg"
            onChange={handleImageUpload}
          />
          <Button onClick={generateCustomCard} color="blue">
            Generate Custom Card
          </Button>
        </div>
      ) : (
        <Button onClick={generateDefaultCard} color="green" className="mb-10">
          Generate New Card
        </Button>
      )}

      {card && <Card card={card} />}

      {cardHistory.length > 1 && (
        <>
          <hr className="mt-14 w-full border-2 border-blue-500" />
          <h2 className="text-2xl font-bold my-4 underline">Card History</h2>
          <div className="flex overflow-x-auto mt-8 pb-4 space-x-4 w-full">
            <div className="flex space-x-4 items-center">
              {cardHistory.slice(1).map((card, index) => (
                <React.Fragment key={index}>
                  {index > 0 && <div className="h-full border-l-2 border-blue-500 mx-4"></div>}
                  <div className="flex-shrink-0">
                    <Card card={card} />
                  </div>
                </React.Fragment>
              ))}
            </div>
          </div>
        </>
      )}

      {/* modal popups */}
      <InfoModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      <EditParams isOpen={isEditParamsOpen} onClose={() => setIsEditParamsOpen(false)} />
      <TriggerList isOpen={isTriggerListOpen} onClose={() => setIsTriggerListOpen(false)} /> {/* New TriggerList modal */}
    </>
  );
}

export default Main;
