import React from "react";

const HeroSection = () => (
  <section className="hero">
    <div className="hero-bg" id="hero-bg">
      <div className="hero-overlay"></div>
    </div>
    <div className="hero-content">
      <h1 className="hero-title">CRAFTED SAFARIS, JUST FOR YOU</h1>
      <p className="hero-desc">SEAMLESS SAFARIS TAILORED TO MATCH YOUR DESTINATIONS.</p>
      <div className="hero-ctas">
        <a href="#packages" className="cta-btn">View Packages</a>

        
        <Link to="/contact" className="cta-secondary">
          Contact Us
          <span className="cta-secondary-icon">
            {/* SVG Icon */}
            <svg viewBox="0 0 48 48" width="48" height="48" aria-hidden="true" focusable="false">
              <circle cx="24" cy="24" r="20" fill="var(--cta)" />
              <polyline points="18 30 30 18" fill="none" stroke="#fff" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
              <polyline points="18 18 30 18 30 30" fill="none" stroke="#fff" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </span>
        </Link>
        
      </div>
    </div>
  </section>
);

export default HeroSection;
