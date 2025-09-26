import React from 'react';

// TODO: Migrate Packages section HTML structure from existing HTML file
// TODO: Migrate Packages section CSS styles from existing CSS file
// TODO: Migrate Packages section JavaScript functionality (package filtering, interactions) from existing JS file

const PackagesSection = () => {
  return (
    <section className="packages-section">
      {/* Placeholder packages content - replace with migrated HTML */}
      <div className="container">
        <h2 className="section-title">Our Safari Packages</h2>
        <p className="section-subtitle">Choose from our carefully crafted safari experiences</p>
        
        <div className="packages-grid">
          {/* TODO: Replace with dynamic package rendering from data/packages.js */}
          <div className="package-card">
            <div className="package-image">Package Image 1</div>
            <div className="package-content">
              <h3 className="package-title">Classic Safari</h3>
              <p className="package-description">3-day adventure through the wilderness</p>
              <div className="package-price">$299</div>
              <button className="btn btn-outline">Learn More</button>
            </div>
          </div>
          
          <div className="package-card">
            <div className="package-image">Package Image 2</div>
            <div className="package-content">
              <h3 className="package-title">Premium Safari</h3>
              <p className="package-description">5-day luxury safari experience</p>
              <div className="package-price">$599</div>
              <button className="btn btn-outline">Learn More</button>
            </div>
          </div>
          
          <div className="package-card">
            <div className="package-image">Package Image 3</div>
            <div className="package-content">
              <h3 className="package-title">Family Safari</h3>
              <p className="package-description">Family-friendly 4-day adventure</p>
              <div className="package-price">$449</div>
              <button className="btn btn-outline">Learn More</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PackagesSection;