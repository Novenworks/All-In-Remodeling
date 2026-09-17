'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Shield, Sparkles, Star, ArrowRight, CheckCircle, Hammer, Ruler, Clock } from 'lucide-react';

interface HeroProps {
  onOpenQuoteModal: (projectType?: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenQuoteModal }) => {
  const [activePreview, setActivePreview] = useState<'kitchen' | 'outdoor'>('kitchen');

  return (
    <section className="relative overflow-hidden bg-slate-950 pt-8 pb-16 lg:pt-14 lg:pb-24 border-b border-slate-800/80">
      {/* Background Decorative Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-b from-orange-600/10 via-amber-600/5 to-transparent blur-3xl pointer-events-none" />
      <div className="absolute -top-24 right-0 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Left Hero Column: Copy & Value Proposition */}
          <div className="lg:col-span-7 flex flex-col items-start text-left space-y-6">
            
            {/* Eyebrow badge */}
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-orange-950/60 border border-orange-700/50 text-orange-300 text-xs font-bold tracking-wider uppercase shadow-inner">
              <span className="w-2 h-2 rounded-full bg-orange-400 animate-ping mr-1" />
              RIALTO / INLAND EMPIRE
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
              DON’T JUST PICTURE THE REMODEL. <br className="hidden sm:inline" />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-400 via-amber-300 to-orange-500">
                SEE WHAT WE’VE ALREADY BUILT.
              </span>
            </h1>

            {/* Subhead / Body */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed font-normal">
              Kitchens, bathrooms, outdoor structures and whole-home improvements across the Inland Empire — planned clearly and built with <strong className="text-white font-semibold">owner-level attention</strong>.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto pt-2">
              <button
                onClick={() => onOpenQuoteModal()}
                className="inline-flex items-center justify-center px-7 py-4 rounded-xl bg-gradient-to-r from-orange-600 via-orange-500 to-amber-600 hover:from-orange-500 hover:to-amber-500 text-white font-bold text-base shadow-xl shadow-orange-950/50 hover:shadow-orange-600/30 hover:scale-[1.02] transition-all duration-200"
              >
                <span>GET A FREE ESTIMATE</span>
                <ArrowRight className="w-5 h-5 ml-2.5" />
              </button>

              <a
                href="#portfolio"
                className="inline-flex items-center justify-center px-6 py-4 rounded-xl bg-slate-900/90 hover:bg-slate-800 text-slate-200 hover:text-white font-semibold text-base border border-slate-700/80 hover:border-slate-600 transition-all duration-200"
              >
                <span>SEE THE WORK</span>
              </a>
            </div>

            {/* Trust Proof Points Strip */}
            <div className="pt-6 grid grid-cols-2 sm:grid-cols-3 gap-4 border-t border-slate-800/80 w-full text-xs text-slate-300">
              <div className="flex items-start space-x-2.5">
                <div className="p-1.5 rounded-md bg-orange-950/80 border border-orange-700/40 text-orange-400 mt-0.5">
                  <Shield className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-bold text-slate-100">BBB Accredited A+</div>
                  <div className="text-slate-400 text-[11px]">Verified Inland Empire business</div>
                </div>
              </div>

              <div className="flex items-start space-x-2.5">
                <div className="p-1.5 rounded-md bg-orange-950/80 border border-orange-700/40 text-orange-400 mt-0.5">
                  <Hammer className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-bold text-slate-100">Hands-On Supervision</div>
                  <div className="text-slate-400 text-[11px]">Owner Abraham on site</div>
                </div>
              </div>

              <div className="flex items-start space-x-2.5 col-span-2 sm:col-span-1">
                <div className="p-1.5 rounded-md bg-orange-950/80 border border-orange-700/40 text-orange-400 mt-0.5">
                  <Ruler className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-bold text-slate-100">5-Step Process</div>
                  <div className="text-slate-400 text-[11px]">100% Permitted & Code-Ready</div>
                </div>
              </div>
            </div>

          </div>

          {/* Right Hero Column: Real First-Party Project Hero Showcase */}
          <div className="lg:col-span-5 relative">
            {/* Visual Framing Container */}
            <div className="relative rounded-2xl p-2 bg-gradient-to-b from-slate-700/50 via-slate-800/30 to-slate-900/60 border border-slate-700/70 shadow-2xl backdrop-blur-sm">
              
              {/* Image Container with Badge */}
              <div className="relative h-[340px] sm:h-[400px] lg:h-[440px] rounded-xl overflow-hidden group">
                <Image
                  src={
                    activePreview === 'kitchen' 
                      ? '/assets/all-in-remodeling/hero/hero-kitchen-luxury.jpg' 
                      : '/assets/all-in-remodeling/projects/outdoor/outdoor-modern-pergola-1.jpg'
                  }
                  alt="Real All In Remodeling Project Transformation"
                  fill
                  priority
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {/* Dark Vignette Overlay for Readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent pointer-events-none" />

                {/* Real Verified Stamp */}
                <div className="absolute top-3 left-3 bg-slate-900/90 backdrop-blur-md border border-orange-500/40 text-orange-300 text-[11px] font-bold px-3 py-1.5 rounded-full shadow-lg flex items-center space-x-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-orange-400" />
                  <span>Real First-Party Project</span>
                </div>

                {/* Switcher Tabs */}
                <div className="absolute top-3 right-3 flex bg-slate-950/80 backdrop-blur-md p-1 rounded-lg border border-slate-700">
                  <button
                    onClick={() => setActivePreview('kitchen')}
                    className={`px-2.5 py-1 text-xs font-semibold rounded transition-all ${
                      activePreview === 'kitchen' 
                        ? 'bg-orange-600 text-white shadow-sm' 
                        : 'text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    Kitchen
                  </button>
                  <button
                    onClick={() => setActivePreview('outdoor')}
                    className={`px-2.5 py-1 text-xs font-semibold rounded transition-all ${
                      activePreview === 'outdoor' 
                        ? 'bg-orange-600 text-white shadow-sm' 
                        : 'text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    Outdoor
                  </button>
                </div>

                {/* Bottom Project Specs Overlay */}
                <div className="absolute bottom-4 left-4 right-4 bg-slate-900/90 backdrop-blur-md border border-slate-700/80 rounded-xl p-3.5 text-left shadow-lg">
                  <div className="flex items-center justify-between text-xs text-orange-400 font-bold mb-1">
                    <span>{activePreview === 'kitchen' ? 'Rancho Cucamonga Overhaul' : 'Rialto Custom Pergola'}</span>
                    <span className="text-slate-400 font-medium">Completed by Abraham & Crew</span>
                  </div>
                  <div className="text-sm font-bold text-white mb-1.5">
                    {activePreview === 'kitchen' 
                      ? 'Floor-to-Ceiling Cabinetry & Calacatta Quartz Island' 
                      : 'Heavy-Timber Architectural Louver System with Ambient LED'}
                  </div>
                  <div className="flex items-center space-x-3 text-[11px] text-slate-300">
                    <span className="flex items-center"><CheckCircle className="w-3 h-3 text-emerald-400 mr-1" /> Custom Millwork</span>
                    <span className="flex items-center"><CheckCircle className="w-3 h-3 text-emerald-400 mr-1" /> Permitted & Inspected</span>
                  </div>
                </div>

              </div>

            </div>

            {/* Floating Trust Card */}
            <div className="absolute -bottom-5 -left-4 sm:-left-6 bg-slate-900/95 border border-slate-700 rounded-xl p-3 shadow-2xl backdrop-blur-md flex items-center space-x-3 max-w-[240px]">
              <div className="w-10 h-10 rounded-lg bg-orange-600/20 border border-orange-500/40 flex items-center justify-center text-orange-400 shrink-0 font-extrabold text-sm">
                A+
              </div>
              <div className="text-xs text-left">
                <div className="font-bold text-white">BBB Accredited</div>
                <div className="text-[11px] text-slate-400">Zero Unresolved Complaints</div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
