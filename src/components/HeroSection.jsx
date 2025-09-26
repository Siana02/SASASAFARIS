import React from 'react';

// TODO: Migrate Hero section HTML structure from existing HTML file
// TODO: Migrate Hero section CSS styles from existing CSS file
// TODO: Migrate Hero section JavaScript functionality (animations, interactions) from existing JS file

const HeroSection = () => {
  return (
    <section className="hero-section">
      {/* Placeholder hero content - replace with migrated HTML */}
      <div className="hero-content">
        <h1 className="hero-title">Discover Amazing Safari Adventures</h1>
        <p className="hero-subtitle">
          Experience the wild beauty of nature with our expertly guided safari tours
        </p>
        <div className="hero-actions">
          <button className="btn btn-primary">Explore Packages</button>
          <button className="btn btn-secondary">Watch Video</button>
        </div>
      </div>
      <div className="hero-image">
        {/* TODO: Add safari hero image from assets */}
        <div className="placeholder-image">Safari Hero Image</div>
      </div>
    </section>
  );
};

export default HeroSection;