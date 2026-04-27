import React, { useState } from 'react';
import { MessageCircle, Mail, Sparkles } from 'lucide-react';
import GlassCard from './ui/GlassCard';
import Button from './ui/Button';
import { ServiceType } from '../types';

const QuoteForm: React.FC = () => {
  const [serviceType, setServiceType] = useState<ServiceType | ''>('');
  const [details, setDetails] = useState('');
  const [name, setName] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!serviceType) return;

    const phone = '919509100704';
    const message = `*[NEW INQUIRY] ${serviceType}${name ? ` — ${name}` : ''}*\n\nName: ${name || 'Not provided'}\nService: ${serviceType}\n\nGoals & Details:\n${details || 'No details provided.'}\n\n--- Sent via CloudOps Desk Website ---`;

    const whatsappUrl = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="quote" className="py-16 relative">
      <div className="max-w-4xl mx-auto px-6">
        <GlassCard className="p-5 sm:p-8 md:p-12 relative overflow-hidden bg-white/40 dark:bg-slate-900/40 backdrop-blur-3xl border-white/20 shadow-2xl" hoverEffect={false}>
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary-500/10 rounded-full blur-[80px] -z-10" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent-500/10 rounded-full blur-[80px] -z-10" />

          <div className="text-center mb-8 sm:mb-12">
            <div className="inline-flex items-center justify-center p-4 bg-primary-500/10 rounded-2xl mb-6">
              <Sparkles className="w-8 h-8 text-primary-500" />
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white tracking-tight mb-4">Start Your Transformation</h2>
            <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg font-medium max-w-xl mx-auto">
              Tell us your goals and we'll reach out within 12 hours with a personalized roadmap — no obligation.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <label className="text-xs font-black uppercase tracking-widest text-slate-500 dark:text-slate-400 ml-1">Your Name</label>
                <input
                  type="text"
                  placeholder="e.g. Rahul Sharma"
                  className="w-full bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-2xl px-4 sm:px-6 py-3 sm:py-4 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:border-primary-500/50 focus:ring-4 focus:ring-primary-500/10 transition-all font-medium"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="space-y-3">
                <label className="text-xs font-black uppercase tracking-widest text-slate-500 dark:text-slate-400 ml-1">Service You Need</label>
                <div className="relative">
                  <select
                    className="w-full bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-2xl px-4 sm:px-6 py-3 sm:py-4 text-slate-900 dark:text-white appearance-none focus:outline-none focus:border-primary-500/50 focus:ring-4 focus:ring-primary-500/10 transition-all font-bold"
                    value={serviceType}
                    onChange={(e) => setServiceType(e.target.value as ServiceType)}
                    required
                    style={{ colorScheme: 'auto' }}
                  >
                    <option value="" disabled>Select a service...</option>
                    {Object.values(ServiceType).map((type) => (
                      <option key={type} value={type} className="bg-white dark:bg-slate-900 text-slate-900 dark:text-white">{type}</option>
                    ))}
                  </select>
                  <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400 font-bold">↓</div>
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <label className="text-xs font-black uppercase tracking-widest text-slate-500 dark:text-slate-400 ml-1">Your Goals & Current Situation</label>
              <textarea
                className="w-full bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-2xl px-4 sm:px-6 py-4 sm:py-6 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-600 focus:outline-none focus:border-primary-500/50 focus:ring-4 focus:ring-primary-500/10 transition-all min-h-[120px] sm:min-h-[160px] resize-y font-medium text-base hover:bg-slate-200/50 dark:hover:bg-white/10"
                placeholder="Tell us about your current role, the tech you work with, what you're trying to achieve, or any challenges you're facing..."
                value={details}
                onChange={(e) => setDetails(e.target.value)}
              />
            </div>

            <Button type="submit" variant="primary" className="w-full justify-center !py-4 sm:!py-6 text-base sm:text-xl font-black group shadow-xl shadow-primary-500/20 !bg-green-500 hover:!bg-green-600 !shadow-green-500/20">
              <MessageCircle className="w-6 h-6 mr-3 group-hover:scale-110 transition-transform" />
              Send via WhatsApp
            </Button>

            <div className="flex flex-col md:flex-row items-center justify-center gap-6 mt-4 opacity-60">
              <div className="flex items-center gap-2 text-xs font-bold text-slate-500">
                <Mail className="w-4 h-4" /> Response within 12 hours
              </div>
              <div className="hidden md:block w-1.5 h-1.5 rounded-full bg-slate-300" />
              <div className="flex items-center gap-2 text-xs font-bold text-slate-500 italic text-center">
                WhatsApp will open with your inquiry pre-filled.
              </div>
            </div>
          </form>
        </GlassCard>
      </div>
    </section>
  );
};

export default QuoteForm;
