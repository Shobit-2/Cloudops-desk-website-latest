import React from 'react';
import SEOHead from '../components/SEOHead';
import QuoteForm from '../components/QuoteForm';

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
        title="Job Application Support | Get More Interview Calls | CloudOpsDesk"
        description="Stop applying to hundreds of jobs. Let recruiters find YOU. Our job application service makes your IT profile visible to top recruiters. Start getting interview calls in 7 days."
        canonical="/job-application"
        keywords="job application support, recruiter visibility service, how to get interview calls, job application strategy, job search strategy, get recruiter calls"
        schema={schema}
      />
      <section className="pt-32 pb-20 px-4 max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
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
          <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4">Why You're Not Getting Interview Calls</h2>
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
            <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4">What We Do For You</h2>
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
            <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4">Results You Can Expect</h2>
            <ul className="space-y-3 text-slate-600 dark:text-slate-300">
              <li>✅ 3-5x more recruiter profile views</li>
              <li>✅ Interview calls within first 7 days</li>
              <li>✅ Relevant opportunities matching your skills</li>
              <li>✅ Higher salary offers due to targeted positioning</li>
              <li>✅ Long-term recruiter relationships for future moves</li>
            </ul>
          </div>
        </div>

        <QuoteForm />
      </section>
    </>
  );
};

export default ProfileMarketingPage;
