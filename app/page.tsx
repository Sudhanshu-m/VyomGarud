import React from 'react';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection'; // <-- Ensure this is imported
import CapabilitiesSection from '../components/CapabilitiesSection';
import HighlightsSection from '../components/HighlightsSection';
import FooterSection from '../components/FooterSection'; 

const LandingPage: React.FC = () => {
  return (
    <main>
      <HeroSection />
      <AboutSection />        {/* <-- And used here */}
      <CapabilitiesSection />
      <HighlightsSection /> 
      <FooterSection />
    </main>
  );
};

export default LandingPage;