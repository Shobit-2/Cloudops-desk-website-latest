import React from 'react';
import SEOHead from '../components/SEOHead';
import QuoteForm from '../components/QuoteForm';

const schema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Interview Preparation",
  "description": "Complete interview preparation service including mock interviews, system design, DSA, and real-time interview coaching for tech professionals.",
  "provider": {
    "@type": "Organization",
    "name": "CloudOps Desk"
  }
};

const InterviewPreparationPage: React.FC = () => {
  return (
    <>
      <SEOHead
        title="Interview Preparation & Coaching | Tech Interview Support — CloudOps Desk"
        description="Ace your tech interviews with expert coaching. Mock interviews, system design prep, DSA practice & real-time interview support for DevOps, Cloud, Full Stack & Data Engineering roles."
        canonical="/interview-preparation"
        keywords="interview preparation, tech interview coaching, mock interviews, system design interview, devops interview prep, cloud interview support"
        schema={schema}
      />
      <section className="pt-32 pb-20 px-4 max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
          Interview Preparation & Coaching
        </h1>
        <p className="text-lg text-slate-600 dark:text-slate-300 mb-8 max-w-3xl">
          Crack your dream tech job with our expert interview preparation services. From mock interviews to real-time coaching during actual rounds — we've got you covered.
        </p>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-sm">
            <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4">Our Services</h2>
            <ul className="space-y-3 text-slate-600 dark:text-slate-300">
              <li>• Mock technical interviews with feedback</li>
              <li>• System design interview preparation</li>
              <li>• DSA & coding round practice</li>
              <li>• Behavioral & HR round coaching</li>
              <li>• Real-time interview support</li>
              <li>• Resume & LinkedIn optimization</li>
            </ul>
          </div>
          <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-sm">
            <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4">Technologies Covered</h2>
            <ul className="space-y-3 text-slate-600 dark:text-slate-300">
              <li>• DevOps & Cloud (AWS, Azure, GCP)</li>
              <li>• Full Stack (React, Node.js, Java, Python)</li>
              <li>• Data Engineering (Spark, Kafka, Airflow)</li>
              <li>• QA Automation (Selenium, Cypress)</li>
            </ul>
          </div>
        </div>

        <QuoteForm />
      </section>
    </>
  );
};

export default InterviewPreparationPage;
