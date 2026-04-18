import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  CreditCard, XCircle, Edit3, UmbrellaIcon, Syringe, FileText,
  Bird, MessageSquare, AlertTriangle, HelpCircle, Shield, RefreshCw,
} from "lucide-react";

const sections = [
  {
    id: "booking",
    icon: <CreditCard size={20} />,
    title: "Booking & Payment",
    content: (
      <ul>
        <li>All bookings must be confirmed in writing (email or booking form).</li>
        <li>A <strong>deposit of at least 30%</strong> is required to secure your booking; the balance is due prior to safari commencement or as agreed in writing.</li>
        <li>Payments are accepted via secure online transfer, credit/debit card, or as specified on your invoice.</li>
        <li>All prices are quoted in USD unless otherwise stated and may be subject to change due to currency fluctuations or government taxes.</li>
      </ul>
    ),
  },
  {
    id: "cancellations",
    icon: <XCircle size={20} />,
    title: "Cancellations & Refunds",
    content: (
      <>
        <p>All cancellations must be submitted in writing. The following charges apply:</p>
        <div className="legal-cancellation-table">
          <div className="legal-canc-row header">
            <span>Notice Period</span>
            <span>Charge</span>
          </div>
          <div className="legal-canc-row">
            <span>More than 60 days before safari</span>
            <span className="legal-canc-good">Full refund minus bank fees</span>
          </div>
          <div className="legal-canc-row">
            <span>30 – 59 days before</span>
            <span className="legal-canc-warn">20% of total cost retained</span>
          </div>
          <div className="legal-canc-row">
            <span>15 – 29 days before</span>
            <span className="legal-canc-warn">50% of total cost retained</span>
          </div>
          <div className="legal-canc-row">
            <span>Less than 15 days / No show</span>
            <span className="legal-canc-bad">100% of total cost retained</span>
          </div>
        </div>
        <p>Refunds will be processed within 21 business days of the cancellation date.</p>
      </>
    ),
  },
  {
    id: "changes",
    icon: <Edit3 size={20} />,
    title: "Changes & Alterations",
    content: (
      <ul>
        <li>SASA Safaris reserves the right to alter itineraries or substitute accommodations due to circumstances beyond our control (e.g., weather, safety, availability).</li>
        <li>Any significant changes will be communicated promptly, and alternatives provided where possible.</li>
        <li>Client-initiated changes may incur additional costs.</li>
      </ul>
    ),
  },
  {
    id: "insurance",
    icon: <UmbrellaIcon size={20} />,
    title: "Travel Insurance",
    content: (
      <ul>
        <li>Comprehensive travel insurance is <strong>mandatory</strong> for all clients, covering medical emergencies, cancellation, theft, and personal liability.</li>
        <li>SASA Safaris is not liable for any losses not covered by your insurance policy.</li>
      </ul>
    ),
  },
  {
    id: "health",
    icon: <Syringe size={20} />,
    title: "Health, Safety & Vaccinations",
    content: (
      <ul>
        <li>Clients are responsible for ensuring all necessary vaccinations and health precautions are in place prior to travel.</li>
        <li>SASA Safaris adheres to strict safety standards and partners only with reputable, licensed suppliers.</li>
        <li>Any medical condition must be disclosed at booking — we will do our utmost to accommodate special needs.</li>
      </ul>
    ),
  },
  {
    id: "documents",
    icon: <FileText size={20} />,
    title: "Passports, Visas & Documentation",
    content: (
      <ul>
        <li>Clients are solely responsible for obtaining valid passports, visas, and travel permits.</li>
        <li>SASA Safaris will provide guidance but bears no responsibility if a client is denied entry due to insufficient documentation.</li>
      </ul>
    ),
  },
  {
    id: "wildlife",
    icon: <Bird size={20} />,
    title: "Wildlife & Environment",
    content: (
      <ul>
        <li>Wildlife sightings are never guaranteed — they depend entirely on nature and cannot be predicted.</li>
        <li>Clients must follow our guides' instructions at all times for their safety and the protection of wildlife.</li>
        <li>SASA Safaris promotes responsible tourism. Clients are expected to respect all local environments, wildlife, and cultures.</li>
      </ul>
    ),
  },
  {
    id: "requests",
    icon: <MessageSquare size={20} />,
    title: "Special Requests",
    content: (
      <ul>
        <li>All special requests (dietary, mobility, etc.) must be submitted in writing at the time of booking.</li>
        <li>While we strive to accommodate every request, they cannot be guaranteed and may incur additional charges.</li>
      </ul>
    ),
  },
  {
    id: "liability",
    icon: <AlertTriangle size={20} />,
    title: "Liability & Force Majeure",
    content: (
      <ul>
        <li>SASA Safaris is not responsible for any loss, injury, accident, delay, or expense resulting from circumstances beyond our control — including but not limited to war, terrorism, natural disaster, or government actions.</li>
        <li>Our liability is limited to the value of the safari booked.</li>
      </ul>
    ),
  },
  {
    id: "complaints",
    icon: <HelpCircle size={20} />,
    title: "Complaints & Disputes",
    content: (
      <ul>
        <li>Complaints must be reported immediately to SASA Safaris so we can address them on the spot.</li>
        <li>If unresolved during your trip, complaints must be submitted in writing within <strong>14 days</strong> after your safari.</li>
        <li>All disputes are subject to the laws and jurisdiction of Kenya.</li>
      </ul>
    ),
  },
  {
    id: "privacy",
    icon: <Shield size={20} />,
    title: "Privacy & Cookies",
    content: (
      <p>
        Your personal information is handled in accordance with our{" "}
        <Link to="/privacy">Privacy Policy</Link>. Information about cookies and tracking technologies is available in our{" "}
        <Link to="/cookies">Cookie Policy</Link>.
      </p>
    ),
  },
  {
    id: "updates",
    icon: <RefreshCw size={20} />,
    title: "Updates to These Terms",
    content: (
      <p>
        SASA Safaris reserves the right to update these terms and conditions at any time. We recommend reviewing this page periodically. Continued use of our services constitutes acceptance of any revised terms.
      </p>
    ),
  },
];

export default function TermsOfService() {
  const [activeSection, setActiveSection] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Terms & Conditions — SASA Safaris Africa";
  }, []);

  return (
    <main className="legal-page">
      {/* Hero */}
      <div className="legal-hero">
        <div className="legal-hero-icon"><FileText size={40} /></div>
        <h1 className="legal-hero-title">Terms &amp; Conditions</h1>
        <p className="legal-hero-subtitle">
          Please read carefully before booking. By using our services, you agree to be bound by these terms.
        </p>
        <p className="legal-hero-date">Last updated: {new Date().toLocaleDateString("en-GB", { year: "numeric", month: "long", day: "numeric" })}</p>
      </div>

      {/* Layout: sidebar TOC + content on desktop */}
      <div className="legal-layout">
        {/* Table of Contents */}
        <aside className="legal-toc">
          <p className="legal-toc-title">Contents</p>
          <ol className="legal-toc-list">
            {sections.map((s, i) => (
              <li key={s.id}>
                <a
                  href={`#${s.id}`}
                  className={activeSection === s.id ? "active" : ""}
                  onClick={() => setActiveSection(s.id)}
                >
                  {s.title}
                </a>
              </li>
            ))}
          </ol>
        </aside>

        {/* Main Content */}
        <div className="legal-content legal-content--terms">
          <div className="legal-intro-card">
            <p>
              These Terms &amp; Conditions govern your use of SASA Safaris Africa's website and services. By making a booking or using our website, you confirm that you have read, understood, and agree to these terms in full.
            </p>
          </div>

          <div className="legal-sections">
            {sections.map((s, i) => (
              <section key={s.id} id={s.id} className="legal-section">
                <div className="legal-section-header">
                  <div className="legal-section-icon">{s.icon}</div>
                  <h2 className="legal-section-title">{i + 1}. {s.title}</h2>
                </div>
                <div className="legal-section-body">{s.content}</div>
              </section>
            ))}
          </div>

          {/* Contact */}
          <div className="legal-contact-card">
            <h3>Need Help?</h3>
            <p>
              For any questions about these terms, contact us at{" "}
              <a href="mailto:info@sasasafaris.com">info@sasasafaris.com</a> or call{" "}
              <a href="tel:+254711589004">+254 711 589 004</a>.
            </p>
          </div>

          <div className="legal-footer-ctas">
            <Link to="/" className="legal-btn-primary">Back to Home</Link>
            <Link to="/privacy" className="legal-btn-secondary">Privacy Policy</Link>
            <Link to="/cookies" className="legal-btn-secondary">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </main>
  );
}
