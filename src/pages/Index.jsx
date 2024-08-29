import React from 'react';
import Header from '../components/Header';
import Services from '../components/Services';
import Team from '../components/Team';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';

const AnimatedBackground = () => (
  <div className="fixed inset-0 z-0 overflow-hidden">
    {[...Array(20)].map((_, i) => (
      <motion.div
        key={i}
        className="absolute bg-green-500 rounded-full opacity-10"
        style={{
          width: Math.random() * 100 + 50,
          height: Math.random() * 100 + 50,
        }}
        animate={{
          x: ['-100%', '100%'],
          y: ['-100%', '100%'],
        }}
        transition={{
          duration: Math.random() * 10 + 20,
          repeat: Infinity,
          repeatType: 'reverse',
        }}
      />
    ))}
  </div>
);

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-green-400 relative overflow-hidden">
      <AnimatedBackground />
      <Header />
      <main className="container mx-auto px-4 py-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold mb-4">Welcome to Enzonic</h1>
          <p className="text-xl">Empowering the future with innovative solutions</p>
        </motion.div>
        <Services />
        <Team />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
