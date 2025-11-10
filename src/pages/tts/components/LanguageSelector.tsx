import React from 'react';
// import { Globe } from 'lucide-react';

interface LanguageSelectorProps {
  selectedLanguage: string;
  onLanguageChange: (language: string) => void;
}

const LanguageSelector: React.FC<LanguageSelectorProps> = ({ 
  selectedLanguage, 
  onLanguageChange 
}) => {
  const languages = [
    { value: 'Indonesian', label: 'Indonesian' },
    // { value: 'English', label: 'English' },
    // { value: 'Japanese', label: 'Japanese' }
  ];

  return (
    <div>
      <label className="text-sm font-semibold text-gray-700 mb-3 block">
        Language
      </label>
      
      <select
        value={selectedLanguage}
        onChange={(e) => onLanguageChange(e.target.value)}
        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 bg-gray-50 hover:bg-white"
      >
        <option value="">Select language...</option>
        {languages.map((language) => (
          <option key={language.value} value={language.value}>
            {language.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default LanguageSelector;