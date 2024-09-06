import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowUpCircle } from 'lucide-react';

export const AnimatedBackground = () => (
  <div className="fixed inset-0 z-0 overflow-hidden">
    <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
      <defs>
        <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: '#001a0f', stopOpacity: 1 }} />
          <stop offset="50%" style={{ stopColor: '#003319', stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: '#004d26', stopOpacity: 1 }} />
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
            duration: Math.random() * 10 + 10,
            repeat: Infinity,
            repeatType: 'reverse',
          }}
        />
      ))}
    </svg>
  </div>
);

export const FloatingElement = ({ children }) => (
  <motion.div
    animate={{
      y: [0, -10, 0],
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

export const FeatureCard = ({ title, description, icon: Icon }) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    className="bg-gray-900 p-6 rounded-lg shadow-lg flex flex-col items-center border border-green-700"
  >
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ type: "spring", stiffness: 500, delay: 0.2 }}
    >
      <Icon className="w-16 h-16 text-green-500 mb-4" />
    </motion.div>
    <h3 className="text-xl font-semibold text-green-400 mb-2">{title}</h3>
    <p className="text-gray-300 text-center">{description}</p>
  </motion.div>
);

export const GlowingButton = ({ children, className, ...props }) => (
  <Button
    className={`relative overflow-hidden group ${className}`}
    {...props}
  >
    <span className="relative z-10 text-black">{children}</span>
    <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-green-600 opacity-75 group-hover:opacity-100 transition-opacity duration-300" />
  </Button>
);

export const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const controls = useAnimation();

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    if (isVisible) {
      controls.start({
        opacity: 1,
        y: 0,
        transition: { type: 'spring', stiffness: 260, damping: 20 }
      });
    } else {
      controls.start({ opacity: 0, y: 100 });
    }
  }, [isVisible, controls]);

  return (
    <motion.div
      className="fixed bottom-5 right-5 z-50"
      initial={{ opacity: 0, y: 100 }}
      animate={controls}
    >
      <Button
        onClick={scrollToTop}
        className="rounded-full p-3 bg-green-700 hover:bg-green-600 text-white"
      >
        <ArrowUpCircle className="h-6 w-6" />
      </Button>
    </motion.div>
  );
};

export const AnimatedGrid = ({ children }) => (
  <motion.div
    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.5, staggerChildren: 0.1 }}
  >
    {React.Children.map(children, (child, index) => (
      <motion.div
        key={index}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: index * 0.1 }}
      >
        {child}
      </motion.div>
    ))}
  </motion.div>
);

export const PlanCard = ({ title, description, price, features, isExtreme, icon: Icon }) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    className="bg-gray-900 p-6 rounded-lg shadow-lg flex flex-col border border-green-700"
  >
    <div className="flex items-center mb-4">
      <Icon className="w-8 h-8 text-green-500 mr-2" />
      <h3 className="text-xl font-semibold text-green-400">{title}</h3>
    </div>
    <p className="text-gray-300 mb-4">{description}</p>
    <p className="text-2xl font-bold text-green-400 mb-4">{price}</p>
    <ul className="text-gray-300 mb-4">
      {features.map((feature, index) => (
        <li key={index} className="mb-2">• {feature}</li>
      ))}
    </ul>
    {isExtreme && (
      <p className="text-yellow-400 mb-4">This plan will take up to 24H to setup</p>
    )}
    <Button variant="outline" className="mt-auto text-green-400 border-green-700 bg-gray-900 hover:bg-gray-800 hover:text-green-300">
      Select Plan
    </Button>
  </motion.div>
);

export const AnimatedQuote = ({ quotes }) => {
  const [currentQuote, setCurrentQuote] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentQuote((prev) => (prev + 1) % quotes.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [quotes.length]);

  return (
    <motion.div
      key={currentQuote}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="bg-gray-900 p-6 rounded-lg shadow-lg mb-16 border border-green-700"
    >
      <p className="text-xl text-green-400 mb-4">"{quotes[currentQuote].text}"</p>
      <div className="flex items-center">
        <img src={quotes[currentQuote].avatar} alt={quotes[currentQuote].name} className="w-12 h-12 rounded-full mr-4" />
        <p className="text-gray-300">- {quotes[currentQuote].name}</p>
      </div>
    </motion.div>
  );
};