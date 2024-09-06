import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowUpCircle } from 'lucide-react';

export const AnimatedBackground = () => (
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
      {[...Array(100)].map((_, i) => (
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

export const FeatureCard = ({ title, description, icon: Icon }) => (
  <motion.div
    whileHover={{ scale: 1.05, rotateY: 5 }}
    className="bg-gradient-to-br from-green-800 to-green-900 p-6 rounded-lg shadow-lg flex flex-col items-center"
  >
    <motion.div
      initial={{ scale: 0, rotate: -180 }}
      animate={{ scale: 1, rotate: 0 }}
      transition={{ type: "spring", stiffness: 500, delay: 0.2 }}
    >
      <Icon className="w-16 h-16 text-green-400 mb-4" />
    </motion.div>
    <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
    <p className="text-green-200 text-center">{description}</p>
  </motion.div>
);

export const PlanCard = ({ title, price, features, icon: Icon, description }) => (
  <motion.div
    whileHover={{ scale: 1.05, rotateY: 5 }}
    className="bg-gradient-to-br from-green-800 to-green-900 p-6 rounded-lg shadow-lg flex flex-col"
  >
    <div className="flex items-center mb-4">
      <Icon className="w-12 h-12 text-green-400 mr-2" />
      <h3 className="text-2xl font-semibold text-white">{title}</h3>
    </div>
    <p className="text-3xl font-bold text-white mb-4">{price}</p>
    <p className="text-green-200 mb-4">{description}</p>
    <ul className="text-green-200 mb-4 flex-grow">
      {features.map((feature, index) => (
        <motion.li
          key={index}
          className="mb-2 flex items-center"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: index * 0.1 }}
        >
          <motion.div
            className="w-4 h-4 bg-green-400 rounded-full mr-2"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: index * 0.1 }}
          />
          {feature}
        </motion.li>
      ))}
    </ul>
    <Button className="mt-auto bg-green-600 hover:bg-green-700 text-white">Select Plan</Button>
  </motion.div>
);

export const GlowingButton = ({ children, className, ...props }) => (
  <Button
    className={`relative overflow-hidden group ${className}`}
    {...props}
  >
    <span className="relative z-10">{children}</span>
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
        className="rounded-full p-3 bg-green-600 hover:bg-green-700 text-white"
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
      className="text-center my-12 px-4"
    >
      <p className="text-2xl font-bold text-green-300 mb-4">{quotes[currentQuote].text}</p>
      <div className="flex justify-center items-center">
        <img src={quotes[currentQuote].avatar} alt={quotes[currentQuote].name} className="w-12 h-12 rounded-full mr-4" />
        <p className="text-lg text-green-200">{quotes[currentQuote].name}</p>
      </div>
    </motion.div>
  );
};