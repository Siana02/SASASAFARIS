import ContactHours from "./ContactHours";
import ContactFormSection from "./ContactFormSection";
import ContactSocials from "./ContactSocials";
import ContactLocation from "./ContactLocation";

export default function Contact() {
  return (
    <div className="contact-page">
      <ContactHours />    {/* Only on contact page! */}
      <ContactFormSection />
      <ContactSocials />
      <ContactLocation />
    </div>
  );
}
