import React from "react";

const OfferSection = () => (
  <section className="best-offers-section" id="best-offers">
    <h2 className="best-offers-title">Best Offers This Month</h2>
    <div className="best-offers-cards">
      {/* Offer Card: Masai Mara */}
      <div className="offer-card">
        <div className="offer-img-holder">
          <img src="/assets/Wildebeest_migration.jpg" alt="Masai Mara Safari" />
        </div>
        <div className="offer-content">
          <div className="offer-top-row">
            <span className="offer-destination">Maasai Mara</span>
            <span className="offer-prices">
              <span className="old-price">€500</span>
              <span className="new-price">€250</span>
            </span>
          </div>
          <div className="offer-main-text">50% OFF</div>
          <div className="offer-desc">Wildebeest Migration</div>
          <button className="offer-details-btn" data-offer="mara">View Details</button>
        </div>
      </div>
      {/* Offer Card: Kenyan Coast */}
      <div className="offer-card">
        <div className="offer-img-holder">
          <img src="/assets/Kenyan_coast_1.jpg" alt="Kenyan Coast" />
        </div>
        <div className="offer-content">
          <div className="offer-top-row">
            <span className="offer-destination">Kenyan Coast</span>
            <span className="offer-prices">
              <span className="old-price">€300</span>
              <span className="new-price">€210</span>
            </span>
          </div>
          <div className="offer-main-text">30% OFF</div>
          <div className="offer-desc">Malindi to Diani</div>
          <button className="offer-details-btn" data-offer="coast">View Details</button>
        </div>
      </div>
    </div>
  </section>
);

export default OfferSection;
