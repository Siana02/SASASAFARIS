import React, { useState } from "react";
import { Phone, Mail, MessageCircleHeart, X } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa"; // WhatsApp icon from FontAwesome

const PHONE_NUMBER = "+254708482145";
const WHATSAPP_NUMBER = "254708482145";
const EMAIL_ADDRESS = "SASASAFARISAFRICA@gmail.com";

const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}`;
const phoneLink = `tel:${PHONE_NUMBER}`;
const emailLink = `mailto:${EMAIL_ADDRESS}`;

const ContactWidget = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className={`contact-widget-container${open ? " open" : ""}`}>
      <div className="contact-widget-options" aria-hidden={!open}>
        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="contact-widget-icon whatsapp"
          title="Chat on WhatsApp"
        >
          <FaWhatsapp size={28} />
        </a>
        <a href={phoneLink} className="contact-widget-icon phone" title="Call us">
          <Phone size={28} />
        </a>
        <a href={emailLink} className="contact-widget-icon email" title="Email us">
          <Mail size={28} />
        </a>
      </div>
      <button
        className="contact-widget-toggle"
        title="Contact us"
        aria-label={open ? "Close contact options" : "Contact us"}
        onClick={() => setOpen(!open)}
      >
        {open ? <X size={30} /> : <MessageCircleHeart size={30} />}
      </button>
    </div>
  );
};

export default ContactWidget;
