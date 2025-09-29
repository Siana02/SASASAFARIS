import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "../hooks/useLanguage";

const HeroSection = () => {
  const heroTitleRef = useRef(null);
  const { t } = useLanguage();

  useEffect(() => {
    const animateHeroTitle = () => {
      if (!heroTitleRef.current) return;

      const titleElement = heroTitleRef.current;
      const originalText = titleElement.textContent;
      
      // Split text into words, preserving spaces
      const words = originalText.split(' ');
      
      // Clear the title
      titleElement.innerHTML = '';
      
      let letterDelay = 0;
      
      words.forEach((word, wordIndex) => {
        // Create word wrapper
        const wordSpan = document.createElement('span');
        wordSpan.className = 'word';
        
        // Split word into letters
        [...word].forEach((letter) => {
          const letterSpan = document.createElement('span');
          letterSpan.className = 'letter';
          letterSpan.textContent = letter;
          letterSpan.style.animationDelay = `${letterDelay * 0.1}s`;
          wordSpan.appendChild(letterSpan);
          letterDelay++;
        });
        
        titleElement.appendChild(wordSpan);
        
        // Add space after word (except for last word)
        if (wordIndex < words.length - 1) {
          const spaceSpan = document.createElement('span');
          spaceSpan.className = 'letter';
          spaceSpan.innerHTML = '&nbsp;';
          spaceSpan.style.animationDelay = `${letterDelay * 0.1}s`;
          titleElement.appendChild(spaceSpan);
          letterDelay++;
        }
      });
    };

    // Run animation on mount
    animateHeroTitle();
  }, []);

  return (
    <section className="hero">
      <div className="hero-bg" id="hero-bg">
        <div className="hero-overlay"></div>
      </div>
      <div className="hero-content">
        <h1 className="hero-title" ref={heroTitleRef}>{t('hero.title')}</h1>
        <p className="hero-desc">{t('hero.description')}</p>
        <div className="hero-ctas">
          <a href="#packages" className="cta-btn">{t('hero.viewPackages')}</a>

          
          <Link to="/contact" className="cta-secondary">
            {t('hero.contactUs')}
            <span className="cta-secondary-icon">
              {/* SVG Icon */}
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
