import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Cookie, X } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';

const CookiePopup = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [visible, setVisible] = useState(false);
  const { triggerLanguageBannerAfterCookie } = useLanguage();

  useEffect(() => {
    const cookieConsent = localStorage.getItem('cookieConsent');
    if (!cookieConsent) {
      // Small delay before showing for a smooth entry
      const t = setTimeout(() => {
        setShowPopup(true);
        requestAnimationFrame(() => setVisible(true));
      }, 1200);
      return () => clearTimeout(t);
    }
  }, []);

  const dismiss = (choice) => {
    setVisible(false);
    setTimeout(() => setShowPopup(false), 350);
    localStorage.setItem('cookieConsent', choice);
    localStorage.setItem('trackingEnabled', choice === 'accepted' ? 'true' : 'false');
    if (triggerLanguageBannerAfterCookie) triggerLanguageBannerAfterCookie();
    if (choice === 'accepted') initializeTracking();
  };

  const initializeTracking = () => {
    const trackEvent = (eventType, element) => {
      const events = JSON.parse(localStorage.getItem('userEvents') || '[]');
      events.push({ type: eventType, element, timestamp: new Date().toISOString(), page: window.location.pathname });
      if (events.length > 100) events.splice(0, events.length - 100);
      localStorage.setItem('userEvents', JSON.stringify(events));
    };
    document.addEventListener('click', (e) => {
      if (e.target.closest('.about-section')) trackEvent('click', 'about');
      if (e.target.closest('.contact-form-section')) trackEvent('click', 'contact');
      if (e.target.closest('.review-section')) trackEvent('click', 'reviews');
    });
  };

  if (!showPopup) return null;

  return (
    <div className={`cookie-popup-overlay${visible ? ' cookie-popup-visible' : ''}`} role="dialog" aria-modal="true" aria-label="Cookie consent">
      <div className="cookie-popup-bar">
        {/* Icon + Text */}
        <div className="cookie-popup-left">
          <div className="cookie-popup-icon-wrap">
            <Cookie size={24} />
          </div>
          <div className="cookie-popup-text">
            <p className="cookie-popup-title">We use cookies</p>
            <p className="cookie-popup-desc">
              We use cookies to enhance your browsing experience and provide personalised content.{' '}
              <Link to="/cookies" onClick={() => dismiss('declined')} className="cookie-popup-link">
                Learn more
              </Link>
            </p>
          </div>
        </div>

        {/* Buttons */}
        <div className="cookie-popup-actions">
          <button onClick={() => dismiss('declined')} className="cookie-action-decline">
            Decline
          </button>
          <button onClick={() => dismiss('accepted')} className="cookie-action-accept">
            Accept All
          </button>
          <button onClick={() => dismiss('declined')} className="cookie-action-close" aria-label="Close">
            <X size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookiePopup;