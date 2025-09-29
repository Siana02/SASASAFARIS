import React, { useEffect } from "react";
import { Link } from "react-router-dom";

export default function TermsOfService() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="terms-page">
      <div className="terms-container">
        <h1>Terms &amp; Conditions</h1>
        <p className="terms-intro">
          Please read these terms and conditions carefully before booking or engaging with SASA Safaris. By accessing our website and using our services, you agree to be bound by these terms.
        </p>

        {/* 1. Booking & Payment */}
        <section>
          <h2>1. Booking and Payment</h2>
          <ul>
            <li>All bookings must be confirmed in writing (email or booking form).</li>
            <li>A deposit of at least 30% is required to secure your booking; the balance is due prior to safari commencement or as agreed.</li>
            <li>Payments are accepted via secure online transfer, credit/debit card, or as specified on the invoice.</li>
            <li>All prices are quoted in USD unless otherwise stated and may be subject to change due to currency fluctuations or government taxes.</li>
          </ul>
        </section>

        {/* 2. Cancellations & Refunds */}
        <section>
          <h2>2. Cancellations and Refunds</h2>
          <ul>
            <li>All cancellations must be made in writing.</li>
            <li>Cancellation charges apply as follows:
              <ul>
                <li>More than 60 days before safari: Full refund minus bank fees.</li>
                <li>30-59 days: 20% of total cost retained.</li>
                <li>15-29 days: 50% of total cost retained.</li>
                <li>Less than 15 days: 100% of total cost retained.</li>
              </ul>
            </li>
            <li>No refunds for unused services or "no shows".</li>
            <li>Refunds will be processed within 21 business days.</li>
          </ul>
        </section>

        {/* 3. Changes & Alterations */}
        <section>
          <h2>3. Changes & Alterations</h2>
          <ul>
            <li>SASA Safaris reserves the right to alter itineraries or substitute accommodations and services if necessary due to circumstances beyond our control (e.g., weather, safety, availability).</li>
            <li>Any significant changes will be communicated and alternatives provided where possible.</li>
            <li>Client-initiated changes may incur additional costs.</li>
          </ul>
        </section>

        {/* 4. Travel Insurance */}
        <section>
          <h2>4. Travel Insurance</h2>
          <ul>
            <li>Comprehensive travel insurance is mandatory for all clients (covering medical, cancellation, theft, and personal liability).</li>
            <li>SASA Safaris is not liable for any losses not covered by your insurance policy.</li>
          </ul>
        </section>

        {/* 5. Health, Safety & Vaccinations */}
        <section>
          <h2>5. Health, Safety & Vaccinations</h2>
          <ul>
            <li>Clients are responsible for ensuring all necessary vaccinations and health precautions are taken prior to travel.</li>
            <li>SASA Safaris adheres to strict safety standards and partners only with reputable suppliers.</li>
            <li>Any medical condition must be disclosed at booking; we will do our best to accommodate special needs.</li>
          </ul>
        </section>

        {/* 6. Passports, Visas & Documentation */}
        <section>
          <h2>6. Passports, Visas & Documentation</h2>
          <ul>
            <li>Clients are solely responsible for obtaining valid passports, visas, and travel permits.</li>
            <li>SASA Safaris will provide guidance but is not responsible for clients denied entry due to insufficient documentation.</li>
          </ul>
        </section>

        {/* 7. Wildlife & Environment */}
        <section>
          <h2>7. Wildlife Encounters & Environment</h2>
          <ul>
            <li>Wildlife viewing is not guaranteed; sightings depend on nature and cannot be predicted.</li>
            <li>Clients must follow guides' instructions at all times for safety and conservation.</li>
            <li>SASA Safaris promotes responsible tourism and expects clients to respect local environments and cultures.</li>
          </ul>
        </section>

        {/* 8. Special Requests */}
        <section>
          <h2>8. Special Requests</h2>
          <ul>
            <li>All special requests (dietary, mobility, etc.) must be made in writing at the time of booking.</li>
            <li>While we strive to meet requests, they are not guaranteed and may incur extra charges.</li>
          </ul>
        </section>

        {/* 9. Liability & Force Majeure */}
        <section>
          <h2>9. Liability & Force Majeure</h2>
          <ul>
            <li>SASA Safaris is not responsible for any loss, injury, accident, delay, or expense resulting from circumstances beyond our control, including but not limited to war, terrorism, natural disaster, or government actions.</li>
            <li>Our liability is limited to the value of the safari booked.</li>
          </ul>
        </section>

        {/* 10. Complaints & Disputes */}
        <section>
          <h2>10. Complaints & Disputes</h2>
          <ul>
            <li>Any complaints must be reported immediately to SASA Safaris so that we can attempt to resolve them on the spot.</li>
            <li>If unresolved, complaints must be submitted in writing within 14 days after your safari.</li>
            <li>All disputes are subject to the laws and jurisdiction of Kenya.</li>
          </ul>
        </section>

        {/* 11. Privacy Policy Reference */}
        <section>
          <h2>11. Privacy Policy</h2>
          <p>
            Your personal information is handled according to our <Link to="/privacy">Privacy Policy</Link>.
            Information about cookies and tracking technologies can be found in our <Link to="/cookies">Cookie Policy</Link>.
          </p>
        </section>

        {/* 12. Updates to Terms */}
        <section>
          <h2>12. Updates to Terms</h2>
          <p>
            SASA Safaris reserves the right to update these terms and conditions at any time. Please review periodically for changes.
          </p>
        </section>

        {/* Contact & Return Button */}
        <section>
          <h2>Contact & Assistance</h2>
          <p>
            For any questions, please contact us at <b>SASASAFARISAFRICA@gmail.com</b> or <b>+254708482145</b>.
          </p>
          <div className="terms-home-btn">
            <Link to="/" className="cta-btn">Return to Homepage</Link>
          </div>
        </section>
      </div>
    </main>
  );
              }
