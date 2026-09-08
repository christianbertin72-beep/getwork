import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { CompaniesStrip } from './components/CompaniesStrip';
import { FeaturesSection } from './components/FeaturesSection';
import { HowItWorksSection } from './components/HowItWorksSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { CtaBanner } from './components/CtaBanner';
import { Footer } from './components/Footer';
import { InteractiveModals, ModalState } from './components/InteractiveModals';
import { PostJobModal } from './components/PostJobModal';
import { AdminJobsDashboard } from './components/AdminJobsDashboard';
import { AdminLoginModal } from './components/AdminLoginModal';
import { DedicatedTeamsTermsModal } from './components/DedicatedTeamsTermsModal';
import { TopTalentModal } from './components/TopTalentModal';
import { getStoredAuthUser, logoutAdmin, checkAdminSession } from './lib/supabase';
import { AuthUser } from './types/job';

export default function App() {
  const [modalState, setModalState] = useState<ModalState>({ type: null });
  const [isPostJobOpen, setIsPostJobOpen] = useState(false);
  const [isTopTalentOpen, setIsTopTalentOpen] = useState(false);
  const [isDedicatedTeamsTermsOpen, setIsDedicatedTeamsTermsOpen] = useState(false);
  const [isAdminOpen, setIsAdminOpen] = useState(false);
  const [isAdminLoginOpen, setIsAdminLoginOpen] = useState(false);
  const [currentUser, setCurrentUser] = useState<AuthUser | null>(() => getStoredAuthUser());

  useEffect(() => {
    checkAdminSession().then((user) => {
      if (user) {
        setCurrentUser(user);
      }
    });
  }, []);

  const handleOpenAuth = (mode: 'login' | 'signup') => {
    setModalState({ type: 'auth', data: { mode } });
  };

  const handleOpenHire = () => {
    // Open the primary Job Submission modal directly
    setIsPostJobOpen(true);
  };

  const handleOpenWork = () => {
    setModalState({ type: 'work' });
  };

  const handleCategoryClick = (category: string) => {
    setModalState({ type: 'category', data: { category } });
  };

  const handleFeatureClick = (featureTitle: string) => {
    if (featureTitle.toLowerCase().includes('talent')) {
      setIsTopTalentOpen(true);
    } else {
      setIsPostJobOpen(true);
    }
  };

  const handleStepClick = (stepNumber: number) => {
    if (stepNumber === 1 || stepNumber === 2) {
      setIsPostJobOpen(true);
    } else {
      handleOpenWork();
    }
  };

  const handleCloseModal = () => {
    setModalState({ type: null });
  };

  /**
   * Strictly Guarded Admin Portal Entry Point:
   * Users CANNOT access the admin portal without being authenticated as an admin.
   */
  const handleOpenAdmin = () => {
    if (currentUser && currentUser.isAdmin) {
      setIsAdminOpen(true);
    } else {
      // Not logged in -> Prompt authentication guard modal
      setIsAdminLoginOpen(true);
    }
  };

  const handleLoginSuccess = (user: AuthUser) => {
    setCurrentUser(user);
    setIsAdminLoginOpen(false);
    setIsAdminOpen(true);
  };

  const handleAdminLogout = async () => {
    await logoutAdmin();
    setCurrentUser(null);
    setIsAdminOpen(false);
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
      <Navbar
        onOpenAuth={handleOpenAuth}
        onOpenHire={handleOpenHire}
        onOpenPostJob={() => setIsPostJobOpen(true)}
        onOpenTopTalent={() => setIsTopTalentOpen(true)}
        onOpenDedicatedTeamsTerms={() => setIsDedicatedTeamsTermsOpen(true)}
        onOpenAdmin={handleOpenAdmin}
        currentUser={currentUser}
        onLogout={handleAdminLogout}
      />

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
      <Footer
        onOpenDedicatedTeamsTerms={() => setIsDedicatedTeamsTermsOpen(true)}
        onOpenTopTalent={() => setIsTopTalentOpen(true)}
      />

      {/* Interactive Modals */}
      <InteractiveModals
        modalState={modalState}
        onClose={handleCloseModal}
        onLoginSuccess={handleLoginSuccess}
      />

      {/* Top 1% Vetted Talent Network & Vetting Standards Modal */}
      <TopTalentModal
        isOpen={isTopTalentOpen}
        onClose={() => setIsTopTalentOpen(false)}
        onPostJob={() => {
          setIsTopTalentOpen(false);
          setIsPostJobOpen(true);
        }}
      />

      {/* Dedicated Teams Terms of Engagement Modal */}
      <DedicatedTeamsTermsModal
        isOpen={isDedicatedTeamsTermsOpen}
        onClose={() => setIsDedicatedTeamsTermsOpen(false)}
        onRequestSquad={() => {
          setIsDedicatedTeamsTermsOpen(false);
          setIsPostJobOpen(true);
        }}
      />

      {/* Dedicated Job Submission Modal (Public Flow) */}
      <PostJobModal
        isOpen={isPostJobOpen}
        onClose={() => setIsPostJobOpen(false)}
      />

      {/* Dedicated Admin Login Guard Modal */}
      <AdminLoginModal
        isOpen={isAdminLoginOpen}
        onClose={() => setIsAdminLoginOpen(false)}
        onLoginSuccess={handleLoginSuccess}
      />

      {/* Dedicated Admin Jobs Moderation Dashboard (Strictly Protected Flow) */}
      <AdminJobsDashboard
        isOpen={isAdminOpen && Boolean(currentUser?.isAdmin)}
        onClose={() => setIsAdminOpen(false)}
        currentUser={currentUser}
        onLogout={handleAdminLogout}
      />
    </div>
  );
}

