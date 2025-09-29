import React from 'react';
import { useLanguage } from '../hooks/useLanguage';

const LanguageBanner = () => {
  const { showLanguageBanner, acceptLanguageSwitch, dismissBanner, t } = useLanguage();
  
  if (!showLanguageBanner) return null;

  // Get browser language to show appropriate message
  const browserLanguage = navigator.language.split('-')[0];
  const isItalianBrowser = browserLanguage === 'it';
  
  const bannerText = isItalianBrowser 
    ? t('languageBanner.availableInItalian')
    : t('languageBanner.availableInEnglish');
    
  const switchButtonText = isItalianBrowser 
    ? t('languageBanner.switchToItalian')
    : t('languageBanner.switchToEnglish');

  return (
    <div className="language-banner">
      <div className="language-banner-content">
        <span className="language-banner-text">
          {bannerText}
        </span>
        <div className="language-banner-buttons">
          <button 
            onClick={acceptLanguageSwitch}
            className="language-banner-btn accept"
          >
            {switchButtonText}
          </button>
          <button 
            onClick={dismissBanner}
            className="language-banner-btn dismiss"
          >
            ✕
          </button>
        </div>
      </div>
    </div>
  );
};

export default LanguageBanner;