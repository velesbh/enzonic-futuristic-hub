import React from 'react';
import Header from '../components/Header';
import Services from '../components/Services';
import Team from '../components/Team';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

const AnimatedGrid = () => (
  <div className="fixed inset-0 z-0 overflow-hidden">
    <svg className="absolute w-full h-full" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
          <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(0, 100, 0, 0.1)" strokeWidth="1" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#grid)" />
    </svg>
  </div>
);

const AnimatedBackground = () => (
  <div className="fixed inset-0 z-0 overflow-hidden">
    {[...Array(50)].map((_, i) => (
      <motion.div
        key={i}
        className="absolute bg-green-500 rounded-full opacity-5"
        style={{
          width: Math.random() * 200 + 50,
          height: Math.random() * 200 + 50,
        }}
        animate={{
          x: ['-100%', '100%'],
          y: ['-100%', '100%'],
          scale: [1, 1.5, 1],
          rotate: [0, 360],
        }}
        transition={{
          duration: Math.random() * 20 + 30,
          repeat: Infinity,
          repeatType: 'reverse',
          ease: 'linear',
        }}
      />
    ))}
  </div>
);

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-green-400 relative overflow-hidden">
      <AnimatedGrid />
      <AnimatedBackground />
      <Header />
      <main className="container mx-auto px-4 py-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-6xl font-bold mb-4 text-green-400">Welcome to Enzonic</h1>
          <p className="text-2xl mb-8 text-green-300">Empowering the future with innovative solutions</p>
          <div className="flex justify-center space-x-4">
            {['HOSTING', 'RO-MINE', 'DISCORD', 'NEWS'].map((text, index) => (
              <motion.div
                key={text}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button 
                  variant="outline" 
                  className="text-green-400 border-green-400 hover:bg-green-400 hover:text-gray-900 transition-all duration-300 ease-in-out transform hover:shadow-lg hover:shadow-green-400/50"
                >
                  {text}
                </Button>
              </motion.div>
            ))}
          </div>
        </motion.div>
        <Services />
        <Team />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
