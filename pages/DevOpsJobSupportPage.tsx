import React from 'react';
import SEOHead from '../components/SEOHead';
import QuoteForm from '../components/QuoteForm';

const schema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "DevOps Job Support",
  "description": "24/7 real-time DevOps job support from senior engineers. Get help with AWS, Azure, Kubernetes, Terraform, CI/CD pipelines, and production issues.",
  "provider": {
    "@type": "Organization",
    "name": "CloudOps Desk"
  }
};

const DevOpsJobSupportPage: React.FC = () => {
  return (
    <>
      <SEOHead
        title="DevOps Job Support India | 24/7 On-Job Support — CloudOps Desk"
        description="Get real-time DevOps job support from senior engineers. 24/7 help with AWS, Azure, Kubernetes, Terraform, CI/CD, Docker & production issues. India's #1 on-job support service."
        canonical="/devops-job-support"
        keywords="devops job support, devops on job support india, aws devops support, kubernetes support, terraform help, ci cd pipeline support"
        schema={schema}
      />
      <section className="pt-32 pb-20 px-4 max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
          DevOps Job Support
        </h1>
        <p className="text-lg text-slate-600 dark:text-slate-300 mb-8 max-w-3xl">
          Struggling with production issues or complex DevOps tasks at work? Our senior engineers provide 24/7 real-time support to help you deliver quality work confidently.
        </p>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-sm">
            <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4">What We Cover</h2>
            <ul className="space-y-3 text-slate-600 dark:text-slate-300">
              <li>• AWS, Azure & GCP infrastructure management</li>
              <li>• Kubernetes & Docker container orchestration</li>
              <li>• Terraform & Infrastructure as Code</li>
              <li>• CI/CD pipelines (Jenkins, GitHub Actions, GitLab CI)</li>
              <li>• Monitoring & observability (Prometheus, Grafana, ELK)</li>
              <li>• Production incident resolution</li>
            </ul>
          </div>
          <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-sm">
            <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4">How It Works</h2>
            <ul className="space-y-3 text-slate-600 dark:text-slate-300">
              <li>1. Share your task or issue via screen share</li>
              <li>2. Senior engineer analyzes and guides you</li>
              <li>3. Get real-time hands-on support</li>
              <li>4. Learn while delivering quality work</li>
            </ul>
          </div>
        </div>

        <QuoteForm />
      </section>
    </>
  );
};

export default DevOpsJobSupportPage;
