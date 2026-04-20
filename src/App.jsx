import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PreloadScreen from './components/PreloadScreen';
import SiteBg from './components/SiteBg';
import Header from './components/Header';
import MobileNav from './components/MobileNav';
import HeroSection from './components/HeroSection';

import SuccessCountdown from './components/SuccessCountdown';
import AboutSection from './components/AboutSection';
import ReviewSection from './components/ReviewSection';
import HomepageContactCTA from "./components/HomepageContactCTA";
import ComingSoon from "./components/ComingSoon";
import HighlightSection from './components/HighlightSection';
import HowWeWork from './components/HowWeWork';
import WhyChooseUs from './components/WhyChooseUs';
import Footer from './components/Footer';
import ContactWidget from './components/ContactWidget';
import CookiePopup from './components/CookiePopup';
import Contact from "./components/Contact";
import PrivacyPolicy from "./components/PrivacyPolicy";
import CookiePolicy from "./components/CookiePolicy";
import TermsOfService from "./components/TermsOfService";
import Gallery from "./components/Gallery";
import DestinationsSection from "./components/DestinationsSection";
import DestinationsPage from "./components/DestinationsPage";
import GalleryStripSection from "./components/GalleryStripSection";
import BlogPreviewSection from "./components/BlogPreviewSection";
import FAQSection from "./components/FAQSection";
import BlogPage from "./components/BlogPage";
import BlogArticlePage from "./components/BlogArticlePage";
import { MobileNavProvider } from './contexts/MobileNavContext';
import ScrollToTop from './components/ScrollToTop';
import { LanguageProvider } from './contexts/LanguageContext';
import LanguageBanner from './components/LanguageBanner';
import { setPageMeta } from './utils/seo';
import './styles/style.css';

// Collect every image URL exported from assets/images so the preload screen
// can fetch them all while it is displayed.
import * as assetImages from './assets/images';
const ALL_IMAGE_SRCS = Object.values(assetImages).filter(
  (v) => typeof v === 'string'
);

// Main landing page content
function HomePage() {
  useEffect(() => {
    setPageMeta(
      'Tailor-Made African Safaris | Sasa Safaris Africa',
      'Discover custom-made safaris and luxury African safari experiences in Kenya — Maasai Mara, Amboseli, Tsavo East, Watamu coast and beyond. Expert private safari planning from Watamu.',
      'https://www.sasasafaris.com/'
    );
  }, []);

  return (
    <>
      
      <main>
        <HeroSection />
        <HowWeWork />
        <WhyChooseUs />
        <DestinationsSection />
        <GalleryStripSection />
        <BlogPreviewSection />
        <FAQSection />
        <ReviewSection />
        <HomepageContactCTA />
        <ComingSoon />
        <HighlightSection />
      </main>
      
    </>
  );
}

function App() {
  const [preloadDone, setPreloadDone] = useState(false);

  return (
    <>
      <SiteBg />
      {!preloadDone && <PreloadScreen onComplete={() => setPreloadDone(true)} images={ALL_IMAGE_SRCS} />}
    <BrowserRouter>
      <LanguageProvider>
      <MobileNavProvider>
      <ScrollToTop />
      <Header />
      <MobileNav />
      <ContactWidget />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/destinations/:id" element={<DestinationsPage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/cookies" element={<CookiePolicy />} />
        <Route path="/terms" element={<TermsOfService />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/blog/:slug" element={<BlogArticlePage />} />
        <Route path="/about" element={<AboutSection />} />
        {/* add other routes as needed */}
        {/* add other routes as needed */}
      </Routes>
      <Footer />
      <LanguageBanner />
      <CookiePopup preloadDone={preloadDone} />
      </MobileNavProvider>
      </LanguageProvider>
    </BrowserRouter>
    </>
  );
}

export default App;
