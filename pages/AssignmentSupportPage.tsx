import React from 'react';
import SEOHead from '../components/SEOHead';
import QuoteForm from '../components/QuoteForm';

const schema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Assignment Support India",
  "provider": { "@type": "Organization", "name": "CloudOpsDesk", "url": "https://cloudopsdesk.in" },
  "serviceType": "Technical Assignment Support",
  "description": "Expert help with technical coding assignments, take-home projects, and case studies given by recruiters for IT professionals in India.",
  "areaServed": { "@type": "Country", "name": "India" }
};

const AssignmentSupportPage: React.FC = () => {
  return (
    <>
      <SEOHead
        title="Coding & Technical Assignment Help India | CloudOpsDesk"
        description="Need help with a take-home coding assignment or technical case study from a recruiter? Our experts help you deliver quality work on time. DevOps, Full Stack, Data, AI & QA assignments covered."
        canonical="/assignment-support"
        keywords="it assignment help india, coding assignment help india, take home coding assignment help, technical assignment support india, devops assignment help, data engineering assignment help"
        schema={schema}
      />
      <section className="pt-32 pb-20 px-4 max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
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
            <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4">Assignment Types We Help With</h2>
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
            <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4">What You Get</h2>
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
          <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4">⚡ Urgent Assignment?</h2>
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

        <QuoteForm />
      </section>
    </>
  );
};

export default AssignmentSupportPage;
