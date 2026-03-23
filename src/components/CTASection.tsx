import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function CTASection() {
  return (
    <section className="py-32 relative overflow-hidden bg-brand-bg">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="glass-card p-12 md:p-20 text-center relative overflow-hidden">
          {/* Background Glow */}
          <div className="absolute -top-24 -left-24 w-64 h-64 bg-brand-accent/20 blur-[100px] rounded-full" />
          <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-brand-accent/10 blur-[100px] rounded-full" />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-display font-bold mb-8">
              Stop Guessing. <br />
              <span className="text-brand-accent">Start Scaling.</span>
            </h2>
            <p className="text-xl text-brand-muted max-w-2xl mx-auto mb-12">
              Ready to build a predictable revenue engine? Book your free growth audit today and let's diagnose your system.
            </p>
            
            <Link
              to="/contact"
              className="inline-flex items-center gap-3 px-10 py-5 bg-brand-accent text-brand-bg font-bold rounded-full text-lg hover:shadow-[0_0_40px_rgba(255,106,61,0.6)] transition-all active:scale-95"
            >
              Book Your Growth Audit
              <ArrowRight className="w-6 h-6" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
