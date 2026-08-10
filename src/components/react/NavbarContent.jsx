import React, { useState, useEffect } from 'react';
import LanguageSwitcher from './LanguageSwitcher.jsx';
import { fontTranslations } from '../../utils/translations';
import { Menu, X, Home, Layers, FolderGit2, MessageSquare, ArrowRight } from 'lucide-react';

export default function NavbarContent() {
  const [lang, setLang] = useState('id');
  const [currentPath, setCurrentPath] = useState('/');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const updateCurrentPath = () => {
    if (typeof window !== 'undefined') {
      const pathname = window.location.pathname.replace(/\/$/, '') || '/';
      setCurrentPath(pathname);
      setMobileMenuOpen(false);
      document.body.style.overflow = 'unset';
    }
  };

  useEffect(() => {
    updateCurrentPath();

    const saved = localStorage.getItem('user_lang') || 'id';
    setLang(saved);

    const handleLangChange = (e) => {
      setLang(e.detail);
    };

    window.addEventListener('langChange', handleLangChange);
    document.addEventListener('astro:page-load', updateCurrentPath);

    return () => {
      window.removeEventListener('langChange', handleLangChange);
      document.removeEventListener('astro:page-load', updateCurrentPath);
    };
  }, []);

  const nav = fontTranslations[lang]?.nav || fontTranslations.id.nav;

  // Helper to check active route
  const isActive = (path) => {
    const cleanPath = path.replace(/\/$/, '') || '/';
    if (cleanPath === '/') {
      return currentPath === '/';
    }
    return currentPath === cleanPath || currentPath.startsWith(cleanPath + '/');
  };

  const navItems = [
    { href: '/', label: nav.home, icon: Home, isHome: true },
    { href: '/layanan', label: nav.services, icon: Layers },
    { href: '/galeri', label: nav.gallery, icon: FolderGit2 }
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-neutral-200/80 transition-all duration-300 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* Left: Brand Logo */}
        <div className="flex items-center">
          <a href="/" className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-primary flex items-baseline gap-1 group">
            <span>Daryas</span>
            <span className="text-accent font-sans text-xl sm:text-2xl font-black group-hover:scale-105 transition-transform inline-block">.tech</span>
          </a>
        </div>

        {/* Center: Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-2 lg:gap-3 bg-neutral-100/90 p-1.5 rounded-full border border-neutral-200/70 shadow-inner">
          {navItems.map((item, idx) => {
            const active = item.isHome 
              ? (isActive('/') && currentPath !== '/layanan' && currentPath !== '/galeri' && currentPath !== '/order')
              : isActive(item.href);

            return (
              <a 
                key={idx}
                href={item.href} 
                className={`font-sans text-xs lg:text-sm transition-all duration-300 rounded-full px-4 py-2 font-semibold ${
                  active
                    ? 'bg-primary text-secondary font-bold shadow-md' 
                    : 'text-neutral-600 hover:text-primary hover:bg-white/60'
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </div>

        {/* Right: Language Switcher, CTA, & Mobile Menu Toggle */}
        <div className="flex items-center gap-2.5 sm:gap-3.5">
          <LanguageSwitcher />

          {/* Desktop Consultation Button */}
          <a 
            href="/order" 
            className={`hidden sm:inline-flex items-center gap-2 px-4 py-2.5 sm:px-5 sm:py-2.5 rounded-full font-sans text-xs sm:text-sm font-bold transition-all duration-300 shadow-sm whitespace-nowrap ${
              isActive('/order')
                ? 'bg-accent text-primary ring-2 ring-accent/50'
                : 'bg-primary text-secondary hover:bg-neutral-800'
            }`}
          >
            <span>{nav.order}</span>
          </a>

          {/* Mobile Hamburger Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2.5 rounded-xl bg-neutral-100 text-primary hover:bg-neutral-200/80 transition-colors focus:outline-none border border-neutral-200"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5 text-primary" /> : <Menu className="w-5 h-5 text-primary" />}
          </button>
        </div>

      </div>

      {/* Mobile Menu Dropdown with Pure CSS Transitions (Bulletproof during Astro View Transitions) */}
      <div 
        className={`md:hidden bg-white border-b border-neutral-200/90 shadow-xl overflow-hidden transition-all duration-300 ease-in-out ${
          mobileMenuOpen ? 'max-h-96 opacity-100 border-t border-neutral-100' : 'max-h-0 opacity-0 pointer-events-none'
        }`}
      >
        <div className="px-5 pt-3 pb-6 space-y-3">
          <div className="text-[11px] font-mono font-bold uppercase tracking-widest text-neutral-400 px-3 mb-1">
            Navigasi Menu
          </div>

          {navItems.map((item, idx) => {
            const IconComp = item.icon;
            const active = item.isHome 
              ? (isActive('/') && currentPath !== '/layanan' && currentPath !== '/galeri' && currentPath !== '/order')
              : isActive(item.href);

            return (
              <a
                key={idx}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`flex items-center justify-between p-3.5 rounded-2xl text-sm font-bold transition-all duration-200 ${
                  active
                    ? 'bg-primary text-secondary shadow-md'
                    : 'bg-neutral-50 text-neutral-700 hover:bg-neutral-100'
                }`}
              >
                <div className="flex items-center gap-3">
                  <IconComp className={`w-4 h-4 ${active ? 'text-accent' : 'text-neutral-500'}`} />
                  <span>{item.label}</span>
                </div>
                <ArrowRight className={`w-4 h-4 ${active ? 'text-accent' : 'text-neutral-400'}`} />
              </a>
            );
          })}

          <div className="pt-2">
            <a
              href="/order"
              onClick={() => setMobileMenuOpen(false)}
              className={`flex items-center justify-between p-4 rounded-2xl text-sm font-bold transition-all duration-200 ${
                isActive('/order')
                  ? 'bg-accent text-primary shadow-md'
                  : 'bg-accent text-primary hover:bg-yellow-400 shadow-sm'
              }`}
            >
              <div className="flex items-center gap-3">
                <MessageSquare className="w-4 h-4 text-primary" />
                <span>{nav.order}</span>
              </div>
              <ArrowRight className="w-4 h-4 text-primary" />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
