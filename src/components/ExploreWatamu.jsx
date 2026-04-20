import React from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "../hooks/useLanguage";
import watamuMain from "../assets/watamu-main.jpg"; // ✅ direct import

const ExploreWatamu = () => {
  const { t } = useLanguage();

  return (
    <section className="explore-watamu-section">
      <h2 className="explore-title"></h2>

      <div className="explore-image-container">
         <img
          src={watamuMain}
          alt="Watamu Coastline"
          className="explore-watamu-img"
        />
      </div>

      <div className="explore-content">
        <h3 className="explore-subtitle">Your Signature Coastal Escape</h3>
        <p className="explore-description">
          Discover the hidden charm of Watamu — where pristine beaches meet
          vibrant coral reefs and rich Swahili culture. From breathtaking sunset
          cruises to marine park snorkeling, Explore Watamu is our signature
          experience that captures the soul of the Kenyan coast.
        </p>

        <Link className="explore-btn" to="/contact">
          Plan Your Trip
        </Link>
      </div>
    </section>
  );
};

export default ExploreWatamu;
