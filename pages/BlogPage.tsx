import React from 'react';
import { Calendar, Clock, ArrowRight, Tag } from 'lucide-react';
import GlassCard from '../components/ui/GlassCard';

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  tags: string[];
  featured?: boolean;
}

const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'How to Land a DevOps Role in 2026: The Complete Roadmap',
    excerpt:
      'Breaking into DevOps can feel overwhelming with so many tools and concepts. This guide breaks down the exact skills, certifications, and projects you need to land your first (or next) DevOps role — based on real hiring patterns we see across 500+ placements.',
    category: 'Career Guide',
    date: 'Apr 25, 2026',
    readTime: '8 min read',
    tags: ['DevOps', 'Career', 'Roadmap'],
    featured: true,
  },
  {
    id: '2',
    title: 'Freelancing as a DevOps Engineer: Rates, Clients & Strategies',
    excerpt:
      'DevOps freelancing is booming. Learn how to position yourself, set competitive rates, find high-paying clients, and build a sustainable freelance career in cloud and infrastructure.',
    category: 'Freelancing',
    date: 'Apr 20, 2026',
    readTime: '6 min read',
    tags: ['Freelancing', 'DevOps', 'Income'],
  },
  {
    id: '3',
    title: 'Kubernetes vs Docker Swarm in 2026: Which Should You Learn?',
    excerpt:
      'The container orchestration debate continues. We break down the real-world usage, job market demand, and learning curve for both — so you can make the right investment in your skills.',
    category: 'Technical',
    date: 'Apr 15, 2026',
    readTime: '5 min read',
    tags: ['Kubernetes', 'Docker', 'Containers'],
  },
  {
    id: '4',
    title: 'Building a CI/CD Pipeline from Scratch: A Hands-On Guide',
    excerpt:
      'Step-by-step tutorial on building a production-grade CI/CD pipeline using GitHub Actions, Docker, and AWS ECS. Perfect for your portfolio or to level up at work.',
    category: 'Tutorial',
    date: 'Apr 10, 2026',
    readTime: '12 min read',
    tags: ['CI/CD', 'GitHub Actions', 'AWS'],
  },
  {
    id: '5',
    title: 'The Resume Mistakes That Kill DevOps Applications',
    excerpt:
      'After reviewing 1000+ resumes, here are the top mistakes that get DevOps candidates rejected before the interview even starts — and exactly how to fix them.',
    category: 'Career Guide',
    date: 'Apr 5, 2026',
    readTime: '4 min read',
    tags: ['Resume', 'Career', 'Tips'],
  },
  {
    id: '6',
    title: 'Terraform Best Practices for Production Infrastructure',
    excerpt:
      'Managing Terraform at scale requires discipline. Learn about state management, module design, workspace strategies, and testing approaches used by top teams.',
    category: 'Technical',
    date: 'Mar 30, 2026',
    readTime: '10 min read',
    tags: ['Terraform', 'IaC', 'Best Practices'],
  },
];

const categoryColors: Record<string, string> = {
  'Career Guide': 'bg-sky-500/10 text-sky-600 dark:text-sky-400 border-sky-500/20',
  Freelancing: 'bg-purple-500/10 text-purple-600 dark:text-purple-400 border-purple-500/20',
  Technical: 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20',
  Tutorial: 'bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20',
};

const BlogPage: React.FC = () => {
  React.useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  const featuredPost = blogPosts.find((p) => p.featured);
  const regularPosts = blogPosts.filter((p) => !p.featured);

  return (
    <div className="pt-20 sm:pt-24 md:pt-32 pb-10 sm:pb-20">
      {/* Page Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 mb-10 sm:mb-16 md:mb-20 text-center space-y-4 sm:space-y-6">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary-500/10 border border-primary-500/20 text-primary-600 dark:text-primary-400 text-xs font-bold tracking-[0.2em] uppercase">
          <span className="w-2 h-2 rounded-full bg-primary-500 animate-pulse"></span>
          Blog
        </div>
        <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-7xl font-black text-slate-900 dark:text-white tracking-tight">
          Insights & <br />
          <span className="text-gradient">Knowledge Hub</span>
        </h1>
        <p className="text-base sm:text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto font-medium leading-relaxed">
          DevOps tips, freelancing strategies, career advice, and technical deep-dives from our team of industry practitioners.
        </p>
      </div>

      {/* Featured Post */}
      {featuredPost && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 mb-10 sm:mb-16">
          <GlassCard className="p-5 sm:p-6 md:p-10 group cursor-pointer" hoverEffect>
            <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10 items-center">
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <span className={`px-3 py-1 rounded-full border text-[10px] font-black tracking-widest uppercase ${categoryColors[featuredPost.category]}`}>
                    {featuredPost.category}
                  </span>
                  <span className="px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-600 dark:text-amber-400 text-[10px] font-black tracking-widest uppercase">
                    Featured
                  </span>
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-black text-slate-900 dark:text-white tracking-tight group-hover:text-primary-500 transition-colors">
                  {featuredPost.title}
                </h2>
                <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
                  {featuredPost.excerpt}
                </p>
                <div className="flex items-center gap-6 text-sm text-slate-500">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    {featuredPost.date}
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    {featuredPost.readTime}
                  </div>
                </div>
                <div className="flex items-center gap-2 text-primary-500 font-bold group-hover:gap-3 transition-all">
                  Read Article <ArrowRight className="w-4 h-4" />
                </div>
              </div>
              <div className="relative h-64 lg:h-full min-h-[250px] rounded-2xl bg-gradient-to-br from-primary-500/20 via-sky-500/10 to-accent-500/20 border border-slate-200 dark:border-white/5 flex items-center justify-center">
                <div className="text-center space-y-3">
                  <div className="text-6xl font-black text-slate-200 dark:text-slate-800">01</div>
                  <div className="text-xs font-bold text-slate-400 uppercase tracking-widest">Featured Article</div>
                </div>
              </div>
            </div>
          </GlassCard>
        </div>
      )}

      {/* Blog Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {regularPosts.map((post, i) => (
            <GlassCard key={post.id} className="p-8 flex flex-col group cursor-pointer" hoverEffect>
              {/* Placeholder visual */}
              <div className="relative h-40 rounded-xl bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-900 border border-slate-200 dark:border-white/5 mb-6 flex items-center justify-center">
                <div className="text-4xl font-black text-slate-300 dark:text-slate-700">
                  {String(i + 2).padStart(2, '0')}
                </div>
              </div>

              <div className="flex items-center gap-3 mb-4">
                <span className={`px-3 py-1 rounded-full border text-[10px] font-black tracking-widest uppercase ${categoryColors[post.category]}`}>
                  {post.category}
                </span>
              </div>

              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-primary-500 transition-colors flex-grow">
                {post.title}
              </h3>

              <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed mb-6">
                {post.excerpt}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {post.tags.map((tag) => (
                  <span key={tag} className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-slate-100 dark:bg-white/5 text-[10px] font-bold text-slate-500 uppercase tracking-wider">
                    <Tag className="w-3 h-3" />
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-slate-200 dark:border-white/5 mt-auto">
                <div className="flex items-center gap-4 text-xs text-slate-400 font-medium">
                  <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> {post.date}</span>
                  <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {post.readTime}</span>
                </div>
                <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-primary-500 group-hover:translate-x-1 transition-all" />
              </div>
            </GlassCard>
          ))}
        </div>

        {/* Coming Soon Note */}
        <div className="mt-16 text-center">
          <p className="text-slate-400 dark:text-slate-500 font-medium text-lg">
            More articles coming soon. Stay tuned for weekly insights from our team.
          </p>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
