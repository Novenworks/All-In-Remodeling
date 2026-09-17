'use client';

import React from 'react';
import Image from 'next/image';
import { UserCheck, ShieldCheck, Wrench, MessageSquare, Clock, CheckCircle2, AlertCircle } from 'lucide-react';

interface OwnerStoryProps {
  onOpenQuoteModal: (projectType?: string) => void;
}

export const OwnerStory: React.FC<OwnerStoryProps> = ({ onOpenQuoteModal }) => {
  return (
    <section id="owner-story" className="py-16 sm:py-24 bg-slate-950 border-b border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Abraham's Philosophy */}
          <div className="lg:col-span-6 space-y-6 text-left">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-orange-950/60 border border-orange-700/40 text-orange-300 text-xs font-bold uppercase tracking-wider">
              <UserCheck className="w-3.5 h-3.5 text-orange-400" />
              <span>Direct Owner Involvement</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
              Why Owner-Supervised Remodeling Changes <span className="text-gradient">Everything</span>.
            </h2>

            <p className="text-slate-300 text-base leading-relaxed">
              When you hire a large remodeling brokerage or franchise, the salesperson who signs your contract often disappears the next day, passing your home to whoever submitted the cheapest subcontractor bid.
            </p>

            <p className="text-slate-300 text-base leading-relaxed">
              At <strong className="text-white">All In Remodeling</strong>, owner <strong className="text-white font-semibold">Abraham Amouri</strong> is directly involved in your project from initial consultation to final punch list. You have Abraham’s direct cell phone number, daily on-site quality control, and zero corporate games.
            </p>

            {/* 3 Pillars */}
            <div className="space-y-3 pt-2">
              <div className="flex items-start space-x-3 bg-slate-900/90 p-3.5 rounded-xl border border-slate-800">
                <div className="p-2 rounded-lg bg-orange-600/20 text-orange-400 border border-orange-500/30 shrink-0 mt-0.5">
                  <MessageSquare className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-bold text-white text-sm">Direct Owner Communication</div>
                  <div className="text-xs text-slate-400 mt-0.5">No middlemen, no answering services. You talk directly with the craftsman running your build.</div>
                </div>
              </div>

              <div className="flex items-start space-x-3 bg-slate-900/90 p-3.5 rounded-xl border border-slate-800">
                <div className="p-2 rounded-lg bg-orange-600/20 text-orange-400 border border-orange-500/30 shrink-0 mt-0.5">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-bold text-white text-sm">Daily Jobsite Cleanliness & Dust Protection</div>
                  <div className="text-xs text-slate-400 mt-0.5">We seal off living areas with heavy poly barriers, use floor runners, and sweep every single evening.</div>
                </div>
              </div>

              <div className="flex items-start space-x-3 bg-slate-900/90 p-3.5 rounded-xl border border-slate-800">
                <div className="p-2 rounded-lg bg-orange-600/20 text-orange-400 border border-orange-500/30 shrink-0 mt-0.5">
                  <Wrench className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-bold text-white text-sm">Milestone-Based Transparent Invoicing</div>
                  <div className="text-xs text-slate-400 mt-0.5">Payments are tied to inspected, verified completion milestones—never arbitrary demands.</div>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={() => onOpenQuoteModal()}
                className="inline-flex items-center px-6 py-3.5 rounded-xl bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-500 hover:to-amber-500 text-white font-bold text-sm shadow-lg shadow-orange-950/40"
              >
                Schedule In-Home Consultation with Abraham
              </button>
            </div>

          </div>

          {/* Right Column: Comparison Card (Typical Contractor vs All In Remodeling) */}
          <div className="lg:col-span-6">
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8 shadow-2xl space-y-6">
              <div className="text-left">
                <h3 className="text-lg font-bold text-white">How We Compare</h3>
                <p className="text-xs text-slate-400">The difference between a stressed remodel and a predictable transformation.</p>
              </div>

              <div className="space-y-4 text-xs">
                {/* Comparison Row 1 */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pb-3 border-b border-slate-800">
                  <div className="bg-red-950/20 border border-red-900/30 p-3 rounded-xl text-left">
                    <div className="text-red-400 font-bold flex items-center mb-1">
                      <AlertCircle className="w-3.5 h-3.5 mr-1" />
                      Typical Subcontractor Model
                    </div>
                    <div className="text-slate-400">Salesman disappears; untrained revolving crew shows up whenever they want.</div>
                  </div>
                  <div className="bg-emerald-950/20 border border-emerald-800/40 p-3 rounded-xl text-left">
                    <div className="text-emerald-400 font-bold flex items-center mb-1">
                      <CheckCircle2 className="w-3.5 h-3.5 mr-1" />
                      All In Remodeling Standard
                    </div>
                    <div className="text-slate-300">Owner Abraham is personally on site inspecting every trade milestone.</div>
                  </div>
                </div>

                {/* Comparison Row 2 */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pb-3 border-b border-slate-800">
                  <div className="bg-red-950/20 border border-red-900/30 p-3 rounded-xl text-left">
                    <div className="text-red-400 font-bold flex items-center mb-1">
                      <AlertCircle className="w-3.5 h-3.5 mr-1" />
                      Hidden Change Orders
                    </div>
                    <div className="text-slate-400">Low upfront bid with costly surprises added midway through construction.</div>
                  </div>
                  <div className="bg-emerald-950/20 border border-emerald-800/40 p-3 rounded-xl text-left">
                    <div className="text-emerald-400 font-bold flex items-center mb-1">
                      <CheckCircle2 className="w-3.5 h-3.5 mr-1" />
                      Transparent Itemized Estimates
                    </div>
                    <div className="text-slate-300">Detailed scope, realistic material allowances, and locked-in contracts.</div>
                  </div>
                </div>

                {/* Comparison Row 3 */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="bg-red-950/20 border border-red-900/30 p-3 rounded-xl text-left">
                    <div className="text-red-400 font-bold flex items-center mb-1">
                      <AlertCircle className="w-3.5 h-3.5 mr-1" />
                      Permit Shortcuts
                    </div>
                    <div className="text-slate-400">Encourages "unpermitted work" that causes future resale red flags and fines.</div>
                  </div>
                  <div className="bg-emerald-950/20 border border-emerald-800/40 p-3 rounded-xl text-left">
                    <div className="text-emerald-400 font-bold flex items-center mb-1">
                      <CheckCircle2 className="w-3.5 h-3.5 mr-1" />
                      Full City Compliance
                    </div>
                    <div className="text-slate-300">Complete municipal permits and engineer-backed architectural plans.</div>
                  </div>
                </div>
              </div>

              {/* Direct Call Box */}
              <div className="p-4 rounded-xl bg-slate-950 border border-orange-500/30 flex items-center justify-between text-left">
                <div>
                  <div className="text-xs text-orange-400 font-bold uppercase">Direct Phone Line</div>
                  <div className="text-sm font-bold text-white">(909) 267-8543</div>
                </div>
                <a
                  href="tel:9092678543"
                  className="px-4 py-2 rounded-lg bg-orange-600 hover:bg-orange-500 text-white text-xs font-bold transition-colors"
                >
                  Call Abraham
                </a>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
