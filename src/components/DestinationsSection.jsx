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

// ─── Destination data ────────────────────────────────────────────────────────
const destinations = [
  {
    id: "safari-blue",
    image: DolphinSafariBlue1,
    image2: SafariBlue2,
    imageAlt: "Watamu ocean and dolphins",
    image2Alt: "Snorkeling in Watamu Marine Park",
    imagePosition: "center",
    price: "€70 – €80 pp",
    duration: "Full Day",
    tag: "Ocean Adventure",
  },
  {
    id: "sardegna-sandbank",
    image: SardegnaTour1,
    image2: Sardegna1,
    imageAlt: "Sardegna 2 sandbank turquoise waters",
    image2Alt: "Crystal water at Sardegna 2 sandbank",
    imagePosition: "center",
    price: "€60 – €70 pp",
    duration: "Half Day",
    tag: "Beach Paradise",
  },
  {
    id: "gede-marafa",
    image: GedeRuins,
    image2: HellsKitchen,
    imageAlt: "Gede Ruins ancient Swahili city",
    image2Alt: "Marafa Depression — Hell's Kitchen canyon",
    imagePosition: "center top",
    price: "€80 – €90 pp",
    duration: "Half Day",
    tag: "History & Nature",
  },
  {
    id: "tsavo-east",
    image: ElephantSunset,
    image2: TsavoEast2,
    imageAlt: "Tsavo East red elephants at sunset",
    image2Alt: "Tsavo East National Park landscape",
    imagePosition: "center",
    price: "From €250 pp",
    duration: "2 Days / 1 Night",
    tag: "Wildlife Safari",
  },
  {
    id: "village-tour",
    image: WatamuCulturalTour1,
    image2: WatamuCulturalTour2,
    imageAlt: "Watamu village cultural life",
    image2Alt: "Local crafts and culture in Watamu",
    imagePosition: "center",
    price: "Contact Us",
    duration: "Half Day",
    tag: "Cultural Immersion",
  },
  {
    id: "maasai-mara",
    image: ClassicMaasaiMara,
    image2: WildebeestMigration,
    imageAlt: "Maasai Mara golden savannah at golden hour",
    image2Alt: "The Great Wildebeest Migration crossing the Mara River",
    imagePosition: "center",
    price: "From €250 pp",
    duration: "3 Days / 2 Nights",
    tag: "Wildlife Safari",
  },
];

const CONTENT = {
  "safari-blue": {
    headline: "Dive Into the Wild Blue",
    subheadline: "Safari Blue — Dolphins, Snorkeling & Mida Creek",
    story:
      "Chase wild dolphins across open ocean, glide through coral gardens in the Marine Park, and drift through the mystical mangroves of Mida Creek. This is freedom — salt air, cerulean water, and a world below the surface that will hold you forever.",
  },
  "sardegna-sandbank": {
    headline: "Lost in Turquoise",
    subheadline: "Sardegna 2 Sandbank Experience",
    story:
      "A strip of white sand rising from the Indian Ocean — no roads, no crowds, just crystal water in every direction. Swim, float, and let the world melt away. Fresh seafood awaits at Safina Beach Club before the afternoon sun paints everything gold.",
  },
  "gede-marafa": {
    headline: "Where Empires Slept & Canyons Burn",
    subheadline: "Gede Ruins & Marafa (Hell's Kitchen)",
    story:
      "Walk through a Swahili city swallowed by the forest — then stand at the edge of a canyon that blazes crimson as the sun sinks behind the earth. Two worlds, one day. The kind of afternoon that rewrites how you see Africa.",
  },
  "tsavo-east": {
    headline: "Face to Face with the Red Giants",
    subheadline: "Tsavo East Safari — 2 Days / 1 Night",
    story:
      "Nothing prepares you for the moment the first red elephant emerges from the bush. Tsavo is raw, vast, and unapologetically wild. Lions, giraffes, zebras, and the legendary red elephants of Kenya — all witnessed from an open jeep under a sky that goes on forever.",
  },
  "village-tour": {
    headline: "Taste the Soul of Swahili Life",
    subheadline: "Watamu Village Cultural Tour",
    story:
      "Slow down and truly arrive. Meet the families, walk the markets, discover the crafts, and hear the stories that make Watamu what it is. This is not tourism — this is belonging, if only for a morning.",
  },
  "maasai-mara": {
    headline: "The Greatest Show on Earth",
    subheadline: "Maasai Mara — Great Migration Safari",
    story:
      "Over a million wildebeest thunder across the Mara River in nature's most dramatic spectacle. Lions stalk the tall grass, leopards drape themselves over acacia trees, and the vast sky above makes you feel both small and infinite. The Mara isn't somewhere you visit — it's somewhere you become.",
  },
};

// ─── Component ────────────────────────────────────────────────────────────────
const DestinationsSection = () => {
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
  const content = CONTENT[dest.id];
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
        <span className="destinations-eyebrow">Kenya & Beyond</span>
        <h2 className="destinations-heading">Journeys That Change You</h2>
        <p className="destinations-swipe-hint" aria-hidden="true">
          <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6" /></svg>
          Swipe to explore
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
          aria-label={content.subheadline}
          key={dest.id}
        >
          {/* Mobile-only: subheadline appears above the main image */}
          <p className="dest-mobile-pre-subheadline">
            {content.subheadline}
          </p>

          {/* Image half */}
          <div
            className={`dest-image-half${imageOnLeft ? " dest-image-half--left" : " dest-image-half--right"}`}
            style={{ order: imageOnLeft ? 0 : 1 }}
          >
            <LazyImage
              src={dest.image}
              alt={dest.imageAlt}
              className="dest-img"
              style={{ objectPosition: dest.imagePosition }}
              draggable={false}
            />
            <div className="dest-img-overlay" />
            <span className="dest-tag">{dest.tag}</span>
          </div>

          {/* Text half */}
          <div
            className="dest-text-half"
            style={{ order: imageOnLeft ? 1 : 0 }}
          >
            {/* Title block: subheadline (hidden on mobile) + headline */}
            <div className="dest-text-titles">
              <p className="dest-subheadline dest-desktop-subheadline">{content.subheadline}</p>
              <h3 className="dest-headline">{content.headline}</h3>
            </div>

            {/* Accent image — desktop: after titles; mobile: after story */}
            <div className="dest-accent-img-wrap">
              <LazyImage
                src={dest.image2}
                alt={dest.image2Alt}
                className="dest-accent-img"
                draggable={false}
                eager
              />
              <div className="dest-accent-img-overlay" />
              {/* Duration + price overlay */}
              <div className="dest-accent-meta" aria-hidden="true">
                <span className="dest-accent-duration">{dest.duration}</span>
                <span className="dest-accent-price">{dest.price}</span>
              </div>
            </div>

            {/* Story + meta */}
            <div className="dest-text-story">
              <p className="dest-story">{content.story}</p>
              <div className="dest-meta">
                <span className="dest-duration">{dest.duration}</span>
                <span className="dest-price">{dest.price}</span>
              </div>
            </div>

            {/* CTA */}
            <div className="dest-cta-wrap">
              <Link to="/contact" className="dest-cta">
                Book This Adventure
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
            <span>Scroll to continue</span>
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
