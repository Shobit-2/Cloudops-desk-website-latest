import React from 'react';
import SEOHead from '../components/SEOHead';
import QuoteForm from '../components/QuoteForm';

const schema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "QA Automation Job Support India",
  "provider": { "@type": "Organization", "name": "CloudOpsDesk", "url": "https://cloudopsdesk.in" },
  "serviceType": "QA Automation Job Support",
  "description": "Real-time job support for QA engineers and SDET professionals working with Selenium, Playwright, API testing, and performance testing in India.",
  "areaServed": { "@type": "Country", "name": "India" }
};

const QAJobSupportPage: React.FC = () => {
  return (
    <>
      <SEOHead
        title="QA / Automation Tester Job Support India | Selenium, Playwright"
        description="Need help with test automation frameworks, Selenium scripts, or API testing at work? Get real-time QA job support from senior SDET engineers. All testing tools covered."
        canonical="/qa-job-support"
        keywords="qa engineer job support india, selenium automation job support, sdet job support india, playwright testing support, api testing help, qa automation support online"
        schema={schema}
      />
      <section className="pt-32 pb-20 px-4 max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
          QA / Automation Tester Job Support India
        </h1>
        <p className="text-lg text-slate-600 dark:text-slate-300 mb-8 max-w-3xl">
          Struggling with test automation framework setup, Selenium scripts, or CI/CD test integration? Our senior QA engineers provide real-time support for all testing challenges.
        </p>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-sm">
            <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4">Tools & Frameworks</h2>
            <ul className="space-y-3 text-slate-600 dark:text-slate-300">
              <li>🔍 Selenium WebDriver (Java, Python, C#)</li>
              <li>🎭 Playwright & Cypress</li>
              <li>📡 REST Assured, Postman, API Testing</li>
              <li>📊 JMeter, Gatling, k6 (Performance)</li>
              <li>🧪 TestNG, JUnit, PyTest, NUnit</li>
              <li>🔄 Jenkins, GitHub Actions CI/CD integration</li>
              <li>📱 Appium (Mobile Testing)</li>
              <li>🐳 Docker + Selenium Grid</li>
            </ul>
          </div>
          <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-sm">
            <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4">Common Tasks We Help With</h2>
            <ul className="space-y-3 text-slate-600 dark:text-slate-300">
              <li>• Test automation framework design & setup</li>
              <li>• Page Object Model implementation</li>
              <li>• API test automation (REST/GraphQL)</li>
              <li>• CI/CD pipeline test integration</li>
              <li>• Performance testing & load testing</li>
              <li>• Test data management strategies</li>
              <li>• BDD with Cucumber/SpecFlow</li>
              <li>• Cross-browser & parallel testing setup</li>
            </ul>
          </div>
        </div>

        <QuoteForm />
      </section>
    </>
  );
};

export default QAJobSupportPage;
