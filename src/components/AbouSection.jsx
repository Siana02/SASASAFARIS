import React from "react";

const AboutSection = () => (
  <section className="about-section" id="about">
    <div className="about-header">
      <div className="about-mini-title">Why Us?</div>
      <h2 className="about-main-title">Your Safari, Made Simple</h2>
    </div>
    <div className="about-grid">
      {/* 1. Best Tour Guides */}
      <div className="about-feature">
        <div className="about-icon-circle">
          {/* Sandals/Footprint Icon SVG */}
          <svg width="120" height="120" viewBox="0 0 48 48" aria-hidden="true" focusable="false">
            <circle cx="24" cy="24" r="22" fill="var(--cta)" />
            <path d="M18 18 Q20 10 24 14 Q28 18 30 30" stroke="#fff" strokeWidth="2.5" fill="none" />
            <ellipse cx="20" cy="28" rx="1.5" ry="2.5" fill="#fff" />
          </svg>
        </div>
        <div className="about-feature-title">Best Tour Guides</div>
        <div className="about-feature-desc">
          Local experts who know every hidden gem and make your adventure unforgettable.
        </div>
      </div>
      {/* 2. Best Price Guarantee */}
      <div className="about-feature">
        <div className="about-icon-circle">
          {/* Money Icon SVG */}
          <svg width="120" height="120" viewBox="0 0 48 48" aria-hidden="true" focusable="false">
            <circle cx="24" cy="24" r="22" fill="var(--cta)" />
            <text x="24" y="30" textAnchor="middle" fontSize="22" fill="#fff" fontFamily="Arial, sans-serif" fontWeight="bold">$</text>
          </svg>
        </div>
        <div className="about-feature-title">Best Price Guarantee</div>
        <div className="about-feature-desc">
          Enjoy the most competitive rates with no hidden fees—just pure value.
        </div>
      </div>
      {/* 3. Easy & Fast Booking */}
      <div className="about-feature">
        <div className="about-icon-circle">
          {/* Booking/Calendar Icon SVG */}
          <svg width="120" height="120" viewBox="0 0 48 48" aria-hidden="true" focusable="false">
            <circle cx="24" cy="24" r="22" fill="var(--cta)" />
            <rect x="14" y="18" width="20" height="16" rx="4" fill="#fff"/>
            <rect x="19" y="23" width="10" height="6" rx="2" fill="var(--cta)"/>
          </svg>
        </div>
        <div className="about-feature-title">Easy & Fast Booking</div>
        <div className="about-feature-desc">
          Book your safari in seconds using our seamless and secure platform.
        </div>
      </div>
      {/* 4. Tailored Safaris */}
      <div className="about-feature">
        <div className="about-icon-circle">
          {/* Scissors Icon SVG */}
          <svg width="120" height="120" viewBox="0 0 48 48" aria-hidden="true" focusable="false">
            <circle cx="24" cy="24" r="22" fill="var(--cta)" />
            <line x1="17" y1="20" x2="31" y2="34" stroke="#fff" strokeWidth="3.2" />
            <line x1="31" y1="20" x2="17" y2="34" stroke="#fff" strokeWidth="3.2" />
            <circle cx="18" cy="36" r="2.4" fill="#fff"/>
            <circle cx="30" cy="36" r="2.4" fill="#fff"/>
          </svg>
        </div>
        <div className="about-feature-title">Tailored Safaris</div>
        <div className="about-feature-desc">
          Tour all your desired destinations in one unforgettable journey—just for you.
        </div>
      </div>
    </div>
    {/* Learn More CTA */}
    <div className="about-learn-more-container">
      <button className="about-learn-more-cta">Learn More</button>
    </div>
    {/* Hidden expanded content */}
    <div className="about-expanded-content" style={{ display: "none" }}>
      <div className="about-detail-title">Our Story & Mission</div>
      <div className="about-detail-body">
        <p>
          From humble beginnings to leading safaris across Africa, our team is passionate about crafting journeys that celebrate wildlife, culture, and the spirit of adventure. Our mission: to make every safari personal, safe, and extraordinary for every guest.
        </p>
        <p>
          Whether you’re traveling solo, as a family, or with friends, our tailored itineraries and local expertise guarantee an experience you’ll never forget.
        </p>
      </div>
    </div>
  </section>
);

export default AboutSection;
