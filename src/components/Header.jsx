import React from "react";

const Header = () => (
  <header className="header">
    <div className="logo-holder">
      <img src="/assets/favicon.png" alt="Sule Safaris Logo" className="logo-img" />
    </div>
    <div className="header-title">SASA SAFARIS</div>
    {/* Desktop Nav */}
    <nav className="nav desktop-nav">
      <ul className="nav-links">
        <li><a href="#packages">Packages / Pricing</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#contacts">Contacts</a></li>
        <li>
          <button id="theme-switcher" aria-label="Switch Theme">
            <i className="fas fa-adjust"></i>
          </button>
        </li>
      </ul>
    </nav>
    {/* Hamburger for mobile */}
    <button
      className="hamburger"
      id="hamburger"
      aria-label="Open menu"
      aria-expanded="false"
      aria-controls="mobile-nav"
    >
      <span className="burger-line"></span>
      <span className="burger-line"></span>
    </button>
  </header>
);

export default Header;
