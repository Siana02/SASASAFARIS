import React from "react";
import { Link } from "react-router-dom";
import { useMobileNav } from "../hooks/useMobileNav";
import { useTheme } from "../hooks/useTheme";
import { useLanguage } from "../hooks/useLanguage";
import { FaviconPng } from "../assets/images";

const Header = () => {
  const { isOpen, toggleMenu } = useMobileNav();
  const { toggleTheme } = useTheme();
  const { toggleLanguage, currentLanguage, t } = useLanguage();

  return (
    <>
      <header className="header">
        <div className="logo-holder">
          <img src={FaviconPng} alt="Sule Safaris Logo" className="logo-img" />
        </div>
        <div className="header-title">SASA SAFARIS</div>
        <nav className="nav desktop-nav">
          <ul className="nav-links">
            <li><a href="#packages">{t('nav.packages')}</a></li>
            <li><a href="#about">{t('nav.about')}</a></li>
            <li>
  <Link to="/contact">{t('nav.contacts')}</Link>
</li>
            <li>
              <button onClick={toggleLanguage} id="language-switcher" aria-label="Switch Language">
                {currentLanguage === 'en' ? '🇮🇹' : '🇬🇧'}
              </button>
            </li>
            <li>
              <button onClick={toggleTheme} id="theme-switcher" aria-label="Switch Theme">
                <i className="fas fa-adjust"></i>
              </button>
            </li>
          </ul>
        </nav>
        <button
          className={`hamburger${isOpen ? " open" : ""}`}
          id="hamburger"
          aria-label="Open menu"
          aria-expanded={isOpen}
          aria-controls="mobile-nav"
          onClick={toggleMenu}
        >
          <span className="burger-line"></span>
          <span className="burger-line"></span>
        </button>
      </header>

      <nav
        className={`mobile-nav${isOpen ? " open" : ""}`}
        id="mobile-nav"
        tabIndex={-1}
        aria-modal="true"
        role="dialog"
      >
        <div className="mobile-nav-header"></div>
        <div className="menu-divider"></div>
        <ul className="mobile-nav-list">
          <li>
            <a href="#packages" onClick={toggleMenu}>{t('nav.packages')}</a>
          </li>
          <li>
            <a href="#about" onClick={toggleMenu}>{t('nav.about')}</a>
          </li>
          <li>
  <Link to="/contact">{t('nav.contacts')}</Link>
</li>
          <li>
            <button
              onClick={() => { toggleLanguage(); toggleMenu(); }}
              id="language-switcher-mobile"
              aria-label="Switch Language"
            >
              {currentLanguage === 'en' ? '🇮🇹 IT' : '🇬🇧 EN'}
            </button>
          </li>
          <li>
            <button
              onClick={() => { toggleTheme(); toggleMenu(); }}
              id="theme-switcher-mobile"
              aria-label="Switch Theme"
            >
              <i className="fas fa-adjust"></i>
            </button>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Header;
