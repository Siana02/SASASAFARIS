import React from "react";
import { WildebeestMigration, KenyanCoast } from "../assets/images";
import { Link } from "react-router-dom";
import { useLanguage } from "../hooks/useLanguage";

const OfferSection = () => {
  const { t } = useLanguage();
  
  return (
    <section className="best-offers-section" id="best-offers">
      <h2 className="best-offers-title">{t('offers.title')}</h2>
    <div className="best-offers-cards">
      {/* Offer Card: Masai Mara */}
      <div className="offer-card">
        <div className="offer-img-holder">
          <img src={WildebeestMigration} alt="Masai Mara Safari" />
        </div>
        <div className="offer-content">
          <div className="offer-top-row">
            <span className="offer-destination">Maasai Mara</span>
            <span className="offer-prices">
              <span className="old-price">€500</span>
              <span className="new-price">€250</span>
            </span>
          </div>
          <div className="offer-main-text">{t('offers.discount50')}</div>
          <div className="offer-desc">{t('offers.wildebeestMigration')}</div>
          <Link
      className="offer-details-btn"
      to={`/viewdetails/wildebeest-migration`}
    >
      {t('offers.viewDetails')}
    </Link>
        </div>
      </div>
      {/* Offer Card: Kenyan Coast */}
      <div className="offer-card">
        <div className="offer-img-holder">
          <img src={KenyanCoast} alt="Kenyan Coast" />
        </div>
        <div className="offer-content">
          <div className="offer-top-row">
            <span className="offer-destination">Kenyan Coast</span>
            <span className="offer-prices">
              <span className="old-price">€300</span>
              <span className="new-price">€210</span>
            </span>
          </div>
          <div className="offer-main-text">{t('offers.discount30')}</div>
          <div className="offer-desc">{t('offers.coastalTour')}</div>
          <Link
  className="offer-details-btn"
  to={`/viewdetails/coast-offer`}
>
  {t('offers.viewDetails')}
</Link>
        </div>
      </div>
    </div>
  </section>
);
};

export default OfferSection;
