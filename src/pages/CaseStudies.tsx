import { motion } from 'motion/react';
import { ArrowUpRight, TrendingUp, Users, Zap, ArrowRight } from 'lucide-react';
import CTASection from '../components/CTASection';

const cases = [
  {
    title: "SaaS Platform X",
    industry: "B2B SaaS",
    result: "+312%",
    label: "ARR Growth",
    challenge: "High churn and low trial-to-paid conversion rates.",
    solution: "Full RevOps overhaul and behavioral email automation.",
    image: "https://picsum.photos/seed/case1/1200/800"
  },
  {
    title: "Fintech Solutions",
    industry: "Fintech",
    result: "-45%",
    label: "CPA Reduction",
    challenge: "Inefficient ad spend and poor lead quality.",
    solution: "High-intent search systems and lead scoring infrastructure.",
    image: "https://picsum.photos/seed/case2/1200/800"
  },
  {
    title: "Enterprise AI",
    industry: "Artificial Intelligence",
    result: "4.2x",
    label: "Pipeline Velocity",
    challenge: "Long sales cycles and manual pipeline management.",
    solution: "Automated sales enablement and CRM optimization.",
    image: "https://picsum.photos/seed/case3/1200/800"
  }
];

export default function CaseStudiesPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-32"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-display font-bold mb-8">
            The <span className="text-brand-accent">Proof</span> is in the Data.
          </h1>
          <p className="text-xl text-brand-muted">
            Real results for high-growth companies. No fluff, just scalable revenue systems.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20 mb-32">
        {cases.map((study, index) => (
          <motion.div
            key={study.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card overflow-hidden group"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="relative h-64 lg:h-auto overflow-hidden">
                <img 
                  src={study.image} 
                  alt={study.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-brand-bg/20 group-hover:bg-transparent transition-colors duration-500" />
              </div>
              <div className="p-8 md:p-12 flex flex-col justify-center">
                <div className="flex items-center gap-2 text-brand-accent text-sm font-bold uppercase tracking-widest mb-4">
                  <TrendingUp className="w-4 h-4" />
                  {study.industry}
                </div>
                <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">{study.title}</h2>
                
                <div className="grid grid-cols-2 gap-8 mb-8">
                  <div>
                    <div className="text-4xl font-display font-bold text-brand-accent">{study.result}</div>
                    <div className="text-xs font-bold uppercase tracking-widest text-brand-muted">{study.label}</div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-xl bg-white/5 text-brand-accent">
                      <ArrowUpRight className="w-6 h-6" />
                    </div>
                  </div>
                </div>

                <div className="space-y-4 mb-10">
                  <div>
                    <div className="text-xs font-bold uppercase tracking-widest text-brand-muted mb-1">The Challenge</div>
                    <p className="text-brand-text">{study.challenge}</p>
                  </div>
                  <div>
                    <div className="text-xs font-bold uppercase tracking-widest text-brand-muted mb-1">The Solution</div>
                    <p className="text-brand-text">{study.solution}</p>
                  </div>
                </div>

                <button className="inline-flex items-center gap-2 text-brand-accent font-bold hover:gap-4 transition-all">
                  Read Full Case Study <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <CTASection />
    </motion.div>
  );
}
