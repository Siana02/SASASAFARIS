import React from "react";
import { useLanguage } from "../hooks/useLanguage";
import { useNavigate } from "react-router-dom";

const EcoReminderSection = () => {
  const { t } = useLanguage();
  const navigate = useNavigate();

  const pledges = [
    { icon: "fa-solid fa-water",         key: "pledge.ocean"   },
    { icon: "fa-solid fa-fish",          key: "pledge.marine"  },
    { icon: "fa-solid fa-trash-can",     key: "pledge.cleanup" },
    { icon: "fa-solid fa-hand-holding-heart", key: "pledge.donate" },
    { icon: "fa-solid fa-shoe-prints",   key: "pledge.footprint" },
    { icon: "fa-solid fa-leaf",          key: "pledge.wildlife" },
  ];

  return (
    <section className="eco-reminder-section" aria-label={t('ecoReminder.ariaLabel')}>
      <div className="eco-reminder-inner">
        <p className="eco-reminder-eyebrow">{t('ecoReminder.eyebrow')}</p>
        <h2 className="eco-reminder-title">{t('ecoReminder.title')}</h2>
        <p className="eco-reminder-lead">{t('ecoReminder.lead')}</p>

        <ul className="eco-pledge-list" aria-label={t('ecoReminder.pledgeListLabel')}>
          {pledges.map(({ icon, key }) => (
            <li key={key} className="eco-pledge-item">
              <span className="eco-pledge-icon" aria-hidden="true">
                <i className={icon}></i>
              </span>
              <span className="eco-pledge-text">{t(key)}</span>
            </li>
          ))}
        </ul>

        <p className="eco-reminder-close">{t('ecoReminder.close')}</p>

        <button
          className="eco-cta-btn"
          onClick={() => navigate("/contact")}
          aria-label={t('ecoReminder.ctaAriaLabel')}
        >
          {t('ecoReminder.cta')}
        </button>
      </div>
    </section>
  );
};

export default EcoReminderSection;
