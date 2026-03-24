import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const caseStudies = [
  {
    client: "SaaS Platform X",
    metric: "+312%",
    label: "Revenue Growth",
    description: "Rebuilt their entire RevOps system and optimized the trial-to-paid funnel.",
    image: "https://picsum.photos/seed/saas/800/600"
  },
  {
    client: "Fintech Solutions",
    metric: "-45%",
    label: "CPA Reduction",
    description: "Implemented high-intent lead gen systems and automated follow-up sequences.",
    image: "https://picsum.photos/seed/fintech/800/600"
  },
  {
    client: "Enterprise AI",
    metric: "4.2x",
    label: "Pipeline Velocity",
    description: "Complete growth audit followed by full-scale revenue operations deployment.",
    image: "https://picsum.photos/seed/ai/800/600"
  }
];

export default function CaseStudies() {
  return (
    <section className="py-32 relative bg-brand-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
              Proven <span className="text-brand-accent">Results</span>
            </h2>
            <p className="text-brand-muted text-lg">
              We don't just talk about systems. We deploy them and measure the impact in cold, hard revenue.
            </p>
          </div>
          <Link to="/case-studies" className="px-8 py-4 glass-card glass-card-hover font-bold flex items-center gap-2">
            View All Cases <ArrowUpRight className="w-5 h-5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <motion.div
              key={study.client}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group glass-card glass-card-hover p-4"
            >
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden mb-8">
                <img 
                  src={study.image} 
                  alt={study.client}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-bg/80 to-transparent opacity-60" />
                
                <div className="absolute bottom-6 left-6">
                  <div className="text-4xl font-display font-bold text-brand-accent mb-1 drop-shadow-lg">{study.metric}</div>
                  <div className="text-xs font-bold uppercase tracking-widest text-white/90">{study.label}</div>
                </div>
              </div>

              <div className="px-4 pb-4">
                <h4 className="text-2xl font-display font-bold mb-3 group-hover:text-brand-accent transition-colors">
                  {study.client}
                </h4>
                <p className="text-brand-muted text-sm leading-relaxed mb-6 group-hover:text-brand-text transition-colors">
                  {study.description}
                </p>
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-brand-accent opacity-0 group-hover:opacity-100 transition-opacity">
                  Read Case Study <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
