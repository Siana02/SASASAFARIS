import React from 'react';

// TODO: Migrate Footer HTML structure from existing HTML file
// TODO: Migrate Footer CSS styles from existing CSS file
// TODO: Migrate Footer JavaScript functionality (social media links, newsletter signup) from existing JS file

const Footer = () => {
  return (
    <footer className="footer">
      {/* Placeholder footer content - replace with migrated HTML */}
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3 className="footer-title">SASA Safaris</h3>
            <p className="footer-description">
              Your premier destination for authentic African safari experiences.
              Creating memories that last a lifetime.
            </p>
            <div className="social-links">
              {/* TODO: Add actual social media links */}
              <a href="https://facebook.com/sasasafaris" className="social-link">Facebook</a>
              <a href="https://instagram.com/sasasafaris" className="social-link">Instagram</a>
              <a href="https://twitter.com/sasasafaris" className="social-link">Twitter</a>
              <a href="https://youtube.com/sasasafaris" className="social-link">YouTube</a>
            </div>
          </div>
          
          <div className="footer-section">
            <h4 className="footer-heading">Quick Links</h4>
            <ul className="footer-links">
              <li><a href="#home">Home</a></li>
              <li><a href="#packages">Packages</a></li>
              <li><a href="#offers">Special Offers</a></li>
              <li><a href="#about">About Us</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4 className="footer-heading">Contact Info</h4>
            <div className="contact-info">
              <p>📧 info@sasasafaris.com</p>
              <p>📞 +1 (555) 123-4567</p>
              <p>📍 Safari Street, Adventure City</p>
            </div>
          </div>
          
          <div className="footer-section">
            <h4 className="footer-heading">Newsletter</h4>
            <p>Subscribe to get updates on new packages and offers</p>
            <div className="newsletter-form">
              {/* TODO: Add newsletter signup functionality */}
              <input type="email" placeholder="Enter your email" className="email-input" />
              <button className="btn btn-primary">Subscribe</button>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <div className="footer-copyright">
            <p>&copy; 2024 SASA Safaris. All rights reserved.</p>
          </div>
          <div className="footer-legal">
            <a href="#privacy">Privacy Policy</a>
            <a href="#terms">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;