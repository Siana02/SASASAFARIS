import React, { useRef, useEffect } from "react";
import { useLanguage } from "../hooks/useLanguage";
import { useNavigate } from "react-router-dom";

const FISH = [
  { dur: "22s", delay: "0s",    top: "12%",  size: "1.0rem" },
  { dur: "30s", delay: "-10s",  top: "72%",  size: "0.85rem" },
  { dur: "18s", delay: "-5s",   top: "38%",  size: "1.3rem" },
  { dur: "26s", delay: "-18s",  top: "88%",  size: "0.75rem" },
  { dur: "20s", delay: "-7s",   top: "22%",  size: "1.1rem" },
  { dur: "35s", delay: "-13s",  top: "58%",  size: "0.95rem" },
  { dur: "24s", delay: "-3s",   top: "80%",  size: "1.2rem" },
  { dur: "28s", delay: "-22s",  top: "47%",  size: "0.8rem" },
];

const EcoReminderSection = () => {
  const { t } = useLanguage();
  const navigate = useNavigate();
  const sectionRef = useRef(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("is-visible");
          observer.disconnect();
        }
      },
      { threshold: 0.12 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const pledges = [
    { icon: "fa-solid fa-earth-africa",       key: "pledge.earth"     },
    { icon: "fa-solid fa-fish",               key: "pledge.marine"    },
    { icon: "fa-solid fa-trash-can",          key: "pledge.cleanup"   },
    { icon: "fa-solid fa-hand-holding-heart", key: "pledge.donate"    },
    { icon: "fa-solid fa-shoe-prints",        key: "pledge.footprint" },
    { icon: "fa-solid fa-leaf",               key: "pledge.wildlife"  },
  ];

  return (
    <section
      ref={sectionRef}
      className="eco-reminder-section"
      aria-label={t("ecoReminder.ariaLabel")}
    >
      <div className="eco-fish-bg" aria-hidden="true">
        {FISH.map((f, i) => (
          <span
            key={i}
            className="eco-fish"
            style={{
              "--fish-dur":   f.dur,
              "--fish-delay": f.delay,
              "--fish-top":   f.top,
              "--fish-size":  f.size,
            }}
          >
            <i className="fa-solid fa-fish"></i>
          </span>
        ))}
      </div>

      <div className="eco-reminder-inner">
        <p className="eco-reminder-eyebrow">{t("ecoReminder.eyebrow")}</p>
        <h2 className="eco-reminder-title">{t("ecoReminder.title")}</h2>
        <p className="eco-reminder-lead">{t("ecoReminder.lead")}</p>

        <ul className="eco-pledge-list" aria-label={t("ecoReminder.pledgeListLabel")}>
          {pledges.map(({ icon, key }, idx) => (
            <li
              key={key}
              className="eco-pledge-item"
              style={{ "--stagger": idx }}
            >
              <span className="eco-pledge-icon" aria-hidden="true">
                <i className={icon}></i>
              </span>
              <span className="eco-pledge-text">{t(key)}</span>
            </li>
          ))}
        </ul>

        <p className="eco-reminder-close">{t("ecoReminder.close")}</p>

        <button
          className="eco-cta-btn"
          onClick={() => navigate("/contact")}
          aria-label={t("ecoReminder.ctaAriaLabel")}
        >
          {t("ecoReminder.cta")}
        </button>
      </div>
    </section>
  );
};

export default EcoReminderSection;
