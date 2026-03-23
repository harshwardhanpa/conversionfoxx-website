import { motion } from 'motion/react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import { DigitalGlobe } from '../lib/utils.tsx';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,106,61,0.05),transparent_70%)]" />
      <div className="absolute bottom-0 left-0 right-0 h-[500px] horizon-glow opacity-50" />
      
      {/* Animated Light Flare */}
      <motion.div 
        animate={{ 
          opacity: [0.3, 0.6, 0.3],
          scale: [1, 1.1, 1],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-brand-accent/10 blur-[120px] rounded-full -z-10" 
      />

      {/* Digital Globe / Sphere */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] opacity-20 pointer-events-none">
        <DigitalGlobe className="w-full h-full" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-brand-accent text-sm font-medium mb-8 backdrop-blur-sm">
            <Sparkles className="w-4 h-4" />
            <span>The Future of Growth Systems is Here</span>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold tracking-tight mb-8 leading-[1.1]">
            Your Business Doesn’t Need <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent to-orange-400">
              More Marketing.
            </span>
            <br />
            It Needs a Revenue System.
          </h1>

          <p className="text-lg md:text-xl text-brand-muted max-w-3xl mx-auto mb-12 leading-relaxed">
            We audit, fix, and scale your entire growth engine — from traffic to conversion to retention. Stop buying services, start building assets.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link
              to="/contact"
              className="group relative px-8 py-4 bg-brand-accent text-brand-bg font-bold rounded-full overflow-hidden transition-all hover:shadow-[0_0_30px_rgba(255,106,61,0.6)] active:scale-95"
            >
              <span className="relative z-10 flex items-center gap-2">
                Get Free Growth Audit
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
            <Link
              to="/services"
              className="px-8 py-4 glass-card glass-card-hover font-bold rounded-full"
            >
              See How It Works
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
