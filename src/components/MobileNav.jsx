import React from "react";
import { Link } from "react-router-dom";
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
        <li>
          <Link to="/" onClick={handleLinkClick}>Home</Link>
        </li> 
        <li>
          <Link to="/packages" onClick={handleLinkClick}>Packages</Link>
        </li>
        <li>
          <Link to="/offers" onClick={handleLinkClick}>Offers</Link>
        </li>
        <li>
          <Link to="/about" onClick={handleLinkClick}>About Us</Link>
        </li>
        <li>
          <Link to="/contact" onClick={handleLinkClick}>Contacts</Link>
        </li>
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
