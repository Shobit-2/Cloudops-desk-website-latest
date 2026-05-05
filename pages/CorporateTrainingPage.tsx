import React from 'react';
import SEOHead from '../components/SEOHead';
import QuoteForm from '../components/QuoteForm';

const schema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Corporate Training — DevOps, DevSecOps & Cloud",
  "description": "Task-based, hands-on corporate training for DevOps, DevSecOps, Cloud Engineering, SRE and Platform Engineering teams. Real-world labs and production-grade scenarios.",
  "provider": {
    "@type": "Organization",
    "name": "CloudOps Desk"
  }
};

const CorporateTrainingPage: React.FC = () => {
  return (
    <>
      <SEOHead
        title="Corporate Training | DevOps, DevSecOps & Cloud — Hands-On & Task-Based | CloudOps Desk"
        description="Task-based, hands-on corporate training for DevOps, DevSecOps, Cloud & SRE teams. Real labs, production scenarios, no slides. AWS, Azure, GCP, Kubernetes, Terraform, CI/CD & more."
        canonical="/corporate-training"
        keywords="devops corporate training, devsecops training, cloud training teams, kubernetes training corporate, terraform training, hands on devops training, task based cloud training, sre training"
        schema={schema}
      />
      <section className="pt-32 pb-20 px-4 max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
          Corporate Training — DevOps, DevSecOps & Cloud
        </h1>
        <p className="text-lg text-slate-600 dark:text-slate-300 mb-4 max-w-3xl">
          100% task-based, hands-on training for your engineering teams. No slides, no theory dumps — your team works on real infrastructure, builds real pipelines, and solves production-grade problems from day one.
        </p>
        <div className="flex flex-wrap gap-3 mb-10">
          <span className="bg-sky-100 dark:bg-sky-900/30 text-sky-700 dark:text-sky-300 px-3 py-1 rounded-full text-sm font-medium">100% Hands-On</span>
          <span className="bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 px-3 py-1 rounded-full text-sm font-medium">Task-Based Learning</span>
          <span className="bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 px-3 py-1 rounded-full text-sm font-medium">Real Production Scenarios</span>
        </div>

        {/* Training Approach */}
        <div className="bg-green-50 dark:bg-green-900/10 border border-green-200 dark:border-green-800 rounded-2xl p-8 mb-10">
          <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4">Our Training Approach</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-3xl mb-2">🛠️</div>
              <h3 className="font-semibold text-slate-900 dark:text-white mb-1">Task-Based</h3>
              <p className="text-sm text-slate-600 dark:text-slate-300">Every module is a hands-on task — deploy, configure, troubleshoot, automate</p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-2">🏗️</div>
              <h3 className="font-semibold text-slate-900 dark:text-white mb-1">Production-Grade Labs</h3>
              <p className="text-sm text-slate-600 dark:text-slate-300">Real cloud environments, not sandboxed simulators</p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-2">🎯</div>
              <h3 className="font-semibold text-slate-900 dark:text-white mb-1">Role-Specific</h3>
              <p className="text-sm text-slate-600 dark:text-slate-300">Tailored to your team's exact roles and tech stack</p>
            </div>
          </div>
        </div>

        {/* Training Tracks */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-sm border border-slate-100 dark:border-slate-700">
            <div className="text-2xl mb-3">⚙️</div>
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">DevOps & SRE</h3>
            <ul className="text-sm text-slate-600 dark:text-slate-400 space-y-1">
              <li>• CI/CD Pipelines (Jenkins, GitLab CI, GitHub Actions)</li>
              <li>• Kubernetes & Helm deployments</li>
              <li>• Terraform & Infrastructure as Code</li>
              <li>• Docker containerization</li>
              <li>• Monitoring (Prometheus, Grafana, ELK)</li>
              <li>• Ansible & Configuration Management</li>
            </ul>
          </div>
          <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-sm border border-slate-100 dark:border-slate-700">
            <div className="text-2xl mb-3">🔒</div>
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">DevSecOps</h3>
            <ul className="text-sm text-slate-600 dark:text-slate-400 space-y-1">
              <li>• Shift-Left Security in CI/CD</li>
              <li>• SAST/DAST integration (SonarQube, Snyk)</li>
              <li>• Container security & image scanning</li>
              <li>• Secrets management (Vault, AWS SM)</li>
              <li>• Compliance as Code (OPA, Kyverno)</li>
              <li>• Security monitoring & incident response</li>
            </ul>
          </div>
          <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-sm border border-slate-100 dark:border-slate-700">
            <div className="text-2xl mb-3">☁️</div>
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Cloud Engineering</h3>
            <ul className="text-sm text-slate-600 dark:text-slate-400 space-y-1">
              <li>• AWS (EC2, EKS, Lambda, VPC, IAM)</li>
              <li>• Azure (AKS, DevOps, Functions, ARM)</li>
              <li>• GCP (GKE, Cloud Build, IAM)</li>
              <li>• Multi-cloud architecture</li>
              <li>• Cost optimization & FinOps</li>
              <li>• Cloud migration strategies</li>
            </ul>
          </div>
          <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-sm border border-slate-100 dark:border-slate-700">
            <div className="text-2xl mb-3">🚀</div>
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Platform Engineering</h3>
            <ul className="text-sm text-slate-600 dark:text-slate-400 space-y-1">
              <li>• Internal Developer Platforms (IDPs)</li>
              <li>• Service mesh (Istio, Linkerd)</li>
              <li>• GitOps (ArgoCD, Flux)</li>
              <li>• Developer portals (Backstage)</li>
              <li>• Self-service infrastructure</li>
            </ul>
          </div>
          <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-sm border border-slate-100 dark:border-slate-700">
            <div className="text-2xl mb-3">📊</div>
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Observability & SRE</h3>
            <ul className="text-sm text-slate-600 dark:text-slate-400 space-y-1">
              <li>• Prometheus & Grafana stack</li>
              <li>• ELK / OpenSearch logging</li>
              <li>• Distributed tracing (Jaeger, Tempo)</li>
              <li>• SLOs, SLIs & error budgets</li>
              <li>• Incident management & runbooks</li>
            </ul>
          </div>
          <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-sm border border-slate-100 dark:border-slate-700">
            <div className="text-2xl mb-3">🐍</div>
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Scripting & Automation</h3>
            <ul className="text-sm text-slate-600 dark:text-slate-400 space-y-1">
              <li>• Python for DevOps</li>
              <li>• Bash/Shell scripting</li>
              <li>• Go for cloud-native tooling</li>
              <li>• Automation frameworks</li>
              <li>• API integration & webhooks</li>
            </ul>
          </div>
        </div>

        {/* How It Works */}
        <div className="bg-blue-50 dark:bg-blue-900/10 border border-blue-200 dark:border-blue-800 rounded-2xl p-8 mb-10">
          <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4">How Training Works</h2>
          <div className="grid md:grid-cols-4 gap-4">
            <div className="text-center">
              <div className="bg-blue-500 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold mx-auto mb-2">1</div>
              <p className="text-sm font-medium text-slate-900 dark:text-white">Assessment</p>
              <p className="text-xs text-slate-500">We assess your team's current skill level</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-500 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold mx-auto mb-2">2</div>
              <p className="text-sm font-medium text-slate-900 dark:text-white">Custom Curriculum</p>
              <p className="text-xs text-slate-500">Task-based modules mapped to your stack</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-500 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold mx-auto mb-2">3</div>
              <p className="text-sm font-medium text-slate-900 dark:text-white">Hands-On Labs</p>
              <p className="text-xs text-slate-500">Live labs on real cloud infrastructure</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-500 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold mx-auto mb-2">4</div>
              <p className="text-sm font-medium text-slate-900 dark:text-white">Capstone Project</p>
              <p className="text-xs text-slate-500">End-to-end project mimicking production</p>
            </div>
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="grid md:grid-cols-2 gap-8 mb-10">
          <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-sm">
            <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4">Why CloudOps Desk</h2>
            <ul className="space-y-3 text-slate-600 dark:text-slate-300">
              <li>✅ Trainers are practicing DevOps/Cloud engineers (8+ yrs)</li>
              <li>✅ Zero slides — 100% terminal & console work</li>
              <li>✅ Each session ends with a working deliverable</li>
              <li>✅ Flexible scheduling (online)</li>
              <li>✅ Post-training support & doubt clearing</li>
            </ul>
          </div>
          <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-sm">
            <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4">Ideal For</h2>
            <ul className="space-y-3 text-slate-600 dark:text-slate-300">
              <li>🏢 Engineering teams adopting DevOps/Cloud</li>
              <li>🔄 Teams migrating to Kubernetes or microservices</li>
              <li>🔒 Organizations implementing DevSecOps</li>
              <li>☁️ Teams moving workloads to AWS/Azure/GCP</li>
              <li>📈 Companies upskilling existing ops teams to SRE</li>
              <li>🆕 Freshers being onboarded to DevOps roles</li>
            </ul>
          </div>
        </div>

        <QuoteForm />
      </section>
    </>
  );
};

export default CorporateTrainingPage;
