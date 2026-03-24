import { motion } from 'motion/react';
import { DollarSign, TrendingDown, AlertCircle, Target } from 'lucide-react';

const problems = [
  {
    title: "Wasted Ad Spend",
    description: "Businesses waste thousands on ads that lead to broken funnels and zero attribution.",
    icon: DollarSign
  },
  {
    title: "No Funnel System",
    description: "Random marketing tactics without a cohesive revenue system lead to unpredictable growth.",
    icon: TrendingDown
  },
  {
    title: "No Tracking",
    description: "If you aren't tracking, you're guessing. Most brands leave 40-60% of revenue on the table.",
    icon: AlertCircle
  },
  {
    title: "No Conversion Strategy",
    description: "Traffic is useless if it doesn't convert. We fix the leaks in your conversion engine.",
    icon: Target
  }
];

export default function ProblemStatement() {
  return (
    <section className="py-32 relative bg-brand-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-display font-bold mb-8 leading-tight">
            Most Marketing <br />
            <span className="text-brand-accent">Is Just Noise.</span>
          </h2>
          <p className="text-xl text-brand-muted max-w-2xl mx-auto leading-relaxed">
            We've audited hundreds of accounts. The problem isn't your product or your ads. It's the lack of a scalable revenue infrastructure.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {problems.map((problem, index) => (
            <motion.div
              key={problem.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="p-8 glass-card glass-card-hover group"
            >
              <div className="w-12 h-12 rounded-lg bg-brand-accent/10 border border-brand-accent/20 flex items-center justify-center text-brand-accent mb-6 group-hover:scale-110 transition-transform">
                <problem.icon className="w-6 h-6" />
              </div>
              <h4 className="text-2xl font-display font-bold mb-4 group-hover:text-brand-accent transition-colors">{problem.title}</h4>
              <p className="text-brand-muted leading-relaxed text-sm md:text-base">{problem.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
