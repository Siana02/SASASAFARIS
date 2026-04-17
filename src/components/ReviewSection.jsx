import React, { useEffect, useRef, useState } from "react";
import { useLanguage } from "../hooks/useLanguage";
import enTranslations from '../translations/en.json';
import itTranslations from '../translations/it.json';

function getInitials(name) {
  return name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);
}

const AVATAR_COLORS = [
  "#c8963e",
  "#b8720e",
  "#a0612a",
  "#8b4f1e",
  "#d4852a",
];

export default function ReviewSection() {
  const { t, currentLanguage } = useLanguage();
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  const translations = currentLanguage === 'it' ? itTranslations : enTranslations;
  const reviews = translations.reviews.reviews;

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          io.disconnect();
        }
      },
      { threshold: 0.08 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section
      className={`rv-section${visible ? " rv-section--visible" : ""}`}
      id="reviews"
      ref={sectionRef}
    >
      {/* Ornamental divider */}
      <div className="rv-ornament" aria-hidden="true">
        <span className="rv-orn-line" />
        <span className="rv-orn-icon">✦</span>
        <span className="rv-orn-line" />
      </div>

      {/* Header */}
      <div className="rv-header">
        <span className="rv-eyebrow">{t('reviews.eyebrow')}</span>
        <h2 className="rv-title">{t('reviews.title')}</h2>
        <p className="rv-subtitle">{t('reviews.subtitle')}</p>
      </div>

      {/* Cards grid */}
      <div className="rv-grid">
        {reviews.map((review, index) => (
          <article
            className="rv-card"
            key={index}
            style={{ transitionDelay: `${index * 0.1}s` }}
          >
            {/* Decorative quote mark */}
            <span className="rv-quote-mark" aria-hidden="true">&#8220;</span>

            {/* Stars */}
            <div className="rv-stars" aria-label="5 out of 5 stars">
              {Array.from({ length: 5 }).map((_, i) => (
                <svg
                  key={i}
                  className="rv-star"
                  viewBox="0 0 24 24"
                  width="18"
                  height="18"
                  aria-hidden="true"
                >
                  <path
                    fill="currentColor"
                    d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
                  />
                </svg>
              ))}
            </div>

            {/* Review text */}
            <blockquote className="rv-text">{review.text}</blockquote>

            {/* Footer */}
            <div className="rv-card-footer">
              {/* Avatar */}
              <div
                className="rv-avatar"
                aria-hidden="true"
                style={{ background: AVATAR_COLORS[index % AVATAR_COLORS.length] }}
              >
                {getInitials(review.name)}
              </div>

              <div className="rv-reviewer-info">
                <span className="rv-name">{review.name}</span>
                <span className="rv-trip-type">{review.type}</span>
              </div>

              <span className="rv-verified">
                <svg viewBox="0 0 20 20" width="13" height="13" fill="currentColor" aria-hidden="true">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                {t('reviews.verified')}
              </span>
            </div>
          </article>
        ))}
      </div>

      {/* Trust stats strip */}
      <div className="rv-trust-strip">
        <div className="rv-stat">
          <span className="rv-stat-value">{t('reviews.stat1Value')}</span>
          <span className="rv-stat-label">{t('reviews.stat1Label')}</span>
        </div>
        <span className="rv-stat-divider" aria-hidden="true" />
        <div className="rv-stat">
          <span className="rv-stat-value">{t('reviews.stat2Value')}</span>
          <span className="rv-stat-label">{t('reviews.stat2Label')}</span>
        </div>
        <span className="rv-stat-divider" aria-hidden="true" />
        <div className="rv-stat">
          <span className="rv-stat-value">{t('reviews.stat3Value')}</span>
          <span className="rv-stat-label">{t('reviews.stat3Label')}</span>
        </div>
      </div>
    </section>
  );
}