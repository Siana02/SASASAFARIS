import React, { useState } from "react";
import { Phone, Mail, Whatsapp, Contact2, X } from "lucide-react"; // Lucide icons

const PHONE_NUMBER = "+254700123456"; // Replace with your number
const WHATSAPP_NUMBER = "254700123456"; // WhatsApp format (no +)
const EMAIL_ADDRESS = "info@sule-safaris.com"; // Replace with your email

const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}`;
const phoneLink = `tel:${PHONE_NUMBER}`;
const emailLink = `mailto:${EMAIL_ADDRESS}`;

const ContactWidget = ({
  phone = PHONE_NUMBER,
  whatsapp = WHATSAPP_NUMBER,
  email = EMAIL_ADDRESS
}) => {
  const [open, setOpen] = useState(false);

  return (
    <div className={`contact-widget-container${open ? " open" : ""}`}>
      {/* Stacked options */}
      <div className="contact-widget-options" aria-hidden={!open}>
        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="contact-widget-icon whatsapp"
          title="Chat on WhatsApp"
        >
          <Whatsapp size={28} />
        </a>
        <a
          href={phoneLink}
          className="contact-widget-icon phone"
          title="Call us"
        >
          <Phone size={28} />
        </a>
        <a
          href={emailLink}
          className="contact-widget-icon email"
          title="Email us"
        >
          <Mail size={28} />
        </a>
      </div>
      {/* Main floating button */}
      <button
        className="contact-widget-toggle"
        title="Contact us"
        aria-label={open ? "Close contact options" : "Contact us"}
        onClick={() => setOpen(!open)}
      >
        {open ? <X size={30} /> : <Contact2 size={30} />}
      </button>
    </div>
  );
};

export default ContactWidget;
