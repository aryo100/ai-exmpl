import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/home/HomePage';
import TextToSpeechWorkspacePage from './pages/tts/TextToSpeechWorkspacePage';
import Layout from './components/layout/Layout';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route 
        path="/tts" 
        element={
          <Layout>
            <TextToSpeechWorkspacePage />
          </Layout>
        } 
      />
    </Routes>
  );
}

export default App;