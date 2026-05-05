import React from 'react';
import SEOHead from '../components/SEOHead';
import QuoteForm from '../components/QuoteForm';

const schema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "IT Certification Guidance",
  "provider": { "@type": "Organization", "name": "CloudOpsDesk", "url": "https://cloudopsdesk.in" },
  "serviceType": "Certification Guidance",
  "description": "Personalized IT certification guidance for AWS, Azure, GCP, Kubernetes (CKA), Terraform, Databricks, and more for professionals."
};

const CertificationGuidancePage: React.FC = () => {
  return (
    <>
      <SEOHead
        title="IT Certification Guidance | AWS, Azure, GCP, K8s, Data | CloudOpsDesk"
        description="Confused about which certification to pursue? Our experts guide you through the right path, study materials, exam strategies and hands-on prep. AWS, Azure, GCP, CKA, Terraform & more."
        canonical="/certification-guidance"
        keywords="aws certification guidance, azure certification help, cka certification preparation, terraform certification, google cloud certification guidance, databricks certification, it certification guidance"
        schema={schema}
      />
      <section className="pt-32 pb-20 px-4 max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
          IT Certification Guidance
        </h1>
        <p className="text-lg text-slate-600 dark:text-slate-300 mb-4 max-w-3xl">
          Get personalized certification roadmaps, study materials, exam strategies, and hands-on lab practice to pass your cloud and DevOps certifications on the first attempt.
        </p>
        <div className="flex flex-wrap gap-3 mb-10">
          <span className="bg-sky-100 dark:bg-sky-900/30 text-sky-700 dark:text-sky-300 px-3 py-1 rounded-full text-sm font-medium">Personalized Study Plan</span>
          <span className="bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 px-3 py-1 rounded-full text-sm font-medium">90%+ Pass Rate</span>
          <span className="bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 px-3 py-1 rounded-full text-sm font-medium">Hands-On Labs</span>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          <div className="bg-orange-50 dark:bg-orange-900/10 border border-orange-200 dark:border-orange-800 rounded-xl p-5 text-center">
            <div className="text-2xl mb-2">☁️</div>
            <h3 className="font-semibold text-sm text-slate-900 dark:text-white">AWS</h3>
            <p className="text-xs text-slate-500 mt-1">SA, Developer, SysOps, DevOps Pro</p>
          </div>
          <div className="bg-blue-50 dark:bg-blue-900/10 border border-blue-200 dark:border-blue-800 rounded-xl p-5 text-center">
            <div className="text-2xl mb-2">🔷</div>
            <h3 className="font-semibold text-sm text-slate-900 dark:text-white">Azure</h3>
            <p className="text-xs text-slate-500 mt-1">AZ-104, AZ-400, AZ-305, AZ-900</p>
          </div>
          <div className="bg-green-50 dark:bg-green-900/10 border border-green-200 dark:border-green-800 rounded-xl p-5 text-center">
            <div className="text-2xl mb-2">🌐</div>
            <h3 className="font-semibold text-sm text-slate-900 dark:text-white">GCP</h3>
            <p className="text-xs text-slate-500 mt-1">PDE, ACE, PCA, ML Engineer</p>
          </div>
          <div className="bg-purple-50 dark:bg-purple-900/10 border border-purple-200 dark:border-purple-800 rounded-xl p-5 text-center">
            <div className="text-2xl mb-2">⚙️</div>
            <h3 className="font-semibold text-sm text-slate-900 dark:text-white">K8s & Terraform</h3>
            <p className="text-xs text-slate-500 mt-1">CKA, CKAD, CKS, Terraform Assoc</p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-10">
          <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-sm">
            <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4">What You Get</h2>
            <ul className="space-y-3 text-slate-600 dark:text-slate-300">
              <li>📚 Curated study materials & resource list</li>
              <li>🗓️ Personalized week-by-week study plan</li>
              <li>🧪 Hands-on lab exercises & real scenarios</li>
              <li>📝 Practice exams with detailed explanations</li>
              <li>🎯 Exam day tips & time management strategy</li>
              <li>💬 Doubt clearing sessions with certified experts</li>
            </ul>
          </div>
          <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-sm">
            <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4">All Certifications Covered</h2>
            <ul className="space-y-3 text-slate-600 dark:text-slate-300">
              <li>• AWS SA Professional, Developer Associate, DevOps Pro</li>
              <li>• Azure Administrator, DevOps Engineer, Architect</li>
              <li>• GCP Professional Data Engineer, Cloud Architect</li>
              <li>• CKA, CKAD, CKS (Kubernetes)</li>
              <li>• HashiCorp Terraform Associate</li>
              <li>• Databricks, Snowflake SnowPro, Scrum Master, PMP</li>
            </ul>
          </div>
        </div>

        <QuoteForm />
      </section>
    </>
  );
};

export default CertificationGuidancePage;
