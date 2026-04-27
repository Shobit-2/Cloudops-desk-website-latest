import React from 'react';
import { Mail, MessageCircle, MapPin, Phone } from 'lucide-react';
import GlassCard from '../components/ui/GlassCard';
import QuoteForm from '../components/QuoteForm';

const ContactPage: React.FC = () => {
  React.useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  return (
    <div className="pt-20 sm:pt-24 md:pt-32 pb-10 sm:pb-20">
      {/* Page Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 mb-10 sm:mb-16 md:mb-20 text-center space-y-4 sm:space-y-6">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary-500/10 border border-primary-500/20 text-primary-600 dark:text-primary-400 text-xs font-bold tracking-[0.2em] uppercase">
          <span className="w-2 h-2 rounded-full bg-primary-500 animate-pulse"></span>
          Get In Touch
        </div>
        <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-7xl font-black text-slate-900 dark:text-white tracking-tight">
          Let's Talk About <br />
          <span className="text-gradient">Your Career</span>
        </h1>
        <p className="text-base sm:text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto font-medium leading-relaxed">
          Have a question? Want to explore our services? Fill out the form below and we'll get back to you within 12 hours.
        </p>
      </div>

      {/* Contact Info Cards */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 mb-10 sm:mb-16">
        <div className="grid md:grid-cols-3 gap-4 sm:gap-6">
          <a href="mailto:cloudopsdesk@gmail.com" className="group">
            <GlassCard className="!p-8 flex items-center gap-5 group" hoverEffect>
              <div className="p-4 bg-primary-500/10 rounded-2xl text-primary-500 group-hover:scale-110 transition-transform">
                <Mail className="w-7 h-7" />
              </div>
              <div>
                <div className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-1">Email Us</div>
                <div className="font-bold text-slate-900 dark:text-white">cloudopsdesk@gmail.com</div>
              </div>
            </GlassCard>
          </a>
          <a href="https://wa.me/919509100704" target="_blank" rel="noreferrer" className="group">
            <GlassCard className="!p-8 flex items-center gap-5 group" hoverEffect>
              <div className="p-4 bg-green-500/10 rounded-2xl text-green-500 group-hover:scale-110 transition-transform">
                <MessageCircle className="w-7 h-7" />
              </div>
              <div>
                <div className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-1">WhatsApp</div>
                <div className="font-bold text-slate-900 dark:text-white">+91 95091 00704</div>
              </div>
            </GlassCard>
          </a>
          <GlassCard className="!p-8 flex items-center gap-5" hoverEffect>
            <div className="p-4 bg-emerald-500/10 rounded-2xl text-emerald-500">
              <MapPin className="w-7 h-7" />
            </div>
            <div>
              <div className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-1">Location</div>
              <div className="font-bold text-slate-900 dark:text-white">Remote — Worldwide</div>
            </div>
          </GlassCard>
        </div>
      </div>

      {/* Enquiry Form */}
      <QuoteForm />
    </div>
  );
};

export default ContactPage;
