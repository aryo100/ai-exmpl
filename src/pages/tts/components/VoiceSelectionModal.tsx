import React from 'react';
import { X, User } from 'lucide-react';

interface VoiceModel {
  name: string;
  label: string;
  ckpt_path: string;
  index_path: string;
  photo?: string;
}

interface VoiceSelectionModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedVoice: VoiceModel | null;
  onVoiceSelect: (voice: VoiceModel) => void;
}

const VoiceSelectionModal: React.FC<VoiceSelectionModalProps> = ({
  isOpen,
  onClose,
  selectedVoice,
  onVoiceSelect
}) => {
  if (!isOpen) return null;

  const voiceModels: VoiceModel[] = [
    // {
    //   "name": "EvilNeuroSama-Quiet",
    //   "label": "Evil NeuroSama (Quiet)",
    //   "ckpt_path": "EvilNeuroSama-Quiet_500e_4500s.pth",
    //   "index_path": "EvilNeuroSama-Quiet.index",
    //   "photo": "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
    // },
    // {
    //   "name": "HastuneMikuElevenLabs",
    //   "label": "Hatsune Miku ElevenLabs",
    //   "ckpt_path": "assets/weights/HastuneMikuElevenLabs.pth",
    //   "index_path": "assets/weights/added_IVF28_Flat_nprobe_1_HastuneMikuElevenLabs_v2.index",
    //   "photo": "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
    // },
    {
      "name": "zeta",
      "label": "Zeta",
      "ckpt_path": "zeta.pth",
      "index_path": "added_IVF409_Flat_nprobe_1.index",
      "photo": "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
    },
    {
      "name": "kobov2",
      "label": "Kobo",
      "ckpt_path": "kobov2.pth",
      "index_path": "added_IVF454_Flat_nprobe_1_kobov2_v2.index",
      "photo": "https://images.pexels.com/photos/3861458/pexels-photo-3861458.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
    },
    {
      "name": "chamber",
      "label": "Chamber",
      "ckpt_path": "Chamber.pth",
      "index_path": "added_IVF746_Flat_nprobe_1_Chamber_v2.index",
      "photo": "https://images.pexels.com/photos/3861972/pexels-photo-3861972.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
    },
    // {
    //   "name": "zet_small",
    //   "label": "Zet Small",
    //   "ckpt_path": "assets/weights/zet.pth",
    //   "index_path": "logs/zet/added_IVF512_Flat_mi_baseline_src_feat.index",
    //   "photo": "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
    // }
  ];

  const handleVoiceSelect = (voice: VoiceModel) => {
    onVoiceSelect(voice);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200 bg-gradient-to-r from-blue-50 to-indigo-50">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg">
              <User className="h-6 w-6 text-white" />
            </div>
            <h2 className="text-2xl font-bold text-gray-800">Select Voice Model</h2>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <X className="h-6 w-6 text-gray-600" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto max-h-[calc(90vh-120px)]">
          <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-8 gap-4">
            {voiceModels.map((voice) => (
              <div
                key={voice.name}
                onClick={() => handleVoiceSelect(voice)}
                className={`relative cursor-pointer rounded-lg border-2 transition-all duration-200 hover:scale-105 hover:shadow-md ${
                  selectedVoice?.name === voice.name
                    ? 'border-blue-500 bg-blue-50 shadow-md'
                    : 'border-gray-200 bg-white hover:border-gray-300'
                }`}
              >
                <div className="p-3 text-center">
                  {/* Photo */}
                  <div className="relative mb-3">
                    <img
                      src={voice.photo}
                      alt={voice.label}
                      className="w-full h-full object-cover rounded-lg"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                        target.nextElementSibling?.classList.remove('hidden');
                      }}
                    />
                    <div className="hidden w-full h-20 bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg flex items-center justify-center">
                      <User className="h-8 w-8 text-gray-400" />
                    </div>
                    
                    {/* Selected indicator */}
                    {selectedVoice?.name === voice.name && (
                      <div className="absolute top-1 right-1 w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center">
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                      </div>
                    )}
                  </div>

                  {/* Voice info */}
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1 text-sm">
                      {voice.label}
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="flex justify-end gap-3 p-6 border-t border-gray-200 bg-gray-50">
          <button
            onClick={onClose}
            className="px-6 py-2 text-gray-600 hover:text-gray-800 font-medium transition-colors"
          >
            Cancel
          </button>
          {selectedVoice && (
            <button
              onClick={onClose}
              className="px-6 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white rounded-lg font-medium transition-all duration-200"
            >
              Confirm Selection
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default VoiceSelectionModal;