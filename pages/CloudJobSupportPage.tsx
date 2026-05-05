import React from 'react';
import SEOHead from '../components/SEOHead';
import QuoteForm from '../components/QuoteForm';

const schema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Cloud Engineer Job Support India",
  "provider": { "@type": "Organization", "name": "CloudOpsDesk", "url": "https://cloudopsdesk.in" },
  "serviceType": "Cloud Engineer Job Support",
  "description": "Real-time job support for Cloud Engineers working with AWS, Azure, GCP and multi-cloud environments in India.",
  "areaServed": { "@type": "Country", "name": "India" }
};

const CloudJobSupportPage: React.FC = () => {
  return (
    <>
      <SEOHead
        title="Cloud Engineer Job Support India | AWS, Azure, GCP"
        description="Need help with cloud infrastructure, migrations, or multi-cloud setups at work? Get real-time cloud engineering job support. AWS, Azure, GCP experts available 24/7."
        canonical="/cloud-job-support"
        keywords="cloud engineer job support, aws cloud job support india, azure job support, gcp job support, cloud infrastructure support, cloud migration help india"
        schema={schema}
      />
      <section className="pt-32 pb-20 px-4 max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
          Cloud Engineer Job Support India
        </h1>
        <p className="text-lg text-slate-600 dark:text-slate-300 mb-8 max-w-3xl">
          Struggling with cloud infrastructure tasks, migrations, or cost optimization? Our certified cloud architects provide real-time support across AWS, Azure, and GCP.
        </p>

        <div className="grid md:grid-cols-3 gap-6 mb-10">
          <div className="bg-orange-50 dark:bg-orange-900/10 border border-orange-200 dark:border-orange-800 rounded-2xl p-6 text-center">
            <div className="text-3xl mb-3">☁️</div>
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">AWS</h3>
            <p className="text-sm text-slate-600 dark:text-slate-400">EC2, EKS, Lambda, CloudFormation, S3, RDS, IAM</p>
          </div>
          <div className="bg-blue-50 dark:bg-blue-900/10 border border-blue-200 dark:border-blue-800 rounded-2xl p-6 text-center">
            <div className="text-3xl mb-3">🔷</div>
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Azure</h3>
            <p className="text-sm text-slate-600 dark:text-slate-400">AKS, Functions, ARM, VNet, SQL, AD, DevOps</p>
          </div>
          <div className="bg-green-50 dark:bg-green-900/10 border border-green-200 dark:border-green-800 rounded-2xl p-6 text-center">
            <div className="text-3xl mb-3">🌐</div>
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">GCP</h3>
            <p className="text-sm text-slate-600 dark:text-slate-400">GKE, Cloud Run, BigQuery, Pub/Sub, IAM</p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-sm">
            <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4">What We Help With</h2>
            <ul className="space-y-3 text-slate-600 dark:text-slate-300">
              <li>• Cloud infrastructure provisioning & management</li>
              <li>• Cloud migration planning & execution</li>
              <li>• Multi-cloud & hybrid cloud architecture</li>
              <li>• Cost optimization & FinOps</li>
              <li>• Security, IAM & compliance</li>
              <li>• Networking (VPC, VNet, peering, VPN)</li>
              <li>• Serverless architecture & implementation</li>
              <li>• Disaster recovery & high availability</li>
            </ul>
          </div>
          <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-sm">
            <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4">Why Choose Us</h2>
            <ul className="space-y-3 text-slate-600 dark:text-slate-300">
              <li>✅ AWS, Azure & GCP certified architects</li>
              <li>✅ 10+ years of production cloud experience</li>
              <li>✅ 24/7 availability for urgent issues</li>
              <li>✅ Screen-share based real-time guidance</li>
              <li>✅ Help you learn while delivering</li>
              <li>✅ Affordable India pricing</li>
            </ul>
          </div>
        </div>

        <QuoteForm />
      </section>
    </>
  );
};

export default CloudJobSupportPage;
