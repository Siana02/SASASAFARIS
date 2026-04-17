/**
 * DestinationsPage — In-depth detail page for each destination / excursion.
 * Route: /destinations/:id
 *
 * Layout (dark brand theme):
 *   1. Full-height hero with main image + overlay + title
 *   2. Quick-stats bar (duration, price, location, tag)
 *   3. Overview / story paragraph
 *   4. Highlights grid (icon cards)
 *   5. Activities list
 *   6. What's included  /  Not included  (two-column)
 *   7. Customisable options
 *   8. Notes
 *   9. Full-width CTA → /contact?excursion=<id>
 */

import React, { useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { getDestinationById } from "../data/destinationsData";
import {
  DolphinSafariBlue1,
  SafariBlue2,
  SardegnaTour1,
  Sardegna1,
  GedeRuins,
  HellsKitchen,
  TsavoEast2,
  ElephantSunset,
  WatamuCulturalTour1,
  WatamuCulturalTour2,
  ClassicMaasaiMara,
  WildebeestMigration,
} from "../assets/images";
import LazyImage from "./LazyImage";

// Map destination id → hero image + accent image (matching DestinationsSection)
const IMAGES = {
  "safari-blue":        { hero: DolphinSafariBlue1,   accent: SafariBlue2 },
  "sardegna-sandbank":  { hero: SardegnaTour1,         accent: Sardegna1 },
  "gede-marafa":        { hero: GedeRuins,             accent: HellsKitchen },
  "tsavo-east":         { hero: ElephantSunset,        accent: TsavoEast2 },
  "village-tour":       { hero: WatamuCulturalTour1,   accent: WatamuCulturalTour2 },
  "maasai-mara":        { hero: ClassicMaasaiMara,     accent: WildebeestMigration },
};

// Section icons (inline SVG kept tiny for zero dependencies)
const CheckIcon = () => (
  <svg viewBox="0 0 20 20" width="18" height="18" fill="none" aria-hidden="true">
    <circle cx="10" cy="10" r="9" stroke="var(--accent)" strokeWidth="1.5" />
    <polyline points="6 10 9 13 14 7" stroke="var(--accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const CrossIcon = () => (
  <svg viewBox="0 0 20 20" width="18" height="18" fill="none" aria-hidden="true">
    <circle cx="10" cy="10" r="9" stroke="rgba(245,237,224,0.3)" strokeWidth="1.5" />
    <line x1="7" y1="7" x2="13" y2="13" stroke="rgba(245,237,224,0.4)" strokeWidth="2" strokeLinecap="round" />
    <line x1="13" y1="7" x2="7" y2="13" stroke="rgba(245,237,224,0.4)" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

const StarIcon = () => (
  <svg viewBox="0 0 20 20" width="18" height="18" fill="none" aria-hidden="true">
    <polygon points="10,2 12.4,7.6 18.5,8.2 14,12.3 15.5,18.2 10,15 4.5,18.2 6,12.3 1.5,8.2 7.6,7.6" stroke="var(--accent)" strokeWidth="1.4" fill="rgba(200,150,62,0.15)" strokeLinejoin="round" />
  </svg>
);

const PinIcon = () => (
  <svg viewBox="0 0 20 20" width="16" height="16" fill="none" aria-hidden="true">
    <path d="M10 2C7.24 2 5 4.24 5 7c0 3.5 5 11 5 11s5-7.5 5-11c0-2.76-2.24-5-5-5z" stroke="var(--accent)" strokeWidth="1.5" fill="rgba(200,150,62,0.15)" />
    <circle cx="10" cy="7" r="2" stroke="var(--accent)" strokeWidth="1.3" />
  </svg>
);

const ClockIcon = () => (
  <svg viewBox="0 0 20 20" width="16" height="16" fill="none" aria-hidden="true">
    <circle cx="10" cy="10" r="8" stroke="var(--accent)" strokeWidth="1.5" />
    <polyline points="10,5 10,10 13,12" stroke="var(--accent)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const PriceIcon = () => (
  <svg viewBox="0 0 20 20" width="16" height="16" fill="none" aria-hidden="true">
    <circle cx="10" cy="10" r="8" stroke="var(--accent)" strokeWidth="1.5" />
    <text x="10" y="14" textAnchor="middle" fontSize="9" fill="var(--accent)" fontWeight="700">€</text>
  </svg>
);

const ArrowIcon = () => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="12 5 19 12 12 19" />
  </svg>
);

// ─── Component ────────────────────────────────────────────────────────────────
const DestinationsPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const destination = getDestinationById(id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!destination) {
    return (
      <div className="dest-page-not-found">
        <h2>Destination not found</h2>
        <p>We couldn't find that destination. Explore our journeys below.</p>
        <Link to="/#destinations" className="dest-page-cta-btn">
          Back to Destinations
        </Link>
      </div>
    );
  }

  const imgs = IMAGES[id] || {};
  const contactUrl = `/contact?excursion=${encodeURIComponent(id)}`;

  return (
    <main className="dest-page">

      {/* ── 1. Hero ── */}
      <section className="dest-page-hero" aria-label={destination.headline}>
        {imgs.hero && (
          <LazyImage
            src={imgs.hero}
            alt={destination.subheadline}
            className="dest-page-hero__img"
          />
        )}
        <div className="dest-page-hero__overlay" aria-hidden="true" />
        <div className="dest-page-hero__content">
          <span className="dest-page-hero__tag">{destination.tag}</span>
          <h1 className="dest-page-hero__headline">{destination.headline}</h1>
          <p className="dest-page-hero__sub">{destination.subheadline}</p>
        </div>
        {/* Back link */}
        <button
          className="dest-page-hero__back"
          onClick={() => navigate(-1)}
          aria-label="Go back"
        >
          <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <polyline points="15 18 9 12 15 6" />
          </svg>
          Back
        </button>
      </section>

      {/* ── 2. Quick stats bar ── */}
      <div className="dest-page-stats" aria-label="Trip details">
        <div className="dest-page-stat">
          <ClockIcon />
          <span className="dest-page-stat__label">Duration</span>
          <span className="dest-page-stat__value">{destination.duration}</span>
        </div>
        <div className="dest-page-stat">
          <PriceIcon />
          <span className="dest-page-stat__label">From</span>
          <span className="dest-page-stat__value dest-page-stat__value--price">{destination.price}</span>
        </div>
        <div className="dest-page-stat">
          <PinIcon />
          <span className="dest-page-stat__label">Location</span>
          <span className="dest-page-stat__value">{destination.location}</span>
        </div>
        <div className="dest-page-stat dest-page-stat--cta">
          <Link to={contactUrl} className="dest-page-cta-btn dest-page-cta-btn--compact">
            Book Now
            <ArrowIcon />
          </Link>
        </div>
      </div>

      {/* ── 3. Overview ── */}
      <section className="dest-page-section dest-page-overview">
        <div className="dest-page-section__inner dest-page-overview__grid">
          <div className="dest-page-overview__text">
            <span className="dest-page-eyebrow">About This Journey</span>
            <p className="dest-page-overview__body">{destination.overview}</p>
          </div>
          {imgs.accent && (
            <div className="dest-page-overview__img-wrap">
              <LazyImage
                src={imgs.accent}
                alt={destination.subheadline + " — detail"}
                className="dest-page-overview__img"
              />
              <div className="dest-page-overview__img-overlay" aria-hidden="true" />
            </div>
          )}
        </div>
      </section>

      {/* ── 4. Highlights ── */}
      <section className="dest-page-section dest-page-highlights">
        <div className="dest-page-section__inner">
          <span className="dest-page-eyebrow">Highlights</span>
          <h2 className="dest-page-section__title">What Makes This Special</h2>
          <ul className="dest-page-highlights__list" aria-label="Journey highlights">
            {destination.highlights.map((h, i) => (
              <li key={i} className="dest-page-highlight-card">
                <span className="dest-page-highlight-card__icon" aria-hidden="true">
                  <StarIcon />
                </span>
                <span>{h}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── 5. Activities ── */}
      <section className="dest-page-section dest-page-activities">
        <div className="dest-page-section__inner dest-page-activities__grid">
          <div>
            <span className="dest-page-eyebrow">Itinerary</span>
            <h2 className="dest-page-section__title">Activities &amp; Experiences</h2>
            <ul className="dest-page-list" aria-label="Activities">
              {destination.activities.map((a, i) => (
                <li key={i} className="dest-page-list__item">
                  <span className="dest-page-list__num">{String(i + 1).padStart(2, "0")}</span>
                  <span>{a}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Customisable options sidebar */}
          <div className="dest-page-custom-box">
            <span className="dest-page-eyebrow">Flexible Itinerary</span>
            <h3 className="dest-page-custom-box__title">Customise Your Trip</h3>
            <ul className="dest-page-list dest-page-list--custom" aria-label="Customisable options">
              {destination.customizable.map((c, i) => (
                <li key={i} className="dest-page-list__item dest-page-list__item--custom">
                  <span className="dest-page-list__dot" aria-hidden="true">✦</span>
                  <span>{c}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ── 6. Included / Not Included ── */}
      <section className="dest-page-section dest-page-inclusions">
        <div className="dest-page-section__inner dest-page-inclusions__grid">
          <div className="dest-page-inclusions__col dest-page-inclusions__col--in">
            <span className="dest-page-eyebrow">Included</span>
            <h2 className="dest-page-section__title">What's Included</h2>
            <ul className="dest-page-list" aria-label="Included in the price">
              {destination.included.map((item, i) => (
                <li key={i} className="dest-page-list__item">
                  <CheckIcon />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="dest-page-inclusions__col dest-page-inclusions__col--out">
            <span className="dest-page-eyebrow">Not Included</span>
            <h2 className="dest-page-section__title">Not Included</h2>
            <ul className="dest-page-list" aria-label="Not included in the price">
              {destination.notIncluded.map((item, i) => (
                <li key={i} className="dest-page-list__item dest-page-list__item--excluded">
                  <CrossIcon />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ── 7. Notes ── */}
      {destination.notes && destination.notes.length > 0 && (
        <section className="dest-page-section dest-page-notes">
          <div className="dest-page-section__inner">
            <span className="dest-page-eyebrow">Good to Know</span>
            <ul className="dest-page-notes__list" aria-label="Useful notes">
              {destination.notes.map((note, i) => (
                <li key={i} className="dest-page-notes__item">
                  <span className="dest-page-notes__bullet" aria-hidden="true">ℹ</span>
                  <span>{note}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {/* ── 8. Full-width CTA ── */}
      <section className="dest-page-cta-section" aria-label="Book this journey">
        <div className="dest-page-cta-section__inner">
          <span className="dest-page-eyebrow">Ready to Go?</span>
          <h2 className="dest-page-cta-section__title">Start Your {destination.headline} Journey</h2>
          <p className="dest-page-cta-section__sub">
            Our team will craft the perfect itinerary for you. Reach out — we respond within 10–30 minutes.
          </p>
          <div className="dest-page-cta-section__actions">
            <Link to={contactUrl} className="dest-page-cta-btn dest-page-cta-btn--primary">
              Book This Adventure
              <ArrowIcon />
            </Link>
            <Link to="/#destinations" className="dest-page-cta-btn dest-page-cta-btn--secondary">
              Explore More Journeys
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
};

export default DestinationsPage;
