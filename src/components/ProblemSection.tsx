import { motion } from 'motion/react';
import { AlertTriangle, TrendingDown, DollarSign } from 'lucide-react';

const problems = [
  {
    title: "Wasted Ad Spend",
    description: "Most businesses spend thousands on ads that lead to broken funnels and zero attribution.",
    icon: DollarSign
  },
  {
    title: "Fragmented Systems",
    description: "Random marketing tactics without a cohesive revenue system lead to unpredictable growth.",
    icon: TrendingDown
  },
  {
    title: "Zero Optimization",
    description: "If you aren't testing, you're guessing. Most brands leave 40-60% of revenue on the table.",
    icon: AlertTriangle
  }
];

export default function ProblemSection() {
  return (
    <section className="py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="text-4xl md:text-6xl font-display font-bold mb-8 leading-tight">
              Most Marketing <br />
              <span className="text-brand-secondary">Is Just Noise.</span>
            </h2>
            <p className="text-xl text-brand-muted mb-12 leading-relaxed">
              We've audited hundreds of accounts. The problem isn't your product or your ads. It's the lack of a scalable revenue infrastructure.
            </p>
            
            <div className="space-y-8">
              {problems.map((problem, index) => (
                <motion.div
                  key={problem.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex gap-6"
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-brand-accent/10 border border-brand-accent/20 flex items-center justify-center text-brand-accent">
                    <problem.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold mb-2">{problem.title}</h4>
                    <p className="text-brand-muted text-sm">{problem.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square glass-card p-8 flex flex-col justify-center relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-brand-secondary/10 to-transparent" />
              
              <div className="relative z-10">
                <div className="text-6xl font-display font-bold text-brand-secondary mb-4">67%</div>
                <p className="text-xl font-medium mb-8">Of B2B marketing spend is wasted on inefficient systems.</p>
                
                <div className="space-y-4">
                  <div className="h-4 w-full bg-white/5 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: '67%' }}
                      transition={{ duration: 1.5, ease: "easeOut" }}
                      className="h-full bg-brand-secondary" 
                    />
                  </div>
                  <div className="flex justify-between text-xs font-bold uppercase tracking-widest text-brand-muted">
                    <span>Inefficiency Gap</span>
                    <span>Industry Average</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Decorative Glow */}
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-brand-secondary/20 blur-[100px] rounded-full -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
}
