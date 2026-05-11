import React from 'react';
import { Link } from 'react-router-dom';
import SEOHead from '../components/SEOHead';
import QuoteForm from '../components/QuoteForm';
import FAQSection from '../components/FAQSection';

const schema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Job Application",
  "provider": { "@type": "Organization", "name": "CloudOpsDesk", "url": "https://cloudopsdesk.in" },
  "serviceType": "Job Application",
  "description": "Job application service to help IT professionals get noticed by recruiters and attract more interview calls without applying to jobs."
};

const ProfileMarketingPage: React.FC = () => {
  return (
    <>
      <SEOHead
        title="Job Application Support | Get Interview Calls Fast"
        description="Stop mass-applying to jobs. Let recruiters find you. Our profile marketing makes your IT profile visible to top recruiters within 7 days."
        canonical="/job-application"
        keywords="job application support, recruiter visibility service, how to get interview calls, job application strategy, job search strategy, get recruiter calls"
        schema={schema}
      />
      <section className="pt-32 pb-20 px-4 max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-6">
          Job Application
        </h1>
        <p className="text-lg text-slate-600 dark:text-slate-300 mb-4 max-w-3xl">
          Tired of applying to hundreds of jobs with no response? Our job application service makes your profile visible to top recruiters — they come to you with opportunities.
        </p>
        <div className="flex flex-wrap gap-3 mb-10">
          <span className="bg-sky-100 dark:bg-sky-900/30 text-sky-700 dark:text-sky-300 px-3 py-1 rounded-full text-sm font-medium">Start Getting Calls in 7 Days</span>
          <span className="bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 px-3 py-1 rounded-full text-sm font-medium">All IT Domains</span>
        </div>

        <div className="bg-red-50 dark:bg-red-900/10 border border-red-200 dark:border-red-800 rounded-2xl p-8 mb-10">
          <h2 className="text-2xl font-black text-slate-900 dark:text-white mb-4">Why You're Not Getting Interview Calls</h2>
          <ul className="space-y-3 text-slate-700 dark:text-slate-300">
            <li>• Your profile is not optimized for recruiter search algorithms</li>
            <li>• You're only using job portals (LinkedIn apply button, Indeed)</li>
            <li>• Your profile doesn't appear when recruiters search for your skills</li>
            <li>• No proactive outreach strategy to hiring managers</li>
            <li>• Wrong keywords in your profile — recruiters can't find you</li>
          </ul>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-10">
          <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-sm">
            <h2 className="text-2xl font-black text-slate-900 dark:text-white mb-4">What We Do For You</h2>
            <ul className="space-y-3 text-slate-600 dark:text-slate-300">
              <li>🎯 Profile optimization across all job portals</li>
              <li>📧 Targeted outreach to relevant recruiters</li>
              <li>🔑 Keyword optimization for recruiter searches</li>
              <li>📊 LinkedIn, Indeed, Glassdoor profile boost</li>
              <li>🤝 Direct connection with hiring managers</li>
              <li>📈 Weekly progress report on profile views & calls</li>
            </ul>
          </div>
          <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-sm">
            <h2 className="text-2xl font-black text-slate-900 dark:text-white mb-4">Results You Can Expect</h2>
            <ul className="space-y-3 text-slate-600 dark:text-slate-300">
              <li>✅ 3-5x more recruiter profile views</li>
              <li>✅ Interview calls within first 7 days</li>
              <li>✅ Relevant opportunities matching your skills</li>
              <li>✅ Higher salary offers due to targeted positioning</li>
              <li>✅ Long-term recruiter relationships for future moves</li>
            </ul>
          </div>
        </div>

        {/* How Job Application Strategy Works */}
        <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-sm mb-10">
          <h2 className="text-2xl font-black text-slate-900 dark:text-white mb-4">The Smart Job Application Strategy</h2>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
            Most IT professionals waste months mass-applying to hundreds of jobs with generic applications, getting zero callbacks. The problem is not your skills — it is your visibility. Recruiters search for candidates using specific keywords, and if your profiles are not optimized with the right terms, you remain invisible to them.
          </p>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
            Our job application service takes a targeted approach. We optimize your profiles across LinkedIn, Indeed, Naukri, and other platforms with domain-specific keywords, then proactively connect you with hiring managers and recruiters in your target companies. Candidates typically start receiving interview calls within the first 7 days of using our service.
          </p>
        </div>

        <FAQSection faqs={[
          { question: 'How is this different from just applying on job portals?', answer: 'Job portals show your application to one recruiter for one job. Our service optimizes your entire profile so that recruiters actively searching for your skills find you organically. This means multiple opportunities come to you, rather than you chasing each one individually.' },
          { question: 'Which job portals do you optimize profiles on?', answer: 'We optimize your profiles on LinkedIn, Naukri, Indeed, Glassdoor, Dice, and other relevant platforms based on your target geography and domain. Each portal has different algorithm behaviors, and we optimize accordingly.' },
          { question: 'How soon will I start getting interview calls?', answer: 'Most candidates start receiving relevant interview calls within 7-10 days of profile optimization. The exact timeline depends on your domain, experience level, and current market demand for your skills.' },
          { question: 'Is this service available for freshers?', answer: 'Yes, we help freshers and experienced professionals alike. For freshers, we focus on highlighting projects, internships, certifications, and academic achievements to position you competitively in the entry-level market.' },
          { question: 'Do you guarantee job placement?', answer: 'We do not guarantee placement as hiring decisions are made by companies. However, our service dramatically increases your visibility and interview opportunities. With optimized profiles and targeted outreach, our candidates see 3-5x more recruiter engagement.' },
          { question: 'Can you help with job applications for roles outside India?', answer: 'Yes, we help professionals target roles in India, US, Canada, UK, Middle East, and Singapore. Our profile optimization includes location-specific keywords and recruiter outreach strategies for international job markets.' },
        ]} />

        {/* Explore More Services */}
        <div className="mb-10">
          <h2 className="text-2xl font-black text-slate-900 dark:text-white mb-4">Explore More Services</h2>
          <div className="flex flex-wrap gap-3">
            <Link to="/resume-linkedin-optimization" className="px-4 py-2 bg-white dark:bg-slate-800 rounded-xl text-sm font-medium text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:border-primary-500 transition-colors">Resume & LinkedIn</Link>
            <Link to="/mock-interview-preparation" className="px-4 py-2 bg-white dark:bg-slate-800 rounded-xl text-sm font-medium text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:border-primary-500 transition-colors">Mock Interview Prep</Link>
            <Link to="/interview-support" className="px-4 py-2 bg-white dark:bg-slate-800 rounded-xl text-sm font-medium text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:border-primary-500 transition-colors">Live Interview Support</Link>
            <Link to="/job-support" className="px-4 py-2 bg-white dark:bg-slate-800 rounded-xl text-sm font-medium text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:border-primary-500 transition-colors">IT Job Support</Link>
            <Link to="/corporate-training" className="px-4 py-2 bg-white dark:bg-slate-800 rounded-xl text-sm font-medium text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:border-primary-500 transition-colors">Corporate Training</Link>
          </div>
        </div>

        <QuoteForm />
      </section>
    </>
  );
};

export default ProfileMarketingPage;
