import React from 'react';
import Header from '../components/Header';
import Services from '../components/Services';
import Team from '../components/Team';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { TypeAnimation } from 'react-type-animation';
import { Link } from 'react-router-dom';
import { AnimatedBackground, FloatingElement } from '../components/AnimatedComponents';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white relative overflow-hidden">
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
              className="text-7xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-green-500 to-green-600"
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Welcome to Enzonic
            </motion.h1>
          </FloatingElement>
          <motion.div 
            className="text-2xl mb-8 text-green-300 h-20"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <TypeAnimation
              sequence={[
                'Enzonic: Hosting',
                1000,
                'Enzonic: AI',
                1000,
                'Enzonic: Cloud',
                1000,
                'Enzonic: VPN',
                1000,
                'Enzonic: Games',
                1000,
                'And much more',
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </motion.div>
          <motion.div 
            className="flex flex-wrap justify-center gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            {[
              { text: 'HOSTING', path: '/hosting' },
              { text: 'RO-MINE', path: '/ro-mine' },
              { text: 'DISCORD', path: '/' },
              { text: 'NEWS', path: '/news' },
              { text: 'CLOUD', path: '/' },
              { text: 'VPN', path: '/' }
            ].map(({ text, path }) => (
              <Link key={text} to={path}>
                <Button 
                  variant="outline" 
                  className="text-white border-green-500 bg-gradient-to-r from-green-600 to-green-400 hover:from-green-500 hover:to-green-300 transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg hover:shadow-green-500/30"
                >
                  {text}
                </Button>
              </Link>
            ))}
          </motion.div>
        </motion.div>
      </main>
      <Services />
      <Team />
      <Footer />
    </div>
  );
};

export default Index;