import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "../hooks/useLanguage";

const getFAQs = (t) => [
  { id: 1, emoji: "🐘", question: t('faq.q1'), answer: t('faq.a1') },
  { id: 2, emoji: "🌍", question: t('faq.q2'), answer: t('faq.a2') },
  { id: 3, emoji: "💰", question: t('faq.q3'), answer: t('faq.a3') },
  { id: 4, emoji: "🎒", question: t('faq.q4'), answer: t('faq.a4') },
  { id: 5, emoji: "🧭", question: t('faq.q5'), answer: t('faq.a5') },
  { id: 6, emoji: "🐾", question: t('faq.q6'), answer: t('faq.a6') },
  { id: 7, emoji: "✈️", question: t('faq.q7'), answer: t('faq.a7') },
  { id: 8, emoji: "❤️", question: t('faq.q8'), answer: t('faq.a8') },
  { id: 9, emoji: "🌐", question: t('faq.q9'), answer: t('faq.a9') },
];

/* Animated accordion panel */
const AccordionItem = ({ item, isOpen, onToggle }) => {
  const bodyRef = useRef(null);

  /* Animate height */
  useEffect(() => {
    const el = bodyRef.current;
    if (!el) return;
    if (isOpen) {
      el.style.maxHeight = el.scrollHeight + "px";
    } else {
      el.style.maxHeight = "0px";
    }
  }, [isOpen]);

  return (
    <div className={`faq-item${isOpen ? " faq-item--open" : ""}`}>
      <button
        className="faq-question"
        aria-expanded={isOpen}
        onClick={onToggle}
      >
        <span className="faq-question__left">
          <span className="faq-emoji" aria-hidden="true">{item.emoji}</span>
          <span className="faq-question__text">{item.question}</span>
        </span>
        <span className="faq-chevron" aria-hidden="true">
          <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </span>
      </button>
      <div className="faq-answer-wrap" ref={bodyRef} aria-hidden={!isOpen}>
        <p className="faq-answer">{item.answer}</p>
      </div>
    </div>
  );
};

const FAQSection = () => {
  const { t } = useLanguage();
  const FAQS = getFAQs(t);
  const [openId, setOpenId] = useState(null);
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  /* Section entrance animation */
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          io.disconnect();
        }
      },
      { threshold: 0.08 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const toggle = (id) => setOpenId((prev) => (prev === id ? null : id));

  return (
    <section className={`faq-section${visible ? " faq-section--visible" : ""}`} id="faq" ref={sectionRef}>
      {/* Decorative top ornament */}
      <div className="faq-ornament" aria-hidden="true">
        <span className="faq-orn-line" />
        <span className="faq-orn-paw">🐾</span>
        <span className="faq-orn-line" />
      </div>

      <div className="faq-inner">
        {/* Header */}
        <div className="faq-header">
          <span className="faq-eyebrow">{t('faq.eyebrow')}</span>
          <h2 className="faq-title">{t('faq.title')}</h2>
          <p className="faq-subtitle">
            {t('faq.subtitle')}
          </p>
        </div>

        {/* Accordion */}
        <div className="faq-list" role="list">
          {FAQS.map((item) => (
            <AccordionItem
              key={item.id}
              item={item}
              isOpen={openId === item.id}
              onToggle={() => toggle(item.id)}
            />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="faq-cta-wrap">
          <p className="faq-cta-label">{t('faq.ctaLabel')}</p>
          <Link to="/contact" className="faq-cta-btn">
            {t('faq.ctaBtn')}
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

export default FAQSection;
