import React, { useEffect, useRef } from "react";
import { useLanguage } from "../hooks/useLanguage";

const HeroSection = () => {
  const mainTitleRef = useRef(null);
  const { t } = useLanguage();

  useEffect(() => {
    const animateTitle = (el) => {
      if (!el) return;
      const text = el.textContent.trim();
      el.innerHTML = '';

      let letterIndex = 0;
      [...text].forEach((char) => {
        if (char === ' ') {
          el.appendChild(document.createTextNode(' '));
        } else {
          const span = document.createElement('span');
          span.className = 'letter';
          span.textContent = char;
          span.style.animationDelay = `${letterIndex * 0.055}s`;
          el.appendChild(span);
          letterIndex++;
        }
      });
    };

    animateTitle(mainTitleRef.current);
  }, [t]);

  return (
    <section className="hero">
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <h1 className="hero-main-title" ref={mainTitleRef}>
          {t('hero.mainTitle')}
        </h1>
        <div className="hero-ornament">
          <span className="hero-ornament-line" />
          <span className="hero-ornament-diamond" />
          <span className="hero-ornament-line" />
        </div>
        <p className="hero-tagline">{t('hero.tagline')}</p>
        <div className="hero-ctas">
          <a href="/#destinations" className="cta-btn cta-btn--glow">{t('hero.viewPackages')}</a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
