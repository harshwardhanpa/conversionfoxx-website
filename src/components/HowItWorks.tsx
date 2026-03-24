import { motion } from 'motion/react';
import { Search, Target, Zap, Layers } from 'lucide-react';

const steps = [
  {
    title: "Audit",
    description: "Diagnosing the leaks in your current engine.",
    icon: Search
  },
  {
    title: "Identify Gaps",
    description: "Pinpointing the exact bottlenecks in your funnel.",
    icon: Target
  },
  {
    title: "Build System",
    description: "Deploying the infrastructure for scalable growth.",
    icon: Zap
  },
  {
    title: "Scale Revenue",
    description: "Scaling with automated operations and data.",
    icon: Layers
  }
];

export default function HowItWorks() {
  return (
    <section className="py-32 bg-brand-bg relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
            How It <span className="text-brand-accent">Works</span>
          </h2>
          <p className="text-brand-muted max-w-2xl mx-auto text-lg">
            A linear, data-backed methodology to transform your business from a marketing cost-center to a revenue-generating asset.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative z-10 p-8 glass-card glass-card-hover text-center group"
            >
              <div 
                className="w-20 h-20 mx-auto rounded-2xl bg-brand-accent/10 border border-brand-accent/20 flex items-center justify-center mb-8 relative group-hover:scale-110 transition-all shadow-[0_0_20px_rgba(255,106,61,0.1)]"
              >
                <step.icon className="w-8 h-8 text-brand-accent" />
                
                {/* Step Number */}
                <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-brand-bg border border-brand-accent/20 flex items-center justify-center text-xs font-bold text-brand-accent shadow-lg">
                  {index + 1}
                </div>
              </div>

              <h3 className="text-xl font-display font-bold mb-4 group-hover:text-brand-accent transition-colors">{step.title}</h3>
              <p className="text-brand-muted text-sm leading-relaxed group-hover:text-brand-text transition-colors">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
