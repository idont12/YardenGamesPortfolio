import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const LanguageSwitcher: React.FC = () => {
  const { lang, setLang, t } = useLanguage();

  return (
    <div className="flex items-center space-x-2 bg-slate-900/80 border border-slate-700 rounded-lg p-1 backdrop-blur-sm">
      <button
        onClick={() => setLang('en')}
        className={`px-3 py-1 rounded text-xs font-bold transition-all duration-200 ${
          lang === 'en'
            ? 'bg-cyan-500 text-slate-950 shadow-[0_0_10px_rgba(6,182,212,0.4)]'
            : 'text-slate-400 hover:text-cyan-400'
        }`}
      >
        {t('nav.lang_en')}
      </button>
      <div className="w-px h-4 bg-slate-700 mx-1" />
      <button
        onClick={() => setLang('he')}
        className={`px-3 py-1 rounded text-xs font-bold transition-all duration-200 ${
          lang === 'he'
            ? 'bg-cyan-500 text-slate-950 shadow-[0_0_10px_rgba(6,182,212,0.4)]'
            : 'text-slate-400 hover:text-cyan-400'
        }`}
      >
        {t('nav.lang_he')}
      </button>
    </div>
  );
};

export default LanguageSwitcher;
