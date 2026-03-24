import { motion } from 'motion/react';
import { Search, Target, Zap, Layers, CheckCircle2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import CTASection from '../components/CTASection';

const servicesDetail = [
  {
    id: "audit",
    title: "Growth Audit",
    icon: Search,
    description: "Our deep-dive diagnostic process that identifies exactly where your revenue engine is leaking.",
    features: [
      "Full Funnel Analysis",
      "Paid Media Performance Review",
      "Tracking & Attribution Audit",
      "Conversion Rate Benchmark",
      "Tech Stack Evaluation"
    ],
    color: "brand-accent"
  },
  {
    id: "leads",
    title: "Lead Generation",
    icon: Target,
    description: "Scalable acquisition systems designed to flood your pipeline with high-intent prospects.",
    features: [
      "Omni-channel Paid Media",
      "High-Converting Ad Creatives",
      "Advanced Audience Targeting",
      "Landing Page Development",
      "Lead Quality Scoring"
    ],
    color: "brand-accent"
  },
  {
    id: "cro",
    title: "Conversion Optimization",
    icon: Zap,
    description: "Turning your existing traffic into a compounding asset through scientific A/B testing.",
    features: [
      "User Behavior Analysis",
      "Hypothesis-Driven Testing",
      "UI/UX Enhancements",
      "Copywriting Optimization",
      "Personalization Strategy"
    ],
    color: "brand-accent"
  },
  {
    id: "revops",
    title: "Revenue Operations",
    icon: Layers,
    description: "Our flagship end-to-end system that unifies marketing, sales, and customer success.",
    features: [
      "CRM Implementation & Optimization",
      "Sales Pipeline Automation",
      "Real-time Revenue Dashboards",
      "Customer Lifecycle Mapping",
      "Predictive Growth Modeling"
    ],
    color: "brand-accent"
  }
];

export default function ServicesPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-32 bg-brand-bg"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-display font-bold mb-8">
            Modular <span className="text-brand-accent">Growth</span> Systems.
          </h1>
          <p className="text-xl text-brand-muted">
            We don't sell hours. We sell outcomes. Choose the system that fits your current stage of growth.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-48 mb-32">
        {servicesDetail.map((service, index) => (
          <div 
            key={service.id} 
            id={service.id}
            className={`flex flex-col lg:flex-row gap-24 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
          >
            <div className="flex-1">
              <div className="w-20 h-20 rounded-3xl glass-card glass-card-hover flex items-center justify-center mb-10 text-brand-accent border-brand-accent/20">
                <service.icon className="w-10 h-10" />
              </div>
              <h2 className="text-4xl md:text-6xl font-display font-bold mb-8 leading-tight">{service.title}</h2>
              <p className="text-xl text-brand-muted mb-12 leading-relaxed font-light">
                {service.description}
              </p>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-4 text-brand-text group/item">
                    <div className="w-6 h-6 rounded-full bg-brand-accent/10 flex items-center justify-center group-hover/item:bg-brand-accent/20 transition-colors">
                      <CheckCircle2 className="w-4 h-4 text-brand-accent" />
                    </div>
                    <span className="font-medium">{feature}</span>
                  </li>
                ))}
              </ul>
              <Link 
                to={`/services/${service.id}`}
                className="group inline-flex items-center gap-3 text-brand-accent font-bold text-lg hover:gap-5 transition-all"
              >
                View System Details <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
              </Link>
            </div>
            <div className="flex-1 w-full">
              <div className="aspect-video glass-card glass-card-hover relative overflow-hidden group border-white/5">
                <div className="absolute inset-0 bg-gradient-to-br from-brand-accent/10 to-transparent opacity-40 group-hover:opacity-60 transition-opacity duration-500" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <service.icon className="w-40 h-40 text-brand-accent opacity-10 group-hover:opacity-20 group-hover:scale-110 transition-all duration-700" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-brand-bg to-transparent opacity-60" />
              </div>
            </div>
          </div>
        ))}
      </div>

      <CTASection />
    </motion.div>
  );
}
