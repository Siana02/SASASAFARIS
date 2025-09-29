import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../hooks/useLanguage';

const CookiePopup = () => {
  const [showPopup, setShowPopup] = useState(false);
  const { t, triggerLanguageBannerAfterCookie } = useLanguage();

  useEffect(() => {
    // Check if user has already made a choice
    const cookieConsent = localStorage.getItem('cookieConsent');
    if (!cookieConsent) {
      setShowPopup(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    localStorage.setItem('trackingEnabled', 'true');
    setShowPopup(false);
    
    // Trigger language banner if needed
    if (triggerLanguageBannerAfterCookie) {
      triggerLanguageBannerAfterCookie();
    }
    
    // Enable tracking
    initializeTracking();
  };

  const handleDecline = () => {
    localStorage.setItem('cookieConsent', 'declined');
    localStorage.setItem('trackingEnabled', 'false');
    setShowPopup(false);
    
    // Trigger language banner if needed
    if (triggerLanguageBannerAfterCookie) {
      triggerLanguageBannerAfterCookie();
    }
  };

  const initializeTracking = () => {
    // Lightweight interaction tracking
    const trackEvent = (eventType, element) => {
      const event = {
        type: eventType,
        element: element,
        timestamp: new Date().toISOString(),
        page: window.location.pathname
      };
      
      // Store events in localStorage (in real app, you'd send to analytics service)
      const events = JSON.parse(localStorage.getItem('userEvents') || '[]');
      events.push(event);
      
      // Keep only last 100 events to prevent storage bloat
      if (events.length > 100) {
        events.splice(0, events.length - 100);
      }
      
      localStorage.setItem('userEvents', JSON.stringify(events));
    };

    // Track clicks on main sections
    document.addEventListener('click', (e) => {
      if (e.target.closest('.packages-section')) trackEvent('click', 'packages');
      if (e.target.closest('.about-section')) trackEvent('click', 'about');
      if (e.target.closest('.contact-form-section')) trackEvent('click', 'contact');
      if (e.target.closest('.review-section')) trackEvent('click', 'reviews');
    });

    // Track hover events on key elements
    document.addEventListener('mouseover', (e) => {
      if (e.target.closest('.cta-btn')) trackEvent('hover', 'cta-button');
      if (e.target.closest('.review-card')) trackEvent('hover', 'review-card');
    });
  };

  if (!showPopup) return null;

  return (
    <div className="cookie-popup-overlay">
      <div className="cookie-popup">
        <h3>{t('cookie.title')}</h3>
        <p>
          {t('cookie.description')}
        </p>
        <div className="cookie-popup-buttons">
          <button onClick={handleAccept} className="cookie-btn accept">
            {t('cookie.accept')}
          </button>
          <button onClick={handleDecline} className="cookie-btn decline">
            {t('cookie.decline')}
          </button>
          <Link to="/cookies" className="cookie-btn learn-more" onClick={() => setShowPopup(false)}>
            {t('cookie.learnMore')}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CookiePopup;