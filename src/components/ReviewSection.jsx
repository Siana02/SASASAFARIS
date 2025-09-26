import React from "react";
import { Star } from "lucide-react";
import { motion } from "framer-motion";
import "./ReviewSection.css"; // Import the CSS file

// Reviews data
const reviews = [
  {
    name: "Giulia Romano",
    text: "I had the most magical time in Watamu with my boyfriend. Long walks on the beach, candlelit dinners... it felt like a dream come true.",
  },
  {
    name: "Luca Bianchi",
    text: "Our safari in Amboseli was beyond expectations. The guides made us feel safe and special every step of the way. I’ll cherish it forever.",
  },
  {
    name: "Francesca Moretti",
    text: "Traveling to Diani with my partner was unforgettable. Sunsets over the ocean and the warm hospitality made it perfect.",
  },
  {
    name: "Matteo Ricci",
    text: "Exploring the Masai Mara was breathtaking. Sharing that moment with the love of my life made it even more meaningful.",
  },
  {
    name: "Sofia Conti",
    text: "From Nairobi to the coast, every detail was handled so beautifully. It felt effortless and completely romantic.",
  },
];

const ReviewSection = () => {
  return (
    <section className="review-section">
      {/* Section Header */}
      <div className="review-header">
        <h2 className="review-title">Love Stories from Our Travelers</h2>
        <p className="review-subtitle">
          Real journeys, real memories, told by couples who explored with us.
        </p>
      </div>

      {/* Infinite scrolling container */}
      <div className="review-carousel">
        <motion.div
          className="review-track"
          animate={{ x: ["0%", "-100%"] }}
          transition={{
            ease: "linear",
            duration: 45, // Auto scroll speed
            repeat: Infinity,
          }}
        >
          {/* Duplicate array for seamless looping */}
          {[...reviews, ...reviews].map((review, index) => (
            <div key={index} className="review-card">
              {/* Review text */}
              <p className="review-text">“{review.text}”</p>

              {/* Stars + Reviewer name */}
              <div>
                <div className="review-stars">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="star-icon" />
                  ))}
                </div>
                <div className="reviewer-name">{review.name}</div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ReviewSection;
