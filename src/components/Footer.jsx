import React from "react";
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

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        {/* Main footer content */}
        <div className="footer-content">
          {/* Brand/About section */}
          <div className="footer-section">
            <h3 className="footer-title">SASA Safaris</h3>
            <p className="footer-description">
              Your premier destination for authentic African safari experiences.
              Creating memories that last a lifetime.
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
            <h4 className="footer-heading">Quick Links</h4>
            <ul className="footer-links">
              
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#packages">Packages</a>
              </li>
              <li>
                <a href="#offers">Special Offers</a>
              </li>
              <li>
                <a href="#about">About Us</a>
              </li>
              <li>
  <Link to="/contact">Contacts</Link>
</li>
            </ul>
          </div>

          {/* Contact info */}
          <div className="footer-section">
            <h4 className="footer-heading">Contact Info</h4>
            <div className="contact-info">
              <p>
                <Mail size={16} style={{ marginRight: "8px" }} />{" "}
                info@sasasafaris.com
              </p>
              <p>
                <Phone size={16} style={{ marginRight: "8px" }} /> +1 (555)
                123-4567
              </p>
              <p>
                <MapPin size={16} style={{ marginRight: "8px" }} /> Safari
                Street, Adventure City
              </p>
            </div>
          </div>

          {/* Newsletter */}
          <div className="footer-section">
            <h4 className="footer-heading">Newsletter</h4>
            <p>Subscribe to get updates on new packages and offers</p>
            <div className="newsletter-form">
              <input
                type="email"
                placeholder="Enter your email"
                className="email-input"
              />
              <button className="btn btn-primary">Subscribe</button>
            </div>
          </div>
        </div>

        {/* Footer bottom */}
        <div className="footer-bottom">
          <div className="footer-copyright">
            <p>&copy; 2024 SASA Safaris. All rights reserved.</p>
          </div>
          <div className="footer-legal">
            <Link to="/privacy">Privacy Policy</Link>
<Link to="/terms">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
