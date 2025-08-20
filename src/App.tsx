import { useState } from 'react';
import HomePage from './components/HomePage';
import TextToSpeechWorkspace from './components/TextToSpeechWorkspace';
import { Brain } from 'lucide-react';

function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'tts'>('home');

  return (
    <div className="min-h-screen bg-gray-50">
      {currentPage === 'home' ? (
        <HomePage onNavigateToTTS={() => setCurrentPage('tts')} />
      ) : (
        <div>
          {/* <nav className="bg-white shadow-sm border-b">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex justify-between items-center h-16">
                <button
                  onClick={() => setCurrentPage('home')}
                  className="text-blue-600 hover:text-blue-700 font-medium transition-colors"
                >
                  ← Back to Home
                </button>
                <h1 className="text-xl font-semibold text-gray-800">Text-to-Speech Workspace</h1>
                <div></div>
              </div>
            </div>
          </nav> */}
          <header className="bg-white/80 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex justify-between items-center h-16">
                <button onClick={() => setCurrentPage('home')}>
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg">
                      <Brain className="h-6 w-6 text-white" />
                    </div>
                    <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                      NeuralForge AI
                    </span>
                  </div>
                </button>
                <nav className="hidden md:flex items-center gap-8">
                  <a onClick={() => setCurrentPage('home')} href="#features" className="text-gray-600 hover:text-gray-900 transition-colors">Features</a>
                  <a onClick={() => setCurrentPage('home')} href="#about" className="text-gray-600 hover:text-gray-900 transition-colors">About</a>
                  <a onClick={() => setCurrentPage('home')} href="#contact" className="text-gray-600 hover:text-gray-900 transition-colors">Contact</a>
                </nav>
              </div>
            </div>
          </header>
          <TextToSpeechWorkspace />
        </div>
      )}
    </div>
  );
}

export default App;