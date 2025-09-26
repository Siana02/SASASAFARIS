import React, { useState } from "react";
import { Footprints, BadgeDollarSign, Calendar, Scissors } from "lucide-react";

const AboutSection = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <section className="about-section py-12 px-6 lg:px-20" id="about">
      {/* Header */}
      <div className="about-header text-center mb-10">
        <div className="about-mini-title text-sm font-semibold uppercase tracking-wide text-accent">
          Why Us?
        </div>
        <h2 className="about-main-title text-3xl md:text-4xl font-bold text-gray-900">
          Your Safari, Made Simple
        </h2>
      </div>

      {/* Features Grid */}
      <div className="about-grid grid grid-cols-1 sm:grid-cols-2 gap-8 mb-8">
        {/* 1. Best Tour Guides */}
        <div className="about-feature text-center p-6 bg-white rounded-2xl shadow-md">
          <div className="about-icon-circle w-20 h-20 mx-auto flex items-center justify-center rounded-full bg-accent mb-4">
            <Footprints className="w-10 h-10 text-white" strokeWidth={2.5} />
          </div>
          <div className="about-feature-title text-xl font-semibold mb-2">
            Best Tour Guides
          </div>
          <div className="about-feature-desc text-gray-600">
            Local experts who know every hidden gem and make your adventure unforgettable.
          </div>
        </div>

        {/* 2. Best Price Guarantee */}
        <div className="about-feature text-center p-6 bg-white rounded-2xl shadow-md">
          <div className="about-icon-circle w-20 h-20 mx-auto flex items-center justify-center rounded-full bg-accent mb-4">
            <BadgeDollarSign className="w-10 h-10 text-white" strokeWidth={2.5} />
          </div>
          <div className="about-feature-title text-xl font-semibold mb-2">
            Best Price Guarantee
          </div>
          <div className="about-feature-desc text-gray-600">
            Enjoy the most competitive rates with no hidden fees—just pure value.
          </div>
        </div>

        {/* 3. Easy & Fast Booking */}
        <div className="about-feature text-center p-6 bg-white rounded-2xl shadow-md">
          <div className="about-icon-circle w-20 h-20 mx-auto flex items-center justify-center rounded-full bg-accent mb-4">
            <Calendar className="w-10 h-10 text-white" strokeWidth={2.5} />
          </div>
          <div className="about-feature-title text-xl font-semibold mb-2">
            Easy & Fast Booking
          </div>
          <div className="about-feature-desc text-gray-600">
            Book your safari in seconds using our seamless and secure platform.
          </div>
        </div>

        {/* 4. Tailored Safaris */}
        <div className="about-feature text-center p-6 bg-white rounded-2xl shadow-md">
          <div className="about-icon-circle w-20 h-20 mx-auto flex items-center justify-center rounded-full bg-accent mb-4">
            <Scissors className="w-10 h-10 text-white" strokeWidth={2.5} />
          </div>
          <div className="about-feature-title text-xl font-semibold mb-2">
            Tailored Safaris
          </div>
          <div className="about-feature-desc text-gray-600">
            Tour all your desired destinations in one unforgettable journey—just for you.
          </div>
        </div>
      </div>

      {/* Learn More CTA */}
      <div className="about-learn-more-container text-center">
        <button
          onClick={() => setExpanded(!expanded)}
          className="about-learn-more-cta px-6 py-3 bg-accent text-white font-semibold rounded-full shadow-md hover:opacity-90 transition"
        >
          {expanded ? "Show Less" : "Learn More"}
        </button>
      </div>

      {/* Hidden expanded content */}
      <div
        className={`about-expanded-content mt-8 max-w-3xl mx-auto text-center transition-all duration-500 overflow-hidden ${
          expanded ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="about-detail-title text-2xl font-bold mb-4 text-gray-900">
          Our Story & Mission
        </div>
        <div className="about-detail-body text-gray-700 space-y-4">
          <p>
            From humble beginnings to leading safaris across Africa, our team is passionate
            about crafting journeys that celebrate wildlife, culture, and the spirit of adventure.
            Our mission: to make every safari personal, safe, and extraordinary for every guest.
          </p>
          <p>
            Whether you’re traveling solo, as a family, or with friends, our tailored itineraries
            and local expertise guarantee an experience you’ll never forget.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
