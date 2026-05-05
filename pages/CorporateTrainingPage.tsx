import React from 'react';
import SEOHead from '../components/SEOHead';
import QuoteForm from '../components/QuoteForm';

const schema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Corporate Training",
  "description": "Enterprise-grade corporate training in DevOps, Cloud, Data Engineering, Full Stack Development, and 50+ technology stacks for teams of all sizes.",
  "provider": {
    "@type": "Organization",
    "name": "CloudOps Desk"
  }
};

const CorporateTrainingPage: React.FC = () => {
  return (
    <>
      <SEOHead
        title="Corporate Training India | DevOps, Cloud & Tech Training — CloudOps Desk"
        description="Enterprise corporate training in DevOps, AWS, Azure, Kubernetes, Data Engineering, Full Stack & 50+ technologies. Customized programs for teams. Trusted by leading companies across India."
        canonical="/corporate-training"
        keywords="corporate training india, devops training, aws training, kubernetes training, cloud training, tech corporate training, enterprise training"
        schema={schema}
      />
      <section className="pt-32 pb-20 px-4 max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
          Corporate Training
        </h1>
        <p className="text-lg text-slate-600 dark:text-slate-300 mb-8 max-w-3xl">
          Upskill your engineering teams with hands-on corporate training programs. We deliver customized training across 50+ technology stacks, tailored to your team's needs.
        </p>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-sm">
            <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4">Training Tracks</h2>
            <ul className="space-y-3 text-slate-600 dark:text-slate-300">
              <li>• DevOps & SRE (CI/CD, K8s, Terraform, Ansible)</li>
              <li>• Cloud Platforms (AWS, Azure, GCP)</li>
              <li>• Data Engineering (Spark, Kafka, Airflow, dbt)</li>
              <li>• Full Stack Development (React, Node, Java, Python)</li>
              <li>• QA Automation (Selenium, Cypress, Playwright)</li>
              <li>• SAP, ServiceNow, Workday & more</li>
            </ul>
          </div>
          <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-sm">
            <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4">Why CloudOps Desk</h2>
            <ul className="space-y-3 text-slate-600 dark:text-slate-300">
              <li>• Industry practitioners as trainers</li>
              <li>• Hands-on labs & real-world projects</li>
              <li>• Flexible scheduling (online/offline)</li>
              <li>• Post-training support & assessments</li>
            </ul>
          </div>
        </div>

        <QuoteForm />
      </section>
    </>
  );
};

export default CorporateTrainingPage;
