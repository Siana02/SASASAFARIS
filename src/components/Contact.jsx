import React from "react";
import Header from "./Header";
import MobileNav from "./MobileNav";
import Footer from "./Footer";
import ContactHours from "./ContactHours";
import ContactFormSection from "./ContactFormSection";
import ContactSocials from "./ContactSocials";
import ContactLocation from "./ContactLocation";

export default function Contact() {
  return (
    <>
      <Header />
      <MobileNav />
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
