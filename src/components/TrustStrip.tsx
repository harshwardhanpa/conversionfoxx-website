import { motion } from 'motion/react';

export default function TrustStrip() {
  return (
    <div className="py-8 border-y border-white/5 bg-brand-bg/50 backdrop-blur-md relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.p 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center text-xs md:text-sm font-bold uppercase tracking-[0.3em] text-brand-muted"
        >
          Helping businesses turn traffic into <span className="text-brand-accent neon-glow-orange">predictable revenue</span>
        </motion.p>
      </div>
    </div>
  );
}
