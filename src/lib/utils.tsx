import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { motion } from 'motion/react';

export const FoxLogo = ({ className }: { className?: string }) => (
  <svg 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="M20 9v11a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V9" />
    <path d="M9 22V12h6v10" />
    <path d="M2 10.6L12 2l10 8.6" />
  </svg>
);

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const CustomFoxIcon = ({ className }: { className?: string }) => (
  <svg 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="M15.5 17c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2z" />
    <path d="M12 19c-3.3 0-6-2.7-6-6 0-1.7.7-3.2 1.8-4.2L12 4l4.2 4.8c1.1 1 1.8 2.5 1.8 4.2 0 3.3-2.7 6-6 6z" />
    <path d="M12 13V9" />
  </svg>
);

export const DigitalGlobe = ({ className }: { className?: string }) => (
  <div className={cn("relative", className)}>
    <motion.div
      animate={{ rotate: 360 }}
      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      className="w-full h-full rounded-full border border-brand-accent/20 relative"
    >
      <div className="absolute inset-0 rounded-full border border-dashed border-brand-accent/10 scale-110" />
      <div className="absolute inset-0 rounded-full border border-brand-accent/5 scale-125" />
      
      {/* Grid lines */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-full h-[1px] bg-brand-accent/10" />
      </div>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-[1px] h-full bg-brand-accent/10" />
      </div>
      
      {/* Glowing points */}
      <div className="absolute top-1/4 left-1/4 w-1 h-1 bg-brand-accent rounded-full shadow-[0_0_10px_#FF6A3D]" />
      <div className="absolute top-1/2 right-1/4 w-1 h-1 bg-brand-accent rounded-full shadow-[0_0_10px_#FF6A3D]" />
      <div className="absolute bottom-1/4 left-1/2 w-1 h-1 bg-brand-accent rounded-full shadow-[0_0_10px_#FF6A3D]" />
    </motion.div>
    
    {/* Inner glow */}
    <div className="absolute inset-0 rounded-full bg-brand-accent/5 blur-2xl -z-10" />
  </div>
);
