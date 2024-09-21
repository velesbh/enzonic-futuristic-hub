import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { plans } from '../data/hostingPlans';
import PlanWizard from '../components/PlanWizard';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { motion } from 'framer-motion';
import { AnimatedBackground, GlowingButton } from '../components/AnimatedComponents';

const EnzonicHosting = () => {
  const [showPlanWizard, setShowPlanWizard] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white relative overflow-hidden">
      <AnimatedBackground />
      <Header />
      <main className="container mx-auto px-4 py-16 relative z-10">
        <HeroSection />
        <Features />
        <MinecraftHosting setShowPlanWizard={setShowPlanWizard} />
        <CustomPlanSection />
      </main>
      {showPlanWizard && <PlanWizard onClose={() => setShowPlanWizard(false)} />}
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
    <h1 className="text-6xl font-bold mb-4 text-green-400">Enzonic Hosting</h1>
    <p className="text-2xl mb-8 text-gray-300">
      Powerful, Reliable, and Affordable Game Servers
    </p>
    <div className="flex justify-center space-x-4">
      <a href="https://panel.enzonic.xyz/" target="_blank" rel="noopener noreferrer">
        <Button className="bg-blue-500 hover:bg-blue-600 text-white">
          Panel
        </Button>
      </a>
      <a href="https://billing.enzonic.xyz/home" target="_blank" rel="noopener noreferrer">
        <Button className="bg-green-500 hover:bg-green-600 text-white">
          Billing
        </Button>
      </a>
    </div>
  </motion.section>
);

const FeatureCard = ({ title, description }) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    transition={{ type: "spring", stiffness: 300 }}
  >
    <Card className="bg-gray-800 border-green-500 h-full">
      <CardHeader>
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
      <FeatureCard title="Lightning Fast" description="Experience blazing fast speeds with our optimized infrastructure." />
      <FeatureCard title="Ironclad Security" description="Your data is protected with state-of-the-art security measures." />
      <FeatureCard title="24/7 Support" description="Our expert team is always ready to assist you, anytime." />
      <FeatureCard title="High-Performance Hardware" description="Top-tier servers ensure smooth gameplay and minimal lag." />
    </div>
  </section>
);

const PlanCard = ({ title, price, features, description }) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    transition={{ type: "spring", stiffness: 300 }}
  >
    <Card className="bg-gray-800 border-2 border-gray-700 hover:border-green-400 transition-all h-full">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-green-400">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-4xl font-bold text-white mb-6">{price}<span className="text-lg text-gray-400">/month</span></p>
        <ul className="space-y-2 mb-6">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center text-gray-300">
              {feature}
            </li>
          ))}
        </ul>
        <p className="text-sm text-gray-300 mb-4">{description}</p>
        <Button className="w-full bg-green-500 hover:bg-green-600 text-black font-bold">Order Now</Button>
      </CardContent>
    </Card>
  </motion.div>
);

const MinecraftHosting = ({ setShowPlanWizard }) => (
  <section className="mb-16">
    <h2 className="text-4xl font-bold mb-8 text-center text-green-400">Our Minecraft Hosting Plans</h2>
    <div className="text-center mb-8">
      <Button onClick={() => setShowPlanWizard(true)} className="bg-green-500 hover:bg-green-600 text-white">
        Find Your Perfect Plan
      </Button>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {plans.minecraft.budget.plans.map((plan, index) => (
        <PlanCard key={index} {...plan} />
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
      <Button className="bg-purple-500 hover:bg-purple-600 text-white">Request Custom Plan</Button>
    </Link>
  </motion.section>
);

export default EnzonicHosting;
