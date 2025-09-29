import React from "react";
import { useTheme } from "../hooks/useTheme";
import { useLanguage } from "../hooks/useLanguage";

const ThemeMessage = () => {
  const { 
    currentTheme, 
    showThemeMessage, 
    acceptThemeChange, 
    declineThemeChange, 
    getOtherTheme 
  } = useTheme();
  const { t } = useLanguage();

  if (!showThemeMessage || !currentTheme) {
    return null;
  }

  const currentThemeName = currentTheme === 'light' ? t('themeMessage.lightTheme') : t('themeMessage.darkTheme');
  const otherThemeName = getOtherTheme() === 'light' ? t('themeMessage.lightTheme') : t('themeMessage.darkTheme');
  
  const message = `${t('themeMessage.currentlyViewing')} ${currentThemeName}. ${t('themeMessage.wouldLikeTry')} ${otherThemeName}?`;

  return (
    <div className="theme-message fadein">
      <span>{message}</span>
      <button onClick={acceptThemeChange} className="theme-msg-btn">{t('themeMessage.yes')}</button>
      <button onClick={declineThemeChange} className="theme-msg-btn">{t('themeMessage.no')}</button>
    </div>
  );
};

export default ThemeMessage;
