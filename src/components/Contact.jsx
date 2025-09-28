import React, { useEffect } from "react";
import ContactHours from "./ContactHours";
import ContactFormSection from "./ContactFormSection";
import ContactSocials from "./ContactSocials";
import ContactLocation from "./ContactLocation";

export default function Contact() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="contact-page">
      <ContactHours />          {/* Only visible on Contact page */}
      <ContactFormSection />
      <ContactSocials />
      <ContactLocation />
    </main>
  );
}
