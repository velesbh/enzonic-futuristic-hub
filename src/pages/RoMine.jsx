import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { Link } from 'react-router-dom';
import { GamepadIcon, ShoppingCartIcon, ServerIcon, InfoIcon, Cpu, Users, Code, Trophy, Zap, Shield } from 'lucide-react';
import { AnimatedBackground, FloatingElement, FeatureCard, GlowingButton, ScrollToTopButton, AnimatedGrid } from '../components/AnimatedComponents';

const RoMine = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-900 to-indigo-900 text-white relative overflow-hidden">
      <AnimatedBackground />
      <Header />
      <ScrollToTopButton />
      <main className="container mx-auto px-4 py-32 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <FloatingElement>
            <motion.h1 
              className="text-7xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-purple-600"
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Ro-Mine
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
                'Create Your Own Games',
                1000,
                'Share with the Community',
                1000,
                'Play Amazing Minigames',
                1000,
                'Unleash Your Creativity',
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
            <Link to="/">
              <GlowingButton>Explore Ro-Mine</GlowingButton>
            </Link>
            <GlowingButton>Minebucks Shop</GlowingButton>
          </motion.div>
        </motion.div>
        
        <motion.section 
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h2 className="text-4xl font-bold mb-8 text-center text-pink-400">Ro-Mine Features</h2>
          <AnimatedGrid>
            <FeatureCard title="Create" description="Design and build your own unique minigames" icon={GamepadIcon} />
            <FeatureCard title="Share" description="Publish your creations for others to enjoy" icon={ShoppingCartIcon} />
            <FeatureCard title="Play" description="Experience a wide variety of community-made games" icon={ServerIcon} />
            <FeatureCard title="Optimize" description="Fine-tune your games for maximum performance" icon={Cpu} />
            <FeatureCard title="Collaborate" description="Team up with other creators for epic projects" icon={Users} />
            <FeatureCard title="Learn" description="Improve your coding skills as you create" icon={Code} />
            <FeatureCard title="Compete" description="Join tournaments and climb the leaderboards" icon={Trophy} />
            <FeatureCard title="Instant Deploy" description="Launch your games with just one click" icon={Zap} />
            <FeatureCard title="Secure" description="Play in a safe, moderated environment" icon={Shield} />
          </AnimatedGrid>
        </motion.section>

        <motion.section 
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h2 className="text-4xl font-bold mb-8 text-center text-pink-400">Server Information</h2>
          <div className="bg-indigo-800 p-8 rounded-lg shadow-lg">
            <p className="text-2xl mb-4"><strong>IP Address:</strong> ro-mine.enzonic.xyz</p>
            <p className="text-2xl mb-4"><strong>Minecraft Versions:</strong> 1.8.9 - 1.21.1</p>
            <p className="text-xl flex items-center bg-yellow-500 text-black p-4 rounded-lg">
              <InfoIcon className="mr-2" />
              <span>Ro-Mine is currently in development. Stay tuned for exciting updates!</span>
            </p>
          </div>
        </motion.section>

        <motion.section 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <h2 className="text-4xl font-bold mb-8 text-center text-pink-400">Join the Ro-Mine Community</h2>
          <p className="text-xl mb-6 text-gray-300">Be part of an exciting world of creativity and gaming. Start your journey today!</p>
          <GlowingButton>Get Started Now</GlowingButton>
        </motion.section>
      </main>
      <Footer />
    </div>
  );
};

export default RoMine;