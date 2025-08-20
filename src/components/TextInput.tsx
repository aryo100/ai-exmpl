import React from 'react';
import { Type } from 'lucide-react';

interface TextInputProps {
  text: string;
  onTextChange: (text: string) => void;
}

const TextInput: React.FC<TextInputProps> = ({ text, onTextChange }) => {
  const maxLength = 5000;
  const characterCount = text.length;
  
  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <span className={`text-sm ${characterCount > maxLength * 0.9 ? 'text-red-500' : 'text-gray-500'}`}>
          {characterCount}/{maxLength}
        </span>
      </div>
      
      <textarea
        value={text}
        onChange={(e) => onTextChange(e.target.value)}
        placeholder="Enter the text you want to convert to speech..."
        maxLength={maxLength}
        className="w-full h-80 px-6 py-4 border border-gray-200 rounded-xl resize-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 text-gray-700 leading-relaxed bg-gray-50 hover:bg-white text-lg"
      />
      
      <div className="mt-6 flex flex-wrap gap-3">
        {[
          "Hello, this is a test of the text-to-speech system.",
          "The quick brown fox jumps over the lazy dog.",
          "Welcome to our text-to-speech workspace. Please enter your text above."
        ].map((sample, index) => (
          <button
            key={index}
            onClick={() => onTextChange(sample)}
            className="px-4 py-2 bg-gradient-to-r from-gray-100 to-gray-200 hover:from-blue-100 hover:to-indigo-100 text-gray-700 hover:text-blue-700 text-sm rounded-lg font-medium transition-all duration-200 transform hover:scale-105"
          >
            Sample {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default TextInput;