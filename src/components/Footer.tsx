'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Phone, Mail, MapPin, ShieldCheck, Clock, ArrowUp, CheckCircle } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 text-slate-400 text-xs border-t border-slate-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          
          {/* Col 1: Brand & Bio */}
          <div className="space-y-4 text-left">
            <div className="relative h-10 w-48">
              <Image 
                src="/assets/all-in-remodeling/brand/logo.png" 
                alt="All In Remodeling Logo"
                fill
                className="object-contain filter brightness-110"
              />
            </div>
            <p className="text-slate-300 text-xs leading-relaxed">
              Premium residential kitchen, bathroom, pergola, and whole-home remodeling with hands-on owner oversight by Abraham Amouri across Rialto and the Inland Empire.
            </p>
            <div className="inline-flex items-center space-x-2 text-orange-400 font-bold">
              <ShieldCheck className="w-4 h-4 text-orange-400" />
              <span>BBB Accredited A+ Business</span>
            </div>
          </div>

          {/* Col 2: Direct Contact */}
          <div className="space-y-3 text-left">
            <div className="font-bold text-white text-sm uppercase tracking-wider">
              Contact & Location
            </div>
            <div className="space-y-2">
              <a 
                href="tel:9092678543" 
                className="flex items-center space-x-2 text-slate-200 hover:text-orange-400 transition-colors"
              >
                <Phone className="w-4 h-4 text-orange-400 shrink-0" />
                <span className="font-bold text-sm">(909) 267-8543</span>
              </a>

              <div className="flex items-start space-x-2 text-slate-300">
                <MapPin className="w-4 h-4 text-orange-400 shrink-0 mt-0.5" />
                <span>P.O. Box 2529, Rialto, CA 92377</span>
              </div>

              <div className="flex items-center space-x-2 text-slate-300">
                <Clock className="w-4 h-4 text-orange-400 shrink-0" />
                <span>Mon – Sat: 7:00 AM – 6:00 PM</span>
              </div>
            </div>
          </div>

          {/* Col 3: Services */}
          <div className="space-y-3 text-left">
            <div className="font-bold text-white text-sm uppercase tracking-wider">
              Core Services
            </div>
            <ul className="space-y-1.5 text-slate-300">
              <li><a href="#portfolio" className="hover:text-orange-400 transition-colors">Custom Kitchen Overhauls</a></li>
              <li><a href="#portfolio" className="hover:text-orange-400 transition-colors">Frameless Glass Bathrooms</a></li>
              <li><a href="#portfolio" className="hover:text-orange-400 transition-colors">Modern Louvered Pergolas</a></li>
              <li><a href="#portfolio" className="hover:text-orange-400 transition-colors">Load-Bearing Wall Removals</a></li>
              <li><a href="#permits" className="hover:text-orange-400 transition-colors">City Permitting & Plans</a></li>
            </ul>
          </div>

          {/* Col 4: Primary Service Cities */}
          <div className="space-y-3 text-left">
            <div className="font-bold text-white text-sm uppercase tracking-wider">
              Inland Empire Cities
            </div>
            <div className="grid grid-cols-2 gap-1 text-slate-300">
              <span>• Rialto</span>
              <span>• Rancho Cucamonga</span>
              <span>• Redlands</span>
              <span>• Fontana</span>
              <span>• Riverside</span>
              <span>• Ontario</span>
              <span>• San Bernardino</span>
              <span>• Yucaipa & Mentone</span>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-500">
          <div>
            &copy; {new Date().getFullYear()} All In Remodeling. All rights reserved. Owner: Abraham Amouri.
          </div>

          <div className="flex items-center space-x-4">
            <span className="text-slate-400 text-[11px]">Speculative Redesign by Novenworks</span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white border border-slate-800 transition-colors"
              aria-label="Scroll back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
