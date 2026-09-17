'use client';

import React from 'react';
import { FileCheck2, Scale, HardHat, CheckCircle2, ArrowRight } from 'lucide-react';

interface PermitConfidenceProps {
  onOpenQuoteModal: (projectType?: string) => void;
}

export const PermitConfidence: React.FC<PermitConfidenceProps> = ({ onOpenQuoteModal }) => {
  return (
    <section id="permits" className="py-16 sm:py-24 bg-slate-950 border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          <div className="lg:col-span-5 space-y-6 text-left">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-orange-950/60 border border-orange-700/40 text-orange-300 text-xs font-bold uppercase tracking-wider">
              <FileCheck2 className="w-3.5 h-3.5 text-orange-400" />
              <span>Municipal Peace of Mind</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
              Permits, Plans & Codes <br />
              <span className="text-gradient">Handled From Start to Finish</span>.
            </h2>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Navigating building departments in Rialto, Rancho Cucamonga, Redlands, and San Bernardino County can be a bureaucratic nightmare for homeowners.
            </p>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              We eliminate the headache. We prepare structural drawings, submit city applications, schedule official city building inspections, and ensure your home improvements add genuine appraised value without resale violations.
            </p>

            <div className="pt-2">
              <button
                onClick={() => onOpenQuoteModal('permits')}
                className="inline-flex items-center px-6 py-3 rounded-xl bg-slate-900 border border-slate-700 hover:border-orange-500 text-slate-100 font-semibold text-xs sm:text-sm transition-colors"
              >
                <span>Ask About Permits For Your City</span>
                <ArrowRight className="w-4 h-4 ml-2 text-orange-400" />
              </button>
            </div>
          </div>

          {/* Right Feature Cards */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            
            <div className="bg-slate-900/90 border border-slate-800 p-5 rounded-2xl text-left hover:border-slate-700 transition-colors">
              <div className="w-9 h-9 rounded-lg bg-orange-600/20 text-orange-400 flex items-center justify-center mb-3">
                <Scale className="w-5 h-5" />
              </div>
              <h3 className="text-sm font-bold text-white mb-1.5">Load-Bearing Wall Removals</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Engineering calculations and LVL beam sizing for open-concept floor plans with complete structural calculations.
              </p>
            </div>

            <div className="bg-slate-900/90 border border-slate-800 p-5 rounded-2xl text-left hover:border-slate-700 transition-colors">
              <div className="w-9 h-9 rounded-lg bg-orange-600/20 text-orange-400 flex items-center justify-center mb-3">
                <HardHat className="w-5 h-5" />
              </div>
              <h3 className="text-sm font-bold text-white mb-1.5">Electrical & Plumbing Upgrades</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Title 24 California energy compliance, dedicated GFCI/AFCI circuits, and tamper-resistant electrical packages.
              </p>
            </div>

            <div className="bg-slate-900/90 border border-slate-800 p-5 rounded-2xl text-left hover:border-slate-700 transition-colors">
              <div className="w-9 h-9 rounded-lg bg-orange-600/20 text-orange-400 flex items-center justify-center mb-3">
                <FileCheck2 className="w-5 h-5" />
              </div>
              <h3 className="text-sm font-bold text-white mb-1.5">HOA Architectural Submissions</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                We provide the exact elevation drawings and color material swatches required by strict Inland Empire HOAs.
              </p>
            </div>

            <div className="bg-slate-900/90 border border-slate-800 p-5 rounded-2xl text-left hover:border-slate-700 transition-colors">
              <div className="w-9 h-9 rounded-lg bg-orange-600/20 text-orange-400 flex items-center justify-center mb-3">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <h3 className="text-sm font-bold text-white mb-1.5">Final City Sign-Off</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                We stand with the city inspector during final review until your permit is officially stamped and finalized.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
