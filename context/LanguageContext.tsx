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
  // 1. Helper to extract lang from URL (handles both standard and HashRouter URLs)
  const getLangFromUrl = (): Language | null => {
    // Check standard search: ?lang=he
    // Check hash search: #/home?lang=he
    const fullSearch = window.location.search || window.location.hash.split('?')[1];
    const params = new URLSearchParams(fullSearch);
    const langParam = params.get('lang') as Language;
    
    return (langParam === 'en' || langParam === 'he') ? langParam : null;
  };

  const [lang, setLangState] = useState<Language>(() => {
    // Priority: 1. URL Param, 2. LocalStorage, 3. Default 'en'
    const urlLang = getLangFromUrl();
    if (urlLang) return urlLang;

    const saved = localStorage.getItem('app_lang') as Language;
    return (saved === 'en' || saved === 'he') ? saved : 'en';
  });

  // 2. Sync changes to storage and DOM
  useEffect(() => {
    localStorage.setItem('app_lang', lang);
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'he' ? 'rtl' : 'ltr';
    document.body.setAttribute('data-lang', lang);
  }, [lang]);

  // 3. Optional: Listen for URL changes (if user manually edits URL)
  useEffect(() => {
    const handleUrlChange = () => {
      const urlLang = getLangFromUrl();
      if (urlLang && urlLang !== lang) {
        setLangState(urlLang);
      }
    };

    window.addEventListener('popstate', handleUrlChange);
    return () => window.removeEventListener('popstate', handleUrlChange);
  }, [lang]);

  const setLang = (newLang: Language) => {
    setLangState(newLang);
  };

  const getLocalized = <T,>(content: LocalizedContent<T> | LocalizedString): T | string => {
    if (typeof content === 'string') return content;
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