import { FaWhatsapp, FaInstagram, FaTiktok, FaLinkedin } from "react-icons/fa";
import { Phone } from "lucide-react";
import { useLanguage } from "../hooks/useLanguage";

export default function ContactSocials() {
  const { t } = useLanguage();
  
  return (
    <section className="contact-socials">
      <h3>{t('contactSocials.title')}</h3>
      <div className="social-icons-row">
        <a href="https://wa.me/254711589004" target="_blank" rel="noopener noreferrer" title="WhatsApp">
          <FaWhatsapp size={28} />
        </a>
        <a href="tel:+254711589004" title="Call Direct">
          <Phone size={28} />
        </a>
        <a href="https://www.instagram.com/sasa_safaris_africa?igsh=OWFjajg4enVlMjlh" target="_blank" rel="noopener noreferrer" title="Instagram">
          <FaInstagram size={28} />
        </a>
        <a href="https://tiktok.com/@sasasafaris" target="_blank" rel="noopener noreferrer" title="TikTok">
          <FaTiktok size={28} />
        </a>
        <a href="https://linkedin.com/company/sasasafaris" target="_blank" rel="noopener noreferrer" title="LinkedIn">
          <FaLinkedin size={28} />
        </a>
      </div>
    </section>
  );
}
