import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "../hooks/useLanguage";
import AnimatedHeroBg from "./AnimatedHeroBg";

const HeroSection = () => {
  const mainTitleRef = useRef(null);
  const { t } = useLanguage();

  useEffect(() => {
    const animateTitle = (el) => {
      if (!el) return;
      const originalText = el.textContent;
      const words = originalText.split(' ');
      el.innerHTML = '';
      let letterDelay = 0;

      words.forEach((word, wordIndex) => {
        const wordSpan = document.createElement('span');
        wordSpan.className = 'word';

        [...word].forEach((letter) => {
          const letterSpan = document.createElement('span');
          letterSpan.className = 'letter';
          letterSpan.textContent = letter;
          letterSpan.style.animationDelay = `${letterDelay * 0.08}s`;
          wordSpan.appendChild(letterSpan);
          letterDelay++;
        });

        el.appendChild(wordSpan);

        if (wordIndex < words.length - 1) {
          const spaceSpan = document.createElement('span');
          spaceSpan.className = 'letter';
          spaceSpan.innerHTML = '&nbsp;';
          spaceSpan.style.animationDelay = `${letterDelay * 0.08}s`;
          el.appendChild(spaceSpan);
          letterDelay++;
        }
      });
    };

    animateTitle(mainTitleRef.current);
  }, []);

  return (
    <section className="hero">
      <AnimatedHeroBg />
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
        <p className="hero-title">{t('hero.title')}</p>
        <p className="hero-desc">{t('hero.description')}</p>
        <div className="hero-ctas">
          <a href="#packages" className="cta-btn">{t('hero.viewPackages')}</a>
          <Link to="/contact" className="cta-secondary">
            {t('hero.contactUs')}
            <span className="cta-secondary-icon">
              <svg viewBox="0 0 48 48" width="48" height="48" aria-hidden="true" focusable="false">
                <circle cx="24" cy="24" r="20" fill="var(--cta)" />
                <polyline points="18 30 30 18" fill="none" stroke="#fff" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
                <polyline points="18 18 30 18 30 30" fill="none" stroke="#fff" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
