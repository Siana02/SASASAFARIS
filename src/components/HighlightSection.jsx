import React, { useRef, useEffect, useState, useCallback } from "react";
import { useLanguage } from "../hooks/useLanguage";
import { useNavigate } from "react-router-dom";

/* ── Ambient background fish (bigger than before) ── */
const FISH_BG = [
  { dur: "22s", delay: "0s",    top: "10%",  size: "2.0rem" },
  { dur: "30s", delay: "-10s",  top: "72%",  size: "1.8rem" },
  { dur: "18s", delay: "-5s",   top: "38%",  size: "2.6rem" },
  { dur: "26s", delay: "-18s",  top: "88%",  size: "1.6rem" },
  { dur: "20s", delay: "-7s",   top: "22%",  size: "2.2rem" },
  { dur: "35s", delay: "-13s",  top: "58%",  size: "1.9rem" },
  { dur: "24s", delay: "-3s",   top: "80%",  size: "2.4rem" },
  { dur: "28s", delay: "-22s",  top: "47%",  size: "1.7rem" },
];

/* ── Drag-to-pledge slider ── */
const PLEDGE_DONE_DELAY_MS  = 700;  /* slider "done" visible before thank-you swap */
const SLIDER_LEAVE_DELAY_MS = 350;  /* matches CSS fade-out transition */

const PledgeSlider = ({ onPledge, labelIdle, labelDone }) => {
  const trackRef    = useRef(null);
  const thumbRef    = useRef(null);
  const dragging    = useRef(false);
  const [thumbLeft,  setThumbLeft]  = useState(0);
  const [done,       setDone]       = useState(false);

  /* Apply/remove the no-transition class directly on the DOM element
     so the thumb tracks the pointer with zero lag, without waiting for
     a React re-render to remove the CSS transition. */
  const setDraggingStyle = (active) => {
    const thumb = thumbRef.current;
    if (!thumb) return;
    if (active) {
      thumb.classList.add("is-dragging");
    } else {
      thumb.classList.remove("is-dragging");
    }
  };

  const complete = useCallback(() => {
    const track = trackRef.current;
    const thumb = thumbRef.current;
    if (!track || !thumb) return;
    const max = track.offsetWidth - thumb.offsetWidth - 8;
    setThumbLeft(max);
    setDone(true);
    /* Brief pause so the "done" state is visible, then reveal thank-you */
    setTimeout(() => onPledge(), PLEDGE_DONE_DELAY_MS);
  }, [onPledge]);

  const handlePointerDown = (e) => {
    if (done) return;
    dragging.current = true;
    setDraggingStyle(true);
    e.currentTarget.setPointerCapture(e.pointerId);
  };

  const handlePointerMove = (e) => {
    if (!dragging.current || done) return;
    const track = trackRef.current;
    const thumb = thumbRef.current;
    if (!track || !thumb) return;
    const rect   = track.getBoundingClientRect();
    const thumbW = thumb.offsetWidth;
    const max    = rect.width - thumbW - 8;
    const x      = e.clientX - rect.left - thumbW / 2;
    const clamped = Math.min(max, Math.max(0, x));
    setThumbLeft(clamped);
    if (clamped / max >= 0.9) {
      dragging.current = false;
      setDraggingStyle(false);
      complete();
    }
  };

  const handlePointerUp = () => {
    if (!done) setThumbLeft(0);
    dragging.current = false;
    setDraggingStyle(false);
  };

  const handleKeyDown = (e) => {
    if (done) return;
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      complete();
    }
  };

  return (
    <div
      ref={trackRef}
      className={`eco-pledge-slider${done ? " is-done" : ""}`}
      role="presentation"
    >
      <span className={done ? "eco-pledge-slider-done-label" : "eco-pledge-slider-hint"}>
        {done
          ? <><i className="fa-solid fa-check" aria-hidden="true" /> {labelDone}</>
          : labelIdle}
      </span>
      <div
        ref={thumbRef}
        className={`eco-pledge-slider-thumb${done ? " is-done" : ""}`}
        style={{ transform: `translateX(${thumbLeft}px)` }}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerUp}
        onKeyDown={handleKeyDown}
        role="slider"
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={done ? 100 : 0}
        aria-label="Drag to make your eco pledge"
        tabIndex={0}
      >
        <i className="fa-solid fa-handshake" aria-hidden="true" />
      </div>
    </div>
  );
};

/* ── Main section ── */
const EcoReminderSection = () => {
  const { t }      = useLanguage();
  const navigate   = useNavigate();
  const sectionRef = useRef(null);
  const [pledged,      setPledged]      = useState(false);
  const [sliderLeaving, setSliderLeaving] = useState(false);
  const [isVisible,    setIsVisible]    = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.12 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const handlePledge = useCallback(() => {
    setSliderLeaving(true);
    setTimeout(() => setPledged(true), SLIDER_LEAVE_DELAY_MS);
  }, []);

  const pledges = [
    { icon: "fa-solid fa-earth-africa",       key: "pledge.earth"     },
    { icon: "fa-solid fa-fish",               key: "pledge.marine"    },
    { icon: "fa-solid fa-trash-can",          key: "pledge.cleanup"   },
    { icon: "fa-solid fa-hand-holding-heart", key: "pledge.donate"    },
    { icon: "fa-solid fa-shoe-prints",        key: "pledge.footprint" },
    { icon: "fa-solid fa-leaf",               key: "pledge.wildlife"  },
  ];

  return (
    <section
      ref={sectionRef}
      className={`eco-reminder-section${isVisible ? " is-visible" : ""}${pledged ? " has-pledged" : ""}`}
      aria-label={t("ecoReminder.ariaLabel")}
    >
      {/* Ambient background fish */}
      <div className="eco-fish-bg" aria-hidden="true">
        {FISH_BG.map((f, i) => (
          <span
            key={i}
            className="eco-fish"
            style={{
              "--fish-dur":   f.dur,
              "--fish-delay": f.delay,
              "--fish-top":   f.top,
              "--fish-size":  f.size,
            }}
          >
            <i className="fa-solid fa-fish" />
          </span>
        ))}
      </div>

      <div className="eco-reminder-inner">
        <p className="eco-reminder-eyebrow">{t("ecoReminder.eyebrow")}</p>
        <h2 className="eco-reminder-title">{t("ecoReminder.title")}</h2>
        <p className="eco-reminder-lead">{t("ecoReminder.lead")}</p>

        <ul className="eco-pledge-list" aria-label={t("ecoReminder.pledgeListLabel")}>
          {pledges.map(({ icon, key }, idx) => (
            <li
              key={key}
              className="eco-pledge-item"
              style={{ "--stagger": idx }}
            >
              <span className="eco-pledge-icon" aria-hidden="true">
                <i className={icon} />
              </span>
              <span className="eco-pledge-text">{t(key)}</span>
            </li>
          ))}
        </ul>

        {/* Drag-to-pledge block */}
        <div className="eco-pledge-cta-block">
          {pledged ? (
            <div className="eco-pledge-thanks-wrap">
              <span className="eco-pledge-thanks-icon" aria-hidden="true">
                <i className="fa-solid fa-earth-africa" />
              </span>
              <p className="eco-pledge-thanks">{t("ecoReminder.pledgeThanks")}</p>
            </div>
          ) : (
            <div className={`eco-pledge-slider-wrap${sliderLeaving ? " is-leaving" : ""}`}>
              <p className="eco-pledge-prompt">{t("ecoReminder.pledgePrompt")}</p>
              <PledgeSlider
                onPledge={handlePledge}
                labelIdle={t("ecoReminder.slideIdle")}
                labelDone={t("ecoReminder.slideDone")}
              />
            </div>
          )}
        </div>

        <p className="eco-reminder-close">{t("ecoReminder.close")}</p>

        <button
          className={`eco-cta-btn${pledged ? " is-pledged" : ""}`}
          onClick={() => navigate("/contact")}
          aria-label={t("ecoReminder.ctaAriaLabel")}
        >
          {t("ecoReminder.cta")}
        </button>
      </div>
    </section>
  );
};

export default EcoReminderSection;
