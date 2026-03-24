import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function CTASection() {
  return (
    <section className="py-32 relative overflow-hidden bg-brand-bg">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="glass-card glass-card-hover p-12 md:p-20 text-center relative overflow-hidden border-brand-accent/20">
          {/* Background Glow */}
          <div className="absolute -top-24 -left-24 w-64 h-64 bg-brand-accent/20 blur-[100px] rounded-full animate-pulse" />
          <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-brand-accent/10 blur-[100px] rounded-full animate-pulse" style={{ animationDelay: '1s' }} />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative z-10"
          >
            <h2 className="text-4xl md:text-7xl font-display font-bold mb-8 leading-tight">
              Stop Guessing. <br />
              <span className="text-brand-accent">Start Scaling.</span>
            </h2>
            <p className="text-xl text-brand-muted max-w-2xl mx-auto mb-12 leading-relaxed">
              Ready to build a predictable revenue engine? Book your free growth audit today and let's diagnose your system.
            </p>
            
            <Link
              to="/contact"
              className="inline-flex items-center gap-3 px-12 py-6 bg-brand-accent text-brand-bg font-bold rounded-full text-xl hover:shadow-[0_0_50px_rgba(255,106,61,0.6)] transition-all active:scale-95 group"
            >
              Book Your Growth Audit
              <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
