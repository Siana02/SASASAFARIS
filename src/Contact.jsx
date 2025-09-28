import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ContactHours from "./components/ContactHours";
import ContactFormSection from "./components/ContactFormSection";
import ContactSocials from "./components/ContactSocials";
import ContactLocation from "./components/ContactLocation";

export default function Contact() {
  return (
    <>
      <Header />
      <main className="contact-page">
        <ContactHours />          {/* Only visible on Contact page */}
        <ContactFormSection />
        <ContactSocials />
        <ContactLocation />
      </main>
      <Footer />
    </>
  );
}
