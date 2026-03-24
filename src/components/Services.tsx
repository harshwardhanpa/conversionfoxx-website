import { motion } from 'motion/react';
import { Search, Zap, Target, Layers, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const services = [
  {
    title: "Growth Audit",
    description: "Deep analysis of your entire funnel, paid media performance, website architecture, and tracking infrastructure.",
    icon: Search,
    link: "/services/audit"
  },
  {
    title: "Lead Generation",
    description: "High-performance paid acquisition systems. We handle creatives, targeting, and scaling across all major platforms.",
    icon: Target,
    link: "/services/leads"
  },
  {
    title: "Conversion Optimization",
    description: "Data-driven CRO and A/B testing. We turn more of your existing traffic into high-value customers.",
    icon: Zap,
    link: "/services/cro"
  },
  {
    title: "Revenue Operations System",
    description: "Our flagship offer. A complete end-to-end system including CRM, automation, pipeline management, and real-time tracking.",
    icon: Layers,
    highlight: true,
    link: "/services/revops"
  }
];

export default function Services() {
  return (
    <section className="py-32 relative bg-brand-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
            Engineered for <span className="text-brand-accent">Scale</span>
          </h2>
          <p className="text-brand-muted max-w-2xl mx-auto text-lg">
            We don't just provide services. We build modular growth systems that integrate seamlessly into your business.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Link
                to={service.link}
                className={`group block h-full p-8 glass-card glass-card-hover relative overflow-hidden flex flex-col ${
                  service.highlight ? 'border-brand-accent/40 bg-brand-accent/5 shadow-[0_0_40px_-15px_rgba(255,106,61,0.2)]' : ''
                }`}
              >
                {service.highlight && (
                  <div className="absolute top-0 right-0 bg-brand-accent text-brand-bg text-[10px] font-bold px-4 py-1.5 rounded-bl-xl uppercase tracking-widest shadow-lg">
                    Flagship System
                  </div>
                )}
                
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-8 bg-brand-accent/10 text-brand-accent group-hover:scale-110 transition-transform border border-brand-accent/20">
                  <service.icon className="w-7 h-7" />
                </div>

                <h3 className="text-2xl font-display font-bold mb-4 group-hover:text-brand-accent transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-brand-muted text-sm leading-relaxed mb-10 group-hover:text-brand-text transition-colors">
                  {service.description}
                </p>

                <div className="mt-auto flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-brand-accent translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  View System Details <ArrowRight className="w-4 h-4" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
