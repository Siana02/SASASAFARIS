import React, { useEffect } from "react";
import ContactHours from "./ContactHours";
import ContactFormSection from "./ContactFormSection";
import ContactSocials from "./ContactSocials";
import ContactLocation from "./ContactLocation";
import { useLanguage } from "../hooks/useLanguage";
import { setPageMeta } from "../utils/seo";

export default function Contact() {
  const { t } = useLanguage();

  useEffect(() => {
    window.scrollTo(0, 0);
    setPageMeta(
      'Contact Us — Plan Your African Safari | Sasa Safaris Africa',
      'Get in touch with Sasa Safaris Africa to plan your tailor-made Kenya safari. Our team responds within 10–30 minutes. Watamu, Kenya — available 24/7.',
      'https://www.sasasafaris.com/contact'
    );
  }, []);

  return (
    <main className="contact-page">
      {/* Hero banner */}
      <section className="contact-page-hero">
        <div className="contact-page-hero__ornament" aria-hidden="true">
          <span className="contact-page-hero__orn-line" />
          <span className="contact-page-hero__orn-icon">✦</span>
          <span className="contact-page-hero__orn-line" />
        </div>
        <span className="contact-page-hero__eyebrow">{t('contactPageHero.eyebrow')}</span>
        <h1 className="contact-page-hero__headline">{t('contactPageHero.headline')}</h1>
        <p className="contact-page-hero__subheadline">{t('contactPageHero.subheadline')}</p>
      </section>

      <div className="contact-page-grid">
        <ContactFormSection />
        <ContactHours />
        <ContactSocials />
        <ContactLocation />
      </div>
    </main>
  );
}
