import React, { createContext, useContext, useState, useEffect, useRef } from 'react';

const MobileNavContext = createContext(null);

export const MobileNavProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const mobileNavRef = useRef(null);

  const toggleMenu = () => setIsOpen(prev => !prev);
  const closeMenu = () => setIsOpen(false);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (isOpen && mobileNavRef.current && !mobileNavRef.current.contains(e.target)) {
        const hamburger = document.getElementById('hamburger');
        if (!hamburger || !hamburger.contains(e.target)) {
          closeMenu();
        }
      }
    };

    const handleEscape = (e) => {
      if (e.key === 'Escape' && isOpen) closeMenu();
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleEscape);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen]);

  return (
    <MobileNavContext.Provider value={{ isOpen, toggleMenu, closeMenu, mobileNavRef }}>
      {children}
    </MobileNavContext.Provider>
  );
};

export const useMobileNavContext = () => {
  const ctx = useContext(MobileNavContext);
  if (!ctx) throw new Error('useMobileNavContext must be used within MobileNavProvider');
  return ctx;
};
