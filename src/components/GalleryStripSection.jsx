import React, { useRef, useEffect, useCallback } from "react";
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

// Only use scenic/wildlife images — no logos, no UI screenshots
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

const IMG_SIZE = 280;  // square size in px
const IMG_GAP = 14;    // gap between images in px
const STEP = 4;        // images to advance per slide
const PAUSE_MS = 12000; // hold time between slides (ms)
const SLIDE_MS = 1500;  // transition duration (ms)

const GalleryStripSection = () => {
  const innerRef = useRef(null);
  const indexRef = useRef(0);
  const pausedRef = useRef(false);
  const timerRef = useRef(null);
  const total = IMAGES.length;

  // Doubled list for seamless looping
  const doubled = [...IMAGES, ...IMAGES];

  const getX = (idx) => -(idx * (IMG_SIZE + IMG_GAP));

  // Core slide: animate to a new index, wrapping seamlessly
  const slideTo = useCallback((newIdx) => {
    const el = innerRef.current;
    if (!el) return;

    // Wrap forward past end of first copy
    if (newIdx >= total) {
      indexRef.current = newIdx;
      el.style.transition = `transform ${SLIDE_MS}ms cubic-bezier(0.45, 0, 0.55, 1)`;
      el.style.transform = `translateX(${getX(newIdx)}px)`;
      setTimeout(() => {
        indexRef.current -= total;
        el.style.transition = "none";
        el.style.transform = `translateX(${getX(indexRef.current)}px)`;
      }, SLIDE_MS + 80);
      return;
    }

    // Wrap backward past start — jump silently to end of first copy, then slide back
    if (newIdx < 0) {
      const jumpIdx = total + newIdx; // e.g. newIdx=-4 → total-4
      el.style.transition = "none";
      el.style.transform = `translateX(${getX(jumpIdx + STEP)}px)`;
      // Force reflow so the no-transition jump registers before we animate
      void el.offsetWidth;
      indexRef.current = jumpIdx;
      el.style.transition = `transform ${SLIDE_MS}ms cubic-bezier(0.45, 0, 0.55, 1)`;
      el.style.transform = `translateX(${getX(jumpIdx)}px)`;
      return;
    }

    indexRef.current = newIdx;
    el.style.transition = `transform ${SLIDE_MS}ms cubic-bezier(0.45, 0, 0.55, 1)`;
    el.style.transform = `translateX(${getX(newIdx)}px)`;
  }, [total]);

  // Auto-advance (respects pause)
  const advance = useCallback(() => {
    if (pausedRef.current) return;
    slideTo(indexRef.current + STEP);
  }, [slideTo]);

  // Manual arrow scroll (always fires, resets the auto-interval timer)
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

  // Touch swipe support for mobile
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
      <div className="gallery-strip__header">
        <span className="gallery-strip__eyebrow">Visual Stories</span>
        <h2 className="gallery-strip__title">Through the Lens</h2>
        <p className="gallery-strip__subtitle">
          Moments captured from our safaris and excursions across the wild
        </p>
      </div>

      <div className="gallery-strip__nav-wrap">
        {/* Left arrow */}
        <button
          className="gallery-strip__nav-btn gallery-strip__nav-btn--left"
          onClick={() => manualScroll(-1)}
          aria-label="Scroll gallery left"
        >
          &#8249;
        </button>

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

        {/* Right arrow */}
        <button
          className="gallery-strip__nav-btn gallery-strip__nav-btn--right"
          onClick={() => manualScroll(1)}
          aria-label="Scroll gallery right"
        >
          &#8250;
        </button>
      </div>
    </section>
  );
};

export default GalleryStripSection;
