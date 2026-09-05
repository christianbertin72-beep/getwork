import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { CompaniesStrip } from './components/CompaniesStrip';
import { FeaturesSection } from './components/FeaturesSection';
import { HowItWorksSection } from './components/HowItWorksSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { CtaBanner } from './components/CtaBanner';
import { Footer } from './components/Footer';
import { InteractiveModals, ModalState } from './components/InteractiveModals';

export default function App() {
  const [modalState, setModalState] = useState<ModalState>({ type: null });

  const handleOpenAuth = (mode: 'login' | 'signup') => {
    setModalState({ type: 'auth', data: { mode } });
  };

  const handleOpenHire = () => {
    setModalState({ type: 'hire' });
  };

  const handleOpenWork = () => {
    setModalState({ type: 'work' });
  };

  const handleCategoryClick = (category: string) => {
    setModalState({ type: 'category', data: { category } });
  };

  const handleFeatureClick = (featureTitle: string) => {
    setModalState({
      type: 'hire',
      data: { prefill: featureTitle },
    });
  };

  const handleStepClick = (stepNumber: number) => {
    if (stepNumber === 1 || stepNumber === 2) {
      handleOpenHire();
    } else {
      handleOpenWork();
    }
  };

  const handleCloseModal = () => {
    setModalState({ type: null });
  };

  return (
    <div className="min-h-screen bg-[#060709] text-white flex flex-col selection:bg-[#34d77f] selection:text-black font-sans relative overflow-x-hidden">
      {/* Background ambient lighting effects */}
      <div
        className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#34d77f]/[0.03] rounded-full blur-[140px] pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute top-[500px] left-0 w-[500px] h-[500px] bg-[#22c55e]/[0.02] rounded-full blur-[160px] pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute top-[1600px] right-0 w-[600px] h-[600px] bg-[#34d77f]/[0.02] rounded-full blur-[180px] pointer-events-none"
        aria-hidden="true"
      />

      {/* Navigation Bar */}
      <Navbar onOpenAuth={handleOpenAuth} onOpenHire={handleOpenHire} />

      {/* Main Content Sections */}
      <main className="flex-1 flex flex-col">
        {/* 1. Hero Section with 3D Laptop Mockup & Circuit Accents */}
        <Hero
          onHireClick={handleOpenHire}
          onWorkClick={handleOpenWork}
          onCategoryClick={handleCategoryClick}
        />

        {/* 2. Trusted By Forward-Thinking Companies Strip */}
        <CompaniesStrip />

        {/* 3. Powerful Features 4-Card Section */}
        <FeaturesSection onCardClick={handleFeatureClick} />

        {/* 4. How It Works: 4 Simple Steps Horizontal Flow */}
        <HowItWorksSection onStepClick={handleStepClick} />

        {/* 5. Trusted By Thousands: Testimonials Slider */}
        <TestimonialsSection />

        {/* 6. Ready to Get Started? CTA Rocket Banner */}
        <CtaBanner onHireClick={handleOpenHire} onWorkClick={handleOpenWork} />
      </main>

      {/* 7. Complete Footer with Newsletter & Links */}
      <Footer
        onOpenHire={handleOpenHire}
        onOpenWork={handleOpenWork}
        onOpenAuth={handleOpenAuth}
      />

      {/* Interactive Action Modals */}
      <InteractiveModals modalState={modalState} onClose={handleCloseModal} />
    </div>
  );
}
