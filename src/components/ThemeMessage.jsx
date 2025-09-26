import React from "react";
import { useTheme } from "../hooks/useTheme";

const ThemeMessage = () => {
  const { 
    currentTheme, 
    showThemeMessage, 
    acceptThemeChange, 
    declineThemeChange, 
    getOtherTheme, 
    themeNames 
  } = useTheme();

  if (!showThemeMessage || !currentTheme) {
    return null;
  }

  const message = `You are currently viewing the ${themeNames[currentTheme]}. Would you like to try the ${themeNames[getOtherTheme()]}?`;

  return (
    <div className="theme-message fadein">
      <span>{message}</span>
      <button onClick={acceptThemeChange} className="theme-msg-btn">Yes</button>
      <button onClick={declineThemeChange} className="theme-msg-btn">No</button>
    </div>
  );
};

export default ThemeMessage;
