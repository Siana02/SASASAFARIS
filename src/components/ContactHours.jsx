import { Headset } from "lucide-react";

export default function ContactHours() {
  return (
    <section className="contact-hours">
      <div className="contact-hours-icon">
        <Headset size={38} />
      </div>
      <h2>24/7 Customer Service</h2>
      <p>
        Our team is available <b>24/7</b> to answer any queries you may have.<br />
        You may contact us through the options below.<br />
        Typical response time: <b>10–30 minutes</b> depending on traffic.
      </p>
    </section>
  );
}
