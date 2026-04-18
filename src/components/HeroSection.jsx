import React, { useEffect, useRef } from "react";
import { useLanguage } from "../hooks/useLanguage";

const HeroSection = () => {
  const mainTitleRef = useRef(null);
  const { t } = useLanguage();

  useEffect(() => {
    const animateTitle = (el) => {
      if (!el) return;
      const words = el.textContent.trim().split(/\s+/);
      el.innerHTML = '';

      words.forEach((word, i) => {
        const wordSpan = document.createElement('span');
        wordSpan.className = 'word';
        wordSpan.textContent = word;
        wordSpan.style.animationDelay = `${i * 0.22}s`;
        el.appendChild(wordSpan);
        if (i < words.length - 1) {
          el.appendChild(document.createTextNode(' '));
        }
      });
    };

    animateTitle(mainTitleRef.current);
  }, []);

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
          <a href="#packages" className="cta-btn cta-btn--glow">{t('hero.viewPackages')}</a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
