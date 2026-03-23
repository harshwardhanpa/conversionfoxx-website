import { motion } from 'motion/react';

export default function TrustStrip() {
  return (
    <div className="py-6 border-y border-white/5 bg-brand-bg relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-center text-sm font-bold uppercase tracking-[0.2em] text-brand-muted"
        >
          Helping businesses turn traffic into <span className="text-brand-accent">predictable revenue</span>
        </motion.p>
      </div>
    </div>
  );
}
