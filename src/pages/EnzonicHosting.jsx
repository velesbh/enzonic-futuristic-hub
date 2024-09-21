import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Zap, Shield, HeadphonesIcon, Cpu, Server, CreditCard } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { plans } from '../data/hostingPlans';
import PlanWizard from '../components/PlanWizard';
import { Link } from 'react-router-dom';
import { TypeAnimation } from 'react-type-animation';
import { AnimatedBackground, FloatingElement, GlowingButton } from '../components/AnimatedComponents';
import PlanCard from '../components/PlanCard';
import FeatureCard from '../components/FeatureCard';

const EnzonicHosting = () => {
  const [showPlanWizard, setShowPlanWizard] = useState(false);

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <AnimatedBackground />
      <Header />
      <main className="container mx-auto px-4 py-16">
        <motion.section 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <FloatingElement>
            <h1 className="text-6xl font-bold mb-4 text-green-400">Enzonic Hosting</h1>
          </FloatingElement>
          <motion.div 
            className="text-2xl mb-8 h-20 text-gray-300"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <TypeAnimation
              sequence={[
                'Powerful, Reliable, and Affordable Game Servers',
                1000,
                'High-Performance Minecraft Hosting',
                1000,
                'Customizable Server Solutions',
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </motion.div>
          <div className="flex justify-center space-x-4">
            <Button 
              as="a" 
              href="https://panel.enzonic.xyz/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-blue-500 hover:bg-blue-600 text-white"
            >
              <Server className="mr-2 h-4 w-4" /> Panel
            </Button>
            <Button 
              as="a" 
              href="https://billing.enzonic.xyz/home" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-green-500 hover:bg-green-600 text-white"
            >
              <CreditCard className="mr-2 h-4 w-4" /> Billing
            </Button>
          </div>
        </motion.section>

        <Features />

        <MinecraftHosting setShowPlanWizard={setShowPlanWizard} />

        <CustomPlanSection />

      </main>
      {showPlanWizard && <PlanWizard onClose={() => setShowPlanWizard(false)} />}
      <Footer />
    </div>
  );
};

const Features = () => (
  <motion.section 
    className="mb-16"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, delay: 0.2 }}
  >
    <h2 className="text-4xl font-bold mb-8 text-center text-green-400">Why Choose Enzonic Hosting?</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      <FeatureCard icon={Zap} title="Lightning Fast" description="Experience blazing fast speeds with our optimized infrastructure." />
      <FeatureCard icon={Shield} title="Ironclad Security" description="Your data is protected with state-of-the-art security measures." />
      <FeatureCard icon={HeadphonesIcon} title="24/7 Support" description="Our expert team is always ready to assist you, anytime." />
      <FeatureCard icon={Cpu} title="High-Performance Hardware" description="Top-tier servers ensure smooth gameplay and minimal lag." />
    </div>
  </motion.section>
);

const MinecraftHosting = ({ setShowPlanWizard }) => (
  <motion.section 
    className="mb-16"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, delay: 0.4 }}
  >
    <h2 className="text-4xl font-bold mb-8 text-center text-green-400">Our Minecraft Hosting Plans</h2>
    <div className="text-center mb-8">
      <GlowingButton onClick={() => setShowPlanWizard(true)}>Find Your Perfect Plan</GlowingButton>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {plans.minecraft.budget.plans.map((plan, index) => (
        <PlanCard key={index} {...plan} />
      ))}
    </div>
  </motion.section>
);

const CustomPlanSection = () => (
  <motion.section 
    className="text-center mb-16"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, delay: 0.6 }}
  >
    <h2 className="text-4xl font-bold mb-4 text-green-400">Need a Custom Plan?</h2>
    <p className="text-xl text-gray-300 mb-8">We can tailor a hosting solution to meet your specific requirements.</p>
    <Link to="/custom-plan">
      <GlowingButton>Request Custom Plan</GlowingButton>
    </Link>
  </motion.section>
);

export default EnzonicHosting;
