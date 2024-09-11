import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { Tabs, TabList, Tab, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { Zap, Shield, HeadphonesIcon, Cpu, Globe, DollarSign, Award, Server, Rocket, Mic } from 'lucide-react';
import { plans, planComparison } from '../data/hostingPlans';
import PlanComparisonPopup from '../components/PlanComparisonPopup';
import { AnimatedBackground, FloatingElement, FeatureCard, PlanCard, GlowingButton, ScrollToTopButton, AnimatedGrid, HeroText } from '../components/AnimatedComponents';
import { Link } from 'react-router-dom';

const EnzonicHosting = () => {
  const [isComparisonPopupOpen, setIsComparisonPopupOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('minecraft');

  const additionalIcons = [Cpu, Server, Globe, HeadphonesIcon];

  return (
    <div className="min-h-screen bg-black text-green-400">
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
          <Tabs>
            <TabList className="flex justify-center mb-8">
              <Tab className="px-4 py-2 text-lg cursor-pointer hover:text-green-300 transition-colors duration-300" onClick={() => setSelectedCategory('minecraft')}>Minecraft</Tab>
              <Tab className="px-4 py-2 text-lg cursor-pointer hover:text-green-300 transition-colors duration-300" onClick={() => setSelectedCategory('voice')}>Voice Servers</Tab>
            </TabList>

            <TabPanel>
              <Tabs>
                <TabList className="flex justify-center mb-8">
                  <Tab className="px-4 py-2 text-lg cursor-pointer hover:text-green-300 transition-colors duration-300">Budget</Tab>
                  <Tab className="px-4 py-2 text-lg cursor-pointer hover:text-green-300 transition-colors duration-300">Normal</Tab>
                  <Tab className="px-4 py-2 text-lg cursor-pointer hover:text-green-300 transition-colors duration-300">Extreme</Tab>
                </TabList>

                {['budget', 'normal', 'extreme'].map((tier) => (
                  <TabPanel key={tier}>
                    <p className="text-center text-xl mb-8 text-green-300">{plans.minecraft[tier].description}</p>
                    {tier === 'extreme' && (
                      <p className="text-center text-yellow-400 font-bold mb-8">{plans.minecraft[tier].disclaimer}</p>
                    )}
                    <AnimatedGrid>
                      {plans.minecraft[tier].plans.map((plan, index) => (
                        <PlanCard key={index} {...plan} />
                      ))}
                    </AnimatedGrid>
                  </TabPanel>
                ))}
              </Tabs>
              <div className="mt-8 text-center">
                <GlowingButton variant="outline" onClick={() => setIsComparisonPopupOpen(true)}>
                  Compare Plans
                </GlowingButton>
              </div>
            </TabPanel>

            <TabPanel>
              <p className="text-center text-xl mb-8 text-green-300">{plans.voiceservers.description}</p>
              <AnimatedGrid>
                {plans.voiceservers.plans.map((plan, index) => (
                  <PlanCard key={index} {...plan} />
                ))}
              </AnimatedGrid>
            </TabPanel>
          </Tabs>
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
      {selectedCategory === 'minecraft' && (
        <PlanComparisonPopup isOpen={isComparisonPopupOpen} onClose={() => setIsComparisonPopupOpen(false)} planComparison={planComparison} />
      )}
    </div>
  );
};

export default EnzonicHosting;