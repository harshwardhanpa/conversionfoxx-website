import { Link } from 'react-router-dom';
import { Linkedin, Twitter, Github, Mail } from 'lucide-react';
import { CustomFoxIcon } from '../lib/utils.tsx';

export default function Footer() {
  return (
    <footer className="bg-brand-bg-secondary border-t border-white/5 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-6">
              <CustomFoxIcon className="w-8 h-8 text-brand-secondary" />
              <span className="text-2xl font-display font-bold tracking-tight">
                Conversion<span className="text-brand-secondary">Foxx</span>
              </span>
            </Link>
            <p className="text-brand-muted max-w-sm mb-8">
              The Growth Systems Company. We don't just market; we build high-performance revenue engines for the next generation of industry leaders.
            </p>
            <div className="flex gap-4">
              <a href="#" className="p-3 glass-card glass-card-hover text-brand-muted hover:text-brand-accent transition-all">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="p-3 glass-card glass-card-hover text-brand-muted hover:text-brand-accent transition-all">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="p-3 glass-card glass-card-hover text-brand-muted hover:text-brand-accent transition-all">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="p-3 glass-card glass-card-hover text-brand-muted hover:text-brand-accent transition-all">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-display font-bold mb-6">Systems</h4>
            <ul className="space-y-4 text-brand-muted">
              <li><Link to="/services" className="hover:text-brand-accent transition-colors">Growth Audit</Link></li>
              <li><Link to="/services" className="hover:text-brand-accent transition-colors">Lead Generation</Link></li>
              <li><Link to="/services" className="hover:text-brand-accent transition-colors">Conversion Optimization</Link></li>
              <li><Link to="/services" className="hover:text-brand-accent transition-colors">Revenue Operations</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-display font-bold mb-6">Company</h4>
            <ul className="space-y-4 text-brand-muted">
              <li><Link to="/about" className="hover:text-brand-accent transition-colors">Our Story</Link></li>
              <li><Link to="/case-studies" className="hover:text-brand-accent transition-colors">Case Studies</Link></li>
              <li><Link to="/contact" className="hover:text-brand-accent transition-colors">Contact</Link></li>
              <li><Link to="/privacy" className="hover:text-brand-accent transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-brand-muted">
          <p>© 2026 ConversionFoxx Systems. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
