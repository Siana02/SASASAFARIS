/**
 * ✅ Infinite seamless carousel (no whitespace, smooth overlapping between exiting/entering cards)
 *    - Next and previous card render simultaneously during transition for seamless overlap.
 *    - No visual whitespace between cards at any moment.
 *    - Uses two cards rendered at once during animation.
 *
 * ✅ Lazy-loading images and faster rendering
 *    - Added "loading='lazy'" to all <img> tags.
 *    - Images are preloaded for next/previous card to reduce delay.
 *
 * ✅ UX improved: next card begins appearing slightly before the previous fully leaves
 *    - Uses a custom animation with both current and next card visible and overlapping during transition.
 *    - Animation timing/opacity tweaked for slight overlap and smoothness.
 *
 * --- Everything else is unchanged (CSS, layout, event handling, etc.) ---
 */

import React, { useState, useRef, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ClassicMaasaiMara,
  Amboseli,
  FamilySafari,
  RomanticSafari,
  CoastalExperience
} from "../assets/images";
import PackagesSuccessCountdown from "./PackagesSuccessCountdown";

const packages = [
  { image: ClassicMaasaiMara, title: "Mara & Tsavo Wildlife Safari", duration: "5 Days / 4 Nights", badge: "⭐ 4.9/5 · Most Popular", badgeClass: "badge-popular", description: "Experience the iconic Big 5 across two legendary parks. Witness lions, elephants, and cheetahs in their natural habitat, with expert-guided game drives and evening sundowners.", ctaDetails: "#details-mara-tsavo" },
  { image: Amboseli, title: "Amboseli & Chyulu Explorer", duration: "4 Days / 3 Nights", badge: "⭐ 4.8/5 · Adventure Pick", badgeClass: "badge-adventure", description: "Marvel at Amboseli’s majestic elephants against Mount Kilimanjaro’s backdrop and explore the hidden trails of Chyulu Hills for a serene wildlife adventure.", ctaDetails: "#details-amboseli-chyulu" },
  { image: FamilySafari, title: "Family Safari & Beach Holiday", duration: "7 Days / 6 Nights", badge: "⭐ 4.9/5 · Family Favorite", badgeClass: "badge-family", description: "A perfect family mix of safari excitement and beach relaxation. Enjoy safe guided game drives, sandcastle building on Diani Beach, and fun-filled coastal activities for all ages.", ctaDetails: "#details-family-safari-beach" },
  { image: RomanticSafari, title: "Romantic Safari & Honeymoon Escape", duration: "6 Days / 5 Nights", badge: "⭐ 5/5 · Romantic Getaway", badgeClass: "badge-romantic", description: "Indulge in a couple’s dream getaway with private safari lodges, candlelit dinners under the stars, and tranquil beachside sunsets for an unforgettable romantic experience.", ctaDetails: "#details-romantic-safari" },
  { image: CoastalExperience, title: "Kenyan Coastal Adventure", duration: "5 Days / 4 Nights", badge: "⭐ 4.7/5 · Coastal Escape", badgeClass: "badge-coastal", description: "Discover Kenya’s stunning coastline with sun-soaked beaches, snorkeling adventures, and cultural explorations from Watamu to Diani. A perfect blend of adventure and relaxation.", ctaDetails: "#details-coastal-adventure" }
];

const CARD_TRANSITION = { type: "spring", stiffness: 420, damping: 42, duration: 0.45 };
const CARD_ANIMATION_X = 300; // px horizontal slide
const AUTO_ADVANCE_INTERVAL = 6000;

const preloadImage = src => {
  const img = new window.Image();
  img.src = src;
};

const PackagesSection = () => {
  const [deckPosition, setDeckPosition] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [dragX, setDragX] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isWrapperFocused, setIsWrapperFocused] = useState(false);
  const [pendingDirection, setPendingDirection] = useState(null); // "right" or "left" or null
  const [animating, setAnimating] = useState(false);

  const wrapperRef = useRef(null);
  const animationDirection = useRef("right");
  const autoTimer = useRef(null);

  // Preload next/prev images for instant load
  useEffect(() => {
    const nextIdx = (deckPosition + 1) % packages.length;
    const prevIdx = (deckPosition - 1 + packages.length) % packages.length;
    preloadImage(packages[nextIdx].image);
    preloadImage(packages[prevIdx].image);
  }, [deckPosition]);

  // Infinite loop navigation
  const nextCard = useCallback(() => {
    if (animating) return;
    setPendingDirection("right");
    setAnimating(true);
    setTimeout(() => {
      setDeckPosition((pos) => (pos + 1) % packages.length);
      setAnimating(false);
      setPendingDirection(null);
    }, CARD_TRANSITION.duration * 800); // Slightly less than full duration for overlap
    animationDirection.current = "right";
  }, [animating]);

  const prevCard = useCallback(() => {
    if (animating) return;
    setPendingDirection("left");
    setAnimating(true);
    setTimeout(() => {
      setDeckPosition((pos) => (pos - 1 + packages.length) % packages.length);
      setAnimating(false);
      setPendingDirection(null);
    }, CARD_TRANSITION.duration * 800);
    animationDirection.current = "left";
  }, [animating]);

  // Auto-advance
  useEffect(() => {
    if (!isHovered && !isDragging && !animating) {
      autoTimer.current = setTimeout(nextCard, AUTO_ADVANCE_INTERVAL);
    }
    return () => clearTimeout(autoTimer.current);
  }, [deckPosition, isHovered, isDragging, nextCard, animating]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isWrapperFocused) return;
      if (e.key === "ArrowRight" || e.key === "ArrowDown") nextCard();
      else if (e.key === "ArrowLeft" || e.key === "ArrowUp") prevCard();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isWrapperFocused, nextCard, prevCard]);

  // Mouse wheel navigation
  useEffect(() => {
    const handleWheel = (e) => {
      if (!isWrapperFocused) return;
      if (e.deltaX > 0 || e.deltaY > 0) nextCard();
      else if (e.deltaX < 0 || e.deltaY < 0) prevCard();
    };
    const wrapper = wrapperRef.current;
    if (wrapper) wrapper.addEventListener("wheel", handleWheel, { passive: false });
    return () => {
      if (wrapper) wrapper.removeEventListener("wheel", handleWheel);
    };
  }, [isWrapperFocused, nextCard, prevCard]);

  // Touch swipe navigation
  useEffect(() => {
    let touchStartX = null;
    let touchStartY = null;
    const wrapper = wrapperRef.current;

    const handleTouchStart = (e) => {
      touchStartX = e.touches[0].clientX;
      touchStartY = e.touches[0].clientY;
    };

    const handleTouchEnd = (e) => {
      if (touchStartX === null || touchStartY === null) return;
      const deltaX = touchStartX - e.changedTouches[0].clientX;
      const deltaY = touchStartY - e.changedTouches[0].clientY;
      if (Math.abs(deltaX) > Math.abs(deltaY) && Math.abs(deltaX) > 50) {
        if (deltaX > 0) nextCard();
        else prevCard();
      }
      touchStartX = null;
      touchStartY = null;
    };

    if (wrapper) {
      wrapper.addEventListener("touchstart", handleTouchStart, { passive: true });
      wrapper.addEventListener("touchend", handleTouchEnd, { passive: false });
    }
    return () => {
      if (wrapper) {
        wrapper.removeEventListener("touchstart", handleTouchStart);
        wrapper.removeEventListener("touchend", handleTouchEnd);
      }
    };
  }, [nextCard, prevCard]);

  // Helper to get the indexes and animation direction for the dual-card overlap
  const getCardsForRender = () => {
    if (!pendingDirection) {
      return [{
        key: packages[deckPosition].title,
        idx: deckPosition,
        initial: { opacity: 0, x: 0, scale: 0.96 },
        animate: { opacity: 1, x: 0, scale: 1 },
        exit: { opacity: 0, x: 0, scale: 0.96 }
      }];
    }
    const currentIdx = deckPosition;
    const nextIdx =
      pendingDirection === "right"
        ? (currentIdx + 1) % packages.length
        : (currentIdx - 1 + packages.length) % packages.length;
    const dir = pendingDirection === "right" ? 1 : -1;
    // Current card (exiting)
    const currentCard = {
      key: packages[currentIdx].title + "-current",
      idx: currentIdx,
      initial: { opacity: 1, x: 0, scale: 1 },
      animate: { opacity: 0.5, x: -CARD_ANIMATION_X * dir * 0.8, scale: 0.96 }, // overlaps with next
      exit: { opacity: 0, x: -CARD_ANIMATION_X * dir, scale: 0.96 }
    };
    // Next card (entering)
    const nextCard = {
      key: packages[nextIdx].title + "-next",
      idx: nextIdx,
      initial: { opacity: 0.5, x: CARD_ANIMATION_X * dir * 0.8, scale: 0.96 },
      animate: { opacity: 1, x: 0, scale: 1 },
      exit: { opacity: 0, x: CARD_ANIMATION_X * dir, scale: 0.96 }
    };
    return dir === 1 ? [currentCard, nextCard] : [nextCard, currentCard];
  };

  const cardsForRender = getCardsForRender();

  return (
    <section className="packages-section" id="packages">
      <div className="packages-section-container">
        <div className="packages-intro-container">
          <h2 className="packages-title">Safari & Beach Packages</h2>
          <p className="packages-subtitle">
            Choose your adventure: classic safaris, family escapes, coastal relaxation and more.
          </p>
        </div>

        <div
          className="packages-wrapper"
          aria-label="Safari & Beach Packages"
          tabIndex={0}
          ref={wrapperRef}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onFocus={() => setIsWrapperFocused(true)}
          onBlur={() => setIsWrapperFocused(false)}
        >
          <AnimatePresence initial={false}>
            {cardsForRender.map(card => (
              <motion.article
                key={card.key}
                className="package-card"
                initial={card.initial}
                animate={card.animate}
                exit={card.exit}
                transition={CARD_TRANSITION}
                drag={pendingDirection ? false : "x"}
                dragConstraints={{ left: -50, right: 50 }}
                dragElastic={0.2}
                style={{
                  position: "absolute",
                  width: "100%",
                  left: 0,
                  top: 0,
                  zIndex: card.key.includes("-next") ? 2 : 1,
                  pointerEvents: pendingDirection ? "none" : "auto"
                }}
                onDragEnd={(event, info) => {
  setIsDragging(false);
  setDragX(0);

  const swipeThreshold = 100; // px
  const velocityThreshold = 500; // px/sec

  const offset = info.offset.x;
  const velocity = info.velocity.x;

  if (offset + velocity * 0.2 < -swipeThreshold || velocity < -velocityThreshold) {
    nextCard();
  } else if (offset + velocity * 0.2 > swipeThreshold || velocity > velocityThreshold) {
    prevCard();
  }
}}
              >
                <div className="package-card-image">
                  <img
                    src={packages[card.idx].image}
                    alt={packages[card.idx].title}
                    draggable={false}
                    loading="lazy" // <-- Lazy loading
                  />
                </div>
                <div className="package-card-content">
                  <h2 className="package-title">{packages[card.idx].title}</h2>
                  <div className="package-duration">{packages[card.idx].duration}</div>
                  <div className={`package-badge ${packages[card.idx].badgeClass}`}>{packages[card.idx].badge}</div>
                  <div className="package-description">{packages[card.idx].description}</div>
                  <div className="package-ctas">
                    <button className="package-cta-primary">Contact Us<span className="package-cta-primary-icon">→</span></button>
                    <a className="package-cta-secondary" href={packages[card.idx].ctaDetails}>View Details</a>
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>

          {/* ✅ Progress indicator */}
          <div className="package-progress-indicator" aria-label="Package Progress">
            {packages.map((_, i) => <div key={i} className={`progress-dot${i === deckPosition ? " active" : ""}`}></div>)}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PackagesSection;
