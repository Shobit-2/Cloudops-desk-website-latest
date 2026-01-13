import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Expertise from './components/Expertise';
import Testimonials from './components/Testimonials';
import Engagement from './components/Engagement';
import QuoteForm from './components/QuoteForm';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen selection:bg-sky-500/30 transition-colors duration-300">
      <Navbar />
      
      <main>
        <Hero />
        <Expertise />
        <Engagement />
        <QuoteForm />
        <Testimonials />
      </main>

      <Footer />
      
      {/* Background Mesh Gradient (Fixed) */}
      <div className="fixed inset-0 pointer-events-none z-[-1] opacity-40 dark:opacity-30">
        <div className="absolute top-[20%] left-[20%] w-96 h-96 bg-sky-200/40 dark:bg-sky-900/20 rounded-full blur-[128px] transition-colors duration-300" />
        <div className="absolute bottom-[20%] right-[20%] w-96 h-96 bg-indigo-200/40 dark:bg-indigo-900/20 rounded-full blur-[128px] transition-colors duration-300" />
      </div>
    </div>
  );
}

export default App;