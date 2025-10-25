import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import MobileNav from './components/MobileNav';
import HeroSection from './components/HeroSection';
import OfferSection from './components/OfferSection';
import SuccessCountdown from './components/SuccessCountdown';
import PackagesSection from './components/PackagesSection';
import AboutSection from './components/AboutSection';
import ReviewSection from './components/ReviewSection';
import ContactFormSection from "./components/ContactFormSection";
import ContactSocials from "./components/ContactSocials";
import ComingSoon from "./components/ComingSoon";
import HighlightSection from './components/HighlightSection';
import Footer from './components/Footer';
import ThemeMessage from './components/ThemeMessage';
import ContactWidget from './components/ContactWidget';
import CookiePopup from './components/CookiePopup';
import LanguageBanner from './components/LanguageBanner';
import ViewDetails from './components/ViewDetails'; // adjust path if needed
import Contact from "./components/Contact";
import PrivacyPolicy from "./components/PrivacyPolicy";
import CookiePolicy from "./components/CookiePolicy";
import TermsOfService from "./components/TermsOfService";
import Gallery from "./components/Gallery";
import './styles/style.css';

// Main landing page content
function HomePage() {
  return (
    <>
      
      <main>
        <HeroSection />
        <OfferSection />
        <SuccessCountdown />
        <PackagesSection />
        <AboutSection />
        <ReviewSection />
        <ContactFormSection />
        <ContactSocials />
        <ComingSoon />
        <HighlightSection />
      </main>
      
    </>
  );
}

function App() {
  // Add this at the top of your entry file (e.g., App.jsx)
useEffect(() => {
  window.onerror = function(message, source, lineno, colno, error) {
    const div = document.createElement("div");
    div.style.position = "fixed";
    div.style.bottom = "0";
    div.style.left = "0";
    div.style.width = "100%";
    div.style.background = "rgba(0,0,0,0.85)";
    div.style.color = "#fff";
    div.style.fontSize = "13px";
    div.style.lineHeight = "1.4";
    div.style.padding = "8px";
    div.style.zIndex = "99999";
    div.textContent = `Error: ${message} at ${source}:${lineno}:${colno}`;
    document.body.appendChild(div);
  };
}, []);
  
  return (
    <BrowserRouter>
      <Header />
      <MobileNav />
      <ContactWidget />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/viewdetails/:id" element={<ViewDetails />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/cookies" element={<CookiePolicy />} />
        <Route path="/terms" element={<TermsOfService />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/about" element={<AboutSection />} />
        <Route path="/packages" element={<PackagesSection />} />
        <Route path="/offers" element={<OfferSection />} />
        {/* add other routes as needed */}
        {/* add other routes as needed */}
      </Routes>
      <Footer />
      <ThemeMessage />
      <LanguageBanner />
      <CookiePopup />
    </BrowserRouter>
  );
}

export default App;
