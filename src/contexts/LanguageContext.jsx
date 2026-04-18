import React, { createContext, useContext, useState, useEffect } from 'react';
import enTranslations from '../translations/en.json';
import itTranslations from '../translations/it.json';

const translations = {
  en: enTranslations,
  it: itTranslations,
};

const LanguageContext = createContext(null);

export const LanguageProvider = ({ children }) => {
  const [currentLanguage, setCurrentLanguage] = useState('en');
  const [showLanguageBanner, setShowLanguageBanner] = useState(false);

  useEffect(() => {
    const savedLanguage = localStorage.getItem('preferredLanguage');
    const browserLanguage = navigator.language.split('-')[0];

    if (savedLanguage) {
      setCurrentLanguage(savedLanguage);
    } else {
      const detectedLanguage = ['en', 'it'].includes(browserLanguage)
        ? browserLanguage
        : 'en';
      setCurrentLanguage(detectedLanguage);
    }
  }, []);

  const checkAndShowLanguageBanner = () => {
    const savedLanguage = localStorage.getItem('preferredLanguage');
    const bannerShown = localStorage.getItem('languageBannerShown');
    const browserLanguage = navigator.language.split('-')[0];

    if (!savedLanguage && !bannerShown) {
      if (
        (browserLanguage === 'it' && currentLanguage === 'en') ||
        (browserLanguage === 'en' && currentLanguage === 'it')
      ) {
        setShowLanguageBanner(true);
      }
    }
  };

  const triggerLanguageBannerAfterCookie = () => {
    checkAndShowLanguageBanner();
  };

  const switchLanguage = (newLanguage) => {
    if (newLanguage && ['en', 'it'].includes(newLanguage)) {
      setCurrentLanguage(newLanguage);
      localStorage.setItem('preferredLanguage', newLanguage);
      setShowLanguageBanner(false);
      localStorage.setItem('languageBannerShown', 'true');
    }
  };

  const toggleLanguage = () => {
    const newLanguage = currentLanguage === 'en' ? 'it' : 'en';
    switchLanguage(newLanguage);
  };

  const dismissBanner = () => {
    setShowLanguageBanner(false);
    localStorage.setItem('languageBannerShown', 'true');
  };

  const acceptLanguageSwitch = () => {
    const browserLanguage = navigator.language.split('-')[0];
    const targetLanguage = browserLanguage === 'it' ? 'it' : 'en';
    switchLanguage(targetLanguage);
  };

  const t = (key) => {
    const keys = key.split('.');
    let translation = translations[currentLanguage];

    for (const k of keys) {
      if (translation && typeof translation === 'object') {
        translation = translation[k];
      } else {
        translation = translations['en'];
        for (const fallbackKey of keys) {
          if (translation && typeof translation === 'object') {
            translation = translation[fallbackKey];
          } else {
            return key;
          }
        }
        break;
      }
    }

    return translation || key;
  };

  return (
    <LanguageContext.Provider
      value={{
        currentLanguage,
        showLanguageBanner,
        switchLanguage,
        toggleLanguage,
        dismissBanner,
        acceptLanguageSwitch,
        triggerLanguageBannerAfterCookie,
        t,
        isItalian: currentLanguage === 'it',
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguageContext = () => {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLanguageContext must be used within LanguageProvider');
  return ctx;
};

export default LanguageContext;
