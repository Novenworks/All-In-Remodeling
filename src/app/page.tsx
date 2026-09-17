'use client';

import React, { useState } from 'react';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { CaseStudies } from '@/components/CaseStudies';
import { ProjectCategories } from '@/components/ProjectCategories';
import { OwnerStory } from '@/components/OwnerStory';
import { ProcessSection } from '@/components/ProcessSection';
import { PermitConfidence } from '@/components/PermitConfidence';
import { ServiceAreaReviews } from '@/components/ServiceAreaReviews';
import { EstimateCalculator } from '@/components/EstimateCalculator';
import { ContactModal } from '@/components/ContactModal';
import { Footer } from '@/components/Footer';

export default function HomePage() {
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [selectedProjectType, setSelectedProjectType] = useState('Kitchen Remodel');

  const handleOpenQuoteModal = (projectType?: string) => {
    if (projectType) {
      setSelectedProjectType(
        projectType === 'kitchens' || projectType === 'kitchen' ? 'Kitchen Remodel' :
        projectType === 'bathrooms' || projectType === 'bathroom' ? 'Bathroom Spa / Shower' :
        projectType === 'outdoor' ? 'Pergola / Covered Patio' :
        projectType === 'whole-home' ? 'Whole-Home Remodel' : 'General Remodeling'
      );
    }
    setQuoteModalOpen(true);
  };

  return (
    <main className="min-h-screen bg-[#0a0e17] text-slate-100 flex flex-col selection:bg-orange-500 selection:text-white">
      {/* 1. Header Navigation */}
      <Header onOpenQuoteModal={handleOpenQuoteModal} />

      {/* 2. Hero Section */}
      <Hero onOpenQuoteModal={handleOpenQuoteModal} />

      {/* 3. Before/After Case Studies */}
      <CaseStudies onOpenQuoteModal={handleOpenQuoteModal} />

      {/* 4. Filterable Project Showcase */}
      <ProjectCategories onOpenQuoteModal={handleOpenQuoteModal} />

      {/* 5. Abraham Owner Story & Supervision Difference */}
      <OwnerStory onOpenQuoteModal={handleOpenQuoteModal} />

      {/* 6. 5-Step Transparent Process */}
      <ProcessSection onOpenQuoteModal={handleOpenQuoteModal} />

      {/* 7. Municipal Permits & Architectural Confidence */}
      <PermitConfidence onOpenQuoteModal={handleOpenQuoteModal} />

      {/* 8. Service Footprint & Verified Reviews */}
      <ServiceAreaReviews onOpenQuoteModal={handleOpenQuoteModal} />

      {/* 9. Interactive In-Home Estimate Calculator & Form */}
      <EstimateCalculator />

      {/* 10. Footer */}
      <Footer />

      {/* Popup Contact & Quote Modal */}
      <ContactModal
        isOpen={quoteModalOpen}
        onClose={() => setQuoteModalOpen(false)}
        initialProjectType={selectedProjectType}
      />
    </main>
  );
}
