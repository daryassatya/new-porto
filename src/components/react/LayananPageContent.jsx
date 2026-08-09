import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import ServiceTimeline from './ServiceTimeline.jsx';
import { ArrowRight, WalletCards } from 'lucide-react';

export default function LayananPageContent() {
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

  const header = isEn ? {
    badge: "How It Works",
    title: "Project Workflow",
    desc: "From our first chat to a live, ready-to-use website. Everything is transparent, structured, and completely hassle-free."
  } : {
    badge: "Cara Kerja",
    title: "Proses Pengerjaan Project",
    desc: "Dari ngobrol santai sampai website siap pakai. Semuanya transparan, terstruktur, dan pastinya anti-ribet."
  };

  const steps = isEn ? [
    {
      id: 1,
      number: "1",
      title: "Initial Discussion & Requirements",
      description: "We’ll start with a casual chat to understand your business needs. My goal is to find the most efficient solution that perfectly aligns with your goals and your budget."
    },
    {
      id: 2,
      number: "2",
      title: "UI/UX Design",
      description: "Bringing your website's visual identity to life. The focus here is on creating a clean, modern design that is intuitive for both your customers and your team."
    },
    {
      id: 3,
      number: "3",
      title: "Development & Integration",
      description: "Turning the design into a fully functional website. I build with clean code to ensure robust security, lightning-fast loading times, and smooth-running features."
    },
    {
      id: 4,
      number: "4",
      title: "Testing & Launch",
      description: "Before going live, the website undergoes comprehensive testing. I make sure everything is completely bug-free and fully optimized for the public."
    },
    {
      id: 5,
      number: "5",
      title: "Ongoing Maintenance & Support",
      description: "Once the site is live, I won't leave you hanging. I’ll be on standby to keep the servers stable, run regular updates, and quickly resolve any technical issues that might pop up."
    }
  ] : [
    {
      id: 1,
      number: "1",
      title: "Diskusi & Analisis Kebutuhan",
      description: "Kita mulai dengan ngobrol santai untuk membedah kebutuhan bisnis Anda. Tujuannya mencari solusi yang paling efisien, tepat sasaran, dan tentu saja pas dengan budget."
    },
    {
      id: 2,
      number: "2",
      title: "Desain Tampilan (UI/UX)",
      description: "Tahap merancang wajah website Anda. Fokus utamanya adalah membuat desain yang bersih, rapi, dan gampang dioperasikan—baik oleh pengunjung maupun tim Anda sendiri."
    },
    {
      id: 3,
      number: "3",
      title: "Pengembangan & Integrasi (Koding)",
      description: "Saatnya mengubah desain menjadi website sungguhan. Kode ditulis dengan standar keamanan tinggi agar website punya performa cepat, aman, dan semua fiturnya berjalan mulus."
    },
    {
      id: 4,
      number: "4",
      title: "Testing & Peluncuran",
      description: "Sebelum benar-benar rilis, website akan diuji coba secara menyeluruh. Saya pastikan semuanya aman dari bug atau error agar siap menyambut pengunjung pertama Anda."
    },
    {
      id: 5,
      number: "5",
      title: "Perawatan & Dukungan Standby",
      description: "Setelah website live, Anda tidak saya tinggal begitu saja. Saya siap standby menjaga kestabilan server, melakukan update sistem, dan gerak cepat kalau ada kendala teknis."
    }
  ];

  const pricing = isEn ? {
    title: "Transparent Fixed Pricing",
    desc: "Upfront fixed scope and pricing with zero hidden costs or surprise milestone fees.",
    cta: "WhatsApp Inquiry"
  } : {
    title: "Hasil Rapi, Biaya Sesuai Kesepakatan",
    desc: "Harga yang disepakati di awal sudah mencakup semua proses pengerjaan sampai siap pakai. Tanpa biaya tambahan tersembunyi di tengah jalan.",
    cta: "Konsultasi via WhatsApp"
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.25, 1, 0.5, 1] }}
    >
      {/* Header Section */}
      <section className="pt-32 pb-16 px-6 lg:px-8 text-center max-w-4xl mx-auto">
        <span className="text-accent text-xs font-bold uppercase tracking-widest bg-accent/10 px-4 py-1.5 rounded-full border border-accent/20">
          {header.badge}
        </span>
        <h1 className="font-serif text-4xl md:text-5xl font-bold text-primary mt-4 mb-6">{header.title}</h1>
        <p className="font-sans text-lg text-neutral-600 leading-relaxed">
          {header.desc}
        </p>
      </section>

      {/* Section Divider */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="border-t border-neutral-200/70"></div>
      </div>

      {/* Timeline Section */}
      <section className="py-20 px-6 lg:px-8 max-w-7xl mx-auto">
        <ServiceTimeline steps={steps} />
      </section>

      {/* Section Divider */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="border-t border-neutral-200/70"></div>
      </div>

      {/* Highlight Pricing Section */}
      <section className="py-24 px-6 lg:px-8">
        <div className="max-w-4xl mx-auto bg-primary rounded-3xl p-8 md:p-12 text-center text-secondary relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
          
          <div className="w-16 h-16 bg-accent/20 rounded-2xl flex items-center justify-center mx-auto mb-8 border border-accent/30 relative z-10">
            <WalletCards className="w-8 h-8 text-accent" />
          </div>
          
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6 relative z-10">{pricing.title}</h2>
          <p className="text-neutral-300 text-lg md:text-xl leading-relaxed mb-10 max-w-2xl mx-auto font-sans relative z-10">
            {pricing.desc}
          </p>

          <a href="/order" className="inline-flex items-center gap-2 bg-accent text-primary px-8 py-4 rounded-full font-bold transition-all duration-400 hover:bg-white hover:-translate-y-0.5 relative z-10">
            <span>{pricing.cta}</span>
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </section>
    </motion.div>
  );
}
