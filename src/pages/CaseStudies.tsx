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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24 mb-32">
        {cases.map((study, index) => (
          <motion.div
            key={study.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="glass-card glass-card-hover overflow-hidden group border-white/5"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="relative h-80 lg:h-auto overflow-hidden">
                <img 
                  src={study.image} 
                  alt={study.title}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-brand-bg/40 group-hover:bg-brand-bg/10 transition-colors duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-bg via-transparent to-transparent opacity-60" />
              </div>
              <div className="p-10 md:p-16 flex flex-col justify-center relative">
                <div className="absolute top-0 right-0 w-64 h-64 bg-brand-accent/5 blur-[100px] rounded-full -z-10" />
                <div className="flex items-center gap-3 text-brand-accent text-xs font-bold uppercase tracking-[0.2em] mb-6">
                  <TrendingUp className="w-4 h-4" />
                  {study.industry}
                </div>
                <h2 className="text-4xl md:text-5xl font-display font-bold mb-8 leading-tight group-hover:text-brand-accent transition-colors">{study.title}</h2>
                
                <div className="flex items-center gap-12 mb-10">
                  <div>
                    <div className="text-5xl md:text-6xl font-display font-bold text-brand-accent mb-2">{study.result}</div>
                    <div className="text-xs font-bold uppercase tracking-[0.2em] text-brand-muted">{study.label}</div>
                  </div>
                  <div className="w-px h-16 bg-white/10" />
                  <div className="p-4 rounded-2xl bg-brand-accent/10 text-brand-accent border border-brand-accent/20 group-hover:scale-110 transition-transform">
                    <ArrowUpRight className="w-8 h-8" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-12">
                  <div className="space-y-3">
                    <div className="text-xs font-bold uppercase tracking-widest text-brand-muted ml-1">The Challenge</div>
                    <p className="text-brand-text leading-relaxed font-light">{study.challenge}</p>
                  </div>
                  <div className="space-y-3">
                    <div className="text-xs font-bold uppercase tracking-widest text-brand-muted ml-1">The Solution</div>
                    <p className="text-brand-text leading-relaxed font-light">{study.solution}</p>
                  </div>
                </div>

                <button className="group/btn inline-flex items-center gap-3 text-brand-accent font-bold text-lg hover:gap-5 transition-all">
                  Read Full Case Study <ArrowRight className="w-6 h-6 group-hover/btn:translate-x-2 transition-transform" />
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
