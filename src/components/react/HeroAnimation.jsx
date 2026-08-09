import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, ChevronDown, Sparkles } from 'lucide-react';
import { fontTranslations } from '../../utils/translations';

function SavanaTopographyCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    let width = (canvas.width = canvas.parentElement.offsetWidth);
    let height = (canvas.height = canvas.parentElement.offsetHeight);

    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.offsetWidth;
      height = canvas.height = canvas.parentElement.offsetHeight;
    };
    window.addEventListener('resize', handleResize);

    const mouse = { x: width / 2, y: height / 2, targetX: width / 2, targetY: height / 2 };

    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouse.targetX = e.clientX - rect.left;
      mouse.targetY = e.clientY - rect.top;
    };

    const parent = canvas.parentElement;
    parent.addEventListener('mousemove', handleMouseMove);

    let time = 0;
    const numDunes = 18;

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      mouse.x += (mouse.targetX - mouse.x) * 0.05;
      mouse.y += (mouse.targetY - mouse.y) * 0.05;

      time += 0.008;

      for (let i = 0; i < numDunes; i++) {
        ctx.beginPath();
        const baseHeight = (height * 0.15) + (i / numDunes) * (height * 0.8);
        
        const steps = 70;
        const dx = width / steps;

        for (let j = 0; j <= steps; j++) {
          const x = j * dx;
          
          const duneWave1 = Math.sin(time + j * 0.06 + i * 0.4) * 22;
          const duneWave2 = Math.cos(time * 0.7 - j * 0.03 + i * 0.2) * 14;
          
          const distToMouse = Math.hypot(x - mouse.x, baseHeight - mouse.y);
          const mouseEffect = Math.max(0, 1 - distToMouse / 220);
          const elevation = Math.sin(distToMouse * 0.03 - time * 3) * mouseEffect * 30;

          const y = baseHeight + duneWave1 + duneWave2 - elevation;

          if (j === 0) {
            ctx.moveTo(x, y);
          } else {
            ctx.lineTo(x, y);
          }
        }

        const isHighlight = i % 4 === 0;
        ctx.lineWidth = isHighlight ? 1.6 : 1.0;
        
        const alpha = 0.08 + (i / numDunes) * 0.14;
        ctx.strokeStyle = isHighlight 
          ? `rgba(196, 139, 76, ${alpha + 0.12})`
          : `rgba(165, 120, 68, ${alpha})`;

        ctx.stroke();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      if (parent) {
        parent.removeEventListener('mousemove', handleMouseMove);
      }
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none z-0" />;
}

export default function HeroAnimation() {
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

  const t = fontTranslations[lang]?.hero || fontTranslations.id.hero;

  const easing = [0.25, 1, 0.5, 1];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: easing },
    },
  };

  return (
    <div className="relative overflow-hidden min-h-[calc(100vh-5rem)] flex flex-col justify-between group">
      <SavanaTopographyCanvas />

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[550px] bg-gradient-to-tr from-accent/20 via-amber-100/25 to-transparent blur-[140px] rounded-full pointer-events-none z-0"></div>

      <div></div>

      <motion.section 
        className="py-12 md:py-20 px-6 lg:px-8 max-w-5xl mx-auto flex flex-col items-center text-center my-auto relative z-20"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Top Badge */}
        <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/90 backdrop-blur-sm border border-neutral-200/80 shadow-md text-xs md:text-sm font-semibold text-primary mb-6 hover:border-accent/60 transition-colors">
          <Sparkles className="w-4 h-4 text-accent animate-pulse" />
          <span>{t.badge}</span>
        </motion.div>

        {/* Headline */}
        <motion.h1 
          className="font-serif text-4xl sm:text-5xl md:text-7xl font-bold text-primary mb-6 leading-[1.15] tracking-tight"
          variants={itemVariants}
        >
          {t.headline}
        </motion.h1>
        
        {/* Sub-Headline */}
        <motion.p 
          className="font-sans text-base sm:text-lg md:text-xl text-neutral-600 max-w-3xl mb-10 leading-relaxed"
          variants={itemVariants}
        >
          {t.subHeadline}
        </motion.p>
        
        {/* CTA Buttons */}
        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center gap-4 mb-14">
          <a 
            href="/layanan"
            className="inline-flex items-center gap-2 bg-primary text-secondary px-8 py-4 rounded-full font-semibold transition-all duration-400 hover:bg-neutral-800 hover:shadow-xl hover:-translate-y-0.5"
          >
            {t.ctaPrimary}
            <ArrowRight className="w-5 h-5" />
          </a>
          <a 
            href="/order"
            className="inline-flex items-center gap-2 bg-white text-primary border border-neutral-300 px-8 py-4 rounded-full font-semibold transition-all duration-400 hover:bg-neutral-50 hover:border-neutral-400"
          >
            {t.ctaSecondary}
          </a>
        </motion.div>

        {/* Feature Pills */}
        <motion.div variants={itemVariants} className="flex flex-wrap items-center justify-center gap-6 text-xs md:text-sm text-neutral-600 font-medium">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-accent" />
            <span>{t.pill1}</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-accent" />
            <span>{t.pill2}</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-accent" />
            <span>{t.pill3}</span>
          </div>
        </motion.div>
      </motion.section>

      {/* Scroll Down Indicator */}
      <div className="pb-8 flex flex-col items-center text-neutral-400 text-xs tracking-widest uppercase font-medium relative z-20">
        <span className="mb-2 text-[10px]">Scroll Down</span>
        <motion.div 
          animate={{ y: [0, 8, 0] }} 
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="w-5 h-5 text-accent" />
        </motion.div>
      </div>
    </div>
  );
}
