// Animated vertical deck for Safari packages: No tilt, just vertical slide.
// When user scrolls into packages-wrapper, page scroll locks: only card deck cycles via wheel/touch/keyboard.
// When user navigates to last card (About) OR first card (Success Countdown), page scroll unlocks.
// Progress indicator only appears when a card is visible (not for About/Success Countdown).
// About section has its own animation, not reused from cards.

import React, { useState, useRef, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ClassicMaasaiMara,
  Amboseli,
  FamilySafari,
  RomanticSafari,
  CoastalExperience
} from "../assets/images";
import SuccessCountdown from "./SuccessCountdown";
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
  const [isWrapperFocused, setIsWrapperFocused] = useState(false); // Track wrapper focus state
  const wrapperRef = useRef(null);

  // Animation direction tracking for proper slide transitions
  const animationDirection = useRef("up");
  const lastPosition = useRef(0);

  // Next: Move deckPosition forward (up animation)
  const nextCard = useCallback(() => {
    setDeckPosition((pos) => {
      const newPos = pos < packages.length ? pos + 1 : pos;
      if (newPos > pos) {
        animationDirection.current = "up";
        lastPosition.current = pos;
      }
      return newPos;
    });
  }, []);
  
  // Previous: Move deckPosition backward (down animation)
  const prevCard = useCallback(() => {
    setDeckPosition((pos) => {
      const newPos = pos > -1 ? pos - 1 : pos;
      if (newPos < pos) {
        animationDirection.current = "down";
        lastPosition.current = pos;
      }
      return newPos;
    });
  }, []);

  // Lock/unlock deck depending on position and wrapper focus
  // Scroll lock is only active when:
  // 1. deckPosition is in card range (0 to packages.length-1)  
  // 2. packages-wrapper is focused/active
  useEffect(() => {
    const shouldLock = (deckPosition >= 0 && deckPosition < packages.length) && isWrapperFocused;
    setDeckLocked(shouldLock);
  }, [deckPosition, isWrapperFocused]);

  // Prevent page scroll only when deck is locked and wrapper is focused
  // This ensures scroll-lock is scoped to the packages-wrapper interaction only
  useEffect(() => {
    const preventScroll = (e) => {
      // Only prevent scroll if:
      // 1. Deck is locked (card is visible and wrapper is focused)
      // 2. The event target is within or related to the packages-wrapper
      if (deckLocked && wrapperRef.current) {
        const wrapperRect = wrapperRef.current.getBoundingClientRect();
        const isNearWrapper = (
          e.clientY >= wrapperRect.top - 50 && 
          e.clientY <= wrapperRect.bottom + 50
        );
        if (isNearWrapper) {
          e.preventDefault();
        }
      }
    };
    
    if (deckLocked) {
      // Add scroll prevention with passive: false to allow preventDefault
      document.addEventListener("wheel", preventScroll, { passive: false });
      document.addEventListener("touchmove", preventScroll, { passive: false });
    }
    
    return () => {
      document.removeEventListener("wheel", preventScroll);
      document.removeEventListener("touchmove", preventScroll);
    };
  }, [deckLocked]);

  // Focus management: Track when packages-wrapper gains/loses focus
  // This enables proper scoping of interactions to the wrapper only
  useEffect(() => {
    const wrapper = wrapperRef.current;
    if (!wrapper) return;

    const handleFocus = () => setIsWrapperFocused(true);
    const handleBlur = () => setIsWrapperFocused(false);
    const handleMouseEnter = () => setIsWrapperFocused(true);
    const handleMouseLeave = () => setIsWrapperFocused(false);

    wrapper.addEventListener('focus', handleFocus);
    wrapper.addEventListener('blur', handleBlur);
    wrapper.addEventListener('mouseenter', handleMouseEnter);
    wrapper.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      wrapper.removeEventListener('focus', handleFocus);
      wrapper.removeEventListener('blur', handleBlur);
      wrapper.removeEventListener('mouseenter', handleMouseEnter);
      wrapper.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  // Auto-focus wrapper when scrolling into view (only for card states)
  useEffect(() => {
    const onScroll = () => {
      if (wrapperRef.current && deckPosition >= 0 && deckPosition < packages.length) {
        const rect = wrapperRef.current.getBoundingClientRect();
        const inView = rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2;
        if (inView && !isWrapperFocused) {
          wrapperRef.current.focus();
        }
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [deckPosition, isWrapperFocused]);

  // Keyboard navigation - only active when wrapper is focused
  useEffect(() => {
    const handleKeyDown = (e) => {
      // Only handle keyboard navigation when wrapper is focused
      // Navigation should work in all states (Success Countdown, Cards, About)
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

  // Mouse wheel navigation - only active when wrapper is focused
  useEffect(() => {
    const handleWheel = (e) => {
      // Handle wheel events when wrapper is focused 
      // Only prevent scroll when deck is locked (during card states)
      if (isWrapperFocused) {
        if (deckLocked) {
          e.preventDefault(); // Only prevent scroll during card cycling
        }
        if (e.deltaY > 0) nextCard(); // Scroll down = next card
        else if (e.deltaY < 0) prevCard(); // Scroll up = previous card
      }
    };
    const node = wrapperRef.current;
    if (node && isWrapperFocused) {
      node.addEventListener("wheel", handleWheel, { passive: false });
    }
    return () => {
      if (node) node.removeEventListener("wheel", handleWheel);
    };
  }, [deckLocked, isWrapperFocused, nextCard, prevCard]);

  // Touch/Swipe navigation for mobile - only active when wrapper is focused  
  useEffect(() => {
    let startY = null;
    let dragging = false;
    const handleTouchStart = (e) => {
      // Handle touch events when wrapper is focused
      // Only handle dragging for card states (when deck is locked)
      if (isWrapperFocused) {
        if (deckLocked) {
          setIsDragging(true);
        }
        dragging = true;
        startY = e.touches[0].clientY;
      }
    };
    const handleTouchMove = (e) => {
      if (dragging && startY !== null && deckLocked) {
        setDragY(e.touches[0].clientY - startY);
      }
    };
    const handleTouchEnd = () => {
      if (!dragging) return;
      setIsDragging(false);
      // Swipe up (negative dragY) = next card, Swipe down (positive dragY) = previous card  
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
    if (node && isWrapperFocused) {
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
  }, [deckLocked, isWrapperFocused, dragY, nextCard, prevCard]);

  // Motion key for AnimatePresence - determines which content to show
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
            {/* Show About section if deckPosition is packages.length (5) */}
            {deckPosition === packages.length && (
              <div key="about" className="packages-about-section">
                <AboutSection/>
              </div>
            )}
            {/* Show Success Countdown if deckPosition is -1 (before first card) */}
            {deckPosition === -1 && (
              <PackagesSuccessCountdown key="success-countdown"/>
            )}
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
