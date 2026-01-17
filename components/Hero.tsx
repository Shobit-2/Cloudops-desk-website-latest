import React from 'react';
import { Terminal, Code, Cpu } from 'lucide-react';
import Button from './ui/Button';

const Hero: React.FC = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 pb-12 overflow-hidden">

      {/* Dynamic Background Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[600px] bg-primary-500/10 rounded-full blur-[140px] -z-10 animate-pulse-glow" />
      <div className="absolute bottom-0 right-0 w-[800px] h-[600px] bg-accent-500/5 rounded-full blur-[120px] -z-10" />

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

        {/* Text Content */}
        <div className="space-y-10 z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary-500/10 border border-primary-500/20 text-primary-600 dark:text-primary-400 text-xs font-bold tracking-[0.2em] uppercase">
            <span className="w-2 h-2 rounded-full bg-primary-500 animate-pulse"></span>
            Enterprise Grade Infrastructure
          </div>

          <h1 className="text-6xl lg:text-8xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[0.95]">
            Engineered <br />
            <span className="text-gradient">
              For Scale.
            </span>
          </h1>

          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-xl leading-relaxed font-medium">
            We architect and deploy mission-critical cloud infrastructure that handles millions of requests without breaking a sweat. High-performance DevOps for high-growth teams.
          </p>

          <div className="flex flex-col sm:flex-row gap-5">
            <Button variant="primary" withIcon className="!px-8 !py-4 text-lg shadow-xl shadow-primary-500/20" onClick={() => scrollToSection('quote')}>
              Deploy With Us
            </Button>
            <Button variant="secondary" className="!px-8 !py-4 text-lg backdrop-blur-sm border-slate-200 dark:border-white/10" onClick={() => scrollToSection('engagement')}>
              Engagement Models
            </Button>
          </div>

          <div className="pt-10 flex items-center gap-10 text-slate-500">
            <div className="group flex flex-col gap-1">
              <div className="font-extrabold text-slate-900 dark:text-white text-3xl transition-transform group-hover:scale-110">99.9%</div>
              <div className="text-[10px] uppercase tracking-widest font-bold opacity-60">Uptime SLA</div>
            </div>
            <div className="w-px h-10 bg-slate-300 dark:bg-white/10" />
            <div className="group flex flex-col gap-1">
              <div className="font-extrabold text-slate-900 dark:text-white text-3xl transition-transform group-hover:scale-110">10ms</div>
              <div className="text-[10px] uppercase tracking-widest font-bold opacity-60">Avg Latency</div>
            </div>
            <div className="w-px h-10 bg-slate-300 dark:bg-white/10" />
            <div className="group flex flex-col gap-1">
              <div className="font-extrabold text-slate-900 dark:text-white text-3xl transition-transform group-hover:scale-110">24/7</div>
              <div className="text-[10px] uppercase tracking-widest font-bold opacity-60">Elite Monitoring</div>
            </div>
          </div>
        </div>

        {/* 3D Visual Content */}
        <div className="relative lg:h-[700px] flex items-center justify-center">
          {/* Main Visual - Terminal */}
          <div className="relative w-full max-w-lg aspect-[4/3] animate-float">

            {/* Glossy Backdrop Blur */}
            <div className="absolute -inset-4 bg-primary-500/10 rounded-[2.5rem] blur-3xl -z-10 animate-pulse-glow" />

            {/* Terminal Container */}
            <div className="absolute inset-0 bg-slate-950/95 backdrop-blur-2xl rounded-[2rem] border border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.5)] overflow-hidden flex flex-col">
              <div className="h-12 border-b border-white/5 flex items-center px-6 gap-2 bg-white/5">
                <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                <div className="ml-4 text-[10px] font-mono text-slate-500 tracking-widest uppercase">infrastructure-as-code.tf</div>
              </div>

              <div className="p-8 font-mono text-sm space-y-6 text-slate-300">
                <div className="flex gap-3">
                  <span className="text-emerald-400">➜</span>
                  <span className="text-primary-400">cloudops-desk</span>
                  <span>terraform apply</span>
                </div>

                <div className="text-slate-500 text-xs space-y-1">
                  <div>Plan: 12 to add, 0 to change, 0 to destroy.</div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    aws_eks_cluster.prod: Creating...
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    aws_db_instance.db: Creating...
                  </div>
                </div>

                <div className="bg-white/5 p-4 rounded-xl border border-white/5">
                  <div className="text-emerald-400 font-bold mb-2 uppercase text-[10px] tracking-widest flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" /> Success
                  </div>
                  <div className="text-xs text-slate-400">
                    Infrastructure deployed successfully across 3 regions.
                    Total time: 4m 12s
                  </div>
                </div>

                <div className="flex gap-3 animate-pulse">
                  <span className="text-emerald-400">➜</span>
                  <div className="w-2 h-5 bg-primary-500/50" />
                </div>
              </div>
            </div>

            {/* Floating Stats Badges */}
            <div className="absolute -right-8 top-1/4 bg-slate-900/90 backdrop-blur-xl p-5 rounded-2xl border border-white/10 shadow-2xl animate-float" style={{ animationDelay: '1.5s' }}>
              <Terminal className="w-10 h-10 text-primary-400 mb-3" />
              <div className="text-xs font-black text-white uppercase tracking-widest">GitOps</div>
              <div className="text-[10px] text-slate-500">Automated Rollouts</div>
            </div>

            <div className="absolute -left-12 bottom-1/4 bg-slate-900/90 backdrop-blur-xl p-5 rounded-2xl border border-white/10 shadow-2xl animate-float" style={{ animationDelay: '2.5s' }}>
              <Cpu className="w-10 h-10 text-accent-500 mb-3" />
              <div className="text-xs font-black text-white uppercase tracking-widest">Kubernetes</div>
              <div className="text-[10px] text-slate-500">Auto-Scaling Nodes</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;