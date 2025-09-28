import React, { useEffect } from "react";
import { Link } from "react-router-dom";

export default function PrivacyPolicy() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="privacy-policy-page">
      <div className="privacy-policy-container">
        <h1>Privacy Policy</h1>
        <p className="privacy-policy-intro">
          Your privacy is important to us. This Privacy Policy explains how SASA Safaris collects, uses, protects, and discloses your personal information.
        </p>

        {/* 1. Information We Collect */}
        <section>
          <h2>1. Information We Collect</h2>
          <ul>
            <li>
              <b>Personal Information:</b> Name, email, phone number, address, and other contact details when you make an inquiry, booking, or contact us.
            </li>
            <li>
              <b>Travel Details:</b> Preferences, travel dates, destinations, number of travelers, special requests.
            </li>
            <li>
              <b>Payment Information:</b> Billing details and transaction data (handled securely via third-party payment processors; we do not store credit/debit card numbers).
            </li>
            <li>
              <b>Website Usage Data:</b> Cookies, IP address, browser type, device information, pages visited.
            </li>
            <li>
              <b>Social Media:</b> Information shared via our social channels or integrations.
            </li>
          </ul>
        </section>

        {/* 2. How We Use Your Information */}
        <section>
          <h2>2. How We Use Your Information</h2>
          <ul>
            <li>To respond to your inquiries and provide safari services.</li>
            <li>To personalize your travel experience and improve our offerings.</li>
            <li>To process bookings, payments, and confirmations.</li>
            <li>To communicate important updates, offers, and news.</li>
            <li>To comply with legal requirements and prevent fraud.</li>
          </ul>
        </section>

        {/* 3. Sharing & Disclosure */}
        <section>
          <h2>3. Sharing & Disclosure of Information</h2>
          <ul>
            <li>We do <b>not</b> sell your personal data.</li>
            <li>We may share information with trusted partners (e.g. accommodation providers, payment processors) only as necessary for your safari experience.</li>
            <li>Legal, regulatory, or law enforcement requirements may require disclosure in certain circumstances.</li>
          </ul>
        </section>

        {/* 4. Cookies & Tracking */}
        <section>
          <h2>4. Cookies & Tracking Technologies</h2>
          <p>
            Our website uses cookies and similar technologies for analytics, site functionality, and enhancing your browsing experience. You can adjust your browser settings to reject cookies, but some features may not work as intended.
          </p>
        </section>

        {/* 5. Data Security */}
        <section>
          <h2>5. Data Security</h2>
          <p>
            We implement reasonable security measures to protect your personal information, including encryption and secure third-party services. However, no online transmission is 100% secure.
          </p>
        </section>

        {/* 6. Your Rights & Choices */}
        <section>
          <h2>6. Your Rights & Choices</h2>
          <ul>
            <li>You may request access, correction, or deletion of your personal information at any time.</li>
            <li>You can unsubscribe from marketing communications via provided links or by contacting us.</li>
            <li>Contact us for any privacy-related requests or questions.</li>
          </ul>
        </section>

        {/* 7. Children's Privacy */}
        <section>
          <h2>7. Children's Privacy</h2>
          <p>
            Our services are not intended for children under 18 years of age. We do not knowingly collect personal information from minors.
          </p>
        </section>

        {/* 8. Changes to This Policy */}
        <section>
          <h2>8. Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. We encourage you to review this page periodically for updates.
          </p>
        </section>

        {/* 9. Contact Us */}
        <section>
          <h2>9. Contact Us</h2>
          <p>
            If you have any questions, concerns, or requests regarding this Privacy Policy, please contact us at:<br />
            <b>Email:</b> SASASAFARISAFRICA@gmail.com <br />
            <b>Phone:</b> +254708482145
          </p>
        </section>

        <div className="privacy-policy-home-btn">
          <Link to="/" className="cta-btn">Return to Homepage</Link>
        </div>
      </div>
    </main>
  );
        }
