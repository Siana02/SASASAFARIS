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
import HighlightSection from './components/HighlightSection';
import Footer from './components/Footer';
import ThemeMessage from './components/ThemeMessage';
import ContactWidget from './components/ContactWidget';
import ViewDetails from './components/ViewDetails'; // adjust path if needed
import './styles/style.css';

// Main landing page content
function HomePage() {
  return (
    <>
      <Header />
      <MobileNav />
      <main>
        <HeroSection />
        <OfferSection />
        <SuccessCountdown />
        <PackagesSection />
        <AboutSection />
        <ReviewSection />
        <HighlightSection />
      </main>
      <Footer />
      <ThemeMessage />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <ContactWidget /> 
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/viewdetails/:id" element={<ViewDetails />} />
        {/* add other routes as needed */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
