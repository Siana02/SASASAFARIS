import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Facebook,
  Instagram,
  Twitter,
  Youtube,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import { useLanguage } from "../hooks/useLanguage";

const Footer = () => {
  const { t } = useLanguage();
  
  // useEffect is inside the component; only ONE Footer function
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <footer className="footer">
      <div className="container">
        {/* Main footer content */}
        <div className="footer-content">
          {/* Brand/About section */}
          <div className="footer-section">
            <h3 className="footer-title">{t('footer.brand')}</h3>
            <p className="footer-description">
              {t('footer.description')}
            </p>
            <div className="social-links">
              <a
                href="https://facebook.com/sasasafaris"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://www.instagram.com/sasa_safaris_africa?igsh=OWFjajg4enVlMjlh"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://twitter.com/sasasafaris"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
              >
                <Twitter size={20} />
              </a>
              <a
                href="https://youtube.com/sasasafaris"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
              >
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div className="footer-section">
            <h4 className="footer-heading">{t('footer.quickLinks')}</h4>
            <ul className="footer-links">
              <li>
                <Link to="/">{t('footer.home')}</Link>
              </li>
              <li>
                  <Link to="/gallery" className="footer-link">{t('footer.gallery')}</Link>
                </li>
              <li>
                <Link to="/packages">{t('footer.packages')}</Link>
              </li>
              <li>
                <Link to="/offers">{t('footer.offers')}</Link>
              </li>
              <li>
                <Link to="/about">{t('footer.about')}</Link>
              </li>
              <li>
                <Link to="/contact">{t('footer.contacts')}</Link>
              </li>
            </ul>
          </div>

          {/* Contact info */}
          <div className="footer-section">
            <h4 className="footer-heading">{t('footer.contactInfo')}</h4>
            <div className="contact-info">
              <p>
                <Mail size={16} style={{ marginRight: "8px" }} />{" "}
                info@sasasafaris.com
              </p>
              <p>
                <Phone size={16} style={{ marginRight: "8px" }} /> +254711589004
              </p>
              <p>
                <MapPin size={16} style={{ marginRight: "8px" }} /> Jacaranda, Watamu, Kenya
              </p>
            </div>
          </div>

          {/* Newsletter */}
          <div className="footer-section">
            <h4 className="footer-heading">{t('footer.newsletter')}</h4>
            <p>{t('footer.newsletterDesc')}</p>
            <div className="newsletter-form">
              <input
                type="email"
                placeholder={t('footer.emailPlaceholder')}
                className="email-input"
              />
              <button className="btn btn-primary">{t('footer.subscribe')}</button>
            </div>
          </div>
        </div>

        {/* Footer bottom */}
        <div className="footer-bottom">
  <div className="footer-copyright">
    <p>&copy; {new Date().getFullYear()}</p>
  </div>
</div>
          <div className="footer-legal">
            <Link to="/privacy">{t('footer.privacyPolicy')}</Link>
            <Link to="/terms">{t('footer.termsOfService')}</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
