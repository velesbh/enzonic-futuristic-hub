import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from 'next-themes';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Button } from '@/components/ui/button';
import { BrainCircuit, Zap, Shield, Sparkles } from 'lucide-react';
import { AnimatedBackground, GlowingButton } from '../components/AnimatedComponents';

const FeatureCard = ({ icon: Icon, title, description }) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg"
  >
    <Icon className="w-12 h-12 mb-4 text-blue-500" />
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-600 dark:text-gray-300">{description}</p>
  </motion.div>
);

const EnzonicAI = () => {
  const { theme } = useTheme();

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white">
      <AnimatedBackground />
      <Header />
      <main className="container mx-auto px-4 py-16 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
            Enzonic AI
          </h1>
          <p className="text-2xl mb-8">The Future of Intelligent Automation</p>
          <GlowingButton className="px-8 py-4 text-xl">
            Get Started
          </GlowingButton>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <FeatureCard
            icon={BrainCircuit}
            title="Advanced Learning"
            description="Our AI continuously learns and adapts to new challenges."
          />
          <FeatureCard
            icon={Zap}
            title="Lightning Fast"
            description="Process data and generate results at unprecedented speeds."
          />
          <FeatureCard
            icon={Shield}
            title="Secure & Private"
            description="Your data is protected with state-of-the-art encryption."
          />
          <FeatureCard
            icon={Sparkles}
            title="Intuitive Interface"
            description="User-friendly design for seamless interaction with AI."
          />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center"
        >
          <h2 className="text-4xl font-bold mb-4">Experience the Power of Enzonic AI</h2>
          <p className="text-xl mb-8">
            Transform your business with cutting-edge artificial intelligence solutions.
          </p>
          <Button variant="outline" size="lg">
            Learn More
          </Button>
        </motion.div>
      </main>
      <Footer />
    </div>
  );
};

export default EnzonicAI;