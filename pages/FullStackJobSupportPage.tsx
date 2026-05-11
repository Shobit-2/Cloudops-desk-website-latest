import React from 'react';
import { Link } from 'react-router-dom';
import SEOHead from '../components/SEOHead';
import QuoteForm from '../components/QuoteForm';
import FAQSection from '../components/FAQSection';

const schema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Full Stack Developer Job Support India",
  "provider": { "@type": "Organization", "name": "CloudOpsDesk", "url": "https://cloudopsdesk.in" },
  "serviceType": "Full Stack Developer Job Support",
  "description": "Real-time job support for Full Stack developers working with React, Node.js, Java, Python, Angular and .NET in India.",
  "areaServed": { "@type": "Country", "name": "India" }
};

const FullStackJobSupportPage: React.FC = () => {
  return (
    <>
      <SEOHead
        title="Full Stack Job Support | React, Node & Java Help"
        description="Real-time full stack job support for React, Node.js, Java, Python & Angular developers. Senior engineers available 24/7 across India."
        canonical="/full-stack-job-support"
        keywords="full stack developer job support, react node js job support india, full stack job support india, java developer job support, python developer support india"
        schema={schema}
      />
      <section className="pt-32 pb-20 px-4 max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-6">
          Full Stack Developer Job Support India
        </h1>
        <p className="text-lg text-slate-600 dark:text-slate-300 mb-8 max-w-3xl">
          Need help with React components, Node.js APIs, Java microservices, or Python backends? Our senior full stack engineers provide real-time support to help you deliver quality code at work.
        </p>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-sm">
            <h2 className="text-2xl font-black text-slate-900 dark:text-white mb-4">Technologies We Support</h2>
            <ul className="space-y-3 text-slate-600 dark:text-slate-300">
              <li>⚛️ React.js, Next.js, Angular, Vue.js</li>
              <li>🟢 Node.js, Express, NestJS</li>
              <li>☕ Java, Spring Boot, Microservices</li>
              <li>🐍 Python, Django, FastAPI, Flask</li>
              <li>🔷 .NET Core, C#, ASP.NET</li>
              <li>🗄️ PostgreSQL, MongoDB, Redis, MySQL</li>
              <li>📡 REST APIs, GraphQL, WebSockets</li>
              <li>🐳 Docker, CI/CD for full stack apps</li>
            </ul>
          </div>
          <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-sm">
            <h2 className="text-2xl font-black text-slate-900 dark:text-white mb-4">Common Tasks We Help With</h2>
            <ul className="space-y-3 text-slate-600 dark:text-slate-300">
              <li>• Building & debugging React/Angular components</li>
              <li>• REST API development & integration</li>
              <li>• Database design & query optimization</li>
              <li>• Authentication & authorization (JWT, OAuth)</li>
              <li>• Deployment & CI/CD setup</li>
              <li>• Code review preparation & best practices</li>
              <li>• Bug fixing & performance optimization</li>
              <li>• State management (Redux, Context, MobX)</li>
            </ul>
          </div>
        </div>

        {/* Full Stack Expertise */}
        <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-sm mb-10">
          <h2 className="text-2xl font-black text-slate-900 dark:text-white mb-4">Full Stack Development Support for Real-World Projects</h2>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
            Full stack roles demand proficiency across frontend frameworks, backend APIs, databases, and deployment pipelines. Whether you are building a React dashboard, designing a Node.js microservice architecture, or debugging a complex Java Spring Boot application, our senior engineers provide hands-on guidance that helps you deliver production-quality code while learning best practices.
          </p>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
            Our support covers the entire development lifecycle — from database schema design and API architecture to frontend state management, testing, and CI/CD deployment. This holistic approach ensures you are equipped to handle any task your team throws at you.
          </p>
        </div>

        <FAQSection faqs={[
          { question: 'Which full stack technologies do you support?', answer: 'We support all major full stack technologies including React, Angular, Vue.js, Next.js on the frontend, and Node.js, Java Spring Boot, Python Django/FastAPI, .NET Core on the backend. We also cover databases (PostgreSQL, MongoDB, MySQL, Redis), APIs (REST, GraphQL), and deployment tools.' },
          { question: 'Can you help with legacy code and migration projects?', answer: 'Yes, we frequently help developers working on legacy codebases — migrating from jQuery to React, upgrading Spring Boot versions, converting monoliths to microservices, or modernizing database schemas. Our experts have extensive experience with both greenfield and brownfield projects.' },
          { question: 'How does real-time full stack support work?', answer: 'You share your screen and explain the task or issue. Our senior engineer guides you through the solution in real-time — writing code together, debugging, and explaining the approach. You deliver quality work to your team while gaining deep understanding of the concepts.' },
          { question: 'Is support available for frontend-only or backend-only tasks?', answer: 'Absolutely. While we specialize in full stack, many clients use our support for purely frontend work (React components, state management, styling) or purely backend tasks (API design, database queries, authentication). Our experts cover both ends comprehensively.' },
          { question: 'Do you help with code reviews and pull request preparation?', answer: 'Yes, we help you prepare clean, well-documented code for pull requests. Our experts review your code for best practices, suggest improvements, and help you write meaningful commit messages and PR descriptions that impress your tech lead.' },
          { question: 'Can I use this service while onboarding to a new job?', answer: 'Yes, this is one of our most popular use cases. New hires in full stack roles often face a steep learning curve with unfamiliar codebases, tools, and architectures. Our support helps you ramp up 2-3x faster and make a strong impression during your probation period.' },
        ]} />

        {/* Related Services — Internal Linking */}
        <div className="mb-10">
          <h2 className="text-2xl font-black text-slate-900 dark:text-white mb-4">Explore More Services</h2>
          <div className="flex flex-wrap gap-3">
            <Link to="/devops-job-support" className="px-4 py-2 bg-white dark:bg-slate-800 rounded-xl text-sm font-medium text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:border-primary-500 transition-colors">DevOps Support</Link>
            <Link to="/data-engineer-job-support" className="px-4 py-2 bg-white dark:bg-slate-800 rounded-xl text-sm font-medium text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:border-primary-500 transition-colors">Data Engineer Support</Link>
            <Link to="/ai-ml-job-support" className="px-4 py-2 bg-white dark:bg-slate-800 rounded-xl text-sm font-medium text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:border-primary-500 transition-colors">AI/ML Support</Link>
            <Link to="/mock-interview-preparation" className="px-4 py-2 bg-white dark:bg-slate-800 rounded-xl text-sm font-medium text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:border-primary-500 transition-colors">Mock Interview</Link>
            <Link to="/resume-linkedin-optimization" className="px-4 py-2 bg-white dark:bg-slate-800 rounded-xl text-sm font-medium text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:border-primary-500 transition-colors">Resume & LinkedIn</Link>
          </div>
        </div>

        <QuoteForm />
      </section>
    </>
  );
};

export default FullStackJobSupportPage;
