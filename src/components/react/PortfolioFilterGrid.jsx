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

  const categoryList = [
    { label: 'Semua', num: 'ALL' },
    { label: 'CMMS', num: '01' },
    { label: 'CMS', num: '02' },
    { label: 'ERP', num: '03' },
    { label: 'MRP', num: '04' },
    { label: 'HRMS', num: '05' },
    { label: 'GMP', num: '06' }
  ];

  const categoryListEn = [
    { label: 'All', num: 'ALL' },
    { label: 'CMMS', num: '01' },
    { label: 'CMS', num: '02' },
    { label: 'ERP', num: '03' },
    { label: 'MRP', num: '04' },
    { label: 'HRMS', num: '05' },
    { label: 'GMP', num: '06' }
  ];

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
      {/* Spacious Segmented Filter Tab Switcher Bar (Zero scale shift) */}
      <div className="bg-neutral-100/90 p-2.5 rounded-2xl md:rounded-full flex flex-wrap items-center justify-center gap-2.5 sm:gap-3.5 max-w-4xl mx-auto mb-10 md:mb-14 border border-neutral-200/90 shadow-sm">
        {activeCategories.map((item, idx) => {
          const isActive = filter === item.label;

          return (
            <button
              key={idx}
              onClick={() => setFilter(item.label)}
              className={`flex items-center gap-2.5 px-4.5 py-2.5 sm:px-5 sm:py-3 rounded-xl md:rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 outline-none ${
                isActive 
                  ? 'bg-primary text-secondary font-bold border border-accent/50 shadow-md' 
                  : 'bg-white/80 text-neutral-600 border border-neutral-200/60 hover:text-primary hover:bg-white hover:border-neutral-300'
              }`}
            >
              <span className={`inline-flex items-center justify-center px-1.5 h-5 rounded-full text-[10px] font-mono font-bold transition-colors ${
                isActive ? 'bg-accent/20 text-accent border border-accent/40' : 'bg-neutral-200/80 text-neutral-500'
              }`}>
                {item.num}
              </span>
              <span className="whitespace-nowrap font-bold">{item.label}</span>
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
