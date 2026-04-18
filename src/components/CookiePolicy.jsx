import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Cookie, Info, BarChart2, Sliders, Users2, Trash2, RefreshCw, Mail } from "lucide-react";

const sections = [
  {
    icon: <Info size={22} />,
    title: "What Are Cookies?",
    content: (
      <p>
        Cookies are small text files placed on your device when you visit a website. They help us recognise your browser, remember your preferences, and understand how you interact with our site — so we can continuously improve your experience.
      </p>
    ),
  },
  {
    icon: <Cookie size={22} />,
    title: "Types of Cookies We Use",
    content: (
      <div className="legal-cookie-types">
        <div className="legal-cookie-type">
          <h3>Essential Cookies</h3>
          <p>Necessary for the website to function. They enable core features like your language and cookie preferences. These cannot be disabled.</p>
        </div>
        <div className="legal-cookie-type">
          <h3>Performance Cookies</h3>
          <p>Help us understand how visitors use our site by collecting anonymous usage data. This helps us improve layout and content.</p>
        </div>
        <div className="legal-cookie-type">
          <h3>Functionality Cookies</h3>
          <p>Remember your preferences — like your chosen language and theme — so you don't need to set them again on each visit.</p>
        </div>
      </div>
    ),
  },
  {
    icon: <BarChart2 size={22} />,
    title: "How We Use Cookies",
    content: (
      <ul>
        <li>Remember your language and theme preference between visits.</li>
        <li>Store your cookie consent preferences so we don't ask every time.</li>
        <li>Analyse how visitors navigate the site to improve usability.</li>
        <li>Provide relevant content and personalised recommendations.</li>
        <li>Maintain website security and help prevent fraudulent activity.</li>
      </ul>
    ),
  },
  {
    icon: <Users2 size={22} />,
    title: "Third-Party Cookies",
    content: (
      <p>
        Some features of our website rely on third-party services (such as analytics tools) that may set their own cookies. We don't control these cookies directly. By using our website, you acknowledge that these third-party cookies may be set on your device in accordance with their own privacy policies.
      </p>
    ),
  },
  {
    icon: <Sliders size={22} />,
    title: "Managing Your Cookie Preferences",
    content: (
      <>
        <p>You have several ways to manage cookies:</p>
        <ul>
          <li>Use the <strong>consent banner</strong> when you first visit our website to choose your preferences.</li>
          <li>Adjust your <strong>browser settings</strong> to block or delete cookies at any time.</li>
          <li>Use your browser's privacy/incognito mode to avoid persistent cookies.</li>
        </ul>
        <p className="legal-note">
          <strong>Note:</strong> Disabling certain cookies may affect how some parts of our website work.
        </p>
      </>
    ),
  },
  {
    icon: <Trash2 size={22} />,
    title: "Data Retention",
    content: (
      <div className="legal-retention-grid">
        <div className="legal-retention-item">
          <span className="legal-retention-type">Session Cookies</span>
          <span className="legal-retention-period">Deleted when you close your browser</span>
        </div>
        <div className="legal-retention-item">
          <span className="legal-retention-type">Persistent Cookies</span>
          <span className="legal-retention-period">Stored for up to 12 months</span>
        </div>
        <div className="legal-retention-item">
          <span className="legal-retention-type">Preference Cookies</span>
          <span className="legal-retention-period">Until you change your settings</span>
        </div>
      </div>
    ),
  },
  {
    icon: <RefreshCw size={22} />,
    title: "Updates to This Policy",
    content: (
      <p>
        We may update this Cookie Policy from time to time to reflect changes in our practices or for legal and regulatory reasons. Any changes will be posted on this page with a revised effective date. We recommend checking periodically.
      </p>
    ),
  },
  {
    icon: <Mail size={22} />,
    title: "Questions?",
    content: (
      <p>
        If you have questions about how we use cookies, get in touch:<br />
        <strong>Email:</strong> info@sasasafaris.com<br />
        <strong>Phone:</strong> +254 711 589 004
      </p>
    ),
  },
];

export default function CookiePolicy() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Cookie Policy — SASA Safaris Africa";
  }, []);

  return (
    <main className="legal-page">
      {/* Hero */}
      <div className="legal-hero">
        <div className="legal-hero-icon"><Cookie size={40} /></div>
        <h1 className="legal-hero-title">Cookie Policy</h1>
        <p className="legal-hero-subtitle">
          We use cookies to give you the best possible experience. Here's a plain-English explanation of exactly how.
        </p>
        <p className="legal-hero-date">Last updated: {new Date().toLocaleDateString("en-GB", { year: "numeric", month: "long", day: "numeric" })}</p>
      </div>

      {/* Content */}
      <div className="legal-content">
        <div className="legal-intro-card">
          <p>
            This Cookie Policy explains how SASA Safaris Africa uses cookies and similar tracking technologies on our website. It also outlines your rights and choices regarding cookies.
          </p>
        </div>

        <div className="legal-sections">
          {sections.map((s, i) => (
            <section key={i} className="legal-section">
              <div className="legal-section-header">
                <div className="legal-section-icon">{s.icon}</div>
                <h2 className="legal-section-title">{s.title}</h2>
              </div>
              <div className="legal-section-body">{s.content}</div>
            </section>
          ))}
        </div>

        <div className="legal-footer-ctas">
          <Link to="/" className="legal-btn-primary">Back to Home</Link>
          <Link to="/privacy" className="legal-btn-secondary">Privacy Policy</Link>
          <Link to="/terms" className="legal-btn-secondary">Terms of Service</Link>
        </div>
      </div>
    </main>
  );
}