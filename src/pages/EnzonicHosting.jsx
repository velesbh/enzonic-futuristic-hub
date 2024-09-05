import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { TypeAnimation } from 'react-type-animation';
import { Tabs, TabList, Tab, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { Zap, Shield, HeadphonesIcon } from 'lucide-react';
import { plans, planComparison } from '../data/hostingPlans';
import PlanComparisonPopup from '../components/PlanComparisonPopup';
import { AnimatedBackground, FloatingElement, FeatureCard, PlanCard, GlowingButton } from '../components/AnimatedComponents';

const EnzonicHosting = () => {
  const [isComparisonPopupOpen, setIsComparisonPopupOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-blue-900 to-gray-900 text-white">
      <AnimatedBackground />
      <Header />
      <main className="container mx-auto px-4 py-16 relative z-10">
        <motion.section 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <FloatingElement>
            <motion.h1 
              className="text-6xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Enzonic Hosting
            </motion.h1>
          </FloatingElement>
          <motion.div 
            className="text-2xl mb-8 text-gray-300 h-20"
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
            <GlowingButton variant="outline" onClick={() => setIsComparisonPopupOpen(true)}>
              Compare Plans
            </GlowingButton>
          </motion.div>
        </motion.section>

        <motion.section 
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h2 className="text-4xl font-bold mb-8 text-center">Why Choose Enzonic Hosting?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard 
              icon={Zap} 
              title="Lightning Fast" 
              description="Experience blazing fast speeds with our optimized infrastructure."
            />
            <FeatureCard 
              icon={Shield} 
              title="Ironclad Security" 
              description="Your data is protected with state-of-the-art security measures."
            />
            <FeatureCard 
              icon={HeadphonesIcon} 
              title="24/7 Support" 
              description="Our expert team is always ready to assist you, anytime."
            />
          </div>
        </motion.section>

        <motion.section 
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h2 className="text-4xl font-bold mb-8 text-center">Our Minecraft Hosting Solutions</h2>
          <Tabs>
            <TabList className="flex justify-center mb-8">
              <Tab className="px-4 py-2 text-lg cursor-pointer hover:text-blue-400 transition-colors duration-300">Budget</Tab>
              <Tab className="px-4 py-2 text-lg cursor-pointer hover:text-blue-400 transition-colors duration-300">Normal</Tab>
              <Tab className="px-4 py-2 text-lg cursor-pointer hover:text-blue-400 transition-colors duration-300">Extreme</Tab>
            </TabList>

            {['budget', 'normal', 'extreme'].map((tier) => (
              <TabPanel key={tier}>
                <p className="text-center text-xl mb-8">{plans.minecraft[tier].description}</p>
                {tier === 'extreme' && (
                  <p className="text-center text-red-500 font-bold mb-8">{plans.minecraft[tier].disclaimer}</p>
                )}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {plans.minecraft[tier].plans.map((plan, index) => (
                    <PlanCard key={index} {...plan} />
                  ))}
                </div>
              </TabPanel>
            ))}
          </Tabs>
        </motion.section>

        <motion.section 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <h2 className="text-4xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl text-gray-300 mb-8">Join thousands of satisfied customers and experience the Enzonic difference today!</p>
          <GlowingButton>Sign Up Now</GlowingButton>
        </motion.section>
      </main>
      <Footer />
      <PlanComparisonPopup isOpen={isComparisonPopupOpen} onClose={() => setIsComparisonPopupOpen(false)} planComparison={planComparison} />
    </div>
  );
};

export default EnzonicHosting;