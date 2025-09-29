import React, { useState } from "react";
import { Footprints, DollarSign, Calendar, Scissors, Smile, MapPin } from "lucide-react";
import { useLanguage } from "../hooks/useLanguage";

const AboutSection = () => {
  const [expanded, setExpanded] = useState(false);
  const { t } = useLanguage();

  return (
    <section className="about-section" id="about">
      {/* Header */}
      <div className="about-header">
        <div className="about-mini-title">{t('about.miniTitle')}</div>
        <h2 className="about-main-title">{t('about.title')}</h2>
      </div>
      
      {/* Features Grid */}
      <div className="about-grid">
        {/* 1. Best Tour Guides */}
        <div className="about-feature">
          <div className="about-icon-circle">
            <Footprints className="about-icon" strokeWidth={2.5} />
          </div>
          <div className="about-feature-title">{t('about.bestGuides')}</div>
          <div className="about-feature-desc">
            {t('about.bestGuidesDesc')}
          </div>
        </div>

        {/* 2. Client Satisfaction */}
        <div className="about-feature">
          <div className="about-icon-circle">
            <Smile className="about-icon" strokeWidth={2.5} />
          </div>
          <div className="about-feature-title">{t('about.satisfaction')}</div>
          <div className="about-feature-desc">
            {t('about.satisfactionDesc')}
          </div>
        </div>

        {/* 3. Unique Destinations */}
        <div className="about-feature">
          <div className="about-icon-circle">
            <MapPin className="about-icon" strokeWidth={2.5} />
          </div>
          <div className="about-feature-title">{t('about.uniqueDestinations')}</div>
          <div className="about-feature-desc">
            Discover one-of-a-kind safari locations and hidden gems you won’t find anywhere else.
          </div>
        </div>

        {/* 4. Best Price Guarantee (updated icon) */}
        <div className="about-feature">
          <div className="about-icon-circle">
            <DollarSign className="about-icon" strokeWidth={2.5} />
          </div>
          <div className="about-feature-title">Best Price Guarantee</div>
          <div className="about-feature-desc">
            Enjoy the most competitive rates with no hidden fees—just pure value.
          </div>
        </div>

        {/* 5. Easy & Fast Booking */}
        <div className="about-feature">
          <div className="about-icon-circle">
            <Calendar className="about-icon" strokeWidth={2.5} />
          </div>
          <div className="about-feature-title">Easy & Fast Booking</div>
          <div className="about-feature-desc">
            Book your safari in seconds using our seamless and secure platform.
          </div>
        </div>

        {/* 6. Tailored Safaris */}
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
