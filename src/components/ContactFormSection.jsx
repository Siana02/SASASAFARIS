import { Info } from "lucide-react";
import React, { useState } from "react";

export default function ContactFormSection() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section className="contact-form-section">
      <div className="contact-info-header">
        <Info size={32} />
        <h3>Book Your Safari Experience!</h3>
      </div>
      <p>
        Let us know where you’d love to tour in Kenya, your budget, travel dates, number of travelers, preferred activities, or any special requests. The more details you provide, the better we can customize your safari experience!
      </p>
      <form
        className="safari-inquiry-form"
        action="https://formspree.io/f/meoreded"
        method="POST"
        onSubmit={() => setSubmitted(true)}
      >
        <label>
          Your email
          <input type="email" name="email" required placeholder="you@example.com" />
        </label>
        <label>
          Your message or safari preferences
          <textarea
            name="message"
            required
            placeholder="Where in Kenya would you like to tour? What's your budget, preferred dates, number of travelers, special interests, etc.?"
            rows={5}
          />
        </label>
        <button type="submit">Send Inquiry</button>
      </form>
      {submitted && (
        <div className="form-success-popup">
          Our team is reviewing your message and will reach out in 10-30 minutes!
        </div>
      )}
    </section>
  );
}
