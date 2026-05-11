import React from 'react';
import { Link } from 'react-router-dom';
import SEOHead from '../components/SEOHead';
import QuoteForm from '../components/QuoteForm';
import FAQSection from '../components/FAQSection';

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
        title="Resume Writing & LinkedIn Optimization | ATS Ready"
        description="Professional ATS-friendly resume writing and LinkedIn optimization for IT professionals. 48-hour delivery. 1000+ resumes crafted successfully."
        canonical="/resume-linkedin-optimization"
        keywords="resume writing service, linkedin profile optimization, ats resume writing, professional resume, devops resume, data engineer resume, linkedin optimization it professionals"
        schema={schema}
      />
      <section className="pt-32 pb-20 px-4 max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-6">
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
          <h2 className="text-2xl font-black text-slate-900 dark:text-white mb-4">Why Your Resume Gets Rejected</h2>
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
            <h2 className="text-2xl font-black text-slate-900 dark:text-white mb-4">Resume Services</h2>
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
            <h2 className="text-2xl font-black text-slate-900 dark:text-white mb-4">LinkedIn Optimization</h2>
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
            <h3 className="font-bold text-slate-900 dark:text-white mb-2">All Domains Covered</h3>
            <p className="text-sm text-slate-600 dark:text-slate-400">DevOps, Full Stack, Data, AI, QA, Cloud, Non-IT</p>
          </div>
          <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-sm text-center">
            <div className="text-3xl mb-3">⚡</div>
            <h3 className="font-bold text-slate-900 dark:text-white mb-2">Fast Turnaround</h3>
            <p className="text-sm text-slate-600 dark:text-slate-400">Standard 48hrs, Express 24hrs available</p>
          </div>
          <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-sm text-center">
            <div className="text-3xl mb-3">🎯</div>
            <h3 className="font-bold text-slate-900 dark:text-white mb-2">Results Driven</h3>
            <p className="text-sm text-slate-600 dark:text-slate-400">Our clients see 3x more interview calls within 2 weeks</p>
          </div>
        </div>

        {/* Why a Professional Resume Matters */}
        <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-sm mb-10">
          <h2 className="text-2xl font-black text-slate-900 dark:text-white mb-4">Why a Professional Resume Matters in 2025</h2>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
            In today's competitive IT job market, your resume is your first impression. Over 75% of resumes are filtered out by Applicant Tracking Systems (ATS) before reaching a human recruiter. A professionally written, ATS-optimized resume with the right keywords, formatting, and achievement metrics can dramatically increase your interview callback rate.
          </p>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
            Our certified resume writers specialize in IT domains including DevOps, Full Stack Development, Data Engineering, AI/ML, Cloud Architecture, and QA Automation. We craft resumes that pass ATS filters and impress hiring managers at top companies like TCS, Infosys, Wipro, Cognizant, Accenture, and product companies.
          </p>
        </div>

        <FAQSection faqs={[
          { question: 'How long does it take to get my resume?', answer: 'Standard delivery is 48 hours. Express 24-hour delivery is available for an additional fee. You receive the resume in PDF, DOCX, and TXT formats with 2 rounds of free revisions.' },
          { question: 'Do you write resumes for non-IT professionals?', answer: 'Yes, we write resumes for all professionals — IT and non-IT. Our writers have experience across domains including marketing, finance, operations, HR, and more. However, our strongest expertise is in IT and tech resumes.' },
          { question: 'What is ATS-friendly resume formatting?', answer: 'ATS (Applicant Tracking System) friendly formatting means using clean layouts without tables, graphics, or headers/footers that confuse parsing software. We use the right section headings, keyword density, and file formats that score well in ATS scans used by 95% of Fortune 500 companies.' },
          { question: 'Will my LinkedIn profile be optimized for recruiter searches?', answer: 'Yes, we optimize your LinkedIn headline, about section, experience descriptions, and skills with targeted keywords that match what recruiters search for in your domain. This increases your profile visibility by 3-5x in LinkedIn recruiter searches.' },
          { question: 'Can you help with a career change resume?', answer: 'Absolutely. We specialize in career transition resumes that highlight transferable skills, reframe your experience for the target role, and position you competitively for the new domain you are moving into.' },
          { question: 'Do you offer resume + LinkedIn combo packages?', answer: 'Yes, we offer bundled packages for resume writing + LinkedIn optimization at a discounted rate. Most candidates see the best results when both are optimized together, as recruiters cross-check your resume against your LinkedIn profile.' },
        ]} />

        {/* Explore More Services */}
        <div className="mb-10">
          <h2 className="text-2xl font-black text-slate-900 dark:text-white mb-4">Explore More Services</h2>
          <div className="flex flex-wrap gap-3">
            <Link to="/mock-interview-preparation" className="px-4 py-2 bg-white dark:bg-slate-800 rounded-xl text-sm font-medium text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:border-primary-500 transition-colors">Mock Interview Prep</Link>
            <Link to="/job-application" className="px-4 py-2 bg-white dark:bg-slate-800 rounded-xl text-sm font-medium text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:border-primary-500 transition-colors">Job Application</Link>
            <Link to="/interview-support" className="px-4 py-2 bg-white dark:bg-slate-800 rounded-xl text-sm font-medium text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:border-primary-500 transition-colors">Live Interview Support</Link>
            <Link to="/job-support" className="px-4 py-2 bg-white dark:bg-slate-800 rounded-xl text-sm font-medium text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:border-primary-500 transition-colors">IT Job Support</Link>
            <Link to="/certification-guidance" className="px-4 py-2 bg-white dark:bg-slate-800 rounded-xl text-sm font-medium text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:border-primary-500 transition-colors">Certification Guidance</Link>
          </div>
        </div>

        <QuoteForm />
      </section>
    </>
  );
};

export default ResumeLinkedInPage;
