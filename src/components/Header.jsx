import React from "react";
import { useMobileNav } from "../hooks/useMobileNav";
import { useTheme } from "../hooks/useTheme";
import { FaviconPng } from "../assets/images";

const Header = () => {
  const { isOpen, toggleMenu } = useMobileNav();
  const { toggleTheme } = useTheme();

  return (
    <header className="header">
      <div className="logo-holder">
        <img src={FaviconPng} alt="Sule Safaris Logo" className="logo-img" />
      </div>
      <div className="header-title">SASA SAFARIS</div>
      {/* Desktop Nav */}
      <nav className="nav desktop-nav">
        <ul className="nav-links">
          <li><a href="#packages">Packages / Pricing</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#contacts">Contacts</a></li>
          <li>
            <button onClick={toggleTheme} aria-label="Switch Theme">
              <i className="fas fa-adjust"></i>
            </button>
          </li>
        </ul>
      </nav>
      {/* Hamburger for mobile */}
      <button
        className={`hamburger ${isOpen ? 'open' : ''}`}
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
