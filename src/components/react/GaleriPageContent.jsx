import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import PortfolioFilterGrid from './PortfolioFilterGrid.jsx';
import projects from '../../data/projects.json';

export default function GaleriPageContent() {
  const [lang, setLang] = useState('id');

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

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.25, 1, 0.5, 1] }}
    >
      <section className="pt-32 pb-12 px-6 lg:px-8 text-center max-w-4xl mx-auto">
        <span className="text-accent text-xs font-bold uppercase tracking-widest bg-accent/10 px-4 py-1.5 rounded-full border border-accent/20">
          {isEn ? "Selected Works" : "Portofolio Pilihan"}
        </span>
        <h1 className="font-serif text-4xl md:text-5xl font-bold text-primary mt-4 mb-6">
          {isEn ? "Project Portfolio Gallery" : "Galeri Project"}
        </h1>
        <p className="font-sans text-lg text-neutral-600 leading-relaxed mb-4">
          {isEn 
            ? "Explore our portfolio of enterprise web systems and custom digital solutions. Select a relevant case study for your upcoming project."
            : "Eksplorasi portofolio solusi digital dan sistem web yang telah saya kembangkan. Pilih project yang relevan dengan kebutuhan Anda sebagai inspirasi awal."
          }
        </p>
        <p className="block text-[10px] sm:text-xs text-neutral-400 font-sans italic mt-2">
          {isEn
            ? "*Note: Some projects might be private or confidential and are not displayed based on client requests and non-disclosure agreements."
            : "*Catatan: Beberapa proyek mungkin bersifat private (rahasia) dan tidak ditampilkan berdasarkan kebijakan dan keinginan klien."}
        </p>
      </section>

      <section className="pb-24 px-6 lg:px-8 max-w-7xl mx-auto">
        <PortfolioFilterGrid initialProjects={projects} />
      </section>
    </motion.div>
  );
}
