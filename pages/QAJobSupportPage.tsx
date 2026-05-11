import React from 'react';
import { Link } from 'react-router-dom';
import SEOHead from '../components/SEOHead';
import QuoteForm from '../components/QuoteForm';
import FAQSection from '../components/FAQSection';

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
        title="QA Automation Job Support | Selenium & Playwright"
        description="Real-time QA job support for test automation, Selenium, Playwright & API testing. Senior SDET engineers available 24/7 across India."
        canonical="/qa-job-support"
        keywords="qa engineer job support india, selenium automation job support, sdet job support india, playwright testing support, api testing help, qa automation support online"
        schema={schema}
      />
      <section className="pt-32 pb-20 px-4 max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-6">
          QA / Automation Tester Job Support India
        </h1>
        <p className="text-lg text-slate-600 dark:text-slate-300 mb-8 max-w-3xl">
          Struggling with test automation framework setup, Selenium scripts, or CI/CD test integration? Our senior QA engineers provide real-time support for all testing challenges.
        </p>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-sm">
            <h2 className="text-2xl font-black text-slate-900 dark:text-white mb-4">Tools & Frameworks</h2>
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
            <h2 className="text-2xl font-black text-slate-900 dark:text-white mb-4">Common Tasks We Help With</h2>
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

        {/* QA Industry Context */}
        <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-sm mb-10">
          <h2 className="text-2xl font-black text-slate-900 dark:text-white mb-4">QA Automation: Essential for Modern Software Delivery</h2>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
            Quality assurance has evolved from manual testing to sophisticated automation frameworks that integrate directly into CI/CD pipelines. Modern QA engineers are expected to write maintainable test frameworks, implement API testing, set up performance testing suites, and integrate automated tests into deployment workflows. The demand for skilled QA automation engineers continues to grow as companies adopt DevOps and continuous delivery practices.
          </p>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
            Our QA job support helps automation engineers master tools like Selenium, Cypress, Playwright, RestAssured, JMeter, and testing frameworks across Java, Python, and JavaScript. Whether you are building a test automation framework from scratch or debugging flaky tests in CI, our experts provide the guidance you need.
          </p>
        </div>

        <FAQSection faqs={[
          { question: 'What QA automation tools do you support?', answer: 'We provide support for all major QA automation tools including Selenium WebDriver, Cypress, Playwright, Appium, RestAssured, Postman, JMeter, Gatling, TestNG, JUnit, pytest, Cucumber/BDD, and Robot Framework. We also help with CI/CD integration for automated testing using Jenkins, GitHub Actions, and GitLab CI.' },
          { question: 'Can you help with API testing and performance testing?', answer: 'Yes, API testing and performance testing are core areas of our QA support. We help with REST API testing using RestAssured and Postman, GraphQL testing, contract testing with Pact, load testing with JMeter and Gatling, and setting up performance test suites that integrate with your CI/CD pipeline.' },
          { question: 'Do you help with test framework design and architecture?', answer: 'Absolutely. We help design Page Object Model (POM) frameworks, data-driven testing architectures, BDD frameworks with Cucumber, and hybrid frameworks. Good test architecture is critical for maintainability, and our experts help you build frameworks that scale with your application.' },
          { question: 'Can you help with mobile app testing?', answer: 'Yes, we support mobile testing using Appium for native and hybrid apps on both Android and iOS. We also help with mobile-specific testing challenges like gesture testing, device farm setup (BrowserStack, Sauce Labs), and cross-device compatibility testing.' },
          { question: 'Is support available for QA engineers transitioning to SDET roles?', answer: 'Yes, many of our clients are QA engineers upskilling to Software Development Engineer in Test (SDET) roles. We help with learning programming fundamentals, building automation frameworks, understanding CI/CD, and developing the coding skills needed for SDET positions at top companies.' },
          { question: 'Do you help with flaky test debugging?', answer: 'Yes, flaky tests are one of the most common issues in test automation. We help identify root causes (timing issues, environment dependencies, test data problems), implement proper waits, isolate tests, and build reliable test suites that your team can trust.' },
        ]} />

        {/* Related Services — Internal Linking */}
        <div className="mb-10">
          <h2 className="text-2xl font-black text-slate-900 dark:text-white mb-4">Explore More Services</h2>
          <div className="flex flex-wrap gap-3">
            <Link to="/devops-job-support" className="px-4 py-2 bg-white dark:bg-slate-800 rounded-xl text-sm font-medium text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:border-primary-500 transition-colors">DevOps Support</Link>
            <Link to="/full-stack-job-support" className="px-4 py-2 bg-white dark:bg-slate-800 rounded-xl text-sm font-medium text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:border-primary-500 transition-colors">Full Stack Support</Link>
            <Link to="/interview-preparation" className="px-4 py-2 bg-white dark:bg-slate-800 rounded-xl text-sm font-medium text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:border-primary-500 transition-colors">Interview Prep</Link>
            <Link to="/mock-interview-preparation" className="px-4 py-2 bg-white dark:bg-slate-800 rounded-xl text-sm font-medium text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:border-primary-500 transition-colors">Mock Interview</Link>
            <Link to="/resume-linkedin-optimization" className="px-4 py-2 bg-white dark:bg-slate-800 rounded-xl text-sm font-medium text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:border-primary-500 transition-colors">Resume & LinkedIn</Link>
          </div>
        </div>

        <QuoteForm />
      </section>
    </>
  );
};

export default QAJobSupportPage;
