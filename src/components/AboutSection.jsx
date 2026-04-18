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

const AboutSection = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "About Us — SASA Safaris Africa";
  }, []);

  const values = [
    {
      icon: <Footprints size={28} />,
      title: "Expert Local Guides",
      desc: "Our certified guides are born and raised in Africa. They know every trail, every watering hole, every story the land holds.",
    },
    {
      icon: <Heart size={28} />,
      title: "Guest-First Always",
      desc: "Every itinerary is built around you — your pace, your passions, your comfort. Your experience is our obsession.",
    },
    {
      icon: <Leaf size={28} />,
      title: "Responsible Tourism",
      desc: "We tread lightly. We give back. Every safari supports local communities and conservation efforts across Kenya.",
    },
    {
      icon: <Star size={28} />,
      title: "Bespoke Experiences",
      desc: "No cookie-cutter packages. From honeymoon escapes to family adventures — we craft journeys as unique as you are.",
    },
    {
      icon: <Shield size={28} />,
      title: "Safety & Trust",
      desc: "Your safety is our priority. All our vehicles, routes, and partners meet the highest standards of care and reliability.",
    },
    {
      icon: <Globe size={28} />,
      title: "Deep Local Knowledge",
      desc: "From Maasai Mara to Watamu's reefs — our roots in East Africa mean you discover places most visitors never see.",
    },
  ];

  const stats = [
    { value: "500+", label: "Happy Travellers" },
    { value: "10+", label: "Destinations" },
    { value: "98%", label: "Would Return" },
    { value: "5★", label: "Average Rating" },
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
          <p className="about-page-eyebrow">Our Story</p>
          <h1 className="about-page-hero-title">Born in Africa.<br />Built for You.</h1>
          <p className="about-page-hero-subtitle">
            SASA Safaris Africa is a boutique safari company rooted in
            Watamu, Kenya — crafting deeply personal journeys through the
            continent's most breathtaking landscapes since our founding.
          </p>
          <div className="about-page-hero-ctas">
            <Link to="/contact" className="about-cta-primary">
              Plan Your Safari
            </Link>
            <a href="#our-story" className="about-cta-secondary">
              Our Story ↓
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
            <img src={WatamuMain} alt="Watamu coastline, Kenya" className="about-story-img" />
            <div className="about-story-img-badge">
              <MapPin size={18} />
              <span>Watamu, Kenya</span>
            </div>
          </div>
          <div className="about-story-text">
            <p className="about-story-eyebrow">How It All Began</p>
            <h2 className="about-story-title">A Passion for Africa,<br />Shared with the World</h2>
            <p className="about-story-body">
              SASA Safaris Africa was born from a deep love of East Africa's
              wild places. Founded in Watamu on Kenya's coral coast, we started
              with a single promise: to show travellers the Africa that locals
              know — raw, generous, and unforgettable.
            </p>
            <p className="about-story-body">
              Our lead guide Sule and our small, passionate team have spent
              years building relationships with the communities, conservancies,
              and coastal operators that make each journey extraordinary. We
              believe the best safaris aren't sold — they're crafted, story by
              story, guest by guest.
            </p>
            <p className="about-story-body">
              From the red-dust plains of Maasai Mara to the turquoise waters
              off Watamu, every destination we share holds a piece of our
              hearts. We invite you to come and find yours.
            </p>
          </div>
        </div>
      </section>

      {/* ── Destinations Teaser ── */}
      <div className="about-destinations-outer">
        <section className="about-destinations-teaser">
        <div className="about-dest-image-grid">
          <img src={MaasaiMara} alt="Maasai Mara wildlife" className="about-dest-img about-dest-img--tall" />
          <img src={TsavoEast1} alt="Tsavo East landscape" className="about-dest-img" />
          <img src={SafariHero} alt="Safari experience" className="about-dest-img" />
        </div>
        <div className="about-dest-text">
          <p className="about-story-eyebrow">Where We Take You</p>
          <h2 className="about-story-title">Kenya's Most<br />Iconic Landscapes</h2>
          <p className="about-story-body">
            We specialise in East Africa — with a particular depth of knowledge
            along Kenya's coast and in its legendary national parks and
            conservancies. Every destination in our portfolio has been scouted,
            walked, and loved by our own guides.
          </p>
          <a href="/#destinations" className="about-cta-primary" style={{ display: "inline-flex" }}>
            Explore Destinations
          </a>
        </div>
        </section>
      </div>
      <section className="about-values-section">
        <div className="about-values-inner">
          <div className="about-values-header">
            <p className="about-story-eyebrow">What We Stand For</p>
            <h2 className="about-story-title">Our Guiding Principles</h2>
            <p className="about-values-subtitle">
              Six commitments that shape every safari we create.
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
            <p className="about-story-eyebrow">The People Behind the Magic</p>
            <h2 className="about-story-title">Meet Our Team</h2>
            <p className="about-story-body">
              At the heart of every SASA safari is our tight-knit team of local
              experts. Our head guide <strong>Sule</strong> has been leading
              travellers through Kenya's wild places for years, building a
              reputation for warmth, encyclopaedic wildlife knowledge, and an
              uncanny ability to spot the perfect moment.
            </p>
            <p className="about-story-body">
              Together, our team speaks English, Italian, and Swahili — and
              we're fluent in the language of genuine hospitality. You're not a
              booking reference to us; you're a guest we're honoured to host.
            </p>
            <div className="about-team-tags">
              <span className="about-team-tag"><Users size={14} /> Small Group Specialists</span>
              <span className="about-team-tag"><Globe size={14} /> Multilingual Guides</span>
              <span className="about-team-tag"><Leaf size={14} /> Conservation-Minded</span>
            </div>
          </div>
          <div className="about-team-quote-card">
            <div className="about-team-quote-mark">"</div>
            <blockquote className="about-team-quote">
              Africa has a way of getting into your soul. My goal on every
              safari is to make sure you feel what I feel every single time
              I step out into the bush — complete wonder.
            </blockquote>
            <div className="about-team-attribution">
              <span className="about-team-name">Sule</span>
              <span className="about-team-role">Head Guide & Founder, SASA Safaris Africa</span>
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
          <h2 className="about-cta-banner-title">Ready to Experience Africa?</h2>
          <p className="about-cta-banner-subtitle">
            Tell us your dream and we'll craft the safari of a lifetime — just for you.
          </p>
          <div className="about-page-hero-ctas">
            <Link to="/contact" className="about-cta-primary">
              Start Planning
            </Link>
            <a href="/#destinations" className="about-cta-secondary">
              View Destinations
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default AboutSection;