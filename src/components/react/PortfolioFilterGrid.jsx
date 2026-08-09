import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Code2, Building2 } from 'lucide-react';
import { fontTranslations } from '../../utils/translations';

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

  const categories = isEn 
    ? ['All', 'Internal Management Systems', 'Retail & Web Portals']
    : ['Semua', 'Sistem Manajemen Internal', 'Website Retail & Profil'];

  const getCategory = (project) => {
    if (isEn) {
      return project.category_en || project.category;
    }
    return project.category;
  };

  const filteredProjects = (filter === 'Semua' || filter === 'All')
    ? initialProjects 
    : initialProjects.filter(p => getCategory(p) === filter);

  return (
    <div>
      {/* Category Filter Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-3 mb-12 md:mb-16">
        {categories.map((cat, idx) => (
          <button
            key={idx}
            onClick={() => setFilter(cat)}
            className={`px-6 py-3 rounded-full text-xs md:text-sm font-semibold transition-all duration-300 ${
              filter === cat 
                ? 'bg-primary text-secondary shadow-md scale-105' 
                : 'bg-white text-neutral-600 border border-neutral-200/80 hover:border-neutral-400'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid */}
      <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
        <AnimatePresence>
          {filteredProjects.map((project) => {
            const clientName = isEn ? (project.client_en || project.client) : project.client;
            const description = isEn ? (project.description_en || project.description) : project.description;
            const categoryLabel = getCategory(project);

            return (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
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
                    
                    <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-md text-primary text-[11px] font-bold px-3 py-1 rounded-full border border-neutral-200/60 shadow-sm">
                      {categoryLabel}
                    </div>
                  </div>

                  <div className="p-6 md:p-7">
                    {clientName && (
                      <div className="flex items-center gap-1.5 text-accent text-xs font-semibold mb-2">
                        <Building2 className="w-3.5 h-3.5" />
                        <span>{clientName}</span>
                      </div>
                    )}

                    <h3 className="font-serif text-xl font-bold text-primary mb-3 group-hover:text-accent transition-colors leading-snug">
                      {project.name}
                    </h3>
                    
                    <p className="text-neutral-600 font-sans text-sm mb-6 leading-relaxed">
                      {description}
                    </p>
                  </div>
                </div>

                <div className="px-6 pb-6 md:px-7 md:pb-7 pt-0 mt-auto">
                  <a 
                    href={`/order?project=${project.id}`} 
                    className="inline-flex items-center justify-center gap-2 w-full bg-primary text-secondary px-5 py-3.5 rounded-xl font-semibold text-sm transition-all duration-400 hover:bg-neutral-800"
                  >
                    <span>{isEn ? "Use This Project" : "Gunakan Project Ini"}</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
