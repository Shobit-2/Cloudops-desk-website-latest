import React from 'react';
import { ArrowRight } from 'lucide-react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost';
  withIcon?: boolean;
  className?: string;
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary', 
  withIcon = false, 
  className = '', 
  children, 
  ...props 
}) => {
  const baseStyles = "relative px-6 py-3 rounded-full font-medium transition-all duration-300 ease-out transform active:scale-95 flex items-center justify-center gap-2 group";
  
  const variants = {
    primary: "bg-sky-500 hover:bg-sky-400 text-white shadow-[0_0_20px_rgba(14,165,233,0.3)] hover:shadow-[0_0_30px_rgba(14,165,233,0.5)] border border-sky-400/20",
    secondary: "bg-slate-100 dark:bg-white/5 hover:bg-slate-200 dark:hover:bg-white/10 text-slate-900 dark:text-white backdrop-blur-sm border border-slate-200 dark:border-white/10 hover:border-slate-300 dark:hover:border-white/20 shadow-lg",
    ghost: "bg-transparent hover:bg-slate-100 dark:hover:bg-white/5 text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white",
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      <span className="relative z-10 flex items-center gap-2">
        {children}
        {withIcon && (
          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
        )}
      </span>
    </button>
  );
};

export default Button;