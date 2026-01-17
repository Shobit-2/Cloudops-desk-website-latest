import React from 'react';

const TechStack: React.FC = () => {
    const techs = [
        { name: 'Terraform', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/terraform/terraform-original.svg' },
        { name: 'Kubernetes', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg' },
        { name: 'AWS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg' },
        { name: 'GitHub Actions', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' },
        { name: 'Docker', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
        { name: 'Prometheus', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prometheus/prometheus-original.svg' },
        { name: 'Grafana', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/grafana/grafana-original.svg' },
        { name: 'ArgoCD', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/argocd/argocd-original.svg' },
    ];

    return (
        <div className="py-20 border-y border-slate-200 dark:border-white/5 bg-slate-50/50 dark:bg-slate-900/20 overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                <p className="text-center text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 mb-12">Trusted Technology Stack</p>
                <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-40 hover:opacity-100 transition-opacity grayscale hover:grayscale-0 duration-700">
                    {techs.map((tech) => (
                        <div key={tech.name} className="flex flex-col items-center gap-3 group">
                            <img
                                src={tech.icon}
                                alt={tech.name}
                                className="w-12 h-12 transition-transform duration-500 group-hover:scale-125 group-hover:-rotate-12"
                            />
                            <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500 opacity-0 group-hover:opacity-100 transition-opacity">{tech.name}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default TechStack;
