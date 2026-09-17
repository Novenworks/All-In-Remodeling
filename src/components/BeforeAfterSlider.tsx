'use client';

import React, { useState, useRef, useCallback } from 'react';
import Image from 'next/image';
import { TransformationItem } from '@/types';
import { Sparkles, ArrowLeftRight, CheckCircle2, MapPin, Layers } from 'lucide-react';

interface BeforeAfterSliderProps {
  item: TransformationItem;
}

export const BeforeAfterSlider: React.FC<BeforeAfterSliderProps> = ({ item }) => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = useCallback(
    (clientX: number) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const x = clientX - rect.left;
      const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
      setSliderPosition(percentage);
    },
    []
  );

  const handleTouchMove = (e: React.TouchEvent) => {
    handleMove(e.touches[0].clientX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging) {
      handleMove(e.clientX);
    }
  };

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-4 sm:p-6 shadow-xl flex flex-col space-y-4">
      {/* Title & Location Header */}
      <div className="flex flex-wrap items-center justify-between gap-2">
        <div>
          <div className="flex items-center space-x-2 text-xs font-semibold text-orange-400 uppercase tracking-wider">
            <span className="px-2.5 py-0.5 rounded bg-orange-950/80 border border-orange-800/60 text-orange-300">
              {item.category}
            </span>
            <span className="flex items-center text-slate-400">
              <MapPin className="w-3.5 h-3.5 mr-1 text-slate-500" />
              {item.location}
            </span>
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-white mt-1">{item.title}</h3>
        </div>
        <div className="text-xs text-slate-400 bg-slate-950 px-3 py-1.5 rounded-lg border border-slate-800 flex items-center space-x-1.5">
          <ArrowLeftRight className="w-3.5 h-3.5 text-orange-400" />
          <span>Drag slider to compare</span>
        </div>
      </div>

      {/* Interactive Before/After Frame */}
      <div
        ref={containerRef}
        className="relative h-[280px] sm:h-[380px] lg:h-[420px] w-full rounded-xl overflow-hidden select-none cursor-ew-resize bg-slate-950 border border-slate-800 shadow-inner"
        onMouseDown={() => setIsDragging(true)}
        onMouseUp={() => setIsDragging(false)}
        onMouseLeave={() => setIsDragging(false)}
        onMouseMove={handleMouseMove}
        onTouchMove={handleTouchMove}
      >
        {/* AFTER Image (Underneath, Full Width) */}
        <div className="absolute inset-0">
          <Image
            src={item.afterImage}
            alt={`${item.title} - After Transformation`}
            fill
            className="object-cover"
          />
          <div className="absolute top-4 right-4 bg-emerald-950/90 border border-emerald-500/50 text-emerald-300 text-xs font-bold px-3 py-1 rounded-full backdrop-blur-md shadow-md">
            AFTER (All In Remodeling)
          </div>
        </div>

        {/* BEFORE Image (Clipped overlay) */}
        <div
          className="absolute inset-0 overflow-hidden"
          style={{ width: `${sliderPosition}%` }}
        >
          <div className="relative h-full w-full" style={{ width: containerRef.current?.offsetWidth || '100%' }}>
            <Image
              src={item.beforeImage}
              alt={`${item.title} - Before Renovation`}
              fill
              className="object-cover"
            />
            <div className="absolute top-4 left-4 bg-slate-950/90 border border-slate-700 text-slate-300 text-xs font-bold px-3 py-1 rounded-full backdrop-blur-md shadow-md">
              BEFORE
            </div>
          </div>
        </div>

        {/* Vertical Divider Line & Handle */}
        <div
          className="absolute top-0 bottom-0 w-1 bg-white shadow-2xl transition-all"
          style={{ left: `${sliderPosition}%` }}
        >
          <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-9 h-9 rounded-full bg-gradient-to-tr from-orange-600 to-amber-500 text-white flex items-center justify-center shadow-2xl border-2 border-white ring-4 ring-orange-500/30">
            <ArrowLeftRight className="w-4 h-4" />
          </div>
        </div>
      </div>

      {/* Scope Details & Notes */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2 text-xs">
        <div className="bg-slate-950/60 p-3.5 rounded-xl border border-slate-800/80">
          <div className="text-slate-400 font-bold mb-1 flex items-center">
            <span className="w-2 h-2 rounded-full bg-red-400 mr-2" />
            Existing Issues Identified:
          </div>
          <p className="text-slate-300 leading-relaxed">{item.beforeNote}</p>
        </div>

        <div className="bg-slate-950/60 p-3.5 rounded-xl border border-slate-800/80">
          <div className="text-orange-400 font-bold mb-1 flex items-center">
            <span className="w-2 h-2 rounded-full bg-emerald-400 mr-2" />
            Craftsmanship Transformation:
          </div>
          <p className="text-slate-300 leading-relaxed">{item.afterNote}</p>
        </div>
      </div>

      {/* Scope Bullets */}
      <div className="pt-2 border-t border-slate-800/60">
        <div className="text-xs font-semibold text-slate-400 mb-2 flex items-center">
          <Layers className="w-3.5 h-3.5 mr-1.5 text-orange-400" />
          Execution Scope & Milestones:
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-300">
          {item.scope.map((s, idx) => (
            <div key={idx} className="flex items-start space-x-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-orange-400 shrink-0 mt-0.5" />
              <span>{s}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
