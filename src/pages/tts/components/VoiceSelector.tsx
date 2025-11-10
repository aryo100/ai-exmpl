import React from 'react';
import { User } from 'lucide-react';

interface VoiceModel {
  name: string;
  label: string;
  ckpt_path: string;
  index_path: string;
}

interface VoiceSelectorProps {
  selectedVoice: VoiceModel | null;
  onVoiceChange: (voice: VoiceModel) => void;
}

const VoiceSelector: React.FC<VoiceSelectorProps> = ({ 
  selectedVoice, 
  onVoiceChange 
}) => {
  const voiceModels: VoiceModel[] = [
    // {
    //   "name": "EvilNeuroSama-Quiet",
    //   "label": "Evil NeuroSama (Quiet)",
    //   "ckpt_path": "EvilNeuroSama-Quiet_500e_4500s.pth",
    //   "index_path": "EvilNeuroSama-Quiet.index"
    // },
    // {
    //   "name": "HastuneMikuElevenLabs",
    //   "label": "Hatsune Miku ElevenLabs",
    //   "ckpt_path": "assets/weights/HastuneMikuElevenLabs.pth",
    //   "index_path": "assets/weights/added_IVF28_Flat_nprobe_1_HastuneMikuElevenLabs_v2.index"
    // },
    {
      "name": "zeta",
      "label": "Zeta",
      "ckpt_path": "zeta.pth",
      "index_path": "added_IVF409_Flat_nprobe_1.index"
    },
    {
      "name": "kobov2",
      "label": "Kobo",
      "ckpt_path": "kobov2.pth",
      "index_path": "added_IVF454_Flat_nprobe_1_kobov2_v2.index"
    },
    {
      "name": "chamber",
      "label": "Chamber",
      "ckpt_path": "Chamber.pth",
      "index_path": "added_IVF746_Flat_nprobe_1_Chamber_v2.index"
    },
    // {
    //   "name": "zet_small",
    //   "label": "Zet Small",
    //   "ckpt_path": "assets/weights/zet.pth",
    //   "index_path": "logs/zet/added_IVF512_Flat_mi_baseline_src_feat.index"
    // }
  ];

  return (
    <div>
      <label className="text-sm font-semibold text-gray-700 mb-3 block">
        Voice Model
      </label>
      
      <select
        value={selectedVoice?.name || ''}
        onChange={(e) => {
          const voice = voiceModels.find(v => v.name === e.target.value);
          if (voice) onVoiceChange(voice);
        }}
        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 bg-gray-50 hover:bg-white"
      >
        <option value="">Select a voice model...</option>
        {voiceModels.map((voice) => (
          <option key={voice.name} value={voice.name}>
            {voice.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default VoiceSelector;