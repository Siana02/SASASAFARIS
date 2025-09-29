import { useState, useEffect } from 'react';
import enTranslations from '../translations/en.json';
import itTranslations from '../translations/it.json';

const translations = {
  'en': enTranslations,
  'it': itTranslations
};

export const useLanguage = () => {
  const [currentLanguage, setCurrentLanguage] = useState('en');
  const [showLanguageBanner, setShowLanguageBanner] = useState(false);

  useEffect(() => {
    // Check if user has already chosen a language
    const savedLanguage = localStorage.getItem('preferredLanguage');
    const browserLanguage = navigator.language.split('-')[0]; // 'it-IT' becomes 'it'
    
    if (savedLanguage) {
      // User has made a choice before
      setCurrentLanguage(savedLanguage);
    } else {
      // First visit - detect browser language
      const detectedLanguage = ['en', 'it'].includes(browserLanguage) ? browserLanguage : 'en';
      setCurrentLanguage(detectedLanguage);

      // Show banner if there's a mismatch (only on first visit)
      const bannerShown = localStorage.getItem('languageBannerShown');
      if (!bannerShown) {
        // If browser is Italian but site loaded in English, or vice versa
        if (browserLanguage === 'it' && detectedLanguage === 'en') {
          setShowLanguageBanner(true);
        } else if (browserLanguage === 'en' && detectedLanguage === 'it') {
          setShowLanguageBanner(true);
        }
      }
    }
  }, []);

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

  // Translation helper function
  const t = (key) => {
    const keys = key.split('.');
    let translation = translations[currentLanguage];
    
    for (const k of keys) {
      if (translation && typeof translation === 'object') {
        translation = translation[k];
      } else {
        // Fallback to English if translation is missing
        translation = translations['en'];
        for (const fallbackKey of keys) {
          if (translation && typeof translation === 'object') {
            translation = translation[fallbackKey];
          } else {
            return key; // Return key if no translation found
          }
        }
        break;
      }
    }
    
    return translation || key;
  };

  return {
    currentLanguage,
    showLanguageBanner,
    switchLanguage,
    toggleLanguage,
    dismissBanner,
    acceptLanguageSwitch,
    t,
    isItalian: currentLanguage === 'it'
  };
};