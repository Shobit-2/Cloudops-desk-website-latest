import React from 'react';
import { Target, ShieldCheck, Award, Briefcase, Zap, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import GlassCard from './ui/GlassCard';
import Button from './ui/Button';

const Mentorship: React.FC = () => {
    const scrollToQuote = () => {
        const element = document.getElementById('quote');
        element?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section id="mentorship" className="py-32 relative overflow-hidden">
            {/* Background Decorative Elements */}
            <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-primary-500/5 rounded-full blur-[120px] -z-10 animate-pulse" />
            <div className="absolute bottom-1/4 left-0 w-[500px] h-[500px] bg-accent-500/5 rounded-full blur-[120px] -z-10" />

            <div className="max-w-7xl mx-auto px-6">

                {/* Section Header */}
                <div className="mb-20 space-y-4">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-600 dark:text-amber-400 text-xs font-black tracking-widest uppercase">
                        <Star className="w-3 h-3 fill-current" />
                        Most Popular Service
                    </div>
                    <h2 className="text-4xl md:text-6xl font-black text-slate-900 dark:text-white tracking-tighter">
                        Career Acceleration <br />
                        & <span className="text-gradient">Mentorship</span>
                    </h2>
                    <p className="text-slate-600 dark:text-slate-400 max-w-2xl text-lg font-medium">
                        We don't just build infrastructure; we build technical leaders. Get the elite support you need to land your dream role and excel in high-complexity environments.
                    </p>
                </div>

                {/* Mentorship Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

                    {/* Interview Prep */}
                    <Link to="/services#interview-support" className="no-underline">
                    <GlassCard className="p-10 flex flex-col group relative overflow-hidden h-full" hoverEffect>
                        <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity">
                            <Target className="w-24 h-24" />
                        </div>
                        <div className="p-4 bg-primary-500/10 rounded-2xl text-primary-500 w-fit mb-8 group-hover:scale-110 transition-transform">
                            <Target className="w-8 h-8" />
                        </div>
                        <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Interview Domination</h3>
                        <p className="text-slate-600 dark:text-slate-400 font-medium leading-relaxed mb-8">
                            Master the system design and behavioral rounds. We provide mock interviews, architectural deep-dives, and technical defense strategies.
                        </p>
                        <ul className="space-y-4 mb-10 flex-grow">
                            {['System Design Mastery', 'Scenario-based Prep', 'Mock Architecture Rounds', 'Salary Negotiation Support'].map((item) => (
                                <li key={item} className="flex items-center gap-3 text-sm font-bold text-slate-500 dark:text-slate-400">
                                    <Zap className="w-4 h-4 text-amber-500" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </GlassCard>
                    </Link>

                    {/* Job Support */}
                    <Link to="/services#job-support" className="no-underline">
                    <GlassCard className="p-10 flex flex-col group relative overflow-hidden border-primary-500/30 bg-primary-500/[0.02] h-full" hoverEffect>
                        <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity">
                            <ShieldCheck className="w-24 h-24" />
                        </div>
                        <div className="p-4 bg-accent-500/10 rounded-2xl text-accent-500 w-fit mb-8 group-hover:scale-110 transition-transform">
                            <ShieldCheck className="w-8 h-8" />
                        </div>
                        <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">On-The-Job Support</h3>
                        <p className="text-slate-600 dark:text-slate-400 font-medium leading-relaxed mb-8">
                            Never feel overwhelmed in a new role. Our architects shadow you behind the scenes to help solve complex production blockers in real-time.
                        </p>
                        <ul className="space-y-4 mb-10 flex-grow">
                            {['Real-time Bug Resolution', 'Task Implementation Guidance', 'Code Review & Audits', '24/7 "Panic Button" Support'].map((item) => (
                                <li key={item} className="flex items-center gap-3 text-sm font-bold text-slate-500 dark:text-slate-400">
                                    <Zap className="w-4 h-4 text-accent-500" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </GlassCard>
                    </Link>

                    {/* Profile Optimization */}
                    <Link to="/services#profile-marketing" className="no-underline">
                    <GlassCard className="p-10 flex flex-col group relative overflow-hidden h-full" hoverEffect>
                        <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity">
                            <Award className="w-24 h-24" />
                        </div>
                        <div className="p-4 bg-emerald-500/10 rounded-2xl text-emerald-500 w-fit mb-8 group-hover:scale-110 transition-transform">
                            <Award className="w-8 h-8" />
                        </div>
                        <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Profile Engineering</h3>
                        <p className="text-slate-600 dark:text-slate-400 font-medium leading-relaxed mb-8">
                            Get noticed by FAANG and top-tier startups. We rebuild your resume and LinkedIn profile to clear ATS and attract elite headhunters.
                        </p>
                        <ul className="space-y-4 mb-10 flex-grow">
                            {['ATS-Optimized Resumes', 'LinkedIn Brand Strategy', 'Portfolio Repo Audits', 'Recruiter Connect Guide'].map((item) => (
                                <li key={item} className="flex items-center gap-3 text-sm font-bold text-slate-500 dark:text-slate-400">
                                    <Zap className="w-4 h-4 text-emerald-500" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </GlassCard>
                    </Link>

                </div>

                <div className="mt-20 flex flex-col md:flex-row items-center justify-between p-10 rounded-[2.5rem] bg-slate-900 dark:bg-white/5 border border-white/10 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-primary-500/10 to-transparent pointer-events-none" />
                    <div className="z-10 mb-8 md:mb-0">
                        <h4 className="text-2xl font-black text-white mb-2">Ready to Secure Your Next 6-Figure Role?</h4>
                        <p className="text-slate-400 font-medium max-w-md">Our mentorship slots are limited to ensure high-quality support. Book your strategy call today.</p>
                    </div>
                    <Button onClick={scrollToQuote} variant="primary" className="!px-10 !py-5 text-lg font-black shadow-xl shadow-primary-500/30">Claim Your Slot</Button>
                </div>
            </div>
        </section>
    );
};

export default Mentorship;
