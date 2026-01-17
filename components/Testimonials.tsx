// import React from 'react';
// import { Linkedin } from 'lucide-react';
// import GlassCard from './ui/GlassCard';
// import stanleyImg from './stanley.jpg';
// import maryImg from './mary.jpg';
// import ericImg from './eric.jpg';

// // You can replace these placeholders with actual images later
// const michaelImg = stanleyImg; 
// //const ericImg = stanleyImg;

// const Testimonials: React.FC = () => {
//   return (
//     <section id="Testimonials" className="py-24 relative overflow-hidden">
//       <div className="max-w-7xl mx-auto px-6">

//         {/* Section Header */}
//         <div className="mb-20 text-center">
//           <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
//             Client Success Stories
//           </h2>
//           <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-lg">
//             Helping startups and enterprises optimize cloud costs and achieve 99.9% uptime through tailored DevOps automation.
//           </p>
//         </div>

//         {/* Testimonials Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">

//           {/* 1. Stanley - Large Card */}
//           <GlassCard className="p-8 md:p-12 md:col-span-2 flex flex-col items-center text-center group" hoverEffect>
//             <div className="relative w-24 h-24 mb-6">
//               <div className="p-1 bg-sky-500/10 rounded-full group-hover:bg-sky-500 transition-all duration-300 overflow-hidden flex items-center justify-center w-full h-full">
//                 <img 
//                   src={stanleyImg} 
//                   alt="Stanley" 
//                   className="w-full h-full object-cover rounded-full transition-all group-hover:opacity-30" 
//                 />
//               </div>
//               <a 
//                 href="https://www.linkedin.com/in/stanley-onyewuchi-anukam-878478337/" 
//                 target="_blank" 
//                 rel="noopener noreferrer"
//                 className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"
//               >
//                 <Linkedin className="w-8 h-8 text-white drop-shadow-xl" />
//               </a>
//             </div>
//             <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">Stanley</h3>
//             <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-lg italic">
//               "I was struggling to get callbacks despite my experience. CloudOpsDesk completely transformed my professional presence. He didn't just rewrite my resume; he optimized my LinkedIn profile to attract the right recruiters. Within two weeks, I had three high-level interviews lined up."
//             </p>
//           </GlassCard>

//           {/* 2. Michael - Standard Card */}
//           <GlassCard className="p-8 flex flex-col items-center text-center group" hoverEffect>
//             <div className="relative w-20 h-20 mb-6">
//               <div className="p-1 bg-sky-500/10 rounded-full group-hover:bg-sky-500 transition-all overflow-hidden w-full h-full">
//                 <img src={michaelImg} alt="Michael" className="w-full h-full object-cover rounded-full group-hover:opacity-30" />
//               </div>
//               <a href="#" className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity z-10">
//                 <Linkedin className="w-6 h-6 text-white" />
//               </a>
//             </div>
//             <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Michael</h3>
//             <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed italic">
//               "We needed a production-ready AWS environment but didn't have a full-time DevOps hire yet. CloudOpsDesk built our entire infrastructure from the ground up using Terraform with security as priorities."
//             </p>
//           </GlassCard>

//           {/* 3. Mary - Standard Card */}
//           <GlassCard className="p-8 flex flex-col items-center text-center group" hoverEffect>
//             <div className="relative w-20 h-20 mb-6">
//               <div className="p-1 bg-sky-500/10 rounded-full group-hover:bg-sky-500 transition-all overflow-hidden w-full h-full">
//                 <img src={maryImg} alt="Mary" className="w-full h-full object-cover rounded-full group-hover:opacity-30" />
//               </div>
//               <a href="https://www.linkedin.com/in/mary-akintunde-511575185/" target="_blank" className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity z-10">
//                 <Linkedin className="w-6 h-6 text-white" />
//               </a>
//             </div>
//             <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Mary</h3>
//             <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed italic">
//               "The technical round for my dream job involved a complex Kubernetes assignment. CloudOpsDesk's coaching was a lifesaver. They walked me through the architecture and prepped me for the defense."
//             </p>
//           </GlassCard>

//           {/* 4. Eric - Large Card */}
//           <GlassCard className="p-8 md:p-12 md:col-span-2 flex flex-col items-center text-center group" hoverEffect>
//             <div className="relative w-24 h-24 mb-6">
//               <div className="p-1 bg-sky-500/10 rounded-full group-hover:bg-sky-500 transition-all overflow-hidden w-full h-full">
//                 <img src={ericImg} alt="Eric" className="w-full h-full object-cover rounded-full group-hover:opacity-30" />
//               </div>
//               <a href="https://www.linkedin.com/in/tiwa-erick-k/" className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity z-10">
//                 <Linkedin className="w-8 h-8 text-white" />
//               </a>
//             </div>
//             <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">Eric</h3>
//             <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-lg italic">
//               "Starting a new role in a complex environment was overwhelming. CloudOpsDesk provides incredible 'behind-the-scenes' support for my daily tasks. Having them as a consultant ensures I deliver high-quality work every single day."
//             </p>
//           </GlassCard>

//         </div>
//       </div>
//     </section>
//   );
// };

// export default Testimonials;







import React from 'react';
import { Linkedin } from 'lucide-react';
import GlassCard from './ui/GlassCard';
import stanleyImg from './stanley.jpg';
import maryImg from './mary.jpg';
import ericImg from './eric.jpg';
import honorineImg from './honorine.jpeg';
import michaelImg from './Michael.jpg';

const Testimonials: React.FC = () => {
  return (
    <section id="Testimonials" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">

        {/* Section Header */}
        <div className="mb-20 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
            Client Success Stories
          </h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-lg">
            Helping startups and enterprises optimize cloud costs and achieve 99.9% uptime through tailored DevOps automation.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">

          {/* 1. Stanley - Large Card */}
          <GlassCard className="p-8 md:p-12 md:col-span-2 flex flex-col items-center text-center group" hoverEffect>
            <div className="relative w-24 h-24 mb-6">
              <div className="p-1 bg-sky-500/10 rounded-full group-hover:bg-sky-500 transition-all duration-300 overflow-hidden flex items-center justify-center w-full h-full">
                <img
                  src={stanleyImg}
                  alt="Stanley"
                  className="w-full h-full object-cover rounded-full transition-all group-hover:opacity-30"
                />
              </div>
              <a
                href="https://www.linkedin.com/in/stanley-onyewuchi-anukam-878478337/"
                target="_blank"
                rel="noopener noreferrer"
                className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"
              >
                <Linkedin className="w-8 h-8 text-white drop-shadow-xl" />
              </a>
            </div>
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-1">Stanley</h3>
            {/* Designation Added */}
            <p className="text-sky-500 dark:text-sky-400 font-medium text-sm mb-4">DevOps Candidate</p>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-lg italic">
              "I was struggling to get callbacks despite my experience. CloudOpsDesk completely transformed my professional presence. He didn't just rewrite my resume; he optimized my LinkedIn profile to attract the right recruiters. Within two weeks, I had three high-level interviews lined up."
            </p>
          </GlassCard>

          {/* 
          <GlassCard className="p-8 flex flex-col items-center text-center group" hoverEffect>
            <div className="relative w-20 h-20 mb-6">
              <div className="p-1 bg-sky-500/10 rounded-full group-hover:bg-sky-500 transition-all overflow-hidden w-full h-full">
                <img src={michaelImg} alt="Michael" className="w-full h-full object-cover rounded-full group-hover:opacity-30" />
              </div>
              <a
                href="https://www.linkedin.com/in/michael-k-samba-40a7951a8/"
                target="_blank"
                rel="noopener noreferrer"
                className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity z-10"
              >
                <Linkedin className="w-6 h-6 text-white" />
              </a>
            </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-1">Michael</h3>
            <p className="text-sky-500 dark:text-sky-400 font-medium text-xs mb-3">Startup Founder</p>
            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed italic">
              "We needed a production-ready AWS environment but didn't have a full-time DevOps hire yet. CloudOpsDesk built our entire infrastructure from the ground up using Terraform with security as priorities."
            </p>
          </GlassCard>
          */}

          {/* 3. Mary - Standard Card */}
          <GlassCard className="p-8 flex flex-col items-center text-center group" hoverEffect>
            <div className="relative w-20 h-20 mb-6">
              <div className="p-1 bg-sky-500/10 rounded-full group-hover:bg-sky-500 transition-all overflow-hidden w-full h-full">
                <img src={maryImg} alt="Mary" className="w-full h-full object-cover rounded-full group-hover:opacity-30" />
              </div>
              <a href="https://www.linkedin.com/in/mary-akintunde-511575185/" target="_blank" className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity z-10">
                <Linkedin className="w-6 h-6 text-white" />
              </a>
            </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-1">Mary</h3>
            {/* Designation Added */}
            <p className="text-sky-500 dark:text-sky-400 font-medium text-xs mb-3">DevOps & OT Security Professional</p>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed italic">
              "The technical round for my dream job involved a complex Kubernetes assignment. CloudOpsDesk's coaching was a lifesaver. They walked me through the architecture and prepped me for the defense."
            </p>
          </GlassCard>

          {/* 4. Eric - Large Card */}
          <GlassCard className="p-8 md:p-12 md:col-span-2 flex flex-col items-center text-center group" hoverEffect>
            <div className="relative w-24 h-24 mb-6">
              <div className="p-1 bg-sky-500/10 rounded-full group-hover:bg-sky-500 transition-all overflow-hidden w-full h-full">
                <img src={ericImg} alt="Eric" className="w-full h-full object-cover rounded-full group-hover:opacity-30" />
              </div>
              <a href="https://www.linkedin.com/in/tiwa-erick-k/" className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity z-10">
                <Linkedin className="w-8 h-8 text-white" />
              </a>
            </div>
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-1">Eric</h3>
            {/* Designation Added */}
            <p className="text-sky-500 dark:text-sky-400 font-medium text-sm mb-4">DevSecOps Engineer</p>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-lg italic">
              "Starting a new role in a complex environment was overwhelming. CloudOpsDesk provides incredible 'behind-the-scenes' support for my daily tasks. Having them as a consultant ensures I deliver high-quality work every single day."
            </p>
          </GlassCard>

          {/* 5. Honorine - Standard Card */}
          <GlassCard className="p-8 flex flex-col items-center text-center group" hoverEffect>
            <div className="relative w-20 h-20 mb-6">
              <div className="p-1 bg-sky-500/10 rounded-full group-hover:bg-sky-500 transition-all overflow-hidden w-full h-full">
                <img src={honorineImg} alt="Honorine" className="w-full h-full object-cover rounded-full group-hover:opacity-30" />
              </div>
              <a
                href="https://www.linkedin.com/in/norine-nsaalav-25810828a/"
                target="_blank"
                rel="noopener noreferrer"
                className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity z-10"
              >
                <Linkedin className="w-6 h-6 text-white" />
              </a>
            </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-1">Honorine Nsaalav</h3>
            <p className="text-sky-500 dark:text-sky-400 font-medium text-xs mb-3">DevOps Engineer</p>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed italic">
              "The corporate DevOps training provided by CloudOpsDesk was a game-changer. They simplified complex concepts like Kuberenetes and CI/CD into practical, hands-on sessions. I now feel confident managing production-scale clusters and automation pipelines."
            </p>
          </GlassCard>

        </div>
      </div>
    </section>
  );
};

export default Testimonials;