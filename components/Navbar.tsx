import React, { useState, useEffect, useRef } from 'react';
import { Cloud, Sun, Moon, Menu, X, ChevronDown } from 'lucide-react';
import { Theme } from '../types';
import Button from './ui/Button';
import { Link, useNavigate, useLocation } from 'react-router-dom';

const serviceCategories = [
  {
    label: 'Profile Marketing',
    path: '/job-application',
    subItems: [
      { label: 'Resume & LinkedIn', path: '/resume-linkedin-optimization' },
      { label: 'Job Application', path: '/job-application' },
    ],
  },
  {
    label: 'On Job Support',
    path: '/job-support',
    subItems: [
      { label: 'IT Job Support', path: '/job-support' },
    ],
  },
  {
    label: 'Interview Support',
    path: '/interview-support',
    subItems: [
      { label: 'Mock Interview Prep', path: '/mock-interview-preparation' },
      { label: 'Assignment Support', path: '/assignment-support' },
      { label: 'Interview Support', path: '/interview-support' },
    ],
  },
  {
    label: 'Corporate Training',
    path: '/corporate-training',
    subItems: [
      { label: 'Hands-on Training', path: '/corporate-training' },
      { label: 'Certification Guidance', path: '/certification-guidance' },
    ],
  },
];

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [theme, setTheme] = useState<Theme>(
    document.documentElement.classList.contains('dark') ? Theme.DARK : Theme.LIGHT
  );
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const servicesRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (servicesRef.current && !servicesRef.current.contains(e.target as Node)) {
        setIsServicesOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === Theme.DARK ? Theme.LIGHT : Theme.DARK;
    setTheme(newTheme);
    if (newTheme === Theme.DARK) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  const scrollToTop = () => {
    if (location.pathname !== '/') {
      navigate('/');
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${isScrolled
      ? 'py-4 bg-white/80 dark:bg-slate-950/80 backdrop-blur-2xl border-b border-slate-200 dark:border-white/5 shadow-sm'
      : 'py-8 bg-transparent'
      }`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center gap-3 cursor-pointer group" onClick={scrollToTop}>
          <div className="relative">
            <div className="absolute inset-0 bg-primary-500 rounded-lg blur opacity-20 group-hover:opacity-40 transition-opacity" />
            <div className="relative p-2.5 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-white/10 group-hover:border-primary-500/50 transition-all shadow-sm">
              <Cloud className="w-6 h-6 text-primary-500" />
            </div>
          </div>
          <span className="text-2xl font-black tracking-tighter text-slate-900 dark:text-white">
            CloudOps <span className="text-primary-500 font-medium">Desk</span>
          </span>
        </div>

        <div className="hidden lg:flex items-center bg-slate-100/50 dark:bg-white/5 p-1.5 rounded-2xl border border-slate-200 dark:border-white/5 backdrop-blur-md">
          <Link to="/" onClick={() => { window.scrollTo({ top: 0, behavior: 'smooth' }); }}
            className="px-5 py-2 text-sm font-bold text-slate-600 dark:text-slate-400 hover:text-primary-500 dark:hover:text-white transition-all rounded-xl hover:bg-white dark:hover:bg-white/10 hover:shadow-sm">
            Home
          </Link>

          {/* Services Dropdown */}
          <div ref={servicesRef} className="relative">
            <button
              className="px-5 py-2 text-sm font-bold text-slate-600 dark:text-slate-400 hover:text-primary-500 dark:hover:text-white transition-all rounded-xl hover:bg-white dark:hover:bg-white/10 hover:shadow-sm flex items-center gap-1"
              onClick={() => setIsServicesOpen(!isServicesOpen)}
              onMouseEnter={() => setIsServicesOpen(true)}
            >
              Services
              <ChevronDown className={`w-3.5 h-3.5 transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} />
            </button>
            <div
              className={`absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[600px] bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/10 rounded-2xl shadow-xl overflow-hidden transition-all duration-300 ${isServicesOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-2 pointer-events-none'}`}
              onMouseLeave={() => setIsServicesOpen(false)}
            >
              <div className="p-4">
                <Link
                  to="/services"
                  className="block px-4 py-2.5 text-sm font-bold text-primary-500 hover:bg-slate-50 dark:hover:bg-white/5 transition-colors rounded-xl border-b border-slate-100 dark:border-white/5 mb-3"
                  onClick={() => setIsServicesOpen(false)}
                >
                  All Services
                </Link>
                <div className="grid grid-cols-2 gap-4">
                  {serviceCategories.map((category) => (
                    <div key={category.label}>
                      <Link
                        to={category.path}
                        className="block px-3 py-1.5 text-sm font-black text-slate-900 dark:text-white hover:text-primary-500 transition-colors"
                        onClick={() => setIsServicesOpen(false)}
                      >
                        {category.label}
                      </Link>
                      <div className="pl-3 mt-1 space-y-0.5 border-l-2 border-primary-500/20">
                        {category.subItems.map((item) => (
                          <Link
                            key={item.label}
                            to={item.path}
                            className="block px-3 py-1.5 text-xs font-medium text-slate-500 dark:text-slate-400 hover:text-primary-500 dark:hover:text-white hover:bg-slate-50 dark:hover:bg-white/5 rounded-lg transition-colors"
                            onClick={() => setIsServicesOpen(false)}
                          >
                            {item.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <Link to="/about"
            className="px-5 py-2 text-sm font-bold text-slate-600 dark:text-slate-400 hover:text-primary-500 dark:hover:text-white transition-all rounded-xl hover:bg-white dark:hover:bg-white/10 hover:shadow-sm">
            About
          </Link>
          <Link to="/testimonials"
            className="px-5 py-2 text-sm font-bold text-slate-600 dark:text-slate-400 hover:text-primary-500 dark:hover:text-white transition-all rounded-xl hover:bg-white dark:hover:bg-white/10 hover:shadow-sm">
            Testimonials
          </Link>
          <Link to="/blog"
            className="px-5 py-2 text-sm font-bold text-slate-600 dark:text-slate-400 hover:text-primary-500 dark:hover:text-white transition-all rounded-xl hover:bg-white dark:hover:bg-white/10 hover:shadow-sm">
            Blog
          </Link>
          <Link to="/contact"
            className="px-5 py-2 text-sm font-bold text-slate-600 dark:text-slate-400 hover:text-primary-500 dark:hover:text-white transition-all rounded-xl hover:bg-white dark:hover:bg-white/10 hover:shadow-sm">
            Contact Us
          </Link>
        </div>

        <div className="flex items-center gap-4">
          <button onClick={toggleTheme}
            className="p-3 rounded-2xl text-slate-500 dark:text-slate-400 hover:text-primary-500 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/5 transition-all border border-transparent hover:border-slate-200 dark:hover:border-white/10 shadow-sm"
            aria-label="Toggle Theme">
            {theme === Theme.DARK ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>
          <div className="hidden sm:block">
            <Link to="/contact">
              <Button variant="primary" className="!px-6 !py-3 text-sm font-black shadow-lg shadow-primary-500/20">
                Get Started
              </Button>
            </Link>
          </div>
          <button
            className="lg:hidden p-3 rounded-2xl bg-slate-100 dark:bg-white/5 text-slate-900 dark:text-white border border-slate-200 dark:border-white/10"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden absolute top-full left-0 w-full bg-white/95 dark:bg-slate-950/95 backdrop-blur-2xl border-t border-slate-200 dark:border-white/10 overflow-hidden transition-all duration-500 ${isMobileMenuOpen ? 'max-h-[800px] border-b opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="p-4 sm:p-6 md:p-8 space-y-4 sm:space-y-6">
          <Link to="/" onClick={() => { setIsMobileMenuOpen(false); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
            className="block text-xl sm:text-2xl font-black text-slate-900 dark:text-white hover:text-primary-500 transition-colors">
            Home
          </Link>

          {/* Mobile Services Dropdown */}
          <div>
            <button
              onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
              className="flex items-center gap-2 text-xl sm:text-2xl font-black text-slate-900 dark:text-white hover:text-primary-500 transition-colors"
            >
              Services
              <ChevronDown className={`w-5 h-5 transition-transform ${isMobileServicesOpen ? 'rotate-180' : ''}`} />
            </button>
            <div className={`overflow-hidden transition-all duration-300 ${isMobileServicesOpen ? 'max-h-[600px] mt-3' : 'max-h-0'}`}>
              <div className="pl-4 space-y-4 border-l-2 border-primary-500/30">
                <Link to="/services" onClick={() => setIsMobileMenuOpen(false)}
                  className="block text-lg font-bold text-primary-500">
                  All Services
                </Link>
                {serviceCategories.map((category) => (
                  <div key={category.label}>
                    <Link to={category.path} onClick={() => setIsMobileMenuOpen(false)}
                      className="block text-base font-black text-slate-900 dark:text-white hover:text-primary-500 transition-colors">
                      {category.label}
                    </Link>
                    <div className="pl-4 mt-1 space-y-1">
                      {category.subItems.map((item) => (
                        <Link key={item.label} to={item.path} onClick={() => setIsMobileMenuOpen(false)}
                          className="block text-sm font-medium text-slate-500 dark:text-slate-400 hover:text-primary-500 transition-colors">
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <Link to="/about" onClick={() => setIsMobileMenuOpen(false)}
            className="block text-xl sm:text-2xl font-black text-slate-900 dark:text-white hover:text-primary-500 transition-colors">
            About
          </Link>
          <Link to="/testimonials" onClick={() => setIsMobileMenuOpen(false)}
            className="block text-xl sm:text-2xl font-black text-slate-900 dark:text-white hover:text-primary-500 transition-colors">
            Testimonials
          </Link>
          <Link to="/blog" onClick={() => setIsMobileMenuOpen(false)}
            className="block text-xl sm:text-2xl font-black text-slate-900 dark:text-white hover:text-primary-500 transition-colors">
            Blog
          </Link>
          <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)}
            className="block text-xl sm:text-2xl font-black text-slate-900 dark:text-white hover:text-primary-500 transition-colors">
            Contact Us
          </Link>

          <div className="pt-4 sm:pt-6">
            <Link to="/contact" className="block" onClick={() => setIsMobileMenuOpen(false)}>
              <Button className="w-full justify-center !py-4 sm:!py-5 text-base sm:text-lg font-black shadow-xl shadow-primary-500/20">Get Started Today</Button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
