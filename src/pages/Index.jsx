import React from 'react';
import Header from '../components/Header';
import Services from '../components/Services';
import Team from '../components/Team';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

const AnimatedBubbles = () => {
  const bubbles = React.useMemo(() => {
    const result = [];
    for (let i = 0; i < 30; i++) {
      const size = Math.random() * 30 + 10;
      result.push({
        id: i,
        size,
        x: Math.random() * (window.innerWidth - size),
        y: Math.random() * (window.innerHeight - size),
      });
    }
    return result;
  }, []);

  return (
    <div className="fixed inset-0 z-0 overflow-hidden">
      {bubbles.map((bubble) => (
        <motion.div
          key={bubble.id}
          className="absolute bg-green-500 rounded-full opacity-5"
          style={{
            width: bubble.size,
            height: bubble.size,
            left: bubble.x,
            top: bubble.y,
          }}
          animate={{
            y: [0, -5, 0],
            scale: [1, 1.05, 1],
            opacity: [0.03, 0.05, 0.03],
          }}
          transition={{
            duration: Math.random() * 8 + 10,
            repeat: Infinity,
            repeatType: 'reverse',
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  );
};

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-green-400 relative overflow-hidden">
      <AnimatedBubbles />
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
          <div className="flex justify-center space-x-4 flex-wrap">
            {['HOSTING', 'RO-MINE', 'DISCORD', 'NEWS'].map((text, index) => (
              <motion.div
                key={text}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="m-2"
              >
                <Button 
                  variant="outline" 
                  className="text-green-400 border-green-400 bg-gray-800 hover:bg-green-900 hover:text-green-300 transition-all duration-300 ease-in-out transform hover:shadow-lg hover:shadow-green-400/30"
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
