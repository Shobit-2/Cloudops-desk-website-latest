import React from 'react';
import { Mail, Linkedin, Send, Cloud } from 'lucide-react';
import Button from './ui/Button';

const Footer: React.FC = () => {
  return (
    <footer id="support" className="bg-slate-50 dark:bg-slate-950 pt-32 pb-16 border-t border-slate-200 dark:border-white/5 transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-20 mb-24">
          <div className="space-y-8">
            <h2 className="text-6xl md:text-8xl font-black text-slate-900 dark:text-white tracking-tighter leading-[0.9]">
              Ready for <br />
              <span className="text-primary-500">Unstoppable</span> <br />
              <span className="text-slate-400 dark:text-slate-600">Scale?</span>
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-400 font-medium max-w-md">
              Don't leave your infrastructure to chance. Let's build something world-class together.
            </p>
          </div>

          <div className="flex flex-col justify-end space-y-6">
            <div className="grid sm:grid-cols-2 gap-4">
              <a href="mailto:cloudopsdesk@gmail.com" className="group">
                <Button variant="secondary" className="w-full h-20 text-lg justify-start px-8 rounded-[2rem] border-slate-200 dark:border-white/10 hover:bg-slate-100 dark:hover:bg-white/5 transition-all">
                  <div className="p-3 bg-primary-500/10 rounded-xl mr-4 text-primary-500 group-hover:scale-110 transition-transform">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div className="text-left">
                    <div className="text-[10px] font-black uppercase tracking-widest opacity-50">Email Us</div>
                    <div className="font-bold text-slate-900 dark:text-white">Direct Inquiry</div>
                  </div>
                </Button>
              </a>
              <a href="https://t.me/CloudOpsDesk" target="_blank" rel="noreferrer" className="group">
                <Button variant="secondary" className="w-full h-20 text-lg justify-start px-8 rounded-[2rem] border-slate-200 dark:border-white/10 hover:bg-slate-100 dark:hover:bg-white/5 transition-all">
                  <div className="p-3 bg-sky-500/10 rounded-xl mr-4 text-sky-500 group-hover:scale-110 transition-transform">
                    <Send className="w-6 h-6" />
                  </div>
                  <div className="text-left">
                    <div className="text-[10px] font-black uppercase tracking-widest opacity-50">Telegram</div>
                    <div className="font-bold text-slate-900 dark:text-white">Instant Chat</div>
                  </div>
                </Button>
              </a>
            </div>
            <a href="https://www.linkedin.com/company/cloudops-desk/posts/?feedView=all" target="_blank" rel="noreferrer" className="group">
              <Button variant="secondary" className="w-full h-20 text-lg justify-start px-8 rounded-[2rem] border-slate-200 dark:border-white/10 hover:bg-slate-100 dark:hover:bg-white/5 transition-all hover:border-primary-500/30">
                <div className="p-3 bg-primary-500/10 rounded-xl mr-4 text-primary-500 group-hover:scale-110 transition-transform">
                  <Linkedin className="w-6 h-6" />
                </div>
                <div className="text-left">
                  <div className="text-[10px] font-black uppercase tracking-widest opacity-50">LinkedIn</div>
                  <div className="font-bold text-slate-900 dark:text-white">Company Updates</div>
                </div>
              </Button>
            </a>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between pt-12 border-t border-slate-200 dark:border-white/5 text-slate-500 text-xs font-bold uppercase tracking-widest overflow-hidden">
          <div className="flex items-center gap-4 mb-8 md:mb-0">
            <div className="p-2 bg-slate-900 dark:bg-white rounded-lg">
              <Cloud className="w-4 h-4 text-white dark:text-slate-950" />
            </div>
            <span className="text-slate-900 dark:text-white">CloudOps Desk</span>
          </div>

          <div className="flex gap-10">
            <span className="cursor-pointer hover:text-primary-500 transition-colors">Privacy</span>
            <span className="cursor-pointer hover:text-primary-500 transition-colors">Terms</span>
            <span className="hidden sm:inline">&copy; {new Date().getFullYear()}</span>
          </div>

          <div className="mt-8 md:mt-0 opacity-50">
            Engineered for High Performance
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;