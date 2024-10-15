import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { AnimatedBackground, FloatingElement, GlowingButton } from '../components/AnimatedComponents';
import { Video, Users, Globe } from 'lucide-react';

const EnzonicMeet = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-900 to-indigo-900 text-white relative overflow-hidden">
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
              className="text-7xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600"
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Enzonic Meet
            </motion.h1>
          </FloatingElement>
          <motion.p 
            className="text-3xl mb-8 text-gray-300"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Connect, Collaborate, and Create Together
          </motion.p>
          <motion.div 
            className="flex flex-wrap justify-center gap-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <a href="https://meet.enzonic.xyz" target="_blank" rel="noopener noreferrer">
              <GlowingButton className="px-8 py-4 text-xl">
                Join a Meeting
              </GlowingButton>
            </a>
            <Link to="/contact">
              <GlowingButton className="px-8 py-4 text-xl">
                Learn More
              </GlowingButton>
            </Link>
          </motion.div>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          {[
            { icon: Video, title: "High-Quality Video", description: "Crystal clear video conferencing for seamless communication" },
            { icon: Users, title: "Team Collaboration", description: "Bring your team together, no matter where they are" },
            { icon: Globe, title: "Global Reach", description: "Connect with anyone, anywhere in the world" },
          ].map(({ icon: Icon, title, description }, index) => (
            <motion.div
              key={index}
              className="bg-indigo-800 p-6 rounded-lg text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 * index }}
            >
              <Icon className="w-16 h-16 mx-auto mb-4 text-blue-400" />
              <h3 className="text-2xl font-bold mb-2">{title}</h3>
              <p className="text-gray-300">{description}</p>
            </motion.div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default EnzonicMeet;