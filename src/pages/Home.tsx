import Hero from '../components/Hero';
import TrustStrip from '../components/TrustStrip';
import ProblemStatement from '../components/ProblemStatement';
import GrowthSystem from '../components/GrowthSystem';
import Services from '../components/Services';
import HowItWorks from '../components/HowItWorks';
import CaseStudies from '../components/CaseStudies';
import WhyChooseUs from '../components/WhyChooseUs';
import CTASection from '../components/CTASection';
import { motion } from 'motion/react';

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Hero />
      <TrustStrip />
      <ProblemStatement />
      <GrowthSystem />
      <Services />
      <HowItWorks />
      <CaseStudies />
      <WhyChooseUs />
      <CTASection />
    </motion.div>
  );
}
