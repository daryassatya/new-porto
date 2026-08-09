import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import OrderCard from './OrderCard';
import { Send } from 'lucide-react';

export default function OrderForm({ projects, initialProject }) {
  const [selectedType, setSelectedType] = useState(initialProject ? 'existing' : null);
  
  const [formData, setFormData] = useState({
    projectId: initialProject || '',
    name: '',
    contact: '',
    description: ''
  });

  // Fallback for static generation where query strings aren't available at build time
  useEffect(() => {
    if (!initialProject && typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      const proj = params.get('project');
      if (proj && projects.find(p => p.id === proj)) {
        setSelectedType('existing');
        setFormData(prev => ({ ...prev, projectId: proj }));
      }
    }
  }, [initialProject, projects]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const isFormValid = () => {
    if (!selectedType) return false;
    if (!formData.name.trim() || !formData.contact.trim()) return false;
    if (selectedType === 'existing' && !formData.projectId) return false;
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isFormValid()) return;

    let message = "";
    if (selectedType === 'custom') {
      message = `Halo Daryas, saya tertarik untuk membangun website custom untuk bisnis saya. Saya butuh bantuan dari tahap ide hingga maintenance. Bisa kita diskusikan lebih lanjut?\n\nNama: ${formData.name}\nKontak: ${formData.contact}\nKebutuhan: ${formData.description}`;
    } else {
      const selectedProject = projects.find(p => p.id === formData.projectId);
      const projectName = selectedProject ? selectedProject.name : formData.projectId;
      message = `Halo Daryas, saya melihat project *${projectName}* di portofolio Anda dan tertarik untuk menggunakannya/menyesuaikannya untuk bisnis saya. Bagaimana proses pemesanannya?\n\nNama: ${formData.name}\nKontak: ${formData.contact}`;
    }

    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/628888438922?text=${encodedMessage}`, '_blank');
  };

  return (
    <div className="max-w-2xl mx-auto">
      <OrderCard 
        selectedType={selectedType} 
        onSelectionChange={(type) => {
          setSelectedType(type);
          if (type === 'custom') setFormData({ ...formData, projectId: '' });
        }} 
      />

      <AnimatePresence mode="wait">
        {selectedType && (
          <motion.form 
            key={selectedType}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            onSubmit={handleSubmit}
            className="bg-secondary p-6 md:p-8 rounded-2xl border border-neutral-200/60 shadow-sm space-y-6"
          >
            {selectedType === 'existing' && (
              <div>
                <label className="block text-sm font-medium text-primary mb-2">Pilih Project</label>
                <select 
                  name="projectId"
                  value={formData.projectId}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-neutral-200 bg-neutral-50 text-primary focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
                >
                  <option value="">-- Pilih Project dari Portofolio --</option>
                  {projects.map(p => (
                    <option key={p.id} value={p.id}>{p.name}</option>
                  ))}
                </select>
              </div>
            )}

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-primary mb-2">Nama Anda / Perusahaan</label>
                <input 
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  className="w-full px-4 py-3 rounded-xl border border-neutral-200 bg-neutral-50 text-primary focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-primary mb-2">Nomor HP / WhatsApp</label>
                <input 
                  type="text"
                  name="contact"
                  value={formData.contact}
                  onChange={handleChange}
                  placeholder="08123456789"
                  className="w-full px-4 py-3 rounded-xl border border-neutral-200 bg-neutral-50 text-primary focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
                />
              </div>
            </div>

            {selectedType === 'custom' && (
              <div>
                <label className="block text-sm font-medium text-primary mb-2">Ringkasan Kebutuhan (Opsional)</label>
                <textarea 
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  placeholder="Ceritakan sedikit tentang ide website Anda..."
                  rows="3"
                  className="w-full px-4 py-3 rounded-xl border border-neutral-200 bg-neutral-50 text-primary focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all resize-none"
                ></textarea>
              </div>
            )}

            <button 
              type="submit"
              disabled={!isFormValid()}
              className="w-full flex items-center justify-center gap-2 bg-primary text-secondary px-6 py-4 rounded-xl font-medium transition-all duration-400 hover:bg-neutral-800 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <Send className="w-5 h-5" />
              Kirim via WhatsApp
            </button>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}
