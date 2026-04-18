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
          <Link to="/#destinations" onClick={handleLinkClick}>{t('nav.destinations')}</Link>
        </li>
        <li>
          <Link to="/blog" onClick={handleLinkClick}>{t('nav.blog')}</Link>
        </li>
        <li>
          <Link to="/about" onClick={handleLinkClick}>{t('nav.about')}</Link>
        </li>
        <li>
          <Link to="/contact" onClick={handleLinkClick}>{t('nav.contacts')}</Link>
        </li>
        <li>
          <Link to="/privacy" onClick={handleLinkClick}>{t('nav.privacy')}</Link>
        </li>
        <li>
          <button onClick={handleLanguageSwitch} aria-label="Switch Language" className="lang-toggle">
            <span className={`lang-option${currentLanguage === 'en' ? ' active' : ''}`}>EN</span>
            <span className="lang-divider">|</span>
            <span className={`lang-option${currentLanguage === 'it' ? ' active' : ''}`}>IT</span>
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default MobileNav;
