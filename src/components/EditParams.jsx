import React from 'react';
import Button from './Button';

const EditParams = ({ isOpen, onClose, globalCardStats, usePointDistributionSystem }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 max-w-lg w-full">
        <h2 className="text-xl font-bold mb-4 text-center">Edit Generation Parameters</h2>
        <div className="mb-4">
          <h3 className="text-lg font-bold mb-2">Point Distribution System</h3>
          <p>{usePointDistributionSystem ? 'Enabled' : 'Disabled'}</p>
        </div>
        <div className="mb-4">
          <h3 className="text-lg font-bold mb-2">Global Card Stats</h3>
          <ul className="list-disc list-inside">
            <li><strong>Health Range:</strong> {globalCardStats.healthRange.join(' - ')}</li>
            <li><strong>Damage Range:</strong> {globalCardStats.damageRange.join(' - ')}</li>
            <li><strong>Defence Range:</strong> {globalCardStats.defenceRange.join(' - ')}</li>
            <li><strong>Accuracy Range:</strong> {globalCardStats.accuracyRange.join(' - ')}</li>
            <li><strong>Distribution Points:</strong> {globalCardStats.distributionPoints}</li>
          </ul>
        </div>
        <Button onClick={onClose} color="blue" className="w-full">
          Close
        </Button>
      </div>
    </div>
  );
};

export default EditParams;
