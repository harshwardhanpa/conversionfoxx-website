import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Search, Target, Zap, Layers, CheckCircle2, ArrowLeft, ArrowRight } from 'lucide-react';
import CTASection from '../components/CTASection';

const servicesData: Record<string, any> = {
  audit: {
    title: "Growth Audit",
    icon: Search,
    problem: "Most businesses waste 40-60% of their marketing budget on inefficient funnels and poor attribution.",
    solution: "A deep-dive diagnostic that identifies the exact leaks in your revenue engine.",
    process: [
      "Data Collection & Verification",
      "Funnel Architecture Analysis",
      "Paid Media Performance Audit",
      "Conversion Rate Benchmarking",
      "Strategic Roadmap Development"
    ]
  },
  leads: {
    title: "Lead Generation",
    icon: Target,
    problem: "Inconsistent lead flow and poor lead quality are the primary killers of sales velocity.",
    solution: "High-performance acquisition systems designed to flood your pipeline with qualified prospects.",
    process: [
      "Omni-channel Ad Strategy",
      "Creative Production & Testing",
      "Advanced Audience Targeting",
      "Landing Page Optimization",
      "Lead Quality Scoring Systems"
    ]
  },
  cro: {
    title: "Conversion Optimization",
    icon: Zap,
    problem: "Traffic is expensive. If your site doesn't convert, you're throwing money away.",
    solution: "Scientific A/B testing and UX optimization to turn more visitors into customers.",
    process: [
      "User Behavior Mapping",
      "Hypothesis Development",
      "A/B & Multivariate Testing",
      "Copywriting & UI Refinement",
      "Continuous Performance Monitoring"
    ]
  },
  revops: {
    title: "Revenue Operations",
    icon: Layers,
    problem: "Fragmented tools and manual processes create friction and prevent scalable growth.",
    solution: "A unified system that connects marketing, sales, and success into a single engine.",
    process: [
      "CRM Architecture & Cleanup",
      "Sales Process Automation",
      "Revenue Attribution Modeling",
      "Cross-functional Data Sync",
      "Predictive Growth Forecasting"
    ]
  }
};

export default function ServiceDetail() {
  const { id } = useParams();
  const service = id ? servicesData[id] : null;

  if (!service) return <div>Service not found</div>;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-32 bg-brand-bg"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <Link to="/services" className="inline-flex items-center gap-2 text-brand-muted hover:text-brand-accent transition-colors mb-12">
          <ArrowLeft className="w-4 h-4" /> Back to Services
        </Link>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div>
            <div className="w-20 h-20 rounded-3xl glass-card glass-card-hover flex items-center justify-center mb-10 text-brand-accent border-brand-accent/20">
              <service.icon className="w-10 h-10" />
            </div>
            <h1 className="text-5xl md:text-7xl font-display font-bold mb-10 leading-tight">{service.title}</h1>
            
            <div className="space-y-16">
              <div className="group">
                <h3 className="text-xs font-bold uppercase tracking-[0.3em] text-brand-accent mb-6 group-hover:translate-x-2 transition-transform inline-block">The Problem</h3>
                <p className="text-2xl text-brand-muted leading-relaxed font-light">{service.problem}</p>
              </div>
              <div className="group">
                <h3 className="text-xs font-bold uppercase tracking-[0.3em] text-brand-accent mb-6 group-hover:translate-x-2 transition-transform inline-block">The Solution</h3>
                <p className="text-2xl text-brand-text leading-relaxed font-medium">{service.solution}</p>
              </div>
            </div>
          </div>
          
          <div className="glass-card glass-card-hover p-12 md:p-20 border-white/5 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-accent/5 blur-[100px] rounded-full -z-10" />
            <h3 className="text-3xl font-display font-bold mb-12">The Process</h3>
            <div className="space-y-8">
              {service.process.map((step: string, index: number) => (
                <div key={index} className="flex items-start gap-6 group/step">
                  <div className="w-10 h-10 rounded-2xl bg-brand-accent/10 border border-brand-accent/20 flex items-center justify-center text-brand-accent text-sm font-bold flex-shrink-0 group-hover/step:scale-110 transition-transform">
                    {index + 1}
                  </div>
                  <p className="text-brand-text font-medium pt-2 text-lg group-hover/step:text-brand-accent transition-colors">{step}</p>
                </div>
              ))}
            </div>
            
            <Link
              to="/contact"
              className="group/btn w-full mt-16 py-6 bg-brand-accent text-brand-bg font-bold rounded-2xl flex items-center justify-center gap-3 hover:shadow-[0_0_50px_rgba(255,106,61,0.5)] transition-all active:scale-[0.98] text-xl"
            >
              Get Started <ArrowRight className="w-6 h-6 group-hover/btn:translate-x-2 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
      
      <CTASection />
    </motion.div>
  );
}
