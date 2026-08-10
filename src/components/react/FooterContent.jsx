import React, { useState, useEffect } from 'react';
import { fontTranslations } from '../../utils/translations';

export default function FooterContent() {
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

  const t = fontTranslations[lang]?.footer || fontTranslations.id.footer;

  return (
    <footer className="bg-primary text-secondary py-12 mt-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-center md:text-left">
          <h2 className="font-serif text-2xl font-bold mb-2">Daryas<span className="text-accent">.tech</span></h2>
          <p className="text-neutral-400 text-sm max-w-md">{t.tagline}</p>
        </div>
        
        <div className="flex gap-6">
          <a href="https://github.com/daryassatya" target="_blank" rel="noopener noreferrer" className="text-neutral-400 hover:text-secondary transition-colors duration-300">GitHub</a>
          <a href="https://id.linkedin.com/in/dimas-aryasatya" target="_blank" rel="noopener noreferrer" className="text-neutral-400 hover:text-secondary transition-colors duration-300">LinkedIn</a>
          <a href="https://www.instagram.com/daryas_satya/" target="_blank" rel="noopener noreferrer" className="text-neutral-400 hover:text-secondary transition-colors duration-300">Instagram</a>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 mt-12 pt-8 border-t border-neutral-800 text-center text-sm text-neutral-500">
        &copy; {new Date().getFullYear()} {t.rights}
      </div>
    </footer>
  );
}
