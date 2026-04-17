import React from "react";
import { Link } from "react-router-dom";
import { previewArticles } from "../data/BlogData";
import LazyImage from "./LazyImage";

const BlogPreviewSection = () => (
  <section className="blog-preview-section" id="blog">
    <div className="blog-preview__inner">
      {/* Header */}
      <div className="blog-preview__header">
        <span className="blog-section-eyebrow">Stories & Inspiration</span>
        <h2 className="blog-preview__title">From the Sasa Safaris Journal</h2>
        <p className="blog-preview__subtitle">
          Safari guides, cultural deep-dives, and travel stories to inspire your next adventure.
        </p>
      </div>

      {/* Cards */}
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
            </div>
            <div className="blog-preview-card__body">
              <time className="blog-card-date">{article.date}</time>
              <h3 className="blog-preview-card__title">{article.title}</h3>
              <p className="blog-preview-card__excerpt">{article.excerpt}</p>
            </div>
          </Link>
        ))}
      </div>

      {/* CTA */}
      <div className="blog-preview__cta-wrap">
        <Link to="/blog" className="blog-preview__cta">
          View All Articles
          <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <line x1="5" y1="12" x2="19" y2="12" />
            <polyline points="12 5 19 12 12 19" />
          </svg>
        </Link>
      </div>
    </div>
  </section>
);

export default BlogPreviewSection;
