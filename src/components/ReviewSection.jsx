import React from "react";
import { Star } from "lucide-react";

const reviews = [
  {
    name: "Alessandro Bianchi",
    text: "I had the best time in Watamu, Kenya with my family. The beaches were breathtaking, and the sunsets unforgettable.",
    type: "Family Trip",
  },
  {
    name: "Giulia Rossi",
    text: "Traveling solo through Amboseli was a dream. I felt safe, inspired, and completely in tune with nature.",
    type: "Solo Traveler",
  },
  {
    name: "Lorenzo Romano",
    text: "Our honeymoon in the Masai Mara was beyond romantic. The wildlife safaris were magical!",
    type: "Couple Experience",
  },
  {
    name: "Chiara Conti",
    text: "My friends and I explored Tsavo and laughed endlessly. It was adventure mixed with pure joy.",
    type: "Friends Trip",
  },
  {
    name: "Matteo Moretti",
    text: "Taking my parents to Diani was the best decision ever. Memories we'll cherish forever.",
    type: "Family Bonding",
  },
];

export default function ReviewSection() {
  // Duplicate reviews for seamless infinite loop
  const duplicatedReviews = [...reviews, ...reviews];

  return (
    <section className="review-section">
      {/* Title */}
      <h2 className="review-title">Love Stories From Our Travelers</h2>

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
                <span className="verified-badge">✔ Verified</span>
              </div>
              <p className="review-type">{review.type}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}