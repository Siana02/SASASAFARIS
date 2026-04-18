/**
 * DestinationsSection — Immersive full-height split-screen destination carousel
 *
 * ✅ Each destination occupies the full viewport (100vh) on desktop
 * ✅ 50/50 split: image half + text half, alternating sides per card
 * ✅ Transitions: fade + subtle slide between destinations
 * ✅ Navigation: arrow buttons, keyboard arrows, horizontal swipe, mouse drag
 * ✅ Vertical scroll never cycles cards — only horizontal swipe does
 * ✅ Progress: numbered counter + dot indicators
 * ✅ "Scroll down" hint appears after viewing all cards
 * ✅ Mobile: subheadline → image → headline → story → accent img (with overlay) → CTA → arrows → progress
 */

import React, { useState, useRef, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
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
import { useLanguage } from "../hooks/useLanguage";
import { getDestinationById } from "../data/destinationsData";

// ─── Destination image data (text comes from destinationsData via language) ──
const destinations = [
  { id: "safari-blue",       image: DolphinSafariBlue1,    image2: SafariBlue2,           imagePosition: "center" },
  { id: "sardegna-sandbank", image: SardegnaTour1,          image2: Sardegna1,             imagePosition: "center" },
  { id: "gede-marafa",       image: GedeRuins,              image2: HellsKitchen,          imagePosition: "center top" },
  { id: "tsavo-east",        image: ElephantSunset,         image2: TsavoEast2,            imagePosition: "center" },
  { id: "village-tour",      image: WatamuCulturalTour1,    image2: WatamuCulturalTour2,   imagePosition: "center" },
  { id: "maasai-mara",       image: ClassicMaasaiMara,      image2: WildebeestMigration,   imagePosition: "center" },
];

// ─── Component ────────────────────────────────────────────────────────────────
const DestinationsSection = () => {
  const { t, currentLanguage } = useLanguage();
  const [active, setActive] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [direction, setDirection] = useState(null); // "next" | "prev"
  const [allSeen, setAllSeen] = useState(false);
  const wrapperRef = useRef(null);
  const touchStartX = useRef(null);
  const touchStartY = useRef(null);
  const dragStartX = useRef(null);
  const isDragging = useRef(false);

  const total = destinations.length;

  const goTo = useCallback(
    (nextIdx, dir) => {
      if (animating) return;
      setDirection(dir);
      setAnimating(true);
      setTimeout(() => {
        setActive(nextIdx);
        setAnimating(false);
        setDirection(null);
        if (nextIdx === total - 1) setAllSeen(true);
      }, 520);
    },
    [animating, total]
  );

  const next = useCallback(() => {
    goTo((active + 1) % total, "next");
  }, [active, total, goTo]);

  const prev = useCallback(() => {
    goTo((active - 1 + total) % total, "prev");
  }, [active, total, goTo]);

  // Keyboard navigation — only left/right arrows cycle cards;
  // up/down are left to the browser for normal page scrolling.
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "ArrowRight") { e.preventDefault(); next(); }
      else if (e.key === "ArrowLeft") { e.preventDefault(); prev(); }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [next, prev]);

  // Touch swipe — only triggers on predominantly horizontal gestures so that
  // normal vertical page scrolling is never accidentally intercepted.
  useEffect(() => {
    const el = wrapperRef.current;
    if (!el) return;
    const onTouchStart = (e) => {
      touchStartX.current = e.touches[0].clientX;
      touchStartY.current = e.touches[0].clientY;
    };
    const onTouchEnd = (e) => {
      if (touchStartX.current === null) return;
      const deltaX = touchStartX.current - e.changedTouches[0].clientX;
      const deltaY = touchStartY.current - e.changedTouches[0].clientY;
      // Only cycle cards when the swipe is clearly horizontal
      if (Math.abs(deltaX) > 50 && Math.abs(deltaX) > Math.abs(deltaY)) {
        deltaX > 0 ? next() : prev();
      }
      touchStartX.current = null;
      touchStartY.current = null;
    };
    el.addEventListener("touchstart", onTouchStart, { passive: true });
    el.addEventListener("touchend", onTouchEnd, { passive: true });
    return () => {
      el.removeEventListener("touchstart", onTouchStart);
      el.removeEventListener("touchend", onTouchEnd);
    };
  }, [next, prev]);

  // Mouse drag
  useEffect(() => {
    const el = wrapperRef.current;
    if (!el) return;
    const onMouseDown = (e) => { isDragging.current = true; dragStartX.current = e.clientX; };
    const onMouseUp = (e) => {
      if (!isDragging.current || dragStartX.current === null) return;
      const delta = dragStartX.current - e.clientX;
      if (Math.abs(delta) > 80) delta > 0 ? next() : prev();
      isDragging.current = false;
      dragStartX.current = null;
    };
    el.addEventListener("mousedown", onMouseDown);
    window.addEventListener("mouseup", onMouseUp);
    return () => {
      el.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mouseup", onMouseUp);
    };
  }, [next, prev]);

  const dest = destinations[active];
  const destData = getDestinationById(dest.id, currentLanguage);
  // Even index → image on left; odd → image on right
  const imageOnLeft = active % 2 === 0;

  const getSlideClass = () => {
    if (!animating) return "dest-slide dest-slide--visible";
    return `dest-slide dest-slide--exit-${direction}`;
  };

  return (
    <section className="destinations-section" id="destinations" aria-label="Destinations">
      {/* Section heading */}
      <div className="destinations-header">
        <span className="destinations-eyebrow">{t('destinations.eyebrow')}</span>
        <h2 className="destinations-heading">{t('destinations.heading')}</h2>
        <p className="destinations-swipe-hint" aria-hidden="true">
          <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6" /></svg>
          {t('destinations.swipeHint')}
          <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6" /></svg>
        </p>
      </div>

      {/* Carousel wrapper */}
      <div
        className="destinations-wrapper"
        ref={wrapperRef}
        role="region"
        aria-roledescription="carousel"
        aria-label="Destinations carousel"
        tabIndex={0}
      >
        {/* ── Slide ── */}
        <article
          className={getSlideClass()}
          aria-label={destData.subheadline}
          key={dest.id}
        >
          {/* Mobile-only: subheadline appears above the main image */}
          <p className="dest-mobile-pre-subheadline">
            {destData.subheadline}
          </p>

          {/* Image half */}
          <div
            className={`dest-image-half${imageOnLeft ? " dest-image-half--left" : " dest-image-half--right"}`}
            style={{ order: imageOnLeft ? 0 : 1 }}
          >
            <LazyImage
              src={dest.image}
              alt={destData.imageAlt}
              className="dest-img"
              style={{ objectPosition: dest.imagePosition }}
              draggable={false}
            />
            <div className="dest-img-overlay" />
            <span className="dest-tag">{destData.tag}</span>
          </div>

          {/* Text half */}
          <div
            className="dest-text-half"
            style={{ order: imageOnLeft ? 1 : 0 }}
          >
            {/* Title block: subheadline (hidden on mobile) + headline */}
            <div className="dest-text-titles">
              <p className="dest-subheadline dest-desktop-subheadline">{destData.subheadline}</p>
              <h3 className="dest-headline">{destData.headline}</h3>
            </div>

            {/* Accent image — desktop: after titles; mobile: after story */}
            <div className="dest-accent-img-wrap">
              <LazyImage
                src={dest.image2}
                alt={destData.image2Alt}
                className="dest-accent-img"
                draggable={false}
                eager
              />
              <div className="dest-accent-img-overlay" />
              {/* Duration + price overlay */}
              <div className="dest-accent-meta" aria-hidden="true">
                <span className="dest-accent-duration">{destData.duration}</span>
                <span className="dest-accent-price">{destData.price}</span>
              </div>
            </div>

            {/* Story + meta */}
            <div className="dest-text-story">
              <p className="dest-story">{destData.story}</p>
              <div className="dest-meta">
                <span className="dest-duration">{destData.duration}</span>
                <span className="dest-price">{destData.price}</span>
              </div>
            </div>

            {/* CTA */}
            <div className="dest-cta-wrap">
              <Link to={`/destinations/${dest.id}`} className="dest-cta">
                {t('destinations.exploreCta')}
                <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </Link>
            </div>
          </div>
        </article>

        {/* ── Desktop navigation arrows (float over the slide, hidden on mobile) ── */}
        <button
          className="dest-nav dest-nav--prev dest-nav--desktop"
          onClick={prev}
          aria-label="Previous destination"
        >
          <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="15 18 9 12 15 6" />
          </svg>
        </button>
        <button
          className="dest-nav dest-nav--next dest-nav--desktop"
          onClick={next}
          aria-label="Next destination"
        >
          <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </button>
      </div>

      {/* ── Progress, mobile arrows, scroll hint — below the card ── */}
      <div className="dest-bottom-controls">

        {/* Mobile-only arrow row */}
        <div className="dest-mobile-arrows" aria-label="Navigate destinations">
          <button className="dest-mobile-nav" onClick={prev} aria-label="Previous destination">
            <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>
          <button className="dest-mobile-nav" onClick={next} aria-label="Next destination">
            <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>
        </div>

        <div className="dest-progress">
          <span className="dest-counter">
            {String(active + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
          </span>
          <div className="dest-dots" role="tablist" aria-label="Destination indicator">
            {destinations.map((d, i) => (
              <button
                key={d.id}
                role="tab"
                aria-selected={i === active}
                aria-label={`Destination ${i + 1}`}
                className={`dest-dot${i === active ? " dest-dot--active" : ""}${i < active ? " dest-dot--seen" : ""}`}
                onClick={() => {
                  if (i > active) goTo(i, "next");
                  else if (i < active) goTo(i, "prev");
                }}
              />
            ))}
          </div>
        </div>

        {allSeen && (
          <div className="dest-scroll-hint" aria-live="polite">
            <span>{t('destinations.scrollToContinue')}</span>
            <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <polyline points="6 9 12 15 18 9" />
            </svg>
          </div>
        )}
      </div>
    </section>
  );
};

export default DestinationsSection;
