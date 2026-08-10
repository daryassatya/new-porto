import React, { useState, useEffect } from 'react';
import { Database, Code2, Server, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { InstagramIcon, GithubIcon, LinkedinIcon } from './SocialIcons.jsx';
import { fontTranslations } from '../../utils/translations';

export default function StatsExperienceCounter() {
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

  const t = fontTranslations[lang]?.stats || fontTranslations.id.stats;

  const stats = [
    { number: "5+", label: t.exp },
    { number: "25+", label: t.projects },
    { number: "100%", label: t.onTime },
    { number: "24/7", label: t.support },
  ];

  const icons = [
    <Database className="w-5 h-5 text-accent" />,
    <Code2 className="w-5 h-5 text-accent" />,
    <Server className="w-5 h-5 text-accent" />,
    <ShieldCheck className="w-5 h-5 text-accent" />
  ];

  const techsList = [
    ["Laravel", "Livewire", "PostgreSQL"],
    ["React", "Astro", "Tailwind", "Supabase"],
    ["AWS", "Supabase", "Node.js", "Laravel", "MySQL", "PostgreSQL", "REST API"],
    ["Daily Backup", "24/7 Uptime", "Security"]
  ];

  return (
    <section className="py-20 px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="bg-white rounded-3xl p-8 md:p-12 border border-neutral-200/80 shadow-lg">
        <div className="grid lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Left Column: Lead Developer Profile */}
          <div className="lg:col-span-5 border-b lg:border-b-0 lg:border-r border-neutral-200/80 pb-10 lg:pb-0 lg:pr-10 flex flex-col justify-between">
            <div>
              <div className="relative rounded-2xl overflow-hidden mb-8 border border-neutral-200 aspect-[3/4] bg-neutral-900 shadow-md group">
                <img 
                  src="/images/profile-daryas.webp" 
                  alt="Dimas Aryasatya - Lead Developer" 
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-smooth"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/95 via-primary/30 to-transparent pointer-events-none"></div>
                
                {/* Profile Badge Info & Socials */}
                <div className="absolute bottom-6 left-6 right-6 text-white flex flex-col justify-between">
                  <div>
                    <span className="text-xs font-mono font-bold uppercase tracking-widest text-accent mb-1 block">Web Developer & IT Consultant</span>
                    <h3 className="font-serif text-2xl font-bold mb-1">Dimas Aryasatya</h3>
                    <p className="text-neutral-300 text-xs font-sans mb-4">Spesialis Sistem Internal & Web Retail</p>
                  </div>

                  {/* Social Media Link Badges */}
                  <div className="flex items-center gap-2.5 pt-3 border-t border-white/15">
                    <a 
                      href="https://www.instagram.com/daryas_satya/" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="inline-flex items-center gap-1.5 bg-white/10 hover:bg-accent hover:text-primary backdrop-blur-md text-white px-3 py-1.5 rounded-full text-xs font-semibold border border-white/20 transition-all duration-300"
                    >
                      <InstagramIcon className="w-3.5 h-3.5" />
                      <span>@daryas_satya</span>
                    </a>

                    <a 
                      href="https://github.com/daryassatya" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="inline-flex items-center justify-center p-2 bg-white/10 hover:bg-accent hover:text-primary backdrop-blur-md text-white rounded-full border border-white/20 transition-all duration-300"
                      title="GitHub"
                    >
                      <GithubIcon className="w-3.5 h-3.5" />
                    </a>

                    <a 
                      href="https://id.linkedin.com/in/dimas-aryasatya" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="inline-flex items-center justify-center p-2 bg-white/10 hover:bg-accent hover:text-primary backdrop-blur-md text-white rounded-full border border-white/20 transition-all duration-300"
                      title="LinkedIn"
                    >
                      <LinkedinIcon className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </div>

              <div className="flex items-baseline gap-4 mb-4">
                <span className="font-serif text-5xl font-extrabold text-primary tracking-tight">5+</span>
                <span className="font-serif text-xl font-bold text-neutral-700 leading-tight">{t.years}</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 pt-6 border-t border-neutral-100">
              {stats.slice(1).map((stat, idx) => (
                <div key={idx}>
                  <p className="font-serif text-xl font-bold text-primary">{stat.number}</p>
                  <p className="text-xs font-semibold text-neutral-500 uppercase tracking-wider mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Core Tech Stack & Capabilities */}
          <div className="lg:col-span-7 flex flex-col justify-between pt-4 lg:pt-0">
            <div>
              <div className="flex items-center justify-between mb-6">
                <div>
                  <span className="text-xs font-bold text-accent uppercase tracking-widest bg-accent/10 px-3 py-1 rounded-full border border-accent/20">{t.badge}</span>
                  <h3 className="font-serif text-2xl md:text-3xl font-bold text-primary mt-2">{t.headline}</h3>
                </div>
              </div>

              <p className="text-neutral-600 font-sans text-sm md:text-base leading-relaxed mb-8">
                {t.subHeadline}
              </p>

              <div className="grid sm:grid-cols-2 gap-5">
                {t.cards.map((item, idx) => (
                  <div key={idx} className="p-5 rounded-2xl bg-neutral-50 border border-neutral-200/80 hover:border-accent/50 hover:bg-white transition-all duration-300 shadow-xs flex flex-col justify-between">
                    <div>
                      <div className="w-10 h-10 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center mb-3">
                        {icons[idx]}
                      </div>
                      <h4 className="font-serif font-bold text-primary text-base mb-1.5">{item.title}</h4>
                      <p className="text-neutral-600 text-xs leading-relaxed mb-4">{item.desc}</p>
                    </div>

                    <div className="flex flex-wrap gap-1.5 pt-3 border-t border-neutral-200/60">
                      {techsList[idx].map((tech, tIdx) => (
                        <span key={tIdx} className="text-[10px] font-semibold text-neutral-600 bg-white px-2 py-0.5 rounded border border-neutral-200">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Trust Badge */}
            <div className="mt-8 p-4 rounded-2xl bg-accent/5 border border-accent/20 flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5 text-accent shrink-0" />
              <p className="text-xs font-medium text-neutral-700">
                {t.bottomBadge}
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
