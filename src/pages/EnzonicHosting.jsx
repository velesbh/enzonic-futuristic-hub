import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Shield, HeadphonesIcon, Cpu } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { plans } from '../data/hostingPlans';

const FeatureCard = ({ icon: Icon, title, description }) => (
  <Card className="bg-gray-800 border-green-500 hover:border-green-400 transition-colors">
    <CardHeader>
      <Icon className="w-12 h-12 text-green-400 mb-4" />
      <CardTitle className="text-xl font-bold text-green-400">{title}</CardTitle>
    </CardHeader>
    <CardContent>
      <p className="text-gray-300">{description}</p>
    </CardContent>
  </Card>
);

const PlanCard = ({ title, price, features, description }) => (
  <Card className="bg-gray-800 border-2 border-gray-700 hover:border-green-400 transition-all transform hover:scale-105">
    <CardHeader>
      <CardTitle className="text-2xl font-bold text-green-400">{title}</CardTitle>
    </CardHeader>
    <CardContent>
      <p className="text-4xl font-bold text-white mb-6">${price}<span className="text-lg text-gray-400">/month</span></p>
      <ul className="space-y-2 mb-6">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center text-gray-300">
            <Zap className="w-5 h-5 text-green-400 mr-2" />
            {feature}
          </li>
        ))}
      </ul>
      <p className="text-sm text-gray-300 mb-4">{description}</p>
      <Button className="w-full bg-green-500 hover:bg-green-600 text-black font-bold">Add to Cart</Button>
    </CardContent>
  </Card>
);

const EnzonicHosting = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Header />
      <main className="container mx-auto px-4 py-16">
        <motion.section 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-6xl font-bold mb-4 text-green-400">Enzonic Hosting</h1>
          <p className="text-2xl text-gray-300 mb-8">Powerful, Reliable, and Affordable Game Servers</p>
          <Link to="/custom-plan">
            <Button variant="outline" className="text-green-400 border-green-400 hover:bg-green-400 hover:text-black">
              Request Custom Plan
            </Button>
          </Link>
        </motion.section>

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

        <motion.section 
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h2 className="text-4xl font-bold mb-8 text-center text-green-400">Our Minecraft Hosting Plans</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {plans.minecraft.budget.plans.map((plan, index) => (
              <PlanCard
                key={index}
                title={plan.title}
                price={plan.price.replace('$', '').replace('/month', '')}
                features={[
                  `RAM: ${plan.features[0]}`,
                  `CPU: ${plan.features[1]}`,
                  `Storage: ${plan.features[2]}`,
                  `Ports: ${plan.features[3]}`,
                  plan.features[4]
                ]}
                description={plan.description}
              />
            ))}
          </div>
        </motion.section>

        <motion.section 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <h2 className="text-4xl font-bold mb-4 text-green-400">Ready to Get Started?</h2>
          <p className="text-xl text-gray-300 mb-8">Join thousands of satisfied customers and experience the Enzonic difference today!</p>
          <Button className="bg-green-500 hover:bg-green-600 text-black font-bold text-lg px-8 py-3">Sign Up Now</Button>
        </motion.section>
      </main>
      <Footer />
    </div>
  );
};

export default EnzonicHosting;
