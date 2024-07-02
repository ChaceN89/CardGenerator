import React, { useState, useEffect } from 'react';
import Button from './Button';
import { useCardStats } from '../card-logic/CardStats';

const EditParams = ({ isOpen, onClose }) => {
  const { globalCardStats, setGlobalCardStats, usePointDistributionSystem, setUsePointDistributionSystem } = useCardStats();
  const [localStats, setLocalStats] = useState(globalCardStats);
  const [localUsePointDistribution, setLocalUsePointDistribution] = useState(usePointDistributionSystem);

  useEffect(() => {
    setLocalStats(globalCardStats);
    setLocalUsePointDistribution(usePointDistributionSystem);
  }, [globalCardStats, usePointDistributionSystem]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    const [stat, range] = name.split('_');
    const newValue = Number(value);

    setLocalStats((prevStats) => {
      const updatedStats = { ...prevStats };
      if (range === '0') {
        // Ensure min is not more than 1 less than max
        if (newValue >= updatedStats[stat][1]) {
          updatedStats[stat][1] = newValue;
        }
        updatedStats[stat][0] = newValue;
      } else {
        // Ensure max is not less than min + 1
        if (newValue <= updatedStats[stat][0]) {
          updatedStats[stat][0] = newValue ;
        }
        updatedStats[stat][1] = newValue;
      }
      return updatedStats;
    });
  };

  const handleToggle = () => {
    setLocalUsePointDistribution(!localUsePointDistribution);
  };

  const handleSave = () => {
    setGlobalCardStats(localStats);
    setUsePointDistributionSystem(localUsePointDistribution);
    onClose();
  };

  const minDistributionPoints = Object.values(localStats).reduce((sum, stat) => sum + stat[0], 0);
  const maxDistributionPoints = Object.values(localStats).reduce((sum, stat) => sum + stat[1], 0);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 max-w-lg w-full">
        <h2 className="text-xl font-bold mb-4 text-center">Edit Generation Parameters</h2>
        <div className="mb-4">
          <h3 className="text-lg font-bold mb-2">Point Distribution System</h3>
          <label className="flex items-center">
            <input
              type="checkbox"
              checked={localUsePointDistribution}
              onChange={handleToggle}
              className="toggle-checkbox"
            />
            <span className="ml-2">{localUsePointDistribution ? 'Enabled' : 'Disabled'}</span>
          </label>
        </div>
        <div className="mb-4">
          <h3 className="text-lg font-bold mb-2 text-center">Global Card Stats</h3>
          <ul className="list-disc list-inside">
            {['healthRange', 'damageRange', 'defenceRange', 'accuracyRange'].map((stat) => (
              <li key={stat}>
                <strong>{`${stat.replace('Range', ' Range').charAt(0).toUpperCase() + stat.slice(1)}:`}</strong>
                <div className="flex space-x-2 w-full">
                  <input
                    type="number"
                    name={`${stat}_0`}
                    min={0}
                    max={99}
                    value={localStats[stat][0]}
                    onChange={handleChange}
                    className="p-1 border rounded-md w-full "
                  />
                  <div> - </div>
                  <input
                    type="number"
                    name={`${stat}_1`}
                    min={1}
                    max={100}
                    value={localStats[stat][1]}
                    onChange={handleChange}
                    className="p-1 border rounded-md w-full"
                  />
                </div>
              </li>
            ))}
            <li className='pt-2'>
              <strong className='pr-4'>Distribution Points:</strong>
              <input
                type="number"
                name="distributionPoints"
                value={localStats.distributionPoints}
                max={maxDistributionPoints}
                min={minDistributionPoints}
                onChange={(e) => setLocalStats({ ...localStats, distributionPoints: Number(e.target.value) })}
                className="ml-2 p-1 border rounded-md"
              />
            </li>
          </ul>
        </div>
        <Button onClick={handleSave} color="blue" className="w-full mb-2">
          Save
        </Button>
        <Button onClick={onClose} color="red" className="w-full mb-2">
          Close
        </Button>
      </div>
    </div>
  );
};

export default EditParams;
