import { motion } from 'motion/react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-black">
      {/* Background Effects */}
      <div className="absolute inset-0 space-gradient opacity-100" />
      
      {/* Cinematic Horizon Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[150%] h-[500px] horizon-glow opacity-80 pointer-events-none" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[120%] h-[2px] bg-brand-accent/40 blur-[2px] pointer-events-none" />
      
      {/* Stars/Particles */}
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <div className="absolute top-[15%] left-[10%] w-0.5 h-0.5 bg-white rounded-full blur-[0.5px]" />
        <div className="absolute top-[25%] left-[45%] w-1 h-1 bg-white rounded-full blur-[1px]" />
        <div className="absolute top-[40%] right-[15%] w-0.5 h-0.5 bg-white rounded-full blur-[0.5px]" />
        <div className="absolute top-[60%] left-[20%] w-1 h-1 bg-white rounded-full blur-[1px]" />
        <div className="absolute top-[10%] right-[30%] w-0.5 h-0.5 bg-white rounded-full blur-[0.5px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="max-w-2xl"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-brand-accent text-[10px] font-bold uppercase tracking-[0.3em] mb-10 backdrop-blur-md">
              <Sparkles className="w-3 h-3" />
              <span>The Future of Growth</span>
            </div>

            <h1 className="text-6xl md:text-7xl lg:text-8xl font-display font-bold tracking-tight mb-10 leading-[1.1] text-white">
              Your Business <br />
              Doesn’t Need <br />
              <span className="text-brand-accent">More Marketing.</span>
              <br />
              <span className="text-white/90">It Needs a Revenue System.</span>
            </h1>

            <p className="text-lg md:text-xl text-brand-muted max-w-lg mb-12 leading-relaxed font-light tracking-wide">
              We audit, fix, and scale your entire growth engine. Stop buying services, <span className="text-white/80 font-medium">start building assets.</span>
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-6">
              <Link
                to="/contact"
                className="group relative w-full sm:w-auto px-10 py-5 bg-brand-accent text-brand-bg font-bold rounded-full transition-all hover:shadow-[0_0_40px_rgba(255,106,61,0.5)] active:scale-95 text-center"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Get Free Growth Audit
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
              <Link
                to="/services"
                className="w-full sm:w-auto px-10 py-5 border border-white/10 hover:border-white/20 hover:bg-white/5 font-bold rounded-full text-center transition-all text-white/80"
              >
                See How It Works
              </Link>
            </div>
          </motion.div>

          {/* Right Content - Empty Space for Glow */}
          <div className="hidden lg:block h-[600px] pointer-events-none" />
        </div>
      </div>
    </section>
  );
}
