import React from "react";
import { Link } from "react-router-dom";
import { getPreviewArticles } from "../data/BlogData";
import LazyImage from "./LazyImage";
import { useLanguage } from "../hooks/useLanguage";

const StarRating = ({ count }) => (
  <span className="bps-star-row" aria-label={`${count} out of 5 stars`}>
    {Array.from({ length: count }).map((_, i) => (
      <span key={i} className="bps-star">★</span>
    ))}
  </span>
);

const BlogPreviewSection = () => {
  const { t, currentLanguage } = useLanguage();
  const previewArticles = getPreviewArticles(currentLanguage);

  return (
    <section className="blog-preview-section" id="blog">
      <div className="blog-preview__inner">

        {/* ── Header ── */}
        <div className="blog-preview__header">
          <span className="blog-section-eyebrow">{t('blogPreview.eyebrow')}</span>
          <h2 className="blog-preview__title">{t('blogPreview.title')}</h2>
          <p className="blog-preview__subtitle">
            {t('blogPreview.subtitle')}
          </p>
          <div className="blog-preview__ornament">
            <span className="bpo-line" />
            <span className="bpo-diamond" />
            <span className="bpo-line" />
          </div>
        </div>

        {/* ── Trust Stats Strip ── */}
        <div className="bps-trust-strip">
          {[
            { value: "4.9 / 5", label: t('blogPreview.stat1Label'), icon: "★" },
            { value: "500+",    label: t('blogPreview.stat2Label'), icon: "🌍" },
            { value: "98%",     label: t('blogPreview.stat3Label'), icon: "✓" },
            { value: "10+",     label: t('blogPreview.stat4Label'), icon: "◈" },
          ].map((stat) => (
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
          <p className="bps-quote-text">{t('blogPreview.reviewText')}</p>
          <footer className="bps-quote-footer">
            <StarRating count={5} />
            <cite className="bps-quote-cite">
              James R., {t('blogPreview.reviewOrigin')}
              <span className="bps-quote-platform">
                <svg className="bps-ta-icon" viewBox="0 0 24 24" aria-hidden="true" fill="currentColor" width="14" height="14">
                  <circle cx="12" cy="12" r="10" />
                  <circle cx="12" cy="12" r="4" fill="#fff" />
                </svg>
                TripAdvisor
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
              aria-label={`${t('blog.readArticle')} ${article.title}`}
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
                  <ul className="blog-preview-card__stats" aria-label={t('blogPreview.keyFacts')}>
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
            {t('blogPreview.ctaNudge')}
          </p>
          <Link to="/blog" className="blog-preview__cta">
            {t('blogPreview.ctaBtn')}
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
