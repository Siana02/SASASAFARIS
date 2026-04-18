import React from "react";
import { Link } from "react-router-dom";
import { useMobileNav } from "../hooks/useMobileNav";
import { useLanguage } from "../hooks/useLanguage";
import { HeaderLogo } from "../assets/images";

const Header = () => {
  const { isOpen, toggleMenu } = useMobileNav();
  const { toggleLanguage, currentLanguage, t } = useLanguage();

  return (
    <header className="header">
      <div className="logo-holder">
        <Link to="/"><img src={HeaderLogo} alt="Sasa Safaris Africa Logo" className="logo-img" /></Link>
      </div>
      <nav className="nav desktop-nav">
        <ul className="nav-links">
          <li><Link to="/#destinations">{t('nav.destinations')}</Link></li>
          <li><Link to="/blog">{t('nav.blog')}</Link></li>
          <li><Link to="/about">{t('nav.about')}</Link></li>
          <li><Link to="/contact">{t('nav.contacts')}</Link></li>
          <li><Link to="/privacy">{t('nav.privacy')}</Link></li>
        </ul>
      </nav>

      <div className="header-controls">
        <a href="tel:+254711589004" className="header-phone-link" aria-label="Call us">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.38 2 2 0 0 1 3.58 1h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 8.96a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
          </svg>
        </a>
        <button onClick={toggleLanguage} id="language-switcher" aria-label="Switch Language" className="lang-toggle">
          <span className={`lang-option${currentLanguage === 'en' ? ' active' : ''}`}>EN</span>
          <span className="lang-divider">|</span>
          <span className={`lang-option${currentLanguage === 'it' ? ' active' : ''}`}>IT</span>
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
