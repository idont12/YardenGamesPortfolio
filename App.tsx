import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import PageTracker from "./components/PageTracker";
import Navbar from './components/Navbar';
import Home from './pages/Home';
import ProjectDetail from './pages/ProjectDetail';
import NotFound from './pages/NotFound';
import FooterRewardCard from './components/FooterRewardCard';
import IntroLoader from './components/IntroLoader';
import StickerDrawer from './components/StickerDrawer';
import { LanguageProvider } from './context/LanguageContext';
import { StickerProvider } from './context/StickerContext';
import { initGA } from './utils/analytics'; 
const AppContent: React.FC = () => {
  const [introFinished, setIntroFinished] = useState(false);

useEffect(() => {
    try {
      // eslint-disable-next-line @typescript-eslint/no-var-requires
      if (initGA) initGA();
    } catch (e) {
      console.error("GA Initialization Error:", e); // This will tell you exactly what's wrong
    }
  }, []);
  return (
    <div className="min-h-screen bg-slate-950 font-sans selection:bg-pop-pink selection:text-white">
      <PageTracker />
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