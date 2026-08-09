import React, { useState, useEffect } from 'react';
import { CheckCircle2, ShieldCheck, Zap } from 'lucide-react';
import { fontTranslations } from '../../utils/translations';

export default function ValueProposition() {
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

  const t = fontTranslations[lang]?.value || fontTranslations.id.value;

  return (
    <div className="bg-primary text-secondary rounded-3xl p-8 md:p-14 relative overflow-hidden shadow-2xl">
      <div className="grid md:grid-cols-3 gap-8 relative z-10">
        <div className="flex gap-4 items-start">
          <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center shrink-0 border border-accent/30 text-accent">
            <Zap className="w-6 h-6" />
          </div>
          <div>
            <h4 className="font-serif text-xl font-bold mb-2">{t.v1Title}</h4>
            <p className="text-neutral-300 text-sm leading-relaxed">{t.v1Desc}</p>
          </div>
        </div>

        <div className="flex gap-4 items-start">
          <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center shrink-0 border border-accent/30 text-accent">
            <ShieldCheck className="w-6 h-6" />
          </div>
          <div>
            <h4 className="font-serif text-xl font-bold mb-2">{t.v2Title}</h4>
            <p className="text-neutral-300 text-sm leading-relaxed">{t.v2Desc}</p>
          </div>
        </div>

        <div className="flex gap-4 items-start">
          <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center shrink-0 border border-accent/30 text-accent">
            <CheckCircle2 className="w-6 h-6" />
          </div>
          <div>
            <h4 className="font-serif text-xl font-bold mb-2">{t.v3Title}</h4>
            <p className="text-neutral-300 text-sm leading-relaxed">{t.v3Desc}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
