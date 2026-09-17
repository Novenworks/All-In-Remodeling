'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { projectsData } from '@/lib/data';
import { ProjectItem } from '@/types';
import { MapPin, Clock, ArrowRight, CheckCircle2, Eye, X } from 'lucide-react';

interface ProjectCategoriesProps {
  onOpenQuoteModal: (projectType?: string) => void;
}

export const ProjectCategories: React.FC<ProjectCategoriesProps> = ({ onOpenQuoteModal }) => {
  const [activeTab, setActiveTab] = useState<'all' | 'kitchens' | 'bathrooms' | 'outdoor' | 'whole-home'>('all');
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const filteredProjects = activeTab === 'all' 
    ? projectsData 
    : projectsData.filter((p) => p.category === activeTab);

  const tabs = [
    { id: 'all', label: 'All Projects (14)' },
    { id: 'kitchens', label: 'Kitchens (4)' },
    { id: 'bathrooms', label: 'Bathrooms (4)' },
    { id: 'outdoor', label: 'Pergolas & Outdoor (3)' },
    { id: 'whole-home', label: 'Whole Home (3)' },
  ];

  return (
    <section id="portfolio" className="py-16 sm:py-24 bg-slate-900 border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div className="text-left max-w-2xl">
            <div className="text-xs font-bold text-orange-400 uppercase tracking-wider mb-2">
              FIRST-PARTY PROJECT GALLERY
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Crafted Across The <span className="text-gradient">Inland Empire</span>
            </h2>
            <p className="mt-2 text-slate-300 text-sm sm:text-base leading-relaxed">
              Explore our real completed kitchen, bathroom, pergola, and whole-home remodeling projects with verified locations and materials.
            </p>
          </div>

          <button
            onClick={() => onOpenQuoteModal(activeTab !== 'all' ? activeTab : 'kitchens')}
            className="inline-flex items-center px-5 py-3 rounded-xl bg-orange-600 hover:bg-orange-500 text-white font-bold text-sm shadow-md transition-colors shrink-0"
          >
            <span>Request Quote For This Style</span>
            <ArrowRight className="w-4 h-4 ml-2" />
          </button>
        </div>

        {/* Filter Navigation Tabs */}
        <div className="flex flex-wrap items-center gap-2 mb-8 border-b border-slate-800 pb-4">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all ${
                activeTab === tab.id
                  ? 'bg-gradient-to-r from-orange-600 to-amber-600 text-white shadow-md'
                  : 'bg-slate-950/80 text-slate-400 hover:text-slate-200 hover:bg-slate-800 border border-slate-800'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-slate-950 border border-slate-800 rounded-2xl overflow-hidden hover:border-orange-500/50 hover:shadow-glow transition-all duration-300 flex flex-col group"
            >
              {/* Image Frame */}
              <div 
                className="relative h-60 w-full overflow-hidden cursor-pointer"
                onClick={() => setSelectedProject(project)}
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-80" />
                
                {/* Location Badge */}
                <div className="absolute top-3 left-3 bg-slate-950/80 backdrop-blur-md px-2.5 py-1 rounded-full text-[11px] font-semibold text-slate-200 border border-slate-700 flex items-center">
                  <MapPin className="w-3 h-3 text-orange-400 mr-1" />
                  {project.location}
                </div>

                {/* Duration Badge */}
                <div className="absolute top-3 right-3 bg-orange-950/90 backdrop-blur-md px-2.5 py-1 rounded-full text-[11px] font-semibold text-orange-300 border border-orange-700 flex items-center">
                  <Clock className="w-3 h-3 text-orange-400 mr-1" />
                  {project.duration}
                </div>

                {/* Hover Quick View Trigger */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 bg-slate-950/40 backdrop-blur-[2px] transition-opacity duration-300">
                  <span className="px-4 py-2 rounded-lg bg-orange-600/90 text-white font-bold text-xs flex items-center shadow-lg">
                    <Eye className="w-3.5 h-3.5 mr-1.5" />
                    Inspect Details
                  </span>
                </div>
              </div>

              {/* Content Body */}
              <div className="p-5 flex-1 flex flex-col justify-between text-left">
                <div>
                  <h3 className="text-base font-bold text-white group-hover:text-orange-400 transition-colors line-clamp-2">
                    {project.title}
                  </h3>
                  <p className="mt-2 text-xs text-slate-400 leading-relaxed line-clamp-2">
                    {project.description}
                  </p>
                </div>

                {/* Highlights tags */}
                <div className="mt-4 pt-3 border-t border-slate-800/80">
                  <div className="flex flex-wrap gap-1.5">
                    {project.highlights.map((h, i) => (
                      <span
                        key={i}
                        className="text-[11px] bg-slate-900 border border-slate-800 text-slate-300 px-2 py-0.5 rounded-md"
                      >
                        {h}
                      </span>
                    ))}
                  </div>

                  <div className="mt-4 flex items-center justify-between">
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="text-xs font-bold text-orange-400 hover:text-orange-300 flex items-center"
                    >
                      View Specs & Photos &rarr;
                    </button>
                    <button
                      onClick={() => onOpenQuoteModal(project.category)}
                      className="text-xs bg-slate-800 hover:bg-slate-700 text-slate-200 px-3 py-1.5 rounded-md font-semibold transition-colors"
                    >
                      Estimate Similar
                    </button>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Project Lightbox / Detail Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fadeIn">
          <div className="bg-slate-900 border border-slate-700 rounded-2xl max-w-3xl w-full overflow-hidden shadow-2xl relative max-h-[90vh] flex flex-col">
            
            {/* Close Button */}
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 z-20 p-2 rounded-full bg-slate-950/80 text-slate-300 hover:text-white border border-slate-700"
              aria-label="Close project modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Image */}
            <div className="relative h-72 sm:h-96 w-full shrink-0">
              <Image
                src={selectedProject.image}
                alt={selectedProject.title}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent" />
            </div>

            {/* Modal Body */}
            <div className="p-6 overflow-y-auto space-y-4 text-left">
              <div className="flex flex-wrap items-center justify-between gap-2 text-xs">
                <span className="px-3 py-1 rounded-full bg-orange-950/80 border border-orange-700 text-orange-300 font-bold uppercase">
                  {selectedProject.category}
                </span>
                <span className="text-slate-400 flex items-center">
                  <MapPin className="w-3.5 h-3.5 mr-1 text-orange-400" />
                  {selectedProject.location} • Timeline: {selectedProject.duration}
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-white">
                {selectedProject.title}
              </h3>

              <p className="text-sm text-slate-300 leading-relaxed">
                {selectedProject.description}
              </p>

              <div className="bg-slate-950 p-4 rounded-xl border border-slate-800">
                <div className="text-xs font-bold text-orange-400 uppercase tracking-wider mb-2">
                  Key Craftsmanship Features
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-300">
                  {selectedProject.highlights.map((h, i) => (
                    <div key={i} className="flex items-center space-x-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row items-center justify-end gap-3">
                <button
                  onClick={() => setSelectedProject(null)}
                  className="w-full sm:w-auto px-5 py-2.5 rounded-lg bg-slate-800 text-slate-300 text-xs font-semibold hover:bg-slate-700"
                >
                  Close Window
                </button>
                <button
                  onClick={() => {
                    const cat = selectedProject.category;
                    setSelectedProject(null);
                    onOpenQuoteModal(cat);
                  }}
                  className="w-full sm:w-auto px-6 py-2.5 rounded-lg bg-gradient-to-r from-orange-600 to-amber-600 text-white text-xs font-bold shadow-md hover:from-orange-500 hover:to-amber-500"
                >
                  Request Consultation For This Project
                </button>
              </div>

            </div>

          </div>
        </div>
      )}

    </section>
  );
};
