import React from 'react';
import { Cloud, Server, Box, Workflow, Shield, Globe, Database, Activity } from 'lucide-react';
import GlassCard from './ui/GlassCard';
import { Linkedin } from 'lucide-react';
import stanleyImg from './stanley.jpg';
import maryImg from './mary.jpg';

const Testimonials: React.FC = () => {
  return (
    <section id="Testimonials" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">Testimonials</h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Helping startups and enterprises optimize cloud costs and achieve 99.9% uptime through tailored DevOps automation
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[250px]">
          
          {/* Large Card: Cloud Architecture */}
          <GlassCard className="md:col-span-2 md:row-span-1 flex flex-col justify-center group" hoverEffect>
            <div className="flex items-start justify-between mb-4">
              {/* <div className="p-3 bg-sky-500/10 rounded-lg text-sky-500 dark:text-sky-400 group-hover:bg-sky-500 group-hover:text-white transition-colors">
                <Cloud className="w-8 h-8" />
              </div> */}
              {/* <div className="p-3 bg-sky-500/10 rounded-lg text-sky-500 dark:text-sky-400 group-hover:bg-sky-500 transition-colors overflow-hidden">
  <img 
    src="/stanley_image.jpg" 
    alt="Logo" s
    className="w-8 h-8 object-contain group-hover:brightness-0 group-hover:invert transition-all" 
  />
</div> */}

<div className="relative group w-14 h-14">
  {/* The Image Box */}
  <div className="p-1 bg-sky-500/10 rounded-lg group-hover:bg-sky-500 transition-colors overflow-hidden flex items-center justify-center w-full h-full">
    <img 
      src={stanleyImg} 
      alt="Stanley" 
      className="w-full h-full object-cover rounded-md transition-all group-hover:opacity-40" 
    />
  </div>

  {/* The LinkedIn Overlay Icon */}
  <a 
    href="https://www.linkedin.com/in/stanley-onyewuchi-anukam-878478337/"
    target="_blank" 
    rel="noopener noreferrer"
    className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"
  >
    <Linkedin className="w-6 h-6 text-white drop-shadow-lg" />
  </a>
</div>

              {/* <div className="text-xs font-mono text-slate-500 border border-slate-300 dark:border-white/10 px-2 py-1 rounded">AWS / GCP / AZURE</div> */}
            </div>
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Stanley</h3>
            <p className="text-slate-600 dark:text-slate-400">
              "I was struggling to get callbacks despite my experience. CloudOpsDesk completely transformed my professional presence. He didn't just rewrite my resume; he optimized my LinkedIn profile to attract the right recruiters. Within two weeks, I had three high-level interviews lined up. His insight into what hiring managers are looking for in a DevOps lead is unmatched."
            </p>
          </GlassCard>

          {/* Card: Kubernetes */}
          <GlassCard className="flex flex-col justify-center group" hoverEffect>
             {/* <div className="p-3 bg-indigo-500/10 rounded-lg text-indigo-500 dark:text-indigo-400 w-fit mb-4 group-hover:bg-indigo-500 group-hover:text-white transition-colors">
                <Box className="w-6 h-6" />
              </div> */}

              <div className="relative group w-14 h-14">
  {/* The Image Box */}
  <div className="p-1 bg-sky-500/10 rounded-lg group-hover:bg-sky-500 transition-colors overflow-hidden flex items-center justify-center w-full h-full">
    <img 
      src={stanleyImg} 
      alt="Stanley" 
      className="w-full h-full object-cover rounded-md transition-all group-hover:opacity-40" 
    />
  </div>

  {/* The LinkedIn Overlay Icon */}
  <a 
    href="https://www.linkedin.com/in/stanley-onyewuchi-anukam-878478337/"
    target="_blank" 
    rel="noopener noreferrer"
    className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"
  >
    <Linkedin className="w-6 h-6 text-white drop-shadow-lg" />
  </a>
</div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Michael</h3>
            <p className="text-sm text-slate-600 dark:text-slate-400">"We needed a production-ready AWS environment but didn't have a full-time DevOps hire yet. CloudOpsDesk built our entire infrastructure from the ground up using Infrastructure as Code (Terraform). They set up our VPCs, EKS clusters, and CI/CD pipelines with security and scalability as priorities."</p>
          </GlassCard>

          {/* Card: IaC */}
           <GlassCard className="flex flex-col justify-center group" hoverEffect>
             {/* <div className="p-3 bg-pink-500/10 rounded-lg text-pink-500 dark:text-pink-400 w-fit mb-4 group-hover:bg-pink-500 group-hover:text-white transition-colors">
                <Server className="w-6 h-6" />
              </div> */}
              <div className="relative group w-14 h-14">
  {/* The Image Box */}
  <div className="p-1 bg-sky-500/10 rounded-lg group-hover:bg-sky-500 transition-colors overflow-hidden flex items-center justify-center w-full h-full">
    <img 
      src={maryImg} 
      alt="mary" 
      className="w-full h-full object-cover rounded-md transition-all group-hover:opacity-40" 
    />
  </div>

  {/* The LinkedIn Overlay Icon */}
  <a 
    href="https://www.linkedin.com/in/mary-akintunde-511575185/"
    target="_blank" 
    rel="noopener noreferrer"
    className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"
  >
    <Linkedin className="w-6 h-6 text-white drop-shadow-lg" />
  </a>
</div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Mary</h3>
            <p className="text-sm text-slate-600 dark:text-slate-400">"The technical round for my dream job involved a complex Terraform & Kubernetes assignment with strict deadline. CloudOpsDesk's coaching was a lifesaver. They walked me through the architecture, helped me clean up my code, and prepped me for the follow-up technical defense. I sat in the interview and landed the offer. I couldn't have done it without their mentorship."</p>
          </GlassCard>

           {/* Large Card: CI/CD */}
           <GlassCard className="md:col-span-2 md:row-span-1 flex flex-col justify-center group" hoverEffect>
             <div className="flex items-start justify-between mb-4">
               {/* <div className="p-3 bg-emerald-500/10 rounded-lg text-emerald-500 dark:text-emerald-400 group-hover:bg-emerald-500 group-hover:text-white transition-colors">
                 <Workflow className="w-8 h-8" />
               </div> */}
               <div className="relative group w-14 h-14">
  {/* The Image Box */}
  <div className="p-1 bg-sky-500/10 rounded-lg group-hover:bg-sky-500 transition-colors overflow-hidden flex items-center justify-center w-full h-full">
    <img 
      src={stanleyImg} 
      alt="Stanley" 
      className="w-full h-full object-cover rounded-md transition-all group-hover:opacity-40" 
    />
  </div>

  {/* The LinkedIn Overlay Icon */}
  <a 
    href="https://www.linkedin.com/in/stanley-onyewuchi-anukam-878478337/"
    target="_blank" 
    rel="noopener noreferrer"
    className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"
  >
    <Linkedin className="w-6 h-6 text-white drop-shadow-lg" />
  </a>
</div>
               {/* <div className="text-xs font-mono text-slate-500 border border-slate-300 dark:border-white/10 px-2 py-1 rounded">GITHUB ACTIONS / JENKINS</div> */}
             </div>
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Eric</h3>
            <p className="text-slate-600 dark:text-slate-400">
              "Starting a new role in a complex environment was overwhelming. CloudOpsDesk provides incredible 'behind-the-scenes' support for my daily tasks. Whether it's debugging a failing Jenkins pipeline or optimizing Helm charts, they are always available with a solution. Having them as a consultant ensures I deliver high-quality work to my company every single day without the stress of being stuck."
            </p>
          </GlassCard>

          

        </div>
      </div>
    </section>
  );
};

export default Testimonials;