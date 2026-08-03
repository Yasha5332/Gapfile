'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { Language } from '@/types';
import { DICT, DICT_PROTO } from '@/data/i18n';

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  toggleLanguage: () => void;
  t: typeof DICT['en'];
  tp: typeof DICT_PROTO['en'];
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [lang, setLangState] = useState<Language>('en');

  useEffect(() => {
    const saved = localStorage.getItem('gapfile_lang') as Language;
    if (saved === 'en' || saved === 'vi') {
      setLangState(saved);
    }
  }, []);

  const setLang = (newLang: Language) => {
    setLangState(newLang);
    localStorage.setItem('gapfile_lang', newLang);
  };

  const toggleLanguage = () => {
    const next = lang === 'en' ? 'vi' : 'en';
    setLang(next);
  };

  const t = DICT[lang] || DICT.en;
  const tp = DICT_PROTO[lang] || DICT_PROTO.en;

  return (
    <LanguageContext.Provider value={{ lang, setLang, toggleLanguage, t, tp }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
