import React from 'react';

// TODO: Migrate Offers section HTML structure from existing HTML file
// TODO: Migrate Offers section CSS styles from existing CSS file
// TODO: Migrate Offers section JavaScript functionality (offer timers, interactions) from existing JS file

const OfferSection = () => {
  return (
    <section className="offers-section">
      {/* Placeholder offers content - replace with migrated HTML */}
      <div className="container">
        <h2 className="section-title">Special Offers</h2>
        <p className="section-subtitle">Don't miss out on these amazing deals</p>
        
        <div className="offers-grid">
          {/* TODO: Replace with dynamic offer rendering from data/offers.js */}
          <div className="offer-card">
            <div className="offer-badge">Limited Time</div>
            <div className="offer-content">
              <h3 className="offer-title">Early Bird Special</h3>
              <p className="offer-description">Book 3 months in advance and save 20%</p>
              <div className="offer-discount">20% OFF</div>
              <div className="offer-validity">Valid until Dec 31, 2024</div>
              <button className="btn btn-primary">Claim Offer</button>
            </div>
          </div>
          
          <div className="offer-card">
            <div className="offer-badge">Popular</div>
            <div className="offer-content">
              <h3 className="offer-title">Group Discount</h3>
              <p className="offer-description">Bring 5+ friends and get special pricing</p>
              <div className="offer-discount">15% OFF</div>
              <div className="offer-validity">Groups of 5 or more</div>
              <button className="btn btn-primary">Learn More</button>
            </div>
          </div>
          
          <div className="offer-card">
            <div className="offer-badge">New</div>
            <div className="offer-content">
              <h3 className="offer-title">Weekend Explorer</h3>
              <p className="offer-description">Perfect 2-day weekend getaway package</p>
              <div className="offer-discount">$199</div>
              <div className="offer-validity">Weekends only</div>
              <button className="btn btn-primary">Book Now</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OfferSection;