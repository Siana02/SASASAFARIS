import { useState, useEffect } from 'react';

const themes = ['safari-theme', 'vacation-theme'];
const themeNames = {
  'safari-theme': 'Safari theme',
  'vacation-theme': 'Vacation theme'
};

export const useTheme = () => {
  const [currentTheme, setCurrentTheme] = useState(null);
  const [showThemeMessage, setShowThemeMessage] = useState(false);

  // Pick random theme on mount
  useEffect(() => {
    const idx = Math.floor(Math.random() * themes.length);
    const theme = themes[idx];
    setCurrentTheme(theme);
    
    // Apply theme to body
    document.body.classList.remove(...themes);
    document.body.classList.add(theme);

    // Show theme message after 5 seconds
    const timer = setTimeout(() => {
      setShowThemeMessage(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  // Update body class when theme changes
  useEffect(() => {
    if (currentTheme) {
      document.body.classList.remove(...themes);
      document.body.classList.add(currentTheme);
      
      // Preload hero image and fade in
      const heroBg = document.getElementById('hero-bg');
      if (heroBg) {
        heroBg.style.opacity = 0;
        const style = getComputedStyle(document.body);
        let imgUrl = style.getPropertyValue('--hero-img').trim();
        imgUrl = imgUrl.replace(/^url\((['"]?)/, '').replace(/(['"]?)\)$/, '');
        
        const img = new Image();
        img.onload = () => {
          heroBg.style.opacity = 1;
        };
        img.onerror = () => {
          heroBg.style.opacity = 1;
        };
        img.src = imgUrl;
      }
    }
  }, [currentTheme]);

  const toggleTheme = () => {
    const newTheme = currentTheme === themes[0] ? themes[1] : themes[0];
    setCurrentTheme(newTheme);
    setShowThemeMessage(false);
  };

  const getOtherTheme = () => {
    return currentTheme === themes[0] ? themes[1] : themes[0];
  };

  const acceptThemeChange = () => {
    const newTheme = getOtherTheme();
    setCurrentTheme(newTheme);
    setShowThemeMessage(false);
  };

  const declineThemeChange = () => {
    setShowThemeMessage(false);
  };

  return {
    currentTheme,
    showThemeMessage,
    toggleTheme,
    acceptThemeChange,
    declineThemeChange,
    getOtherTheme: () => getOtherTheme(),
    themeNames,
  };
};