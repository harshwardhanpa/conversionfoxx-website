import { motion } from 'motion/react';
import { Layers, Database, TrendingUp, ShieldCheck } from 'lucide-react';

const reasons = [
  {
    title: "System-based approach",
    description: "We don't sell random marketing tactics. We build cohesive revenue systems that scale.",
    icon: Layers
  },
  {
    title: "Data-driven decisions",
    description: "Every move we make is backed by rigorous data analysis and performance tracking.",
    icon: Database
  },
  {
    title: "ROI focus",
    description: "Our primary metric is your return on investment. We build for revenue, not just traffic.",
    icon: TrendingUp
  },
  {
    title: "No guesswork",
    description: "We use proven methodologies to eliminate uncertainty and drive predictable growth.",
    icon: ShieldCheck
  }
];

export default function WhyChooseUs() {
  return (
    <section className="py-32 relative bg-brand-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-display font-bold mb-8 leading-tight">
            Why Choose <span className="text-brand-accent">Us</span>
          </h2>
          <p className="text-xl text-brand-muted max-w-2xl mx-auto leading-relaxed">
            We bridge the gap between marketing and revenue by treating growth as an engineering problem.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="p-8 glass-card text-center"
            >
              <div className="w-16 h-16 mx-auto rounded-2xl bg-brand-accent/10 border border-brand-accent/20 flex items-center justify-center text-brand-accent mb-8">
                <reason.icon className="w-8 h-8" />
              </div>
              <h4 className="text-xl font-display font-bold mb-4">{reason.title}</h4>
              <p className="text-brand-muted text-sm leading-relaxed">{reason.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
