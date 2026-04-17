import React, { useEffect, useRef, useState, useCallback } from "react";
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
  "#c07830",
];

/* Source badge config */
const SOURCE_META = {
  instagram: {
    label: "via Instagram",
    icon: (
      <svg viewBox="0 0 24 24" width="11" height="11" fill="currentColor" aria-hidden="true">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
      </svg>
    ),
    className: "rv-source--instagram",
  },
  facebook: {
    label: "via Facebook",
    icon: (
      <svg viewBox="0 0 24 24" width="11" height="11" fill="currentColor" aria-hidden="true">
        <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.413c0-3.025 1.792-4.697 4.533-4.697 1.312 0 2.686.236 2.686.236v2.97h-1.513c-1.491 0-1.956.93-1.956 1.883v2.268h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z" />
      </svg>
    ),
    className: "rv-source--facebook",
  },
  email: {
    label: "via Email",
    icon: (
      <svg viewBox="0 0 24 24" width="11" height="11" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
      </svg>
    ),
    className: "rv-source--email",
  },
  sule: {
    label: "directly to Sule",
    icon: (
      <svg viewBox="0 0 24 24" width="11" height="11" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
        <circle cx="12" cy="7" r="4" />
      </svg>
    ),
    className: "rv-source--sule",
  },
};

function ReviewCard({ review, index }) {
  const { t } = useLanguage();
  const source = SOURCE_META[review.source] || SOURCE_META.email;
  return (
    <article
      className="rv-card"
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

        <div className="rv-badges">
          <span className={`rv-source ${source.className}`}>
            {source.icon}
            {source.label}
          </span>
          <span className="rv-verified">
            <svg viewBox="0 0 20 20" width="11" height="11" fill="currentColor" aria-hidden="true">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            {t('reviews.verified')}
          </span>
        </div>
      </div>
    </article>
  );
}

/* ── Mobile carousel ── */
function MobileCarousel({ reviews }) {
  const trackRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const intervalRef = useRef(null);
  const touchStartX = useRef(null);
  const count = reviews.length;

  const goTo = useCallback((idx) => {
    const track = trackRef.current;
    if (!track) return;
    const clamped = (idx + count) % count;
    setActiveIndex(clamped);
    track.scrollTo({ left: clamped * track.offsetWidth, behavior: "smooth" });
  }, [count]);

  /* Auto-advance every 5.5 s */
  const startAuto = useCallback(() => {
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setActiveIndex((prev) => {
        const next = (prev + 1) % count;
        const track = trackRef.current;
        if (track) track.scrollTo({ left: next * track.offsetWidth, behavior: "smooth" });
        return next;
      });
    }, 5500);
  }, [count]);

  useEffect(() => {
    startAuto();
    return () => clearInterval(intervalRef.current);
  }, [startAuto]);

  /* Sync dot when user manually scrolls */
  const handleScroll = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;
    const idx = Math.round(track.scrollLeft / track.offsetWidth);
    setActiveIndex(idx);
  }, []);

  /* Touch swipe */
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
    clearInterval(intervalRef.current);
  };
  const handleTouchEnd = (e) => {
    if (touchStartX.current === null) return;
    const dx = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(dx) > 40) goTo(activeIndex + (dx > 0 ? 1 : -1));
    touchStartX.current = null;
    startAuto();
  };

  return (
    <div className="rv-carousel-wrap">
      <div
        className="rv-carousel-track"
        ref={trackRef}
        onScroll={handleScroll}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {reviews.map((review, index) => (
          <div className="rv-carousel-slide" key={index}>
            <ReviewCard review={review} index={index} />
          </div>
        ))}
      </div>

      {/* Dot indicators */}
      <div className="rv-carousel-dots" aria-hidden="true">
        {reviews.map((_, i) => (
          <button
            key={i}
            className={`rv-dot${i === activeIndex ? " rv-dot--active" : ""}`}
            onClick={() => { goTo(i); clearInterval(intervalRef.current); startAuto(); }}
            aria-label={`Go to review ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

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

      {/* Desktop: 3-col grid */}
      <div className="rv-grid rv-desktop-only">
        {reviews.map((review, index) => (
          <ReviewCard key={index} review={review} index={index} />
        ))}
      </div>

      {/* Mobile: horizontal carousel */}
      <div className="rv-mobile-only">
        <MobileCarousel reviews={reviews} />
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