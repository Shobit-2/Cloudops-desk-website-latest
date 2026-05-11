import React from 'react';
import { Briefcase, Users, Target, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';
import Button from './ui/Button';

const Hero: React.FC = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  const stats = [
    { value: '500+', label: 'Careers Launched' },
    { value: '95%', label: 'Placement Rate' },
    { value: '24/7', label: 'On-Job Support' },
    { value: '50+', label: 'Tech Stacks' },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 pb-12 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[600px] bg-primary-500/10 rounded-full blur-[140px] -z-10 animate-pulse-glow" />
      <div className="absolute bottom-0 right-0 w-[800px] h-[600px] bg-accent-500/5 rounded-full blur-[120px] -z-10" />

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        <div className="space-y-10 z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary-500/10 border border-primary-500/20 text-primary-600 dark:text-primary-400 text-xs font-bold tracking-[0.2em] uppercase">
            <span className="w-2 h-2 rounded-full bg-primary-500 animate-pulse"></span>
            India's #1 B2C Tech Career Platform
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-black tracking-tight text-slate-900 dark:text-white leading-[0.95]">
            Land Your <br />
            <span className="text-gradient">Dream Tech</span>
            <br />Role. Fast.
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-xl leading-relaxed font-medium">
            From resume building to on-job support — we're your end-to-end career partner across all tech stacks. DevOps, Cloud, Data, AI, and beyond.
          </p>

          <div className="flex flex-col sm:flex-row gap-5">
            <Button variant="primary" withIcon className="!px-6 !py-3 sm:!px-8 sm:!py-4 text-base sm:text-lg shadow-xl shadow-primary-500/20" onClick={() => scrollToSection('quote')}>
              Start My Journey
            </Button>
            <Button variant="secondary" className="!px-6 !py-3 sm:!px-8 sm:!py-4 text-base sm:text-lg backdrop-blur-sm border-slate-200 dark:border-white/10" onClick={() => scrollToSection('career')}>
              Explore Services
            </Button>
          </div>

          <div className="pt-6 grid grid-cols-2 sm:grid-cols-4 gap-6">
            {stats.map((stat, i) => (
              <div key={i} className="group flex flex-col gap-1">
                <div className="font-extrabold text-slate-900 dark:text-white text-2xl transition-transform group-hover:scale-110">{stat.value}</div>
                <div className="text-[10px] uppercase tracking-widest font-bold opacity-60">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Visual: Service Cards */}
        <div className="relative lg:h-[620px] flex items-center justify-center">
          <div className="relative w-full max-w-lg">
            <div className="absolute -inset-4 bg-primary-500/10 rounded-[2.5rem] blur-3xl -z-10 animate-pulse-glow" />

            {/* Main card */}
            <div className="bg-slate-950/95 backdrop-blur-2xl rounded-[2rem] border border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.5)] p-4 sm:p-6 md:p-8 space-y-5">
              <div className="h-10 flex items-center gap-2 mb-6">
                <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                <div className="ml-4 text-[10px] font-mono text-slate-500 tracking-widest uppercase">career-roadmap.tsx</div>
              </div>

              {[
                { icon: <Briefcase className="w-5 h-5" />, label: 'Profile Marketing', sub: 'Resume · LinkedIn · Job Apps', color: 'text-primary-400', bg: 'bg-primary-500/10', slug: 'profile-marketing' },
                { icon: <Target className="w-5 h-5" />, label: 'Interview Support', sub: 'Mock Interviews · Live Guidance', color: 'text-amber-400', bg: 'bg-amber-500/10', slug: 'interview-support' },
                { icon: <Users className="w-5 h-5" />, label: 'Corporate Training', sub: 'Career Switch · Tech Upskilling', color: 'text-emerald-400', bg: 'bg-emerald-500/10', slug: 'corporate-training' },
                { icon: <TrendingUp className="w-5 h-5" />, label: 'On-Job Support', sub: '24/7 Real-time Task Help', color: 'text-purple-400', bg: 'bg-purple-500/10', slug: 'job-support' },
              ].map((item, i) => (
                <Link key={i} to={`/services#${item.slug}`} className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/5 hover:border-white/10 transition-all cursor-pointer">
                  <div className={`p-2 ${item.bg} rounded-lg ${item.color}`}>{item.icon}</div>
                  <div>
                    <div className="text-sm font-bold text-white">{item.label}</div>
                    <div className="text-[11px] text-slate-500">{item.sub}</div>
                  </div>
                  <div className="ml-auto">
                    <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  </div>
                </Link>
              ))}

              <div className="pt-2 border-t border-white/5">
                <div className="text-[11px] text-slate-500 font-mono">+ Cloud · DevOps · Data · AI · Java · Python · SAP · Workday...</div>
              </div>
            </div>

            {/* Floating badge */}
            <div className="absolute -right-4 sm:-right-8 -top-6 bg-slate-900/90 backdrop-blur-xl p-3 sm:p-4 rounded-2xl border border-white/10 shadow-2xl animate-float hidden sm:block">
              <div className="text-xs font-black text-white uppercase tracking-widest">All Tech</div>
              <div className="text-[10px] text-slate-500">50+ Stacks Covered</div>
            </div>
            <div className="absolute -left-4 sm:-left-10 -bottom-4 bg-slate-900/90 backdrop-blur-xl p-3 sm:p-4 rounded-2xl border border-white/10 shadow-2xl animate-float hidden sm:block" style={{ animationDelay: '1.5s' }}>
              <div className="text-xs font-black text-emerald-400 uppercase tracking-widest">B2C Focus</div>
              <div className="text-[10px] text-slate-500">Individual Support</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
