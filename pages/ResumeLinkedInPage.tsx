import React from 'react';
import SEOHead from '../components/SEOHead';
import QuoteForm from '../components/QuoteForm';

const schema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Resume Writing & LinkedIn Optimization",
  "provider": { "@type": "Organization", "name": "CloudOpsDesk", "url": "https://cloudopsdesk.in" },
  "serviceType": "Resume Writing and LinkedIn Optimization",
  "description": "Professional ATS-friendly resume writing and LinkedIn profile optimization service for IT and non-IT professionals."
};

const ResumeLinkedInPage: React.FC = () => {
  return (
    <>
      <SEOHead
        title="Resume Writing & LinkedIn Optimization | ATS-Friendly | CloudOpsDesk"
        description="Professional ATS-friendly resume writing and LinkedIn profile optimization for IT and non-IT professionals. Get more interview calls. 48-hour delivery. 1000+ resumes done."
        canonical="/resume-linkedin-optimization"
        keywords="resume writing service, linkedin profile optimization, ats resume writing, professional resume, devops resume, data engineer resume, linkedin optimization it professionals"
        schema={schema}
      />
      <section className="pt-32 pb-20 px-4 max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
          Resume Writing & LinkedIn Optimization
        </h1>
        <p className="text-lg text-slate-600 dark:text-slate-300 mb-4 max-w-3xl">
          Your resume not getting callbacks? Our certified writers create ATS-friendly resumes and optimize LinkedIn profiles to get you noticed by top recruiters.
        </p>
        <div className="flex flex-wrap gap-3 mb-10">
          <span className="bg-sky-100 dark:bg-sky-900/30 text-sky-700 dark:text-sky-300 px-3 py-1 rounded-full text-sm font-medium">1000+ Resumes Done</span>
          <span className="bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 px-3 py-1 rounded-full text-sm font-medium">48-Hour Delivery</span>
          <span className="bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 px-3 py-1 rounded-full text-sm font-medium">ATS Optimized</span>
        </div>

        <div className="bg-red-50 dark:bg-red-900/10 border border-red-200 dark:border-red-800 rounded-2xl p-8 mb-10">
          <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4">Why Your Resume Gets Rejected</h2>
          <ul className="space-y-3 text-slate-700 dark:text-slate-300">
            <li>• Not ATS-compatible — 75% of resumes are rejected by software before a human sees them</li>
            <li>• Generic format with no industry-specific keywords</li>
            <li>• LinkedIn profile doesn't match resume or lacks keyword optimization</li>
            <li>• No quantifiable achievements — just listing responsibilities</li>
            <li>• Poor formatting that breaks when parsed by recruitment tools</li>
          </ul>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-10">
          <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-sm">
            <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4">Resume Services</h2>
            <ul className="space-y-3 text-slate-600 dark:text-slate-300">
              <li>✅ ATS-friendly resume writing from scratch</li>
              <li>✅ Resume revamp for experienced professionals</li>
              <li>✅ Domain-specific keywords (DevOps, Full Stack, Data, AI)</li>
              <li>✅ Quantifiable achievement formatting</li>
              <li>✅ Multiple format delivery (PDF, DOCX, TXT)</li>
              <li>✅ 2 rounds of free revisions</li>
            </ul>
          </div>
          <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-sm">
            <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4">LinkedIn Optimization</h2>
            <ul className="space-y-3 text-slate-600 dark:text-slate-300">
              <li>✅ Headline optimization with target keywords</li>
              <li>✅ About section rewrite for recruiter appeal</li>
              <li>✅ Experience section with SEO keywords</li>
              <li>✅ Skills endorsement strategy</li>
              <li>✅ Profile visibility optimization</li>
              <li>✅ Connection & recruiter outreach templates</li>
            </ul>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-10">
          <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-sm text-center">
            <div className="text-3xl mb-3">📄</div>
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">All Domains Covered</h3>
            <p className="text-sm text-slate-600 dark:text-slate-400">DevOps, Full Stack, Data, AI, QA, Cloud, Non-IT</p>
          </div>
          <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-sm text-center">
            <div className="text-3xl mb-3">⚡</div>
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Fast Turnaround</h3>
            <p className="text-sm text-slate-600 dark:text-slate-400">Standard 48hrs, Express 24hrs available</p>
          </div>
          <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-sm text-center">
            <div className="text-3xl mb-3">🎯</div>
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Results Driven</h3>
            <p className="text-sm text-slate-600 dark:text-slate-400">Our clients see 3x more interview calls within 2 weeks</p>
          </div>
        </div>

        <QuoteForm />
      </section>
    </>
  );
};

export default ResumeLinkedInPage;
