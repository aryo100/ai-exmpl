import React from 'react';
import { User, ChevronDown, Image } from 'lucide-react';

interface VoiceModel {
  name: string;
  label: string;
  ckpt_path: string;
  index_path: string;
  photo?: string;
}

interface VoiceSelectorProps {
  selectedVoice: VoiceModel | null;
  onOpenModal: () => void;
}

const VoiceSelector: React.FC<VoiceSelectorProps> = ({ 
  selectedVoice, 
  onOpenModal
}) => {

  return (
    <div>
      <label className="text-sm font-semibold text-gray-700 mb-3 block">
        Voice Model
      </label>
      
      <button
        onClick={onOpenModal}
        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 bg-gray-50 hover:bg-white text-left flex items-center justify-between gap-3"
      >
        <div className="flex items-center gap-3 flex-1">
          {selectedVoice ? (
            <>
              <div className="relative">
                <img
                  src={selectedVoice.photo}
                  alt={selectedVoice.label}
                  className="w-8 h-8 object-cover rounded-full"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    target.nextElementSibling?.classList.remove('hidden');
                  }}
                />
                <div className="hidden w-8 h-8 bg-gradient-to-br from-gray-100 to-gray-200 rounded-full flex items-center justify-center">
                  <User className="h-4 w-4 text-gray-400" />
                </div>
              </div>
              <span className="text-gray-900 font-medium">{selectedVoice.label}</span>
            </>
          ) : (
            <>
              <div className="w-8 h-8 bg-gradient-to-br from-gray-100 to-gray-200 rounded-full flex items-center justify-center">
                <Image className="h-4 w-4 text-gray-400" />
              </div>
              <span className="text-gray-500">Select a voice model...</span>
            </>
          )}
        </div>
        <ChevronDown className="h-5 w-5 text-gray-400" />
      </button>
    </div>
  );
};

export default VoiceSelector;