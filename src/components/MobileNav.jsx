import React from "react";
import { Link } from "react-router-dom";
import { useMobileNav } from "../hooks/useMobileNav";
import { useLanguage } from "../hooks/useLanguage";

const MobileNav = () => {
  const { isOpen, mobileNavRef, closeMenu } = useMobileNav();
  const { t, toggleLanguage, currentLanguage } = useLanguage();

  const handleLanguageSwitch = () => {
    toggleLanguage();
    closeMenu();
  };

  const handleLinkClick = () => {
    closeMenu();
  };

  return (
    <nav 
      ref={mobileNavRef}
      className={`mobile-nav ${isOpen ? 'open' : ''}`} 
      id="mobile-nav" 
      tabIndex={-1} 
      aria-modal="true" 
      role="dialog"
    >
      <div className="mobile-nav-header"></div>
      <div className="menu-divider"></div>
      <ul className="mobile-nav-list">
        <li>
          <a href="#packages" onClick={handleLinkClick}>{t('nav.packages')}</a>
        </li>
        <li>
          <a href="#destinations" onClick={handleLinkClick}>{t('nav.destinations')}</a>
        </li>
        <li>
          <a href="#about" onClick={handleLinkClick}>{t('nav.about')}</a>
        </li>
        <li>
          <Link to="/contact" onClick={handleLinkClick}>{t('nav.contacts')}</Link>
        </li>
        <li>
          <Link to="/blog" onClick={handleLinkClick}>{t('nav.blog')}</Link>
        </li>
        <li>
          <Link to="/privacy" onClick={handleLinkClick}>{t('nav.privacy')}</Link>
        </li>
        <li>
          <button onClick={handleLanguageSwitch} aria-label="Switch Language">
            {currentLanguage === 'en' ? '🇮🇹 IT' : '🇬🇧 EN'}
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default MobileNav;
