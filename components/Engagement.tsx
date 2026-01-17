import React from 'react';
import { Check } from 'lucide-react';
import GlassCard from './ui/GlassCard';
import Button from './ui/Button';

const Engagement: React.FC = () => {
  const scrollToQuote = () => {
    const element = document.getElementById('quote');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="engagement" className="py-32 relative overflow-hidden bg-slate-50/50 dark:bg-slate-900/10">

      {/* Background Decorative Elements */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-primary-500/10 rounded-full blur-[100px] -z-10" />
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-96 h-96 bg-accent-500/10 rounded-full blur-[100px] -z-10" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-20 text-center space-y-4">
          <h2 className="text-4xl md:text-6xl font-black text-slate-900 dark:text-white tracking-tight">Strategic Partnerships</h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-lg font-medium">Flexible structures designed to accelerate technical growth and operational excellence.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* Card 1: On-Demand */}
          <GlassCard className="p-10 flex flex-col group transition-all" hoverEffect>
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Hourly Support</h3>
              <p className="text-slate-500 font-medium">Perfect for surgical interventions.</p>
            </div>
            <ul className="space-y-5 mb-10 flex-grow">
              {['Emergency Troubleshooting', 'Performance Optimization', 'Security Hardening', 'No long-term commitment'].map((item) => (
                <li key={item} className="flex items-center gap-3 text-slate-600 dark:text-slate-300 font-medium">
                  <Check className="w-5 h-5 text-primary-500" />
                  {item}
                </li>
              ))}
            </ul>
            <Button onClick={scrollToQuote} variant="secondary" className="w-full justify-center !py-4 font-bold border-slate-200 dark:border-white/10 group-hover:bg-slate-100 dark:group-hover:bg-white/5 transition-colors">Initialize Support</Button>
          </GlassCard>

          {/* Card 2: Retainer (The Prize) */}
          <div className="relative group/card transform lg:-translate-y-6">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-primary-500 to-accent-500 rounded-[2.5rem] blur opacity-30 group-hover/card:opacity-50 transition duration-500" />
            <GlassCard className="p-10 flex flex-col h-full bg-slate-900/95 dark:bg-slate-900/90 border-primary-500/50 relative overflow-hidden" hoverEffect={false}>
              <div className="absolute top-0 right-0 px-6 py-2 bg-gradient-to-r from-primary-500 to-accent-500 rounded-bl-2xl">
                <span className="text-[10px] font-black text-white uppercase tracking-[0.2em]">High Value</span>
              </div>
              <div className="mb-8">
                <h3 className="text-3xl font-black text-white mb-2">Elite Retainer</h3>
                <p className="text-primary-300 font-bold uppercase text-[10px] tracking-widest">Your Dedicated Engineering Partner</p>
              </div>
              <ul className="space-y-5 mb-10 flex-grow">
                {['Dedicated DevOps Architect', '24/7 Priority Response', 'Unlimited Deployments', 'Custom IaC Modules', 'Internal Team Coaching'].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-white font-medium">
                    <div className="p-1 bg-primary-500/20 rounded-full">
                      <Check className="w-4 h-4 text-primary-400" />
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
              <Button onClick={scrollToQuote} variant="primary" className="w-full justify-center !py-5 text-lg font-black shadow-xl shadow-primary-500/30">Secure Your Slot</Button>
            </GlassCard>
          </div>

          {/* Card 3: Project-Based */}
          <GlassCard className="p-10 flex flex-col group transition-all" hoverEffect>
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Infrastructure Audit</h3>
              <p className="text-slate-500 font-medium">Strategic roadmap for scaling.</p>
            </div>
            <ul className="space-y-5 mb-10 flex-grow">
              {['Comprehensive Tech Audit', 'Cost Reduction Engine', 'Security & Compliance Scan', 'Scalability Roadmap', 'Post-Audit Execution Plan'].map((item) => (
                <li key={item} className="flex items-center gap-3 text-slate-600 dark:text-slate-300 font-medium">
                  <Check className="w-5 h-5 text-primary-500" />
                  {item}
                </li>
              ))}
            </ul>
            <Button onClick={scrollToQuote} variant="secondary" className="w-full justify-center !py-4 font-bold border-slate-200 dark:border-white/10 group-hover:bg-slate-100 dark:group-hover:bg-white/5 transition-colors">Start Audit</Button>
          </GlassCard>

        </div>
      </div>
    </section>
  );
};

export default Engagement;