import React from "react";

const MobileNav = () => (
  <nav className="mobile-nav" id="mobile-nav" tabIndex={-1} aria-modal="true" role="dialog">
    <div className="mobile-nav-header"></div>
    <div className="menu-divider"></div>
    <ul className="mobile-nav-list">
      <li><a href="#packages">Packages / Pricing</a></li>
      <li><a href="#about">About</a></li>
      <li><a href="#contacts">Contacts</a></li>
      <li>
        <button id="theme-switcher-mobile" aria-label="Switch Theme">
          <i className="fas fa-adjust"></i>
        </button>
      </li>
    </ul>
  </nav>
);

export default MobileNav;
