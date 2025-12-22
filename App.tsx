import React, { useState } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import ProjectDetail from './pages/ProjectDetail';
import NotFound from './pages/NotFound';
import FooterRewardCard from './components/FooterRewardCard';
import IntroLoader from './components/IntroLoader';
import StickerDrawer from './components/StickerDrawer';
import { LanguageProvider } from './context/LanguageContext';
import { StickerProvider } from './context/StickerContext';

const AppContent: React.FC = () => {
  const [introFinished, setIntroFinished] = useState(false);

  return (
    <div className="min-h-screen bg-slate-950 font-sans selection:bg-pop-pink selection:text-white">
      
      {!introFinished && (
        <IntroLoader onFinished={() => setIntroFinished(true)} />
      )}

      {/* Main App Visibility Control */}
      <div className={`transition-opacity duration-1000 ${introFinished ? 'opacity-100' : 'opacity-0 h-0 overflow-hidden'}`}>
        <Navbar />
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project/:slug" element={<ProjectDetail />} />
          <Route path="*" element={<NotFound />} />
        </Routes>

        <FooterRewardCard />
        <StickerDrawer />
      </div>

    </div>
  );
};

const App: React.FC = () => {
  return (
    <LanguageProvider>
      <StickerProvider>
        <Router>
          <AppContent />
        </Router>
      </StickerProvider>
    </LanguageProvider>
  );
};

export default App;