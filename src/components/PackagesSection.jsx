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
  {
    image: ClassicMaasaiMara,
    title: "Mara & Tsavo Wildlife Safari",
    duration: "5 Days / 4 Nights",
    badge: "⭐ 4.9/5 · Most Popular",
    badgeClass: "badge-popular",
    description: "Experience the iconic Maasai Mara and Tsavo.",
    ctaDetails: "#mara-tsavo"
  },
  {
    image: Amboseli,
    title: "Amboseli & Chyulu Explorer",
    duration: "4 Days / 3 Nights",
    badge: "⭐ 4.8/5 · Adventure Pick",
    badgeClass: "badge-adventure",
    description: "Marvel at Amboseli’s majestic elephants.",
    ctaDetails: "#amboseli-chyulu"
  },
  {
    image: FamilySafari,
    title: "Family Safari & Beach Holiday",
    duration: "7 Days / 6 Nights",
    badge: "⭐ 4.9/5 · Family Favorite",
    badgeClass: "badge-family",
    description: "A perfect family mix of safari and beach.",
    ctaDetails: "#family-beach"
  },
  {
    image: RomanticSafari,
    title: "Romantic Safari & Honeymoon Escape",
    duration: "6 Days / 5 Nights",
    badge: "⭐ 5/5 · Romantic Getaway",
    badgeClass: "badge-romantic",
    description: "Indulge in a couple’s retreat in Kenya.",
    ctaDetails: "#romantic-honeymoon"
  },
  {
    image: CoastalExperience,
    title: "Kenyan Coastal Adventure",
    duration: "5 Days / 4 Nights",
    badge: "⭐ 4.7/5 · Coastal Escape",
    badgeClass: "badge-coastal",
    description: "Discover Kenya’s stunning coast.",
    ctaDetails: "#coastal-adventure"
  }
];

// Animation settings
const CARD_TRANSITION = { type: "spring", stiffness: 420, damping: 42, duration: 0.45 };
const CARD_ANIMATION_X = 280; // px slide for card movement
const OVERLAP_AMOUNT = 50; // px overlap between cards
const AUTO_ADVANCE_INTERVAL = 6000;

const PackagesSection = () => {
  const [deckPosition, setDeckPosition] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [dragX, setDragX] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isWrapperFocused, setIsWrapperFocused] = useState(false);

  const wrapperRef = useRef(null);
  const autoTimer = useRef(null);
  const directionRef = useRef(1); // 1 = right/next, -1 = left/prev

  // Infinite loop navigation
  const nextCard = useCallback(() => {
    directionRef.current = 1;
    setDeckPosition((pos) => (pos + 1) % packages.length);
  }, []);

  const prevCard = useCallback(() => {
    directionRef.current = -1;
    setDeckPosition((pos) => (pos - 1 + packages.length) % packages.length);
  }, []);

  // Auto-advance
  useEffect(() => {
    if (!isHovered && !isDragging) {
      autoTimer.current = setTimeout(nextCard, AUTO_ADVANCE_INTERVAL);
    }
    return () => clearTimeout(autoTimer.current);
  }, [deckPosition, isHovered, isDragging, nextCard]);

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

  // Preload next image for lazy rendering
  useEffect(() => {
    const nextIdx = (deckPosition + 1) % packages.length;
    const link = document.createElement("link");
    link.rel = "preload";
    link.as = "image";
    link.href = packages[nextIdx].image;
    document.head.appendChild(link);
    return () => document.head.removeChild(link);
  }, [deckPosition]);

  // Overlapping animation: show both exiting and entering card, with overlap
  // "cards" array: current + next (for overlap)
  const cardsToShow = [
    {
      ...packages[deckPosition],
      key: `current-${deckPosition}`,
      position: 0
    },
    {
      ...packages[(deckPosition + directionRef.current + packages.length) % packages.length],
      key: `next-${deckPosition}`,
      position: directionRef.current
    }
  ];

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
          style={{ position: "relative", overflow: "visible" }}
        >
          {/* Animated deck: current card + next card overlapping */}
          <AnimatePresence custom={directionRef.current} initial={false}>
            {cardsToShow.map((card, idx) => (
              <motion.article
                key={card.key}
                className="package-card"
                initial={{
                  opacity: idx === 0 ? 1 : 0.2,
                  x: idx === 0
                    ? 0
                    : directionRef.current === 1
                      ? CARD_ANIMATION_X - OVERLAP_AMOUNT
                      : -CARD_ANIMATION_X + OVERLAP_AMOUNT,
                  scale: idx === 0 ? 1 : 0.97
                }}
                animate={{
                  opacity: idx === 0 ? 1 : 0.8,
                  x: idx === 0
                    ? isDragging ? dragX : 0
                    : directionRef.current === 1
                      ? OVERLAP_AMOUNT
                      : -OVERLAP_AMOUNT,
                  scale: idx === 0 ? 1 : 0.97
                }}
                exit={{
                  opacity: idx === 0 ? 0 : 0,
                  x: directionRef.current === 1
                    ? -CARD_ANIMATION_X
                    : CARD_ANIMATION_X,
                  scale: 0.97
                }}
                transition={CARD_TRANSITION}
                drag={idx === 0 ? "x" : false}
                dragConstraints={{ left: -50, right: 50 }}
                dragElastic={0.2}
                onDragStart={() => { setIsDragging(true); clearTimeout(autoTimer.current); }}
                onDrag={(event, info) => setDragX(info.offset.x)}
                onDragEnd={(event, info) => {
                  setIsDragging(false); setDragX(0);
                  if (info.offset.x > 50) prevCard();
                  else if (info.offset.x < -50) nextCard();
                }}
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  zIndex: idx === 0 ? 2 : 1,
                  pointerEvents: idx === 0 ? "auto" : "none"
                }}
              >
                <div className="package-card-image">
                  <img
                    src={card.image}
                    alt={card.title}
                    draggable={false}
                    loading="lazy"
                  />
                </div>
                <div className="package-card-content">
                  <h2 className="package-title">{card.title}</h2>
                  <div className="package-duration">{card.duration}</div>
                  <div className={`package-badge ${card.badgeClass}`}>{card.badge}</div>
                  <div className="package-description">{card.description}</div>
                  <div className="package-ctas">
                    <button className="package-cta-primary">Contact Us<span className="package-cta-primary-icon">→</span></button>
                    <a className="package-cta-secondary" href={card.ctaDetails}>View Details</a>
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>

          {/* Framer Motion Progress Indicator (always visible, animated) */}
          <motion.div
            className="package-progress-indicator"
            aria-label="Package Progress"
            initial={false}
            animate={{ y: 0, opacity: 1 }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
            style={{
              position: "absolute",
              left: "50%",
              bottom: "24px",
              transform: "translateX(-50%)",
              zIndex: 5,
              display: "flex",
              gap: "8px"
            }}
          >
            {packages.map((_, i) => (
              <motion.div
                key={i}
                className={`progress-dot${i === deckPosition ? " active" : ""}`}
                layout
                initial={false}
                animate={{
                  scale: i === deckPosition ? 1.3 : 1,
                  opacity: i === deckPosition ? 1 : 0.4,
                  background: i === deckPosition ? "#2d6a4f" : "#c9d5cb"
                }}
                transition={{ type: "spring", stiffness: 400, damping: 32 }}
                style={{
                  width: "10px",
                  height: "10px",
                  borderRadius: "50%",
                  background: i === deckPosition ? "#2d6a4f" : "#c9d5cb"
                }}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PackagesSection;
