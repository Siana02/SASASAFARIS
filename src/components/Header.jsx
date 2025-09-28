import React from "react";
import { Link } from "react-router-dom";
import { useMobileNav } from "../hooks/useMobileNav";
import { useTheme } from "../hooks/useTheme";
import { FaviconPng } from "../assets/images";

const Header = () => {
  const { isOpen, toggleMenu } = useMobileNav();
  const { toggleTheme } = useTheme();

  return (
    <>
      <header className="header">
        <div className="logo-holder">
          <img src={FaviconPng} alt="Sule Safaris Logo" className="logo-img" />
        </div>
        <div className="header-title">SASA SAFARIS</div>
        <nav className="nav desktop-nav">
          <ul className="nav-links">
            <li><a href="#packages">Packages/Pricing</a></li>
            <li><a href="#about">About</a></li>
            <li>
  <Link to="/contact">Contacts</Link>
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
            <a href="#packages" onClick={toggleMenu}>Packages / Pricing</a>
          </li>
          <li>
            <a href="#about" onClick={toggleMenu}>About</a>
          </li>
          <li>
  <Link to="/contact">Contacts</Link>
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
