import React from "react";
import { useNavigate } from "react-router-dom";
import "./ExploreWatamu.css";

const ExploreWatamu = () => {
  const navigate = useNavigate();

  const handleViewDetails = () => {
    // Navigate to the specific package (adjust ID if needed)
    navigate("/viewdetails/watamu");
  };

  return (
    <section className="explore-watamu-section">
      <h2 className="explore-title">Explore Watamu</h2>

      <div className="explore-image-container">
        <img
          src="/images/watamu-main.jpg"
          alt="Explore Watamu"
          className="explore-image"
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
