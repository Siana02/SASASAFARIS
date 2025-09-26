import React from "react";

const SuccessCountdown = () => (
  <section className="success-countdown">
    <div className="countdown-grid">
      <div className="countdown-square">
        <div className="countdown-number" data-count="20">0</div>
        <div className="countdown-label">Unique Destinations</div>
      </div>
      <div className="countdown-square">
        <div className="countdown-number" data-count="5">0</div>
        <div className="countdown-label">Years of Experience</div>
      </div>
      <div className="countdown-square">
        <div className="countdown-number" data-count="100">0</div>
        <div className="countdown-label">Tailored Itineraries</div>
      </div>
      <div className="countdown-square">
        <div className="countdown-number" data-count="50">0</div>
        <div className="countdown-label">Successful Safaris</div>
      </div>
    </div>
  </section>
);

export default SuccessCountdown;
