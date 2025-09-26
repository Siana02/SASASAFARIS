import React from 'react';
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
import './styles/style.css';

function App() {
  return (
    <div className="App">
      {/* Header navigation */}
      <Header />
      
      {/* Mobile Navigation */}
      <MobileNav />
      
      {/* Main content sections */}
      <main>
        <HeroSection />
        <OfferSection />
        <SuccessCountdown />
        <PackagesSection />
        <AboutSection />
        <HighlightSection />
      </main>
      
      {/* Footer */}
      <Footer />
      
      {/* Theme switching message */}
      <ThemeMessage />
    </div>
  );
}

export default App;
