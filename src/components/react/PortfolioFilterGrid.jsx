import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Code2, Building2 } from 'lucide-react';

export default function PortfolioFilterGrid({ initialProjects }) {
  const [lang, setLang] = useState('id');
  const [filter, setFilter] = useState('Semua');

  useEffect(() => {
    const saved = localStorage.getItem('user_lang') || 'id';
    setLang(saved);

    const handleLangChange = (e) => {
      setLang(e.detail);
    };

    window.addEventListener('langChange', handleLangChange);
    return () => window.removeEventListener('langChange', handleLangChange);
  }, []);

  const isEn = lang === 'en';

  const categoryList = ['Semua', 'CMMS', 'CMS', 'ERP', 'MRP', 'HRMS', 'GMP'];
  const categoryListEn = ['All', 'CMMS', 'CMS', 'ERP', 'MRP', 'HRMS', 'GMP'];

  const activeCategories = isEn ? categoryListEn : categoryList;

  // Extract exact short category tag (e.g. "CMMS", "CMS", "ERP", "MRP", "HRMS", "GMP")
  const getCategoryShortTag = (project) => {
    const cat = isEn ? (project.category_en || project.category) : project.category;
    if (!cat) return '';
    const firstWord = cat.split(' ')[0].trim();
    return firstWord;
  };

  const getCategoryFullLabel = (project) => {
    return isEn ? (project.category_en || project.category) : project.category;
  };

  // Strictly filter projects matching exact category short tag
  const filteredProjects = (filter === 'Semua' || filter === 'All')
    ? initialProjects 
    : initialProjects.filter(p => getCategoryShortTag(p) === filter);

  return (
    <div>
      {/* Modern Animated Filter Pill Bar */}
      <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5 mb-10 md:mb-14 p-1.5 bg-neutral-200/50 backdrop-blur-md rounded-full border border-neutral-300/60 max-w-fit mx-auto shadow-inner">
        {activeCategories.map((cat, idx) => {
          const isActive = filter === cat;

          return (
            <button
              key={idx}
              onClick={() => setFilter(cat)}
              className={`relative px-4 py-2 sm:px-5 sm:py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-colors duration-300 outline-none z-10 ${
                isActive ? 'text-secondary font-bold' : 'text-neutral-600 hover:text-primary'
              }`}
            >
              {isActive && (
                <motion.span
                  layoutId="activeGalleryFilterPill"
                  transition={{ type: "spring", stiffness: 450, damping: 35 }}
                  className="absolute inset-0 bg-primary rounded-full border border-accent/40 shadow-lg -z-10"
                />
              )}
              <span>{cat}</span>
            </button>
          );
        })}
      </div>

      {/* Grid re-renders instantly per filter key without exit flicker */}
      <motion.div 
        key={filter}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35, ease: [0.25, 1, 0.5, 1] }}
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch"
      >
        {filteredProjects.map((project) => {
          const clientName = isEn ? (project.client_en || project.client) : project.client;
          const description = isEn ? (project.description_en || project.description) : project.description;
          const categoryLabel = getCategoryFullLabel(project);

          return (
            <div
              key={project.id}
              className="bg-white rounded-3xl border border-neutral-200/80 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1 flex flex-col justify-between group h-full"
            >
              <div>
                <div className="aspect-video bg-neutral-900 w-full relative overflow-hidden">
                  {project.image ? (
                    <img 
                      src={project.image} 
                      alt={project.name} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-smooth" 
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <Code2 className="w-12 h-12 text-neutral-500" />
                    </div>
                  )}
                  
                  <div className="absolute top-4 right-4 bg-primary text-secondary text-[11px] font-bold px-3 py-1 rounded-full border border-accent/30 shadow-md">
                    {categoryLabel}
                  </div>
                </div>

                <div className="p-6 md:p-7">
                  {clientName && (
                    <div className="flex items-center gap-1.5 text-accent text-xs font-semibold mb-2">
                      <Building2 className="w-3.5 h-3.5 shrink-0" />
                      <span>{clientName}</span>
                    </div>
                  )}

                  <h3 className="font-serif text-xl font-bold text-primary mb-3 leading-snug group-hover:text-accent transition-colors">
                    {project.name}
                  </h3>
                  
                  <p className="text-neutral-600 font-sans text-sm leading-relaxed">
                    {description}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </motion.div>
    </div>
  );
}
