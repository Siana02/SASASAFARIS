import React, { useState } from "react";
import { Phone, Mail, MessageCircleHeart, X } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa"; // WhatsApp icon from FontAwesome
import { useLanguage } from "../hooks/useLanguage";

const PHONE_NUMBER = "+254711589004";
const WHATSAPP_NUMBER = "254711589004";
const EMAIL_ADDRESS = "info@sasasafaris.com";

const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}`;
const phoneLink = `tel:${PHONE_NUMBER}`;
const emailLink = `mailto:${EMAIL_ADDRESS}`;

const ContactWidget = () => {
  const [open, setOpen] = useState(false);
  const { t } = useLanguage();

  return (
    <div className={`contact-widget-container${open ? " open" : ""}`}>
      <div className="contact-widget-options" aria-hidden={!open}>
        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="contact-widget-icon whatsapp"
          title={t('contactWidget.whatsapp')}
        >
          <FaWhatsapp size={28} />
        </a>
        <a href={phoneLink} className="contact-widget-icon phone" title={t('contactWidget.phone')}>
          <Phone size={28} />
        </a>
        <a href={emailLink} className="contact-widget-icon email" title={t('contactWidget.email')}>
          <Mail size={28} />
        </a>
      </div>
      <button
        className="contact-widget-toggle"
        title={t('contactWidget.title')}
        aria-label={open ? t('contactWidget.close') : t('contactWidget.title')}
        onClick={() => setOpen(!open)}
      >
        {open ? <X size={30} /> : <MessageCircleHeart size={30} />}
      </button>
    </div>
  );
};

export default ContactWidget;
