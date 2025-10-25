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

  // Map internal theme keys to translation keys
  const themeKeyMap = {
    safari: 'themeMessage.safariTheme',
    vacation: 'themeMessage.vacationTheme',
  };

  const currentThemeName = t(themeKeyMap[currentTheme]);
  const otherThemeName = t(themeKeyMap[getOtherTheme()]);

  const message = t('themeMessage.currentlyViewing', { current: currentThemeName, other: otherThemeName });

  return (
    <div className="theme-message fadein">
      <span>{message}</span>
      <button onClick={acceptThemeChange} className="theme-msg-btn">
        {t('themeMessage.yes')}
      </button>
      <button onClick={declineThemeChange} className="theme-msg-btn">
        {t('themeMessage.no')}
      </button>
    </div>
  );
};

export default ThemeMessage;
