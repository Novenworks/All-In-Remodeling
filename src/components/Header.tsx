'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Phone, ShieldCheck, Clock, MapPin, Menu, X, ArrowRight, CheckCircle2 } from 'lucide-react';

interface HeaderProps {
  onOpenQuoteModal: (projectType?: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenQuoteModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Transformations', href: '#transformations' },
    { label: 'Projects', href: '#portfolio' },
    { label: '5-Step Process', href: '#process' },
    { label: 'Owner Story', href: '#owner-story' },
    { label: 'Permits & Codes', href: '#permits' },
    { label: 'Service Areas', href: '#service-areas' },
  ];

  return (
    <>
      {/* Top Notification / Trust Bar */}
      <div className="bg-slate-950 border-b border-slate-800 text-xs py-2 px-4 text-slate-300 relative z-50">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-2">
          <div className="flex items-center space-x-4">
            <span className="inline-flex items-center text-orange-400 font-medium">
              <ShieldCheck className="w-3.5 h-3.5 mr-1.5 text-orange-400" />
              BBB Accredited A+ Rating
            </span>
            <span className="hidden sm:inline-flex items-center text-slate-400">
              <MapPin className="w-3.5 h-3.5 mr-1 text-slate-500" />
              Serving Rialto, Rancho Cucamonga, Redlands & IE
            </span>
          </div>

          <div className="flex items-center space-x-4">
            <span className="hidden md:inline-flex items-center text-slate-400">
              <CheckCircle2 className="w-3.5 h-3.5 mr-1 text-emerald-400" />
              Direct Owner Oversight by Abraham Amouri
            </span>
            <a 
              href="tel:9092678543" 
              className="inline-flex items-center font-bold text-orange-400 hover:text-orange-300 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 mr-1 text-orange-400 animate-pulse" />
              (909) 267-8543
            </a>
          </div>
        </div>
      </div>

      {/* Main Sticky Navbar */}
      <header className={`sticky top-0 z-40 transition-all duration-300 ${
        isScrolled 
          ? 'bg-slate-950/95 backdrop-blur-md border-b border-slate-800 shadow-xl py-3' 
          : 'bg-slate-950/80 backdrop-blur-sm border-b border-slate-800/60 py-4'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo Brand */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="relative h-10 w-44 sm:h-12 sm:w-52">
              <Image 
                src="/assets/all-in-remodeling/brand/logo.png" 
                alt="All In Remodeling Logo"
                fill
                priority
                className="object-contain filter brightness-110 drop-shadow-md group-hover:scale-105 transition-transform duration-200"
              />
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-6 text-sm font-medium text-slate-200">
            {navLinks.map((link) => (
              <a 
                key={link.label}
                href={link.href}
                className="hover:text-orange-400 transition-colors duration-150 py-1 relative group"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-500 transition-all duration-200 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center space-x-4">
            <a 
              href="tel:9092678543"
              className="flex flex-col text-right group"
            >
              <span className="text-[11px] uppercase tracking-wider text-slate-400 font-semibold">Speak with Abraham</span>
              <span className="text-sm font-bold text-slate-100 group-hover:text-orange-400 transition-colors">(909) 267-8543</span>
            </a>

            <button
              onClick={() => onOpenQuoteModal()}
              className="inline-flex items-center justify-center px-4 py-2.5 rounded-lg bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-500 hover:to-amber-500 text-white font-semibold text-sm shadow-md shadow-orange-950/40 hover:shadow-orange-600/30 hover:shadow-lg transition-all duration-200 active:scale-95"
            >
              Request Estimate
              <ArrowRight className="w-4 h-4 ml-1.5" />
            </button>
          </div>

          {/* Mobile Hamburger Toggle */}
          <button 
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800 transition-colors focus:outline-none focus:ring-2 focus:ring-orange-500"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Dropdown Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-slate-900 border-b border-slate-800 px-4 pt-3 pb-6 space-y-3 animate-fadeIn">
            <nav className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2.5 rounded-md text-base font-medium text-slate-200 hover:text-orange-400 hover:bg-slate-800/80 transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            <div className="pt-4 border-t border-slate-800 flex flex-col space-y-3">
              <a 
                href="tel:9092678543"
                className="flex items-center justify-center space-x-2 py-3 px-4 rounded-lg bg-slate-800 text-slate-100 font-bold hover:bg-slate-700 transition-colors"
              >
                <Phone className="w-4 h-4 text-orange-400" />
                <span>Call Abraham: (909) 267-8543</span>
              </a>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenQuoteModal();
                }}
                className="w-full flex items-center justify-center py-3 px-4 rounded-lg bg-gradient-to-r from-orange-600 to-amber-600 text-white font-bold shadow-lg text-center"
              >
                <span>Request Free Estimate</span>
                <ArrowRight className="w-4 h-4 ml-2" />
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
