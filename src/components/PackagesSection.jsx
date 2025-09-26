// Animated vertical deck for Safari packages with auto-advance and pause
// Includes hover-pause, scroll lock/unlock, keyboard + wheel + touch navigation
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
const CARD_ANIMATION_Y = 120; // px vertical slide
const AUTO_ADVANCE_INTERVAL = 6000; // ms pause per card

const AboutSection = () => (
  <motion.section
    className="about-section"
    id="about"
    initial={{ opacity: 0, y: 80 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -80 }}
    transition={CARD_TRANSITION}
  >
    <h2>About SASA Safaris</h2>
    <p>
      SASA Safaris is your gateway to unforgettable adventures in Kenya. From classic wildlife safaris to romantic escapes and family holidays, we deliver authentic, personalized journeys with expert guides and warm hospitality. Let us help you create your dream safari experience!
    </p>
  </motion.section>
);

const PackagesSection = () => {
  const [deckPosition, setDeckPosition] = useState(0); // -1 = SuccessCountdown, 0-4 = cards, 5 = About
  const [isDragging, setIsDragging] = useState(false);
  const [dragY, setDragY] = useState(0);
  const [deckLocked, setDeckLocked] = useState(false);
  const [isWrapperFocused, setIsWrapperFocused] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const wrapperRef = useRef(null);
  const animationDirection = useRef("up");
  const autoTimer = useRef(null);

  const nextCard = useCallback(() => {
    setDeckPosition((pos) => {
      const newPos = pos < packages.length ? pos + 1 : pos;
      if (newPos > pos) animationDirection.current = "up";
      return newPos;
    });
  }, []);

  const prevCard = useCallback(() => {
    setDeckPosition((pos) => {
      const newPos = pos > -1 ? pos - 1 : pos;
      if (newPos < pos) animationDirection.current = "down";
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

  // Lock/unlock deck depending on position
  useEffect(() => {
    const shouldLock = deckPosition >= 0 && deckPosition < packages.length && isWrapperFocused;
    setDeckLocked(shouldLock);
  }, [deckPosition, isWrapperFocused]);

  // Scroll prevention
  useEffect(() => {
    const preventScroll = (e) => {
      if (deckLocked) e.preventDefault();
    };
    if (deckLocked) {
      document.addEventListener("wheel", preventScroll, { passive: false });
      document.addEventListener("touchmove", preventScroll, { passive: false });
    }
    return () => {
      document.removeEventListener("wheel", preventScroll);
      document.removeEventListener("touchmove", preventScroll);
    };
  }, [deckLocked]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (isWrapperFocused) {
        if (e.key === "ArrowDown" || e.key === "ArrowRight") {
          e.preventDefault();
          nextCard();
        } else if (e.key === "ArrowUp" || e.key === "ArrowLeft") {
          e.preventDefault();
          prevCard();
        }
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isWrapperFocused, nextCard, prevCard]);

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
                  y: animationDirection.current === "up" ? CARD_ANIMATION_Y : -CARD_ANIMATION_Y,
                  scale: 0.96
                }}
                animate={{
                  opacity: 1,
                  y: isDragging ? dragY : 0,
                  scale: 1
                }}
                exit={{
                  opacity: 0,
                  y: animationDirection.current === "up" ? -CARD_ANIMATION_Y : CARD_ANIMATION_Y,
                  scale: 0.96
                }}
                transition={CARD_TRANSITION}
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
            {/* About */}
            {deckPosition === packages.length && (
              <div key="about" className="packages-about-section">
                <AboutSection />
              </div>
            )}
            {/* SuccessCountdown */}
            {deckPosition === -1 && (
              <PackagesSuccessCountdown key="success-countdown" />
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
