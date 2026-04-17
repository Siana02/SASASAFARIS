import React, { useRef, useEffect, useCallback } from "react";
import {
  SafariHero,
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
  SafariHero,
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

  const advance = useCallback(() => {
    if (pausedRef.current) return;
    const el = innerRef.current;
    if (!el) return;

    indexRef.current += STEP;

    el.style.transition = `transform ${SLIDE_MS}ms cubic-bezier(0.45, 0, 0.55, 1)`;
    el.style.transform = `translateX(${getX(indexRef.current)}px)`;

    // Once the slide animation ends, silently reset if we've consumed the first copy
    if (indexRef.current >= total) {
      setTimeout(() => {
        indexRef.current -= total;
        el.style.transition = "none";
        el.style.transform = `translateX(${getX(indexRef.current)}px)`;
      }, SLIDE_MS + 80);
    }
  }, [total]);

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
    if (Math.abs(dx) > 40) advance();
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
    </section>
  );
};

export default GalleryStripSection;
