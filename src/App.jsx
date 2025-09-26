// TODO: Migrate main App structure from existing HTML layout
// TODO: Add routing if the original website had multiple pages
// TODO: Integrate existing JavaScript functionality and state management

import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import PackagesSection from './components/PackagesSection';
import OfferSection from './components/OfferSection';
import AboutSection from './components/AboutSection';
import Footer from './components/Footer';
import './styles/style.css';

function App() {
  return (
    <div className="App">
      {/* TODO: Migrate overall app structure and layout from existing HTML */}
      
      {/* Header navigation - migrate from existing header HTML */}
      <Header />
      
      {/* Main content sections - migrate from existing page sections */}
      <main>
        <HeroSection />
        <PackagesSection />
        <OfferSection />
        <AboutSection />
      </main>
      
      {/* Footer - migrate from existing footer HTML */}
      <Footer />
    </div>
  );
}

export default App;
