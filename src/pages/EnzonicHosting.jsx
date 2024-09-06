import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { Tabs, TabList, Tab, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { Zap, Shield, HeadphonesIcon, Cpu, Globe, Clock, DollarSign, Award } from 'lucide-react';
import { plans, planComparison } from '../data/hostingPlans';
import PlanComparisonPopup from '../components/PlanComparisonPopup';
import { AnimatedBackground, FloatingElement, FeatureCard, PlanCard, GlowingButton, ScrollToTopButton, AnimatedGrid, AnimatedQuote } from '../components/AnimatedComponents';

const EnzonicHosting = () => {
  const [isComparisonPopupOpen, setIsComparisonPopupOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState('minecraft');

  const quotes = [
    { text: "Our goal is to bring the most affordable, simplest, and easiest hosting solutions to gamers worldwide.", name: "Steve", avatar: "/minecraft-steve.png" },
    { text: "Empowering players with top-notch server performance for an unparalleled gaming experience.", name: "Rust Survivor", avatar: "/rust-player.png" },
    { text: "Providing the backbone for epic battles and unforgettable moments in your favorite games.", name: "CS:GO Agent", avatar: "/csgo-player.png" },
    { text: "Building worlds and fostering communities with reliable and powerful hosting.", name: "Garry's Mod Player", avatar: "/gmod-player.png" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-900 via-green-800 to-green-900 text-white">
      <AnimatedBackground />
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
              className="text-6xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-green-200"
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

        <AnimatedQuote quotes={quotes} />

        <motion.section 
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h2 className="text-4xl font-bold mb-8 text-center">Why Choose Enzonic Hosting?</h2>
          <AnimatedGrid>
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
            <FeatureCard 
              icon={Cpu} 
              title="High-Performance Hardware" 
              description="Top-tier servers ensure smooth gameplay and minimal lag."
            />
            <FeatureCard 
              icon={Globe} 
              title="Global Network" 
              description="Servers located worldwide for low-latency gaming experiences."
            />
            <FeatureCard 
              icon={Clock} 
              title="Instant Setup" 
              description="Get your server up and running in minutes, not hours."
            />
            <FeatureCard 
              icon={DollarSign} 
              title="Competitive Pricing" 
              description="Premium hosting at affordable rates to fit any budget."
            />
            <FeatureCard 
              icon={Award} 
              title="Reliability Guaranteed" 
              description="99.9% uptime SLA for uninterrupted gaming sessions."
            />
          </AnimatedGrid>
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
              <Tab className="px-4 py-2 text-lg cursor-pointer hover:text-green-400 transition-colors duration-300">Budget</Tab>
              <Tab className="px-4 py-2 text-lg cursor-pointer hover:text-green-400 transition-colors duration-300">Normal</Tab>
              <Tab className="px-4 py-2 text-lg cursor-pointer hover:text-green-400 transition-colors duration-300">Extreme</Tab>
            </TabList>

            {['budget', 'normal', 'extreme'].map((tier) => (
              <TabPanel key={tier}>
                <p className="text-center text-xl mb-8">{plans.minecraft[tier].description}</p>
                {tier === 'extreme' && (
                  <p className="text-center text-red-500 font-bold mb-8">{plans.minecraft[tier].disclaimer}</p>
                )}
                <AnimatedGrid>
                  {plans.minecraft[tier].plans.map((plan, index) => (
                    <PlanCard key={index} {...plan} />
                  ))}
                </AnimatedGrid>
              </TabPanel>
            ))}
          </Tabs>
        </motion.section>

        <motion.section 
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <h2 className="text-4xl font-bold mb-8 text-center">How Do We Stack Up?</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr>
                  <th className="py-4 px-6 bg-green-800 font-bold uppercase text-sm text-green-200 border-b border-green-600">Feature</th>
                  <th className="py-4 px-6 bg-green-800 font-bold uppercase text-sm text-green-200 border-b border-green-600">Enzonic</th>
                  <th className="py-4 px-6 bg-green-800 font-bold uppercase text-sm text-green-200 border-b border-green-600">Competitor A</th>
                  <th className="py-4 px-6 bg-green-800 font-bold uppercase text-sm text-green-200 border-b border-green-600">Competitor B</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="py-4 px-6 border-b border-green-600">Price per GB RAM</td>
                  <td className="py-4 px-6 border-b border-green-600 text-green-300 font-semibold">$0.90 - $3.00</td>
                  <td className="py-4 px-6 border-b border-green-600">$1.20 - $3.50</td>
                  <td className="py-4 px-6 border-b border-green-600">$1.00 - $4.00</td>
                </tr>
                <tr>
                  <td className="py-4 px-6 border-b border-green-600">CPU Type</td>
                  <td className="py-4 px-6 border-b border-green-600 text-green-300 font-semibold">AMD EPYC 7R17 / i9-9900K</td>
                  <td className="py-4 px-6 border-b border-green-600">Intel Xeon</td>
                  <td className="py-4 px-6 border-b border-green-600">AMD Ryzen</td>
                </tr>
                <tr>
                  <td className="py-4 px-6 border-b border-green-600">DDoS Protection</td>
                  <td className="py-4 px-6 border-b border-green-600 text-green-300 font-semibold">Included</td>
                  <td className="py-4 px-6 border-b border-green-600">Extra Cost</td>
                  <td className="py-4 px-6 border-b border-green-600">Basic</td>
                </tr>
                <tr>
                  <td className="py-4 px-6 border-b border-green-600">24/7 Support</td>
                  <td className="py-4 px-6 border-b border-green-600 text-green-300 font-semibold">Yes</td>
                  <td className="py-4 px-6 border-b border-green-600">Limited Hours</td>
                  <td className="py-4 px-6 border-b border-green-600">Yes</td>
                </tr>
                <tr>
                  <td className="py-4 px-6 border-b border-green-600">Instant Setup</td>
                  <td className="py-4 px-6 border-b border-green-600 text-green-300 font-semibold">Yes</td>
                  <td className="py-4 px-6 border-b border-green-600">No</td>
                  <td className="py-4 px-6 border-b border-green-600">Yes</td>
                </tr>
              </tbody>
            </table>
          </div>
        </motion.section>

        <motion.section 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <h2 className="text-4xl font-bold mb-4">Ready to Get Started?</h2>
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