import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Building2, Layers, CheckCircle2, FolderGit2 } from 'lucide-react';
import { fontTranslations } from '../../utils/translations';

export default function ServicesBentoGrid() {
  const [lang, setLang] = useState('id');
  const [activeTab, setActiveTab] = useState(0);

  useEffect(() => {
    const saved = localStorage.getItem('user_lang') || 'id';
    setLang(saved);

    const handleLangChange = (e) => {
      setLang(e.detail);
    };

    window.addEventListener('langChange', handleLangChange);
    return () => window.removeEventListener('langChange', handleLangChange);
  }, []);

  const translationSource = fontTranslations[lang]?.services || fontTranslations.id.services;

  const projectsData = [
    {
      num: "01",
      badge: "CMMS System",
      image: "/images/ap2-cmms.webp",
      link: "/galeri",
      highlights: lang === 'en' 
        ? ["Preventive Maintenance", "Technician Work Order Logging", "AtoN Beacon Reliability"]
        : ["Penjadwalan Maintenance", "Pencatatan Work Order", "Monitoring Navigasi Laut"]
    },
    {
      num: "02",
      badge: "CMS System",
      image: "/images/mudik-lebaran.webp",
      link: "/galeri",
      highlights: lang === 'en'
        ? ["High-Traffic Transport Portal", "Encrypted Assessment Engine", "National Ministry Portal"]
        : ["Portal Mudik High-Traffic", "Mesin Ujian Terenkripsi", "Portal Kemenhub RI"]
    },
    {
      num: "03",
      badge: "ERP System",
      image: "/images/hero-showcase.png",
      link: "/galeri",
      highlights: lang === 'en'
        ? ["Warehouse Inventory Control", "Sales Transaction Logging", "Operational Cash-Flow Automation"]
        : ["Manajemen Stok Gudang", "Pencatatan Penjualan", "Otomatisasi Laporan Keuangan"]
    },
    {
      num: "04",
      badge: "MRP System",
      image: "/images/project-cmms.png",
      link: "/galeri",
      highlights: lang === 'en'
        ? ["Raw Material Calculation", "Factory Production Scheduling", "Supply Chain Optimization"]
        : ["Kalkulasi Bahan Baku", "Jadwal Produksi Pabrik", "Optimasi Rantai Pasokan"]
    },
    {
      num: "05",
      badge: "HRMS System",
      image: "/images/mentalhub.webp",
      link: "/galeri",
      highlights: lang === 'en'
        ? ["Online Psychometrics E-Assessment", "Employee Attendance & Leave", "Grievance Feedback Portal"]
        : ["Tes Psikologi E-Assessment", "Presensi & Cuti Digital", "Portal Pengaduan Pegawai"]
    },
    {
      num: "06",
      badge: "GMP System",
      image: "/images/gmp-nutrifood.webp",
      link: "/galeri",
      highlights: lang === 'en'
        ? ["Production Area Cleaning Audit", "Occupational Safety Compliance", "Quality Standard Inspections"]
        : ["Audit Kebersihan Area Produksi", "Kepatuhan K3 Pabrik", "Inspeksi Standar Mutu"]
    }
  ];

  const safeTab = Math.min(Math.max(activeTab, 0), (translationSource.items?.length || 1) - 1);
  const currentProject = translationSource.items?.[safeTab] || translationSource.items?.[0] || {};
  const currentConfig = projectsData[safeTab] || projectsData[0];

  return (
    <section className="py-16 md:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-10 md:mb-16">
        <div className="inline-flex items-center gap-2 text-accent text-xs font-bold uppercase tracking-widest bg-accent/10 px-4 py-1.5 rounded-full border border-accent/20 shadow-sm mb-4">
          <Layers className="w-3.5 h-3.5" />
          <span>{translationSource.badge}</span>
        </div>
        
        <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-primary mb-4 leading-tight">
          {translationSource.headline}
        </h2>
        
        <p className="text-neutral-600 font-sans text-base md:text-lg leading-relaxed">
          {translationSource.subHeadline}
        </p>
      </div>

      {/* Spacious Segmented System Category Tab Switcher (No scale jump, generous spacing) */}
      <div className="bg-neutral-100/90 p-2.5 rounded-2xl md:rounded-full flex flex-wrap items-center justify-center gap-2.5 sm:gap-3.5 max-w-4xl mx-auto mb-10 md:mb-14 border border-neutral-200/90 shadow-sm">
        {translationSource.items.map((item, idx) => {
          const isActive = safeTab === idx;
          const numLabel = projectsData[idx]?.num || `0${idx+1}`;

          return (
            <button
              key={idx}
              onClick={() => setActiveTab(idx)}
              className={`flex items-center gap-2.5 px-4.5 py-2.5 sm:px-5 sm:py-3 rounded-xl md:rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 outline-none ${
                isActive 
                  ? 'bg-primary text-secondary font-bold border border-accent/50 shadow-md' 
                  : 'bg-white/80 text-neutral-600 border border-neutral-200/60 hover:text-primary hover:bg-white hover:border-neutral-300'
              }`}
            >
              <span className={`inline-flex items-center justify-center w-5 h-5 rounded-full text-[10px] font-mono font-bold transition-colors ${
                isActive ? 'bg-accent/20 text-accent border border-accent/40' : 'bg-neutral-200/80 text-neutral-500'
              }`}>
                {numLabel}
              </span>
              <span className="whitespace-nowrap font-bold">{item.systemType}</span>
            </button>
          );
        })}
      </div>

      {/* Spotlight Showcase Hero Cards with Category Introduction & Real Examples */}
      <div className="bg-white rounded-3xl p-6 sm:p-10 md:p-14 border border-neutral-200/90 shadow-xl overflow-hidden relative min-h-[520px]">
        {/* Subtle Background Glow */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl pointer-events-none"></div>

        <AnimatePresence mode="wait">
          <motion.div
            key={safeTab}
            initial={{ opacity: 0, y: 12, scale: 0.99 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -12, scale: 0.99 }}
            transition={{ duration: 0.35, ease: [0.25, 1, 0.5, 1] }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-center relative z-10"
          >
            {/* Left Column: Category Introduction & Project Examples */}
            <div className="lg:col-span-6 flex flex-col justify-between h-full">
              <div>
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <span className="font-serif text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-accent via-amber-600 to-yellow-600 bg-clip-text text-transparent">
                    {currentConfig.num}
                  </span>

                  <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-accent bg-accent/10 border border-accent/20 px-3.5 py-1 rounded-full">
                    <Building2 className="w-3.5 h-3.5" />
                    <span>{currentProject.subtitle}</span>
                  </span>
                </div>

                <h3 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-3 leading-snug">
                  {currentProject.title}
                </h3>

                <p className="text-neutral-600 font-sans text-base md:text-lg leading-relaxed mb-6">
                  {currentProject.desc}
                </p>

                {/* Real Project Examples Showcase Box */}
                {currentProject.projectExamples && (
                  <div className="bg-neutral-50 rounded-2xl p-4 sm:p-5 border border-neutral-200/80 mb-8">
                    <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-primary mb-3">
                      <FolderGit2 className="w-4 h-4 text-accent" />
                      <span>{currentProject.projectExamplesLabel}</span>
                    </div>

                    <div className="flex flex-col gap-2">
                      {currentProject.projectExamples.map((ex, exIdx) => (
                        <div key={exIdx} className="inline-flex items-start gap-2 text-xs sm:text-sm font-semibold text-neutral-800 bg-white px-3 py-2 rounded-xl border border-neutral-200 shadow-2xs">
                          <CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                          <span>{ex}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <div>
                <a 
                  href={currentConfig.link} 
                  className="inline-flex items-center gap-3 bg-primary text-secondary px-7 py-3.5 sm:py-4 rounded-full font-bold text-sm md:text-base hover:bg-neutral-800 transition-all duration-300 shadow-md group"
                >
                  <span>{translationSource.cta}</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform text-accent" />
                </a>
              </div>
            </div>

            {/* Right Column: Large Crisp Screenshot Preview */}
            <div className="lg:col-span-6">
              <div className="rounded-2xl overflow-hidden border border-neutral-200/90 shadow-xl bg-neutral-900 group relative">
                <img 
                  src={currentConfig.image} 
                  alt={currentProject.title} 
                  className="w-full h-auto block object-cover group-hover:scale-105 transition-transform duration-700 ease-smooth" 
                />
                <div className="absolute inset-0 bg-primary/5 group-hover:bg-transparent transition-colors duration-500 pointer-events-none"></div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
