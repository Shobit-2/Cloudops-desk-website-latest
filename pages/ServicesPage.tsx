import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import { FileText, Linkedin, Send, Shield, BookOpen, Users, Target, Headphones, Zap, CheckCircle, Briefcase, Award, ShieldCheck, Star } from 'lucide-react';
import GlassCard from '../components/ui/GlassCard';
import Button from '../components/ui/Button';
import SEOHead from '../components/SEOHead';
import FAQSection from '../components/FAQSection';

const services = [
  {
    id: 'profile-marketing',
    icon: <FileText className="w-10 h-10" />,
    iconBg: 'bg-sky-500/10',
    iconColor: 'text-sky-500',
    accentColor: 'text-sky-500',
    title: 'Profile Marketing',
    tagline: 'Get noticed before you even apply.',
    description:
      'We transform your professional identity into a magnet for recruiters. Our expert team crafts ATS-optimized resumes, revamps your LinkedIn presence, and actively applies to top-tier roles on your behalf — so you can focus on preparing, not searching.',
    longDescription:
      'In today\'s hyper-competitive tech job market, your profile is your first impression. We go beyond just writing a resume — we engineer your entire professional brand. From keyword optimization that beats Applicant Tracking Systems, to LinkedIn profile makeovers that attract headhunters, to strategic job application campaigns targeting your ideal companies — we handle it all.',
    features: [
      { icon: <FileText className="w-5 h-5" />, text: 'ATS-Optimized Resume Writing', desc: 'Professionally crafted resumes tailored to pass automated screening systems used by top companies.' },
      { icon: <Linkedin className="w-5 h-5" />, text: 'LinkedIn Profile Optimization', desc: 'Complete overhaul of your LinkedIn — headline, summary, experience, skills, and endorsements strategy.' },
      { icon: <Send className="w-5 h-5" />, text: 'Job Application Assistance', desc: 'We apply to 50+ relevant positions weekly on your behalf with personalized cover letters.' },
      { icon: <Target className="w-5 h-5" />, text: 'Recruiter Outreach Strategy', desc: 'Direct outreach to hiring managers and recruiters at your target companies.' },
      { icon: <Award className="w-5 h-5" />, text: 'Portfolio & GitHub Audit', desc: 'Review and enhancement of your GitHub repos and portfolio projects to showcase real skills.' },
      { icon: <Star className="w-5 h-5" />, text: 'Personal Branding Coaching', desc: 'Learn to position yourself as a thought leader in your domain through content and networking.' },
    ],
  },
  {
    id: 'job-support',
    icon: <ShieldCheck className="w-10 h-10" />,
    iconBg: 'bg-purple-500/10',
    iconColor: 'text-purple-500',
    accentColor: 'text-purple-500',
    title: 'Job Support',
    tagline: 'Your expert, always on standby.',
    description:
      'Struggling with a production issue at work? Our senior engineers shadow you in real-time to help you resolve blockers, deliver tasks on time, and build confidence in high-complexity environments.',
    longDescription:
      'Starting a new role can be overwhelming, especially in fast-paced tech environments. Our On-Job Support service pairs you with an experienced engineer who works behind the scenes — helping you understand codebases, debug production issues, write clean code, and deliver on your tasks. Think of it as having a senior mentor on speed dial, 24/7.',
    features: [
      { icon: <Headphones className="w-5 h-5" />, text: '24/7 Real-Time Task Support', desc: 'Round-the-clock availability for urgent production issues and daily task guidance.' },
      { icon: <Shield className="w-5 h-5" />, text: 'Production Issue Resolution', desc: 'Expert help debugging and resolving critical production incidents under tight SLAs.' },
      { icon: <CheckCircle className="w-5 h-5" />, text: 'Code Review & Delivery Help', desc: 'Get your PRs reviewed, refactored, and ready for merge with best practices.' },
      { icon: <Zap className="w-5 h-5" />, text: '"Panic Button" Emergency Line', desc: 'Instant access to a senior engineer when you\'re stuck on a critical blocker.' },
      { icon: <Briefcase className="w-5 h-5" />, text: 'Sprint Planning Assistance', desc: 'Help estimating, planning, and breaking down tasks for your team sprints.' },
      { icon: <Users className="w-5 h-5" />, text: 'Architecture & Design Reviews', desc: 'Guidance on system design decisions and architectural patterns for your projects.' },
    ],
  },
  {
    id: 'interview-support',
    icon: <Target className="w-10 h-10" />,
    iconBg: 'bg-rose-500/10',
    iconColor: 'text-rose-500',
    accentColor: 'text-rose-500',
    title: 'Interview Support',
    tagline: 'Walk in confident. Walk out with an offer.',
    description:
      'From mock interviews to live real-time coaching during technical rounds — we give you the edge to outperform every candidate in the room.',
    longDescription:
      'Our Interview Support program is designed to make you unstoppable in any technical interview. We provide comprehensive mock interview sessions covering DSA, system design, behavioral rounds, and domain-specific questions. For the actual interviews, our coaches can provide real-time guidance to ensure you perform at your absolute best.',
    features: [
      { icon: <Target className="w-5 h-5" />, text: 'Mock Technical Interviews', desc: 'Realistic interview simulations with feedback from engineers at top companies.' },
      { icon: <Headphones className="w-5 h-5" />, text: 'Live Interview Coaching', desc: 'Real-time support during your actual interviews for maximum confidence.' },
      { icon: <Shield className="w-5 h-5" />, text: 'System Design Mastery', desc: 'Deep-dive sessions on designing scalable systems — the #1 interview differentiator.' },
      { icon: <CheckCircle className="w-5 h-5" />, text: 'Salary Negotiation Guidance', desc: 'Learn proven strategies to negotiate 20-40% higher compensation packages.' },
      { icon: <BookOpen className="w-5 h-5" />, text: 'DSA & Coding Prep', desc: 'Structured problem-solving practice with patterns used in FAANG interviews.' },
      { icon: <Star className="w-5 h-5" />, text: 'Behavioral Round Coaching', desc: 'STAR method training and storytelling techniques for behavioral questions.' },
    ],
  },
  {
    id: 'corporate-training',
    icon: <BookOpen className="w-10 h-10" />,
    iconBg: 'bg-emerald-500/10',
    iconColor: 'text-emerald-500',
    accentColor: 'text-emerald-500',
    title: 'Corporate Training',
    tagline: 'Upskill. Switch. Grow.',
    description:
      'Structured training programs for professionals looking to switch careers or get promoted. We cover all major tech domains with hands-on mentorship from working industry experts.',
    longDescription:
      'Whether you\'re a fresher looking to break into tech, an experienced professional wanting to switch domains, or a team lead seeking to upskill your squad — our Corporate Training programs are built for real-world impact. Every course is taught by active industry practitioners, not just trainers, ensuring you learn what actually matters on the job.',
    features: [
      { icon: <BookOpen className="w-5 h-5" />, text: 'Structured Learning Roadmaps', desc: 'Step-by-step curriculum designed to take you from beginner to job-ready in 8-12 weeks.' },
      { icon: <Users className="w-5 h-5" />, text: 'Live 1:1 & Group Sessions', desc: 'Interactive sessions with real engineers — not pre-recorded videos.' },
      { icon: <CheckCircle className="w-5 h-5" />, text: 'Hands-on Project Practice', desc: 'Build real projects that go on your resume — not toy examples.' },
      { icon: <Zap className="w-5 h-5" />, text: 'Placement Assistance Included', desc: 'Resume prep, mock interviews, and job referrals bundled with every training program.' },
      { icon: <Briefcase className="w-5 h-5" />, text: 'All Tech Domains Covered', desc: 'DevOps, Cloud, Data Engineering, AI/ML, Full Stack, SAP, Workday, and more.' },
      { icon: <Award className="w-5 h-5" />, text: 'Progress Tracking & Reports', desc: 'Weekly progress reports and skill assessments to measure your growth.' },
    ],
  },
];

const ServicesPage: React.FC = () => {
  const location = useLocation();

  React.useEffect(() => {
    const hash = location.hash.replace('#', '');
    if (hash) {
      setTimeout(() => {
        const el = document.getElementById(hash);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      window.scrollTo({ top: 0 });
    }
  }, [location]);

  const scrollToQuote = () => {
    window.location.href = '/contact';
  };

  return (
    <>
      <SEOHead
        title="IT Career Services | Job Support & Training India"
        description="Explore CloudOpsDesk services: IT job support, resume writing, mock interviews, profile marketing, certification guidance & corporate training."
        canonical="/services"
      />
      <div className="pt-20 sm:pt-24 md:pt-32 pb-10 sm:pb-20">
      {/* Page Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 mb-10 sm:mb-16 md:mb-20 text-center space-y-4 sm:space-y-6">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary-500/10 border border-primary-500/20 text-primary-600 dark:text-primary-400 text-xs font-bold tracking-[0.2em] uppercase">
          <span className="w-2 h-2 rounded-full bg-primary-500 animate-pulse"></span>
          Our Services
        </div>
        <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-7xl font-black text-slate-900 dark:text-white tracking-tight">
          Everything You Need to <br />
          <span className="text-gradient">Succeed in Tech</span>
        </h1>
        <p className="text-base sm:text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto font-medium leading-relaxed">
          From landing your dream job to excelling in it — we provide end-to-end career support across all major technology domains.
        </p>
      </div>

      {/* Services Detail Sections */}
      {services.map((service, idx) => (
        <section
          key={service.id}
          id={service.id}
          className={`py-10 sm:py-16 md:py-20 ${idx % 2 === 1 ? 'bg-slate-50/50 dark:bg-slate-900/10' : ''}`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 md:gap-16 items-center">
              {/* Left: Info */}
              <div className={`space-y-8 ${idx % 2 === 1 ? 'lg:order-2' : ''}`}>
                <div className={`inline-flex items-center gap-3 p-4 ${service.iconBg} rounded-2xl ${service.iconColor}`}>
                  {service.icon}
                </div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white tracking-tight">
                  {service.title}
                </h2>
                <p className={`text-lg font-bold ${service.accentColor} uppercase tracking-wider`}>
                  {service.tagline}
                </p>
                <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
                  {service.description}
                </p>
                <p className="text-slate-500 dark:text-slate-500 leading-relaxed">
                  {service.longDescription}
                </p>
                <Button variant="primary" className="!px-6 sm:!px-8 !py-3 sm:!py-4 text-base sm:text-lg font-black shadow-xl shadow-primary-500/20" onClick={scrollToQuote}>
                  Get Started
                </Button>
              </div>

              {/* Right: Features */}
              <div className={`${idx % 2 === 1 ? 'lg:order-1' : ''}`}>
                <div className="grid gap-4">
                  {service.features.map((feat, i) => (
                    <GlassCard key={i} className="!p-6 flex items-start gap-4 group" hoverEffect>
                      <div className={`p-3 ${service.iconBg} rounded-xl ${service.iconColor} shrink-0 group-hover:scale-110 transition-transform`}>
                        {feat.icon}
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-900 dark:text-white mb-1">{feat.text}</h4>
                        <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">{feat.desc}</p>
                      </div>
                    </GlassCard>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* FAQ Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 mt-10 sm:mt-16 md:mt-20">
        <FAQSection faqs={[
          { question: 'How do I choose the right service for me?', answer: 'It depends on where you are in your career journey. If you are already working and need task help, choose IT Job Support. If you are job searching, start with Resume & LinkedIn Optimization. For interview prep, combine Mock Interviews with Interview Preparation. Not sure? Book a free 15-minute consultation and we will recommend the best path.' },
          { question: 'Can I use multiple services together?', answer: 'Absolutely, and many clients do. The most popular combinations are Job Support + Resume Optimization for working professionals, and Mock Interview + Live Interview Support + Resume for job seekers. We offer bundled packages at discounted rates for combined services.' },
          { question: 'How quickly can I get started?', answer: 'You can start the same day for most services. After a brief consultation via WhatsApp, we match you with the right expert and schedule your first session. For urgent needs like same-day interview support, we prioritize immediate matching.' },
          { question: 'Do you offer refunds if I am not satisfied?', answer: 'We have a satisfaction guarantee for all our services. If you are not happy with the quality of our first session, we will either assign a different expert or provide a full refund. Our 4.9/5 satisfaction rating reflects our commitment to quality.' },
          { question: 'Are your services available for non-IT professionals?', answer: 'Yes, our resume writing, LinkedIn optimization, mock interview, and interview preparation services are available for professionals in all domains — IT, marketing, finance, operations, HR, and more. IT job support and corporate training are specifically for technology roles.' },
          { question: 'What is the pricing structure?', answer: 'We offer flexible pricing with hourly, weekly, and monthly plans for job support, per-session pricing for interviews and coaching, and project-based pricing for resumes and assignments. Contact us via WhatsApp for detailed pricing — we customize based on your specific needs.' },
        ]} />
      </section>

      {/* Bottom CTA */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 mt-10 sm:mt-16 md:mt-20">
        <div className="flex flex-col md:flex-row items-center justify-between p-5 sm:p-6 md:p-10 rounded-[2rem] sm:rounded-[2.5rem] bg-slate-900 dark:bg-white/5 border border-white/10 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-primary-500/10 to-transparent pointer-events-none" />
          <div className="z-10 mb-8 md:mb-0">
            <h4 className="text-xl sm:text-2xl font-black text-white mb-2">Not sure which service is right for you?</h4>
            <p className="text-sm sm:text-base text-slate-400 font-medium max-w-md">Book a free 15-min strategy call and we'll map out your roadmap together.</p>
          </div>
          <Link to="/contact">
            <Button variant="primary" className="!px-6 sm:!px-10 !py-3 sm:!py-5 text-base sm:text-lg font-black shadow-xl shadow-primary-500/30 z-10">
              Book Free Consultation
            </Button>
          </Link>
        </div>
      </div>
    </div>
    </>
  );
};

export default ServicesPage;
