import React, { useState, useEffect } from 'react';
import LanguageSwitcher from './LanguageSwitcher.jsx';
import { fontTranslations } from '../../utils/translations';

export default function NavbarContent() {
  const [lang, setLang] = useState('id');
  const [currentPath, setCurrentPath] = useState('/');

  useEffect(() => {
    // Detect active path
    if (typeof window !== 'undefined') {
      setCurrentPath(window.location.pathname);
    }

    const saved = localStorage.getItem('user_lang') || 'id';
    setLang(saved);

    const handleLangChange = (e) => {
      setLang(e.detail);
    };

    window.addEventListener('langChange', handleLangChange);
    return () => window.removeEventListener('langChange', handleLangChange);
  }, []);

  const nav = fontTranslations[lang]?.nav || fontTranslations.id.nav;

  // Helper to check active route
  const isActive = (path) => {
    if (path === '/') {
      return currentPath === '/' || currentPath === '';
    }
    return currentPath.startsWith(path);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/85 backdrop-blur-md border-b border-neutral-200/80 transition-all duration-300 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 grid grid-cols-2 md:grid-cols-3 items-center">
        
        {/* Left: Brand Logo */}
        <div className="justify-self-start shrink-0">
          <a href="/" className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-primary flex items-center gap-1 group">
            <span>Daryas</span>
            <span className="text-accent font-sans text-xl sm:text-2xl font-black group-hover:scale-105 transition-transform inline-block">.tech</span>
          </a>
        </div>

        {/* Center: Navigation Links with Active Background Pill */}
        <div className="hidden md:flex justify-self-center items-center gap-2 lg:gap-3 bg-neutral-100/90 p-1.5 rounded-full border border-neutral-200/70 shadow-inner">
          <a 
            href="/" 
            className={`font-sans text-xs lg:text-sm transition-all duration-300 rounded-full px-4 py-2 ${
              isActive('/') && currentPath !== '/layanan' && currentPath !== '/galeri' && currentPath !== '/order'
                ? 'bg-primary text-secondary font-bold shadow-md scale-105' 
                : 'text-neutral-600 hover:text-primary font-semibold hover:bg-white/60'
            }`}
          >
            {nav.home}
          </a>

          <a 
            href="/layanan" 
            className={`font-sans text-xs lg:text-sm transition-all duration-300 rounded-full px-4 py-2 ${
              isActive('/layanan') 
                ? 'bg-primary text-secondary font-bold shadow-md scale-105' 
                : 'text-neutral-600 hover:text-primary font-semibold hover:bg-white/60'
            }`}
          >
            {nav.services}
          </a>

          <a 
            href="/galeri" 
            className={`font-sans text-xs lg:text-sm transition-all duration-300 rounded-full px-4 py-2 ${
              isActive('/galeri') 
                ? 'bg-primary text-secondary font-bold shadow-md scale-105' 
                : 'text-neutral-600 hover:text-primary font-semibold hover:bg-white/60'
            }`}
          >
            {nav.gallery}
          </a>
        </div>

        {/* Right: Language Switcher & CTA Button */}
        <div className="justify-self-end flex items-center gap-2 sm:gap-3 shrink-0">
          <LanguageSwitcher />

          <a 
            href="/order" 
            className={`px-3.5 py-2 sm:px-5 sm:py-2.5 rounded-full font-sans text-xs sm:text-sm font-bold transition-all duration-300 shadow-sm whitespace-nowrap ${
              isActive('/order')
                ? 'bg-accent text-primary ring-2 ring-accent/50 scale-105'
                : 'bg-primary text-secondary hover:bg-neutral-800'
            }`}
          >
            {nav.order}
          </a>
        </div>

      </div>
    </nav>
  );
}
