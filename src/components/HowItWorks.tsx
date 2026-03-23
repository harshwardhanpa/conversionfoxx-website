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
              className="relative z-10 text-center group"
            >
              <div 
                className="w-24 h-24 mx-auto rounded-full glass-card flex items-center justify-center mb-8 relative group-hover:shadow-[0_0_40px_-10px_rgba(255,106,61,0.3)] transition-all border-brand-accent/20"
              >
                <step.icon className="w-10 h-10 text-brand-accent" />
                
                {/* Step Number */}
                <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-brand-bg border border-brand-accent/20 flex items-center justify-center text-xs font-bold text-brand-accent">
                  0{index + 1}
                </div>
              </div>

              <h3 className="text-2xl font-display font-bold mb-4">{step.title}</h3>
              <p className="text-brand-muted text-sm px-4 leading-relaxed">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
