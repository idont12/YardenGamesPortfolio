import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Language, LocalizedContent, LocalizedString } from '../types';
import { TRANSLATIONS } from '../constants';

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  t: (key: string) => string;
  getLocalized: <T>(content: LocalizedContent<T> | LocalizedString) => T | string;
  dir: 'ltr' | 'rtl';
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [lang, setLangState] = useState<Language>(() => {
    const saved = localStorage.getItem('app_lang') as Language;
    return (saved === 'en' || saved === 'he') ? saved : 'en';
  });

  
  useEffect(() => {
    localStorage.setItem('app_lang', lang);
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'he' ? 'rtl' : 'ltr';
    document.body.setAttribute('data-lang', lang);
  }, [lang]);

  const setLang = (newLang: Language) => {
    setLangState(newLang);
  };

  const getLocalized = <T,>(content: LocalizedContent<T> | LocalizedString): T | string => {
    if (typeof content === 'string') return content;
    // We cast here because we know our structure adheres to the generic T or string
    // but in the simple case of LocalizedString, it fits LocalizedContent<string>
    return (content as any)[lang] || (content as any)['en'];
  };

  const t = (key: string): string => {
    const translation = TRANSLATIONS[key];
    if (!translation) return key;
    if (typeof translation === 'string') return translation;
    return translation[lang] || translation['en'];
  };

  const dir = lang === 'he' ? 'rtl' : 'ltr';

  return (
    <LanguageContext.Provider value={{ lang, setLang, t, getLocalized, dir }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
