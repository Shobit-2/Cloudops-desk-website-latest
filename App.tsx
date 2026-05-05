import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Analytics } from '@vercel/analytics/react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Expertise from './components/Expertise';
import CareerServices from './components/CareerServices';
import Mentorship from './components/Mentorship';
import Engagement from './components/Engagement';
import Testimonials from './components/Testimonials';
import QuoteForm from './components/QuoteForm';
import Footer from './components/Footer';
import Careers from './components/Careers';
import WhatsAppFloat from './components/WhatsAppFloat';
import ServicesPage from './pages/ServicesPage';
import AboutPage from './pages/AboutPage';
import TestimonialsPage from './pages/TestimonialsPage';
import BlogPage from './pages/BlogPage';
import ContactPage from './pages/ContactPage';
import JobSupportPage from './pages/JobSupportPage';
import ResumeLinkedInPage from './pages/ResumeLinkedInPage';
import MockInterviewPage from './pages/MockInterviewPage';
import ProfileMarketingPage from './pages/ProfileMarketingPage';
import InterviewSupportPage from './pages/InterviewSupportPage';
import CertificationGuidancePage from './pages/CertificationGuidancePage';
import AssignmentSupportPage from './pages/AssignmentSupportPage';
import CorporateTrainingPage from './pages/CorporateTrainingPage';
import DevOpsJobSupportPage from './pages/DevOpsJobSupportPage';
import FullStackJobSupportPage from './pages/FullStackJobSupportPage';
import DataEngineerJobSupportPage from './pages/DataEngineerJobSupportPage';
import AIMLJobSupportPage from './pages/AIMLJobSupportPage';
import CloudJobSupportPage from './pages/CloudJobSupportPage';
import QAJobSupportPage from './pages/QAJobSupportPage';
import AWSJobSupportPage from './pages/AWSJobSupportPage';
import InterviewPreparationPage from './pages/InterviewPreparationPage';

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
      <div className="min-h-screen selection:bg-sky-500/30 transition-colors duration-300 bg-slate-50 dark:bg-slate-950">
        <Navbar />
        <main>
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
          </Routes>
        </main>
        <Footer />
        <WhatsAppFloat />
        <Analytics />
        <div className="fixed inset-0 pointer-events-none z-[-1] opacity-40 dark:opacity-30">
          <div className="absolute top-[20%] left-[20%] w-96 h-96 bg-sky-200/40 dark:bg-sky-900/20 rounded-full blur-[128px]" />
          <div className="absolute bottom-[20%] right-[20%] w-96 h-96 bg-indigo-200/40 dark:bg-indigo-900/20 rounded-full blur-[128px]" />
        </div>
      </div>
    </Router>
  );
}

export default App;
