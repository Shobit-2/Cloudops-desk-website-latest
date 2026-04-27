import React from 'react';
import { Cloud, Users, Target, Award, Zap, Shield, Globe, Heart, CheckCircle } from 'lucide-react';
import GlassCard from '../components/ui/GlassCard';
import Button from '../components/ui/Button';

const AboutPage: React.FC = () => {
  React.useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  const values = [
    { icon: <Target className="w-7 h-7" />, title: 'Results-Driven', description: 'Every engagement is measured by outcomes — placements, promotions, and real career growth.' },
    { icon: <Heart className="w-7 h-7" />, title: 'People First', description: 'We treat every candidate as a partner, not a number. Personalized support is our default.' },
    { icon: <Shield className="w-7 h-7" />, title: 'Integrity', description: 'Transparent pricing, honest advice, and ethical practices — no shortcuts, no false promises.' },
    { icon: <Zap className="w-7 h-7" />, title: 'Speed & Quality', description: 'We move fast without cutting corners. High-quality delivery in every interaction.' },
  ];

  const stats = [
    { value: '500+', label: 'Careers Launched' },
    { value: '95%', label: 'Placement Rate' },
    { value: '50+', label: 'Tech Stacks Covered' },
    { value: '24/7', label: 'Support Available' },
    { value: '4.9/5', label: 'Client Satisfaction' },
    { value: '12hrs', label: 'Avg. Response Time' },
  ];

  const team = [
    { role: 'DevOps Engineers', desc: 'AWS, GCP, Azure certified professionals with 8+ years experience.' },
    { role: 'Career Coaches', desc: 'HR and recruitment experts from top MNCs and startups.' },
    { role: 'Full Stack Developers', desc: 'Active engineers building production systems at scale.' },
    { role: 'Data & AI Specialists', desc: 'Experts in Spark, Kafka, ML pipelines, and modern data stacks.' },
  ];

  return (
    <div className="pt-20 sm:pt-24 md:pt-32 pb-10 sm:pb-20">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 mb-12 sm:mb-16 md:mb-24">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 md:gap-16 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary-500/10 border border-primary-500/20 text-primary-600 dark:text-primary-400 text-xs font-bold tracking-[0.2em] uppercase">
              <span className="w-2 h-2 rounded-full bg-primary-500 animate-pulse"></span>
              About Us
            </div>
            <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-7xl font-black text-slate-900 dark:text-white tracking-tight leading-[0.95]">
              We Build <br />
              <span className="text-gradient">Tech Careers</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-slate-600 dark:text-slate-400 leading-relaxed font-medium max-w-xl">
              CloudOps Desk is India's leading B2C tech career platform. We help professionals land their dream roles, excel on the job, and grow into technical leaders — across every major technology domain.
            </p>
            <p className="text-slate-500 dark:text-slate-500 leading-relaxed max-w-xl">
              Founded by industry practitioners who saw a massive gap between what companies need and what candidates offer, CloudOps Desk bridges that divide with hands-on mentorship, real-world training, and end-to-end career support.
            </p>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 bg-primary-500/10 rounded-[2.5rem] blur-3xl -z-10" />
            <div className="bg-slate-950/95 backdrop-blur-2xl rounded-[2rem] border border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.5)] p-8 space-y-6">
              <div className="flex items-center gap-3 mb-6">
                <Cloud className="w-8 h-8 text-primary-500" />
                <span className="text-xl font-black text-white">CloudOps Desk</span>
              </div>
              <p className="text-slate-400 leading-relaxed">
                We're not just a training company — we're your complete career partner. From the first resume draft to your first production deployment in a new role, we're there at every step.
              </p>
              <div className="grid grid-cols-2 gap-4 pt-4">
                {stats.slice(0, 4).map((stat, i) => (
                  <div key={i} className="p-4 bg-white/5 rounded-xl border border-white/5">
                    <div className="text-2xl font-black text-white">{stat.value}</div>
                    <div className="text-[10px] uppercase tracking-widest text-slate-500 font-bold">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mission Section */}
      <section className="py-10 sm:py-16 md:py-20 bg-slate-50/50 dark:bg-slate-900/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center space-y-4 sm:space-y-6 mb-10 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white tracking-tight">Our Mission</h2>
            <p className="text-base sm:text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed font-medium">
              To democratize access to high-quality tech career support — making world-class mentorship, training, and job assistance available to every aspiring tech professional, regardless of their background.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <GlassCard className="p-8 text-center space-y-4" hoverEffect>
              <div className="inline-flex p-4 bg-primary-500/10 rounded-2xl text-primary-500">
                <Globe className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">Global Reach</h3>
              <p className="text-slate-500 dark:text-slate-400 leading-relaxed">Supporting professionals across India, US, Canada, UK, and the Middle East in landing roles at top companies worldwide.</p>
            </GlassCard>
            <GlassCard className="p-8 text-center space-y-4" hoverEffect>
              <div className="inline-flex p-4 bg-emerald-500/10 rounded-2xl text-emerald-500">
                <Users className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">Expert Network</h3>
              <p className="text-slate-500 dark:text-slate-400 leading-relaxed">Our mentors are active engineers and hiring managers at FAANG, top startups, and leading consulting firms.</p>
            </GlassCard>
            <GlassCard className="p-8 text-center space-y-4 md:col-span-2 lg:col-span-1" hoverEffect>
              <div className="inline-flex p-4 bg-amber-500/10 rounded-2xl text-amber-500">
                <Award className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">Proven Track Record</h3>
              <p className="text-slate-500 dark:text-slate-400 leading-relaxed">500+ careers launched with a 95% placement rate. Our results speak louder than any marketing.</p>
            </GlassCard>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-10 sm:py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {stats.map((stat, i) => (
              <GlassCard key={i} className="!p-6 text-center" hoverEffect>
                <div className="text-3xl font-black text-slate-900 dark:text-white mb-1">{stat.value}</div>
                <div className="text-[10px] uppercase tracking-widest text-slate-500 font-bold">{stat.label}</div>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-10 sm:py-16 md:py-20 bg-slate-50/50 dark:bg-slate-900/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center space-y-4 mb-10 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white tracking-tight">Our Values</h2>
            <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-lg font-medium">The principles that guide everything we do.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, i) => (
              <GlassCard key={i} className="!p-8 space-y-4 group" hoverEffect>
                <div className="p-3 bg-primary-500/10 rounded-xl text-primary-500 w-fit group-hover:scale-110 transition-transform">
                  {value.icon}
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">{value.title}</h3>
                <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">{value.description}</p>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-10 sm:py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center space-y-4 mb-10 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white tracking-tight">Our Team</h2>
            <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-lg font-medium">
              A curated network of industry practitioners who bring real-world experience to every engagement.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, i) => (
              <GlassCard key={i} className="!p-8 space-y-3" hoverEffect>
                <div className="p-3 bg-primary-500/10 rounded-xl text-primary-500 w-fit">
                  <CheckCircle className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">{member.role}</h3>
                <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">{member.desc}</p>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 mt-10">
        <div className="flex flex-col md:flex-row items-center justify-between p-5 sm:p-6 md:p-10 rounded-[2rem] sm:rounded-[2.5rem] bg-slate-900 dark:bg-white/5 border border-white/10 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-primary-500/10 to-transparent pointer-events-none" />
          <div className="z-10 mb-8 md:mb-0">
            <h4 className="text-xl sm:text-2xl font-black text-white mb-2">Ready to start your journey with us?</h4>
            <p className="text-sm sm:text-base text-slate-400 font-medium max-w-md">Let's discuss how we can help you achieve your career goals.</p>
          </div>
          <a href="/contact">
            <Button variant="primary" className="!px-6 sm:!px-10 !py-3 sm:!py-5 text-base sm:text-lg font-black shadow-xl shadow-primary-500/30 z-10">
              Contact Us
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
