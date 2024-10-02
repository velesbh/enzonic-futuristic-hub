import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';
import { AnimatedBackground } from '../components/AnimatedComponents';

const EnzonicAI = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white relative overflow-hidden">
      <AnimatedBackground />
      <Header />
      <main className="container mx-auto px-4 py-32 relative z-10">
        <motion.h1
          className="text-6xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Enzonic AI
        </motion.h1>
        <motion.div
          className="w-full h-[80vh] bg-gray-800 rounded-lg overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <iframe
            src="http://37.114.41.233:3000/"
            title="Enzonic AI"
            className="w-full h-full border-0"
            allowFullScreen
          ></iframe>
        </motion.div>
      </main>
      <Footer />
    </div>
  );
};

export default EnzonicAI;