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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-32 mb-32">
        {servicesDetail.map((service, index) => (
          <div 
            key={service.id} 
            id={service.id}
            className={`flex flex-col lg:flex-row gap-20 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
          >
            <div className="flex-1">
              <div className="w-16 h-16 rounded-2xl glass-card flex items-center justify-center mb-8 text-brand-accent">
                <service.icon className="w-8 h-8" />
              </div>
              <h2 className="text-4xl font-display font-bold mb-6">{service.title}</h2>
              <p className="text-xl text-brand-muted mb-10 leading-relaxed">
                {service.description}
              </p>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3 text-brand-text">
                    <CheckCircle2 className="w-5 h-5 text-brand-accent" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Link 
                to={`/services/${service.id}`}
                className="inline-flex items-center gap-2 text-brand-accent font-bold hover:gap-4 transition-all"
              >
                View System Details <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
            <div className="flex-1 w-full">
              <div className="aspect-video glass-card relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-brand-accent/20 to-transparent opacity-50" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <service.icon className="w-32 h-32 text-brand-accent opacity-20 group-hover:scale-110 transition-transform duration-500" />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <CTASection />
    </motion.div>
  );
}
