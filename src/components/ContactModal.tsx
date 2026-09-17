'use client';

import React, { useState } from 'react';
import { X, Phone, CheckCircle, ArrowRight, Shield } from 'lucide-react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialProjectType?: string;
}

export const ContactModal: React.FC<ContactModalProps> = ({
  isOpen,
  onClose,
  initialProjectType = 'Kitchen Remodel'
}) => {
  const [submitted, setSubmitted] = useState(false);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [project, setProject] = useState(initialProjectType);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fadeIn">
      <div className="bg-slate-900 border border-slate-700 rounded-2xl max-w-lg w-full p-6 sm:p-8 shadow-2xl relative text-left">
        
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-slate-950/80 text-slate-400 hover:text-white border border-slate-800"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="text-center py-8 space-y-4">
            <div className="w-14 h-14 rounded-full bg-emerald-950 border border-emerald-500 text-emerald-400 flex items-center justify-center mx-auto">
              <CheckCircle className="w-7 h-7" />
            </div>
            <h3 className="text-xl font-bold text-white">Consultation Requested!</h3>
            <p className="text-xs text-slate-300">
              Abraham Amouri will call you at <strong className="text-white">{phone}</strong> shortly to discuss your remodeling goals.
            </p>
            <button
              onClick={onClose}
              className="mt-4 px-6 py-2 rounded-lg bg-orange-600 text-white text-xs font-bold"
            >
              Done
            </button>
          </div>
        ) : (
          <div className="space-y-4">
            <div>
              <span className="text-[11px] font-bold text-orange-400 uppercase tracking-wider">
                Direct Owner Inquiry
              </span>
              <h3 className="text-xl font-extrabold text-white mt-0.5">
                Request Free In-Home Estimate
              </h3>
              <p className="text-xs text-slate-400 mt-1">
                Speak directly with Abraham Amouri regarding your Inland Empire project.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4 text-xs">
              <div>
                <label className="block text-slate-300 font-medium mb-1">Your Full Name *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Michael Miller"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl p-3 text-white text-sm focus:ring-2 focus:ring-orange-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-slate-300 font-medium mb-1">Phone Number *</label>
                <input
                  type="tel"
                  required
                  placeholder="(909) 000-0000"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl p-3 text-white text-sm focus:ring-2 focus:ring-orange-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-slate-300 font-medium mb-1">Project Category</label>
                <select
                  value={project}
                  onChange={(e) => setProject(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl p-3 text-white text-sm focus:ring-2 focus:ring-orange-500 focus:outline-none"
                >
                  <option>Kitchen Remodel</option>
                  <option>Bathroom Spa / Walk-In Shower</option>
                  <option>Outdoor Pergola / Covered Patio</option>
                  <option>Whole-Home Open Concept / Structural</option>
                  <option>Permit / Plan Consultation</option>
                </select>
              </div>

              <button
                type="submit"
                className="w-full py-3.5 rounded-xl bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-500 hover:to-amber-500 text-white font-bold text-sm shadow-lg flex items-center justify-center space-x-2"
              >
                <span>Request Abraham's Walkthrough</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <div className="pt-2 flex items-center justify-center space-x-2 text-[11px] text-slate-400">
                <Phone className="w-3.5 h-3.5 text-orange-400" />
                <span>Or call directly: </span>
                <a href="tel:9092678543" className="font-bold text-white hover:text-orange-400">
                  (909) 267-8543
                </a>
              </div>
            </form>
          </div>
        )}

      </div>
    </div>
  );
};
