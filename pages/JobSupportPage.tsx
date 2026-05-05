import React from 'react';
import SEOHead from '../components/SEOHead';
import QuoteForm from '../components/QuoteForm';

const schema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "IT Job Support India",
  "provider": {
    "@type": "Organization",
    "name": "CloudOpsDesk",
    "url": "https://cloudopsdesk.in"
  },
  "serviceType": "IT Job Support",
  "description": "Real-time IT job support for DevOps, Full Stack, Data Engineering, AI/ML, Cloud and QA professionals in India. Get expert help with daily work tasks, troubleshooting and project delivery.",
  "areaServed": { "@type": "Country", "name": "India" },
  "audience": {
    "@type": "Audience",
    "audienceType": "IT professionals, freshers, working professionals"
  }
};

const JobSupportPage: React.FC = () => {
  return (
    <>
      <SEOHead
        title="IT Job Support India | Real-Time Help for All Tech Domains | CloudOpsDesk"
        description="Expert IT job support for DevOps, Full Stack, Data and AI professionals in India. Real-time help from certified engineers. Flexible timing. Contact CloudOpsDesk on WhatsApp for instant help!"
        canonical="/job-support"
        keywords="it job support india, real time it job support, devops job support, full stack job support, data engineer job support, ai engineer job support, online job assistance"
        schema={schema}
      />
      <section className="pt-32 pb-20 px-4 max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
          IT Job Support India — Real-Time Help for All Tech Domains
        </h1>
        <p className="text-lg text-slate-600 dark:text-slate-300 mb-4 max-w-3xl">
          Struggling with daily work tasks at your new job? CloudOpsDesk provides 24/7 real-time IT job support from senior engineers across all major technology domains.
        </p>
        <div className="flex flex-wrap gap-3 mb-10">
          <span className="bg-sky-100 dark:bg-sky-900/30 text-sky-700 dark:text-sky-300 px-3 py-1 rounded-full text-sm font-medium">500+ Professionals Helped</span>
          <span className="bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 px-3 py-1 rounded-full text-sm font-medium">24/7 Available</span>
          <span className="bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 px-3 py-1 rounded-full text-sm font-medium">All Domains Covered</span>
        </div>

        {/* Problem Section */}
        <div className="bg-red-50 dark:bg-red-900/10 border border-red-200 dark:border-red-800 rounded-2xl p-8 mb-10">
          <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4">Are You Struggling With...</h2>
          <ul className="space-y-3 text-slate-700 dark:text-slate-300">
            <li>• Production issues you can't solve alone and deadlines looming?</li>
            <li>• New job with unfamiliar tech stack and no one to help?</li>
            <li>• Complex infrastructure tasks assigned to you with no documentation?</li>
            <li>• Fear of job loss due to inability to deliver on daily tasks?</li>
            <li>• Working in a team where you feel left behind technically?</li>
          </ul>
        </div>

        {/* Solution Section */}
        <div className="bg-green-50 dark:bg-green-900/10 border border-green-200 dark:border-green-800 rounded-2xl p-8 mb-10">
          <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4">Here's How CloudOpsDesk Helps You</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <span className="bg-green-500 text-white rounded-full w-7 h-7 flex items-center justify-center text-sm font-bold flex-shrink-0">1</span>
                <p className="text-slate-700 dark:text-slate-300">Share your task or issue via screen share</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="bg-green-500 text-white rounded-full w-7 h-7 flex items-center justify-center text-sm font-bold flex-shrink-0">2</span>
                <p className="text-slate-700 dark:text-slate-300">Senior engineer analyzes and guides you in real-time</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="bg-green-500 text-white rounded-full w-7 h-7 flex items-center justify-center text-sm font-bold flex-shrink-0">3</span>
                <p className="text-slate-700 dark:text-slate-300">Get hands-on support to complete the task</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="bg-green-500 text-white rounded-full w-7 h-7 flex items-center justify-center text-sm font-bold flex-shrink-0">4</span>
                <p className="text-slate-700 dark:text-slate-300">Learn while delivering quality work at your job</p>
              </div>
            </div>
            <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-sm">
              <h3 className="font-semibold text-slate-900 dark:text-white mb-3">Domains We Support</h3>
              <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-300">
                <li>⚙️ DevOps — AWS, Kubernetes, Terraform, Docker, Jenkins</li>
                <li>💻 Full Stack — React, Node.js, Java, Python, Angular</li>
                <li>📊 Data Engineering — Spark, Snowflake, dbt, Airflow, SQL</li>
                <li>🤖 AI/ML — TensorFlow, LangChain, MLOps, Python</li>
                <li>☁️ Cloud — AWS, Azure, GCP Multi-Cloud</li>
                <li>🔍 QA — Selenium, Playwright, API Testing, Performance</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-6 mb-10">
          <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-sm text-center">
            <div className="text-3xl mb-3">✅</div>
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Certified Experts</h3>
            <p className="text-sm text-slate-600 dark:text-slate-400">Industry-experienced engineers with 8+ years experience</p>
          </div>
          <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-sm text-center">
            <div className="text-3xl mb-3">⏰</div>
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Flexible Timing</h3>
            <p className="text-sm text-slate-600 dark:text-slate-400">Available 24/7 including weekends & urgent requests</p>
          </div>
          <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-sm text-center">
            <div className="text-3xl mb-3">💰</div>
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">India Pricing</h3>
            <p className="text-sm text-slate-600 dark:text-slate-400">Affordable monthly plans starting from ₹4,999/month</p>
          </div>
          <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-sm text-center">
            <div className="text-3xl mb-3">🖥️</div>
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Screen Share Support</h3>
            <p className="text-sm text-slate-600 dark:text-slate-400">Real-time screen sharing for live guidance</p>
          </div>
          <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-sm text-center">
            <div className="text-3xl mb-3">📚</div>
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Learn While Working</h3>
            <p className="text-sm text-slate-600 dark:text-slate-400">Upskill yourself while delivering at your job</p>
          </div>
          <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-sm text-center">
            <div className="text-3xl mb-3">🔒</div>
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">100% Confidential</h3>
            <p className="text-sm text-slate-600 dark:text-slate-400">NDA signed, complete privacy guaranteed</p>
          </div>
        </div>

        <QuoteForm />
      </section>
    </>
  );
};

export default JobSupportPage;
