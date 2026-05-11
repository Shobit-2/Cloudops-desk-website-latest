import React from 'react';
import { Link } from 'react-router-dom';
import SEOHead from '../components/SEOHead';
import QuoteForm from '../components/QuoteForm';
import FAQSection from '../components/FAQSection';

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
        title="DevOps Job Support India | 24/7 — CloudOpsDesk"
        description="24/7 DevOps job support from senior engineers. Help with AWS, Kubernetes, Terraform, CI/CD, Docker & production issues. India's top service."
        canonical="/devops-job-support"
        keywords="devops job support, devops on job support india, aws devops support, kubernetes support, terraform help, ci cd pipeline support"
        schema={schema}
      />
      <section className="pt-32 pb-20 px-4 max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-6">
          DevOps Job Support
        </h1>
        <p className="text-lg text-slate-600 dark:text-slate-300 mb-8 max-w-3xl">
          Struggling with production issues or complex DevOps tasks at work? Our senior engineers provide 24/7 real-time support to help you deliver quality work confidently.
        </p>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-sm">
            <h2 className="text-2xl font-black text-slate-900 dark:text-white mb-4">What We Cover</h2>
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
            <h2 className="text-2xl font-black text-slate-900 dark:text-white mb-4">How It Works</h2>
            <ul className="space-y-3 text-slate-600 dark:text-slate-300">
              <li>1. Share your task or issue via screen share</li>
              <li>2. Senior engineer analyzes and guides you</li>
              <li>3. Get real-time hands-on support</li>
              <li>4. Learn while delivering quality work</li>
            </ul>
          </div>
        </div>

        {/* Why DevOps Job Support */}
        <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-sm mb-10">
          <h2 className="text-2xl font-black text-slate-900 dark:text-white mb-4">Why IT Professionals Choose DevOps Job Support</h2>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
            DevOps roles come with unique pressures — production outages, complex multi-cloud environments, unfamiliar tools, and tight deadlines. Whether you are new to a DevOps role, transitioning from development or operations, or handling a technology stack you have not worked with before, having an experienced engineer available to guide you in real-time can be the difference between success and struggle.
          </p>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
            Our DevOps job support has helped over 200 professionals successfully navigate their first 6 months in new roles at companies including TCS, Infosys, Wipro, Cognizant, Accenture, and top product companies. You learn while delivering, building genuine expertise that stays with you beyond the support period.
          </p>
        </div>

        <FAQSection faqs={[
          { question: 'What is DevOps job support and how does it work?', answer: 'DevOps job support is a service where a senior DevOps engineer assists you with your daily work tasks in real-time via screen share. You share your task or issue, and the expert guides you through the solution while explaining the concepts so you learn while delivering quality work.' },
          { question: 'Is DevOps job support available 24/7?', answer: 'Yes, we provide 24/7 support to accommodate different time zones and urgent production issues. You can reach out any time via WhatsApp and get connected with an available DevOps expert within minutes.' },
          { question: 'What DevOps tools and technologies do you cover?', answer: 'We cover the entire DevOps ecosystem including AWS, Azure, GCP, Kubernetes, Docker, Terraform, Jenkins, GitHub Actions, GitLab CI, Ansible, Prometheus, Grafana, ELK Stack, ArgoCD, Helm, and more. Our experts have production experience with all major cloud and DevOps tooling.' },
          { question: 'Can you help with production incidents and outages?', answer: 'Absolutely. Production incident resolution is one of our core strengths. Our experts help you diagnose issues, implement fixes, and conduct root cause analysis. We also help you set up monitoring and alerting to prevent future incidents.' },
          { question: 'How is this different from online tutorials or courses?', answer: 'Unlike tutorials, our support is contextualized to your actual work environment, your company tools, and your specific tasks. You get real-time help with real problems, not theoretical exercises. This means you deliver quality work immediately while building genuine skills.' },
          { question: 'How much does DevOps job support cost?', answer: 'Pricing depends on the support plan — we offer hourly, weekly, and monthly packages. Contact us via WhatsApp for current pricing. We also offer a free initial consultation to understand your needs and recommend the right plan.' },
        ]} />

        {/* Related Services — Internal Linking */}
        <div className="mb-10">
          <h2 className="text-2xl font-black text-slate-900 dark:text-white mb-4">Explore More Services</h2>
          <div className="flex flex-wrap gap-3">
            <Link to="/aws-job-support" className="px-4 py-2 bg-white dark:bg-slate-800 rounded-xl text-sm font-medium text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:border-primary-500 transition-colors">AWS Job Support</Link>
            <Link to="/cloud-job-support" className="px-4 py-2 bg-white dark:bg-slate-800 rounded-xl text-sm font-medium text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:border-primary-500 transition-colors">Cloud Job Support</Link>
            <Link to="/full-stack-job-support" className="px-4 py-2 bg-white dark:bg-slate-800 rounded-xl text-sm font-medium text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:border-primary-500 transition-colors">Full Stack Support</Link>
            <Link to="/interview-preparation" className="px-4 py-2 bg-white dark:bg-slate-800 rounded-xl text-sm font-medium text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:border-primary-500 transition-colors">Interview Prep</Link>
            <Link to="/resume-linkedin-optimization" className="px-4 py-2 bg-white dark:bg-slate-800 rounded-xl text-sm font-medium text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:border-primary-500 transition-colors">Resume & LinkedIn</Link>
          </div>
        </div>

        <QuoteForm />
      </section>
    </>
  );
};

export default DevOpsJobSupportPage;
