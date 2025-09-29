import React from "react";
import { useCounters } from "../hooks/useCounters";
import { useLanguage } from "../hooks/useLanguage";

// Success Countdown component specifically for the packages section navigation
// This shows different values than the main SuccessCountdown component
const PackagesSuccessCountdown = () => {
  const { counts, formatCount, ref } = useCounters([15, 3, 95, 35]);
  const { t } = useLanguage();
  
  const labels = [
    t('packagesSuccessCountdown.hiddenGems'),
    t('packagesSuccessCountdown.safariExperts'), 
    t('packagesSuccessCountdown.successRate'),
    t('packagesSuccessCountdown.happyTravelers')
  ];

  return (
    <section className="success-countdown packages-success-countdown" ref={ref}>
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

export default PackagesSuccessCountdown;