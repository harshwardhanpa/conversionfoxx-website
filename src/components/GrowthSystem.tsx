import { motion } from 'motion/react';
import { Search, Target, Zap, Layers, ChevronRight } from 'lucide-react';

const steps = [
  {
    title: "Audit",
    icon: Search,
    description: "Diagnosing the leaks in your current engine.",
    color: "#FF6A3D"
  },
  {
    title: "Traffic",
    icon: Target,
    description: "Fueling the system with high-intent leads.",
    color: "#FF6A3D"
  },
  {
    title: "Conversion",
    icon: Zap,
    description: "Optimizing the path to revenue.",
    color: "#FF6A3D"
  },
  {
    title: "Revenue System",
    icon: Layers,
    description: "Scaling with automated operations.",
    color: "#FF6A3D"
  }
];

export default function GrowthSystem() {
  return (
    <section className="py-32 bg-brand-bg relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
            The <span className="text-brand-accent">ConversionFoxx</span> Growth System
          </h2>
          <p className="text-brand-muted max-w-2xl mx-auto text-lg">
            A linear, data-backed methodology to transform your business from a marketing cost-center to a revenue-generating asset.
          </p>
        </div>

        <div className="relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-accent/20 to-transparent -translate-y-1/2" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.2 }}
                viewport={{ once: true }}
                className="relative z-10 text-center group"
              >
                <div 
                  className="w-24 h-24 mx-auto rounded-full glass-card glass-card-hover flex items-center justify-center mb-8 relative group-hover:scale-105 transition-all border-brand-accent/20"
                >
                  <step.icon className="w-10 h-10 text-brand-accent group-hover:scale-110 transition-transform" />
                  
                  {/* Step Number */}
                  <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-brand-bg border border-brand-accent/20 flex items-center justify-center text-xs font-bold text-brand-accent shadow-[0_0_15px_rgba(255,106,61,0.2)]">
                    0{index + 1}
                  </div>
                </div>

                <h3 className="text-2xl font-display font-bold mb-4 group-hover:text-brand-accent transition-colors">{step.title}</h3>
                <p className="text-brand-muted text-sm px-4 leading-relaxed group-hover:text-brand-text transition-colors">{step.description}</p>

                {index < steps.length - 1 && (
                  <div className="hidden lg:flex absolute top-1/2 -right-6 -translate-y-1/2 text-brand-accent/20">
                    <ChevronRight className="w-8 h-8" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
