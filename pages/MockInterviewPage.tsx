import React from 'react';
import { Link } from 'react-router-dom';
import SEOHead from '../components/SEOHead';
import QuoteForm from '../components/QuoteForm';
import FAQSection from '../components/FAQSection';

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
        description="Practice with real industry experts. Detailed feedback after every session. All IT domains covered. 300+ candidates helped crack interviews."
        canonical="/mock-interview-preparation"
        keywords="mock interview online, devops mock interview, full stack developer mock interview, data engineer mock interview, interview coaching, technical interview preparation"
        schema={schema}
      />
      <section className="pt-32 pb-20 px-4 max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-6">
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
          <h2 className="text-2xl font-black text-slate-900 dark:text-white mb-4">Common Interview Struggles</h2>
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
            <h2 className="text-2xl font-black text-slate-900 dark:text-white mb-4">What We Cover</h2>
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
            <h2 className="text-2xl font-black text-slate-900 dark:text-white mb-4">Domains Covered</h2>
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
          <h2 className="text-2xl font-black text-slate-900 dark:text-white mb-4">How It Works</h2>
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

        {/* Who Should Take Mock Interviews */}
        <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-sm mb-10">
          <h2 className="text-2xl font-black text-slate-900 dark:text-white mb-4">Who Should Take Mock Interviews?</h2>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
            Mock interviews are essential for anyone preparing for a tech job switch or promotion. Whether you are a fresher facing your first technical round or an experienced professional targeting a senior or lead role, simulated interview practice dramatically improves your performance. Candidates who complete 3-5 mock sessions report 2x higher confidence and a 60% better success rate in real interviews.
          </p>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
            Our sessions are conducted by engineers and hiring managers from top companies who understand exactly what interviewers look for. Every session includes a detailed scorecard covering technical accuracy, communication clarity, problem-solving approach, and areas for improvement.
          </p>
        </div>

        <FAQSection faqs={[
          { question: 'How long is each mock interview session?', answer: 'Each session is 60 minutes — 45 minutes of simulated interview followed by 15 minutes of detailed feedback and improvement tips. You can book multiple sessions for different rounds like DSA, system design, and behavioral.' },
          { question: 'Can I choose the domain for my mock interview?', answer: 'Yes, you specify your target role and domain when booking. We match you with an expert interviewer from that exact domain — DevOps, Full Stack, Data Engineering, AI/ML, Cloud, or QA.' },
          { question: 'Do you use real company interview questions?', answer: 'Yes, our question bank includes real questions asked at companies like Amazon, Google, Microsoft, Flipkart, Swiggy, and top consulting firms. Questions are updated regularly based on candidate feedback.' },
          { question: 'Will I get a recording of my mock interview?', answer: 'We provide a detailed written scorecard and feedback report after each session. If you want a recording, let us know before the session and we can arrange it.' },
          { question: 'How many mock sessions should I take before a real interview?', answer: 'We recommend 3-5 sessions depending on your preparation level. Start with 2 sessions to identify weak areas, then take 1-2 focused sessions on those areas, and a final practice round for confidence.' },
          { question: 'Can I schedule a mock interview on short notice?', answer: 'Yes, we offer same-day and next-day scheduling for urgent interview preparations. WhatsApp us with your preferred time and domain, and we will match you with an available expert.' },
        ]} />

        {/* Explore More Services */}
        <div className="mb-10">
          <h2 className="text-2xl font-black text-slate-900 dark:text-white mb-4">Explore More Services</h2>
          <div className="flex flex-wrap gap-3">
            <Link to="/interview-support" className="px-4 py-2 bg-white dark:bg-slate-800 rounded-xl text-sm font-medium text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:border-primary-500 transition-colors">Live Interview Support</Link>
            <Link to="/resume-linkedin-optimization" className="px-4 py-2 bg-white dark:bg-slate-800 rounded-xl text-sm font-medium text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:border-primary-500 transition-colors">Resume & LinkedIn</Link>
            <Link to="/interview-preparation" className="px-4 py-2 bg-white dark:bg-slate-800 rounded-xl text-sm font-medium text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:border-primary-500 transition-colors">Interview Preparation</Link>
            <Link to="/job-support" className="px-4 py-2 bg-white dark:bg-slate-800 rounded-xl text-sm font-medium text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:border-primary-500 transition-colors">IT Job Support</Link>
            <Link to="/certification-guidance" className="px-4 py-2 bg-white dark:bg-slate-800 rounded-xl text-sm font-medium text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:border-primary-500 transition-colors">Certification Guidance</Link>
          </div>
        </div>

        <QuoteForm />
      </section>
    </>
  );
};

export default MockInterviewPage;
