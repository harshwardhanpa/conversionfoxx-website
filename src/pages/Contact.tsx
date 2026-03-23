import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export default function Contact() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-32 pb-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div>
            <h1 className="text-5xl md:text-6xl font-display font-bold mb-8">
              Let's Build Your <br />
              <span className="text-brand-accent">Revenue Engine.</span>
            </h1>
            <p className="text-xl text-brand-muted mb-12 leading-relaxed">
              Whether you're looking for a full audit or a complete RevOps overhaul, our team is ready to help you scale.
            </p>

            <div className="space-y-8">
              <div className="flex items-center gap-6">
                <div className="w-14 h-14 rounded-2xl glass-card flex items-center justify-center text-brand-accent">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-sm font-bold uppercase tracking-widest text-brand-muted mb-1">Email Us</div>
                  <div className="text-xl font-medium">systems@conversionfoxx.com</div>
                </div>
              </div>

              <div className="flex items-center gap-6">
                <div className="w-14 h-14 rounded-2xl glass-card flex items-center justify-center text-brand-accent">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-sm font-bold uppercase tracking-widest text-brand-muted mb-1">Call Us</div>
                  <div className="text-xl font-medium">+1 (555) 892-GROW</div>
                </div>
              </div>

              <div className="flex items-center gap-6">
                <div className="w-14 h-14 rounded-2xl glass-card flex items-center justify-center text-brand-accent">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-sm font-bold uppercase tracking-widest text-brand-muted mb-1">Headquarters</div>
                  <div className="text-xl font-medium">Silicon Valley, CA</div>
                </div>
              </div>
            </div>
          </div>

          <div className="glass-card p-8 md:p-12">
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold uppercase tracking-widest text-brand-muted">Full Name</label>
                  <input 
                    type="text" 
                    placeholder="John Doe"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-brand-accent transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold uppercase tracking-widest text-brand-muted">Work Email</label>
                  <input 
                    type="email" 
                    placeholder="john@company.com"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-brand-accent transition-colors"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold uppercase tracking-widest text-brand-muted">Company Website</label>
                <input 
                  type="url" 
                  placeholder="https://company.com"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-brand-accent transition-colors"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold uppercase tracking-widest text-brand-muted">Monthly Revenue</label>
                <select className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-brand-accent transition-colors appearance-none">
                  <option className="bg-brand-bg">Select range</option>
                  <option className="bg-brand-bg">$10k - $50k</option>
                  <option className="bg-brand-bg">$50k - $250k</option>
                  <option className="bg-brand-bg">$250k - $1M</option>
                  <option className="bg-brand-bg">$1M+</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold uppercase tracking-widest text-brand-muted">How can we help?</label>
                <textarea 
                  rows={4}
                  placeholder="Tell us about your growth goals..."
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-brand-accent transition-colors resize-none"
                />
              </div>

              <button className="w-full py-4 bg-brand-accent text-brand-bg font-bold rounded-xl flex items-center justify-center gap-2 hover:shadow-[0_0_30px_rgba(255,106,61,0.4)] transition-all active:scale-[0.98]">
                Submit Application <Send className="w-5 h-5" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
