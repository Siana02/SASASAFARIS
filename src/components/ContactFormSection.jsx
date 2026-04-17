import { Info } from "lucide-react";
import React, { useState, useEffect } from "react";
import { useLanguage } from "../hooks/useLanguage";
import { destinationOptions } from "../data/destinationsData";

export default function ContactFormSection() {
  const [submitted, setSubmitted] = useState(false);
  const [selectedExcursion, setSelectedExcursion] = useState("");
  const { t } = useLanguage();

  // Auto-select excursion from URL query param (?excursion=<id>)
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const excursion = params.get("excursion");
    if (excursion) {
      const match = destinationOptions.find((d) => d.id === excursion);
      if (match) setSelectedExcursion(match.id);
    }
  }, []);

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
          Your name
          <input type="text" name="name" required placeholder="Your full name" />
        </label>
        <label>
          {t('contact.emailLabel')}
          <input type="email" name="email" required placeholder="you@example.com" />
        </label>
        <label>
          Excursion / Safari of interest
          <select
            name="excursion"
            value={selectedExcursion}
            onChange={(e) => setSelectedExcursion(e.target.value)}
            className="safari-inquiry-select"
          >
            <option value="">— Select an excursion (optional) —</option>
            {destinationOptions.map((d) => (
              <option key={d.id} value={d.id}>
                {d.label}
              </option>
            ))}
          </select>
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