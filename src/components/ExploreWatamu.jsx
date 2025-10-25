import React from "react";
import { useNavigate } from "react-router-dom";
import { useLanguage } from "../hooks/useLanguage";
import watamuMain from "../assets/images/watamu-main.jpg"; // ✅ direct import

const ExploreWatamu = () => {
  const navigate = useNavigate();
  

  
  const handleViewDetails = () => {
    navigate("/viewdetails/explore-watamu");
  };

  return (
    <section className="explore-watamu-section">
      <h2 className="explore-title">Explore Watamu</h2>

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

        <button className="explore-btn" onClick={handleViewDetails}>
          View Details
        </button>
      </div>
    </section>
  );
};

export default ExploreWatamu;
