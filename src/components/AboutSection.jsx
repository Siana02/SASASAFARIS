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
            {t('about.uniqueDestinationsDesc')}
          </div>
        </div>

        {/* 4. Best Price Guarantee (updated icon) */}
        <div className="about-feature">
          <div className="about-icon-circle">
            <DollarSign className="about-icon" strokeWidth={2.5} />
          </div>
          <div className="about-feature-title">{t('about.bestPrice')}</div>
          <div className="about-feature-desc">
            {t('about.bestPriceDesc')}
          </div>
        </div>

        {/* 5. Flexible Scheduling */}
        <div className="about-feature">
          <div className="about-icon-circle">
            <Calendar className="about-icon" strokeWidth={2.5} />
          </div>
          <div className="about-feature-title">{t('about.flexible')}</div>
          <div className="about-feature-desc">
            {t('about.flexibleDesc')}
          </div>
        </div>

        {/* 6. Eco & Sustainability */}
        <div className="about-feature">
          <div className="about-icon-circle">
            <Scissors className="about-icon" strokeWidth={2.5} />
          </div>
          <div className="about-feature-title">{t('about.sustainability')}</div>
          <div className="about-feature-desc">
            {t('about.sustainabilityDesc')}
          </div>
        </div>
      </div>


      {/* Learn More CTA */}
      <div className="about-learn-more-container">
        <button
          onClick={() => setExpanded(!expanded)}
          className="about-learn-more-cta"
        >
          {expanded ? t('about.showLess') : t('about.learnMore')}
        </button>
      </div>

      {/* Hidden expanded content */}
      <div className={`about-expanded-content ${expanded ? "expanded" : ""}`}>
        <div className="about-detail-title">{t('about.ourStoryTitle')}</div>
        <div className="about-detail-body">
          <p>
            {t('about.ourStoryDesc1')}
          </p>
          <p>
            {t('about.ourStoryDesc2')}
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;