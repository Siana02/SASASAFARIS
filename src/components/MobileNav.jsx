import React from "react";
import { useMobileNav } from "../hooks/useMobileNav";
import { useTheme } from "../hooks/useTheme";

const MobileNav = () => {
  const { isOpen, mobileNavRef, closeMenu } = useMobileNav();
  const { toggleTheme } = useTheme();

  const handleThemeSwitch = () => {
    toggleTheme();
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
        <li><a href="#packages" onClick={handleLinkClick}>Packages / Pricing</a></li>
        <li><a href="#about" onClick={handleLinkClick}>About</a></li>
        <li><a href="#contacts" onClick={handleLinkClick}>Contacts</a></li>
        <li>
          <button onClick={handleThemeSwitch} aria-label="Switch Theme">
            <i className="fas fa-adjust"></i>
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default MobileNav;
