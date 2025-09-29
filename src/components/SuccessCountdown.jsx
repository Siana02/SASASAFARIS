import React from "react";
import { useCounters } from "../hooks/useCounters";
import { useLanguage } from "../hooks/useLanguage";

const SuccessCountdown = () => {
  const { counts, formatCount, ref } = useCounters([20, 5, 100, 50]);
  const { t } = useLanguage();
  
  const labels = [
    t('successCountdown.uniqueDestinations'),
    t('successCountdown.yearsExperience'), 
    t('successCountdown.tailoredItineraries'),
    t('successCountdown.successfulSafaris')
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
