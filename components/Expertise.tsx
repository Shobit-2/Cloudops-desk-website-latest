import React from 'react';
import { Cloud, Server, Box, Workflow, Shield, Database, CheckCircle, Bug, Settings, Users } from 'lucide-react';
import GlassCard from './ui/GlassCard';

const techIcons = {
  cloudDevOps: [
    { name: 'AWS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg' },
    { name: 'Azure', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg' },
    { name: 'GCP', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg' },
    { name: 'Kubernetes', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg' },
    { name: 'Docker', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
    { name: 'Terraform', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/terraform/terraform-original.svg' },
    { name: 'GitHub Actions', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' },
    { name: 'ArgoCD', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/argocd/argocd-original.svg' },
  ],
  dataAI: [
    { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
    { name: 'Spark', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apachespark/apachespark-original.svg' },
    { name: 'Kafka', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apachekafka/apachekafka-original.svg' },
    { name: 'PostgreSQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
    { name: 'MongoDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
    { name: 'Grafana', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/grafana/grafana-original.svg' },
    { name: 'Prometheus', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prometheus/prometheus-original.svg' },
    { name: 'Power BI', icon: 'https://upload.wikimedia.org/wikipedia/commons/c/cf/New_Power_BI_Logo.svg' },
    { name: 'Airflow', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apacheairflow/apacheairflow-original.svg' },
  ],
  fullStack: [
    { name: 'Java', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
    { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
    { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
    { name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
    { name: 'Go', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg' },
    { name: 'Linux', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg' },
  ],
  qaAutomation: [
    { name: 'Selenium', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/selenium/selenium-original.svg' },
    { name: 'Cypress', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cypressio/cypressio-original.svg' },
    { name: 'Playwright', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/playwright/playwright-original.svg' },
    { name: 'Jest', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg' },
    { name: 'Cucumber', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cucumber/cucumber-plain.svg' },
    { name: 'JMeter', icon: 'https://jmeter.apache.org/images/jmeter_square.svg' },
  ],
  sapOracle: [
    { name: 'SAP', icon: 'https://upload.wikimedia.org/wikipedia/commons/5/59/SAP_2011_logo.svg' },
    { name: 'Oracle', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/oracle/oracle-original.svg' },
  ],
  serviceNow: [
    { name: 'ServiceNow', icon: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%2381B5A1'%3E%3Cpath d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 17.5c-3.03 0-5.5-2.47-5.5-5.5S8.97 8.5 12 8.5s5.5 2.47 5.5 5.5-2.47 5.5-5.5 5.5zm0-8.5c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z'/%3E%3C/svg%3E" },
  ],
  workday: [
    { name: 'Workday', icon: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%23F68D2E'%3E%3Cpath d='M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm0 3a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zm0 14c-2.76 0-5.18-1.41-6.6-3.55.03-2.19 4.4-3.39 6.6-3.39 2.19 0 6.57 1.2 6.6 3.39A7.97 7.97 0 0 1 12 19z'/%3E%3C/svg%3E" },
  ],
};

const TechIconRow: React.FC<{ techs: { name: string; icon: string }[] }> = ({ techs }) => (
  <div className="flex flex-wrap items-center gap-4 mt-6">
    {techs.map((tech) => (
      <div key={tech.name} className="flex flex-col items-center gap-1.5 group/icon">
        <img src={tech.icon} alt={tech.name}
          className="w-8 h-8 transition-transform duration-500 group-hover/icon:scale-125 group-hover/icon:-rotate-6 grayscale hover:grayscale-0" />
        <span className="text-[8px] font-bold uppercase tracking-widest text-slate-500 opacity-0 group-hover/icon:opacity-100 transition-opacity">{tech.name}</span>
      </div>
    ))}
  </div>
);

const Expertise: React.FC = () => {
  return (
    <section id="services" className="py-16 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-12 text-center space-y-4">
          <p className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400">Technology Stack & Domain Expertise</p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-black text-slate-900 dark:text-white tracking-tight">Technical Domain Expertise</h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-base sm:text-lg font-medium">
            Our coaches and mentors are active engineers working in top companies — not just trainers. Training, support & career services across all major tech domains.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-fr">
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
            <h3 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 dark:text-white mb-4">Cloud & DevOps</h3>
            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">Architecture design to deployment pipelines — across all major cloud providers.</p>
            <TechIconRow techs={techIcons.cloudDevOps} />
          </GlassCard>

          <GlassCard className="md:col-span-4 group flex flex-col justify-center" hoverEffect>
            <div className="p-4 bg-accent-500/10 rounded-2xl text-accent-500 w-fit mb-6 group-hover:rotate-12 transition-transform">
              <Box className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">Data & AI Engineering</h3>
            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">Big data pipelines, ML workflows, and analytics — from entry to senior level.</p>
            <TechIconRow techs={techIcons.dataAI} />
          </GlassCard>

          <GlassCard className="md:col-span-4 group flex flex-col justify-center" hoverEffect>
            <div className="p-4 bg-pink-500/10 rounded-2xl text-pink-500 w-fit mb-6 group-hover:-rotate-12 transition-transform">
              <Server className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">Full Stack Dev</h3>
            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">Backend, frontend, and everything in between — modern frameworks & languages.</p>
            <TechIconRow techs={techIcons.fullStack} />
          </GlassCard>

          <GlassCard className="md:col-span-4 group flex flex-col justify-center" hoverEffect>
            <div className="p-4 bg-emerald-500/10 rounded-2xl text-emerald-500 w-fit mb-6 group-hover:rotate-12 transition-transform">
              <Workflow className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">SAP · Oracle EPM</h3>
            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">Enterprise ERP training & on-job support — a niche few providers cover well.</p>
            <TechIconRow techs={techIcons.sapOracle} />
          </GlassCard>

          <GlassCard className="md:col-span-4 group flex flex-col justify-center" hoverEffect>
            <div className="p-4 bg-orange-500/10 rounded-2xl text-orange-500 w-fit mb-6 group-hover:-rotate-12 transition-transform">
              <Bug className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">QA Automation</h3>
            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">End-to-end test automation — frameworks, CI integration, and performance testing.</p>
            <TechIconRow techs={techIcons.qaAutomation} />

          </GlassCard>

          <GlassCard className="md:col-span-4 group flex flex-col justify-center" hoverEffect>
            <div className="p-4 bg-sky-500/10 rounded-2xl text-sky-500 w-fit mb-6 group-hover:rotate-12 transition-transform">
              <Settings className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">ServiceNow</h3>
            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">ITSM, ITOM, HRSD & custom app development on the Now Platform.</p>
            <TechIconRow techs={techIcons.serviceNow} />
          </GlassCard>

          <GlassCard className="md:col-span-4 group flex flex-col justify-center" hoverEffect>
            <div className="p-4 bg-violet-500/10 rounded-2xl text-violet-500 w-fit mb-6 group-hover:-rotate-12 transition-transform">
              <Users className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">Workday</h3>
            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">HCM, Finance & Adaptive Planning — configuration, integrations, and reporting.</p>
            <TechIconRow techs={techIcons.workday} />
          </GlassCard>
        </div>
      </div>
    </section>
  );
};

export default Expertise;
