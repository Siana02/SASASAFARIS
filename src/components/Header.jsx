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
        </ul>
      </nav>
      
      {/* Language and Theme switchers outside of nav for better placement */}
      <div className="header-controls">
        <button onClick={toggleLanguage} id="language-switcher" aria-label="Switch Language">
          {currentLanguage === 'en' ? '🇮🇹' : '🇬🇧'}
        </button>
        <button onClick={toggleTheme} id="theme-switcher" aria-label="Switch Theme">
          <i className="fas fa-adjust"></i>
        </button>
      </div>
      
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
  );
};

export default Header;
