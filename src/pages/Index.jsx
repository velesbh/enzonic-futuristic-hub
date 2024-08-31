import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import Services from '../components/Services';
import Team from '../components/Team';
import Footer from '../components/Footer';
import { motion, useAnimation } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { TypeAnimation } from 'react-type-animation';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';

const AnimatedBackground = () => {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden">
      <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
        <defs>
          <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{ stopColor: '#0f0c29', stopOpacity: 1 }} />
            <stop offset="50%" style={{ stopColor: '#302b63', stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: '#24243e', stopOpacity: 1 }} />
          </linearGradient>
        </defs>
        <rect width="100%" height="100%" fill="url(#grad1)" />
        {[...Array(50)].map((_, i) => (
          <motion.circle
            key={i}
            cx={`${Math.random() * 100}%`}
            cy={`${Math.random() * 100}%`}
            r={`${Math.random() * 2 + 0.5}%`}
            fill={`rgba(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255}, 0.3)`}
            initial={{ opacity: 0.2, scale: 0 }}
            animate={{
              opacity: [0.2, 0.5, 0.2],
              scale: [0, 1, 0],
              x: [0, Math.random() * 100 - 50, 0],
              y: [0, Math.random() * 100 - 50, 0],
            }}
            transition={{
              duration: Math.random() * 10 + 5,
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

const Index = () => {
  const controls = useAnimation();
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    controls.start(i => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1 },
    }));

    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [controls]);

  return (
    <div className="min-h-screen bg-gray-900 text-white relative overflow-hidden">
      <AnimatedBackground />
      <Header />
      <Parallax pages={3}>
        <ParallaxLayer offset={0} speed={0.5}>
          <main className="container mx-auto px-4 py-32 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <FloatingElement>
                <motion.h1 
                  className="text-7xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500"
                  initial={{ scale: 0.5, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  Welcome to Enzonic
                </motion.h1>
              </FloatingElement>
              <motion.div 
                className="text-2xl mb-8 text-blue-300 h-20"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <TypeAnimation
                  sequence={[
                    'Empowering the future with innovative solutions',
                    1000,
                    'Transforming ideas into digital reality',
                    1000,
                    'Pushing the boundaries of technology',
                    1000,
                  ]}
                  wrapper="span"
                  speed={50}
                  repeat={Infinity}
                />
              </motion.div>
              <div className="flex justify-center space-x-4 flex-wrap">
                {['HOSTING', 'RO-MINE', 'DISCORD', 'NEWS'].map((text, index) => (
                  <motion.div
                    key={text}
                    custom={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={controls}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.95 }}
                    className="m-2"
                  >
                    <Button 
                      variant="outline" 
                      className="text-white border-white bg-gradient-to-r from-purple-500 to-pink-500 hover:from-pink-500 hover:to-purple-500 transition-all duration-300 ease-in-out transform hover:shadow-lg hover:shadow-pink-500/30"
                    >
                      {text}
                    </Button>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </main>
        </ParallaxLayer>

        <ParallaxLayer offset={1} speed={0.8}>
          <Services />
        </ParallaxLayer>

        <ParallaxLayer offset={2} speed={1.2}>
          <Team />
        </ParallaxLayer>
      </Parallax>
      <Footer />
    </div>
  );
};

export default Index;
