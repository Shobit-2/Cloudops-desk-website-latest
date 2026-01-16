// import React, { useState } from 'react';
// //import { Send, MessageSquare } from 'lucide-react';
// import { Send, User, Mail, MessageSquare, Briefcase } from 'lucide-react'; // Replace Telegram with Mail
// import GlassCard from './ui/GlassCard';
// import Button from './ui/Button';
// import { ServiceType } from '../types';


// const QuoteForm: React.FC = () => {
//   const [serviceType, setServiceType] = useState<ServiceType | ''>('');
//   const [details, setDetails] = useState('');

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     if (!serviceType) return;

//     const message = `🚀 New Quote Request\n\nSERVICE: ${serviceType}\n\nDETAILS:\n${details || 'No details provided.'}`;
//     const telegramUrl = `https://t.me/CloudOpsDesk?text=${encodeURIComponent(message)}`;
    
//     // Open in new tab
//     window.open(telegramUrl, '_blank');
//   };

//   return (
//     <section id="quote" className="py-24 relative">
//        <div className="max-w-3xl mx-auto px-6">
//         <GlassCard className="p-10 border-sky-500/20 bg-slate-900/60 dark:bg-slate-900/60 bg-white/50">
//           <div className="text-center mb-10">
//             <div className="inline-flex items-center justify-center p-3 bg-sky-500/10 rounded-full mb-4">
//               <MessageSquare className="w-6 h-6 text-sky-500 dark:text-sky-400" />
//             </div>
//             <h2 className="text-3xl font-bold text-slate-900 dark:text-white">Start Your Transformation</h2>
//             <p className="text-slate-600 dark:text-slate-400 mt-2">Direct line to our engineering lead via Telegram.</p>
//           </div>

//           <form onSubmit={handleSubmit} className="space-y-6">
//             <div className="space-y-2">
//               <label className="text-sm font-medium text-slate-700 dark:text-slate-300 ml-1">Service Interest</label>
//               <div className="relative">
//                 <select 
//                   className="w-full bg-slate-100 dark:bg-slate-800/50 border border-slate-300 dark:border-white/10 rounded-xl px-4 py-4 text-slate-900 dark:text-white appearance-none focus:outline-none focus:border-sky-500/50 focus:ring-1 focus:ring-sky-500/50 transition-all"
//                   value={serviceType}
//                   onChange={(e) => setServiceType(e.target.value as ServiceType)}
//                   required
//                 >
//                   <option value="" disabled className="text-slate-500">Select a service type...</option>
//                   {Object.values(ServiceType).map((type) => (
//                     <option key={type} value={type} className="bg-white dark:bg-slate-900 text-slate-900 dark:text-white">{type}</option>
//                   ))}
//                 </select>
//                 <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-500">
//                   ▼
//                 </div>
//               </div>
//             </div>

//             <div className="space-y-2">
//               <label className="text-sm font-medium text-slate-700 dark:text-slate-300 ml-1">Project Details</label>
//               <textarea 
//                 className="w-full bg-slate-100 dark:bg-slate-800/50 border border-slate-300 dark:border-white/10 rounded-xl px-4 py-4 text-slate-900 dark:text-white placeholder-slate-500 dark:placeholder-slate-600 focus:outline-none focus:border-sky-500/50 focus:ring-1 focus:ring-sky-500/50 transition-all min-h-[150px] resize-y"
//                 placeholder="Describe your current infrastructure stack, pain points, or goals..."
//                 value={details}
//                 onChange={(e) => setDetails(e.target.value)}
//               />
//             </div>

//             <Button 
//               type="submit" 
//               variant="primary" 
//               className="w-full justify-center py-4 text-lg mt-4 group"
//             >
//               <Send className="w-5 h-5 mr-2 group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
//               Send Quote Request via Telegram
//             </Button>
            
//             <p className="text-center text-xs text-slate-500 dark:text-slate-600 mt-4">
//               Clicking send will open Telegram with your pre-filled message.
//             </p>
//           </form>
//         </GlassCard>
//        </div>
  
//     </section>
//   );
// };

// export default QuoteForm;


import React, { useState } from 'react';
import { Send, Mail } from 'lucide-react'; // Changed MessageSquare to Mail
import GlassCard from './ui/GlassCard';
import Button from './ui/Button';
import { ServiceType } from '../types';

const QuoteForm: React.FC = () => {
  const [serviceType, setServiceType] = useState<ServiceType | ''>('');
  const [details, setDetails] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!serviceType) return;

    // 1. Prepare Email Content
    const emailTo = "cloudopsdesk@gmail.com"; // Replace with your actual email
    const subject = encodeURIComponent(`🚀 New Quote Request: ${serviceType}`);
    const body = encodeURIComponent(
      `Service: ${serviceType}\n\nProject Details:\n${details || 'No details provided.'}`
    );

    // 2. Use mailto protocol instead of telegramUrl
    const mailtoUrl = `mailto:${emailTo}?subject=${subject}&body=${body}`;
    
    // Open the user's default email client
    window.location.href = mailtoUrl;
  };

  return (
    <section id="quote" className="py-24 relative">
       <div className="max-w-3xl mx-auto px-6">
        <GlassCard className="p-10 border-sky-500/20 bg-slate-900/60 dark:bg-slate-900/60 bg-white/50">
          <div className="text-center mb-10">
            <div className="inline-flex items-center justify-center p-3 bg-sky-500/10 rounded-full mb-4">
              {/* Changed icon to Mail */}
              <Mail className="w-6 h-6 text-sky-500 dark:text-sky-400" />
            </div>
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white">Start Your Transformation</h2>
            {/* Updated text for Email */}
            <p className="text-slate-600 dark:text-slate-400 mt-2">Get a custom proposal delivered to your inbox.</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-700 dark:text-slate-300 ml-1">Service Interest</label>
              <div className="relative">
                <select 
                  className="w-full bg-slate-100 dark:bg-slate-800/50 border border-slate-300 dark:border-white/10 rounded-xl px-4 py-4 text-slate-900 dark:text-white appearance-none focus:outline-none focus:border-sky-500/50 focus:ring-1 focus:ring-sky-500/50 transition-all"
                  value={serviceType}
                  onChange={(e) => setServiceType(e.target.value as ServiceType)}
                  required
                >
                  <option value="" disabled className="text-slate-500">Select a service type...</option>
                  {Object.values(ServiceType).map((type) => (
                    <option key={type} value={type} className="bg-white dark:bg-slate-900 text-slate-900 dark:text-white">{type}</option>
                  ))}
                </select>
                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-500">
                  ▼
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-700 dark:text-slate-300 ml-1">Project Details</label>
              <textarea 
                className="w-full bg-slate-100 dark:bg-slate-800/50 border border-slate-300 dark:border-white/10 rounded-xl px-4 py-4 text-slate-900 dark:text-white placeholder-slate-500 dark:placeholder-slate-600 focus:outline-none focus:border-sky-500/50 focus:ring-1 focus:ring-sky-500/50 transition-all min-h-[150px] resize-y"
                placeholder="Describe your current infrastructure stack, pain points, or goals..."
                value={details}
                onChange={(e) => setDetails(e.target.value)}
              />
            </div>

            <Button 
              type="submit" 
              variant="primary" 
              className="w-full justify-center py-4 text-lg mt-4 group"
            >
              <Send className="w-5 h-5 mr-2 group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
              {/* Updated Button Text */}
              Send Quote Request via Email
            </Button>
            
            {/* Updated Footer Text */}
            <p className="text-center text-xs text-slate-500 dark:text-slate-600 mt-4">
              Clicking send will open your email client with a pre-filled message.
            </p>
          </form>
        </GlassCard>
       </div>
  
    </section>
  );
};

export default QuoteForm;