import React from 'react';
import { Link } from 'react-router-dom';
import SEOHead from '../components/SEOHead';
import QuoteForm from '../components/QuoteForm';
import FAQSection from '../components/FAQSection';

const schema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Interview Preparation",
  "description": "Complete interview preparation service including mock interviews, system design, DSA, and real-time interview coaching for tech professionals.",
  "provider": {
    "@type": "Organization",
    "name": "CloudOps Desk"
  }
};

const InterviewPreparationPage: React.FC = () => {
  return (
    <>
      <SEOHead
        title="Interview Preparation & Coaching | CloudOpsDesk"
        description="Ace tech interviews with expert coaching. Mock interviews, system design prep & real-time support for DevOps, Cloud & Full Stack roles."
        canonical="/interview-preparation"
        keywords="interview preparation, tech interview coaching, mock interviews, system design interview, devops interview prep, cloud interview support"
        schema={schema}
      />
      <section className="pt-32 pb-20 px-4 max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-6">
          Interview Preparation & Coaching
        </h1>
        <p className="text-lg text-slate-600 dark:text-slate-300 mb-8 max-w-3xl">
          Crack your dream tech job with our expert interview preparation services. From mock interviews to real-time coaching during actual rounds — we've got you covered.
        </p>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-sm">
            <h2 className="text-2xl font-black text-slate-900 dark:text-white mb-4">Our Services</h2>
            <ul className="space-y-3 text-slate-600 dark:text-slate-300">
              <li>• Mock technical interviews with feedback</li>
              <li>• System design interview preparation</li>
              <li>• DSA & coding round practice</li>
              <li>• Behavioral & HR round coaching</li>
              <li>• Real-time interview support</li>
              <li>• Resume & LinkedIn optimization</li>
            </ul>
          </div>
          <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-sm">
            <h2 className="text-2xl font-black text-slate-900 dark:text-white mb-4">Technologies Covered</h2>
            <ul className="space-y-3 text-slate-600 dark:text-slate-300">
              <li>• DevOps & Cloud (AWS, Azure, GCP)</li>
              <li>• Full Stack (React, Node.js, Java, Python)</li>
              <li>• Data Engineering (Spark, Kafka, Airflow)</li>
              <li>• QA Automation (Selenium, Cypress)</li>
            </ul>
          </div>
        </div>

        {/* What Makes Our Interview Coaching Different */}
        <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-sm mb-10">
          <h2 className="text-2xl font-black text-slate-900 dark:text-white mb-4">What Makes Our Interview Coaching Different</h2>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
            Generic interview preparation falls short in today's competitive tech market. Companies like Amazon, Google, Microsoft, and top Indian IT firms use multi-round interviews that test technical depth, system design thinking, coding ability, and behavioral competence. Our coaching addresses each of these areas with domain-specific expert mentors who have conducted hundreds of real interviews.
          </p>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
            We create a personalized preparation plan based on your target companies, role level, and current skill gaps. Whether you need help with DSA patterns, system design frameworks, or STAR method behavioral answers, our structured approach ensures you walk into every interview with confidence and clarity.
          </p>
        </div>

        {/* Interview Types */}
        <div className="bg-blue-50 dark:bg-blue-900/10 border border-blue-200 dark:border-blue-800 rounded-2xl p-8 mb-10">
          <h2 className="text-2xl font-black text-slate-900 dark:text-white mb-4">Interview Rounds We Prepare You For</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="bg-white dark:bg-slate-800 rounded-xl p-4">
              <h3 className="font-bold text-slate-900 dark:text-white mb-2">Technical Screening</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">First-round questions on fundamentals, tools, and domain knowledge</p>
            </div>
            <div className="bg-white dark:bg-slate-800 rounded-xl p-4">
              <h3 className="font-bold text-slate-900 dark:text-white mb-2">System Design</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">Architecture discussions, scalability, trade-offs, and design patterns</p>
            </div>
            <div className="bg-white dark:bg-slate-800 rounded-xl p-4">
              <h3 className="font-bold text-slate-900 dark:text-white mb-2">DSA & Coding</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">LeetCode-style problems, algorithms, time/space complexity</p>
            </div>
            <div className="bg-white dark:bg-slate-800 rounded-xl p-4">
              <h3 className="font-bold text-slate-900 dark:text-white mb-2">Behavioral (STAR)</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">Leadership, conflict resolution, team collaboration questions</p>
            </div>
            <div className="bg-white dark:bg-slate-800 rounded-xl p-4">
              <h3 className="font-bold text-slate-900 dark:text-white mb-2">HR & Culture Fit</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">Salary negotiation, motivation, career goals discussion</p>
            </div>
            <div className="bg-white dark:bg-slate-800 rounded-xl p-4">
              <h3 className="font-bold text-slate-900 dark:text-white mb-2">Managerial Rounds</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">Project deep dives, stakeholder management, decision-making</p>
            </div>
          </div>
        </div>

        <FAQSection faqs={[
          { question: 'How is interview preparation different from mock interviews?', answer: 'Interview preparation is a comprehensive coaching program covering strategy, study plans, topic mastery, and practice across all interview rounds. Mock interviews are individual simulated sessions focused on practice. Our preparation packages often include mock interviews as part of the complete program.' },
          { question: 'Can you prepare me for a specific company interview?', answer: 'Yes, we offer company-specific preparation for Amazon, Google, Microsoft, Meta, Flipkart, Swiggy, and other top companies. We use real interview questions from these companies and tailor our coaching to match their specific interview formats and evaluation criteria.' },
          { question: 'How long should I prepare before my interview?', answer: 'We recommend starting 2-4 weeks before your interview for optimal results. If you have less time, we offer intensive preparation programs that can be completed in 5-7 days. The key is focused, guided preparation rather than unstructured self-study.' },
          { question: 'Do you help with salary negotiation?', answer: 'Yes, salary negotiation guidance is included in our interview preparation. We help you research market rates, frame counter-offers professionally, and negotiate total compensation including base salary, bonuses, RSUs, and benefits.' },
          { question: 'What if I am switching from a different tech domain?', answer: 'Domain transitions are our specialty. If you are moving from QA to DevOps, or from Full Stack to Data Engineering, we create a bridge preparation plan that leverages your existing skills while building the new domain knowledge interviewers expect.' },
          { question: 'Do you provide a real-time support option during actual interviews?', answer: 'Yes, we offer live interview support as a separate service where an expert provides real-time guidance during your actual interview. You can combine interview preparation with live support for the best possible outcome.' },
        ]} />

        {/* Explore More Services */}
        <div className="mb-10">
          <h2 className="text-2xl font-black text-slate-900 dark:text-white mb-4">Explore More Services</h2>
          <div className="flex flex-wrap gap-3">
            <Link to="/mock-interview-preparation" className="px-4 py-2 bg-white dark:bg-slate-800 rounded-xl text-sm font-medium text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:border-primary-500 transition-colors">Mock Interview Prep</Link>
            <Link to="/interview-support" className="px-4 py-2 bg-white dark:bg-slate-800 rounded-xl text-sm font-medium text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:border-primary-500 transition-colors">Live Interview Support</Link>
            <Link to="/resume-linkedin-optimization" className="px-4 py-2 bg-white dark:bg-slate-800 rounded-xl text-sm font-medium text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:border-primary-500 transition-colors">Resume & LinkedIn</Link>
            <Link to="/devops-job-support" className="px-4 py-2 bg-white dark:bg-slate-800 rounded-xl text-sm font-medium text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:border-primary-500 transition-colors">DevOps Job Support</Link>
            <Link to="/job-support" className="px-4 py-2 bg-white dark:bg-slate-800 rounded-xl text-sm font-medium text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:border-primary-500 transition-colors">IT Job Support</Link>
          </div>
        </div>

        <QuoteForm />
      </section>
    </>
  );
};

export default InterviewPreparationPage;
