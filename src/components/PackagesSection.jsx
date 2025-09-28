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
 * ✅ Fixed swipe/wheel navigation:
 *    - Symmetric swipe detection (both left → right and right → left).
 *    - Prevents double triggers.
 *    - Mouse wheel now correctly handles both left/right and up/down.
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

// --- Transition values ---
const CARD_TRANSITION = { type: "spring", stiffness: 180, damping: 22, duration: 0.65 };
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
  const [pendingDirection, setPendingDirection] = useState(null);
  const [animating, setAnimating] = useState(false);

  const wrapperRef = useRef(null);
  const animationDirection = useRef("right");
  const autoTimer = useRef(null);

  // Preload next/prev images
  useEffect(() => {
    const nextIdx = (deckPosition + 1) % packages.length;
    const prevIdx = (deckPosition - 1 + packages.length) % packages.length;
    preloadImage(packages[nextIdx].image);
    preloadImage(packages[prevIdx].image);
  }, [deckPosition]);

  // Infinite navigation
  const nextCard = useCallback(() => {
    if (animating) return;
    setPendingDirection("right");
    setAnimating(true);
    setTimeout(() => {
      setDeckPosition((pos) => (pos + 1) % packages.length);
      setAnimating(false);
      setPendingDirection(null);
    }, CARD_TRANSITION.duration * 800);
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
      if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) {
        if (e.deltaX > 0) nextCard();
        else if (e.deltaX < 0) prevCard();
      } else {
        if (e.deltaY > 0) nextCard();
        else if (e.deltaY < 0) prevCard();
      }
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

  // Dual-card overlap logic
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
    const currentCard = {
      key: packages[currentIdx].title + "-current",
      idx: currentIdx,
      initial: { opacity: 1, x: 0, scale: 1 },
      animate: { opacity: 0.25, x: -CARD_ANIMATION_X * dir * 0.7, scale: 0.94 },
      exit: { opacity: 0, x: -CARD_ANIMATION_X * dir, scale: 0.9 }
    };
    const nextCardDef = {
      key: packages[nextIdx].title + "-next",
      idx: nextIdx,
      initial: { opacity: 0.25, x: CARD_ANIMATION_X * dir * 0.7, scale: 0.94 },
      animate: { opacity: 1, x: 0, scale: 1 },
      exit: { opacity: 0, x: CARD_ANIMATION_X * dir, scale: 0.9 }
    };
    return dir === 1 ? [currentCard, nextCardDef] : [nextCardDef, currentCard];
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
                dragConstraints={{ left: -80, right: 80 }}
                dragElastic={0.4}
                style={{
                  position: "absolute",
                  width: "100%",
                  left: 0,
                  top: 0,
                  zIndex: card.key.includes("-next") ? 2 : 1,
                  pointerEvents: pendingDirection ? "none" : "auto"
                }}
                onDragStart={() => {
                  setIsDragging(true);
                  clearTimeout(autoTimer.current);
                }}
                onDrag={(event, info) => setDragX(info.offset.x)}
                onDragEnd={(event, info) => {
                  if (animating) return;
                  setIsDragging(false);
                  setDragX(0);

                  const swipeThreshold = 100;
                  const velocityThreshold = 500;

                  const offset = info.offset.x;
                  const velocity = info.velocity.x;

                  const swipePower = offset + velocity * 0.25;

                  if (swipePower < -swipeThreshold || velocity < -velocityThreshold) {
                    nextCard();
                  } else if (swipePower > swipeThreshold || velocity > velocityThreshold) {
                    prevCard();
                  }
                }}
              >
                <div className="package-card-image">
                  <img
                    src={packages[card.idx].image}
                    alt={packages[card.idx].title}
                    draggable={false}
                    loading="lazy"
                  />
                </div>
                <div className="package-card-content">
                  <h2 className="package-title">{packages[card.idx].title}</h2>
                  <div className="package-duration">{packages[card.idx].duration}</div>
                  <div className={`package-badge ${packages[card.idx].badgeClass}`}>{packages[card.idx].badge}</div>
                  <div className="package-description">{packages[card.idx].description}</div>
                  <div className="package-ctas">
                    <button className="package-cta-primary">
                      Contact Us<span className="package-cta-primary-icon">→</span>
                    </button>
                    <a className="package-cta-secondary" href={packages[card.idx].ctaDetails}>
                      View Details
                    </a>
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
          <div className="package-progress-indicator" aria-label="Package Progress">
            {packages.map((_, i) => (
              <div key={i} className={`progress-dot${i === deckPosition ? " active" : ""}`}></div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PackagesSection;
