/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { SupportedLanguage, TeamMember } from './types';
import { getStoredTeamMembers } from './utils/storage';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { HowItWorks } from './components/HowItWorks';
import { Experience } from './components/Experience';
import { Languages } from './components/Languages';
import { Team } from './components/Team';
import { Contact } from './components/Contact';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { FontSwitcher } from './components/FontSwitcher';
import { Footer } from './components/Footer';
import { AdminTeamModal } from './components/AdminTeamModal';

export default function App() {
  const [currentLanguage, setCurrentLanguage] = useState<SupportedLanguage>('it');
  const [teamMembers, setTeamMembers] = useState<TeamMember[]>(() => getStoredTeamMembers());
  const [selectedContactSubject, setSelectedContactSubject] = useState<string>('');
  const [selectedLanguageName, setSelectedLanguageName] = useState<string>('Italiano');
  const [isAdminModalOpen, setIsAdminModalOpen] = useState(false);

  // Sync team members if updated elsewhere
  useEffect(() => {
    const handleTeamUpdate = () => {
      setTeamMembers(getStoredTeamMembers());
    };
    window.addEventListener('team-updated', handleTeamUpdate);
    return () => window.removeEventListener('team-updated', handleTeamUpdate);
  }, []);

  // Update document direction if Arabic or Urdu is selected
  useEffect(() => {
    if (currentLanguage === 'ar' || currentLanguage === 'ur') {
      document.documentElement.dir = 'rtl';
    } else {
      document.documentElement.dir = 'ltr';
    }
  }, [currentLanguage]);

  const handleSelectServiceForContact = (serviceTitle: string) => {
    setSelectedContactSubject(serviceTitle);
  };

  const handleSelectMemberForContact = (memberName: string) => {
    setSelectedContactSubject(`Richiesta orientamento con ${memberName}`);
  };

  const handleOpenContactForLanguage = (langName: string) => {
    setSelectedLanguageName(langName);
    const target = document.getElementById('contatti');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FCFAF6] text-[#191817] selection:bg-[#B45F42] selection:text-white font-sans antialiased">
      {/* Fixed Navigation Header */}
      <Header
        currentLanguage={currentLanguage}
        onLanguageChange={setCurrentLanguage}
        onOpenContactModal={() => {
          const el = document.getElementById('contatti');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }}
      />

      {/* Main Content Sections in accordance with the definitive prompt */}
      <main className="flex-1">
        {/* 1. Hero Section: 2 columns, editorial photo, terracotta badge, serif title */}
        <Hero
          currentLanguage={currentLanguage}
          onQuickNeedSelect={(subject) => setSelectedContactSubject(subject)}
        />

        {/* 2. Chi Siamo: editorial typography, story, studio photo, CTA */}
        <About />

        {/* 3. I Nostri Servizi: all 8 services, thin beige dividers, linear icons */}
        <Services onSelectServiceForContact={handleSelectServiceForContact} />

        {/* 4. Come Funziona: 4 numbered clean steps (01-04) */}
        <HowItWorks />

        {/* 5. Cosa Offriamo & Competenze Legali (22 Anni Avv. Annalisa Rottola) */}
        <Experience />

        {/* 6. Assistenza Linguistica: 6 lingue comunitarie ed extra-UE */}
        <Languages
          currentLanguage={currentLanguage}
          onLanguageChange={setCurrentLanguage}
          onOpenContactForLanguage={handleOpenContactForLanguage}
        />

        {/* 7. Il Nostro Team: con foto ufficiale dell'Avv. Annalisa Rottola e gestione */}
        <Team
          members={teamMembers}
          onUpdateMembers={setTeamMembers}
          onSelectMemberForContact={handleSelectMemberForContact}
        />

        {/* 8. Sede Ufficio Milano & Contatti con Modulo */}
        <Contact
          initialSubject={selectedContactSubject}
          initialLanguage={selectedLanguageName}
        />
      </main>

      {/* Floating Terracotta WhatsApp Button */}
      <FloatingWhatsApp />

      {/* Luxury Typography Presets Switcher */}
      <FontSwitcher />

      {/* Editorial Footer */}
      <Footer onOpenAdminTeam={() => setIsAdminModalOpen(true)} />

      {/* Team Administration Modal */}
      <AdminTeamModal
        isOpen={isAdminModalOpen}
        onClose={() => setIsAdminModalOpen(false)}
        members={teamMembers}
        onSave={setTeamMembers}
      />
    </div>
  );
}
