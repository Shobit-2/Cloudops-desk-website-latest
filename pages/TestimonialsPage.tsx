import React from 'react';
import { Linkedin, Star, Quote } from 'lucide-react';
import GlassCard from '../components/ui/GlassCard';
import stanleyImg from '../components/stanley.jpg';
import maryImg from '../components/mary.jpg';
import ericImg from '../components/eric.jpg';
import honorineImg from '../components/honorine.jpeg';
import michaelImg from '../components/Michael.jpg';

interface Testimonial {
  name: string;
  role: string;
  image: string;
  linkedin: string;
  quote: string;
  accentColor: string;
  service: string;
}

const testimonials: Testimonial[] = [
  {
    name: 'Stanley',
    role: 'Client Engagement',
    image: stanleyImg,
    linkedin: 'https://www.linkedin.com/in/stanley-onyewuchi-anukam-878478337/',
    quote: 'CloudOpsDesk completely transformed my professional presence. Beyond just technical expertise, they optimized my entire workflow to attract high-tier opportunities. Game changer.',
    accentColor: 'text-primary-500',
    service: 'Profile Marketing',
  },
  {
    name: 'Mary',
    role: 'Engineering Partner',
    image: maryImg,
    linkedin: 'https://www.linkedin.com/in/mary-akintunde-511575185/',
    quote: 'The technical round for my dream role was intense. CloudOpsDesk provided the architectural depth and coaching I needed to succeed. Simply the best in the business.',
    accentColor: 'text-accent-500',
    service: 'Interview Support',
  },
  {
    name: 'Honorine',
    role: 'DevOps Strategist',
    image: honorineImg,
    linkedin: 'https://www.linkedin.com/in/honorine-nsaalav-25810828a/',
    quote: 'Their corporate training is unmatched. Concepts like Kubernetes clusters and CI/CD pipelines finally clicked. Now managing production environments with zero hesitation.',
    accentColor: 'text-emerald-500',
    service: 'Corporate Training',
  },
  {
    name: 'Eric',
    role: 'Enterprise DevSecOps',
    image: ericImg,
    linkedin: 'https://www.linkedin.com/in/tiwa-erick-k/',
    quote: 'Starting a role in a high-complexity environment was daunting. Having CloudOpsDesk as my "behind-the-scenes" consultant ensured every deployment was flawless. Their technical oversight is my secret weapon for delivering high-quality engineering.',
    accentColor: 'text-primary-500',
    service: 'Job Support',
  },
  {
    name: 'Michael',
    role: 'Cloud Engineer',
    image: michaelImg,
    linkedin: '#',
    quote: 'CloudOps Desk helped me transition from a traditional IT support role to a full-fledged Cloud Engineer. The structured training and hands-on projects gave me the confidence to ace my interviews and land a role I never thought possible.',
    accentColor: 'text-sky-500',
    service: 'Corporate Training',
  },
];

const TestimonialsPage: React.FC = () => {
  React.useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  return (
    <div className="pt-20 sm:pt-24 md:pt-32 pb-10 sm:pb-20">
      {/* Page Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 mb-10 sm:mb-16 md:mb-20 text-center space-y-4 sm:space-y-6">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary-500/10 border border-primary-500/20 text-primary-600 dark:text-primary-400 text-xs font-bold tracking-[0.2em] uppercase">
          <Star className="w-3 h-3 fill-current" />
          Client Stories
        </div>
        <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-7xl font-black text-slate-900 dark:text-white tracking-tight">
          What Our Clients <br />
          <span className="text-gradient">Say About Us</span>
        </h1>
        <p className="text-base sm:text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto font-medium leading-relaxed">
          Real stories from real professionals whose careers were transformed by CloudOps Desk. Their success is our greatest achievement.
        </p>
      </div>

      {/* Testimonials Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
          {testimonials.map((testimonial, i) => (
            <GlassCard
              key={i}
              className={`p-5 sm:p-6 md:p-10 flex flex-col group ${i === testimonials.length - 1 && testimonials.length % 2 !== 0 ? 'md:col-span-2 max-w-2xl mx-auto w-full' : ''}`}
              hoverEffect
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="relative shrink-0">
                  <Quote className="w-8 h-8 text-primary-500/20 absolute -top-2 -left-2" />
                </div>
              </div>

              <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-medium italic mb-6 sm:mb-8 flex-grow">
                "{testimonial.quote}"
              </p>

              <div className="flex flex-wrap items-center gap-3 sm:gap-5 pt-4 sm:pt-6 border-t border-slate-200 dark:border-white/5">
                <div className="relative w-14 h-14">
                  <div className="absolute inset-0 bg-primary-500 rounded-full blur-md opacity-20 group-hover:opacity-40 transition-opacity" />
                  <img src={testimonial.image} alt={testimonial.name} className="w-full h-full object-cover rounded-full relative border-2 border-white/10" />
                </div>
                <div className="flex-grow">
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">{testimonial.name}</h3>
                  <p className={`${testimonial.accentColor} font-bold text-[10px] uppercase tracking-widest`}>{testimonial.role}</p>
                </div>
                <div className="flex items-center gap-3">
                  <span className="px-3 py-1 rounded-full bg-slate-100 dark:bg-white/5 text-[10px] font-bold text-slate-500 uppercase tracking-wider">
                    {testimonial.service}
                  </span>
                  <a
                    href={testimonial.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-slate-100 dark:bg-white/5 rounded-full text-slate-400 hover:text-primary-500 transition-colors"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </GlassCard>
          ))}
        </div>

        {/* Trust Banner */}
        <div className="mt-20 text-center space-y-8">
          <div className="flex items-center justify-center gap-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-8 h-8 text-amber-500 fill-amber-500" />
            ))}
          </div>
          <h3 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 dark:text-white">4.9 out of 5 — Rated by 200+ Clients</h3>
          <p className="text-slate-500 dark:text-slate-400 max-w-xl mx-auto font-medium">
            Join hundreds of professionals who trusted us to accelerate their careers. Your success story could be next.
          </p>
          <a href="/contact">
            <button className="px-6 sm:px-10 py-3 sm:py-5 bg-sky-500 hover:bg-sky-400 text-white rounded-full font-black text-base sm:text-lg shadow-xl shadow-primary-500/20 transition-all">
              Start Your Journey Today
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsPage;
