import React, { useState } from "react";
import { Footprints, BadgeDollarSign, Calendar, Scissors } from "lucide-react";

const AboutSection = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <section className="about-section" id="about">
      {/* Header */}
      <div className="about-header">
        <div className="about-mini-title">Why Us?</div>
        <h2 className="about-main-title">Your Safari, Made Simple</h2>
      </div>

      {/* Features Grid */}
      <div className="about-grid">
        <div className="about-feature">
          <div className="about-icon-circle">
            <Footprints className="about-icon" strokeWidth={2.5} />
          </div>
          <div className="about-feature-title">Best Tour Guides</div>
          <div className="about-feature-desc">
            Local experts who know every hidden gem and make your adventure unforgettable.
          </div>
        </div>

        <div className="about-feature">
          <div className="about-icon-circle">
            <BadgeDollarSign className="about-icon" strokeWidth={2.5} />
          </div>
          <div className="about-feature-title">Best Price Guarantee</div>
          <div className="about-feature-desc">
            Enjoy the most competitive rates with no hidden fees—just pure value.
          </div>
        </div>

        <div className="about-feature">
          <div className="about-icon-circle">
            <Calendar className="about-icon" strokeWidth={2.5} />
          </div>
          <div className="about-feature-title">Easy & Fast Booking</div>
          <div className="about-feature-desc">
            Book your safari in seconds using our seamless and secure platform.
          </div>
        </div>

        <div className="about-feature">
          <div className="about-icon-circle">
            <Scissors className="about-icon" strokeWidth={2.5} />
          </div>
          <div className="about-feature-title">Tailored Safaris</div>
          <div className="about-feature-desc">
            Tour all your desired destinations in one unforgettable journey—just for you.
          </div>
        </div>
      </div>

      {/* Learn More CTA */}
      <div className="about-learn-more-container">
        <button
          onClick={() => setExpanded(!expanded)}
          className="about-learn-more-cta"
        >
          {expanded ? "Show Less" : "Learn More"}
        </button>
      </div>

      {/* Hidden expanded content */}
      <div className={`about-expanded-content ${expanded ? "expanded" : ""}`}>
        <div className="about-detail-title">Our Story & Mission</div>
        <div className="about-detail-body">
          <p>
            From humble beginnings to leading safaris across Africa, our team is
            passionate about crafting journeys that celebrate wildlife, culture,
            and the spirit of adventure. Our mission: to make every safari
            personal, safe, and extraordinary for every guest.
          </p>
          <p>
            Whether you’re traveling solo, as a family, or with friends, our
            tailored itineraries and local expertise guarantee an experience
            you’ll never forget.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
