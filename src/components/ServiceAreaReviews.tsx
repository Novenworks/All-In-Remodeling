'use client';

import React from 'react';
import { serviceAreas, reviewsData } from '@/lib/data';
import { MapPin, Star, ShieldCheck, Quote, CheckCircle } from 'lucide-react';

interface ServiceAreaReviewsProps {
  onOpenQuoteModal: (projectType?: string) => void;
}

export const ServiceAreaReviews: React.FC<ServiceAreaReviewsProps> = ({ onOpenQuoteModal }) => {
  return (
    <section id="service-areas" className="py-16 sm:py-24 bg-slate-900 border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-orange-950/60 border border-orange-700/40 text-orange-300 text-xs font-bold uppercase tracking-wider mb-3">
            <MapPin className="w-3.5 h-3.5 text-orange-400" />
            <span>Local Inland Empire Roots</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Service Footprint & <span className="text-gradient">Homeowner Feedback</span>
          </h2>
          <p className="mt-3 text-base text-slate-300 leading-relaxed">
            Based in Rialto, CA, All In Remodeling delivers dedicated remodeling craftsmanship across the Inland Empire.
          </p>
        </div>

        {/* Reviews Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {reviewsData.map((review) => (
            <div
              key={review.id}
              className="bg-slate-950 border border-slate-800 rounded-2xl p-6 flex flex-col justify-between text-left shadow-xl hover:border-slate-700 transition-colors"
            >
              <div>
                {/* 5 Stars */}
                <div className="flex items-center space-x-1 mb-3 text-amber-400">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                <div className="text-xs font-bold text-orange-400 mb-2">
                  "{review.highlight}"
                </div>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed italic">
                  "{review.quote}"
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs">
                <div>
                  <div className="font-bold text-white">{review.author}</div>
                  <div className="text-slate-400 text-[11px]">{review.location}</div>
                </div>
                <span className="text-[11px] bg-slate-900 text-slate-400 px-2 py-0.5 rounded border border-slate-800">
                  {review.projectType}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Service Footprint Cities */}
        <div className="bg-slate-950 border border-slate-800 rounded-2xl p-6 sm:p-8 text-left">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 border-b border-slate-800 pb-4">
            <div>
              <h3 className="text-lg font-bold text-white">Inland Empire Service Coverage</h3>
              <p className="text-xs text-slate-400">Rapid response and scheduling within a 35-mile radius of Rialto.</p>
            </div>
            <div className="flex items-center space-x-2 text-xs font-semibold text-emerald-400">
              <CheckCircle className="w-4 h-4 text-emerald-400" />
              <span>Currently Booking Spring/Summer Projects</span>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs">
            {serviceAreas.map((area) => (
              <div
                key={area.name}
                className="bg-slate-900/80 p-3.5 rounded-xl border border-slate-800/80 hover:border-orange-500/40 transition-colors"
              >
                <div className="font-bold text-white text-sm flex items-center">
                  <MapPin className="w-3.5 h-3.5 mr-1 text-orange-400" />
                  {area.name}
                </div>
                <div className="text-slate-400 text-[11px] mt-1">{area.note}</div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
