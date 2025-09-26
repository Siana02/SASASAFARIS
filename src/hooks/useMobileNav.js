import { useState, useEffect, useRef } from 'react';

export const useMobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const mobileNavRef = useRef(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    // Prevent body scroll when menu is open
    document.body.style.overflow = isOpen ? 'hidden' : '';
    
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  useEffect(() => {
    // Handle click outside to close
    const handleClickOutside = (e) => {
      if (isOpen && mobileNavRef.current && !mobileNavRef.current.contains(e.target)) {
        // Check if click is not on hamburger button
        const hamburger = document.getElementById('hamburger');
        if (!hamburger || !hamburger.contains(e.target)) {
          closeMenu();
        }
      }
    };

    // Handle escape key
    const handleEscape = (e) => {
      if (e.key === 'Escape' && isOpen) {
        closeMenu();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleEscape);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen]);

  return {
    isOpen,
    toggleMenu,
    closeMenu,
    mobileNavRef,
  };
};