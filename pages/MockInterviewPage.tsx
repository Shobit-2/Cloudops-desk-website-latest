import React from 'react';
import SEOHead from '../components/SEOHead';
import QuoteForm from '../components/QuoteForm';

const schema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Mock Interview Preparation",
  "provider": { "@type": "Organization", "name": "CloudOpsDesk", "url": "https://cloudopsdesk.in" },
  "serviceType": "Mock Interview Preparation",
  "description": "1-on-1 mock interview preparation with domain experts for DevOps, Full Stack, Data Engineering, AI/ML, Cloud and QA professionals."
};

const MockInterviewPage: React.FC = () => {
  return (
    <>
      <SEOHead
        title="Mock Interview Preparation | 1-on-1 Coaching | CloudOpsDesk"
        description="Not confident about your technical interview? Practice with real industry experts. Detailed feedback after every session. All IT domains covered. 300+ candidates helped crack interviews."
        canonical="/mock-interview-preparation"
        keywords="mock interview online, devops mock interview, full stack developer mock interview, data engineer mock interview, interview coaching, technical interview preparation"
        schema={schema}
      />
      <section className="pt-32 pb-20 px-4 max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
          Mock Interview Preparation
        </h1>
        <p className="text-lg text-slate-600 dark:text-slate-300 mb-4 max-w-3xl">
          Crack your dream tech job with our expert-led 1-on-1 mock interview sessions. Realistic simulations with real company questions and detailed performance feedback.
        </p>
        <div className="flex flex-wrap gap-3 mb-10">
          <span className="bg-sky-100 dark:bg-sky-900/30 text-sky-700 dark:text-sky-300 px-3 py-1 rounded-full text-sm font-medium">300+ Candidates Placed</span>
          <span className="bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 px-3 py-1 rounded-full text-sm font-medium">1-on-1 Expert Sessions</span>
          <span className="bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 px-3 py-1 rounded-full text-sm font-medium">Flexible Scheduling</span>
        </div>

        <div className="bg-red-50 dark:bg-red-900/10 border border-red-200 dark:border-red-800 rounded-2xl p-8 mb-10">
          <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4">Common Interview Struggles</h2>
          <ul className="space-y-3 text-slate-700 dark:text-slate-300">
            <li>• Lack of confidence during technical rounds</li>
            <li>• Unable to articulate experience and projects clearly</li>
            <li>• No practice with real-world interview scenarios</li>
            <li>• Weak in system design and architecture discussions</li>
            <li>• Don't know what to expect in specific company rounds</li>
          </ul>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-10">
          <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-sm">
            <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4">What We Cover</h2>
            <ul className="space-y-3 text-slate-600 dark:text-slate-300">
              <li>🎯 Technical round simulations with real questions</li>
              <li>🏗️ System design & architecture interviews</li>
              <li>💻 DSA & coding round practice</li>
              <li>🗣️ Behavioral & HR round coaching (STAR method)</li>
              <li>📊 Detailed scorecard & feedback after each session</li>
              <li>📝 Resume & introduction optimization</li>
            </ul>
          </div>
          <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-sm">
            <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4">Domains Covered</h2>
            <ul className="space-y-3 text-slate-600 dark:text-slate-300">
              <li>⚙️ DevOps & Cloud (AWS, Azure, K8s, Terraform)</li>
              <li>💻 Full Stack (React, Node.js, Java, Python, .NET)</li>
              <li>📊 Data Engineering (Spark, Kafka, SQL, Snowflake)</li>
              <li>🤖 AI/ML (TensorFlow, PyTorch, LangChain)</li>
              <li>🔍 QA Automation (Selenium, Cypress, Playwright)</li>
              <li>☁️ Cloud Architecture (Solutions Architect prep)</li>
            </ul>
          </div>
        </div>

        <div className="bg-blue-50 dark:bg-blue-900/10 border border-blue-200 dark:border-blue-800 rounded-2xl p-8 mb-10">
          <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4">How It Works</h2>
          <div className="grid md:grid-cols-4 gap-4">
            <div className="text-center">
              <div className="bg-blue-500 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold mx-auto mb-2">1</div>
              <p className="text-sm text-slate-600 dark:text-slate-300">Book a session via WhatsApp</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-500 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold mx-auto mb-2">2</div>
              <p className="text-sm text-slate-600 dark:text-slate-300">Share your target role & domain</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-500 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold mx-auto mb-2">3</div>
              <p className="text-sm text-slate-600 dark:text-slate-300">Attend 1-on-1 mock session</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-500 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold mx-auto mb-2">4</div>
              <p className="text-sm text-slate-600 dark:text-slate-300">Get detailed feedback report</p>
            </div>
          </div>
        </div>

        <QuoteForm />
      </section>
    </>
  );
};

export default MockInterviewPage;
