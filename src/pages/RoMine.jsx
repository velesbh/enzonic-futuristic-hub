import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { TypeAnimation } from 'react-type-animation';
import { Link } from 'react-router-dom';
import { GamepadIcon, ShoppingCartIcon, ServerIcon, InfoIcon } from 'lucide-react';
import { AnimatedBackground, FloatingElement, FeatureCard } from '../components/AnimatedComponents';

const RoMine = () => {
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
              Ro-Mine
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
                'Create your own games',
                1000,
                'Share with the community',
                1000,
                'Play amazing minigames',
                1000,
                'Create, Share, Play!',
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
            <Link to="/">
              <Button variant="outline" className="text-white border-green-500 bg-gradient-to-r from-green-600 to-green-400 hover:from-green-500 hover:to-green-300 transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg hover:shadow-green-500/30">
                Home
              </Button>
            </Link>
            <Button variant="outline" className="text-white border-green-500 bg-gradient-to-r from-green-600 to-green-400 hover:from-green-500 hover:to-green-300 transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg hover:shadow-green-500/30">
              Shop
            </Button>
          </motion.div>
        </motion.div>
        
        <motion.section 
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h2 className="text-4xl font-bold mb-8 text-center text-white">Server Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard 
              title="Create" 
              description="Design and build your own unique minigames" 
              icon={GamepadIcon} 
            />
            <FeatureCard 
              title="Share" 
              description="Publish your creations for others to enjoy" 
              icon={ShoppingCartIcon} 
            />
            <FeatureCard 
              title="Play" 
              description="Experience a wide variety of community-made games" 
              icon={ServerIcon} 
            />
          </div>
        </motion.section>

        <motion.section 
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h2 className="text-4xl font-bold mb-8 text-center text-white">Server Information</h2>
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <p className="text-xl mb-4"><strong>IP Address:</strong> ro-mine.enzonic.xyz</p>
            <p className="text-xl mb-4"><strong>Minecraft Versions:</strong> 1.8.9 - 1.21.1</p>
            <p className="text-xl mb-4 flex items-center">
              <InfoIcon className="mr-2 text-yellow-400" />
              <span>Ro-Mine is currently in development and not yet complete. Stay tuned for updates!</span>
            </p>
          </div>
        </motion.section>

        <motion.section 
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <h2 className="text-4xl font-bold mb-8 text-center text-white">Minebucks Shop</h2>
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-center">
            <p className="text-xl mb-4">Enhance your Ro-Mine experience with Minebucks!</p>
            <Button variant="outline" className="text-white border-green-500 bg-gradient-to-r from-green-600 to-green-400 hover:from-green-500 hover:to-green-300 transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg hover:shadow-green-500/30">
              Buy Minebucks
            </Button>
          </div>
        </motion.section>
      </main>
      <Footer />
    </div>
  );
};

export default RoMine;