import React, { useState, useEffect } from 'react';
import { Cloud, Sun, Moon, Menu, X } from 'lucide-react';
import { Theme } from '../types';
import Button from './ui/Button';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [theme, setTheme] = useState<Theme>(Theme.DARK);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
    document.documentElement.classList.toggle('dark');
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  // Define links and their target section IDs
  const navLinks = [
    { label: 'Services', id: 'expertise' },
    { label: 'Expertise', id: 'expertise' },
    { label: 'Engagement', id: 'engagement' },
    { label: 'Support', id: 'support' },
    { label: 'Career', id: 'Career' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'py-4 bg-slate-50/70 dark:bg-slate-950/70 backdrop-blur-xl border-b border-slate-200 dark:border-white/5' : 'py-6 bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        
        {/* Logo */}
        <div 
          className="flex items-center gap-3 cursor-pointer group" 
          onClick={scrollToTop}
        >
          <div className="p-2 bg-gradient-to-br from-slate-200 to-slate-300 dark:from-slate-800 dark:to-slate-900 rounded-lg border border-slate-300 dark:border-white/10 group-hover:border-sky-500/50 transition-colors">
            <Cloud className="w-6 h-6 text-sky-500 dark:text-sky-400" />
          </div>
          <span className="text-xl font-bold tracking-tight text-slate-900 dark:text-white">
            CloudOps <span className="text-slate-500 dark:text-slate-400 font-light">Desk</span>
          </span>
        </div>

        {/* Center Links - Desktop */}
        <div className="hidden md:flex items-center bg-white/50 dark:bg-white/5 backdrop-blur-md px-6 py-2 rounded-full border border-slate-200 dark:border-white/5">
          {navLinks.map((link) => (
            <a 
              key={link.label} 
              href={`#${link.id}`}
              onClick={(e) => handleNavClick(e, link.id)}
              className="px-4 py-1 text-sm text-slate-600 dark:text-slate-300 hover:text-sky-600 dark:hover:text-white transition-colors relative group"
            >
              {link.label}
              <span className="absolute bottom-0 left-1/2 w-0 h-px bg-sky-500 dark:bg-sky-400 transition-all duration-300 -translate-x-1/2 group-hover:w-1/2" />
            </a>
          ))}
        </div>

        {/* Right Actions */}
        <div className="hidden md:flex items-center gap-4">
          {/* <button 
            onClick={toggleTheme}
            className="p-2 rounded-full text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200 dark:hover:bg-white/5 transition-colors"
            aria-label="Toggle Theme"
          >
            {theme === Theme.DARK ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button> */}
          
          <a href="#quote" onClick={(e) => handleNavClick(e, 'quote')}>
            <Button variant="primary" className="!py-2 !px-4 text-sm">
              Let's Talk
            </Button>
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-slate-900 dark:text-slate-300"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-slate-50 dark:bg-slate-950/95 backdrop-blur-xl border-b border-slate-200 dark:border-white/10 p-6 md:hidden flex flex-col gap-4 shadow-xl">
          {navLinks.map((link) => (
            <a 
              key={link.label} 
              href={`#${link.id}`}
              className="text-slate-600 dark:text-slate-300 hover:text-sky-500 dark:hover:text-sky-400 py-2 border-b border-slate-200 dark:border-white/5"
              onClick={(e) => handleNavClick(e, link.id)}
            >
              {link.label}
            </a>
          ))}
           <a href="#quote" onClick={(e) => handleNavClick(e, 'quote')} className="w-full">
             <Button variant="primary" className="w-full justify-center">
              Let's Talk
            </Button>
           </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;