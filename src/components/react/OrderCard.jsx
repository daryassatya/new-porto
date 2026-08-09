import React from 'react';
import { motion } from 'framer-motion';
import { Copy, PenTool } from 'lucide-react';

export default function OrderCard({ selectedType, onSelectionChange }) {
  const cards = [
    {
      id: 'existing',
      title: 'Gunakan Project Existing',
      description: 'Pilih dan sesuaikan dari portofolio yang sudah ada untuk mempercepat proses.',
      icon: <Copy className="w-6 h-6" />
    },
    {
      id: 'custom',
      title: 'Buat Custom Baru',
      description: 'Membangun solusi unik dari awal khusus untuk kebutuhan spesifik bisnis Anda.',
      icon: <PenTool className="w-6 h-6" />
    }
  ];

  return (
    <div className="grid md:grid-cols-2 gap-4 mb-8">
      {cards.map(card => {
        const isSelected = selectedType === card.id;
        return (
          <motion.div
            key={card.id}
            onClick={() => onSelectionChange(card.id)}
            className={`relative p-6 rounded-2xl cursor-pointer border-2 transition-colors duration-400 ${
              isSelected ? 'border-accent bg-accent/5' : 'border-neutral-200/60 bg-secondary hover:border-accent/50'
            }`}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-colors duration-400 ${
              isSelected ? 'bg-accent text-primary' : 'bg-neutral-100 text-neutral-500'
            }`}>
              {card.icon}
            </div>
            <h3 className="font-serif text-xl font-bold text-primary mb-2">{card.title}</h3>
            <p className="text-neutral-600 font-sans text-sm leading-relaxed">{card.description}</p>
            
            {isSelected && (
              <motion.div 
                layoutId="outline"
                className="absolute inset-0 border-2 border-accent rounded-2xl"
                initial={false}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              />
            )}
          </motion.div>
        );
      })}
    </div>
  );
}
