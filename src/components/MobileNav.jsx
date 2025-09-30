import React from "react";
import { Link } from "react-router-dom";
import { useMobileNav } from "../hooks/useMobileNav";
import { useTheme } from "../hooks/useTheme";
import { useLanguage } from "../hooks/useLanguage";

const MobileNav = () => {
  const { isOpen, mobileNavRef, closeMenu } = useMobileNav();
  const { toggleTheme } = useTheme();
  const { t, toggleLanguage, currentLanguage } = useLanguage();

  const handleThemeSwitch = () => {
    toggleTheme();
    closeMenu();
  };

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
          <Link to="/" onClick={handleLinkClick}>{t('nav.home')}</Link>
        </li> 
        <li>
          <Link to="/packages" onClick={handleLinkClick}>{t('nav.packages')}</Link>
        </li>
        <li>
          <Link to="/offers" onClick={handleLinkClick}>{t('nav.offers')}</Link>
        </li>
        <li>
          <Link to="/about" onClick={handleLinkClick}>{t('nav.about')}</Link>
        </li>
        <li>
          <Link to="/contact" onClick={handleLinkClick}>{t('nav.contacts')}</Link>
        </li>
        <li>
          <button onClick={handleThemeSwitch} aria-label={t('mobileNav.switchTheme')}>
            <i className="fas fa-adjust"></i>
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default MobileNav;
