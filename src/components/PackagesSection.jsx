// Animated horizontal deck for Safari packages with auto-advance and pause
// Includes hover-pause, keyboard + wheel + touch navigation
// Progress indicator only visible for cards, not About/SuccessCountdown

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

// Card deck data
const packages = [
  {
    image: ClassicMaasaiMara,
    title: "Mara & Tsavo Wildlife Safari",
    duration: "5 Days / 4 Nights",
    badge: "⭐ 4.9/5 · Most Popular",
    badgeClass: "badge-popular",
    description:
      "Experience the iconic Big 5 across two legendary parks. Witness lions, elephants, and cheetahs in their natural habitat, with expert-guided game drives and evening sundowners.",
    ctaDetails: "#details-mara-tsavo"
  },
  {
    image: Amboseli,
    title: "Amboseli & Chyulu Explorer",
    duration: "4 Days / 3 Nights",
    badge: "⭐ 4.8/5 · Adventure Pick",
    badgeClass: "badge-adventure",
    description:
      "Marvel at Amboseli’s majestic elephants against Mount Kilimanjaro’s backdrop and explore the hidden trails of Chyulu Hills for a serene wildlife adventure.",
    ctaDetails: "#details-amboseli-chyulu"
  },
  {
    image: FamilySafari,
    title: "Family Safari & Beach Holiday",
    duration: "7 Days / 6 Nights",
    badge: "⭐ 4.9/5 · Family Favorite",
    badgeClass: "badge-family",
    description:
      "A perfect family mix of safari excitement and beach relaxation. Enjoy safe guided game drives, sandcastle building on Diani Beach, and fun-filled coastal activities for all ages.",
    ctaDetails: "#details-family-safari-beach"
  },
  {
    image: RomanticSafari,
    title: "Romantic Safari & Honeymoon Escape",
    duration: "6 Days / 5 Nights",
    badge: "⭐ 5/5 · Romantic Getaway",
    badgeClass: "badge-romantic",
    description:
      "Indulge in a couple’s dream getaway with private safari lodges, candlelit dinners under the stars, and tranquil beachside sunsets for an unforgettable romantic experience.",
    ctaDetails: "#details-romantic-safari"
  },
  {
    image: CoastalExperience,
    title: "Kenyan Coastal Adventure",
    duration: "5 Days / 4 Nights",
    badge: "⭐ 4.7/5 · Coastal Escape",
    badgeClass: "badge-coastal",
    description:
      "Discover Kenya’s stunning coastline with sun-soaked beaches, snorkeling adventures, and cultural explorations from Watamu to Diani. A perfect blend of adventure and relaxation.",
    ctaDetails: "#details-coastal-adventure"
  }
];

const CARD_TRANSITION = { type: "spring", stiffness: 420, damping: 42, duration: 0.45 };
const CARD_ANIMATION_X = 120; // px horizontal slide
const AUTO_ADVANCE_INTERVAL = 6000; // ms pause per card



const PackagesSection = () => {
  const [deckPosition, setDeckPosition] = useState(0); // -1 = SuccessCountdown, 0-4 = cards, 5 = About
  const [isDragging, setIsDragging] = useState(false);
  const [dragX, setDragX] = useState(0);
  const [isWrapperFocused, setIsWrapperFocused] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const wrapperRef = useRef(null);
  const animationDirection = useRef("right");
  const autoTimer = useRef(null);

  const nextCard = useCallback(() => {
    setDeckPosition((pos) => {
      const newPos = pos < packages.length ? pos + 1 : pos;
      if (newPos > pos) animationDirection.current = "right";
      return newPos;
    });
  }, []);

  const prevCard = useCallback(() => {
    setDeckPosition((pos) => {
      const newPos = pos > -1 ? pos - 1 : pos;
      if (newPos < pos) animationDirection.current = "left";
      return newPos;
    });
  }, []);

  // Auto-advance with pause per card (pauses when hovered or dragging)
  useEffect(() => {
    if (deckPosition >= 0 && deckPosition < packages.length && !isHovered && !isDragging) {
      autoTimer.current = setTimeout(nextCard, AUTO_ADVANCE_INTERVAL);
    }
    return () => clearTimeout(autoTimer.current);
  }, [deckPosition, isHovered, isDragging, nextCard]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (isWrapperFocused) {
        if (e.key === "ArrowRight" || e.key === "ArrowDown") {
          e.preventDefault();
          nextCard();
        } else if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
          e.preventDefault();
          prevCard();
        }
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isWrapperFocused, nextCard, prevCard]);

  // Mouse wheel navigation
  useEffect(() => {
    const handleWheel = (e) => {
      if (isWrapperFocused && deckPosition >= 0 && deckPosition < packages.length) {
        e.preventDefault();
        if (e.deltaY > 0 || e.deltaX > 0) {
          nextCard();
        } else if (e.deltaY < 0 || e.deltaX < 0) {
          prevCard();
        }
      }
    };
    
    const wrapper = wrapperRef.current;
    if (wrapper) {
      wrapper.addEventListener("wheel", handleWheel, { passive: false });
    }
    return () => {
      if (wrapper) {
        wrapper.removeEventListener("wheel", handleWheel);
      }
    };
  }, [isWrapperFocused, deckPosition, nextCard, prevCard]);

  // Touch swipe navigation
  useEffect(() => {
    let touchStartX = null;
    let touchStartY = null;

    const handleTouchStart = (e) => {
      if (deckPosition >= 0 && deckPosition < packages.length) {
        touchStartX = e.touches[0].clientX;
        touchStartY = e.touches[0].clientY;
      }
    };

    const handleTouchEnd = (e) => {
      if (touchStartX !== null && touchStartY !== null && deckPosition >= 0 && deckPosition < packages.length) {
        const touchEndX = e.changedTouches[0].clientX;
        const touchEndY = e.changedTouches[0].clientY;
        const deltaX = touchStartX - touchEndX;
        const deltaY = touchStartY - touchEndY;
        
        // Only process horizontal swipes (ignore vertical scrolling)
        if (Math.abs(deltaX) > Math.abs(deltaY) && Math.abs(deltaX) > 50) {
          e.preventDefault();
          if (deltaX > 0) {
            nextCard(); // Swipe left to go to next card
          } else {
            prevCard(); // Swipe right to go to previous card
          }
        }
        
        touchStartX = null;
        touchStartY = null;
      }
    };

    const wrapper = wrapperRef.current;
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
  }, [deckPosition, nextCard, prevCard]);

  // Motion key
  const motionKey =
    deckPosition >= 0 && deckPosition < packages.length
      ? packages[deckPosition].title
      : deckPosition === packages.length
      ? "about"
      : "success-countdown";

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
          <AnimatePresence initial={false} custom={animationDirection.current}>
            {/* Cards */}
            {deckPosition >= 0 && deckPosition < packages.length && (
              <motion.article
                key={motionKey}
                className="package-card"
                initial={{
                  opacity: 0,
                  x: animationDirection.current === "right" ? CARD_ANIMATION_X : -CARD_ANIMATION_X,
                  scale: 0.96
                }}
                animate={{
                  opacity: 1,
                  x: isDragging ? dragX : 0,
                  scale: 1
                }}
                exit={{
                  opacity: 0,
                  x: animationDirection.current === "right" ? -CARD_ANIMATION_X : CARD_ANIMATION_X,
                  scale: 0.96
                }}
                transition={CARD_TRANSITION}
                drag="x"
                dragConstraints={{ left: -50, right: 50 }}
                dragElastic={0.2}
                onDragStart={() => {
                  setIsDragging(true);
                  clearTimeout(autoTimer.current);
                }}
                onDrag={(event, info) => {
                  setDragX(info.offset.x);
                }}
                onDragEnd={(event, info) => {
                  setIsDragging(false);
                  setDragX(0);
                  
                  // Trigger navigation based on drag distance
                  const threshold = 50;
                  if (info.offset.x > threshold) {
                    prevCard();
                  } else if (info.offset.x < -threshold) {
                    nextCard();
                  }
                }}
              >
                <div className="package-card-image">
                  <img
                    src={packages[deckPosition].image}
                    alt={packages[deckPosition].title}
                    draggable={false}
                  />
                </div>
                <div className="package-card-content">
                  <h2 className="package-title">{packages[deckPosition].title}</h2>
                  <div className="package-duration">{packages[deckPosition].duration}</div>
                  <div
                    className={`package-badge ${packages[deckPosition].badgeClass}`}
                  >
                    {packages[deckPosition].badge}
                  </div>
                  <div className="package-description">{packages[deckPosition].description}</div>
                  <div className="package-ctas">
                    <button className="package-cta-primary">
                      Contact Us
                      <span className="package-cta-primary-icon">
                        →
                      </span>
                    </button>
                    <a
                      className="package-cta-secondary"
                      href={packages[deckPosition].ctaDetails}
                    >
                      View Details
                    </a>
                  </div>
                </div>
              </motion.article>
            )}
            
          </AnimatePresence>

          {/* Progress indicator */}
          {deckPosition >= 0 && deckPosition < packages.length && (
            <div className="package-progress-indicator" aria-label="Package Progress">
              {packages.map((_, i) => (
                <div
                  key={i}
                  className={`progress-dot${i === deckPosition ? " active" : ""}`}
                ></div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default PackagesSection;
