import React from 'react';
import { FileText, Linkedin, Send, Shield, BookOpen, Users, Target, Headphones, Zap, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import GlassCard from './ui/GlassCard';
import Button from './ui/Button';

const CareerServices: React.FC = () => {
  const scrollToQuote = () => {
    const element = document.getElementById('quote');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const services = [
    {
      id: 1,
      slug: 'profile-marketing',
      icon: <FileText className="w-9 h-9" />,
      badge: 'Most Requested',
      badgeColor: 'bg-amber-500/10 border-amber-500/20 text-amber-600 dark:text-amber-400',
      iconBg: 'bg-sky-500/10',
      iconColor: 'text-sky-500',
      accentColor: 'text-sky-500',
      title: 'Profile Marketing',
      tagline: 'Get noticed before you even apply.',
      description: 'We transform your professional identity into a magnet for recruiters. ATS-optimized resume, LinkedIn overhaul, and active job application support — all handled for you.',
      features: [
        { icon: <FileText className="w-4 h-4" />, text: 'ATS-Optimized Resume Writing' },
        { icon: <Linkedin className="w-4 h-4" />, text: 'LinkedIn Profile Optimization' },
        { icon: <Send className="w-4 h-4" />, text: 'Job Application Assistance' },
        { icon: <Target className="w-4 h-4" />, text: 'Recruiter Outreach Strategy' },
      ],
      span: 'md:col-span-6',
    },
    {
      id: 2,
      slug: 'job-support',
      icon: <Shield className="w-9 h-9" />,
      badge: 'High Impact',
      badgeColor: 'bg-purple-500/10 border-purple-500/20 text-purple-600 dark:text-purple-400',
      iconBg: 'bg-purple-500/10',
      iconColor: 'text-purple-500',
      accentColor: 'text-purple-500',
      title: 'On-Job Support',
      tagline: 'Your expert, always on standby.',
      description: 'Struggling with a production issue at work? Our engineers shadow you in real-time to help you resolve blockers, deliver tasks, and look like a rockstar on the job.',
      features: [
        { icon: <Headphones className="w-4 h-4" />, text: '24/7 Real-Time Task Support' },
        { icon: <Shield className="w-4 h-4" />, text: 'Production Issue Resolution' },
        { icon: <CheckCircle className="w-4 h-4" />, text: 'Code Review & Delivery Help' },
        { icon: <Zap className="w-4 h-4" />, text: '"Panic Button" Emergency Line' },
      ],
      span: 'md:col-span-6',
    },
    {
      id: 3,
      slug: 'corporate-training',
      icon: <BookOpen className="w-9 h-9" />,
      badge: 'Career Switch',
      badgeColor: 'bg-emerald-500/10 border-emerald-500/20 text-emerald-600 dark:text-emerald-400',
      iconBg: 'bg-emerald-500/10',
      iconColor: 'text-emerald-500',
      accentColor: 'text-emerald-500',
      title: 'Corporate Training',
      tagline: 'Upskill. Switch. Grow.',
      description: 'Structured training programs for professionals looking to switch careers or get promoted. We cover all major tech domains with hands-on mentorship from working industry experts.',
      features: [
        { icon: <BookOpen className="w-4 h-4" />, text: 'Structured Learning Roadmaps' },
        { icon: <Users className="w-4 h-4" />, text: 'Live 1:1 & Group Sessions' },
        { icon: <CheckCircle className="w-4 h-4" />, text: 'Hands-on Project Practice' },
        { icon: <Zap className="w-4 h-4" />, text: 'Placement Assistance Included' },
      ],
      span: 'md:col-span-7',
    },
    {
      id: 4,
      slug: 'interview-support',
      icon: <Target className="w-9 h-9" />,
      badge: 'High Success Rate',
      badgeColor: 'bg-rose-500/10 border-rose-500/20 text-rose-600 dark:text-rose-400',
      iconBg: 'bg-rose-500/10',
      iconColor: 'text-rose-500',
      accentColor: 'text-rose-500',
      title: 'Interview Support',
      tagline: 'Walk in confident. Walk out with an offer.',
      description: 'From mock interviews to live real-time coaching during technical rounds — we give you the edge to outperform every candidate in the room.',
      features: [
        { icon: <Target className="w-4 h-4" />, text: 'Mock Technical Interviews' },
        { icon: <Headphones className="w-4 h-4" />, text: 'Live Interview Coaching' },
        { icon: <Shield className="w-4 h-4" />, text: 'System Design Mastery' },
        { icon: <CheckCircle className="w-4 h-4" />, text: 'Salary Negotiation Guidance' },
      ],
      span: 'md:col-span-5',
    },
  ];

  return (
    <section id="career" className="py-16 relative">
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-primary-500/5 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-1/4 left-0 w-[500px] h-[500px] bg-accent-500/5 rounded-full blur-[120px] -z-10" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-12 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary-500/10 border border-primary-500/20 text-primary-600 dark:text-primary-400 text-xs font-bold tracking-[0.2em] uppercase">
            <span className="w-2 h-2 rounded-full bg-primary-500 animate-pulse"></span>
            B2C Career Services
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-black text-slate-900 dark:text-white tracking-tighter">
            Every Stage of Your <br /><span className="text-gradient">Career Journey</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-base sm:text-lg font-medium">
            Whether you're just starting out, switching careers, or looking to grow in your current role — we have the right support for you.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {services.map((service) => (
            <Link key={service.id} to={`/services#${service.slug}`} className={`${service.span} no-underline`}>
              <GlassCard className="group flex flex-col h-full cursor-pointer" hoverEffect>
                <div className="flex items-start justify-between mb-6">
                  <div className={`p-4 ${service.iconBg} rounded-2xl ${service.iconColor} transition-transform group-hover:scale-110`}>
                    {service.icon}
                  </div>
                  <div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full border text-[10px] font-black tracking-widest uppercase ${service.badgeColor}`}>
                    {service.badge}
                  </div>
                </div>

                <h3 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white mb-2">{service.title}</h3>
                <p className={`text-sm font-bold ${service.accentColor} mb-4 uppercase tracking-wider`}>{service.tagline}</p>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-8 flex-grow">{service.description}</p>

                <ul className="space-y-3">
                  {service.features.map((feat, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm font-semibold text-slate-500 dark:text-slate-400">
                      <span className={service.accentColor}>{feat.icon}</span>
                      {feat.text}
                    </li>
                  ))}
                </ul>
              </GlassCard>
            </Link>
          ))}
        </div>

        {/* CTA Banner */}
        <div className="mt-16 flex flex-col md:flex-row items-center justify-between p-6 sm:p-8 md:p-10 rounded-[2rem] md:rounded-[2.5rem] bg-slate-900 dark:bg-white/5 border border-white/10 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-primary-500/10 to-transparent pointer-events-none" />
          <div className="z-10 mb-8 md:mb-0">
            <h4 className="text-xl sm:text-2xl font-black text-white mb-2">Not sure which service is right for you?</h4>
            <p className="text-slate-400 font-medium max-w-md">Book a free 15-min strategy call and we'll map out your roadmap together.</p>
          </div>
          <Link to="/contact">
            <Button variant="primary" className="!px-6 !py-3 sm:!px-8 sm:!py-4 md:!px-10 md:!py-5 text-base sm:text-lg font-black shadow-xl shadow-primary-500/30 z-10">
              Book Free Consultation
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CareerServices;
