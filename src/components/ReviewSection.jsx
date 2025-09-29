import React from "react";
import { Star } from "lucide-react";
import { useLanguage } from "../hooks/useLanguage";
import enTranslations from '../translations/en.json';
import itTranslations from '../translations/it.json';

export default function ReviewSection() {
  const { t, currentLanguage } = useLanguage();
  
  // Get reviews from the appropriate translation file
  const translations = currentLanguage === 'it' ? itTranslations : enTranslations;
  const reviews = translations.reviews.reviews;
  
  // Duplicate reviews for seamless infinite loop
  const duplicatedReviews = [...reviews, ...reviews];

  return (
    <section className="review-section">
      {/* Title */}
      <h2 className="review-title">{t('reviews.title')}</h2>

      {/* Review Container */}
      <div className="review-carousel">
        <div className="review-track">
          {duplicatedReviews.map((review, index) => (
            <div className="review-card" key={index}>
              <p className="review-text">"{review.text}"</p>
              <div className="review-stars">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={18} className="star-icon" />
                ))}
              </div>
              <div className="review-footer">
                <span className="review-name">— {review.name}</span>
                <span className="verified-badge">✔ {t('reviews.verified')}</span>
              </div>
              <p className="review-type">{review.type}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}