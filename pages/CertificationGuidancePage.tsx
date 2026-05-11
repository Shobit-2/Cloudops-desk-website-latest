import React from 'react';
import { Link } from 'react-router-dom';
import SEOHead from '../components/SEOHead';
import QuoteForm from '../components/QuoteForm';
import FAQSection from '../components/FAQSection';

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
        title="IT Certification Guidance | AWS, Azure & GCP Prep"
        description="Expert guidance for AWS, Azure, GCP, CKA & Terraform certifications. Study materials, exam strategies and hands-on prep from certified pros."
        canonical="/certification-guidance"
        keywords="aws certification guidance, azure certification help, cka certification preparation, terraform certification, google cloud certification guidance, databricks certification, it certification guidance"
        schema={schema}
      />
      <section className="pt-32 pb-20 px-4 max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-6">
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
            <h3 className="font-bold text-sm text-slate-900 dark:text-white">AWS</h3>
            <p className="text-xs text-slate-500 mt-1">SA, Developer, SysOps, DevOps Pro</p>
          </div>
          <div className="bg-blue-50 dark:bg-blue-900/10 border border-blue-200 dark:border-blue-800 rounded-xl p-5 text-center">
            <div className="text-2xl mb-2">🔷</div>
            <h3 className="font-bold text-sm text-slate-900 dark:text-white">Azure</h3>
            <p className="text-xs text-slate-500 mt-1">AZ-104, AZ-400, AZ-305, AZ-900</p>
          </div>
          <div className="bg-green-50 dark:bg-green-900/10 border border-green-200 dark:border-green-800 rounded-xl p-5 text-center">
            <div className="text-2xl mb-2">🌐</div>
            <h3 className="font-bold text-sm text-slate-900 dark:text-white">GCP</h3>
            <p className="text-xs text-slate-500 mt-1">PDE, ACE, PCA, ML Engineer</p>
          </div>
          <div className="bg-purple-50 dark:bg-purple-900/10 border border-purple-200 dark:border-purple-800 rounded-xl p-5 text-center">
            <div className="text-2xl mb-2">⚙️</div>
            <h3 className="font-bold text-sm text-slate-900 dark:text-white">K8s & Terraform</h3>
            <p className="text-xs text-slate-500 mt-1">CKA, CKAD, CKS, Terraform Assoc</p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-10">
          <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-sm">
            <h2 className="text-2xl font-black text-slate-900 dark:text-white mb-4">What You Get</h2>
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
            <h2 className="text-2xl font-black text-slate-900 dark:text-white mb-4">All Certifications Covered</h2>
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

        {/* Certification Value */}
        <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-sm mb-10">
          <h2 className="text-2xl font-black text-slate-900 dark:text-white mb-4">Why IT Certifications Boost Your Career</h2>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
            Cloud and DevOps certifications are among the highest-ROI career investments in IT. Certified professionals earn 15-25% more than their non-certified peers and are preferred by recruiters for senior and architect-level positions. Companies like AWS, Microsoft, and Google actively partner with organizations that have certified engineers, creating a growing demand for credential holders.
          </p>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
            Our certification guidance goes beyond exam prep — we ensure you understand the concepts deeply enough to apply them in production environments. This combination of certification credentials and hands-on competence makes you an exceptionally strong candidate in the job market.
          </p>
        </div>

        <FAQSection faqs={[
          { question: 'How long does it take to prepare for a cloud certification?', answer: 'Preparation time varies by certification. Associate-level certs (AWS SAA, AZ-104, GCP ACE) typically take 4-6 weeks with our guided study plan. Professional-level certs (AWS SAP, AZ-305) take 6-10 weeks. We create a personalized schedule based on your current knowledge and availability.' },
          { question: 'Do you provide study materials or do I need to buy them separately?', answer: 'We provide a complete curated resource package including our study guides, practice exams with detailed explanations, hands-on lab instructions, and a recommended reading list. You do not need to purchase any additional materials.' },
          { question: 'What is your pass rate for certification candidates?', answer: 'Our candidates have a 90%+ first-attempt pass rate across all certifications. This is significantly higher than the industry average because we focus on hands-on understanding rather than just memorization of exam dumps.' },
          { question: 'Can I get help with multiple certifications at once?', answer: 'We recommend focusing on one certification at a time for the best results. However, if you are preparing for related certifications (e.g., CKA followed by CKAD), we can create a combined study plan that covers overlapping topics efficiently.' },
          { question: 'Do you offer exam vouchers or discounts?', answer: 'We do not sell exam vouchers directly, but we guide you on how to access official discounts, free retake offers, and employer-sponsored voucher programs that can reduce your certification costs significantly.' },
          { question: 'Is the certification guidance available for teams?', answer: 'Yes, we offer group certification guidance for corporate teams. This is popular with organizations wanting to upskill their engineering teams with AWS, Azure, or Kubernetes certifications. Contact us for team pricing and custom curriculum.' },
        ]} />

        {/* Explore More Services */}
        <div className="mb-10">
          <h2 className="text-2xl font-black text-slate-900 dark:text-white mb-4">Explore More Services</h2>
          <div className="flex flex-wrap gap-3">
            <Link to="/corporate-training" className="px-4 py-2 bg-white dark:bg-slate-800 rounded-xl text-sm font-medium text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:border-primary-500 transition-colors">Corporate Training</Link>
            <Link to="/job-support" className="px-4 py-2 bg-white dark:bg-slate-800 rounded-xl text-sm font-medium text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:border-primary-500 transition-colors">IT Job Support</Link>
            <Link to="/devops-job-support" className="px-4 py-2 bg-white dark:bg-slate-800 rounded-xl text-sm font-medium text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:border-primary-500 transition-colors">DevOps Job Support</Link>
            <Link to="/aws-job-support" className="px-4 py-2 bg-white dark:bg-slate-800 rounded-xl text-sm font-medium text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:border-primary-500 transition-colors">AWS Job Support</Link>
            <Link to="/resume-linkedin-optimization" className="px-4 py-2 bg-white dark:bg-slate-800 rounded-xl text-sm font-medium text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:border-primary-500 transition-colors">Resume & LinkedIn</Link>
          </div>
        </div>

        <QuoteForm />
      </section>
    </>
  );
};

export default CertificationGuidancePage;
