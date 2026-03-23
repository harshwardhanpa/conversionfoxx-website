import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'motion/react';
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
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
      isScrolled ? "bg-brand-bg/80 backdrop-blur-md border-b border-white/5 h-16" : "bg-transparent h-20"
    )}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="flex items-center justify-between h-full">
          <Link to="/" className="flex items-center gap-2 group">
            <div className="relative">
              <CustomFoxIcon className="w-8 h-8 text-brand-accent transition-transform group-hover:scale-110" />
              <div className="absolute inset-0 bg-brand-accent/20 blur-lg rounded-full -z-10 group-hover:bg-brand-accent/40 transition-all" />
            </div>
            <span className="text-xl font-display font-bold tracking-tight">
              Conversion<span className="text-brand-accent">Foxx</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={cn(
                  "text-sm font-medium transition-colors nav-link-glow",
                  location.pathname === link.path ? "text-brand-accent" : "text-brand-muted"
                )}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/contact"
              className="px-5 py-2.5 bg-brand-accent text-brand-bg font-bold rounded-full text-sm hover:shadow-[0_0_20px_rgba(255,106,61,0.6)] transition-all active:scale-95"
            >
              Get Audit
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-brand-text hover:text-brand-accent transition-colors"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-brand-bg-secondary border-b border-white/5 px-4 pt-2 pb-6"
        >
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={cn(
                  "text-lg font-medium py-2",
                  location.pathname === link.path ? "text-brand-accent" : "text-brand-muted"
                )}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setIsOpen(false)}
              className="w-full py-3 bg-brand-accent text-brand-bg font-bold rounded-xl text-center"
            >
              Get Free Growth Audit
            </Link>
          </div>
        </motion.div>
      )}
    </nav>
  );
}
