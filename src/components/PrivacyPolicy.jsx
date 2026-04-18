import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Shield, Eye, Lock, Share2, Settings, UserCheck, Baby, RefreshCw, Mail } from "lucide-react";

const sections = [
  {
    icon: <Eye size={22} />,
    title: "Information We Collect",
    content: (
      <ul>
        <li><strong>Personal Information:</strong> Name, email, phone number, address, and other contact details when you make an inquiry, booking, or contact us.</li>
        <li><strong>Travel Details:</strong> Preferences, travel dates, destinations, number of travellers, and special requests.</li>
        <li><strong>Payment Information:</strong> Billing details and transaction data (handled securely via third-party processors — we never store card numbers).</li>
        <li><strong>Website Usage Data:</strong> Cookies, IP address, browser type, device info, and pages visited.</li>
        <li><strong>Social Media:</strong> Information shared via our social channels or integrations.</li>
      </ul>
    ),
  },
  {
    icon: <Settings size={22} />,
    title: "How We Use Your Information",
    content: (
      <ul>
        <li>To respond to your inquiries and provide safari services.</li>
        <li>To personalise your travel experience and improve our offerings.</li>
        <li>To process bookings, payments, and confirmations.</li>
        <li>To communicate important updates and news.</li>
        <li>To comply with legal requirements and prevent fraud.</li>
      </ul>
    ),
  },
  {
    icon: <Share2 size={22} />,
    title: "Sharing & Disclosure",
    content: (
      <ul>
        <li>We do <strong>not</strong> sell your personal data — ever.</li>
        <li>We may share information with trusted partners (accommodation providers, payment processors) only as needed for your safari experience.</li>
        <li>Legal or regulatory requirements may require disclosure in certain circumstances.</li>
      </ul>
    ),
  },
  {
    icon: <Shield size={22} />,
    title: "Cookies & Tracking",
    content: (
      <p>
        Our website uses cookies and similar technologies for analytics, site functionality, and enhancing your experience. You can adjust your browser settings to manage cookies — though some features may be affected. See our <Link to="/cookies">Cookie Policy</Link> for full details.
      </p>
    ),
  },
  {
    icon: <Lock size={22} />,
    title: "Data Security",
    content: (
      <p>
        We implement industry-standard security measures including encryption and secure third-party services to protect your personal information. No online transmission is 100% secure, but we take every precaution we can.
      </p>
    ),
  },
  {
    icon: <UserCheck size={22} />,
    title: "Your Rights & Choices",
    content: (
      <ul>
        <li>You may request access, correction, or deletion of your personal information at any time.</li>
        <li>You can unsubscribe from marketing communications via the link in any email.</li>
        <li>Contact us for any privacy-related requests — we respond within 5 business days.</li>
      </ul>
    ),
  },
  {
    icon: <Baby size={22} />,
    title: "Children's Privacy",
    content: (
      <p>
        Our services are intended for adults. We do not knowingly collect personal information from anyone under 18 years of age. If you believe a minor has submitted information to us, please contact us immediately.
      </p>
    ),
  },
  {
    icon: <RefreshCw size={22} />,
    title: "Changes to This Policy",
    content: (
      <p>
        We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. We'll post any updates on this page with a revised effective date. We encourage you to review it periodically.
      </p>
    ),
  },
  {
    icon: <Mail size={22} />,
    title: "Contact Us",
    content: (
      <p>
        Questions, concerns, or requests? Reach our privacy team at:<br />
        <strong>Email:</strong> info@sasasafaris.com<br />
        <strong>Phone:</strong> +254 711 589 004<br />
        <strong>Address:</strong> Jacaranda, Watamu, Kenya
      </p>
    ),
  },
];

export default function PrivacyPolicy() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Privacy Policy — SASA Safaris Africa";
  }, []);

  return (
    <main className="legal-page">
      {/* Hero */}
      <div className="legal-hero">
        <div className="legal-hero-icon"><Shield size={40} /></div>
        <h1 className="legal-hero-title">Privacy Policy</h1>
        <p className="legal-hero-subtitle">
          Your privacy matters deeply to us. Here's exactly how we collect, use, and protect your information.
        </p>
        <p className="legal-hero-date">Last updated: {new Date().toLocaleDateString("en-GB", { year: "numeric", month: "long", day: "numeric" })}</p>
      </div>

      {/* Content */}
      <div className="legal-content">
        <div className="legal-intro-card">
          <p>
            SASA Safaris Africa is committed to protecting your personal information and your right to privacy. This policy explains what information we collect, why we collect it, and what rights you have in relation to it.
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
          <Link to="/cookies" className="legal-btn-secondary">Cookie Policy</Link>
          <Link to="/terms" className="legal-btn-secondary">Terms of Service</Link>
        </div>
      </div>
    </main>
  );
}
