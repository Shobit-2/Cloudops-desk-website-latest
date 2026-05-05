import React from 'react';
import { Calendar, Clock, ArrowRight, Tag, ExternalLink } from 'lucide-react';
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
  image: string;
  url: string;
  source: string;
}

const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'How AI Is Reshaping DevOps: From CI/CD to AIOps in 2026',
    excerpt:
      'AI is transforming how teams build, deploy, and monitor software. From intelligent code reviews to predictive incident management, discover how AIOps is becoming the new standard for high-performing engineering teams.',
    category: 'AI & DevOps',
    date: 'Apr 28, 2026',
    readTime: '7 min read',
    tags: ['AI', 'DevOps', 'AIOps'],
    featured: true,
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80',
    url: 'https://www.atlassian.com/devops/frameworks/aiops',
    source: 'Atlassian',
  },
  {
    id: '2',
    title: 'Top 10 DevOps Interview Questions for 2026 (With Answers)',
    excerpt:
      'Preparing for a DevOps interview? These are the most commonly asked questions by top tech companies in 2026, covering CI/CD, Kubernetes, Terraform, monitoring, and system design.',
    category: 'Interview Prep',
    date: 'Apr 22, 2026',
    readTime: '10 min read',
    tags: ['Interview', 'DevOps', 'Career'],
    image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=800&q=80',
    url: 'https://www.simplilearn.com/tutorials/devops-tutorial/devops-interview-questions',
    source: 'Simplilearn',
  },
  {
    id: '3',
    title: 'Kubernetes in Production: Lessons Learned from 100+ Deployments',
    excerpt:
      'Running Kubernetes in production is vastly different from local clusters. Learn battle-tested lessons on resource management, networking, security, and observability at scale.',
    category: 'Technical',
    date: 'Apr 18, 2026',
    readTime: '12 min read',
    tags: ['Kubernetes', 'Production', 'SRE'],
    image: 'https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=800&q=80',
    url: 'https://learnk8s.io/production-best-practices',
    source: 'Learnk8s',
  },
  {
    id: '4',
    title: 'The 2026 Cloud Engineer Salary Guide: AWS vs Azure vs GCP',
    excerpt:
      'Cloud engineering salaries vary widely by platform, role, and region. This comprehensive guide breaks down compensation data for AWS, Azure, and GCP professionals across experience levels.',
    category: 'Career Guide',
    date: 'Apr 12, 2026',
    readTime: '6 min read',
    tags: ['Salary', 'Cloud', 'Career'],
    image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&q=80',
    url: 'https://www.levels.fyi/t/cloud-engineer',
    source: 'Levels.fyi',
  },
  {
    id: '5',
    title: 'GitOps with ArgoCD: A Complete Hands-On Tutorial',
    excerpt:
      'GitOps is becoming the standard for Kubernetes deployments. This step-by-step guide walks you through setting up ArgoCD, configuring app-of-apps patterns, and implementing progressive delivery.',
    category: 'Tutorial',
    date: 'Apr 5, 2026',
    readTime: '15 min read',
    tags: ['GitOps', 'ArgoCD', 'Kubernetes'],
    image: 'https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?w=800&q=80',
    url: 'https://argo-cd.readthedocs.io/en/stable/getting_started/',
    source: 'ArgoCD Docs',
  },
  {
    id: '6',
    title: 'How to Write a DevOps Resume That Gets Callbacks in 2026',
    excerpt:
      'Your DevOps resume needs to speak the language of ATS systems and hiring managers. Learn the exact format, keywords, and project descriptions that land interviews at top companies.',
    category: 'Career Guide',
    date: 'Mar 28, 2026',
    readTime: '5 min read',
    tags: ['Resume', 'DevOps', 'Job Search'],
    image: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=800&q=80',
    url: 'https://www.techinterviewhandbook.org/resume/',
    source: 'Tech Interview Handbook',
  },
];

const categoryColors: Record<string, string> = {
  'Career Guide': 'bg-sky-500/10 text-sky-600 dark:text-sky-400 border-sky-500/20',
  'Interview Prep': 'bg-purple-500/10 text-purple-600 dark:text-purple-400 border-purple-500/20',
  Technical: 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20',
  Tutorial: 'bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20',
  'AI & DevOps': 'bg-rose-500/10 text-rose-600 dark:text-rose-400 border-rose-500/20',
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
          <a href={featuredPost.url} target="_blank" rel="noopener noreferrer">
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
                    <div className="flex items-center gap-2 text-slate-400">
                      <ExternalLink className="w-3 h-3" />
                      {featuredPost.source}
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-primary-500 font-bold group-hover:gap-3 transition-all">
                    Read Article <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
                <div className="relative h-64 lg:h-full min-h-[250px] rounded-2xl overflow-hidden border border-slate-200 dark:border-white/5">
                  <img
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                </div>
              </div>
            </GlassCard>
          </a>
        </div>
      )}

      {/* Blog Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {regularPosts.map((post) => (
            <a key={post.id} href={post.url} target="_blank" rel="noopener noreferrer">
              <GlassCard className="p-6 sm:p-8 flex flex-col group cursor-pointer h-full" hoverEffect>
                {/* Real Image */}
                <div className="relative h-44 rounded-xl overflow-hidden border border-slate-200 dark:border-white/5 mb-6">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
                </div>

                <div className="flex items-center gap-3 mb-4">
                  <span className={`px-3 py-1 rounded-full border text-[10px] font-black tracking-widest uppercase ${categoryColors[post.category] || 'bg-slate-100 text-slate-500 border-slate-200'}`}>
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
                  <div className="flex items-center gap-1 text-xs text-slate-400">
                    <ExternalLink className="w-3 h-3" />
                    <span>{post.source}</span>
                  </div>
                </div>
              </GlassCard>
            </a>
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
