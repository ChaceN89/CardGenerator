import React, { useState } from 'react';
import generateRandomCard from './card-logic/CardGenerator';

function App() {
  const [card, setCard] = useState(null);

  const generateCard = () => {
    const newCard = generateRandomCard();
    setCard(newCard);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-red-100">
      <button
        onClick={generateCard}
        className="mb-8 px-6 py-2 bg-blue-600 text-white font-semibold rounded-md shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-75"
      >
        Generate Card
      </button>
      {card && (
        <div className="card bg-white p-6 rounded-lg shadow-lg w-80">
          <h2 className="text-xl font-bold mb-4 ">Generated Card!</h2>
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
