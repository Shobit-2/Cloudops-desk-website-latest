import React from 'react';
import { Briefcase, MapPin, Clock, ArrowRight, Code, Terminal, Cpu } from 'lucide-react';
import GlassCard from './ui/GlassCard';
import Button from './ui/Button';

const jobs = [
  {
    title: "Junior DevOps Engineer (Intern)",
    type: "Internship",
    location: "Remote",
    duration: "6 Months",
    icon: <Terminal className="w-6 h-6" />,
    description: "Work on CI/CD pipelines and learn cloud infrastructure management using Terraform and AWS."
  },
  {
    title: "Cloud Infrastructure Associate",
    type: "Full-time",
    location: "Remote / Hybrid",
    duration: "Permanent",
    icon: <Cpu className="w-6 h-6" />,
    description: "Help build and manage scalable cloud architectures for our international clients."
  }
];

const Careers: React.FC = () => {
  return (

    <section className="pt-32 pb-24 min-h-screen relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white mb-6">
            Join Our Team
          </h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-lg">
            We are looking for passionate individuals to help us grow and deliver great products to our clients.
          </p>
        </div>

        {/* Job Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {jobs.map((job, index) => (
            <GlassCard key={index} className="p-8 group hover:border-sky-500/50 transition-all" hoverEffect>
              <div className="flex justify-between items-start mb-6">
                <div className="p-3 bg-sky-500/10 rounded-lg text-sky-500">
                  {job.icon}
                </div>
                <span className="px-3 py-1 bg-sky-500/10 text-sky-500 text-xs font-bold rounded-full uppercase tracking-wider">
                  {job.type}
                </span>
              </div>

              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">{job.title}</h3>

              <div className="flex flex-wrap gap-4 mb-6 text-sm text-slate-500 dark:text-slate-400">
                <div className="flex items-center gap-1">
                  <MapPin className="w-4 h-4" /> {job.location}
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="w-4 h-4" /> {job.duration}
                </div>
              </div>

              <p className="text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
                {job.description}
              </p>

              <Button
                variant="outline"
                className="w-full justify-center group/btn"
                onClick={() => window.location.href = 'mailto:careers@yourdomain.com?subject=Application for ' + job.title}
              >
                Apply Now <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
              </Button>
            </GlassCard>
          ))}
        </div>

        {/* Culture Note */}
        <GlassCard className="p-10 text-center bg-sky-500/5 border-sky-500/20">
          <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Don't see a perfect fit?</h3>
          <p className="text-slate-600 dark:text-slate-400">
            We're always looking for talent. Send your resume to <span className="text-sky-500 font-medium">cloudopsdesk@gmail.com</span> and we'll keep you in mind.
          </p>
        </GlassCard>
      </div>
    </section>
  );
};

export default Careers;