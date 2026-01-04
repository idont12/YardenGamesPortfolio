import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const LanguageSwitcher: React.FC = () => {
  const { lang, setLang, t } = useLanguage();

  return (
    <div className="flex items-center bg-slate-900/80 border border-slate-700 rounded-lg p-1 backdrop-blur-sm">
      <button
        onClick={() => setLang('en')}
        className={`px-3 py-1 rounded text-xs font-bold transition-all duration-200 ${
          lang === 'en'
            ? 'hidden'
            : 'text-slate-400 hover:text-cyan-400'
        }`}
      >
        {t('nav.lang_en')}
      </button>
 
      <button
        onClick={() => setLang('he')}
        className={`px-3 py-1 rounded text-xs font-bold transition-all duration-200 ${
          lang === 'he'
            ? 'hidden'
            : 'text-slate-400 hover:text-cyan-400'
        }`}
      >
        {t('nav.lang_he')}
      </button>
    </div>
  );
};

export default LanguageSwitcher;
