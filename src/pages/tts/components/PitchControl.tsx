import React from 'react';
import { Volume2 } from 'lucide-react';

interface PitchControlProps {
  pitch: number;
  onPitchChange: (pitch: number) => void;
}

const PitchControl: React.FC<PitchControlProps> = ({ pitch, onPitchChange }) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onPitchChange(parseFloat(e.target.value));
  };

  const presetValues = [
    { label: 'Low', value: 0.5 },
    { label: 'Normal', value: 1 },
    { label: 'High', value: 1.5 },
    { label: 'Very High', value: 2 }
  ];

  return (
    <div>
      <label className="text-sm font-semibold text-gray-700 mb-3 block">
        Pitch: {pitch.toFixed(2)}
      </label>
      
      <input
        type="range"
        min="0.1"
        max="2"
        step="0.1"
        value={pitch}
        onChange={handleChange}
        className="w-full h-3 bg-gradient-to-r from-blue-200 to-indigo-200 rounded-full appearance-none cursor-pointer slider"
      />
      
      <div className="flex justify-between mt-4 gap-2">
        {presetValues.map((preset) => (
          <button
            key={preset.label}
            onClick={() => onPitchChange(preset.value)}
            className={`px-3 py-2 text-xs rounded-lg font-medium transition-all duration-200 ${
              Math.abs(pitch - preset.value) < 0.1
                ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-md'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200 hover:scale-105'
            }`}
          >
            {preset.label}
          </button>
        ))}
      </div>
      
      <div className="flex justify-between text-xs text-gray-400 mt-3">
        <span>0.1</span>
        <span>2.0</span>
      </div>
    </div>
  );
};

export default PitchControl;