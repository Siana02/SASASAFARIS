import { Info } from "lucide-react";
import React, { useState } from "react";
import { useLanguage } from "../hooks/useLanguage";

export default function ContactFormSection() {
  const [submitted, setSubmitted] = useState(false);
  const { t } = useLanguage();

  return (
    <section className="contact-form-section">
      <div className="contact-info-header">
        
        <h3>{t('contact.title')}</h3>
      </div>
      <div className="contact-info-details">
  <Info size={28} />
      <p>
        {t('contact.description')}
      </p>
      </div>
      <form
        className="safari-inquiry-form"
        action="https://formspree.io/f/meoreded"
        method="POST"
        onSubmit={() => setSubmitted(true)}
      >
        <label>
          {t('contact.emailLabel')}
          <input type="email" name="email" required placeholder="you@example.com" />
        </label>
        <label>
          {t('contact.messageLabel')}
          <textarea
            name="message"
            required
            placeholder={t('contact.messagePlaceholder')}
            rows={5}
          />
        </label>
        <button type="submit">{t('contact.submitButton')}</button>
      </form>
      {submitted && (
        <div className="form-success-popup">
          {t('contact.successMessage')}
        </div>
      )}
    </section>
  );
}