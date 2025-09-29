import { useLanguage } from "../hooks/useLanguage";

export default function ContactLocation() {
  const { t } = useLanguage();
  
  return (
    <section className="contact-location">
      <h3>{t('contactLocation.title')}</h3>
      <p>{t('contactLocation.address')}<br />{t('contactLocation.poBox')}</p>
      <iframe
        src="https://www.google.com/maps?q=Jacaranda,+Watamu,+Kenya&output=embed"
        width="100%" height="220"
        style={{ border: 0, borderRadius: "10px" }}
        allowFullScreen=""
        loading="lazy"
        title="Jacaranda Watamu Map"
      />
    </section>
  );
}
