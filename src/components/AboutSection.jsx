import React from "react";
import { Footprints, BadgeDollarSign, Calendar, Scissors } from "lucide-react";

const AboutSection = () => (
  <section className="about-section" id="about">
    <div className="about-header">
      <div className="about-mini-title">Why Us?</div>
      <h2 className="about-main-title">Your Safari, Made Simple</h2>
    </div>

    <div className="about-grid">
      {/* 1. Best Tour Guides */}
      <div className="about-feature">
        <div className="about-icon-circle">
          <Footprints size={48} color="#fff" strokeWidth={2.5} />
        </div>
        <div className="about-feature-title">Best Tour Guides</div>
        <div className="about-feature-desc">
          Local experts who know every hidden gem and make your adventure unforgettable.
        </div>
      </div>

      {/* 2. Best Price Guarantee */}
      <div className="about-feature">
        <div className="about-icon-circle">
          <BadgeDollarSign size={48} color="#fff" strokeWidth={2.5} />
        </div>
        <div className="about-feature-title">Best Price Guarantee</div>
        <div className="about-feature-desc">
          Enjoy the most competitive rates with no hidden fees—just pure value.
        </div>
      </div>

      {/* 3. Easy & Fast Booking */}
      <div className="about-feature">
        <div className="about-icon-circle">
          <Calendar size={48} color="#fff" strokeWidth={2.5} />
        </div>
        <div className="about-feature-title">Easy & Fast Booking</div>
        <div className="about-feature-desc">
          Book your safari in seconds using our seamless and secure platform.
        </div>
      </div>

      {/* 4. Tailored Safaris */}
      <div className="about-feature">
        <div className="about-icon-circle">
          <Scissors size={48} color="#fff" strokeWidth={2.5} />
        </div>
        <div className="about-feature-title">Tailored Safaris</div>
        <div className="about-feature-desc">
          Tour all your desired destinations in one unforgettable journey—just for you.
        </div>
      </div>
    </div>

    {/* Learn More CTA */}
    <div className="about-learn-more-container">
      <button className="about-learn-more-cta">Learn More</button>
    </div>

    {/* Hidden expanded content */}
    <div className="about-expanded-content" style={{ display: "none" }}>
      <div className="about-detail-title">Our Story & Mission</div>
      <div className="about-detail-body">
        <p>
          From humble beginnings to leading safaris across Africa, our team is passionate about
          crafting journeys that celebrate wildlife, culture, and the spirit of adventure. Our
          mission: to make every safari personal, safe, and extraordinary for every guest.
        </p>
        <p>
          Whether you’re traveling solo, as a family, or with friends, our tailored itineraries and
          local expertise guarantee an experience you’ll never forget.
        </p>
      </div>
    </div>
  </section>
);

export default AboutSection;
