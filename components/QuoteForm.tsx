import React, { useState } from 'react';
import { Send, Mail, Sparkles } from 'lucide-react';
import GlassCard from './ui/GlassCard';
import Button from './ui/Button';
import { ServiceType } from '../types';

const QuoteForm: React.FC = () => {
  const [serviceType, setServiceType] = useState<ServiceType | ''>('');
  const [details, setDetails] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!serviceType) return;

    const emailTo = "cloudopsdesk@gmail.com";
    const subject = encodeURIComponent(`[NEW INQUIRY] ${serviceType}`);
    const body = encodeURIComponent(
      `Service: ${serviceType}\n\nProject Scope & Details:\n${details || 'No details provided.'}\n\n--- Sent via CloudOps Desk Portfolio ---`
    );

    const mailtoUrl = `mailto:${emailTo}?subject=${subject}&body=${body}`;
    window.location.href = mailtoUrl;
  };

  return (
    <section id="quote" className="py-32 relative">
      <div className="max-w-4xl mx-auto px-6">
        <GlassCard className="p-12 relative overflow-hidden bg-white/40 dark:bg-slate-900/40 backdrop-blur-3xl border-white/20 shadow-2xl" hoverEffect={false}>

          {/* Subtle Background Glow */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary-500/10 rounded-full blur-[80px] -z-10" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent-500/10 rounded-full blur-[80px] -z-10" />

          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center p-4 bg-primary-500/10 rounded-2xl mb-6">
              <Sparkles className="w-8 h-8 text-primary-500" />
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white tracking-tight mb-4">Start Your Transformation</h2>
            <p className="text-slate-600 dark:text-slate-400 text-lg font-medium max-w-xl mx-auto">
              Ready to engineer your scale? Tell us about your project or career goals, and our lead architect will reach out with a custom strategy.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="grid md:grid-cols-1 gap-8">
              <div className="space-y-3">
                <label className="text-xs font-black uppercase tracking-widest text-slate-500 dark:text-slate-400 ml-1">Service Domain</label>
                <div className="relative group">
                  <select
                    className="w-full bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-2xl px-6 py-5 text-slate-900 dark:text-white appearance-none focus:outline-none focus:border-primary-500/50 focus:ring-4 focus:ring-primary-500/10 transition-all font-bold group-hover:bg-slate-200/50 dark:group-hover:bg-white/10"
                    value={serviceType}
                    onChange={(e) => setServiceType(e.target.value as ServiceType)}
                    required
                    style={{ colorScheme: 'auto' }}
                  >
                    <option value="" disabled className="text-slate-500">Pick your priority...</option>
                    {Object.values(ServiceType).map((type) => (
                      <option key={type} value={type} className="bg-white dark:bg-slate-900 text-slate-900 dark:text-white">{type}</option>
                    ))}
                  </select>
                  <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400 font-bold">
                    ↓
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <label className="text-xs font-black uppercase tracking-widest text-slate-500 dark:text-slate-400 ml-1">Inquiry Details (Challenges, Goals, or Tech Stack)</label>
              <textarea
                className="w-full bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-2xl px-6 py-6 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-600 focus:outline-none focus:border-primary-500/50 focus:ring-4 focus:ring-primary-500/10 transition-all min-h-[180px] resize-y font-medium text-lg hover:bg-slate-200/50 dark:hover:bg-white/10"
                placeholder="Share your current challenges, career goals, or the infrastructure vision you want to achieve..."
                value={details}
                onChange={(e) => setDetails(e.target.value)}
              />
            </div>

            <Button
              type="submit"
              variant="primary"
              className="w-full justify-center !py-6 text-xl font-black group shadow-xl shadow-primary-500/20"
            >
              <Send className="w-6 h-6 mr-3 group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
              Initialize Request
            </Button>

            <div className="flex flex-col md:flex-row items-center justify-center gap-6 mt-10 opacity-60">
              <div className="flex items-center gap-2 text-xs font-bold text-slate-500">
                <Mail className="w-4 h-4" /> Direct Response in &lt;12h
              </div>
              <div className="hidden md:block w-1.5 h-1.5 rounded-full bg-slate-300" />
              <div className="flex items-center gap-2 text-xs font-bold text-slate-500 italic text-center">
                Your default email client will open with the drafted inquiry.
              </div>
            </div>
          </form>
        </GlassCard>
      </div>
    </section>
  );
};

export default QuoteForm;