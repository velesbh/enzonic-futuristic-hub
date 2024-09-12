import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { Tabs, TabList, Tab, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { Zap, Shield, HeadphonesIcon, Cpu, Globe, DollarSign, Award, Server } from 'lucide-react';
import { plans, planComparison } from '../data/hostingPlans';
import PlanComparisonPopup from '../components/PlanComparisonPopup';
import { AnimatedBackground, FloatingElement, FeatureCard, GlowingButton, ScrollToTopButton, AnimatedGrid, HeroText } from '../components/AnimatedComponents';
import { Link } from 'react-router-dom';
import PlanSelector from '../components/PlanSelector';

const EnzonicHosting = () => {
  const [isComparisonPopupOpen, setIsComparisonPopupOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('minecraft');
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [selectedTier, setSelectedTier] = useState('budget');

  const additionalIcons = [Cpu, Server, Globe, HeadphonesIcon];

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <AnimatedBackground additionalIcons={additionalIcons} />
      <Header />
      <ScrollToTopButton />
      <main className="container mx-auto px-4 py-16 relative z-10">
        <motion.section 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <FloatingElement>
            <motion.h1 
              className="text-6xl font-bold mb-4 text-green-400"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Enzonic Hosting
            </motion.h1>
          </FloatingElement>
          <motion.div 
            className="text-2xl mb-8 text-green-300 h-20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <TypeAnimation
              sequence={[
                'Powerful servers for your games',
                1000,
                'Lightning-fast web hosting',
                1000,
                'Reliable VPS solutions',
                1000,
                'Crystal-clear voice servers',
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <GlowingButton className="mr-4">Get Started</GlowingButton>
            <Link to="/custom-plan">
              <GlowingButton variant="outline">Request Custom Plan</GlowingButton>
            </Link>
          </motion.div>
        </motion.section>

        <HeroText />

        <motion.section 
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h2 className="text-4xl font-bold mb-8 text-center text-green-400">Why Choose Enzonic Hosting?</h2>
          <AnimatedGrid>
            <FeatureCard icon={Zap} title="Lightning Fast" description="Experience blazing fast speeds with our optimized infrastructure." />
            <FeatureCard icon={Shield} title="Ironclad Security" description="Your data is protected with state-of-the-art security measures." />
            <FeatureCard icon={HeadphonesIcon} title="24/7 Support" description="Our expert team is always ready to assist you, anytime." />
            <FeatureCard icon={Cpu} title="High-Performance Hardware" description="Top-tier servers ensure smooth gameplay and minimal lag." />
            <FeatureCard icon={Globe} title="Global Network" description="Servers located worldwide for low-latency gaming experiences." />
            <FeatureCard icon={DollarSign} title="Competitive Pricing" description="Premium hosting at affordable rates to fit any budget." />
            <FeatureCard icon={Award} title="Reliability Guaranteed" description="99.9% uptime SLA for uninterrupted gaming sessions." />
            <FeatureCard icon={Server} title="Scalable Resources" description="Easily upgrade your plan as your needs grow." />
          </AnimatedGrid>
        </motion.section>

        <motion.section 
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h2 className="text-4xl font-bold mb-8 text-center text-green-400">Our Hosting Solutions</h2>
          <PlanSelector
            selectedPlan={selectedPlan}
            setSelectedPlan={setSelectedPlan}
            selectedTier={selectedTier}
            setSelectedTier={setSelectedTier}
          />
          <div className="mt-8 text-center">
            <GlowingButton variant="outline" onClick={() => setIsComparisonPopupOpen(true)}>
              Compare All Plans
            </GlowingButton>
          </div>
        </motion.section>

        <motion.section 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <h2 className="text-4xl font-bold mb-4 text-green-400">Ready to Get Started?</h2>
          <p className="text-xl text-green-300 mb-8">Join thousands of satisfied customers and experience the Enzonic difference today!</p>
          <GlowingButton>Sign Up Now</GlowingButton>
        </motion.section>
      </main>
      <Footer />
      <PlanComparisonPopup isOpen={isComparisonPopupOpen} onClose={() => setIsComparisonPopupOpen(false)} planComparison={planComparison} />
    </div>
  );
};

export default EnzonicHosting;