import React from 'react';

const TechStack: React.FC = () => {
  const techCategories = [
    {
      label: 'Cloud & DevOps',
      techs: [
        { name: 'AWS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg' },
        { name: 'Azure', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg' },
        { name: 'GCP', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg' },
        { name: 'Kubernetes', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg' },
        { name: 'Docker', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
        { name: 'Terraform', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/terraform/terraform-original.svg' },
        { name: 'GitHub Actions', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' },
        { name: 'ArgoCD', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/argocd/argocd-original.svg' },
      ]
    },
    {
      label: 'Data & AI',
      techs: [
        { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
        { name: 'Spark', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apachespark/apachespark-original.svg' },
        { name: 'Kafka', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apachekafka/apachekafka-original.svg' },
        { name: 'PostgreSQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
        { name: 'MongoDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
        { name: 'Grafana', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/grafana/grafana-original.svg' },
        { name: 'Prometheus', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prometheus/prometheus-original.svg' },
        { name: 'Power BI', icon: 'https://upload.wikimedia.org/wikipedia/commons/c/cf/New_Power_BI_Logo.svg' },
        { name: 'Data Engineering', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apacheairflow/apacheairflow-original.svg' },
      ]
    },
    {
      label: 'Development',
      techs: [
        { name: 'Java', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
        { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
        { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
        { name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
        { name: 'Go', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg' },
        { name: 'Linux', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg' },
      ]
    },
    {
      label: 'Enterprise & QA',
      techs: [
        { name: 'ServiceNow', icon: 'https://companieslogo.com/img/orig/NOW-27b6dced.png' },
        { name: 'QA Automation', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/selenium/selenium-original.svg' },
        { name: 'Networking', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ssh/ssh-original-wordmark.svg' },
      ]
    },
  ];

  return (
    <div id="techstack" className="py-24 border-y border-slate-200 dark:border-white/5 bg-slate-50/50 dark:bg-slate-900/20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-center text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 mb-4">Supported Technology Stack</p>
        <p className="text-center text-slate-500 dark:text-slate-500 text-sm font-medium mb-16">Training, support & career services across all major tech domains</p>

        <div className="space-y-12">
          {techCategories.map((cat) => (
            <div key={cat.label}>
              <p className="text-[10px] font-black uppercase tracking-[0.25em] text-primary-500 mb-6 ml-1">{cat.label}</p>
              <div className="flex flex-wrap items-center gap-8 md:gap-14 opacity-50 hover:opacity-100 transition-opacity grayscale hover:grayscale-0 duration-700">
                {cat.techs.map((tech) => (
                  <div key={tech.name} className="flex flex-col items-center gap-2 group">
                    <img src={tech.icon} alt={tech.name}
                      className="w-10 h-10 transition-transform duration-500 group-hover:scale-125 group-hover:-rotate-6" />
                    <span className="text-[9px] font-bold uppercase tracking-widest text-slate-500 opacity-0 group-hover:opacity-100 transition-opacity">{tech.name}</span>
                  </div>
                ))}
                <div className="text-xs font-bold text-slate-400 italic">+ many more</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechStack;
