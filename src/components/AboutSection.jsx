import React from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import {
  Footprints,
  Leaf,
  Heart,
  Star,
  MapPin,
  Users,
  Globe,
  Shield,
} from "lucide-react";
import {
  SafariHero,
  ElephantSunset,
  WatamuMain,
  MaasaiMara,
  TsavoEast1,
} from "../assets/images";
import { useLanguage } from "../hooks/useLanguage";
import { setPageMeta } from "../utils/seo";

const AboutSection = () => {
  const { t } = useLanguage();

  useEffect(() => {
    window.scrollTo(0, 0);
    setPageMeta(
      'About Us — Safari Travel Experts Africa | Sasa Safaris Africa',
      'Meet Sasa Safaris Africa — boutique safari travel experts based in Watamu, Kenya. We craft tailor-made African safari experiences and luxury safaris across Kenya\'s best destinations.',
      'https://www.sasasafaris.com/about'
    );
  }, []);

  const values = [
    { icon: <Footprints size={28} />, title: t('aboutPage.value1Title'), desc: t('aboutPage.value1Desc') },
    { icon: <Heart size={28} />,      title: t('aboutPage.value2Title'), desc: t('aboutPage.value2Desc') },
    { icon: <Leaf size={28} />,       title: t('aboutPage.value3Title'), desc: t('aboutPage.value3Desc') },
    { icon: <Star size={28} />,       title: t('aboutPage.value4Title'), desc: t('aboutPage.value4Desc') },
    { icon: <Shield size={28} />,     title: t('aboutPage.value5Title'), desc: t('aboutPage.value5Desc') },
    { icon: <Globe size={28} />,      title: t('aboutPage.value6Title'), desc: t('aboutPage.value6Desc') },
  ];

  const stats = [
    { value: "500+", label: t('aboutPage.stat1') },
    { value: "10+",  label: t('aboutPage.stat2') },
    { value: "98%",  label: t('aboutPage.stat3') },
    { value: "5★",   label: t('aboutPage.stat4') },
  ];

  return (
    <main className="about-page">
      {/* ── Hero ── */}
      <section
        className="about-page-hero"
        style={{ backgroundImage: `url(${ElephantSunset})` }}
      >
        <div className="about-page-hero-overlay" />
        <div className="about-page-hero-content">
          <p className="about-page-eyebrow">{t('aboutPage.eyebrow')}</p>
          <h1 className="about-page-hero-title">{t('aboutPage.heroTitle')}</h1>
          <p className="about-page-hero-subtitle">
            {t('aboutPage.heroSubtitle')}
          </p>
          <div className="about-page-hero-ctas">
            <Link to="/contact" className="about-cta-primary">
              {t('aboutPage.planSafari')}
            </Link>
            <a href="#our-story" className="about-cta-secondary">
              {t('aboutPage.ourStoryLink')}
            </a>
          </div>
        </div>
      </section>

      {/* ── Stats Bar ── */}
      <section className="about-stats-bar">
        {stats.map((s) => (
          <div key={s.label} className="about-stat-item">
            <span className="about-stat-value">{s.value}</span>
            <span className="about-stat-label">{s.label}</span>
          </div>
        ))}
      </section>

      {/* ── Our Story ── */}
      <section className="about-story-section" id="our-story">
        <div className="about-story-inner">
          <div className="about-story-image-wrap">
            <img src={WatamuMain} alt="Watamu coastline — hidden gem on Kenya's coral coast" className="about-story-img" />
            <div className="about-story-img-badge">
              <MapPin size={18} />
              <span>Watamu, Kenya</span>
            </div>
          </div>
          <div className="about-story-text">
            <p className="about-story-eyebrow">{t('aboutPage.storyEyebrow')}</p>
            <h2 className="about-story-title">{t('aboutPage.storyTitle')}</h2>
            <p className="about-story-body">{t('aboutPage.storyBody1')}</p>
            <p className="about-story-body">{t('aboutPage.storyBody2')}</p>
            <p className="about-story-body">{t('aboutPage.storyBody3')}</p>
          </div>
        </div>
      </section>

      {/* ── Destinations Teaser ── */}
      <div className="about-destinations-outer">
        <section className="about-destinations-teaser">
        <div className="about-dest-image-grid">
          <img src={MaasaiMara} alt="Maasai Mara safari wildlife — tailor-made safaris in Kenya" className="about-dest-img about-dest-img--tall" />
          <img src={TsavoEast1} alt="Tsavo East National Park safari landscape, Kenya" className="about-dest-img" />
          <img src={SafariHero} alt="Custom safari jeep experience Kenya — Sasa Safaris Africa" className="about-dest-img" />
        </div>
        <div className="about-dest-text">
          <p className="about-story-eyebrow">{t('aboutPage.destEyebrow')}</p>
          <h2 className="about-story-title">{t('aboutPage.destTitle')}</h2>
          <p className="about-story-body">{t('aboutPage.destBody')}</p>
          <a href="/#destinations" className="about-cta-primary" style={{ display: "inline-flex" }}>
            {t('aboutPage.exploreDestinations')}
          </a>
        </div>
        </section>
      </div>
      <section className="about-values-section">
        <div className="about-values-inner">
          <div className="about-values-header">
            <p className="about-story-eyebrow">{t('aboutPage.valuesEyebrow')}</p>
            <h2 className="about-story-title">{t('aboutPage.valuesTitle')}</h2>
            <p className="about-values-subtitle">
              {t('aboutPage.valuesSubtitle')}
            </p>
          </div>
          <div className="about-values-grid">
            {values.map((v) => (
              <div key={v.title} className="about-value-card">
                <div className="about-value-icon">{v.icon}</div>
                <h3 className="about-value-title">{v.title}</h3>
                <p className="about-value-desc">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Team Spotlight ── */}
      <section className="about-team-section">
        <div className="about-team-inner">
          <div className="about-team-text">
            <p className="about-story-eyebrow">{t('aboutPage.teamEyebrow')}</p>
            <h2 className="about-story-title">{t('aboutPage.teamTitle')}</h2>
            <p className="about-story-body">{t('aboutPage.teamBody1')}</p>
            <p className="about-story-body">{t('aboutPage.teamBody2')}</p>
            <div className="about-team-tags">
              <span className="about-team-tag"><Users size={14} /> {t('aboutPage.tag1')}</span>
              <span className="about-team-tag"><Globe size={14} /> {t('aboutPage.tag2')}</span>
              <span className="about-team-tag"><Leaf size={14} /> {t('aboutPage.tag3')}</span>
            </div>
          </div>
          <div className="about-team-quote-card">
            <div className="about-team-quote-mark">"</div>
            <blockquote className="about-team-quote">
              {t('aboutPage.quote')}
            </blockquote>
            <div className="about-team-attribution">
              <span className="about-team-name">{t('aboutPage.quoteName')}</span>
              <span className="about-team-role">{t('aboutPage.quoteRole')}</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA Banner ── */}
      <section
        className="about-cta-banner"
        style={{ backgroundImage: `url(${MaasaiMara})` }}
      >
        <div className="about-cta-banner-overlay" />
        <div className="about-cta-banner-content">
          <h2 className="about-cta-banner-title">{t('aboutPage.ctaBannerTitle')}</h2>
          <p className="about-cta-banner-subtitle">
            {t('aboutPage.ctaBannerSubtitle')}
          </p>
          <div className="about-page-hero-ctas">
            <Link to="/contact" className="about-cta-primary">
              {t('aboutPage.startPlanning')}
            </Link>
            <a href="/#destinations" className="about-cta-secondary">
              {t('aboutPage.viewDestinations')}
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default AboutSection;
