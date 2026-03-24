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

            <div className="space-y-10">
              <div className="flex items-center gap-8 group">
                <div className="w-16 h-16 rounded-2xl glass-card glass-card-hover flex items-center justify-center text-brand-accent group-hover:scale-110 transition-transform border-brand-accent/20">
                  <Mail className="w-7 h-7" />
                </div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-[0.2em] text-brand-muted mb-2">Email Us</div>
                  <div className="text-xl font-medium text-brand-text group-hover:text-brand-accent transition-colors">systems@conversionfoxx.com</div>
                </div>
              </div>

              <div className="flex items-center gap-8 group">
                <div className="w-16 h-16 rounded-2xl glass-card glass-card-hover flex items-center justify-center text-brand-accent group-hover:scale-110 transition-transform border-brand-accent/20">
                  <Phone className="w-7 h-7" />
                </div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-[0.2em] text-brand-muted mb-2">Call Us</div>
                  <div className="text-xl font-medium text-brand-text group-hover:text-brand-accent transition-colors">+1 (555) 892-GROW</div>
                </div>
              </div>

              <div className="flex items-center gap-8 group">
                <div className="w-16 h-16 rounded-2xl glass-card glass-card-hover flex items-center justify-center text-brand-accent group-hover:scale-110 transition-transform border-brand-accent/20">
                  <MapPin className="w-7 h-7" />
                </div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-[0.2em] text-brand-muted mb-2">Headquarters</div>
                  <div className="text-xl font-medium text-brand-text group-hover:text-brand-accent transition-colors">Silicon Valley, CA</div>
                </div>
              </div>
            </div>
          </div>

          <div className="glass-card p-10 md:p-16 border-white/5 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-accent/5 blur-[100px] rounded-full -z-10" />
            <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label className="text-xs font-bold uppercase tracking-widest text-brand-muted ml-1">Full Name</label>
                  <input 
                    type="text" 
                    placeholder="John Doe"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 focus:outline-none focus:border-brand-accent transition-all focus:bg-white/10"
                  />
                </div>
                <div className="space-y-3">
                  <label className="text-xs font-bold uppercase tracking-widest text-brand-muted ml-1">Work Email</label>
                  <input 
                    type="email" 
                    placeholder="john@company.com"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 focus:outline-none focus:border-brand-accent transition-all focus:bg-white/10"
                  />
                </div>
              </div>

              <div className="space-y-3">
                <label className="text-xs font-bold uppercase tracking-widest text-brand-muted ml-1">Company Website</label>
                <input 
                  type="url" 
                  placeholder="https://company.com"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 focus:outline-none focus:border-brand-accent transition-all focus:bg-white/10"
                />
              </div>

              <div className="space-y-3">
                <label className="text-xs font-bold uppercase tracking-widest text-brand-muted ml-1">Monthly Revenue</label>
                <select className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 focus:outline-none focus:border-brand-accent transition-all focus:bg-white/10 appearance-none cursor-pointer">
                  <option className="bg-brand-bg">Select range</option>
                  <option className="bg-brand-bg">$10k - $50k</option>
                  <option className="bg-brand-bg">$50k - $250k</option>
                  <option className="bg-brand-bg">$250k - $1M</option>
                  <option className="bg-brand-bg">$1M+</option>
                </select>
              </div>

              <div className="space-y-3">
                <label className="text-xs font-bold uppercase tracking-widest text-brand-muted ml-1">How can we help?</label>
                <textarea 
                  rows={4}
                  placeholder="Tell us about your growth goals..."
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 focus:outline-none focus:border-brand-accent transition-all focus:bg-white/10 resize-none"
                />
              </div>

              <button className="w-full py-5 bg-brand-accent text-brand-bg font-bold rounded-xl flex items-center justify-center gap-3 hover:shadow-[0_0_40px_rgba(255,106,61,0.5)] transition-all active:scale-[0.98] text-lg">
                Submit Application <Send className="w-6 h-6" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
