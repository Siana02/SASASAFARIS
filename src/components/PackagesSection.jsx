// Animated vertical deck for Safari packages: No tilt, just vertical slide.
// When user scrolls into packages-wrapper, page scroll locks: only card deck cycles via wheel/touch/keyboard.
// When user navigates to last card (About) OR first card (Success Countdown), page scroll unlocks.
// Progress indicator only appears when a card is visible (not for About/Success Countdown).
// About section has its own animation, not reused from cards.

import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ClassicMaasaiMara,
  Amboseli,
  FamilySafari,
  RomanticSafari,
  CoastalExperience
} from "../assets/images";

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
  // deckPosition: -1 (Success Countdown), 0-4 (cards), 5 (About)
  const [deckPosition, setDeckPosition] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [dragY, setDragY] = useState(0);
  const [deckLocked, setDeckLocked] = useState(false); // Locks page scroll while cycling deck
  const wrapperRef = useRef(null);

  // Lock/unlock deck depending on position
  useEffect(() => {
    // Lock only if deckPosition is in card range
    setDeckLocked(deckPosition >= 0 && deckPosition < packages.length);
  }, [deckPosition]);

  // Prevent page scroll only when deck is locked
  useEffect(() => {
    const preventScroll = (e) => {
      if (deckLocked) {
        e.preventDefault();
      }
    };
    if (deckLocked) {
      document.body.addEventListener("wheel", preventScroll, { passive: false });
      document.body.addEventListener("touchmove", preventScroll, { passive: false });
    }
    return () => {
      document.body.removeEventListener("wheel", preventScroll);
      document.body.removeEventListener("touchmove", preventScroll);
    };
  }, [deckLocked]);

  // Focus wrapper on scroll into view
  useEffect(() => {
    const onScroll = () => {
      if (wrapperRef.current) {
        const rect = wrapperRef.current.getBoundingClientRect();
        const inView = rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2;
        if (inView && !deckLocked && deckPosition >= 0 && deckPosition < packages.length) {
          wrapperRef.current.focus();
        }
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [deckLocked, deckPosition]);

  // Keyboard navigation (when wrapper focused)
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (deckLocked) {
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
  }, [deckLocked, deckPosition]);

  // Mouse wheel navigation (when wrapper focused)
  useEffect(() => {
    const handleWheel = (e) => {
      if (deckLocked) {
        e.preventDefault();
        if (e.deltaY > 0) nextCard();
        else if (e.deltaY < 0) prevCard();
      }
    };
    const node = wrapperRef.current;
    if (node && deckLocked) {
      node.addEventListener("wheel", handleWheel, { passive: false });
    }
    return () => {
      if (node) node.removeEventListener("wheel", handleWheel);
    };
  }, [deckLocked, deckPosition]);

  // Touch/Swipe navigation for mobile (when wrapper focused)
  useEffect(() => {
    let startY = null;
    let dragging = false;
    const handleTouchStart = (e) => {
      if (deckLocked) {
        setIsDragging(true);
        dragging = true;
        startY = e.touches[0].clientY;
      }
    };
    const handleTouchMove = (e) => {
      if (dragging && startY !== null) {
        setDragY(e.touches[0].clientY - startY);
      }
    };
    const handleTouchEnd = () => {
      if (!dragging) return;
      setIsDragging(false);
      if (dragY < -80) {
        nextCard();
      } else if (dragY > 80) {
        prevCard();
      }
      setDragY(0);
      startY = null;
      dragging = false;
    };
    const node = wrapperRef.current;
    if (node && deckLocked) {
      node.addEventListener("touchstart", handleTouchStart, { passive: false });
      node.addEventListener("touchmove", handleTouchMove, { passive: false });
      node.addEventListener("touchend", handleTouchEnd, { passive: false });
    }
    return () => {
      if (node) {
        node.removeEventListener("touchstart", handleTouchStart);
        node.removeEventListener("touchmove", handleTouchMove);
        node.removeEventListener("touchend", handleTouchEnd);
      }
    };
  }, [deckLocked, deckPosition, dragY]);

  // Next: Move deckPosition forward
  const nextCard = () => {
    setDeckPosition((pos) =>
      pos < packages.length ? pos + 1 : pos
    );
  };
  // Previous: Move deckPosition backward
  const prevCard = () => {
    setDeckPosition((pos) =>
      pos > -1 ? pos - 1 : pos
    );
  };

  // Animation direction (for AnimatePresence)
  const animationDirection = useRef("up");
  useEffect(() => {
    animationDirection.current = "up";
  }, [deckPosition]);
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
        >
          <AnimatePresence initial={false} custom={animationDirection.current}>
            {/* Show Card if deckPosition is 0-4 */}
            {deckPosition >= 0 && deckPosition < packages.length && (
              <motion.article
                key={motionKey}
                className="package-card"
                initial={{
                  opacity: 0,
                  y: animationDirection.current === "up" ? CARD_ANIMATION_Y : -CARD_ANIMATION_Y,
                  scale: 0.96,
                  zIndex: 10
                }}
                animate={{
                  opacity: 1,
                  y: isDragging ? dragY : 0,
                  scale: 1,
                  zIndex: 20
                }}
                exit={{
                  opacity: 0,
                  y: animationDirection.current === "up" ? -CARD_ANIMATION_Y : CARD_ANIMATION_Y,
                  scale: 0.96,
                  zIndex: 10
                }}
                transition={CARD_TRANSITION}
                drag={isDragging ? "y" : false}
                dragConstraints={{ top: -CARD_ANIMATION_Y * 1.2, bottom: CARD_ANIMATION_Y * 1.2 }}
                dragElastic={0.33}
                onDragEnd={(e, info) => {
                  if (info.offset.y < -80) nextCard();
                  else if (info.offset.y > 80) prevCard();
                  setIsDragging(false);
                  setDragY(0);
                }}
                aria-label={packages[deckPosition].title}
                tabIndex={0}
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
                  <div className={`package-badge ${packages[deckPosition].badgeClass}`}>{packages[deckPosition].badge}</div>
                  <div className="package-description">{packages[deckPosition].description}</div>
                  <div className="package-ctas">
                    <button className="package-cta-primary">
                      Contact Us
                      <span className="package-cta-primary-icon">
                        <svg viewBox="0 0 48 48" width="24" height="24" aria-hidden="true" focusable="false">
                          <circle cx="24" cy="24" r="20" fill="#fff" />
                          <polyline points="18 30 30 18" fill="none" stroke="var(--cta)" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
                          <polyline points="18 18 30 18 30 30" fill="none" stroke="var(--cta)" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </span>
                    </button>
                    <a className="package-cta-secondary" href={packages[deckPosition].ctaDetails}>View Details</a>
                  </div>
                </div>
              </motion.article>
            )}
            {/* Show About section if deckPosition is packages.length */}
            {deckPosition === packages.length && (
              <AboutSection key="about"/>
            )}
            {/* No render for Success Countdown, let page scroll naturally */}
          </AnimatePresence>
          {/* Progress indicator only for cards */}
          {deckPosition >= 0 && deckPosition < packages.length && (
            <div className="package-progress-indicator" aria-label="Package Progress" role="presentation">
              {packages.map((_, i) => (
                <div
                  key={i}
                  className={`progress-dot${i === deckPosition ? " active" : ""}`}
                  data-dot={i}
                  aria-hidden="true"
                ></div>
              ))}
            </div>
          )}
        </div>
        {/* About section is rendered above, only appears after last card */}
      </div>
    </section>
  );
};

export default PackagesSection;
