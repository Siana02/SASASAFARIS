import React from "react";
import { Link } from "react-router-dom";
import { previewArticles } from "../data/BlogData";
import LazyImage from "./LazyImage";

const TRIP_ADVISOR_REVIEWS = [
  {
    text: "Sasa Safaris took care of absolutely everything. We saw the Big 5 on day one. I've travelled a lot and this is the best wildlife experience I've ever had.",
    author: "James R.",
    origin: "United Kingdom",
    rating: 5,
    platform: "TripAdvisor",
  },
];

const TRUST_STATS = [
  { value: "4.9 / 5", label: "TripAdvisor Rating", icon: "★" },
  { value: "500+", label: "Safaris Planned", icon: "🌍" },
  { value: "98%", label: "Would Recommend", icon: "✓" },
  { value: "10+", label: "Years of Experience", icon: "◈" },
];

const StarRating = ({ count }) => (
  <span className="bps-star-row" aria-label={`${count} out of 5 stars`}>
    {Array.from({ length: count }).map((_, i) => (
      <span key={i} className="bps-star">★</span>
    ))}
  </span>
);

const BlogPreviewSection = () => {
  const review = TRIP_ADVISOR_REVIEWS[0];

  return (
    <section className="blog-preview-section" id="blog">
      <div className="blog-preview__inner">

        {/* ── Header ── */}
        <div className="blog-preview__header">
          <span className="blog-section-eyebrow">Stories &amp; Inspiration</span>
          <h2 className="blog-preview__title">From the Sasa Safaris Journal</h2>
          <p className="blog-preview__subtitle">
            Expert safari guides, cultural deep-dives, and real traveller stories — curated to make every trip better.
          </p>
          <div className="blog-preview__ornament">
            <span className="bpo-line" />
            <span className="bpo-diamond" />
            <span className="bpo-line" />
          </div>
        </div>

        {/* ── Trust Stats Strip ── */}
        <div className="bps-trust-strip">
          {TRUST_STATS.map((stat) => (
            <div className="bps-trust-item" key={stat.label}>
              <span className="bps-trust-icon" aria-hidden="true">{stat.icon}</span>
              <span className="bps-trust-value">{stat.value}</span>
              <span className="bps-trust-label">{stat.label}</span>
            </div>
          ))}
        </div>

        {/* ── Featured Reviewer Quote ── */}
        <blockquote className="bps-quote-strip">
          <span className="bps-quote-mark" aria-hidden="true">"</span>
          <p className="bps-quote-text">{review.text}</p>
          <footer className="bps-quote-footer">
            <StarRating count={review.rating} />
            <cite className="bps-quote-cite">
              {review.author}, {review.origin}
              <span className="bps-quote-platform">
                <svg className="bps-ta-icon" viewBox="0 0 24 24" aria-hidden="true" fill="currentColor" width="14" height="14">
                  <circle cx="12" cy="12" r="10" />
                  <circle cx="12" cy="12" r="4" fill="#fff" />
                </svg>
                {review.platform}
              </span>
            </cite>
          </footer>
        </blockquote>

        {/* ── Cards ── */}
        <div className="blog-preview__cards">
          {previewArticles.map((article) => (
            <Link
              key={article.id}
              to="/blog"
              className="blog-preview-card"
              aria-label={`Read: ${article.title}`}
            >
              <div className="blog-preview-card__img-wrap">
                <LazyImage
                  src={article.image}
                  alt={article.imageAlt}
                  className="blog-preview-card__img"
                />
                <div className="blog-preview-card__overlay" />
                <span className="blog-tag blog-preview-card__tag">{article.tag}</span>
                {article.readTime && (
                  <span className="blog-preview-card__read-time">{article.readTime}</span>
                )}
              </div>
              <div className="blog-preview-card__body">
                <time className="blog-card-date">{article.date}</time>
                <h3 className="blog-preview-card__title">{article.title}</h3>
                <p className="blog-preview-card__excerpt">{article.excerpt}</p>
                {article.stats && (
                  <ul className="blog-preview-card__stats" aria-label="Key facts">
                    {article.stats.slice(0, 2).map((s) => (
                      <li key={s.label} className="blog-preview-card__stat">
                        <strong>{s.value}</strong>
                        <span>{s.label}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </Link>
          ))}
        </div>

        {/* ── CTA ── */}
        <div className="blog-preview__cta-wrap">
          <p className="blog-preview__cta-nudge">
            Join 500+ travellers who've used our guides to plan their perfect safari.
          </p>
          <Link to="/blog" className="blog-preview__cta">
            Read All Articles
            <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </Link>
        </div>

      </div>
    </section>
  );
};

export default BlogPreviewSection;
