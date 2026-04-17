import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "../hooks/useLanguage";

export default function HomepageContactCTA() {
  const { t } = useLanguage();
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          io.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section
      className={`hp-contact-cta${visible ? " hp-contact-cta--visible" : ""}`}
      id="contact-cta"
      ref={sectionRef}
    >
      {/* Ornamental divider */}
      <div className="hp-contact-cta__ornament" aria-hidden="true">
        <span className="hp-contact-cta__orn-line" />
        <span className="hp-contact-cta__orn-icon">✦</span>
        <span className="hp-contact-cta__orn-line" />
      </div>

      <div className="hp-contact-cta__inner">
        <span className="hp-contact-cta__eyebrow">{t('homepageContactCTA.eyebrow')}</span>
        <h2 className="hp-contact-cta__headline">{t('homepageContactCTA.headline')}</h2>
        <p className="hp-contact-cta__subheadline">{t('homepageContactCTA.subheadline')}</p>

        <Link to="/contact" className="hp-contact-cta__btn">
          {t('homepageContactCTA.cta')}
        </Link>
      </div>

      {/* Decorative paw-print / safari dots */}
      <div className="hp-contact-cta__deco" aria-hidden="true">
        <span className="hp-contact-cta__dot" />
        <span className="hp-contact-cta__dot hp-contact-cta__dot--mid" />
        <span className="hp-contact-cta__dot" />
      </div>
    </section>
  );
}
