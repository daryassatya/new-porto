import React, { useState, useEffect } from 'react';
import { ArrowRight, Building2, Layers, CheckCircle2 } from 'lucide-react';
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
        ? ["Preventive Maintenance", "Technician Work Order Logging", "Real-Time Asset Health"]
        : ["Penjadwalan Maintenance", "Pencatatan Work Order", "Monitoring Aset Real-Time"]
    },
    {
      num: "02",
      badge: "ERP & MRP Systems",
      image: "/images/hero-showcase.png",
      link: "/galeri",
      highlights: lang === 'en'
        ? ["Warehouse Inventory Control", "Production Schedule Planning", "Operational Cash-Flow Logging"]
        : ["Manajemen Stok Gudang", "Jadwal Produksi Pabrik", "Otomatisasi Laporan Keuangan"]
    },
    {
      num: "03",
      badge: "Live Traffic Portal",
      image: "/images/mudik-lebaran.webp",
      link: "/galeri",
      highlights: lang === 'en'
        ? ["High Concurrency Architecture", "Real-Time Transport Analytics", "National Ministry Portal"]
        : ["Arsitektur High-Traffic", "Data Transportasi Real-Time", "Portal Kementerian RI"]
    },
    {
      num: "04",
      badge: "Assessment Center",
      image: "/images/assessment-indonesia.webp",
      link: "/galeri",
      highlights: lang === 'en'
        ? ["Encrypted Online Psychometrics", "Automated Evaluation Scoring", "HR Competency Hub"]
        : ["Psikotes Online Terenkripsi", "Evaluasi Peserta Otomatis", "Manajemen SDM Instansi"]
    },
    {
      num: "05",
      badge: "AtoN Reporting",
      image: "/images/atonrep.webp",
      link: "/galeri",
      highlights: lang === 'en'
        ? ["Lighthouse Beacon Reliability", "Sea Transport Audit Trail", "Maritime Safety Portal"]
        : ["Keandalan Menara Suar", "Pelaporan Ditjen Hubla", "Keamanan Navigasi Laut"]
    }
  ];

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

      {/* Interactive System Type Tab Switcher Bar */}
      <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 mb-10 md:mb-14">
        {translationSource.items.map((item, idx) => (
          <button
            key={idx}
            onClick={() => setActiveTab(idx)}
            className={`flex items-center gap-2 px-4 py-2.5 sm:px-5 sm:py-3 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 ${
              activeTab === idx
                ? 'bg-primary text-secondary border border-accent/40 shadow-lg scale-105'
                : 'bg-white text-neutral-600 border border-neutral-200/80 hover:border-neutral-400 hover:bg-neutral-50'
            }`}
          >
            <span className={`font-serif font-bold text-xs sm:text-sm ${activeTab === idx ? 'text-accent' : 'text-neutral-400'}`}>
              {projectsData[idx]?.num || `0${idx+1}`}
            </span>
            <span className="whitespace-nowrap font-bold">{item.systemType}</span>
          </button>
        ))}
      </div>

      {/* Spotlight Showcase Hero Cards (100% Stable CSS Tab Switching) */}
      <div className="bg-white rounded-3xl p-6 sm:p-10 md:p-14 border border-neutral-200/90 shadow-xl overflow-hidden relative">
        {/* Subtle Background Glow */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl pointer-events-none"></div>

        {translationSource.items.map((currentProject, idx) => {
          const currentConfig = projectsData[idx] || projectsData[0];
          const isSelected = activeTab === idx;

          return (
            <div 
              key={idx}
              className={`transition-all duration-500 ${
                isSelected ? 'block opacity-100 translate-y-0' : 'hidden opacity-0 translate-y-4'
              }`}
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-center relative z-10">
                {/* Left Column: Project System Info */}
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

                    <h3 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-4 leading-snug">
                      {currentProject.title}
                    </h3>

                    <p className="text-neutral-600 font-sans text-base md:text-lg leading-relaxed mb-6">
                      {currentProject.desc}
                    </p>

                    {/* Key Highlights Pill Badge List */}
                    <div className="flex flex-wrap gap-2 mb-8">
                      {currentConfig.highlights.map((h, hIdx) => (
                        <div key={hIdx} className="inline-flex items-center gap-1.5 bg-neutral-100/90 text-neutral-700 text-xs font-semibold px-3 py-1.5 rounded-lg border border-neutral-200">
                          <CheckCircle2 className="w-3.5 h-3.5 text-accent shrink-0" />
                          <span>{h}</span>
                        </div>
                      ))}
                    </div>
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
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
