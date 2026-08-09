import React from 'react';
import { motion } from 'framer-motion';

export default function ServiceTimeline({ steps }) {
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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: easing },
    },
  };

  return (
    <motion.div 
      className="max-w-4xl mx-auto space-y-12"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
    >
      {steps.map((step, index) => (
        <motion.div 
          key={step.id || index}
          className="relative flex gap-6 md:gap-10"
          variants={itemVariants}
        >
          {/* Timeline Line */}
          {index !== steps.length - 1 && (
            <div className="absolute left-[1.15rem] top-12 bottom-[-3rem] w-px bg-neutral-200" />
          )}
          
          {/* Number Circle */}
          <div className="shrink-0 w-10 h-10 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center relative z-10 mt-1">
            <span className="font-serif font-bold text-accent">{step.number}</span>
          </div>

          {/* Content */}
          <div className="bg-secondary flex-grow p-6 md:p-8 rounded-2xl border border-neutral-200/60 shadow-sm">
            <h3 className="font-serif text-2xl font-bold text-primary mb-3">{step.title}</h3>
            <p className="text-neutral-600 leading-relaxed font-sans">{step.description}</p>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
}
