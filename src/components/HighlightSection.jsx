import React from "react";

const ServiceHighlightsBelt = () => (
  <section className="service-highlights-belt" aria-label="Service Highlights">
    <ul className="highlight-list">
      <li className="highlight-card">
        <span className="highlight-icon" aria-hidden="true">
          <i className="fa-solid fa-wallet"></i>
        </span>
        <span className="highlight-text">Value for Money</span>
      </li>
      <li className="highlight-card">
        <span className="highlight-icon" aria-hidden="true">
          <i className="fa-solid fa-lock"></i>
        </span>
        <span className="highlight-text">Secure Payments</span>
      </li>
      <li className="highlight-card">
        <span className="highlight-icon" aria-hidden="true">
          <i className="fa-solid fa-cogs"></i>
        </span>
        <span className="highlight-text">Tailored Trips</span>
      </li>
      <li className="highlight-card">
        <span className="highlight-icon" aria-hidden="true">
          <i className="fa-solid fa-headset"></i>
        </span>
        <span className="highlight-text">24/7 Support</span>
      </li>
    </ul>
  </section>
);

export default ServiceHighlightsBelt;
