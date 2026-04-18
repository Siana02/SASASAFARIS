import React, { useEffect, useRef, useState } from "react";
import { MapPin, Scissors, Shield, Sparkles } from "lucide-react";
import { useLanguage } from "../hooks/useLanguage";
import { ElephantSunset } from "../assets/images";

/* ── Lazy-load image with shimmer ── */
const LazyHeroImg = ({ src, alt }) => {
  const wrapRef = useRef(null);
  const [inView, setInView] = useState(false);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const el = wrapRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          io.disconnect();
        }
      },
      { rootMargin: "300px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div ref={wrapRef} className={`wcu-moment-img-wrap ${loaded ? "wcu-img-loaded" : ""}`}>
      {!loaded && <div className="wcu-img-shimmer" aria-hidden="true" />}
      {inView && (
        <img
          src={src}
          alt={alt}
          loading="lazy"
          decoding="async"
          className="wcu-moment-img"
          onLoad={() => setLoaded(true)}
        />
      )}
    </div>
  );
};

/* ── Card data ── */
const CARD_STAGGER = 0.13;

const CARDS = [
  { key: "card1", Icon: MapPin,    num: "01" },
  { key: "card2", Icon: Scissors,  num: "02" },
  { key: "card3", Icon: Shield,    num: "03" },
  { key: "card4", Icon: Sparkles,  num: "04" },
];

const WhyChooseUs = () => {
  const { t } = useLanguage();
  const cardsRef = useRef(null);
  const stripRef = useRef(null);

  /* Cards entrance — slide in from left */
  useEffect(() => {
    const el = cardsRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.querySelectorAll(".wcu-panel").forEach((card, i) => {
            card.style.transitionDelay = `${i * CARD_STAGGER}s`;
            card.classList.add("wcu-panel--in");
          });
          io.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  /* Strip entrance */
  useEffect(() => {
    const el = stripRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("wcu-strip--in");
          io.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section className="wcu-section" id="why-us">
      {/* ── Header ── */}
      <div className="wcu-inner">
        <p className="wcu-eyebrow">{t("whyChooseUs.eyebrow")}</p>
        <h2 className="wcu-headline">{t("whyChooseUs.headline")}</h2>
        <div className="wcu-ornament" aria-hidden="true">
          <span className="wcu-orn-line" />
          <span className="wcu-orn-diamond" />
          <span className="wcu-orn-line" />
        </div>
      </div>

      {/* ── Human Moment Strip (FIRST — breaks pattern, sets emotion) ── */}
      <div className="wcu-moment-strip" ref={stripRef}>
        <LazyHeroImg src={ElephantSunset} alt="Luxury safari in Kenya — elephants at golden sunset in the African bush" />
        <div className="wcu-moment-overlay" aria-hidden="true" />
        <div className="wcu-moment-text">
          <span className="wcu-moment-quote">&#8220;</span>
          {t("whyChooseUs.humanMomentOverlay")}
          <span className="wcu-moment-quote">&#8221;</span>
        </div>
      </div>

      {/* ── Trust Panels (horizontal editorial cards — after the strip) ── */}
      <div className="wcu-panels-wrap">
        <div className="wcu-panels" ref={cardsRef}>
          {CARDS.map(({ key, Icon, num }) => (
            <div className="wcu-panel" key={key} data-num={num}>
              {/* ghost watermark number */}
              <span className="wcu-panel-ghost" aria-hidden="true">{num}</span>

              {/* content */}
              <div className="wcu-panel-body">
                <span className="wcu-panel-tag">{t(`whyChooseUs.${key}Title`)}</span>
                <p className="wcu-panel-desc">{t(`whyChooseUs.${key}Desc`)}</p>
              </div>

              {/* large icon, no ring */}
              <Icon
                className="wcu-panel-icon"
                size={52}
                strokeWidth={1.1}
                aria-hidden="true"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
