import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";

const FAQS = [
  {
    id: 1,
    emoji: "🐘",
    question: "Is a safari safe?",
    answer:
      "Yes — and safer than most people expect. You'll always be guided by experienced professionals who understand the environment deeply. Your job is simply to enjoy the experience while we handle the rest.",
  },
  {
    id: 2,
    emoji: "🌍",
    question: "When is the best time to go?",
    answer:
      "There's no single 'perfect' time — just different experiences. The dry season is great for wildlife viewing, while the green season offers fewer crowds and stunning landscapes.",
  },
  {
    id: 3,
    emoji: "💰",
    question: "How much does a safari usually cost?",
    answer:
      "It really depends on your preferences — where you go, how long you stay, and the level of comfort you choose. That's why we tailor everything to fit your budget and style.",
  },
  {
    id: 4,
    emoji: "🎒",
    question: "What should I pack?",
    answer:
      "Think light, neutral, and comfortable. We'll guide you with a full packing list, but essentials include breathable clothing, sunscreen, and a good camera.",
  },
  {
    id: 5,
    emoji: "🧭",
    question: "Do I need to plan everything myself?",
    answer:
      "Not at all. That's where we come in. We design your entire journey based on your preferences — you just tell us what you're looking for.",
  },
  {
    id: 6,
    emoji: "🐾",
    question: "Will I actually see animals?",
    answer:
      "While nature is never guaranteed, our guides know exactly where and when to go. Your chances of seeing incredible wildlife are very high.",
  },
  {
    id: 7,
    emoji: "✈️",
    question: "Can you help with flights and travel logistics?",
    answer:
      "We focus on crafting your safari experience, but we can guide you on flights and coordinate everything to make your journey seamless.",
  },
  {
    id: 8,
    emoji: "❤️",
    question: "Is this suitable for solo travellers or couples?",
    answer:
      "Absolutely. Whether you're travelling solo, as a couple, or in a group, we design the experience to match your vibe.",
  },
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
          <span className="faq-eyebrow">Before You Go…</span>
          <h2 className="faq-title">Your Safari Questions, Answered</h2>
          <p className="faq-subtitle">
            Everything you're quietly wondering — answered honestly, so you can plan with confidence.
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
          <p className="faq-cta-label">Still have questions?</p>
          <Link to="/contact" className="faq-cta-btn">
            Let's plan your safari together
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
