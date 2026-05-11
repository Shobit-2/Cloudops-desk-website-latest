import React from 'react';
import { Link } from 'react-router-dom';
import SEOHead from '../components/SEOHead';
import QuoteForm from '../components/QuoteForm';
import FAQSection from '../components/FAQSection';

const schema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "IT Job Support",
  "provider": {
    "@type": "Organization",
    "name": "CloudOpsDesk",
    "url": "https://cloudopsdesk.in"
  },
  "serviceType": "IT Job Support",
  "description": "Real-time IT job support for DevOps, Full Stack, Data Engineering, AI/ML, Cloud and QA professionals. Get expert help with daily work tasks, troubleshooting and project delivery.",
  "audience": {
    "@type": "Audience",
    "audienceType": "IT professionals, freshers, working professionals"
  }
};

const JobSupportPage: React.FC = () => {
  return (
    <>
      <SEOHead
        title="IT Job Support | Real-Time Help | CloudOpsDesk"
        description="Expert IT job support for DevOps, Full Stack, Data & AI pros. Real-time help from certified engineers. Flexible timing. WhatsApp support."
        canonical="/job-support"
        keywords="it job support, real time it job support, devops job support, full stack job support, data engineer job support, ai engineer job support, online job assistance"
        schema={schema}
      />
      <section className="pt-32 pb-20 px-4 max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-6">
          IT Job Support — Real-Time Help for All Tech Domains
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
          <h2 className="text-2xl font-black text-slate-900 dark:text-white mb-4">Are You Struggling With...</h2>
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
          <h2 className="text-2xl font-black text-slate-900 dark:text-white mb-4">Here's How CloudOpsDesk Helps You</h2>
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
              <h3 className="font-bold text-slate-900 dark:text-white mb-3">Domains We Support</h3>
              <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-300">
                <li>⚙️ <Link to="/devops-job-support" className="text-primary-600 dark:text-primary-400 hover:underline">DevOps</Link> — AWS, Kubernetes, Terraform, Docker, Jenkins</li>
                <li>💻 <Link to="/full-stack-job-support" className="text-primary-600 dark:text-primary-400 hover:underline">Full Stack</Link> — React, Node.js, Java, Python, Angular</li>
                <li>📊 <Link to="/data-engineer-job-support" className="text-primary-600 dark:text-primary-400 hover:underline">Data Engineering</Link> — Spark, Snowflake, dbt, Airflow, SQL</li>
                <li>🤖 <Link to="/ai-ml-job-support" className="text-primary-600 dark:text-primary-400 hover:underline">AI/ML</Link> — TensorFlow, LangChain, MLOps, Python</li>
                <li>☁️ <Link to="/cloud-job-support" className="text-primary-600 dark:text-primary-400 hover:underline">Cloud</Link> — AWS, Azure, GCP Multi-Cloud</li>
                <li>🔍 <Link to="/qa-job-support" className="text-primary-600 dark:text-primary-400 hover:underline">QA</Link> — Selenium, Playwright, API Testing, Performance</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-6 mb-10">
          <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-sm text-center">
            <div className="text-3xl mb-3">✅</div>
            <h3 className="font-bold text-slate-900 dark:text-white mb-2">Certified Experts</h3>
            <p className="text-sm text-slate-600 dark:text-slate-400">Industry-experienced engineers with 8+ years experience</p>
          </div>
          <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-sm text-center">
            <div className="text-3xl mb-3">⏰</div>
            <h3 className="font-bold text-slate-900 dark:text-white mb-2">Flexible Timing</h3>
            <p className="text-sm text-slate-600 dark:text-slate-400">Available 24/7 including weekends & urgent requests</p>
          </div>
          <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-sm text-center">
            <div className="text-3xl mb-3">💰</div>
            <h3 className="font-bold text-slate-900 dark:text-white mb-2">Affordable Pricing</h3>
            <p className="text-sm text-slate-600 dark:text-slate-400">Flexible monthly plans tailored to your needs</p>
          </div>
          <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-sm text-center">
            <div className="text-3xl mb-3">🖥️</div>
            <h3 className="font-bold text-slate-900 dark:text-white mb-2">Screen Share Support</h3>
            <p className="text-sm text-slate-600 dark:text-slate-400">Real-time screen sharing for live guidance</p>
          </div>
          <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-sm text-center">
            <div className="text-3xl mb-3">📚</div>
            <h3 className="font-bold text-slate-900 dark:text-white mb-2">Learn While Working</h3>
            <p className="text-sm text-slate-600 dark:text-slate-400">Upskill yourself while delivering at your job</p>
          </div>
          <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-sm text-center">
            <div className="text-3xl mb-3">🔒</div>
            <h3 className="font-bold text-slate-900 dark:text-white mb-2">100% Confidential</h3>
            <p className="text-sm text-slate-600 dark:text-slate-400">NDA signed, complete privacy guaranteed</p>
          </div>
        </div>

        {/* Why Job Support Matters */}
        <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-sm mb-10">
          <h2 className="text-2xl font-black text-slate-900 dark:text-white mb-4">Why IT Job Support is Essential in 2025</h2>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
            The IT industry moves fast — new tools, frameworks, and cloud services emerge constantly. Professionals joining new roles or switching technology stacks often face a steep learning curve with tight deadlines and high expectations. Without proper mentorship, many struggle to keep up, risking their performance reviews and job security.
          </p>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
            IT job support from CloudOpsDesk solves this by providing you with an experienced engineer who guides you through your daily tasks in real-time. Unlike generic tutorials or courses, our support is contextualized to your actual work environment, tools, and challenges. You deliver quality work while building genuine expertise that stays with you long-term.
          </p>
        </div>

        <FAQSection faqs={[
          { question: 'What is IT job support?', answer: 'IT job support is a service where a senior engineer assists you with your daily work tasks in real-time. Through screen sharing and 1-on-1 sessions, you get expert guidance on coding, infrastructure, troubleshooting, and project delivery — helping you perform well at your job while learning on the go.' },
          { question: 'Who needs IT job support?', answer: 'IT job support is ideal for freshers starting their first IT job, experienced professionals switching to a new technology or domain, employees on probation wanting to make a strong impression, and anyone facing challenging tasks beyond their current skill level. Our clients span all experience levels from 0 to 15+ years.' },
          { question: 'How does real-time job support work?', answer: 'You connect with a senior engineer via screen share when you need help. Share your task, issue, or challenge, and the expert guides you through the solution step by step. You learn the approach and best practices while delivering quality work on time. Sessions can be scheduled or on-demand.' },
          { question: 'Is IT job support confidential?', answer: 'Yes, 100% confidentiality is guaranteed. We sign NDAs, do not share your personal or company information, and all communication is through encrypted channels. Your employer will never know you are using our support.' },
          { question: 'How much does IT job support cost?', answer: 'We offer flexible pricing plans — hourly, weekly, and monthly packages to suit different needs and budgets. Contact us via WhatsApp for current pricing. We also offer a free initial consultation to understand your needs and recommend the right plan.' },
          { question: 'Which IT domains do you provide job support for?', answer: 'We cover all major IT domains including DevOps, Full Stack Development (React, Node.js, Java, Python), Data Engineering (Spark, Snowflake, Airflow), AI/ML (TensorFlow, LangChain, MLOps), Cloud (AWS, Azure, GCP), and QA Automation (Selenium, Cypress, Playwright). We are one of the few providers covering AI/ML support.' },
        ]} />

        {/* More Services */}
        <div className="mb-10">
          <h2 className="text-2xl font-black text-slate-900 dark:text-white mb-4">More Career Services</h2>
          <div className="flex flex-wrap gap-3">
            <Link to="/resume-linkedin-optimization" className="px-4 py-2 bg-white dark:bg-slate-800 rounded-xl text-sm font-medium text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:border-primary-500 transition-colors">Resume & LinkedIn</Link>
            <Link to="/mock-interview-preparation" className="px-4 py-2 bg-white dark:bg-slate-800 rounded-xl text-sm font-medium text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:border-primary-500 transition-colors">Mock Interview Prep</Link>
            <Link to="/interview-support" className="px-4 py-2 bg-white dark:bg-slate-800 rounded-xl text-sm font-medium text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:border-primary-500 transition-colors">Live Interview Support</Link>
            <Link to="/certification-guidance" className="px-4 py-2 bg-white dark:bg-slate-800 rounded-xl text-sm font-medium text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:border-primary-500 transition-colors">Certification Guidance</Link>
            <Link to="/corporate-training" className="px-4 py-2 bg-white dark:bg-slate-800 rounded-xl text-sm font-medium text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:border-primary-500 transition-colors">Corporate Training</Link>
          </div>
        </div>

        <QuoteForm />
      </section>
    </>
  );
};

export default JobSupportPage;
