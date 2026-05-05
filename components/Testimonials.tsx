import React, { useState, useEffect, useCallback } from 'react';
import { Linkedin, ChevronLeft, ChevronRight } from 'lucide-react';
import stanleyImg from './stanley.jpg';
import maryImg from './mary.jpg';
import ericImg from './eric.jpg';
import honorineImg from './honorine.jpeg';
import michaelImg from './Michael.jpg';

const testimonials = [
  {
    name: 'Stanley',
    role: 'Client Engagement',
    image: stanleyImg,
    linkedin: 'https://www.linkedin.com/in/stanley-onyewuchi-anukam-878478337/',
    quote: 'CloudOpsDesk completely transformed my professional presence. Beyond just technical expertise, they optimized my entire workflow to attract high-tier opportunities. Game changer.',
    color: 'primary',
  },
  {
    name: 'Mary',
    role: 'Engineering Partner',
    image: maryImg,
    linkedin: 'https://www.linkedin.com/in/mary-akintunde-511575185/',
    quote: 'The technical round for my dream role was intense. CloudOpsDesk provided the architectural depth and coaching I needed to succeed. Simply the best in the business.',
    color: 'accent',
  },
  {
    name: 'Honorine',
    role: 'DevOps Strategist',
    image: honorineImg,
    linkedin: 'https://www.linkedin.com/in/honorine-nsaalav-25810828a/',
    quote: 'Their corporate training is unmatched. Concepts like Kubernetes clusters and CI/CD pipelines finally clicked. Now managing production environments with zero hesitation.',
    color: 'emerald',
  },
  {
    name: 'Eric',
    role: 'Enterprise DevSecOps',
    image: ericImg,
    linkedin: 'https://www.linkedin.com/in/tiwa-erick-k/',
    quote: 'Starting a role in a high-complexity environment was daunting. Having CloudOpsDesk as my behind-the-scenes consultant ensured every deployment was flawless. Their technical oversight is my secret weapon for delivering high-quality engineering.',
    color: 'primary',
  },
  {
    name: 'Michael',
    role: 'Cloud Architect',
    image: michaelImg,
    linkedin: '#',
    quote: 'CloudOpsDesk helped me transition from a traditional sysadmin role to a full cloud-native engineer. Their hands-on approach and real-world scenarios made all the difference.',
    color: 'accent',
  },
];

const Testimonials: React.FC = () => {
  const [current, setCurrent] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

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
    <section id="Testimonials" className="py-32 relative overflow-hidden bg-slate-50/50 dark:bg-slate-900/10">
      <div className="max-w-5xl mx-auto px-6">

        {/* Section Header */}
        <div className="mb-16 text-center space-y-4">
          <h2 className="text-4xl md:text-6xl font-black text-slate-900 dark:text-white tracking-tight">Success Stories</h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-lg font-medium">Trusted by visionaries to build the foundations of their digital empires.</p>
        </div>

        {/* Slide Container */}
        <div
          className="relative"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          {/* Card */}
          <div className="bg-white dark:bg-slate-800/80 backdrop-blur-xl rounded-3xl p-10 md:p-14 shadow-xl border border-slate-200/50 dark:border-white/10 transition-all duration-500 min-h-[320px] flex flex-col justify-between">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
              {/* Avatar */}
              <div className="flex-shrink-0">
                <div className="relative w-24 h-24 md:w-28 md:h-28">
                  <div className={`absolute inset-0 bg-${t.color}-500 rounded-full blur-lg opacity-20`} />
                  <img
                    src={t.image}
                    alt={t.name}
                    className="w-full h-full object-cover rounded-full relative border-4 border-white dark:border-slate-700 shadow-lg"
                  />
                </div>
              </div>

              {/* Content */}
              <div className="flex-grow text-center md:text-left">
                <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 leading-relaxed font-medium italic mb-6">
                  "{t.quote}"
                </p>
                <div className="flex items-center justify-center md:justify-start gap-3">
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white">{t.name}</h3>
                    <p className="text-primary-500 font-bold text-xs uppercase tracking-widest">{t.role}</p>
                  </div>
                  <a
                    href={t.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ml-3 p-2 bg-slate-100 dark:bg-white/5 rounded-full text-slate-400 hover:text-primary-500 transition-colors"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prev}
            className="absolute top-1/2 -translate-y-1/2 -left-4 md:-left-6 w-12 h-12 bg-white dark:bg-slate-800 rounded-full shadow-lg border border-slate-200 dark:border-white/10 flex items-center justify-center text-slate-600 dark:text-slate-300 hover:text-primary-500 hover:border-primary-300 transition-all"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={next}
            className="absolute top-1/2 -translate-y-1/2 -right-4 md:-right-6 w-12 h-12 bg-white dark:bg-slate-800 rounded-full shadow-lg border border-slate-200 dark:border-white/10 flex items-center justify-center text-slate-600 dark:text-slate-300 hover:text-primary-500 hover:border-primary-300 transition-all"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Dots */}
        <div className="flex items-center justify-center gap-2 mt-8">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrent(idx)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${idx === current ? 'bg-primary-500 w-8' : 'bg-slate-300 dark:bg-slate-600 hover:bg-slate-400'}`}
              aria-label={`Go to testimonial ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;