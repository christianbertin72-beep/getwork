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
    <div className="min-h-screen bg-[#080808] text-white flex flex-col selection:bg-[#0099ff]/25 selection:text-white font-sans relative overflow-x-hidden">
      {/* Subtle atmospheric ambient glow */}
      <div
        className="absolute top-0 right-0 w-[550px] h-[550px] bg-violet-600/[0.025] rounded-full blur-[150px] pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute top-[800px] left-0 w-[500px] h-[500px] bg-blue-600/[0.02] rounded-full blur-[160px] pointer-events-none"
        aria-hidden="true"
      />

      {/* Navigation Bar */}
      <Navbar onOpenAuth={handleOpenAuth} onOpenHire={handleOpenHire} />

      {/* Main Content Sections */}
      <main className="flex-1 flex flex-col">
        {/* 1. Hero Section */}
        <Hero
          onHireClick={handleOpenHire}
          onWorkClick={handleOpenWork}
          onCategoryClick={handleCategoryClick}
        />

        {/* 2. Trusted By Forward-Thinking Companies Strip */}
        <CompaniesStrip />

        {/* 3. Features Section with Signature Atmospheric Spotlight Card */}
        <FeaturesSection onCardClick={handleFeatureClick} />

        {/* 4. How It Works: 4 Steps Horizontal Flow */}
        <HowItWorksSection onStepClick={handleStepClick} />

        {/* 5. Client Stories / Testimonials */}
        <TestimonialsSection />

        {/* 6. Atmospheric CTA Banner */}
        <CtaBanner onHireClick={handleOpenHire} onWorkClick={handleOpenWork} />
      </main>

      {/* 7. Footer */}
      <Footer />

      {/* Interactive Modals */}
      <InteractiveModals modalState={modalState} onClose={handleCloseModal} />
    </div>
  );
}
