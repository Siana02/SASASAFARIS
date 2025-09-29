import { Headset } from "lucide-react";
import { useLanguage } from "../hooks/useLanguage";

export default function ContactHours() {
  const { t } = useLanguage();
  
  return (
    <section className="contact-hours">
      <div className="contact-hours-icon">
        <Headset size={38} />
      </div>
      <h2>{t('contactHours.title')}</h2>
      <p>
        {t('contactHours.description')}
      </p>
    </section>
  );
}
