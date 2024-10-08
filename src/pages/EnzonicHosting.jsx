import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { plans } from '../data/hostingPlans';
import PlanWizard from '../components/PlanWizard';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { motion } from 'framer-motion';
import { AnimatedBackground, GlowingButton, FloatingElement } from '../components/AnimatedComponents';
import { Server, Shield, Zap, Clock } from 'lucide-react';

const EnzonicHosting = () => {
  const [showPlanWizard, setShowPlanWizard] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState(null);

  const handlePlanSelect = (plan) => {
    setSelectedPlan(plan);
    setShowPlanWizard(true);
  };

  const handleOrder = (location) => {
    const planLinks = {
      'Minecraft Proxy Plan': 'https://billing.enzonic.xyz/checkout/config/1',
      'Minecraft Dirt Plan': 'https://billing.enzonic.xyz/checkout/config/2',
      'Minecraft Iron Plan': 'https://billing.enzonic.xyz/checkout/config/3',
      'Minecraft Copper Plan': 'https://billing.enzonic.xyz/checkout/config/4',
      'Minecraft Gold Plan': 'https://billing.enzonic.xyz/checkout/config/5',
      'Minecraft Diamond Plan': 'https://billing.enzonic.xyz/checkout/config/6',
    };

    if (location === 'europe' && selectedPlan && planLinks[selectedPlan.title]) {
      window.location.href = planLinks[selectedPlan.title];
    } else if (location === 'usa') {
      alert('USA location is not available at the moment.');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white relative overflow-hidden">
      <AnimatedBackground />
      <Header />
      <main className="container mx-auto px-4 py-32 relative z-10">
        <HeroSection />
        <Features />
        <MinecraftHosting handlePlanSelect={handlePlanSelect} />
        <CustomPlanSection />
      </main>
      {showPlanWizard && (
        <PlanWizard
          onClose={() => setShowPlanWizard(false)}
          selectedPlan={selectedPlan?.title}
          onOrder={handleOrder}
        />
      )}
      <Footer />
    </div>
  );
};

const HeroSection = () => (
  <motion.section 
    className="text-center mb-16"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
  >
    <FloatingElement>
      <h1 className="text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500">Enzonic Hosting</h1>
    </FloatingElement>
    <p className="text-2xl mb-8 text-gray-300">
      Powerful, Reliable, and Affordable Game Servers
    </p>
    <div className="flex justify-center space-x-4">
      <a href="https://panel.enzonic.xyz/" target="_blank" rel="noopener noreferrer">
        <GlowingButton className="bg-blue-500 hover:bg-blue-600 text-white">
          Panel
        </GlowingButton>
      </a>
      <a href="https://billing.enzonic.xyz/home" target="_blank" rel="noopener noreferrer">
        <GlowingButton className="bg-green-500 hover:bg-green-600 text-white">
          Billing
        </GlowingButton>
      </a>
    </div>
  </motion.section>
);

const FeatureCard = ({ icon: Icon, title, description }) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    transition={{ type: "spring", stiffness: 300 }}
  >
    <Card className="bg-gradient-to-br from-gray-800 to-gray-900 border-green-500 h-full">
      <CardHeader>
        <Icon className="w-12 h-12 text-green-400 mb-4" />
        <CardTitle className="text-green-300">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-gray-300">{description}</p>
      </CardContent>
    </Card>
  </motion.div>
);

const Features = () => (
  <section className="mb-16">
    <h2 className="text-4xl font-bold mb-8 text-center text-green-400">Why Choose Enzonic Hosting?</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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
        icon={Clock} 
        title="24/7 Support" 
        description="Our expert team is always ready to assist you, anytime." 
      />
      <FeatureCard 
        icon={Server} 
        title="High-Performance Hardware" 
        description="Top-tier servers ensure smooth gameplay and minimal lag." 
      />
    </div>
  </section>
);

const PlanCard = ({ plan, onSelect }) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    transition={{ type: "spring", stiffness: 300 }}
  >
    <Card className="bg-gradient-to-br from-gray-800 to-gray-900 border-2 border-green-500 transition-all h-full">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-green-400">{plan.title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-4xl font-bold text-white mb-6">${plan.price}<span className="text-lg text-gray-400">/month</span></p>
        <ul className="space-y-2 mb-6">
          {plan.features.map((feature, index) => (
            <li key={index} className="flex items-center text-gray-300">
              <Zap className="w-5 h-5 text-green-400 mr-2" />
              {feature}
            </li>
          ))}
        </ul>
        <p className="text-sm text-gray-300 mb-4">{plan.description}</p>
        <GlowingButton className="w-full bg-green-500 hover:bg-green-600 text-black font-bold" onClick={() => onSelect(plan)}>Order Now</GlowingButton>
      </CardContent>
    </Card>
  </motion.div>
);

const MinecraftHosting = ({ handlePlanSelect }) => (
  <section className="mb-16">
    <h2 className="text-4xl font-bold mb-8 text-center text-green-400">Our Minecraft Hosting Plans</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {plans.minecraft.budget.plans.map((plan, index) => (
        <PlanCard key={index} plan={plan} onSelect={handlePlanSelect} />
      ))}
    </div>
  </section>
);

const CustomPlanSection = () => (
  <motion.section 
    className="text-center mb-16"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: 0.2 }}
  >
    <h2 className="text-4xl font-bold mb-4 text-green-400">Need a Custom Plan?</h2>
    <p className="text-xl text-gray-300 mb-8">We can tailor a hosting solution to meet your specific requirements.</p>
    <Link to="/custom-plan">
      <GlowingButton className="bg-purple-500 hover:bg-purple-600 text-white">Request Custom Plan</GlowingButton>
    </Link>
  </motion.section>
);

export default EnzonicHosting;