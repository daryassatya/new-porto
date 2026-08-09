import React, { useState, useEffect } from 'react';
import { Globe } from 'lucide-react';

export default function LanguageSwitcher() {
  const [lang, setLang] = useState('id');

  useEffect(() => {
    // 1. Check localStorage first
    const savedLang = localStorage.getItem('user_lang');
    if (savedLang) {
      setLang(savedLang);
      document.documentElement.lang = savedLang;
      return;
    }

    // 2. Fallback to navigator.language
    const browserLang = (navigator.language || navigator.userLanguage || '').toLowerCase();
    let initialLang = browserLang.startsWith('id') ? 'id' : 'en';

    // 3. Fallback to IP geolocation detection
    fetch('https://ipapi.co/json/')
      .then((res) => res.json())
      .then((data) => {
        if (data && data.country_code) {
          const ipLang = data.country_code === 'ID' ? 'id' : 'en';
          setLang(ipLang);
          localStorage.setItem('user_lang', ipLang);
          document.documentElement.lang = ipLang;
          window.dispatchEvent(new CustomEvent('langChange', { detail: ipLang }));
        }
      })
      .catch(() => {
        // Fallback to browser lang
        setLang(initialLang);
        localStorage.setItem('user_lang', initialLang);
        document.documentElement.lang = initialLang;
      });
  }, []);

  const toggleLanguage = (newLang) => {
    setLang(newLang);
    localStorage.setItem('user_lang', newLang);
    document.documentElement.lang = newLang;
    window.dispatchEvent(new CustomEvent('langChange', { detail: newLang }));
  };

  return (
    <div className="flex items-center gap-1 bg-neutral-100 p-1 rounded-full border border-neutral-200 text-xs font-semibold">
      <Globe className="w-3.5 h-3.5 text-neutral-500 ml-1.5" />
      <button
        onClick={() => toggleLanguage('id')}
        className={`px-2 py-1 rounded-full transition-colors ${
          lang === 'id' 
            ? 'bg-primary text-secondary font-bold shadow-xs' 
            : 'text-neutral-500 hover:text-primary'
        }`}
      >
        ID
      </button>
      <span className="text-neutral-300">|</span>
      <button
        onClick={() => toggleLanguage('en')}
        className={`px-2 py-1 rounded-full transition-colors ${
          lang === 'en' 
            ? 'bg-primary text-secondary font-bold shadow-xs' 
            : 'text-neutral-500 hover:text-primary'
        }`}
      >
        EN
      </button>
    </div>
  );
}
