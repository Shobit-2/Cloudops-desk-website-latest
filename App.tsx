import React, { Suspense, lazy, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CareerServices from './components/CareerServices';
import Expertise from './components/Expertise';
import Engagement from './components/Engagement';
import QuoteForm from './components/QuoteForm';
import Footer from './components/Footer';
import WhatsAppFloat from './components/WhatsAppFloat';
import SEOHead from './components/SEOHead';

// Lazy load pages for code splitting
const Careers = lazy(() => import('./components/Careers'));
const Mentorship = lazy(() => import('./components/Mentorship'));
const Testimonials = lazy(() => import('./components/Testimonials'));
const ServicesPage = lazy(() => import('./pages/ServicesPage'));
const AboutPage = lazy(() => import('./pages/AboutPage'));
const TestimonialsPage = lazy(() => import('./pages/TestimonialsPage'));
const BlogPage = lazy(() => import('./pages/BlogPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));
const JobSupportPage = lazy(() => import('./pages/JobSupportPage'));
const ResumeLinkedInPage = lazy(() => import('./pages/ResumeLinkedInPage'));
const MockInterviewPage = lazy(() => import('./pages/MockInterviewPage'));
const ProfileMarketingPage = lazy(() => import('./pages/ProfileMarketingPage'));
const InterviewSupportPage = lazy(() => import('./pages/InterviewSupportPage'));
const CertificationGuidancePage = lazy(() => import('./pages/CertificationGuidancePage'));
const AssignmentSupportPage = lazy(() => import('./pages/AssignmentSupportPage'));
const CorporateTrainingPage = lazy(() => import('./pages/CorporateTrainingPage'));
const DevOpsJobSupportPage = lazy(() => import('./pages/DevOpsJobSupportPage'));
const FullStackJobSupportPage = lazy(() => import('./pages/FullStackJobSupportPage'));
const DataEngineerJobSupportPage = lazy(() => import('./pages/DataEngineerJobSupportPage'));
const AIMLJobSupportPage = lazy(() => import('./pages/AIMLJobSupportPage'));
const CloudJobSupportPage = lazy(() => import('./pages/CloudJobSupportPage'));
const QAJobSupportPage = lazy(() => import('./pages/QAJobSupportPage'));
const AWSJobSupportPage = lazy(() => import('./pages/AWSJobSupportPage'));
const InterviewPreparationPage = lazy(() => import('./pages/InterviewPreparationPage'));

// Scroll to top on route change + GA4 page tracking
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
    // GA4 SPA page view tracking
    if (typeof window.gtag === 'function') {
      window.gtag('event', 'page_view', { page_path: pathname });
    }
  }, [pathname]);
  return null;
};

// 404 Not Found page
const NotFoundPage = () => (
  <>
    <SEOHead title="Page Not Found | CloudOpsDesk" description="The page you are looking for does not exist." />
    <section className="pt-32 pb-20 px-4 max-w-4xl mx-auto text-center min-h-[60vh] flex flex-col items-center justify-center">
      <h1 className="text-6xl font-black text-slate-900 dark:text-white mb-4">404</h1>
      <p className="text-xl text-slate-600 dark:text-slate-400 mb-8">The page you're looking for doesn't exist.</p>
      <a href="/" className="px-6 py-3 bg-primary-500 text-white rounded-xl font-bold hover:bg-primary-600 transition-colors">Go Home</a>
    </section>
  </>
);

const Home = () => (
  <>
    <Hero />
    <CareerServices />
    <Expertise />
    <Engagement />
    <QuoteForm />
  </>
);

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen selection:bg-sky-500/30 transition-colors duration-300 bg-slate-50 dark:bg-slate-950">
        <Navbar />
        <main>
          <Suspense fallback={<div className="min-h-screen" />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/testimonials" element={<TestimonialsPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/contact" element={<ContactPage />} />
            {/* Service Landing Pages */}
            <Route path="/job-support" element={<JobSupportPage />} />
            <Route path="/resume-linkedin-optimization" element={<ResumeLinkedInPage />} />
            <Route path="/mock-interview-preparation" element={<MockInterviewPage />} />
            <Route path="/job-application" element={<ProfileMarketingPage />} />
            <Route path="/interview-support" element={<InterviewSupportPage />} />
            <Route path="/certification-guidance" element={<CertificationGuidancePage />} />
            <Route path="/assignment-support" element={<AssignmentSupportPage />} />
            <Route path="/corporate-training" element={<CorporateTrainingPage />} />
            {/* Domain-Specific Job Support Pages */}
            <Route path="/devops-job-support" element={<DevOpsJobSupportPage />} />
            <Route path="/aws-job-support" element={<AWSJobSupportPage />} />
            <Route path="/full-stack-job-support" element={<FullStackJobSupportPage />} />
            <Route path="/data-engineer-job-support" element={<DataEngineerJobSupportPage />} />
            <Route path="/ai-ml-job-support" element={<AIMLJobSupportPage />} />
            <Route path="/cloud-job-support" element={<CloudJobSupportPage />} />
            <Route path="/qa-job-support" element={<QAJobSupportPage />} />
            <Route path="/interview-preparation" element={<InterviewPreparationPage />} />
            {/* 404 */}
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
          </Suspense>
        </main>
        <Footer />
        <WhatsAppFloat />
        <div className="fixed inset-0 pointer-events-none z-[-1] opacity-40 dark:opacity-30">
          <div className="absolute top-[20%] left-[20%] w-96 h-96 bg-sky-200/40 dark:bg-sky-900/20 rounded-full blur-[128px]" />
          <div className="absolute bottom-[20%] right-[20%] w-96 h-96 bg-indigo-200/40 dark:bg-indigo-900/20 rounded-full blur-[128px]" />
        </div>
      </div>
    </Router>
  );
}

export default App;
