import React from 'react';
import { Cloud, Server, Box, Workflow, Shield, Globe, Database, Activity } from 'lucide-react';
import GlassCard from './ui/GlassCard';

const Expertise: React.FC = () => {
  return (
    <section id="expertise" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-20 text-center space-y-4">
          <h2 className="text-4xl md:text-6xl font-black text-slate-900 dark:text-white tracking-tight">Our Technical Domain</h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-lg font-medium">
            We don't just "do" cloud. We specialize in the elite engineering required for high-availability, high-security systems.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-fr">

          {/* Large Card: Cloud Architecture */}
          <GlassCard className="md:col-span-8 group relative flex flex-col justify-center overflow-hidden" hoverEffect>
            <div className="flex items-start justify-between mb-8">
              <div className="p-4 bg-primary-500/10 rounded-2xl text-primary-500 transition-transform group-hover:scale-110">
                <Cloud className="w-10 h-10" />
              </div>
              <div className="flex gap-2 text-[10px] font-black font-mono text-slate-400">
                <span className="px-2 py-1 bg-slate-100 dark:bg-white/5 rounded">AWS</span>
                <span className="px-2 py-1 bg-slate-100 dark:bg-white/5 rounded">GCP</span>
                <span className="px-2 py-1 bg-slate-100 dark:bg-white/5 rounded">AZURE</span>
              </div>
            </div>
            <h3 className="text-3xl font-extrabold text-slate-900 dark:text-white mb-4">Cloud Architecture</h3>
            <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed max-w-xl">
              Building resilient, multi-region architectures that survive outages. We handle everything from VPC networking to serverless scaling.
            </p>
            <div className="mt-8 flex gap-6">
              <div className="text-xs font-bold text-slate-400 uppercase tracking-widest">Reliability: 99.99%</div>
              <div className="text-xs font-bold text-slate-400 uppercase tracking-widest">Efficiency: +40%</div>
            </div>
          </GlassCard>

          {/* Card: Kubernetes */}
          <GlassCard className="md:col-span-4 group flex flex-col justify-center" hoverEffect>
            <div className="p-4 bg-accent-500/10 rounded-2xl text-accent-500 w-fit mb-6 group-hover:rotate-12 transition-transform">
              <Box className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">Kubernetes</h3>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed font-medium">Production EKS/GKE clusters with full GitOps automation and Helm management.</p>
          </GlassCard>

          {/* Card: IaC */}
          <GlassCard className="md:col-span-4 group flex flex-col justify-center" hoverEffect>
            <div className="p-4 bg-pink-500/10 rounded-2xl text-pink-500 w-fit mb-6 group-hover:-rotate-12 transition-transform">
              <Server className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">Terraform / IaC</h3>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed font-medium">Infrastructure as Code. Every resource is versioned, auditable, and repeatable.</p>
          </GlassCard>

          {/* Large Card: CI/CD */}
          <GlassCard className="md:col-span-8 group relative flex flex-col justify-center overflow-hidden" hoverEffect>
            <div className="flex items-start justify-between mb-8">
              <div className="p-4 bg-emerald-500/10 rounded-2xl text-emerald-500 transition-transform group-hover:scale-110">
                <Workflow className="w-10 h-10" />
              </div>
              <div className="text-[10px] font-black font-mono text-slate-400 border border-slate-200 dark:border-white/10 px-3 py-1 rounded-full uppercase tracking-tighter">Workflow Optimization</div>
            </div>
            <h3 className="text-3xl font-extrabold text-slate-900 dark:text-white mb-4">CI/CD & GitOps</h3>
            <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed max-w-xl">
              Zero-downtime deployments. We build the pipelines that allow your team to ship code with total confidence.
            </p>
            <div className="mt-8 flex gap-6">
              <div className="text-xs font-bold text-slate-400 uppercase tracking-widest">Deploy frequency: 10x</div>
              <div className="text-xs font-bold text-slate-400 uppercase tracking-widest">Failure rate: &lt;1%</div>
            </div>
          </GlassCard>

        </div>
      </div>
    </section>
  );
};

export default Expertise;