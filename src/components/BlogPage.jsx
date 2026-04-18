import React, { useState } from "react";
import { Link } from "react-router-dom";
import { blogArticles, featuredArticle } from "../data/BlogData";
import LazyImage from "./LazyImage";
import { useLanguage } from "../hooks/useLanguage";

const PRESS_QUOTES = [
  {
    text: "Kenya's Maasai Mara remains the benchmark against which all other wildlife experiences are measured.",
    source: "Condé Nast Traveller",
    year: "2025",
  },
  {
    text: "A first safari in Kenya is one of those rare travel experiences that reorders your entire perspective on the natural world.",
    source: "National Geographic Traveler",
    year: "2025",
  },
  {
    text: "Watamu is one of the most unspoiled stretches of Kenya's coast — a destination that genuinely surprises first-time visitors.",
    source: "Lonely Planet East Africa",
    year: "2024",
  },
];

const TRIPADVISOR_REVIEWS = [
  {
    text: "I booked through Sasa Safaris for the first time and it exceeded every expectation. The guides were extraordinary — knowledgeable, passionate, and brilliant at finding wildlife. Saw lions, cheetah, elephant, and a leopard in two days.",
    author: "Catherine W.",
    origin: "Australia",
    rating: 5,
    trip: "Maasai Mara Safari",
  },
  {
    text: "From the moment we landed, everything was taken care of. The itinerary was perfectly balanced — not rushed, not boring. The Watamu mangrove canoe was a highlight I still talk about months later.",
    author: "Marco B.",
    origin: "Italy",
    rating: 5,
    trip: "Coastal & Safari Combo",
  },
];

// ── Star Rating ───────────────────────────────────────────────────────────────
const StarRating = ({ count }) => (
  <span className="bps-star-row" aria-label={`${count} stars`}>
    {Array.from({ length: count }).map((_, i) => (
      <span key={i} className="bps-star">★</span>
    ))}
  </span>
);

// ── Article Key Facts Strip ──────────────────────────────────────────────────
const ArticleStats = ({ stats }) => {
  if (!stats || stats.length === 0) return null;
  return (
    <div className="blog-article-stats">
      {stats.map((s) => (
        <div key={s.label} className="blog-article-stat">
          <strong className="blog-article-stat__value">{s.value}</strong>
          <span className="blog-article-stat__label">{s.label}</span>
        </div>
      ))}
    </div>
  );
};

// ── Pull Quote ────────────────────────────────────────────────────────────────
const ArticlePullQuote = ({ pullQuote }) => {
  if (!pullQuote) return null;
  return (
    <blockquote className="blog-article-pullquote">
      <p className="blog-article-pullquote__text">{pullQuote.text}</p>
      <cite className="blog-article-pullquote__source">— {pullQuote.source}</cite>
    </blockquote>
  );
};

// ── Individual full-article view ────────────────────────────────────────────
const ArticleView = ({ article, onBack }) => {
  const { t } = useLanguage();
  return (
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
        <div className="blog-article-full__meta">
          <time className="blog-card-date">{article.date}</time>
          {article.readTime && (
            <span className="blog-article-full__read-time">{article.readTime}</span>
          )}
        </div>
      </div>
    </div>

    <div className="blog-article-full__body">
      <button className="blog-back-btn" onClick={onBack} aria-label="Back to blog">
        <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <polyline points="15 18 9 12 15 6" />
        </svg>
        {t('blog.backToBlog')}
      </button>

      {/* Key stats callout */}
      <ArticleStats stats={article.stats} />

      <p className="blog-article-full__intro">{article.content.intro}</p>

      {/* Pull quote after intro */}
      <ArticlePullQuote pullQuote={article.pullQuote} />

      {article.content.sections.map((section, i) => (
        <div className="blog-article-full__section" key={i}>
          <h2 className="blog-article-full__section-heading">{section.heading}</h2>
          <p className="blog-article-full__section-body">{section.body}</p>
        </div>
      ))}

      <p className="blog-article-full__conclusion">{article.content.conclusion}</p>

      <div className="blog-article-full__cta">
        <Link to="/contact" className="dest-cta">
          {t('blog.planSafari')}
          <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <line x1="5" y1="12" x2="19" y2="12" />
            <polyline points="12 5 19 12 12 19" />
          </svg>
        </Link>
      </div>
    </div>
  </article>
  );
};

// ── Article card ─────────────────────────────────────────────────────────────
const ArticleCard = ({ article, featured, onClick }) => {
  const { t } = useLanguage();
  return (
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
        <span className="blog-card__read-cta">{t('blog.readArticle')}</span>
      </div>
      <span className="blog-tag blog-card__tag">{article.tag}</span>
      {article.readTime && (
        <span className="blog-card__read-time">{article.readTime}</span>
      )}
    </div>
    <div className="blog-card__body">
      <time className="blog-card-date">{article.date}</time>
      <h3 className="blog-card__title">{article.title}</h3>
      <p className="blog-card__excerpt">{article.excerpt}</p>
      {article.stats && (
        <ul className="blog-card__stats" aria-label="Key facts">
          {article.stats.slice(0, 2).map((s) => (
            <li key={s.label} className="blog-card__stat">
              <strong>{s.value}</strong>
              <span>{s.label}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  </article>
  );
};

// ── TripAdvisor Reviews Strip ─────────────────────────────────────────────────
const TripAdvisorStrip = () => {
  const { t } = useLanguage();
  return (
  <section className="blog-ta-strip" aria-label="TripAdvisor reviews">
    <div className="blog-ta-strip__inner">
      <div className="blog-ta-strip__header">
        <svg className="blog-ta-strip__icon" viewBox="0 0 24 24" fill="currentColor" width="22" height="22" aria-hidden="true">
          <circle cx="12" cy="12" r="10" />
          <circle cx="12" cy="12" r="4.5" fill="#fff" />
        </svg>
        <span className="blog-ta-strip__label">{t('blog.taStripLabel')}</span>
        <span className="blog-ta-strip__rating">★ 4.9 / 5</span>
      </div>
      <div className="blog-ta-strip__reviews">
        {TRIPADVISOR_REVIEWS.map((r) => (
          <blockquote key={r.author} className="blog-ta-review">
            <StarRating count={r.rating} />
            <p className="blog-ta-review__text">"{r.text}"</p>
            <footer className="blog-ta-review__footer">
              <strong className="blog-ta-review__author">{r.author}</strong>
              <span className="blog-ta-review__meta">{r.origin} · {r.trip}</span>
            </footer>
          </blockquote>
        ))}
      </div>
    </div>
  </section>
  );
};

// ── Press Quote Banner ────────────────────────────────────────────────────────
const PressQuoteBanner = ({ quoteIndex = 0 }) => {
  const q = PRESS_QUOTES[quoteIndex];
  return (
    <div className="blog-press-quote">
      <span className="blog-press-quote__mark" aria-hidden="true">"</span>
      <p className="blog-press-quote__text">{q.text}</p>
      <cite className="blog-press-quote__source">— {q.source}, {q.year}</cite>
    </div>
  );
};

// ── Newsletter CTA ────────────────────────────────────────────────────────────
const BlogNewsletter = () => {
  const { t } = useLanguage();
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
        <span className="blog-newsletter__eyebrow">{t('blog.newsletterEyebrow')}</span>
        <h2 className="blog-newsletter__title">{t('blog.newsletterTitle')}</h2>
        <p className="blog-newsletter__desc">
          {t('blog.newsletterDesc')}
        </p>
        {sent ? (
          <p className="blog-newsletter__success">
            {t('blog.newsletterSuccess')}
          </p>
        ) : (
          <form className="blog-newsletter__form" onSubmit={handleSubmit}>
            <input
              type="email"
              className="blog-newsletter__input"
              placeholder={t('blog.emailPlaceholder')}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              aria-label="Email address"
            />
            <button type="submit" className="blog-newsletter__btn">
              {t('blog.subscribe')}
            </button>
          </form>
        )}
      </div>
    </section>
  );
};

// ── Main BlogPage ─────────────────────────────────────────────────────────────
const BlogPage = () => {
  const { t } = useLanguage();
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
          <span className="blog-hero__eyebrow">{t('blog.heroEyebrow')}</span>
          <h1 className="blog-hero__title">{t('blog.heroTitle')}</h1>
          <p className="blog-hero__desc">
            {t('blog.heroDesc')}
          </p>
          <div className="blog-hero__ornament">
            <span className="blog-hero__orn-line" />
            <span className="blog-hero__orn-diamond" />
            <span className="blog-hero__orn-line" />
          </div>
        </div>
      </section>

      {/* ── Hero Stats Strip ── */}
      <div className="blog-hero-stats">
        <div className="blog-hero-stats__inner">
          <div className="blog-hero-stats__item">
            <strong>4.9 ★</strong><span>{t('blog.stat1Label')}</span>
          </div>
          <div className="blog-hero-stats__divider" aria-hidden="true" />
          <div className="blog-hero-stats__item">
            <strong>500+</strong><span>{t('blog.stat2Label')}</span>
          </div>
          <div className="blog-hero-stats__divider" aria-hidden="true" />
          <div className="blog-hero-stats__item">
            <strong>1.5M+</strong><span>{t('blog.stat3Label')}</span>
          </div>
          <div className="blog-hero-stats__divider" aria-hidden="true" />
          <div className="blog-hero-stats__item">
            <strong>98%</strong><span>{t('blog.stat4Label')}</span>
          </div>
        </div>
      </div>

      {/* ── Press Quote ── */}
      <div className="blog-press-wrap">
        <PressQuoteBanner quoteIndex={0} />
      </div>

      {/* ── Featured Article ── */}
      <section className="blog-featured-wrap">
        <div className="blog-featured-label">
          <span className="blog-section-eyebrow">{t('blog.featuredRead')}</span>
        </div>
        <ArticleCard
          article={featuredArticle}
          featured
          onClick={setActiveArticle}
        />
      </section>

      {/* ── TripAdvisor Reviews ── */}
      <TripAdvisorStrip />

      {/* ── Articles Grid ── */}
      <section className="blog-grid-section">
        <div className="blog-section-header">
          <span className="blog-section-eyebrow">{t('blog.allArticlesEyebrow')}</span>
          <h2 className="blog-section-title">{t('blog.allArticlesTitle')}</h2>
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
