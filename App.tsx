import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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
          </Routes>
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
