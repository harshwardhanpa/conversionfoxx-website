import { motion } from 'motion/react';
import { ArrowRight, Users, Target, Rocket } from 'lucide-react';
import CTASection from '../components/CTASection';

export default function About() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-32"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <h1 className="text-5xl md:text-7xl font-display font-bold mb-8">
              We Are <br />
              <span className="text-brand-accent">System Thinkers.</span>
            </h1>
            <p className="text-xl text-brand-muted mb-8 leading-relaxed">
              ConversionFoxx was founded on a simple realization: Most marketing agencies focus on inputs (ads, posts, emails) while businesses care about outputs (revenue, profit, scale).
            </p>
            <p className="text-lg text-brand-muted mb-12">
              We bridge that gap by treating growth as an engineering problem. We don't just "do marketing"—we build the infrastructure that makes marketing work.
            </p>
            
            <div className="grid grid-cols-2 gap-8">
              <div>
                <div className="text-4xl font-display font-bold text-brand-accent mb-2">50+</div>
                <div className="text-sm font-bold uppercase tracking-widest text-brand-muted">Systems Deployed</div>
              </div>
              <div>
                <div className="text-4xl font-display font-bold text-brand-accent mb-2">$100M+</div>
                <div className="text-sm font-bold uppercase tracking-widest text-brand-muted">Revenue Managed</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square glass-card p-12 flex flex-col justify-center relative overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,106,61,0.1),transparent_70%)]" />
              <div className="space-y-12 relative z-10">
                <div className="flex gap-6">
                  <Users className="w-10 h-10 text-brand-accent" />
                  <div>
                    <h4 className="text-xl font-bold mb-2">Expert-Led</h4>
                    <p className="text-brand-muted">No junior account managers. You work directly with systems architects.</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <Target className="w-10 h-10 text-brand-accent" />
                  <div>
                    <h4 className="text-xl font-bold mb-2">ROI-First</h4>
                    <p className="text-brand-muted">Every system we build is measured by its impact on your bottom line.</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <Rocket className="w-10 h-10 text-brand-accent" />
                  <div>
                    <h4 className="text-xl font-bold mb-2">Built to Scale</h4>
                    <p className="text-brand-muted">We build for where you want to be in 2 years, not just where you are today.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-brand-accent/20 blur-[80px] rounded-full -z-10" />
          </div>
        </div>
      </div>

      <section className="py-32 bg-brand-bg-secondary/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-display font-bold mb-16">Our Core Philosophy</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="p-8 glass-card">
              <h3 className="text-2xl font-display font-bold mb-4">Diagnosis Before Prescription</h3>
              <p className="text-brand-muted">We never suggest a solution until we've audited the entire engine. We solve root causes, not symptoms.</p>
            </div>
            <div className="p-8 glass-card">
              <h3 className="text-2xl font-display font-bold mb-4">Data is the Only Truth</h3>
              <p className="text-brand-muted">Opinions don't scale. We rely on rigorous tracking and statistical significance to drive decisions.</p>
            </div>
            <div className="p-8 glass-card">
              <h3 className="text-2xl font-display font-bold mb-4">Assets Over Expenses</h3>
              <p className="text-brand-muted">Marketing spend is an expense. A revenue system is an asset that grows in value over time.</p>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </motion.div>
  );
}
