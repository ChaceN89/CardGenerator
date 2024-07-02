import React from 'react';
import { triggersAndEffects } from '../card-logic/TriggersAndEffect';
import Button from './Button';

const TriggerList = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 sm:max-w-lg md:max-w-xl w-full">
        <h2 className="text-xl font-bold mb-4 text-center">Triggers and Effects</h2>
        <div className="max-h-96 overflow-y-auto">
          {triggersAndEffects.map((item, index) => (
            <div key={index} className="mb-4">
              <h3 className="text-lg font-semibold">{item.trigger}</h3>
              <ul className="list-disc list-inside ml-4">
                {item.effects.map((effect, idx) => (
                  <li key={idx}>{effect.name}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <Button onClick={onClose} color="blue" className="mt-4 w-full">
          Close
        </Button>
      </div>
    </div>
  );
};

export default TriggerList;
