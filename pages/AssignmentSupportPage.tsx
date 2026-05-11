import React from 'react';
import { Link } from 'react-router-dom';
import SEOHead from '../components/SEOHead';
import QuoteForm from '../components/QuoteForm';
import FAQSection from '../components/FAQSection';

const schema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Technical Assignment Support",
  "provider": { "@type": "Organization", "name": "CloudOpsDesk", "url": "https://cloudopsdesk.in" },
  "serviceType": "Technical Assignment Support",
  "description": "Expert help with technical coding assignments, take-home projects, and case studies given by recruiters for IT professionals."
};

const AssignmentSupportPage: React.FC = () => {
  return (
    <>
      <SEOHead
        title="Coding & Technical Assignment Help | CloudOpsDesk"
        description="Need help with take-home coding assignments? Our experts deliver quality work on time. DevOps, Full Stack, Data & AI assignments covered."
        canonical="/assignment-support"
        keywords="it assignment help, coding assignment help, take home coding assignment help, technical assignment support, devops assignment help, data engineering assignment help"
        schema={schema}
      />
      <section className="pt-32 pb-20 px-4 max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-6">
          Technical Assignment Support
        </h1>
        <p className="text-lg text-slate-600 dark:text-slate-300 mb-4 max-w-3xl">
          Got a take-home assignment from a recruiter? Our experts help you deliver high-quality, production-ready code that impresses hiring managers — on time, every time.
        </p>
        <div className="flex flex-wrap gap-3 mb-10">
          <span className="bg-sky-100 dark:bg-sky-900/30 text-sky-700 dark:text-sky-300 px-3 py-1 rounded-full text-sm font-medium">Urgent OK — Same Day</span>
          <span className="bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 px-3 py-1 rounded-full text-sm font-medium">All Tech Domains</span>
          <span className="bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 px-3 py-1 rounded-full text-sm font-medium">Code + Explanation</span>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-10">
          <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-sm">
            <h2 className="text-2xl font-black text-slate-900 dark:text-white mb-4">Assignment Types We Help With</h2>
            <ul className="space-y-3 text-slate-600 dark:text-slate-300">
              <li>💻 Coding assignments (any language/framework)</li>
              <li>🏗️ System design & architecture case studies</li>
              <li>⚙️ DevOps pipeline & infrastructure setup tasks</li>
              <li>📊 Data engineering ETL pipelines & queries</li>
              <li>🤖 ML model building & deployment tasks</li>
              <li>🧪 Automation test framework setup assignments</li>
            </ul>
          </div>
          <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-sm">
            <h2 className="text-2xl font-black text-slate-900 dark:text-white mb-4">What You Get</h2>
            <ul className="space-y-3 text-slate-600 dark:text-slate-300">
              <li>✅ Clean, production-quality code</li>
              <li>✅ Detailed README & documentation</li>
              <li>✅ Code walkthrough session (so you can explain it)</li>
              <li>✅ Best practices & design patterns applied</li>
              <li>✅ Git history with meaningful commits</li>
              <li>✅ Unlimited revisions until deadline</li>
            </ul>
          </div>
        </div>

        <div className="bg-amber-50 dark:bg-amber-900/10 border border-amber-200 dark:border-amber-800 rounded-2xl p-8 mb-10">
          <h2 className="text-2xl font-black text-slate-900 dark:text-white mb-4">⚡ Urgent Assignment?</h2>
          <p className="text-slate-700 dark:text-slate-300 mb-4">
            Have a deadline tonight or tomorrow? We offer same-day and next-day delivery for urgent assignments. WhatsApp us immediately with the assignment details and deadline.
          </p>
          <a
            href="https://wa.me/919999999999?text=Hi%2C%20I%20have%20an%20urgent%20assignment%20that%20needs%20to%20be%20done"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-3 rounded-lg transition-colors"
          >
            🆘 Get Urgent Assignment Help — WhatsApp Now
          </a>
        </div>

        {/* Why Quality Assignments Matter */}
        <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-sm mb-10">
          <h2 className="text-2xl font-black text-slate-900 dark:text-white mb-4">Why Assignment Quality Matters for Your Job Search</h2>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
            Take-home assignments are now a standard part of the hiring process at top tech companies. Recruiters use them to evaluate your coding standards, architecture decisions, documentation quality, and problem-solving approach. A poorly executed assignment can eliminate you before the interview stage, while an impressive submission can fast-track you to the offer.
          </p>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
            Our experts deliver production-quality code with proper documentation, meaningful git history, comprehensive test coverage, and a walkthrough session so you can confidently explain every design decision during the follow-up interview.
          </p>
        </div>

        <FAQSection faqs={[
          { question: 'Will the code be original and plagiarism-free?', answer: 'Yes, every assignment is written from scratch by our domain experts. We do not use templates or copy from open-source repositories. The code is unique, follows best practices for your target technology, and passes plagiarism checks used by recruiters.' },
          { question: 'Do you help me understand the code so I can explain it?', answer: 'Absolutely. Every assignment includes a 30-minute code walkthrough session where the expert explains the architecture, design decisions, trade-offs, and key implementation details. We also provide detailed inline comments and a README so you can confidently discuss the code in your interview.' },
          { question: 'What programming languages and frameworks do you support?', answer: 'We support all major languages and frameworks — Python, Java, JavaScript/TypeScript, Go, C#, React, Node.js, Spring Boot, Django, Flask, .NET, Terraform, Kubernetes manifests, Docker, Spark, Airflow, and more.' },
          { question: 'Can you handle urgent assignments with tight deadlines?', answer: 'Yes, we offer same-day and next-day delivery for urgent assignments. WhatsApp us immediately with the assignment details, deadline, and tech requirements. For deadlines under 6 hours, availability depends on the complexity and current expert availability.' },
          { question: 'What if the recruiter asks for revisions to my submitted assignment?', answer: 'We offer unlimited revisions until your assignment deadline. If the recruiter requests changes after submission, we will make those modifications and update the walkthrough so you are prepared for the revised version.' },
          { question: 'Is my information kept confidential?', answer: 'Yes, 100% confidentiality is guaranteed. We do not share your personal information, assignment details, or submission with anyone. All communication happens via encrypted WhatsApp, and we delete assignment files from our systems after delivery.' },
        ]} />

        {/* Explore More Services */}
        <div className="mb-10">
          <h2 className="text-2xl font-black text-slate-900 dark:text-white mb-4">Explore More Services</h2>
          <div className="flex flex-wrap gap-3">
            <Link to="/job-support" className="px-4 py-2 bg-white dark:bg-slate-800 rounded-xl text-sm font-medium text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:border-primary-500 transition-colors">IT Job Support</Link>
            <Link to="/mock-interview-preparation" className="px-4 py-2 bg-white dark:bg-slate-800 rounded-xl text-sm font-medium text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:border-primary-500 transition-colors">Mock Interview Prep</Link>
            <Link to="/resume-linkedin-optimization" className="px-4 py-2 bg-white dark:bg-slate-800 rounded-xl text-sm font-medium text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:border-primary-500 transition-colors">Resume & LinkedIn</Link>
            <Link to="/interview-preparation" className="px-4 py-2 bg-white dark:bg-slate-800 rounded-xl text-sm font-medium text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:border-primary-500 transition-colors">Interview Prep</Link>
            <Link to="/certification-guidance" className="px-4 py-2 bg-white dark:bg-slate-800 rounded-xl text-sm font-medium text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:border-primary-500 transition-colors">Certification Guidance</Link>
          </div>
        </div>

        <QuoteForm />
      </section>
    </>
  );
};

export default AssignmentSupportPage;
