import React, { useState } from "react";
import { Link } from "react-router-dom";
import { blogArticles, featuredArticle } from "../data/BlogData";
import LazyImage from "./LazyImage";

// ── Individual full-article view ────────────────────────────────────────────
const ArticleView = ({ article, onBack }) => (
  <article className="blog-article-full">
    <div className="blog-article-full__hero">
      <LazyImage
        src={article.image}
        alt={article.imageAlt}
        className="blog-article-full__img"
      />
      <div className="blog-article-full__overlay" />
      <div className="blog-article-full__hero-text">
        <span className="blog-tag">{article.tag}</span>
        <h1 className="blog-article-full__title">{article.title}</h1>
        <time className="blog-card-date">{article.date}</time>
      </div>
    </div>

    <div className="blog-article-full__body">
      <button className="blog-back-btn" onClick={onBack} aria-label="Back to blog">
        <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <polyline points="15 18 9 12 15 6" />
        </svg>
        Back to Blog
      </button>

      <p className="blog-article-full__intro">{article.content.intro}</p>

      {article.content.sections.map((section, i) => (
        <div className="blog-article-full__section" key={i}>
          <h2 className="blog-article-full__section-heading">{section.heading}</h2>
          <p className="blog-article-full__section-body">{section.body}</p>
        </div>
      ))}

      <p className="blog-article-full__conclusion">{article.content.conclusion}</p>

      <div className="blog-article-full__cta">
        <Link to="/contact" className="dest-cta">
          Plan Your Safari
          <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <line x1="5" y1="12" x2="19" y2="12" />
            <polyline points="12 5 19 12 12 19" />
          </svg>
        </Link>
      </div>
    </div>
  </article>
);

// ── Article card ─────────────────────────────────────────────────────────────
const ArticleCard = ({ article, featured, onClick }) => (
  <article
    className={`blog-card${featured ? " blog-card--featured" : ""}`}
    onClick={() => onClick(article)}
    role="button"
    tabIndex={0}
    onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && onClick(article)}
    aria-label={`Read: ${article.title}`}
  >
    <div className="blog-card__img-wrap">
      <LazyImage
        src={article.image}
        alt={article.imageAlt}
        className="blog-card__img"
      />
      <div className="blog-card__overlay">
        <span className="blog-card__read-cta">Read Article →</span>
      </div>
      <span className="blog-tag blog-card__tag">{article.tag}</span>
    </div>
    <div className="blog-card__body">
      <time className="blog-card-date">{article.date}</time>
      <h3 className="blog-card__title">{article.title}</h3>
      <p className="blog-card__excerpt">{article.excerpt}</p>
    </div>
  </article>
);

// ── Newsletter CTA ────────────────────────────────────────────────────────────
const BlogNewsletter = () => {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setSent(true);
    }
  };

  return (
    <section className="blog-newsletter">
      <div className="blog-newsletter__inner">
        <span className="blog-newsletter__eyebrow">Stay Inspired</span>
        <h2 className="blog-newsletter__title">Safari Stories, Delivered</h2>
        <p className="blog-newsletter__desc">
          Get the best travel articles, hidden gem guides, and safari planning tips straight to your inbox.
        </p>
        {sent ? (
          <p className="blog-newsletter__success">
            ✓ You're in. Watch this space.
          </p>
        ) : (
          <form className="blog-newsletter__form" onSubmit={handleSubmit}>
            <input
              type="email"
              className="blog-newsletter__input"
              placeholder="Your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              aria-label="Email address"
            />
            <button type="submit" className="blog-newsletter__btn">
              Subscribe
            </button>
          </form>
        )}
      </div>
    </section>
  );
};

// ── Main BlogPage ─────────────────────────────────────────────────────────────
const BlogPage = () => {
  const [activeArticle, setActiveArticle] = useState(null);

  if (activeArticle) {
    return (
      <div className="blog-page">
        <ArticleView
          article={activeArticle}
          onBack={() => setActiveArticle(null)}
        />
      </div>
    );
  }

  return (
    <div className="blog-page">
      {/* ── Hero ── */}
      <section className="blog-hero">
        <div className="blog-hero__overlay" />
        <div className="blog-hero__content">
          <span className="blog-hero__eyebrow">Stories & Inspiration</span>
          <h1 className="blog-hero__title">The Sasa Safaris Journal</h1>
          <p className="blog-hero__desc">
            Travel stories, destination guides, cultural deep-dives, and everything you need to plan the journey of a lifetime.
          </p>
          <div className="blog-hero__ornament">
            <span className="blog-hero__orn-line" />
            <span className="blog-hero__orn-diamond" />
            <span className="blog-hero__orn-line" />
          </div>
        </div>
      </section>

      {/* ── Featured Article ── */}
      <section className="blog-featured-wrap">
        <div className="blog-featured-label">
          <span className="blog-section-eyebrow">Featured Read</span>
        </div>
        <ArticleCard
          article={featuredArticle}
          featured
          onClick={setActiveArticle}
        />
      </section>

      {/* ── Articles Grid ── */}
      <section className="blog-grid-section">
        <div className="blog-section-header">
          <span className="blog-section-eyebrow">All Articles</span>
          <h2 className="blog-section-title">More from the Journal</h2>
        </div>
        <div className="blog-grid">
          {blogArticles.map((article) => (
            <ArticleCard
              key={article.id}
              article={article}
              onClick={setActiveArticle}
            />
          ))}
        </div>
      </section>

      {/* ── Newsletter / CTA ── */}
      <BlogNewsletter />
    </div>
  );
};

export default BlogPage;
