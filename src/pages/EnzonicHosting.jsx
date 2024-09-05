import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { TypeAnimation } from 'react-type-animation';
import { Link } from 'react-router-dom';
import { Settings, Server, Clock, Shield, HeadphonesIcon, Cpu, HardDrive, Zap } from 'lucide-react';
import { AnimatedBackground, FloatingElement, FeatureCard, PlanCard, PlanComparison } from '../components/HostingComponents';
import PlanSelector from '../components/PlanSelector';
import { plans } from '../data/hostingPlans';

const EnzonicHosting = () => {
  const [selectedPlan, setSelectedPlan] = useState('minecraft');
  const [selectedTier, setSelectedTier] = useState('budget');

  const renderPlans = () => {
    const currentPlans = selectedPlan === 'minecraft' ? plans.minecraft[selectedTier] : plans[selectedPlan];
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {currentPlans.map((plan, index) => (
          <PlanCard key={index} {...plan} isExtreme={selectedTier === 'extreme'} />
        ))}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white relative overflow-hidden">
      <AnimatedBackground />
      <Header />
      <main className="container mx-auto px-4 py-32 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <FloatingElement>
            <motion.h1 
              className="text-7xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-green-500 to-green-600"
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Enzonic Hosting
            </motion.h1>
          </FloatingElement>
          <motion.div 
            className="text-2xl mb-8 text-green-300 h-20"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <TypeAnimation
              sequence={[
                'Powerful and reliable hosting solutions',
                1000,
                'Game servers, web hosting, and more',
                1000,
                'Tailored for your needs',
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </motion.div>
          <div className="flex justify-center space-x-4 flex-wrap">
            <Link to="/">
              <Button variant="outline" className="m-2 text-white border-green-500 bg-gradient-to-r from-green-600 to-green-400 hover:from-green-500 hover:to-green-300 transition-all duration-300 ease-in-out transform hover:shadow-lg hover:shadow-green-500/30">
                Home
              </Button>
            </Link>
            <a href="https://panel.enzonic.xyz" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" className="m-2 text-white border-green-500 bg-gradient-to-r from-green-600 to-green-400 hover:from-green-500 hover:to-green-300 transition-all duration-300 ease-in-out transform hover:shadow-lg hover:shadow-green-500/30">
                Game Panel
              </Button>
            </a>
            <a href="https://webpanel.enzonic.xyz" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" className="m-2 text-white border-green-500 bg-gradient-to-r from-green-600 to-green-400 hover:from-green-500 hover:to-green-300 transition-all duration-300 ease-in-out transform hover:shadow-lg hover:shadow-green-500/30">
                Webhosting Panel
              </Button>
            </a>
            <a href="https://vps.enzonic.xyz" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" className="m-2 text-white border-green-500 bg-gradient-to-r from-green-600 to-green-400 hover:from-green-500 hover:to-green-300 transition-all duration-300 ease-in-out transform hover:shadow-lg hover:shadow-green-500/30">
                VPS Panel
              </Button>
            </a>
          </div>
        </motion.div>
        
        <section className="mb-16">
          <h2 className="text-4xl font-bold mb-8 text-center text-white">Our Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard title="99.9% Uptime" description="We guarantee your services will be available 99.9% of the time" icon={Clock} />
            <FeatureCard title="DDoS Protection" description="Advanced protection against DDoS attacks" icon={Shield} />
            <FeatureCard title="24/7 Support" description="Our team is always ready to help you" icon={HeadphonesIcon} />
            <FeatureCard title="Scalable Resources" description="Easily upgrade your plan as your needs grow" icon={Zap} />
            <FeatureCard title="SSD Storage" description="Lightning-fast SSD storage for all plans" icon={HardDrive} />
            <FeatureCard title="Custom Solutions" description="Tailored hosting solutions for your specific needs" icon={Settings} />
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-4xl font-bold mb-8 text-center text-white">Our Plans</h2>
          <PlanSelector
            selectedPlan={selectedPlan}
            setSelectedPlan={setSelectedPlan}
            selectedTier={selectedTier}
            setSelectedTier={setSelectedTier}
          />
          {renderPlans()}
          {selectedPlan === 'minecraft' && (
            <>
              <div className="text-center mt-8">
                <Button variant="outline" className="text-white border-white bg-gray-800 hover:bg-gray-700 hover:text-gray-200">
                  Contact Us for Custom Plan
                </Button>
              </div>
              <div className="text-center mt-4">
                <PlanComparison />
              </div>
            </>
          )}
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default EnzonicHosting;