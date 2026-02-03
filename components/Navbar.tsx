import React, { useState, useEffect } from 'react';
import { Cloud, Sun, Moon, Menu, X } from 'lucide-react';
import { Theme } from '../types';
import Button from './ui/Button';
import { Link, useNavigate, useLocation } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [theme, setTheme] = useState<Theme>(
    document.documentElement.classList.contains('dark') ? Theme.DARK : Theme.LIGHT
  );
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
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

  const navLinks = [
    { label: 'Infrastructure', id: 'expertise' },
    { label: 'Mentorship', id: 'mentorship' },
    { label: 'Partnership', id: 'engagement' },
    { label: 'Success Stories', id: 'Testimonials' },
    { label: 'Join Us', path: '/careers' },
  ];

  const handleNavClick = (e: React.MouseEvent, link: any) => {
    if (link.path) {
      setIsMobileMenuOpen(false);
      return;
    }

    e.preventDefault();
    setIsMobileMenuOpen(false);

    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(link.id);
        element?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const element = document.getElementById(link.id);
      element?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${isScrolled
      ? 'py-4 bg-white/80 dark:bg-slate-950/80 backdrop-blur-2xl border-b border-slate-200 dark:border-white/5 shadow-sm'
      : 'py-8 bg-transparent'
      }`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">

        {/* Logo */}
        <div
          className="flex items-center gap-3 cursor-pointer group"
          onClick={scrollToTop}
        >
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

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center bg-slate-100/50 dark:bg-white/5 p-1.5 rounded-2xl border border-slate-200 dark:border-white/5 backdrop-blur-md">
          {navLinks.map((link) => (
            link.path ? (
              <Link
                key={link.label}
                to={link.path}
                className="px-6 py-2 text-sm font-bold text-slate-600 dark:text-slate-400 hover:text-primary-500 dark:hover:text-white transition-all rounded-xl hover:bg-white dark:hover:bg-white/10 hover:shadow-sm"
              >
                {link.label}
              </Link>
            ) : (
              <a
                key={link.label}
                href={`#${link.id}`}
                onClick={(e) => handleNavClick(e, link)}
                className="px-6 py-2 text-sm font-bold text-slate-600 dark:text-slate-400 hover:text-primary-500 dark:hover:text-white transition-all rounded-xl hover:bg-white dark:hover:bg-white/10 hover:shadow-sm"
              >
                {link.label}
              </a>
            )
          ))}
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-4">
          <button
            onClick={toggleTheme}
            className="p-3 rounded-2xl text-slate-500 dark:text-slate-400 hover:text-primary-500 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/5 transition-all border border-transparent hover:border-slate-200 dark:hover:border-white/10 shadow-sm"
            aria-label="Toggle Theme"
          >
            {theme === Theme.DARK ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>

          <div className="hidden sm:block">
            <a href="#quote" onClick={(e) => handleNavClick(e, { id: 'quote' })}>
              <Button variant="primary" className="!px-6 !py-3 text-sm font-black shadow-lg shadow-primary-500/20">
                Let's Build
              </Button>
            </a>
          </div>

          {/* Mobile Toggle */}
          <button
            className="lg:hidden p-3 rounded-2xl bg-slate-100 dark:bg-white/5 text-slate-900 dark:text-white border border-slate-200 dark:border-white/10"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`lg:hidden absolute top-full left-0 w-full bg-white/95 dark:bg-slate-950/95 backdrop-blur-2xl border-t border-slate-200 dark:border-white/10 overflow-hidden transition-all duration-500 ${isMobileMenuOpen ? 'max-h-[500px] border-b opacity-100' : 'max-h-0 opacity-0'
        }`}>
        <div className="p-8 space-y-6">
          {navLinks.map((link) => (
            link.path ? (
              <Link
                key={link.label}
                to={link.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block text-2xl font-black text-slate-900 dark:text-white hover:text-primary-500 transition-colors"
              >
                {link.label}
              </Link>
            ) : (
              <a
                key={link.label}
                href={`#${link.id}`}
                onClick={(e) => handleNavClick(e, link)}
                className="block text-2xl font-black text-slate-900 dark:text-white hover:text-primary-500 transition-colors"
              >
                {link.label}
              </a>
            )
          ))}
          <div className="pt-6">
            <a href="#quote" className="block" onClick={(e) => handleNavClick(e, { id: 'quote' })}>
              <Button className="w-full justify-center !py-5 text-lg font-black shadow-xl shadow-primary-500/20">Let's Build Together</Button>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;