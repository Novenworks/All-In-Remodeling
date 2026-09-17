'use client';

import React from 'react';
import { processSteps } from '@/lib/data';
import { CheckCircle2, ArrowRight, Shield, Sparkles } from 'lucide-react';

interface ProcessSectionProps {
  onOpenQuoteModal: (projectType?: string) => void;
}

export const ProcessSection: React.FC<ProcessSectionProps> = ({ onOpenQuoteModal }) => {
  return (
    <section id="process" className="py-16 sm:py-24 bg-slate-900 border-b border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-orange-950/60 border border-orange-700/40 text-orange-300 text-xs font-bold uppercase tracking-wider mb-3">
            <Shield className="w-3.5 h-3.5 text-orange-400" />
            <span>Structured Transparency</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Our 5-Step <span className="text-gradient">Remodeling Roadmap</span>
          </h2>
          <p className="mt-3 text-base text-slate-300 leading-relaxed">
            High-end renovations should never feel like a guessing game. Here is exactly how Abraham guides your project from first sketch to final walkthrough.
          </p>
        </div>

        {/* 5 Steps Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative">
          {processSteps.map((step, idx) => (
            <div
              key={step.number}
              className="bg-slate-950 border border-slate-800 rounded-2xl p-6 relative flex flex-col justify-between hover:border-orange-500/50 hover:shadow-glow transition-all duration-300 group"
            >
              <div>
                {/* Step Number & Badge */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-3xl font-black text-slate-700 group-hover:text-orange-500 transition-colors">
                    {step.number}
                  </span>
                  <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-orange-950/80 border border-orange-800/60 text-orange-300">
                    {step.badge}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-orange-400 transition-colors">
                  {step.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Deliverable Footer */}
              <div className="mt-6 pt-4 border-t border-slate-800/80 text-xs text-slate-400">
                <span className="font-semibold text-orange-400">What you get: </span>
                <span className="text-slate-200">{step.deliverable}</span>
              </div>
            </div>
          ))}

          {/* 6th Card: CTA Card */}
          <div className="bg-gradient-to-br from-orange-950/60 via-slate-950 to-slate-950 border border-orange-700/50 rounded-2xl p-6 flex flex-col justify-between text-left shadow-xl">
            <div>
              <div className="w-10 h-10 rounded-xl bg-orange-600/20 border border-orange-500/40 flex items-center justify-center text-orange-400 mb-4">
                <Sparkles className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Ready to Start Step 1?</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Book a no-obligation in-home walkthrough with Abraham. We will review your space, discuss ideas, and give you honest feasibility feedback.
              </p>
            </div>

            <div className="mt-6">
              <button
                onClick={() => onOpenQuoteModal()}
                className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-500 hover:to-amber-500 text-white font-bold text-xs sm:text-sm flex items-center justify-center space-x-2 shadow-md"
              >
                <span>Book Free In-Home Consultation</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
