import React, { useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { motion, useAnimation } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { TypeAnimation } from 'react-type-animation';
import { Link } from 'react-router-dom';
import { GamepadIcon, ShoppingCartIcon, ServerIcon, InfoIcon } from 'lucide-react';

const AnimatedBackground = () => {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden">
      <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
        <defs>
          <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{ stopColor: '#0a2f1f', stopOpacity: 1 }} />
            <stop offset="50%" style={{ stopColor: '#1a5f3f', stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: '#2a8f5f', stopOpacity: 1 }} />
          </linearGradient>
        </defs>
        <rect width="100%" height="100%" fill="url(#grad1)" />
        {[...Array(50)].map((_, i) => (
          <motion.circle
            key={i}
            cx={`${Math.random() * 100}%`}
            cy={`${Math.random() * 100}%`}
            r={`${Math.random() * 2 + 0.5}%`}
            fill={`rgba(0, ${Math.random() * 155 + 100}, ${Math.random() * 100}, 0.3)`}
            animate={{
              opacity: [0.2, 0.5, 0.2],
              scale: [0.8, 1.2, 0.8],
              x: ['-2%', '2%', '-2%'],
              y: ['-2%', '2%', '-2%'],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              repeatType: 'reverse',
            }}
          />
        ))}
      </svg>
    </div>
  );
};

const FloatingElement = ({ children }) => {
  return (
    <motion.div
      animate={{
        y: [0, -10, 0],
        rotate: [-1, 1, -1],
      }}
      transition={{
        duration: 5,
        repeat: Infinity,
        repeatType: 'reverse',
      }}
    >
      {children}
    </motion.div>
  );
};

const FeatureCard = ({ title, description, icon: Icon }) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    className="bg-gray-800 p-6 rounded-lg shadow-lg flex flex-col items-center"
  >
    <Icon className="w-12 h-12 text-white mb-4" />
    <h3 className="text-lg font-semibold text-white mb-2">{title}</h3>
    <p className="text-gray-300 text-center">{description}</p>
  </motion.div>
);

const RoMine = () => {
  const controls = useAnimation();

  useEffect(() => {
    controls.start(i => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1 },
    }));
  }, [controls]);

  return (
    <div className="min-h-screen bg-gray-900 text-white relative overflow-hidden">
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
          <div className="flex justify-center space-x-4 flex-wrap">
            <Link to="/">
              <Button variant="outline" className="m-2 text-white border-green-500 bg-gradient-to-r from-green-600 to-green-400 hover:from-green-500 hover:to-green-300 transition-all duration-300 ease-in-out transform hover:shadow-lg hover:shadow-green-500/30">
                Home
              </Button>
            </Link>
            <Button variant="outline" className="m-2 text-white border-green-500 bg-gradient-to-r from-green-600 to-green-400 hover:from-green-500 hover:to-green-300 transition-all duration-300 ease-in-out transform hover:shadow-lg hover:shadow-green-500/30">
              Shop
            </Button>
          </div>
        </motion.div>
        
        <section className="mb-16">
          <h2 className="text-4xl font-bold mb-8 text-center text-white">Server Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
        </section>

        <section className="mb-16">
          <h2 className="text-4xl font-bold mb-8 text-center text-white">Server Information</h2>
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <p className="text-xl mb-4"><strong>IP Address:</strong> ro-mine.enzonic.xyz</p>
            <p className="text-xl mb-4"><strong>Minecraft Versions:</strong> 1.8.9 - 1.21.1</p>
            <p className="text-xl mb-4 flex items-center">
              <InfoIcon className="mr-2 text-yellow-400" />
              <span>Ro-Mine is currently in development and not yet complete. Stay tuned for updates!</span>
            </p>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-4xl font-bold mb-8 text-center text-white">Minebucks Shop</h2>
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-center">
            <p className="text-xl mb-4">Enhance your Ro-Mine experience with Minebucks!</p>
            <Button variant="outline" className="text-white border-green-500 bg-gradient-to-r from-green-600 to-green-400 hover:from-green-500 hover:to-green-300 transition-all duration-300 ease-in-out transform hover:shadow-lg hover:shadow-green-500/30">
              Buy Minebucks
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default RoMine;