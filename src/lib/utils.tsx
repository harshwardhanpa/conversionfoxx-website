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
    {/* Outer rings */}
    <motion.div
      animate={{ rotate: 360 }}
      transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
      className="absolute inset-[-5%] rounded-full border border-brand-accent/20 shadow-[0_0_30px_rgba(255,106,61,0.1)]"
    />
    <motion.div
      animate={{ rotate: -360 }}
      transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
      className="absolute inset-[-15%] rounded-full border border-dashed border-brand-accent/10"
    />
    <motion.div
      animate={{ rotate: 360, scale: [1, 1.05, 1] }}
      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      className="absolute inset-[-25%] rounded-full border border-white/5"
    />
    
    {/* Core sphere */}
    <motion.div
      animate={{ rotate: 360 }}
      transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      className="w-full h-full rounded-full border border-brand-accent/30 relative overflow-hidden bg-brand-accent/5 backdrop-blur-[2px]"
    >
      {/* Grid lines */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-full h-[1px] bg-brand-accent/20" />
      </div>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-[1px] h-full bg-brand-accent/20" />
      </div>
      
      {/* Lat/Long lines */}
      <div className="absolute inset-0 rounded-full border border-brand-accent/10 scale-x-50" />
      <div className="absolute inset-0 rounded-full border border-brand-accent/10 scale-y-50" />
      <div className="absolute inset-0 rounded-full border border-brand-accent/5 scale-x-75" />
      <div className="absolute inset-0 rounded-full border border-brand-accent/5 scale-y-75" />
      
      {/* Glowing points */}
      <motion.div 
        animate={{ opacity: [0.4, 1, 0.4] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 left-1/4 w-2 h-2 bg-brand-accent rounded-full shadow-[0_0_20px_#FF6A3D]" 
      />
      <motion.div 
        animate={{ opacity: [0.4, 1, 0.4] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute top-1/2 right-1/4 w-2 h-2 bg-brand-accent rounded-full shadow-[0_0_20px_#FF6A3D]" 
      />
      <motion.div 
        animate={{ opacity: [0.4, 1, 0.4] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute bottom-1/4 left-1/2 w-2 h-2 bg-brand-accent rounded-full shadow-[0_0_20px_#FF6A3D]" 
      />
      <motion.div 
        animate={{ opacity: [0.4, 1, 0.4] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        className="absolute top-1/3 right-1/3 w-1.5 h-1.5 bg-brand-accent rounded-full shadow-[0_0_15px_#FF6A3D]" 
      />
    </motion.div>
    
    {/* Inner glow */}
    <div className="absolute inset-0 rounded-full bg-brand-accent/20 blur-[120px] -z-10 animate-pulse" />
    <div className="absolute inset-[-50%] rounded-full bg-brand-accent/5 blur-[150px] -z-20" />
  </div>
);
