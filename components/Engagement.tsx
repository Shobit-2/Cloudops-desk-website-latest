import React from 'react';
import { Check } from 'lucide-react';
import GlassCard from './ui/GlassCard';
import Button from './ui/Button';

const Engagement: React.FC = () => {
  const scrollToQuote = () => {
    const element = document.getElementById('quote');
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="engagement" className="py-16 relative overflow-hidden bg-slate-50/50 dark:bg-slate-900/10">
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-primary-500/10 rounded-full blur-[100px] -z-10" />
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-96 h-96 bg-accent-500/10 rounded-full blur-[100px] -z-10" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-12 text-center space-y-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-black text-slate-900 dark:text-white tracking-tight">Curated Packages</h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-base sm:text-lg font-medium">Flexible support packages built for individuals. No corporate contracts — just real help when you need it.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <GlassCard className="p-5 sm:p-6 md:p-10 flex flex-col group transition-all" hoverEffect>
            <div className="mb-6 sm:mb-8">
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-2">Starter Session</h3>
              <p className="text-slate-500 font-medium">Try it out — zero commitment.</p>
            </div>
            <ul className="space-y-5 mb-10 flex-grow">
              {['1-on-1 Consultation Call', 'Resume Quick Review', 'Career Roadmap Guidance', 'Pay as you go'].map((item) => (
                <li key={item} className="flex items-center gap-3 text-slate-600 dark:text-slate-300 font-medium">
                  <Check className="w-5 h-5 text-primary-500" />
                  {item}
                </li>
              ))}
            </ul>
            <Button onClick={scrollToQuote} variant="secondary" className="w-full justify-center !py-4 font-bold border-slate-200 dark:border-white/10">Book a Session</Button>
          </GlassCard>

          <div className="relative group/card transform lg:-translate-y-6">
            <div className="absolute -inset-1 bg-gradient-to-r from-primary-500 to-accent-500 rounded-[2.5rem] blur-sm opacity-60 group-hover/card:opacity-80 transition duration-500" />
            <GlassCard className="p-5 sm:p-6 md:p-10 flex flex-col h-full bg-gradient-to-br from-primary-600 to-primary-800 border-primary-400/50 relative overflow-hidden" hoverEffect={false}>
              <div className="absolute top-0 right-0 px-4 sm:px-6 py-1.5 sm:py-2 bg-gradient-to-r from-primary-500 to-accent-500 rounded-bl-2xl">
                <span className="text-[10px] font-black text-white uppercase tracking-[0.2em]">Best Value</span>
              </div>
              <div className="mb-6 sm:mb-8">
                <h3 className="text-2xl sm:text-3xl font-black text-white mb-2">Growth Package</h3>
                <p className="text-primary-300 font-bold uppercase text-[10px] tracking-widest">Full Career Acceleration</p>
              </div>
              <ul className="space-y-5 mb-10 flex-grow">
                {['Profile Marketing (Resume + LinkedIn)', 'Interview Prep & Mock Rounds', 'On-Job Support (Monthly)', 'Priority Response 24/7', 'Dedicated Career Mentor'].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-white font-medium">
                    <div className="p-1 bg-primary-500/20 rounded-full">
                      <Check className="w-4 h-4 text-primary-400" />
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
              <Button onClick={scrollToQuote} variant="primary" className="w-full justify-center !py-4 sm:!py-5 text-base sm:text-lg font-black shadow-xl shadow-primary-500/30">Get Started</Button>
            </GlassCard>
          </div>

          <GlassCard className="p-5 sm:p-6 md:p-10 flex flex-col group transition-all" hoverEffect>
            <div className="mb-6 sm:mb-8">
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-2">Corporate Training</h3>
              <p className="text-slate-500 font-medium">For teams & career switchers.</p>
            </div>
            <ul className="space-y-5 mb-10 flex-grow">
              {['Custom Training Curriculum', 'Batch or 1:1 Sessions', 'All Tech Domains Covered', 'Placement Assistance', 'Progress Tracking & Reports'].map((item) => (
                <li key={item} className="flex items-center gap-3 text-slate-600 dark:text-slate-300 font-medium">
                  <Check className="w-5 h-5 text-primary-500" />
                  {item}
                </li>
              ))}
            </ul>
            <Button onClick={scrollToQuote} variant="secondary" className="w-full justify-center !py-4 font-bold border-slate-200 dark:border-white/10">Enquire Now</Button>
          </GlassCard>
        </div>
      </div>
    </section>
  );
};

export default Engagement;
