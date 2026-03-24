import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Zap } from 'lucide-react';
import { cn, CustomFoxIcon } from '../lib/utils.tsx';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Services', path: '/services' },
  { name: 'Case Studies', path: '/case-studies' },
  { name: 'About', path: '/about' },
  { name: 'Contact', path: '/contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [isScrolled, setIsScrolled] = React.useState(false);
  const location = useLocation();

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
      isScrolled ? "bg-brand-bg/40 backdrop-blur-xl border-b border-white/10 h-16 shadow-[0_4px_30px_rgba(0,0,0,0.3)]" : "bg-transparent h-24"
    )}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="flex items-center justify-between h-full">
          <Link to="/" className="flex items-center gap-3 group">
            <div className="relative">
              <CustomFoxIcon className="w-9 h-9 text-brand-accent transition-transform group-hover:scale-110 duration-500" />
              <div className="absolute inset-0 bg-brand-accent/30 blur-xl rounded-full -z-10 group-hover:bg-brand-accent/50 transition-all duration-500" />
            </div>
            <span className="text-2xl font-display font-bold tracking-tight">
              Conversion<span className="text-brand-accent">Foxx</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={cn(
                  "text-sm font-bold uppercase tracking-widest transition-all nav-link-glow",
                  location.pathname === link.path ? "text-brand-accent" : "text-brand-muted hover:text-brand-text"
                )}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/contact"
              className="px-7 py-3 bg-brand-accent text-brand-bg font-bold rounded-full text-sm hover:shadow-[0_0_30px_rgba(255,106,61,0.6)] transition-all active:scale-95"
            >
              Get Audit
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-brand-text hover:text-brand-accent transition-colors glass-card"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-brand-bg/95 backdrop-blur-2xl border-b border-white/10 px-4 pt-4 pb-10 overflow-hidden"
          >
            <div className="flex flex-col gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "text-xl font-display font-bold py-2 border-b border-white/5",
                    location.pathname === link.path ? "text-brand-accent" : "text-brand-muted"
                  )}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                to="/contact"
                onClick={() => setIsOpen(false)}
                className="w-full py-4 bg-brand-accent text-brand-bg font-bold rounded-2xl text-center text-lg shadow-lg"
              >
                Get Free Growth Audit
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
