import React from 'react';
import { Users } from 'lucide-react';

interface GenderSelectorProps {
  selectedGender: string;
  onGenderChange: (gender: string) => void;
}

const GenderSelector: React.FC<GenderSelectorProps> = ({ 
  selectedGender, 
  onGenderChange 
}) => {
  const genders = [
    { value: 'Female', label: 'Female' },
    { value: 'Male', label: 'Male' }
  ];

  return (
    <div>
      <label className="text-sm font-semibold text-gray-700 mb-3 block">
        Gender
      </label>
      
      <select
        value={selectedGender}
        onChange={(e) => onGenderChange(e.target.value)}
        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 bg-gray-50 hover:bg-white"
      >
        <option value="">Select gender...</option>
        {genders.map((gender) => (
          <option key={gender.value} value={gender.value}>
            {gender.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default GenderSelector;