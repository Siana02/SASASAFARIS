import React, { useEffect } from "react";
import { Link } from "react-router-dom";

export default function CookiePolicy() {
  useEffect(() => {
    document.title = "Cookie Policy - SASA Safaris";
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="privacy-policy-page">
      <div className="privacy-policy-container">
        <h1>Cookie Policy</h1>
        <p className="last-updated">Last updated: {new Date().toLocaleDateString()}</p>

        {/* 1. What Are Cookies */}
        <section>
          <h2>1. What Are Cookies</h2>
          <p>
            Cookies are small text files that are placed on your computer or mobile device when you visit our website. 
            They help us provide you with a better experience by remembering your preferences and understanding how you interact with our site.
          </p>
        </section>

        {/* 2. Types of Cookies We Use */}
        <section>
          <h2>2. Types of Cookies We Use</h2>
          <ul>
            <li>
              <b>Essential Cookies:</b> These are necessary for the website to function properly, including your cookie preferences and language settings.
            </li>
            <li>
              <b>Performance Cookies:</b> These help us understand how visitors interact with our website by collecting anonymous information.
            </li>
            <li>
              <b>Functionality Cookies:</b> These remember your preferences and provide enhanced features like your selected language and theme.
            </li>
          </ul>
        </section>

        {/* 3. How We Use Cookies */}
        <section>
          <h2>3. How We Use Cookies</h2>
          <p>We use cookies to:</p>
          <ul>
            <li>Remember your language preference and theme selection</li>
            <li>Store your cookie consent preferences</li>
            <li>Analyze website usage to improve our services</li>
            <li>Provide personalized content and recommendations</li>
            <li>Ensure website security and prevent fraud</li>
          </ul>
        </section>

        {/* 4. Third-Party Cookies */}
        <section>
          <h2>4. Third-Party Cookies</h2>
          <p>
            We may use third-party services that set their own cookies. These include analytics services that help us 
            understand website performance and user behavior. We do not control these third-party cookies.
          </p>
        </section>

        {/* 5. Managing Cookies */}
        <section>
          <h2>5. Managing Your Cookie Preferences</h2>
          <p>
            You can control and manage cookies in several ways:
          </p>
          <ul>
            <li>Use the cookie consent popup when you first visit our website</li>
            <li>Adjust your browser settings to refuse all cookies or indicate when a cookie is being sent</li>
            <li>Delete cookies that have already been set through your browser settings</li>
          </ul>
          <p>
            <b>Note:</b> Disabling certain cookies may affect the functionality of our website.
          </p>
        </section>

        {/* 6. Data Retention */}
        <section>
          <h2>6. Data Retention</h2>
          <p>
            Cookies are stored for different periods depending on their purpose:
          </p>
          <ul>
            <li><b>Session cookies:</b> Deleted when you close your browser</li>
            <li><b>Persistent cookies:</b> Stored for up to 12 months</li>
            <li><b>Preference cookies:</b> Stored until you change your settings</li>
          </ul>
        </section>

        {/* 7. Updates to This Policy */}
        <section>
          <h2>7. Updates to This Policy</h2>
          <p>
            We may update this Cookie Policy from time to time to reflect changes in our practices or for legal reasons. 
            We will notify you of any significant changes by posting the new policy on this page.
          </p>
        </section>

        {/* 8. Contact Us */}
        <section>
          <h2>8. Contact Us</h2>
          <p>
            If you have any questions about this Cookie Policy, please contact us at:<br />
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