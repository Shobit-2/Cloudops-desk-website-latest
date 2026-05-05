import React, { useState } from 'react';
import { Mail, Linkedin, Send, Cloud, MessageCircle, X } from 'lucide-react';
import Button from './ui/Button';

const Footer: React.FC = () => {
  const [showPolicy, setShowPolicy] = useState(false);
  return (
    <footer id="support" className="bg-slate-50 dark:bg-slate-950 pt-16 sm:pt-24 md:pt-32 pb-10 sm:pb-16 border-t border-slate-200 dark:border-white/5 transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-10 sm:gap-16 md:gap-20 mb-16 sm:mb-24">
          <div className="space-y-6 sm:space-y-8">
            <h2 className="text-3xl sm:text-4xl md:text-6xl lg:text-8xl font-black text-slate-900 dark:text-white tracking-tighter leading-[0.9]">
              Ready for <br />
              <span className="text-primary-500">Unstoppable</span> <br />
              <span className="text-slate-400 dark:text-slate-600">Scale?</span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-slate-600 dark:text-slate-400 font-medium max-w-md">
              Don't leave your infrastructure to chance. Let's build something world-class together.
            </p>
          </div>

          <div className="flex flex-col justify-end space-y-4 sm:space-y-6">
            <div className="grid sm:grid-cols-2 gap-3 sm:gap-4">
              <a href="mailto:cloudopsdesk@gmail.com" className="group">
                <Button variant="secondary" className="w-full h-16 sm:h-20 text-base sm:text-lg justify-start px-4 sm:px-8 rounded-[2rem] border-slate-200 dark:border-white/10 hover:bg-slate-100 dark:hover:bg-white/5 transition-all">
                  <div className="p-3 bg-primary-500/10 rounded-xl mr-4 text-primary-500 group-hover:scale-110 transition-transform">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div className="text-left">
                    <div className="text-[10px] font-black uppercase tracking-widest opacity-50">Email Us</div>
                    <div className="font-bold text-slate-900 dark:text-white">Direct Inquiry</div>
                  </div>
                </Button>
              </a>
              <a href="https://t.me/devops_freelancers_india" target="_blank" rel="noreferrer" className="group">
                <Button variant="secondary" className="w-full h-16 sm:h-20 text-base sm:text-lg justify-start px-4 sm:px-8 rounded-[2rem] border-slate-200 dark:border-white/10 hover:bg-slate-100 dark:hover:bg-white/5 transition-all">
                  <div className="p-2 sm:p-3 bg-sky-500/10 rounded-xl mr-3 sm:mr-4 text-sky-500 group-hover:scale-110 transition-transform">
                    <Send className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                  <div className="text-left">
                    <div className="text-[10px] font-black uppercase tracking-widest opacity-50">Telegram</div>
                    <div className="font-bold text-slate-900 dark:text-white">Instant Chat</div>
                  </div>
                </Button>
              </a>
            </div>
            <div className="grid sm:grid-cols-2 gap-3 sm:gap-4">
              <a href="https://www.linkedin.com/company/cloudopsdesk/posts/?feedView=all" target="_blank" rel="noreferrer" className="group">
                <Button variant="secondary" className="w-full h-16 sm:h-20 text-base sm:text-lg justify-start px-4 sm:px-8 rounded-[2rem] border-slate-200 dark:border-white/10 hover:bg-slate-100 dark:hover:bg-white/5 transition-all hover:border-primary-500/30">
                  <div className="p-3 bg-primary-500/10 rounded-xl mr-4 text-primary-500 group-hover:scale-110 transition-transform">
                    <Linkedin className="w-6 h-6" />
                  </div>
                  <div className="text-left">
                    <div className="text-[10px] font-black uppercase tracking-widest opacity-50">LinkedIn</div>
                    <div className="font-bold text-slate-900 dark:text-white">Company Updates</div>
                  </div>
                </Button>
              </a>
              <a href="https://wa.me/919509100704" target="_blank" rel="noreferrer" className="group">
                <Button variant="secondary" className="w-full h-16 sm:h-20 text-base sm:text-lg justify-start px-4 sm:px-8 rounded-[2rem] border-slate-200 dark:border-white/10 hover:bg-slate-100 dark:hover:bg-white/5 transition-all">
                  <div className="p-2 sm:p-3 bg-green-500/10 rounded-xl mr-3 sm:mr-4 text-green-500 group-hover:scale-110 transition-transform">
                    <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                  <div className="text-left">
                    <div className="text-[10px] font-black uppercase tracking-widest opacity-50">WhatsApp</div>
                    <div className="font-bold text-slate-900 dark:text-white">Quick Chat</div>
                  </div>
                </Button>
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between pt-12 border-t border-slate-200 dark:border-white/5 text-slate-500 text-xs font-bold uppercase tracking-widest overflow-hidden">
          <div className="flex items-center gap-4 mb-8 md:mb-0">
            <div className="p-2 bg-slate-900 dark:bg-white rounded-lg">
              <Cloud className="w-4 h-4 text-white dark:text-slate-950" />
            </div>
            <span className="text-slate-900 dark:text-white">CloudOps Desk</span>
          </div>

          <div className="flex gap-10 items-center">
            <button
              onClick={() => setShowPolicy(true)}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 hover:border-primary-300 dark:hover:border-primary-500/30 hover:text-primary-500 transition-all text-xs font-bold uppercase tracking-widest"
            >
              Privacy · Terms · &copy; {new Date().getFullYear()}
            </button>
          </div>

          <div className="mt-8 md:mt-0 opacity-50">
            Engineered for High Performance
          </div>
        </div>

      </div>

      {/* Full Page Privacy & Terms Modal */}
      {showPolicy && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4" onClick={() => setShowPolicy(false)}>
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
          <div
            className="relative bg-white dark:bg-slate-900 rounded-3xl shadow-2xl border border-slate-200 dark:border-white/10 w-full max-w-2xl max-h-[85vh] overflow-y-auto p-8 sm:p-10"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-black text-slate-900 dark:text-white">Privacy & Terms</h2>
              <button onClick={() => setShowPolicy(false)} className="p-2 rounded-xl hover:bg-slate-100 dark:hover:bg-white/5 text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors">
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-8 text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              <div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-3">Privacy Policy</h3>
                <ul className="space-y-3">
                  <li className="flex gap-2"><span className="text-primary-500 font-bold mt-0.5">•</span> We do not sell, rent, or share your personal data with any third party.</li>
                  <li className="flex gap-2"><span className="text-primary-500 font-bold mt-0.5">•</span> All communications between you and CloudOps Desk are strictly confidential and NDA-protected.</li>
                  <li className="flex gap-2"><span className="text-primary-500 font-bold mt-0.5">•</span> Personal information collected (name, email, phone) is used solely to deliver our services and respond to inquiries.</li>
                  <li className="flex gap-2"><span className="text-primary-500 font-bold mt-0.5">•</span> We use cookies only for essential site functionality and analytics. No third-party tracking cookies are used.</li>
                  <li className="flex gap-2"><span className="text-primary-500 font-bold mt-0.5">•</span> You may request complete deletion of your data at any time by emailing us.</li>
                  <li className="flex gap-2"><span className="text-primary-500 font-bold mt-0.5">•</span> We implement industry-standard security measures to protect your information from unauthorized access.</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-3">Terms of Service</h3>
                <ul className="space-y-3">
                  <li className="flex gap-2"><span className="text-primary-500 font-bold mt-0.5">•</span> Services are provided on a consultation and support basis. Results may vary based on individual effort and circumstances.</li>
                  <li className="flex gap-2"><span className="text-primary-500 font-bold mt-0.5">•</span> All service fees are non-refundable once the engagement has commenced unless stated otherwise in writing.</li>
                  <li className="flex gap-2"><span className="text-primary-500 font-bold mt-0.5">•</span> Intellectual property created during training or support sessions remains with the respective parties as agreed.</li>
                  <li className="flex gap-2"><span className="text-primary-500 font-bold mt-0.5">•</span> CloudOps Desk reserves the right to decline or terminate services if misuse is detected.</li>
                  <li className="flex gap-2"><span className="text-primary-500 font-bold mt-0.5">•</span> By using our services, you agree to provide accurate information and use our services for lawful purposes only.</li>
                </ul>
              </div>

              <div className="pt-6 border-t border-slate-200 dark:border-white/10">
                <p className="text-xs text-slate-400 dark:text-slate-500">
                  &copy; {new Date().getFullYear()} CloudOps Desk. All rights reserved. Last updated: January 2026.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
};

export default Footer;