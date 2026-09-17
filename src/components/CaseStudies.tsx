'use client';

import React from 'react';
import { transformationsData } from '@/lib/data';
import { BeforeAfterSlider } from '@/components/BeforeAfterSlider';
import { Sparkles, Award, ArrowRight } from 'lucide-react';

interface CaseStudiesProps {
  onOpenQuoteModal: (projectType?: string) => void;
}

export const CaseStudies: React.FC<CaseStudiesProps> = ({ onOpenQuoteModal }) => {
  return (
    <section id="transformations" className="py-16 sm:py-24 bg-slate-950 border-b border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-orange-950/60 border border-orange-700/40 text-orange-300 text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-orange-400" />
            <span>Interactive Proof</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Real Transformations. <br className="hidden sm:inline" />
            <span className="text-gradient">Millimeter-Precision Results.</span>
          </h2>
          <p className="mt-3 text-base text-slate-300 leading-relaxed">
            We don’t use generic manufacturer renders or stock images. Interact with these real Inland Empire before-and-after projects built with direct owner oversight.
          </p>
        </div>

        {/* Sliders Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {transformationsData.map((item) => (
            <BeforeAfterSlider key={item.id} item={item} />
          ))}
        </div>

        {/* CTA Bar */}
        <div className="mt-12 p-6 rounded-2xl bg-gradient-to-r from-slate-900 via-slate-850 to-slate-900 border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-xl">
          <div className="flex items-center space-x-3">
            <div className="p-3 rounded-xl bg-orange-600/20 text-orange-400 border border-orange-500/30">
              <Award className="w-6 h-6" />
            </div>
            <div className="text-left">
              <div className="font-bold text-white text-base">Have an outdated room ready for transformation?</div>
              <div className="text-xs text-slate-400">Abraham provides a detailed in-home walkthrough and transparent quote.</div>
            </div>
          </div>

          <button
            onClick={() => onOpenQuoteModal()}
            className="shrink-0 px-6 py-3 rounded-xl bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-500 hover:to-amber-500 text-white font-bold text-sm shadow-md transition-all duration-200"
          >
            Get My Transformation Quote
          </button>
        </div>

      </div>
    </section>
  );
};
