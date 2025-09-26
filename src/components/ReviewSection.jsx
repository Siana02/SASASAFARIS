import React from "react";
import { Star } from "lucide-react";
import { motion } from "framer-motion";

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
    <section className="review-section py-16 px-6 lg:px-20 bg-gray-50">
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          Love Stories from Our Travelers
        </h2>
        <p className="text-gray-600 mt-2">
          Real journeys, real memories, told by couples who explored with us.
        </p>
      </div>

      {/* Infinite scrolling container */}
      <div className="overflow-hidden relative">
        <motion.div
          className="flex gap-6"
          animate={{ x: ["0%", "-100%"] }}
          transition={{
            ease: "linear",
            duration: 45, // adjust scroll speed
            repeat: Infinity,
          }}
        >
          {[...reviews, ...reviews].map((review, index) => (
            <div
              key={index}
              className="review-card min-w-[280px] sm:min-w-[360px] md:min-w-[420px] max-h-[40vh] 
                         bg-white rounded-xl shadow-md hover:shadow-xl 
                         p-6 flex flex-col justify-between transition-transform 
                         duration-500 hover:-translate-y-2"
            >
              <p className="text-gray-700 italic text-base leading-relaxed mb-4">
                “{review.text}”
              </p>
              <div>
                {/* Stars */}
                <div className="flex text-yellow-500 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current" />
                  ))}
                </div>
                {/* Name */}
                <div className="font-semibold text-gray-900 text-sm tracking-wide">
                  {review.name}
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ReviewSection;
