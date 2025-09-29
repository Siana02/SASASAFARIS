import React, { Suspense } from 'react';
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
import './styles/style.css';

// Lazy load less critical components
const ViewDetails = React.lazy(() => import('./components/ViewDetails'));
const Contact = React.lazy(() => import('./components/Contact'));
const PrivacyPolicy = React.lazy(() => import('./components/PrivacyPolicy'));
const CookiePolicy = React.lazy(() => import('./components/CookiePolicy'));
const TermsOfService = React.lazy(() => import('./components/TermsOfService'));
const Gallery = React.lazy(() => import('./components/Gallery'));

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
      <Suspense fallback={<div style={{ textAlign: 'center', padding: '2rem' }}>Loading...</div>}>
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
        </Routes>
      </Suspense>
      <Footer />
      <ThemeMessage />
      <LanguageBanner />
      <CookiePopup />
    </BrowserRouter>
  );
}

export default App;
