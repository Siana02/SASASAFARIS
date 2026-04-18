import React, { useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { getBlogArticles } from "../data/BlogData";
import LazyImage from "./LazyImage";
import { useLanguage } from "../hooks/useLanguage";
import { setPageMeta, injectSchema } from "../utils/seo";

// ── Key-facts strip ──────────────────────────────────────────────────────────
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

// ── Pull quote ────────────────────────────────────────────────────────────────
const ArticlePullQuote = ({ pullQuote }) => {
  if (!pullQuote) return null;
  return (
    <blockquote className="blog-article-pullquote">
      <p className="blog-article-pullquote__text">{pullQuote.text}</p>
      <cite className="blog-article-pullquote__source">— {pullQuote.source}</cite>
    </blockquote>
  );
};

// ── Main component ────────────────────────────────────────────────────────────
const BlogArticlePage = () => {
  const { slug } = useParams();
  const { t, currentLanguage } = useLanguage();
  const navigate = useNavigate();

  const articles = getBlogArticles(currentLanguage);
  const article = articles.find((a) => a.id === slug);

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  // SEO: page title, meta description, and BlogPosting schema
  useEffect(() => {
    if (!article) return;

    setPageMeta(
      `${article.title} | Sasa Safaris Africa`,
      article.excerpt,
      `https://www.sasasafaris.com/blog/${article.id}`
    );

    const cleanup = injectSchema(`schema-blog-${article.id}`, {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      "headline": article.title,
      "description": article.excerpt,
      "image": `https://www.sasasafaris.com${article.image}`,
      "datePublished": article.date,
      "dateModified": article.date,
      "author": {
        "@type": "Person",
        "name": "Sule",
        "jobTitle": "Head Guide & Founder",
        "worksFor": {
          "@type": "Organization",
          "name": "Sasa Safaris Africa",
          "url": "https://www.sasasafaris.com/"
        }
      },
      "publisher": {
        "@type": "Organization",
        "name": "Sasa Safaris Africa",
        "url": "https://www.sasasafaris.com/",
        "logo": {
          "@type": "ImageObject",
          "url": "https://www.sasasafaris.com/logo192.png"
        }
      },
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": `https://www.sasasafaris.com/blog/${article.id}`
      },
      "keywords": "African safaris, Kenya safari, tailor-made safaris, Kenya travel"
    });

    return () => {
      cleanup();
      // Restore homepage title when navigating away
      document.title = "Sasa Safaris Africa — Tailor-Made African Safaris | Kenya";
    };
  }, [article]);

  if (!article) {
    return (
      <div className="blog-page" style={{ minHeight: "60vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "1rem" }}>
        <h1 style={{ fontFamily: "var(--heading-font)" }}>Article not found</h1>
        <Link to="/blog" className="dest-cta">Back to Blog</Link>
      </div>
    );
  }

  return (
    <div className="blog-page">
      <article className="blog-article-full">
        {/* Hero image */}
        <div className="blog-article-full__hero">
          <LazyImage
            src={article.image}
            alt={article.imageAlt}
            className="blog-article-full__img"
            eager
          />
          <div className="blog-article-full__overlay" />
          <div className="blog-article-full__hero-text">
            <span className="blog-tag">{article.tag}</span>
            <h1 className="blog-article-full__title">{article.title}</h1>
            <div className="blog-article-full__meta">
              <time className="blog-card-date" dateTime={article.date}>{article.date}</time>
              {article.readTime && (
                <span className="blog-article-full__read-time">{article.readTime}</span>
              )}
            </div>
          </div>
        </div>

        {/* Body */}
        <div className="blog-article-full__body">
          <Link to="/blog" className="blog-back-btn" aria-label="Back to blog">
            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <polyline points="15 18 9 12 15 6" />
            </svg>
            {t('blog.backToBlog')}
          </Link>

          <ArticleStats stats={article.stats} />

          <p className="blog-article-full__intro">{article.content.intro}</p>

          <ArticlePullQuote pullQuote={article.pullQuote} />

          {article.content.sections.map((section, i) => (
            <div className="blog-article-full__section" key={i}>
              <h2 className="blog-article-full__section-heading">{section.heading}</h2>
              <p className="blog-article-full__section-body">{section.body}</p>
            </div>
          ))}

          <p className="blog-article-full__conclusion">{article.content.conclusion}</p>

          {/* Internal links to related articles */}
          <div className="blog-article-full__related">
            <h2 className="blog-article-full__section-heading">{t('blog.allArticlesTitle')}</h2>
            <ul style={{ listStyle: "none", padding: 0, display: "flex", flexWrap: "wrap", gap: "0.75rem" }}>
              {getBlogArticles("en")
                .filter((a) => a.id !== article.id)
                .map((a) => (
                  <li key={a.id}>
                    <Link to={`/blog/${a.id}`} className="blog-back-btn" style={{ display: "inline-flex" }}>
                      {a.title}
                    </Link>
                  </li>
                ))}
            </ul>
          </div>

          {/* CTA */}
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
    </div>
  );
};

export default BlogArticlePage;
