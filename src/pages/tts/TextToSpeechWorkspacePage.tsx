import React, { useState } from 'react';
import { 
  Play, 
  Download, 
  // Mic, 
  Settings, 
  Sparkles,
  Zap,
  Volume2,
  Type,
  // Users,
  // Globe
} from 'lucide-react';
import VoiceSelector from './components/VoiceSelector';
import GenderSelector from './components/GenderSelector';
import LanguageSelector from './components/LanguageSelector';
import TextInput from './components/TextInput';
import PitchControl from './components/PitchControl';
import AudioPlayer from './components/AudioPlayer';

interface VoiceModel {
  name: string;
  label: string;
  ckpt_path: string;
  index_path: string;
}

interface TTSSettings {
  selectedVoice: VoiceModel | null;
  selectedGender: string;
  selectedLanguage: string;
  text: string;
  pitch: number;
}

const TextToSpeechWorkspacePage: React.FC = () => {
  // TTS Voice mapping based on gender and language
  // const ttsVoicesOld = [
  //   {"name": "id-ID-GadisNeural", "label": "Indonesian Female (Gadis)", "gender": "Female", "language": "Indonesian"},
  //   {"name": "id-ID-ArdiNeural", "label": "Indonesian Male (Ardi)", "gender": "Male", "language": "Indonesian"},
  //   {"name": "en-US-JennyNeural", "label": "English US Female (Jenny)", "gender": "Female", "language": "English"},
  //   {"name": "en-US-GuyNeural", "label": "English US Male (Guy)", "gender": "Male", "language": "English"},
  //   {"name": "ja-JP-NanamiNeural", "label": "Japanese Female (Nanami)", "gender": "Female", "language": "Japanese"},
  //   {"name": "ja-JP-KeitaNeural", "label": "Japanese Male (Keita)", "gender": "Male", "language": "Japanese"},
  // ];

  const ttsVoices = [
    {"name": "gadis", "label": "Indonesian Female (Gadis)", "gender": "Female", "language": "Indonesian"},
    {"name": "ardi", "label": "Indonesian Male (Ardi)", "gender": "Male", "language": "Indonesian"},
  ];

  const [settings, setSettings] = useState<TTSSettings>({
    selectedVoice: null,
    selectedGender: 'Female',
    selectedLanguage: 'Indonesian',
    text: '',
    pitch: 1
  });
  const [isGenerating, setIsGenerating] = useState(false);
  const [audioUrl, setAudioUrl] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  // Function to get TTS voice based on gender and language
  const getTTSVoice = (gender: string, language: string): string | null => {
    const voice = ttsVoices.find(v => v.gender === gender && v.language === language);
    return voice ? voice.name : null;
  };

  const generateSpeech = async () => {
    if (!settings.text.trim() || !settings.selectedVoice || !settings.selectedGender || !settings.selectedLanguage) return;

    const ttsVoice = getTTSVoice(settings.selectedGender, settings.selectedLanguage);
    if (!ttsVoice) {
      setErrorMessage('No TTS voice available for selected gender and language combination.');
      return;
    }

    setIsGenerating(true);
    setErrorMessage(null);

    try {
      const apiUrl = import.meta.env.VITE_API_URL;
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          text: settings.text,
          name: settings.selectedVoice.name,
          tts_voice: ttsVoice,
          f0_up_key: Math.round(settings.pitch * 4)
        })
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      setAudioUrl(data.result);
    } catch (error) {
      console.error('Error generating speech:', error);
      setErrorMessage('Failed to generate speech. Please try again.');
    } finally {
      setIsGenerating(false);
    }
  };

  const downloadAudio = () => {
    if (!audioUrl) return;
    
    const a = document.createElement('a');
    a.href = audioUrl;
    a.download = `speech-${Date.now()}.wav`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        {/* <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="p-4 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl">
              <Mic className="h-10 w-10 text-white" />
            </div>
            <div className="flex items-center gap-2">
              <Sparkles className="h-6 w-6 text-indigo-600" />
              <h1 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Text-to-Speech Studio
              </h1>
            </div>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Transform your text into natural-sounding speech with advanced AI voice synthesis. 
            Choose from multiple voice models and customize pitch to create the perfect audio experience.
          </p>
        </div> */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Text-to-Speech Studio
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Transform your text into natural-sounding speech with advanced AI voice synthesis. 
              Choose from multiple voice models and customize pitch to create the perfect audio experience.
            </p>
          </div>
        </div>
        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl shadow-xl p-8 text-white mb-12">
          <div className="flex items-center gap-3 mb-4">
            <Sparkles className="h-6 w-6" />
            <h3 className="text-xl font-bold">Quick Start Guide</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center text-sm font-bold">1</div>
                <span>Select your preferred voice model</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center text-sm font-bold">2</div>
                <span>Choose gender and language</span>
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center text-sm font-bold">3</div>
                <span>Adjust pitch settings</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center text-sm font-bold">4</div>
                <span>Enter text and generate speech</span>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
          {/* Left Column - Settings Panel */}
          <div className="xl:col-span-1 space-y-6">
            {/* Voice Configuration */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-white/20 p-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-gradient-to-r from-blue-100 to-indigo-100 rounded-lg">
                  <Settings className="h-5 w-5 text-blue-600" />
                </div>
                <h2 className="text-xl font-bold text-gray-800">Voice Configuration</h2>
              </div>
              
              <div className="space-y-6">
                <VoiceSelector
                  selectedVoice={settings.selectedVoice}
                  onVoiceChange={(voice) => 
                    setSettings(prev => ({ ...prev, selectedVoice: voice }))
                  }
                />

                <GenderSelector
                  selectedGender={settings.selectedGender}
                  onGenderChange={(gender) => 
                    setSettings(prev => ({ ...prev, selectedGender: gender }))
                  }
                />

                <LanguageSelector
                  selectedLanguage={settings.selectedLanguage}
                  onLanguageChange={(language) => 
                    setSettings(prev => ({ ...prev, selectedLanguage: language }))
                  }
                />
              </div>
            </div>

            {/* Audio Controls */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-white/20 p-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-gradient-to-r from-purple-100 to-pink-100 rounded-lg">
                  <Volume2 className="h-5 w-5 text-purple-600" />
                </div>
                <h2 className="text-xl font-bold text-gray-800">Audio Controls</h2>
              </div>
              
              <PitchControl
                pitch={settings.pitch}
                onPitchChange={(pitch) => 
                  setSettings(prev => ({ ...prev, pitch }))
                }
              />
            </div>

            {/* Generate Button */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-white/20 p-6">
              <button
                onClick={generateSpeech}
                disabled={isGenerating || !settings.text.trim() || !settings.selectedVoice || !settings.selectedGender || !settings.selectedLanguage}
                className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 disabled:from-gray-400 disabled:to-gray-500 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 disabled:hover:scale-100 flex items-center justify-center gap-3 shadow-lg"
              >
                {isGenerating ? (
                  <>
                    <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white"></div>
                    <span>Generating Speech...</span>
                  </>
                ) : (
                  <>
                    <Zap className="h-6 w-6" />
                    <span>Generate Speech</span>
                  </>
                )}
              </button>

              {errorMessage ? (
                <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-xl">
                  <p className="text-sm text-red-800 font-medium">
                    {errorMessage}
                  </p>
                </div>
              ) : (
                <div className="mt-4 p-4 bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-xl">
                  <p className="text-sm text-blue-800">
                    Configure your settings above and enter text to generate natural-sounding speech.
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Right Column - Text Input & Audio Player */}
          <div className="xl:col-span-2 space-y-6">
            {/* Text Input */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-white/20 p-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-gradient-to-r from-green-100 to-emerald-100 rounded-lg">
                  <Type className="h-5 w-5 text-green-600" />
                </div>
                <h2 className="text-xl font-bold text-gray-800">Text Input</h2>
              </div>
              
              <TextInput
                text={settings.text}
                onTextChange={(text) => 
                  setSettings(prev => ({ ...prev, text }))
                }
              />
            </div>

            {/* Audio Player */}
            {audioUrl && (
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-white/20 p-6">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-gradient-to-r from-orange-100 to-red-100 rounded-lg">
                      <Play className="h-5 w-5 text-orange-600" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-800">Generated Audio</h3>
                  </div>
                  <button
                    onClick={downloadAudio}
                    className="flex items-center gap-2 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white px-4 py-2 rounded-lg font-medium transition-all duration-200 transform hover:scale-105"
                  >
                    <Download className="h-4 w-4" />
                    Download
                  </button>
                </div>
                <AudioPlayer audioUrl={audioUrl} />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TextToSpeechWorkspacePage;