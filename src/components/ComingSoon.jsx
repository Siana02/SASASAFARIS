import React from "react";


// Minimal Africa SVG, with East Africa highlighted
const AfricaMap = () => (
  <svg
    className="coming-soon-map"
    viewBox="0 0 200 200"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    {/* Africa outline */}
    <path
      d="M44,48 L60,30 L100,15 L150,40 L170,90 L120,170 L70,160 L50,110 Z"
      stroke="#fff"
      strokeWidth="2"
      fill="none"
      opacity="0.7"
    />
    {/* East Africa Glow */}
    <ellipse
      cx="130"
      cy="110"
      rx="18"
      ry="22"
      fill="url(#eastAfricaGlow)"
      opacity="0.7"
    />
    {/* Other region glow */}
    <ellipse
      cx="100"
      cy="90"
      rx="20"
      ry="12"
      fill="url(#otherRegionGlow)"
      opacity="0.4"
      className="coming-soon-map-other-glow"
    />
    <defs>
      <radialGradient id="eastAfricaGlow" cx="0.5" cy="0.5" r="0.5">
        <stop offset="0%" stopColor="#00ffe7" />
        <stop offset="100%" stopColor="transparent" />
      </radialGradient>
      <radialGradient id="otherRegionGlow" cx="0.5" cy="0.5" r="0.5">
        <stop offset="0%" stopColor="#ffdb4d" />
        <stop offset="100%" stopColor="transparent" />
      </radialGradient>
    </defs>
  </svg>
);

const ComingSoon = () => (
  <section className="coming-soon" aria-label="Coming Soon Hero Section">
    <div className="coming-soon-content">
      {/* Glitch Heading */}
      <h1
        className="coming-soon-heading"
        aria-label="COMING SOON // EXPANDING TO EAST AFRICA & BEYOND"
      >
        <span
          className="glitch"
          data-text="COMING SOON // EXPANDING TO EAST AFRICA & BEYOND"
        >
          COMING SOON // EXPANDING TO EAST AFRICA & BEYOND
        </span>
      </h1>

      {/* Tagline */}
      <p className="coming-soon-subtext">
        Powered by innovation, inspired by Africa.
      </p>

      {/* Sparks Flicker Animation */}
      <div className="coming-soon-sparks" aria-hidden="true">
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* Africa Map for desktop / Globe icon for mobile */}
      <div className="coming-soon-map-container">
        <AfricaMap />
        <div className="coming-soon-mobile-icon" aria-hidden="true">
          🌍
        </div>
      </div>

      {/* Glitch Button */}
      <button className="coming-soon-btn">Stay Tuned</button>
    </div>
  </section>
);

export default ComingSoon;
