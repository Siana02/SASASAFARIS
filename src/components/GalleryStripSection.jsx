import React, { useRef, useEffect, useCallback, useState } from "react";
import {
  VacationHero,
  ClassicMaasaiMara,
  Amboseli,
  FamilySafari,
  RomanticSafari,
  CoastalExperience,
  WildebeestMigration,
  KenyanCoast,
  GreatRiftValley,
  MaasaiMara,
  WildernessExplorer,
  ElephantSunset,
  CuteGiraffe,
  SafariBlue2,
  TsavoEast1,
  TsavoEast2,
  DolphinSafariBlue1,
  HellsKitchen,
  WatamuCulturalTour1,
  WatamuCulturalTour2,
} from "../assets/images";

// Only scenic/wildlife images — no logos, no UI screenshots
const IMAGES = [
  ElephantSunset,
  ClassicMaasaiMara,
  Amboseli,
  CuteGiraffe,
  WildebeestMigration,
  MaasaiMara,
  TsavoEast1,
  FamilySafari,
  RomanticSafari,
  CoastalExperience,
  KenyanCoast,
  GreatRiftValley,
  WildernessExplorer,
  SafariBlue2,
  TsavoEast2,
  DolphinSafariBlue1,
  HellsKitchen,
  WatamuCulturalTour1,
  WatamuCulturalTour2,
  VacationHero,
];

const IMG_SIZE = 280;   // square size in px
const IMG_GAP = 14;     // gap between images in px
const STEP = 4;         // images to advance per slide
const PAUSE_MS = 12000; // hold time between slides (ms)
const SLIDE_MS = 1500;  // transition duration (ms)

const GalleryStripSection = () => {
  const innerRef = useRef(null);
  const indexRef = useRef(0);
  const pausedRef = useRef(false);
  const timerRef = useRef(null);
  const total = IMAGES.length;

  // slideKey increments on every slide to restart the progress bar animation
  const [slideKey, setSlideKey] = useState(0);

  // Doubled list for seamless looping
  const doubled = [...IMAGES, ...IMAGES];

  const getX = (idx) => -(idx * (IMG_SIZE + IMG_GAP));

  // Core slide — animates to newIdx, wraps seamlessly at both ends
  const slideTo = useCallback((newIdx) => {
    const el = innerRef.current;
    if (!el) return;

    const doSlide = (target) => {
      indexRef.current = target;
      el.style.transition = `transform ${SLIDE_MS}ms cubic-bezier(0.45, 0, 0.55, 1)`;
      el.style.transform = `translateX(${getX(target)}px)`;
      setSlideKey((k) => k + 1);
    };

    if (newIdx >= total) {
      doSlide(newIdx);
      setTimeout(() => {
        indexRef.current -= total;
        el.style.transition = "none";
        el.style.transform = `translateX(${getX(indexRef.current)}px)`;
      }, SLIDE_MS + 80);
      return;
    }

    // Wrap backward — silently jump to mirror position, then slide
    if (newIdx < 0) {
      const jumpFrom = total + newIdx + STEP;
      el.style.transition = "none";
      el.style.transform = `translateX(${getX(jumpFrom)}px)`;
      void el.offsetWidth; // force reflow
      doSlide(total + newIdx);
      return;
    }

    doSlide(newIdx);
  }, [total]);

  // Auto-advance (respects hover pause)
  const advance = useCallback(() => {
    if (pausedRef.current) return;
    slideTo(indexRef.current + STEP);
  }, [slideTo]);

  // Manual arrow — fires regardless of pause, resets auto-timer
  const manualScroll = useCallback((dir) => {
    clearInterval(timerRef.current);
    slideTo(indexRef.current + dir * STEP);
    timerRef.current = setInterval(advance, PAUSE_MS);
  }, [slideTo, advance]);

  useEffect(() => {
    timerRef.current = setInterval(advance, PAUSE_MS);
    return () => clearInterval(timerRef.current);
  }, [advance]);

  const handleMouseEnter = () => { pausedRef.current = true; };
  const handleMouseLeave = () => { pausedRef.current = false; };

  // Touch swipe
  const touchStartX = useRef(null);
  const handleTouchStart = (e) => { touchStartX.current = e.touches[0].clientX; };
  const handleTouchEnd = (e) => {
    if (touchStartX.current === null) return;
    const dx = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(dx) > 40) manualScroll(dx > 0 ? 1 : -1);
    touchStartX.current = null;
  };

  return (
    <section className="gallery-strip-section" aria-label="Photo gallery — moments from the wild">

      {/* ── Header ── */}
      <div className="gallery-strip__header">
        <span className="gallery-strip__eyebrow">Visual Stories</span>
        <h2 className="gallery-strip__title">Through the Lens</h2>

        {/* Brand ornament — fading gold lines + diamond */}
        <div className="gallery-strip__ornament" aria-hidden="true">
          <span className="gallery-strip__orn-line" />
          <span className="gallery-strip__orn-diamond" />
          <span className="gallery-strip__orn-line gallery-strip__orn-line--right" />
        </div>

        <p className="gallery-strip__subtitle">
          Moments captured from our safaris and excursions across the wild
        </p>
      </div>

      {/* ── Strip + arrows ── */}
      <div className="gallery-strip__nav-wrap">

        {/* Left arrow */}
        <button
          className="gallery-strip__nav-btn gallery-strip__nav-btn--left"
          onClick={() => manualScroll(-1)}
          aria-label="Scroll gallery left"
        >
          <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <polyline points="15 18 9 12 15 6" />
          </svg>
        </button>

        {/* Viewport wrapper — holds edge fades + scroll track */}
        <div className="gallery-strip__viewport-wrap">
          <div className="gallery-strip__edge gallery-strip__edge--left" aria-hidden="true" />
          <div className="gallery-strip__edge gallery-strip__edge--right" aria-hidden="true" />

          <div
            className="gallery-strip__viewport"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            <div className="gallery-strip__inner" ref={innerRef}>
              {doubled.map((src, idx) => (
                <div className="gallery-strip__item" key={idx}>
                  <img
                    src={src}
                    alt={`Safari moment ${(idx % total) + 1}`}
                    loading="lazy"
                    draggable="false"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right arrow */}
        <button
          className="gallery-strip__nav-btn gallery-strip__nav-btn--right"
          onClick={() => manualScroll(1)}
          aria-label="Scroll gallery right"
        >
          <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </button>
      </div>

      {/* ── Progress bar — restarts on each slide via key ── */}
      <div className="gallery-strip__progress-wrap" aria-hidden="true">
        <div key={slideKey} className="gallery-strip__progress-bar" />
      </div>

    </section>
  );
};

export default GalleryStripSection;

