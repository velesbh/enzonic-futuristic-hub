import React, { useState } from 'react';
import { Zap, Shield, HeadphonesIcon, Cpu, Server, CreditCard } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { plans } from '../data/hostingPlans';
import PlanWizard from '../components/PlanWizard';
import { Link } from 'react-router-dom';
import PlanCard from '../components/PlanCard';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const EnzonicHosting = () => {
  const [showPlanWizard, setShowPlanWizard] = useState(false);

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Header />
      <main className="container mx-auto px-4 py-16">
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
  <section className="text-center mb-16">
    <h1 className="text-6xl font-bold mb-4 text-green-400">Enzonic Hosting</h1>
    <p className="text-2xl mb-8 text-gray-300">
      Powerful, Reliable, and Affordable Game Servers
    </p>
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
  </section>
);

const FeatureCard = ({ icon: Icon, title, description }) => (
  <Card className="bg-gray-800">
    <CardHeader>
      <Icon className="h-12 w-12 text-green-400 mb-2" />
      <CardTitle>{title}</CardTitle>
    </CardHeader>
    <CardContent>
      <p className="text-gray-300">{description}</p>
    </CardContent>
  </Card>
);

const Features = () => (
  <section className="mb-16">
    <h2 className="text-4xl font-bold mb-8 text-center text-green-400">Why Choose Enzonic Hosting?</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      <FeatureCard icon={Zap} title="Lightning Fast" description="Experience blazing fast speeds with our optimized infrastructure." />
      <FeatureCard icon={Shield} title="Ironclad Security" description="Your data is protected with state-of-the-art security measures." />
      <FeatureCard icon={HeadphonesIcon} title="24/7 Support" description="Our expert team is always ready to assist you, anytime." />
      <FeatureCard icon={Cpu} title="High-Performance Hardware" description="Top-tier servers ensure smooth gameplay and minimal lag." />
    </div>
  </section>
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
  <section className="text-center mb-16">
    <h2 className="text-4xl font-bold mb-4 text-green-400">Need a Custom Plan?</h2>
    <p className="text-xl text-gray-300 mb-8">We can tailor a hosting solution to meet your specific requirements.</p>
    <Link to="/custom-plan">
      <Button className="bg-purple-500 hover:bg-purple-600 text-white">Request Custom Plan</Button>
    </Link>
  </section>
);

export default EnzonicHosting;
