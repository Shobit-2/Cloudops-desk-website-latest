import React from 'react';
import SEOHead from '../components/SEOHead';
import QuoteForm from '../components/QuoteForm';

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
        title="Full Stack Developer Job Support India | React, Node, Java, Python"
        description="Struggling with full stack development tasks at work? Get real-time job support from senior engineers for React, Node.js, Java, Python, Angular & .NET. 24/7 available."
        canonical="/full-stack-job-support"
        keywords="full stack developer job support, react node js job support india, full stack job support india, java developer job support, python developer support india"
        schema={schema}
      />
      <section className="pt-32 pb-20 px-4 max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
          Full Stack Developer Job Support India
        </h1>
        <p className="text-lg text-slate-600 dark:text-slate-300 mb-8 max-w-3xl">
          Need help with React components, Node.js APIs, Java microservices, or Python backends? Our senior full stack engineers provide real-time support to help you deliver quality code at work.
        </p>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-sm">
            <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4">Technologies We Support</h2>
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
            <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4">Common Tasks We Help With</h2>
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

        <QuoteForm />
      </section>
    </>
  );
};

export default FullStackJobSupportPage;
