import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Expertise from './components/Expertise';
import TechStack from './components/TechStack';
import Mentorship from './components/Mentorship';
import Testimonials from './components/Testimonials';
import Engagement from './components/Engagement';
import Careers from './components/Careers';
import QuoteForm from './components/QuoteForm';
import Footer from './components/Footer';

// Create a Home component for the main landing page
const Home = () => (
  <>
    <Hero />
    <TechStack />
    <Expertise />
    <Mentorship />
    <Engagement />
    <Testimonials />
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
          </Routes>
        </main>

        <Footer />

        {/* Background Mesh Gradient */}
        <div className="fixed inset-0 pointer-events-none z-[-1] opacity-40 dark:opacity-30">
          <div className="absolute top-[20%] left-[20%] w-96 h-96 bg-sky-200/40 dark:bg-sky-900/20 rounded-full blur-[128px]" />
          <div className="absolute bottom-[20%] right-[20%] w-96 h-96 bg-indigo-200/40 dark:bg-indigo-900/20 rounded-full blur-[128px]" />
        </div>
      </div>
    </Router>
  );
}

export default App;