import React, { useState, useEffect, useCallback } from 'react';
import { Linkedin, Star, ChevronLeft, ChevronRight } from 'lucide-react';
import stanleyImg from '../components/stanley.jpg';
import maryImg from '../components/mary.jpg';
import ericImg from '../components/eric.jpg';
import honorineImg from '../components/honorine.jpeg';
import michaelImg from '../components/Michael.jpg';
import SEOHead from '../components/SEOHead';

interface Testimonial {
  name: string;
  role: string;
  image: string;
  linkedin: string;
  quote: string;
  service: string;
}

const testimonials: Testimonial[] = [
  {
    name: 'Stanley',
    role: 'Client Engagement',
    image: stanleyImg,
    linkedin: 'https://www.linkedin.com/in/stanley-onyewuchi-anukam-878478337/',
    quote: 'CloudOpsDesk completely transformed my professional presence. Beyond just technical expertise, they optimized my entire workflow to attract high-tier opportunities. Game changer.',
    service: 'Profile Marketing',
  },
  {
    name: 'Mary',
    role: 'Engineering Partner',
    image: maryImg,
    linkedin: 'https://www.linkedin.com/in/mary-akintunde-511575185/',
    quote: 'The technical round for my dream role was intense. CloudOpsDesk provided the architectural depth and coaching I needed to succeed. Simply the best in the business.',
    service: 'Interview Support',
  },
  {
    name: 'Honorine',
    role: 'DevOps Strategist',
    image: honorineImg,
    linkedin: 'https://www.linkedin.com/in/honorine-nsaalav-25810828a/',
    quote: 'Their corporate training is unmatched. Concepts like Kubernetes clusters and CI/CD pipelines finally clicked. Now managing production environments with zero hesitation.',
    service: 'Corporate Training',
  },
  {
    name: 'Eric',
    role: 'Enterprise DevSecOps',
    image: ericImg,
    linkedin: 'https://www.linkedin.com/in/tiwa-erick-k/',
    quote: 'Starting a role in a high-complexity environment was daunting. Having CloudOpsDesk as my "behind-the-scenes" consultant ensured every deployment was flawless. Their technical oversight is my secret weapon for delivering high-quality engineering.',
    service: 'Job Support',
  },
  {
    name: 'Michael',
    role: 'Cloud Engineer',
    image: michaelImg,
    linkedin: '#',
    quote: 'CloudOps Desk helped me transition from a traditional IT support role to a full-fledged Cloud Engineer. The structured training and hands-on projects gave me the confidence to ace my interviews and land a role I never thought possible.',
    service: 'Corporate Training',
  },
];

const TestimonialsPage: React.FC = () => {
  const [current, setCurrent] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  }, []);

  const prev = useCallback(() => {
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  }, []);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(next, 5000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, next]);

  const t = testimonials[current];

  return (
    <>
      <SEOHead
        title="Client Testimonials | CloudOpsDesk Reviews"
        description="Read real reviews from IT professionals who used CloudOpsDesk for job support, resume writing, interview prep & career advancement services."
        canonical="/testimonials"
      />
      <div className="pt-20 sm:pt-24 md:pt-32 pb-10 sm:pb-20 relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-gradient-to-br from-primary-500/5 via-transparent to-accent-500/5 rounded-full blur-3xl pointer-events-none" />

      {/* Page Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 mb-10 sm:mb-16 md:mb-20 text-center space-y-4 sm:space-y-6 relative">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary-500/10 border border-primary-500/20 text-primary-600 dark:text-primary-400 text-xs font-bold tracking-[0.2em] uppercase">
          <Star className="w-3 h-3 fill-current" />
          Client Stories
        </div>
        <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-7xl font-black text-slate-900 dark:text-white tracking-tight">
          What Our Clients <br />
          <span className="text-gradient">Say About Us</span>
        </h1>
        <p className="text-base sm:text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto font-medium leading-relaxed">
          Real stories from real professionals whose careers were transformed by CloudOps Desk.
        </p>
      </div>

      {/* Modern Carousel */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 relative">
        <div
          className="relative"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          {/* Slide Card */}
          <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-white via-white to-slate-50 dark:from-slate-800 dark:via-slate-800/90 dark:to-slate-900 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] dark:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.4)] border border-slate-100 dark:border-white/5">
            {/* Gradient accent bar */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary-500 via-sky-400 to-accent-500" />

            <div className="p-8 sm:p-12 md:p-16 min-h-[400px] flex items-center">
              <div className="w-full flex flex-col md:flex-row items-center gap-8 md:gap-12">
                {/* Left - Avatar & Info */}
                <div className="flex flex-col items-center text-center md:w-1/3 flex-shrink-0">
                  <div className="relative mb-5">
                    <div className="absolute -inset-3 bg-gradient-to-br from-primary-500 to-sky-400 rounded-full opacity-20 blur-xl animate-pulse" />
                    <img
                      src={t.image}
                      alt={t.name}
                      className="w-28 h-28 sm:w-32 sm:h-32 object-cover rounded-full relative border-[3px] border-white dark:border-slate-700 shadow-2xl"
                    />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white">{t.name}</h3>
                  <p className="text-primary-500 font-bold text-xs uppercase tracking-[0.2em] mt-1">{t.role}</p>
                  <span className="mt-3 px-4 py-1.5 rounded-full bg-gradient-to-r from-primary-500/10 to-sky-500/10 border border-primary-500/20 text-[11px] font-bold text-primary-600 dark:text-primary-400 uppercase tracking-wider">
                    {t.service}
                  </span>
                  <a
                    href={t.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center gap-2 text-sm text-slate-400 hover:text-primary-500 transition-colors"
                  >
                    <Linkedin className="w-4 h-4" />
                    <span className="font-medium">LinkedIn</span>
                  </a>
                </div>

                {/* Right - Quote */}
                <div className="md:w-2/3 relative">
                  <svg className="absolute -top-4 -left-2 w-12 h-12 text-primary-500/10" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H14.017zM0 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151C7.546 6.068 5.983 8.789 5.983 11H10v10H0z" />
                  </svg>
                  <p className="text-lg sm:text-xl md:text-2xl text-slate-600 dark:text-slate-300 leading-relaxed font-medium italic pl-4 md:pl-8 border-l-4 border-primary-500/30">
                    {t.quote}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Arrows - Modern pill style */}
          <button
            onClick={prev}
            className="absolute top-1/2 -translate-y-1/2 -left-2 sm:-left-4 md:-left-6 w-10 h-10 sm:w-12 sm:h-12 bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm rounded-full shadow-xl border border-slate-200/50 dark:border-white/10 flex items-center justify-center text-slate-500 hover:text-primary-500 hover:scale-110 hover:shadow-2xl transition-all duration-300"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={next}
            className="absolute top-1/2 -translate-y-1/2 -right-2 sm:-right-4 md:-right-6 w-10 h-10 sm:w-12 sm:h-12 bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm rounded-full shadow-xl border border-slate-200/50 dark:border-white/10 flex items-center justify-center text-slate-500 hover:text-primary-500 hover:scale-110 hover:shadow-2xl transition-all duration-300"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Progress Dots - Modern pill style */}
        <div className="flex items-center justify-center gap-2 mt-10">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrent(idx)}
              className={`h-2 rounded-full transition-all duration-500 ease-out ${idx === current ? 'bg-gradient-to-r from-primary-500 to-sky-400 w-10 shadow-md shadow-primary-500/30' : 'bg-slate-200 dark:bg-slate-700 hover:bg-slate-300 dark:hover:bg-slate-600 w-2'}`}
              aria-label={`Go to testimonial ${idx + 1}`}
            />
          ))}
        </div>

        {/* Counter */}
        <div className="text-center mt-4">
          <span className="text-sm font-mono text-slate-400 dark:text-slate-500">
            {String(current + 1).padStart(2, '0')} / {String(testimonials.length).padStart(2, '0')}
          </span>
        </div>

        {/* Trust Banner */}
        <div className="mt-16 sm:mt-24 text-center space-y-6 sm:space-y-8">
          <div className="flex items-center justify-center gap-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-7 h-7 sm:w-8 sm:h-8 text-amber-500 fill-amber-500" />
            ))}
          </div>
          <h3 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 dark:text-white">4.9 out of 5 — Rated by 200+ Clients</h3>
          <p className="text-slate-500 dark:text-slate-400 max-w-xl mx-auto font-medium">
            Join hundreds of professionals who trusted us to accelerate their careers. Your success story could be next.
          </p>
          <a href="/contact">
            <button className="px-6 sm:px-10 py-3 sm:py-5 bg-gradient-to-r from-primary-500 to-sky-500 hover:from-primary-400 hover:to-sky-400 text-white rounded-full font-black text-base sm:text-lg shadow-xl shadow-primary-500/25 hover:shadow-2xl hover:shadow-primary-500/30 transition-all duration-300 hover:-translate-y-0.5 mt-4">
              Start Your Journey Today
            </button>
          </a>
        </div>
      </div>
    </div>
    </>
  );
};

export default TestimonialsPage;
