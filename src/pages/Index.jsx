import React from 'react';
import Header from '../components/Header';
import Services from '../components/Services';
import Team from '../components/Team';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { Link } from 'react-router-dom';
import { AnimatedBackground, FloatingElement, GlowingButton } from '../components/AnimatedComponents';
import { ArrowRight } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-gray-900 text-white relative overflow-hidden">
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
              className="text-7xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500"
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Welcome to Enzonic
            </motion.h1>
          </FloatingElement>
          <motion.div 
            className="text-3xl mb-8 h-20 text-gray-300"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <TypeAnimation
              sequence={[
                'Innovative Hosting Solutions',
                1000,
                'Cutting-Edge AI Technology',
                1000,
                'Secure Cloud Services',
                1000,
                'High-Performance VPN',
                1000,
                'Immersive Gaming Experiences',
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </motion.div>
          <motion.div 
            className="flex flex-wrap justify-center gap-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            {[
              { text: 'Explore Hosting', path: '/hosting' },
              { text: 'Discover Ro-Mine', path: '/ro-mine' },
              { text: 'Latest News', path: '/news' },
              { text: 'MC Tools', path: '/mc-tools' },
            ].map(({ text, path }) => (
              <Link key={text} to={path}>
                <GlowingButton className="group">
                  {text}
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </GlowingButton>
              </Link>
            ))}
          </motion.div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 max-w-2xl mx-auto"
        >
          <h2 className="text-4xl font-bold text-green-400 mb-4">
            Our Vision
          </h2>
          <p className="text-xl text-gray-300 leading-relaxed">
            At Enzonic, we're committed to delivering affordable, reliable, and cutting-edge technology solutions. Our goal is to empower individuals and businesses with innovative services that drive growth and success in the digital world.
          </p>
        </motion.div>
      </main>
      <Services />
      <Team />
      <Footer />
    </div>
  );
};

export default Index;