import { motion } from 'motion/react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import { DigitalGlobe } from '../lib/utils.tsx';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-brand-bg">
      {/* Background Effects */}
      <div className="absolute inset-0 space-gradient opacity-40" />
      <div className="absolute bottom-0 left-0 right-0 h-[400px] horizon-glow opacity-60 pointer-events-none" />
      
      {/* Stars/Particles (Simulated with CSS) */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-1 h-1 bg-white rounded-full blur-[1px]" />
        <div className="absolute top-1/3 left-1/2 w-0.5 h-0.5 bg-white rounded-full blur-[1px]" />
        <div className="absolute top-2/3 left-1/3 w-1 h-1 bg-white rounded-full blur-[1px]" />
        <div className="absolute top-1/2 right-1/4 w-0.5 h-0.5 bg-white rounded-full blur-[1px]" />
        <div className="absolute bottom-1/4 right-1/3 w-1 h-1 bg-white rounded-full blur-[1px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/5 border border-white/10 text-brand-accent text-xs font-bold uppercase tracking-widest mb-10 backdrop-blur-md shadow-[0_0_20px_rgba(255,106,61,0.1)]">
              <Sparkles className="w-4 h-4 animate-pulse" />
              <span>The Future of Growth Systems</span>
            </div>

            <h1 className="text-6xl md:text-8xl lg:text-9xl font-display font-bold tracking-tight mb-12 leading-[0.9] text-white">
              Your Business <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent via-orange-400 to-brand-accent bg-[length:200%_auto] animate-gradient-x">
                Doesn’t Need
              </span>
              <br />
              More Marketing.
            </h1>

            <p className="text-xl md:text-2xl text-brand-muted max-w-xl mb-16 leading-relaxed font-light">
              We audit, fix, and scale your entire growth engine. Stop buying services, <span className="text-brand-text font-medium">start building assets.</span>
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-8">
              <Link
                to="/contact"
                className="group relative w-full sm:w-auto px-12 py-6 bg-brand-accent text-brand-bg font-bold rounded-full overflow-hidden transition-all hover:shadow-[0_0_50px_rgba(255,106,61,0.6)] active:scale-95 text-center text-lg"
              >
                <span className="relative z-10 flex items-center justify-center gap-3">
                  Get Free Growth Audit
                  <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
                </span>
              </Link>
              <Link
                to="/services"
                className="w-full sm:w-auto px-12 py-6 glass-card glass-card-hover font-bold rounded-full text-center text-lg border-white/10"
              >
                See How It Works
              </Link>
            </div>
          </motion.div>

          {/* Right Content - Digital Sphere */}
          <div className="relative flex items-center justify-center lg:justify-end">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="relative w-[350px] h-[350px] md:w-[500px] md:h-[500px] lg:w-[600px] lg:h-[600px]"
            >
              <DigitalGlobe className="w-full h-full" />
              
              {/* Floating UI Elements */}
              <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-10 -left-10 glass-card p-4 flex items-center gap-3 backdrop-blur-md border-brand-accent/20"
              >
                <div className="w-10 h-10 rounded-lg bg-brand-accent/20 flex items-center justify-center text-brand-accent">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[10px] font-bold uppercase tracking-widest text-brand-muted">Conversion Rate</div>
                  <div className="text-lg font-bold text-brand-accent">+312%</div>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 15, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -bottom-10 -right-10 glass-card p-4 flex items-center gap-3 backdrop-blur-md border-brand-accent/20"
              >
                <div className="w-10 h-10 rounded-lg bg-brand-accent/20 flex items-center justify-center text-brand-accent">
                  <ArrowRight className="w-5 h-5 rotate-[-45deg]" />
                </div>
                <div>
                  <div className="text-[10px] font-bold uppercase tracking-widest text-brand-muted">Revenue Velocity</div>
                  <div className="text-lg font-bold text-brand-accent">4.2x</div>
                </div>
              </motion.div>

              {/* Background Glow for Sphere */}
              <div className="absolute inset-0 bg-brand-accent/5 blur-[100px] rounded-full -z-10" />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
