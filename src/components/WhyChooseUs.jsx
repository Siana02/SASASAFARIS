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
      {/* shimmer shown while image is loading */}
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

/* ── Stagger-in cards via IntersectionObserver ── */
const CARD_STAGGER = 0.12;

const CARDS = [
  { key: "card1", Icon: MapPin },
  { key: "card2", Icon: Scissors },
  { key: "card3", Icon: Shield },
  { key: "card4", Icon: Sparkles },
];

const WhyChooseUs = () => {
  const { t } = useLanguage();
  const cardsRef = useRef(null);
  const stripRef = useRef(null);

  /* Cards entrance */
  useEffect(() => {
    const el = cardsRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.querySelectorAll(".wcu-card").forEach((card, i) => {
            card.style.transitionDelay = `${i * CARD_STAGGER}s`;
            card.classList.add("wcu-card--in");
          });
          io.disconnect();
        }
      },
      { threshold: 0.12 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  /* Strip text entrance */
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

        {/* ── Experience Cards ── */}
        <div className="wcu-cards" ref={cardsRef}>
          {CARDS.map(({ key, Icon }) => (
            <div className="wcu-card" key={key}>
              <div className="wcu-card-icon-ring">
                <Icon size={28} strokeWidth={1.4} className="wcu-card-icon" />
              </div>
              <div className="wcu-card-title">{t(`whyChooseUs.${key}Title`)}</div>
              <div className="wcu-card-desc">{t(`whyChooseUs.${key}Desc`)}</div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Human Moment Strip ── */}
      <div className="wcu-moment-strip" ref={stripRef}>
        <LazyHeroImg src={ElephantSunset} alt="Elephants at a lake during golden sunset in Africa" />
        <div className="wcu-moment-overlay" aria-hidden="true" />
        <div className="wcu-moment-text">
          <span className="wcu-moment-quote">&#8220;</span>
          {t("whyChooseUs.humanMomentOverlay")}
          <span className="wcu-moment-quote">&#8221;</span>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
