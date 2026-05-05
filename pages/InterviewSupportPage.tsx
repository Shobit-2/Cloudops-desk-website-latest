import React from 'react';
import SEOHead from '../components/SEOHead';
import QuoteForm from '../components/QuoteForm';

const schema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Live Interview Support India",
  "provider": { "@type": "Organization", "name": "CloudOpsDesk", "url": "https://cloudopsdesk.in" },
  "serviceType": "Live Interview Support",
  "description": "Real-time technical interview guidance and coaching during live interview rounds for IT professionals in India.",
  "areaServed": { "@type": "Country", "name": "India" }
};

const InterviewSupportPage: React.FC = () => {
  return (
    <>
      <SEOHead
        title="Live Interview Support | Technical Interview Guidance | CloudOpsDesk"
        description="Get real-time expert guidance during your technical interview rounds. 1-on-1 live coaching from senior engineers. DevOps, Cloud, Full Stack, Data & AI interview support available."
        canonical="/interview-support"
        keywords="live interview support india, technical interview assistance, real time interview guidance india, interview coaching live, technical interview help india online"
        schema={schema}
      />
      <section className="pt-32 pb-20 px-4 max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
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
            <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4">How It Works</h2>
            <ul className="space-y-3 text-slate-600 dark:text-slate-300">
              <li>📅 Share your interview schedule in advance</li>
              <li>🧑‍💻 Expert assigned based on your tech domain</li>
              <li>🎧 Real-time 1-on-1 coaching during the interview</li>
              <li>💡 Expert helps you frame better answers</li>
              <li>📋 Post-interview debrief & feedback</li>
            </ul>
          </div>
          <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-sm">
            <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4">Domains Supported</h2>
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
          <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4">Why Candidates Choose Us</h2>
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

        <QuoteForm />
      </section>
    </>
  );
};

export default InterviewSupportPage;
