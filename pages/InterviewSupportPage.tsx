import React from 'react';
import { Link } from 'react-router-dom';
import SEOHead from '../components/SEOHead';
import QuoteForm from '../components/QuoteForm';
import FAQSection from '../components/FAQSection';

const schema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Live Interview Support",
  "provider": { "@type": "Organization", "name": "CloudOpsDesk", "url": "https://cloudopsdesk.in" },
  "serviceType": "Live Interview Support",
  "description": "Real-time technical interview guidance and coaching during live interview rounds for IT professionals."
};

const InterviewSupportPage: React.FC = () => {
  return (
    <>
      <SEOHead
        title="Live Interview Support | Tech Guidance Online"
        description="Real-time expert guidance during technical interviews. 1-on-1 live coaching from senior engineers for DevOps, Cloud, Full Stack & Data roles."
        canonical="/interview-support"
        keywords="live interview support, technical interview assistance, real time interview guidance, interview coaching live, technical interview help online"
        schema={schema}
      />
      <section className="pt-32 pb-20 px-4 max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-6">
          Live Interview Support — Expert Guidance When You Need It
        </h1>
        <p className="text-lg text-slate-600 dark:text-slate-300 mb-4 max-w-3xl">
          Nervous about your upcoming technical interview? Get real-time coaching from a senior industry expert who helps you navigate tough questions confidently.
        </p>
        <div className="flex flex-wrap gap-3 mb-10">
          <span className="bg-sky-100 dark:bg-sky-900/30 text-sky-700 dark:text-sky-300 px-3 py-1 rounded-full text-sm font-medium">Real-Time Expert Guidance</span>
          <span className="bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 px-3 py-1 rounded-full text-sm font-medium">All Tech Domains</span>
          <span className="bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 px-3 py-1 rounded-full text-sm font-medium">Confidential</span>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-10">
          <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-sm">
            <h2 className="text-2xl font-black text-slate-900 dark:text-white mb-4">How It Works</h2>
            <ul className="space-y-3 text-slate-600 dark:text-slate-300">
              <li>📅 Share your interview schedule in advance</li>
              <li>🧑‍💻 Expert assigned based on your tech domain</li>
              <li>🎧 Real-time 1-on-1 coaching during the interview</li>
              <li>💡 Expert helps you frame better answers</li>
              <li>📋 Post-interview debrief & feedback</li>
            </ul>
          </div>
          <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-sm">
            <h2 className="text-2xl font-black text-slate-900 dark:text-white mb-4">Domains Supported</h2>
            <ul className="space-y-3 text-slate-600 dark:text-slate-300">
              <li>⚙️ DevOps & SRE (AWS, K8s, Terraform, CI/CD)</li>
              <li>💻 Full Stack (React, Node.js, Java, Python)</li>
              <li>📊 Data Engineering (Spark, SQL, Snowflake, Kafka)</li>
              <li>🤖 AI/ML (Python, TensorFlow, LLM, MLOps)</li>
              <li>☁️ Cloud (AWS SA, Azure Admin, GCP)</li>
              <li>🔍 QA (Selenium, API Testing, Performance)</li>
            </ul>
          </div>
        </div>

        <div className="bg-amber-50 dark:bg-amber-900/10 border border-amber-200 dark:border-amber-800 rounded-2xl p-8 mb-10">
          <h2 className="text-2xl font-black text-slate-900 dark:text-white mb-4">Why Candidates Choose Us</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="text-center p-4">
              <div className="text-3xl mb-2">🏆</div>
              <p className="text-sm font-semibold text-slate-900 dark:text-white">85% Success Rate</p>
              <p className="text-xs text-slate-500">Candidates who clear with our support</p>
            </div>
            <div className="text-center p-4">
              <div className="text-3xl mb-2">⚡</div>
              <p className="text-sm font-semibold text-slate-900 dark:text-white">Same-Day Booking</p>
              <p className="text-xs text-slate-500">Urgent interview? We're available</p>
            </div>
            <div className="text-center p-4">
              <div className="text-3xl mb-2">🔒</div>
              <p className="text-sm font-semibold text-slate-900 dark:text-white">100% Confidential</p>
              <p className="text-xs text-slate-500">Complete privacy guaranteed</p>
            </div>
          </div>
        </div>

        {/* How Live Interview Support Helps */}
        <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-sm mb-10">
          <h2 className="text-2xl font-black text-slate-900 dark:text-white mb-4">How Live Interview Support Helps You Succeed</h2>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
            Technical interviews can be unpredictable — unexpected questions, complex system design scenarios, or unfamiliar technology stacks. Our live interview support connects you with a senior engineer who listens in real-time and provides guidance through a private channel, helping you frame better answers and navigate tricky questions with confidence.
          </p>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
            This service is particularly valuable for candidates interviewing for roles above their current experience level, switching domains, or facing interviews at top-tier companies with rigorous multi-round processes. With an 85% success rate, our supported candidates consistently outperform their peers.
          </p>
        </div>

        <FAQSection faqs={[
          { question: 'Is live interview support confidential?', answer: 'Absolutely. We maintain 100% confidentiality. Our expert communicates with you through a private, separate channel that is not visible or audible to the interviewer. Your privacy is guaranteed.' },
          { question: 'How do I book live interview support?', answer: 'WhatsApp us with your interview date, time, company name, role, and tech domain. We assign a domain expert and do a 15-minute prep call before your interview to understand your background and the expected format.' },
          { question: 'Can I get support for same-day interviews?', answer: 'Yes, we offer same-day booking. WhatsApp us as soon as you get the interview invite, and we will match you with an available expert. For best results, booking 24 hours in advance is recommended.' },
          { question: 'What technology domains do you support?', answer: 'We cover all major IT domains including DevOps, SRE, Full Stack (React, Node.js, Java, Python, .NET), Data Engineering (Spark, Kafka, SQL, Snowflake), AI/ML, Cloud Architecture (AWS, Azure, GCP), and QA Automation.' },
          { question: 'Do you support system design and architecture rounds?', answer: 'Yes, system design is one of our strongest areas. Our experts help you structure your answers, draw architecture diagrams, discuss trade-offs, and present scalable solutions that interviewers expect for senior and lead positions.' },
          { question: 'What is the success rate of live interview support?', answer: 'Our candidates have an 85% success rate in clearing technical rounds with live support. The combination of domain expertise, real-time guidance, and post-interview feedback makes this our most effective service for immediate results.' },
        ]} />

        {/* Explore More Services */}
        <div className="mb-10">
          <h2 className="text-2xl font-black text-slate-900 dark:text-white mb-4">Explore More Services</h2>
          <div className="flex flex-wrap gap-3">
            <Link to="/mock-interview-preparation" className="px-4 py-2 bg-white dark:bg-slate-800 rounded-xl text-sm font-medium text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:border-primary-500 transition-colors">Mock Interview Prep</Link>
            <Link to="/resume-linkedin-optimization" className="px-4 py-2 bg-white dark:bg-slate-800 rounded-xl text-sm font-medium text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:border-primary-500 transition-colors">Resume & LinkedIn</Link>
            <Link to="/job-support" className="px-4 py-2 bg-white dark:bg-slate-800 rounded-xl text-sm font-medium text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:border-primary-500 transition-colors">IT Job Support</Link>
            <Link to="/devops-job-support" className="px-4 py-2 bg-white dark:bg-slate-800 rounded-xl text-sm font-medium text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:border-primary-500 transition-colors">DevOps Job Support</Link>
            <Link to="/interview-preparation" className="px-4 py-2 bg-white dark:bg-slate-800 rounded-xl text-sm font-medium text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:border-primary-500 transition-colors">Interview Prep</Link>
          </div>
        </div>

        <QuoteForm />
      </section>
    </>
  );
};

export default InterviewSupportPage;
