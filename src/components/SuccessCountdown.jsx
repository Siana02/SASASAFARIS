import React from "react";
import { useCounters } from "../hooks/useCounters";

const SuccessCountdown = () => {
  const { counts, formatCount, ref } = useCounters([20, 5, 100, 50]);
  const labels = [
    "Unique Destinations",
    "Years of Experience", 
    "Tailored Itineraries",
    "Successful Safaris"
  ];

  return (
    <section className="success-countdown" ref={ref}>
      <div className="countdown-grid">
        {counts.map((count, index) => (
          <div key={index} className="countdown-square">
            <div className="countdown-number">
              {formatCount(count, index)}
            </div>
            <div className="countdown-label">{labels[index]}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SuccessCountdown;
