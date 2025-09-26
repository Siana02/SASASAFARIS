// PackagesSection.jsx - Animated vertical deck for Safari packages
// All package HTML preserved, only one shown at a time, with interactive animation and About section reveal

import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ClassicMaasaiMara,
  Amboseli,
  FamilySafari,
  RomanticSafari,
  CoastalExperience
} from "../assets/images";

// Card deck data (same info as your original HTML, all cards here)
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

// Animation constants
const CARD_TILT = 7; // degrees of tilt for depth
const CARD_TRANSITION = { type: "spring", stiffness: 420, damping: 42, duration: 0.55 };
const CARD_ANIMATION_Y = 120; // px vertical slide

// About section, only revealed after cycling through all cards
const AboutSection = () => (
  <section className="about-section" id="about">
    <h2>About SASA Safaris</h2>
    <p>
      SASA Safaris is your gateway to unforgettable adventures in Kenya. From classic wildlife safaris to romantic escapes and family holidays, we deliver authentic, personalized journeys with expert guides and warm hospitality. Let us help you create your dream safari experience!
    </p>
  </section>
);

const PackagesSection = () => {
  // Track which card is visible
  const [activeIndex, setActiveIndex] = useState(0);
  // For drag animation
  const [isDragging, setIsDragging] = useState(false);
  const [dragY, setDragY] = useState(0);
  // Ref for section, used for scroll prevention and keyboard focus
  const sectionRef = useRef(null);

  // Prevent page scroll while interacting with deck
  useEffect(() => {
    const preventScroll = (e) => {
      if (sectionRef.current && sectionRef.current.contains(document.activeElement)) {
        e.preventDefault();
      }
    };
    document.body.addEventListener("touchmove", preventScroll, { passive: false });
    document.body.addEventListener("wheel", preventScroll, { passive: false });
    return () => {
      document.body.removeEventListener("touchmove", preventScroll);
      document.body.removeEventListener("wheel", preventScroll);
    };
  }, []);

  // Keyboard navigation: arrow keys scroll cards
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (
        sectionRef.current &&
        sectionRef.current.contains(document.activeElement)
      ) {
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
  });

  // Mouse wheel navigation: scroll cycles cards
  useEffect(() => {
    const handleWheel = (e) => {
      if (
        sectionRef.current &&
        sectionRef.current.contains(document.activeElement)
      ) {
        e.preventDefault();
        if (e.deltaY > 0) nextCard();
        else if (e.deltaY < 0) prevCard();
      }
    };
    sectionRef.current?.addEventListener("wheel", handleWheel, { passive: false });
    return () => {
      sectionRef.current?.removeEventListener("wheel", handleWheel);
    };
  });

  // Touch events for mobile swipe/drag
  useEffect(() => {
    let startY = null;
    let dragging = false;
    const handleTouchStart = (e) => {
      if (
        sectionRef.current &&
        sectionRef.current.contains(document.activeElement)
      ) {
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
    const node = sectionRef.current;
    node?.addEventListener("touchstart", handleTouchStart, { passive: false });
    node?.addEventListener("touchmove", handleTouchMove, { passive: false });
    node?.addEventListener("touchend", handleTouchEnd, { passive: false });
    return () => {
      node?.removeEventListener("touchstart", handleTouchStart);
      node?.removeEventListener("touchmove", handleTouchMove);
      node?.removeEventListener("touchend", handleTouchEnd);
    };
  }, [dragY]);

  // Advance to next card, unless already at last
  const nextCard = () => {
    setActiveIndex((i) => Math.min(i + 1, packages.length - 1));
  };
  // Go back to previous card, unless already at first
  const prevCard = () => {
    setActiveIndex((i) => Math.max(i - 1, 0));
  };

  // For animation direction (vertical deck slide)
  const animationDirection = useRef("up");
  useEffect(() => {
    animationDirection.current = "up";
  }, [activeIndex]);
  const motionKey = packages[activeIndex].title;

  return (
    <section className="packages-section" id="packages" ref={sectionRef} tabIndex={0}>
      <div className="packages-section-container">
        <div className="packages-intro-container">
          <h2 className="packages-title">Safari & Beach Packages</h2>
          <p className="packages-subtitle">
            Choose your adventure: classic safaris, family escapes, coastal relaxation and more.
          </p>
        </div>

        <div className="packages-wrapper" aria-label="Safari & Beach Packages">
          {/* Only the active card is visible; all HTML preserved and animated */}
          <AnimatePresence initial={false} custom={animationDirection.current}>
            <motion.article
              key={motionKey}
              className="package-card"
              initial={{
                opacity: 0,
                y: animationDirection.current === "up" ? CARD_ANIMATION_Y : -CARD_ANIMATION_Y,
                rotate: animationDirection.current === "up" ? CARD_TILT : -CARD_TILT,
                scale: 0.96,
                zIndex: 10
              }}
              animate={{
                opacity: 1,
                y: isDragging ? dragY : 0,
                rotate: isDragging ? dragY / 24 : 0,
                scale: 1,
                zIndex: 20
              }}
              exit={{
                opacity: 0,
                y: animationDirection.current === "up" ? -CARD_ANIMATION_Y : CARD_ANIMATION_Y,
                rotate: animationDirection.current === "up" ? -CARD_TILT : CARD_TILT,
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
              aria-label={packages[activeIndex].title}
              tabIndex={0}
            >
              <div className="package-card-image">
                <img
                  src={packages[activeIndex].image}
                  alt={packages[activeIndex].title}
                  draggable={false}
                />
              </div>
              <div className="package-card-content">
                <h2 className="package-title">{packages[activeIndex].title}</h2>
                <div className="package-duration">{packages[activeIndex].duration}</div>
                <div className={`package-badge ${packages[activeIndex].badgeClass}`}>{packages[activeIndex].badge}</div>
                <div className="package-description">{packages[activeIndex].description}</div>
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
                  <a className="package-cta-secondary" href={packages[activeIndex].ctaDetails}>View Details</a>
                </div>
              </div>
            </motion.article>
          </AnimatePresence>
          {/* Deck progress indicator dots */}
          <div className="package-progress-indicator" aria-label="Package Progress" role="presentation">
            {packages.map((_, i) => (
              <div
                key={i}
                className={`progress-dot${i === activeIndex ? " active" : ""}`}
                data-dot={i}
                aria-hidden="true"
              ></div>
            ))}
          </div>
        </div>
        {/* Show About section only after last card */}
        {activeIndex === packages.length - 1 && <AboutSection />}
      </div>
    </section>
  );
};

export default PackagesSection;
