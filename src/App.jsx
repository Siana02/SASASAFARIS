import React from 'react';
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
import ViewDetails from './components/ViewDetails'; // adjust path if needed
import Contact from "./components/Contact";
import PrivacyPolicy from "./components/PrivacyPolicy";
import TermsOfService from "./components/TermsOfService";
import Gallery from "./pages/Gallery";
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
    </BrowserRouter>
  );
}

export default App;
