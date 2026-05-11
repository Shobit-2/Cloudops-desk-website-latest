import React from 'react';
import { Link } from 'react-router-dom';
import SEOHead from '../components/SEOHead';
import QuoteForm from '../components/QuoteForm';
import FAQSection from '../components/FAQSection';

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
        description="Real-time cloud engineering job support for AWS, Azure & GCP. Help with infrastructure, migrations & multi-cloud setups. Available 24/7."
        canonical="/cloud-job-support"
        keywords="cloud engineer job support, aws cloud job support india, azure job support, gcp job support, cloud infrastructure support, cloud migration help india"
        schema={schema}
      />
      <section className="pt-32 pb-20 px-4 max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-6">
          Cloud Engineer Job Support India
        </h1>
        <p className="text-lg text-slate-600 dark:text-slate-300 mb-8 max-w-3xl">
          Struggling with cloud infrastructure tasks, migrations, or cost optimization? Our certified cloud architects provide real-time support across AWS, Azure, and GCP.
        </p>

        <div className="grid md:grid-cols-3 gap-6 mb-10">
          <div className="bg-orange-50 dark:bg-orange-900/10 border border-orange-200 dark:border-orange-800 rounded-2xl p-6 text-center">
            <div className="text-3xl mb-3">☁️</div>
            <h3 className="font-bold text-slate-900 dark:text-white mb-2">AWS</h3>
            <p className="text-sm text-slate-600 dark:text-slate-400">EC2, EKS, Lambda, CloudFormation, S3, RDS, IAM</p>
          </div>
          <div className="bg-blue-50 dark:bg-blue-900/10 border border-blue-200 dark:border-blue-800 rounded-2xl p-6 text-center">
            <div className="text-3xl mb-3">🔷</div>
            <h3 className="font-bold text-slate-900 dark:text-white mb-2">Azure</h3>
            <p className="text-sm text-slate-600 dark:text-slate-400">AKS, Functions, ARM, VNet, SQL, AD, DevOps</p>
          </div>
          <div className="bg-green-50 dark:bg-green-900/10 border border-green-200 dark:border-green-800 rounded-2xl p-6 text-center">
            <div className="text-3xl mb-3">🌐</div>
            <h3 className="font-bold text-slate-900 dark:text-white mb-2">GCP</h3>
            <p className="text-sm text-slate-600 dark:text-slate-400">GKE, Cloud Run, BigQuery, Pub/Sub, IAM</p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-sm">
            <h2 className="text-2xl font-black text-slate-900 dark:text-white mb-4">What We Help With</h2>
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
            <h2 className="text-2xl font-black text-slate-900 dark:text-white mb-4">Why Choose Us</h2>
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

        {/* Cloud Engineering Landscape */}
        <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-sm mb-10">
          <h2 className="text-2xl font-black text-slate-900 dark:text-white mb-4">Cloud Engineering: The Backbone of Modern IT</h2>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
            Cloud infrastructure is the foundation of every modern application. As organizations migrate to AWS, Azure, and GCP, the demand for skilled cloud engineers who can design, deploy, and manage cloud-native architectures continues to grow exponentially. Cloud roles require expertise across networking, security, compute, storage, and automation — a broad skillset that takes years to develop.
          </p>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
            Our cloud job support accelerates your learning curve by providing real-time guidance from engineers who have designed and managed production cloud environments for Fortune 500 companies. Whether you are architecting a VPC, setting up cross-account IAM policies, or optimizing cloud costs, our experts help you deliver confidently.
          </p>
        </div>

        <FAQSection faqs={[
          { question: 'Which cloud platforms do you provide support for?', answer: 'We provide comprehensive support for all three major cloud platforms — AWS, Microsoft Azure, and Google Cloud Platform (GCP). Our experts have hands-on production experience with 50+ services across each platform, including compute, networking, storage, databases, security, and serverless services.' },
          { question: 'Can you help with multi-cloud and hybrid cloud setups?', answer: 'Yes, we support multi-cloud architectures that span AWS, Azure, and GCP, as well as hybrid cloud setups connecting on-premises infrastructure with cloud services. We help with cross-cloud networking, unified monitoring, and consistent security policies across environments.' },
          { question: 'Do you help with cloud cost optimization?', answer: 'Absolutely. Cost optimization is a critical part of cloud management. We help with right-sizing instances, implementing reserved/spot instances, setting up cost alerts, analyzing billing data, and designing cost-efficient architectures. Many clients reduce their cloud spend by 20-40% after our optimization guidance.' },
          { question: 'Can I get help with cloud security and compliance?', answer: 'Yes, cloud security is integral to our support. We help with IAM policy design, VPC security groups, encryption at rest and in transit, compliance frameworks (SOC 2, HIPAA, PCI DSS), security auditing, and implementing least-privilege access patterns.' },
          { question: 'Do you support serverless and container workloads?', answer: 'Yes, we cover serverless architectures (Lambda, Azure Functions, Cloud Functions), container orchestration (EKS, AKS, GKE), and serverless containers (Fargate, Cloud Run). We help you choose the right compute model and optimize for performance and cost.' },
          { question: 'Is cloud job support useful for Solutions Architect roles?', answer: 'Yes, many of our clients are in Solutions Architect positions. We help with architecture design reviews, Well-Architected Framework assessments, migration planning, and preparing architecture documentation and diagrams for stakeholder presentations.' },
        ]} />

        {/* Related Services — Internal Linking */}
        <div className="mb-10">
          <h2 className="text-2xl font-black text-slate-900 dark:text-white mb-4">Explore More Services</h2>
          <div className="flex flex-wrap gap-3">
            <Link to="/aws-job-support" className="px-4 py-2 bg-white dark:bg-slate-800 rounded-xl text-sm font-medium text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:border-primary-500 transition-colors">AWS Job Support</Link>
            <Link to="/devops-job-support" className="px-4 py-2 bg-white dark:bg-slate-800 rounded-xl text-sm font-medium text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:border-primary-500 transition-colors">DevOps Support</Link>
            <Link to="/data-engineer-job-support" className="px-4 py-2 bg-white dark:bg-slate-800 rounded-xl text-sm font-medium text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:border-primary-500 transition-colors">Data Engineer Support</Link>
            <Link to="/certification-guidance" className="px-4 py-2 bg-white dark:bg-slate-800 rounded-xl text-sm font-medium text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:border-primary-500 transition-colors">Certification Guidance</Link>
            <Link to="/interview-preparation" className="px-4 py-2 bg-white dark:bg-slate-800 rounded-xl text-sm font-medium text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:border-primary-500 transition-colors">Interview Prep</Link>
          </div>
        </div>

        <QuoteForm />
      </section>
    </>
  );
};

export default CloudJobSupportPage;
