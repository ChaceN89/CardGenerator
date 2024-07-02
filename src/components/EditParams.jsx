import React from 'react';
import Button from './Button';
import { useGlobalCardStats } from '../card-logic/CardStats';

const EditParams = ({ isOpen, onClose }) => {
  const { 
    globalCardStats, setGlobalCardStats, usePointDistributionSystem, setUsePointDistributionSystem, resetGlobalCardStats
  } = useGlobalCardStats();

  const handleChange = (e) => {
    const { name, value } = e.target;
    const [stat, range] = name.split('_');
    const newValue = Number(value);

    setGlobalCardStats((prevStats) => {
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
      return { ...updatedStats }; // Ensure a new object reference
    });
  };

  const handleToggle = () => {
    setUsePointDistributionSystem(!usePointDistributionSystem);
  };

  const handleSave = () => {
    onClose();
  };

  const resetStats = () => {
    resetGlobalCardStats();

  };

  // return if its not open
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 max-w-lg w-full">
        <h2 className="text-2xl font-bold mb-4 text-center">Edit Generation Parameters</h2>
        <div className="">
          <h3 className="text-lg font-bold mb-2 underline">Global Card Stats</h3>
          <ul className="list-disc list-inside">
            {['healthRange', 'damageRange', 'defenceRange', 'accuracyRange'].map((stat) => (
              <li key={stat} className='py-0.5'>
                <strong>{`${stat.replace('Range', ' Range').charAt(0).toUpperCase() + stat.slice(1)}:`}</strong>
                <div className="flex space-x-2 w-full">
                  <input
                    type="number"
                    name={`${stat}_0`}
                    min={0}
                    max={99}
                    value={globalCardStats[stat][0]}
                    onChange={handleChange}
                    className="p-1 border rounded-md w-full"
                  />
                  <div> - </div>
                  <input
                    type="number"
                    name={`${stat}_1`}
                    min={1}
                    max={100}
                    value={globalCardStats[stat][1]}
                    onChange={handleChange}
                    className="p-1 border rounded-md w-full"
                  />
                </div>
              </li>
            ))}

          </ul>

          <hr className=' border-b-2 border-black my-3 '/>

          <div className="mb-4">
            <h3 className="text-lg font-bold mb-2 underline">Point Distribution System</h3>
            <label className="flex items-center">
              <input
                type="checkbox"
                checked={usePointDistributionSystem}
                onChange={handleToggle}
                className="toggle-checkbox"
              />
              <span className="ml-2">{usePointDistributionSystem ? 'Enabled' : 'Disabled'}</span>
            </label>

            <li className='pt-2 w-full'>
              <strong className='pr-4'>Distribution Points:</strong>
              <input
                type="number"
                name="distributionPoints"
                value={globalCardStats.distributionPoints}
                min={0}
                max={100}
                onChange={(e) => setGlobalCardStats({ ...globalCardStats, distributionPoints: Number(e.target.value) })}
                className=" p-1 border rounded-md  w-full"
                />
            </li>

          </div>



        </div>
          <hr className=' border-b-2 border-black my-3 '/>
        <Button onClick={handleSave} color="blue" className="w-full mb-2">
          Save and Close
        </Button>
        <Button onClick={resetStats} color="red" className="w-full mb-2">
          Reset Stats
        </Button>
      </div>
    </div>
  );
};

export default EditParams;
