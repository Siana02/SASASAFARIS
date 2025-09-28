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
import { Link } from "react-router-dom";
import {
  ClassicMaasaiMara,
  Amboseli,
  FamilySafari,
  RomanticSafari,
  CoastalExperience
} from "../assets/images";

const packages = [
  { id: "mara-tsavo", image: ClassicMaasaiMara, title: "Mara & Tsavo Wildlife Safari", duration: "5 Days / 4 Nights", badge: "⭐ 4.9/5 · Most Popular", badgeClass: "badge-popular", description: "Experience the iconic Big 5 across two legendary parks. Witness lions, elephants, and cheetahs in their natural habitat, with expert-guided game drives and evening sundowners.", ctaDetails: "#details-mara-tsavo" },
  { id: "amboseli-chyulu", image: Amboseli, title: "Amboseli & Chyulu Explorer", duration: "4 Days / 3 Nights", badge: "⭐ 4.8/5 · Adventure Pick", badgeClass: "badge-adventure", description: "Marvel at Amboseli’s majestic elephants against Mount Kilimanjaro’s backdrop and explore the hidden trails of Chyulu Hills for a serene wildlife adventure.", ctaDetails: "#details-amboseli-chyulu" },
  { id: "family-safari-beach", image: FamilySafari, title: "Family Safari & Beach Holiday", duration: "7 Days / 6 Nights", badge: "⭐ 4.9/5 · Family Favorite", badgeClass: "badge-family", description: "A perfect family mix of safari excitement and beach relaxation. Enjoy safe guided game drives, sandcastle building on Diani Beach, and fun-filled coastal activities for all ages.", ctaDetails: "#details-family-safari-beach" },
  { id: "romantic-safari", image: RomanticSafari, title: "Romantic Safari & Honeymoon Escape", duration: "6 Days / 5 Nights", badge: "⭐ 5/5 · Romantic Getaway", badgeClass: "badge-romantic", description: "Indulge in a couple’s dream getaway with private safari lodges, candlelit dinners under the stars, and tranquil beachside sunsets for an unforgettable romantic experience.", ctaDetails: "#details-romantic-safari" },
  { id: "coastal-adventure", image: CoastalExperience, title: "Kenyan Coastal Adventure", duration: "5 Days / 4 Nights", badge: "⭐ 4.7/5 · Coastal Escape", badgeClass: "badge-coastal", description: "Discover Kenya’s stunning coastline with sun-soaked beaches, snorkeling adventures, and cultural explorations from Watamu to Diani. A perfect blend of adventure and relaxation.", ctaDetails: "#details-coastal-adventure" }
];

const AUTO_ADVANCE_INTERVAL = 6000;

const preloadImage = src => {
  const img = new window.Image();
  img.src = src;
};

const PackagesSection = () => {
  const [deckPosition, setDeckPosition] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isWrapperFocused, setIsWrapperFocused] = useState(false);
  const [animating, setAnimating] = useState(false);
  const [transitionDirection, setTransitionDirection] = useState(null); // "left" or "right" for animation
  const [swipeOffset, setSwipeOffset] = useState(0);

  const wrapperRef = useRef(null);
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
    setTransitionDirection("right");
    setAnimating(true);
    setTimeout(() => {
      setDeckPosition((pos) => (pos + 1) % packages.length);
      setAnimating(false);
      setTransitionDirection(null);
      setSwipeOffset(0);
    }, 500); // Adjust for CSS transition duration
  }, [animating]);

  const prevCard = useCallback(() => {
    if (animating) return;
    setTransitionDirection("left");
    setAnimating(true);
    setTimeout(() => {
      setDeckPosition((pos) => (pos - 1 + packages.length) % packages.length);
      setAnimating(false);
      setTransitionDirection(null);
      setSwipeOffset(0);
    }, 500); // Adjust for CSS transition duration
  }, [animating]);

  // Auto-advance
  useEffect(() => {
    if (!isHovered && !animating) {
      autoTimer.current = setTimeout(nextCard, AUTO_ADVANCE_INTERVAL);
    }
    return () => clearTimeout(autoTimer.current);
  }, [deckPosition, isHovered, nextCard, animating]);

  // Mouse wheel navigation: left/right for carousel, up/down for page scroll
  useEffect(() => {
    const handleWheel = (e) => {
      if (!isWrapperFocused) return;
      if (Math.abs(e.deltaX) > Math.abs(e.deltaY) && Math.abs(e.deltaX) > 0) {
        if (e.deltaX > 0) nextCard();
        else if (e.deltaX < 0) prevCard();
        e.preventDefault(); // Only block horizontal scroll from scrolling page
      }
      // Do NOT preventDefault for vertical scroll: let page scroll naturally
    };
    const wrapper = wrapperRef.current;
    if (wrapper) wrapper.addEventListener("wheel", handleWheel, { passive: false });
    return () => {
      if (wrapper) wrapper.removeEventListener("wheel", handleWheel);
    };
  }, [isWrapperFocused, nextCard, prevCard]);

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

  // Touch swipe navigation (RTL and LTR)
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
        if (deltaX > 0) nextCard();      // swipe left → next
        else prevCard();                 // swipe right → previous
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

  // Mouse drag navigation (LTR and RTL)
  useEffect(() => {
    let dragStartX = null;
    let dragging = false;
    const wrapper = wrapperRef.current;

    const handleMouseDown = (e) => {
      dragging = true;
      dragStartX = e.clientX;
      setSwipeOffset(0);
      document.body.style.userSelect = "none";
    };

    const handleMouseMove = (e) => {
      if (!dragging || dragStartX === null) return;
      setSwipeOffset(e.clientX - dragStartX);
    };

    const handleMouseUp = (e) => {
      if (!dragging || dragStartX === null) return;
      const offset = e.clientX - dragStartX;
      const threshold = 80;
      if (offset < -threshold) {
        nextCard();
      } else if (offset > threshold) {
        prevCard();
      }
      dragging = false;
      dragStartX = null;
      setSwipeOffset(0);
      document.body.style.userSelect = "";
    };

    if (wrapper) {
      wrapper.addEventListener("mousedown", handleMouseDown);
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseup", handleMouseUp);
    }
    return () => {
      if (wrapper) {
        wrapper.removeEventListener("mousedown", handleMouseDown);
      }
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [nextCard, prevCard]);

  // Render previous, current, and next cards for seamless transition
  const getCardsForRender = () => {
    const prevIdx = (deckPosition - 1 + packages.length) % packages.length;
    const nextIdx = (deckPosition + 1) % packages.length;
    // If animating, render 2 cards for overlap; else only current
    if (transitionDirection === "right") {
      // Show current fading out left, next sliding in from right
      return [
        { ...packages[deckPosition], idx: deckPosition, type: "current" },
        { ...packages[nextIdx], idx: nextIdx, type: "next" }
      ];
    } else if (transitionDirection === "left") {
      // Show current fading out right, prev sliding in from left
      return [
        { ...packages[deckPosition], idx: deckPosition, type: "current" },
        { ...packages[prevIdx], idx: prevIdx, type: "prev" }
      ];
    }
    // Only show current if not animating
    return [
      { ...packages[deckPosition], idx: deckPosition, type: "current" }
    ];
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
          {cardsForRender.map((card, i) => (
            <article
              key={card.idx + card.type}
              className={`package-card ${card.type}`}
              style={{
                // These classes should be animated with CSS, not inline styles. This just helps for swipe effect.
                transform:
                  card.type === "current" && swipeOffset !== 0 && !animating
                    ? `translateX(${swipeOffset}px)`
                    : undefined,
                zIndex: card.type === "current" ? 2 : 1,
                pointerEvents: animating ? "none" : "auto"
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
                  <Link className="package-cta-primary" to="/contact">
  Contact Us
  <span className="package-cta-primary-icon">
    {/* SVG Icon */}
    <svg viewBox="0 0 48 48" width="48" height="48" aria-hidden="true" focusable="false">
      <circle cx="24" cy="24" r="20" fill="var(--cta)" />
      <polyline points="18 30 30 18" fill="none" stroke="#fff" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
      <polyline points="18 18 30 18 30 30" fill="none" stroke="#fff" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  </span>
</Link>
                  <Link
                    className="package-cta-secondary"
                    to={`/viewdetails/${card.id}`}
                  >
                    View Details
                  </Link>
                </div>
              </div>
            </article>
          ))}
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
