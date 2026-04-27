import React from 'react';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: boolean;
}

const GlassCard: React.FC<GlassCardProps> = ({ 
  children, 
  className = '', 
  hoverEffect = false 
}) => {
  return (
    <div className={`
      relative overflow-hidden
      bg-white/50 dark:bg-slate-900/40 backdrop-blur-xl 
      border border-slate-200 dark:border-white/5 
      rounded-3xl p-4 sm:p-6 md:p-8 
      ${hoverEffect ? 'hover:bg-white/80 dark:hover:bg-slate-800/50 hover:border-slate-300 dark:hover:border-white/10 hover:shadow-2xl transition-all duration-500 group' : ''}
      ${className}
    `}>
      {/* Subtle shine effect on top border */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-slate-300 dark:via-white/20 to-transparent opacity-50" />
      
      {children}
    </div>
  );
};

export default GlassCard;