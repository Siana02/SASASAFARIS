import React from "react";
import { useLanguage } from "../hooks/useLanguage";

const ServiceHighlightsBelt = () => {
  const { t } = useLanguage();
  
  return (
    <section className="service-highlights-belt" aria-label="Service Highlights">
      <ul className="highlight-list">
        <li className="highlight-card">
          <span className="highlight-icon" aria-hidden="true">
            <i className="fa-solid fa-wallet"></i>
          </span>
          <span className="highlight-text">{t('highlights.valueForMoney')}</span>
        </li>
        <li className="highlight-card">
          <span className="highlight-icon" aria-hidden="true">
            <i className="fa-solid fa-lock"></i>
          </span>
          <span className="highlight-text">{t('highlights.securePayments')}</span>
        </li>
        <li className="highlight-card">
          <span className="highlight-icon" aria-hidden="true">
            <i className="fa-solid fa-cogs"></i>
          </span>
          <span className="highlight-text">{t('highlights.tailoredTrips')}</span>
        </li>
        <li className="highlight-card">
          <span className="highlight-icon" aria-hidden="true">
            <i className="fa-solid fa-headset"></i>
          </span>
          <span className="highlight-text">{t('highlights.support247')}</span>
        </li>
      </ul>
    </section>
  );
};

export default ServiceHighlightsBelt;
