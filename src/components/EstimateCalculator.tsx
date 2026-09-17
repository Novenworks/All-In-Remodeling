'use client';

import React, { useState } from 'react';
import { Calculator, Phone, CheckCircle, ArrowRight, ShieldCheck } from 'lucide-react';

export const EstimateCalculator: React.FC = () => {
  const [projectType, setProjectType] = useState<'kitchen' | 'bathroom' | 'outdoor' | 'whole-home'>('kitchen');
  const [timeline, setTimeline] = useState<'asap' | '1-3months' | 'planning'>('asap');
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    city: 'Rialto',
    notes: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="estimate-calculator" className="py-16 sm:py-24 bg-slate-950 relative border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Info Column */}
          <div className="lg:col-span-5 text-left space-y-6">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-orange-950/60 border border-orange-700/40 text-orange-300 text-xs font-bold uppercase tracking-wider">
              <Calculator className="w-3.5 h-3.5 text-orange-400" />
              <span>Instant Project Inquiry</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Request Your Free <br />
              <span className="text-gradient">In-Home Consultation</span>
            </h2>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Tell Abraham about your project. We respond promptly to schedule an in-person walkthrough and provide an itemized, transparent cost breakdown.
            </p>

            <div className="space-y-3 text-xs text-slate-300 pt-2">
              <div className="flex items-center space-x-2.5">
                <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Zero sales pressure & direct owner walkthrough</span>
              </div>
              <div className="flex items-center space-x-2.5">
                <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Itemized written estimate with no surprise hidden fees</span>
              </div>
              <div className="flex items-center space-x-2.5">
                <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Full municipal permit and code compliance assistance</span>
              </div>
            </div>

            {/* Direct Phone Card */}
            <div className="p-5 rounded-2xl bg-slate-900 border border-slate-800 flex items-center space-x-4">
              <div className="w-12 h-12 rounded-xl bg-orange-600/20 border border-orange-500/40 flex items-center justify-center text-orange-400 shrink-0">
                <Phone className="w-6 h-6 animate-pulse" />
              </div>
              <div>
                <div className="text-xs text-slate-400 font-semibold">Prefer to speak right away?</div>
                <a href="tel:9092678543" className="text-lg font-bold text-white hover:text-orange-400 transition-colors">
                  (909) 267-8543
                </a>
              </div>
            </div>

          </div>

          {/* Right Form Card */}
          <div className="lg:col-span-7">
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8 shadow-2xl text-left">
              
              {submitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-950/80 border border-emerald-500/50 text-emerald-400 flex items-center justify-center mx-auto">
                    <CheckCircle className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Thank You! Request Received</h3>
                  <p className="text-slate-300 text-sm max-w-md mx-auto">
                    Abraham Amouri has received your project details and will follow up with you at <strong className="text-white">{formData.phone || '(your number)'}</strong> to arrange your in-home consultation.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-4 px-6 py-2 rounded-lg bg-slate-800 text-slate-300 text-xs font-semibold hover:bg-slate-700"
                  >
                    Submit Another Request
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  
                  {/* Step 1: Select Project Type */}
                  <div>
                    <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                      1. Select Project Type
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                      {[
                        { id: 'kitchen', label: 'Kitchen Remodel' },
                        { id: 'bathroom', label: 'Bathroom Spa' },
                        { id: 'outdoor', label: 'Pergola / Outdoor' },
                        { id: 'whole-home', label: 'Whole Home' },
                      ].map((item) => (
                        <button
                          key={item.id}
                          type="button"
                          onClick={() => setProjectType(item.id as any)}
                          className={`p-3 rounded-xl text-xs font-semibold text-center border transition-all ${
                            projectType === item.id
                              ? 'bg-orange-600 text-white border-orange-500 shadow-md'
                              : 'bg-slate-950 text-slate-300 border-slate-800 hover:border-slate-700'
                          }`}
                        >
                          {item.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Step 2: Ideal Timeline */}
                  <div>
                    <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                      2. Ideal Start Timeline
                    </label>
                    <div className="grid grid-cols-3 gap-2">
                      {[
                        { id: 'asap', label: 'Ready ASAP' },
                        { id: '1-3months', label: 'Within 1-3 Months' },
                        { id: 'planning', label: 'Exploring / Planning' },
                      ].map((t) => (
                        <button
                          key={t.id}
                          type="button"
                          onClick={() => setTimeline(t.id as any)}
                          className={`p-2.5 rounded-xl text-xs font-semibold text-center border transition-all ${
                            timeline === t.id
                              ? 'bg-slate-800 text-orange-400 border-orange-500'
                              : 'bg-slate-950 text-slate-400 border-slate-800 hover:border-slate-700'
                          }`}
                        >
                          {t.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Step 3: Contact Details */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="John Smith"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none focus:ring-2 focus:ring-orange-500 placeholder-slate-600"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="(909) 000-0000"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none focus:ring-2 focus:ring-orange-500 placeholder-slate-600"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1">
                        City / Location in Inland Empire
                      </label>
                      <input
                        type="text"
                        value={formData.city}
                        onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                        placeholder="Rialto, Rancho Cucamonga, Redlands..."
                        className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none focus:ring-2 focus:ring-orange-500 placeholder-slate-600"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1">
                        Brief Project Description (Optional)
                      </label>
                      <input
                        type="text"
                        value={formData.notes}
                        onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                        placeholder="e.g. Removing wall, new kitchen island..."
                        className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none focus:ring-2 focus:ring-orange-500 placeholder-slate-600"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 rounded-xl bg-gradient-to-r from-orange-600 via-orange-500 to-amber-600 hover:from-orange-500 hover:to-amber-500 text-white font-bold text-sm sm:text-base shadow-xl shadow-orange-950/50 flex items-center justify-center space-x-2 transition-all duration-200"
                  >
                    <span>Submit Free In-Home Estimate Request</span>
                    <ArrowRight className="w-5 h-5" />
                  </button>

                  <div className="text-[11px] text-slate-500 text-center flex items-center justify-center space-x-2">
                    <ShieldCheck className="w-3.5 h-3.5 text-slate-500" />
                    <span>Your information goes directly to Abraham. We never sell or spam your phone number.</span>
                  </div>

                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
