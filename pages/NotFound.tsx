import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

const NotFound: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-slate-950 flex flex-col items-center justify-center p-6 text-center relative overflow-hidden">
      {/* Background Effect */}
      <div className="absolute inset-0 bg-halftone opacity-20 pointer-events-none" />
      <div className="absolute inset-0 bg-[url('https://api.iconify.design/heroicons:signal.svg')] opacity-5 mix-blend-overlay pointer-events-none animate-pulse" />

      {/* 404 Glitch Text */}
      <div className="relative mb-8">
        <h1 className="text-9xl font-black text-white italic tracking-tighter animate-glitch relative z-10" style={{ textShadow: '8px 8px 0px #FF0099' }}>
          404
        </h1>
        <div className="absolute inset-0 text-9xl font-black text-pop-blue italic tracking-tighter opacity-70 animate-float" style={{ transform: 'translate(4px, -4px)' }}>
          404
        </div>
      </div>

      <div className="bg-white text-slate-900 p-8 border-4 border-slate-900 shadow-comic-lg transform -rotate-1 max-w-md relative z-20">
        <h2 className="text-3xl font-black uppercase italic mb-2 text-pop-pink font-marker">
          {t('404.title')}
        </h2>
        <p className="text-lg font-mono font-bold text-slate-700 mb-8 border-l-4 border-slate-900 pl-4">
          {t('404.subtitle')}
        </p>

        <Link 
          to="/"
          className="inline-block w-full bg-pop-yellow text-slate-900 py-3 text-lg font-black font-marker uppercase tracking-wider hover:bg-white hover:scale-105 transition-all border-4 border-slate-900 shadow-[4px_4px_0px_#000]"
        >
          {t('404.btn')}
        </Link>
      </div>

      {/* Decorative Glitch Elements */}
      <div className="absolute top-1/4 left-10 w-16 h-1 bg-pop-blue animate-pulse" />
      <div className="absolute bottom-1/3 right-10 w-24 h-2 bg-pop-pink animate-glitch" />
    </div>
  );
};

export default NotFound;