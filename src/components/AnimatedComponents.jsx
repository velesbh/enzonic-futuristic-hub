import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowUpCircle } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';

export const AnimatedBackground = ({ additionalIcons = [] }) => (
  <div className="fixed inset-0 z-0 overflow-hidden">
    <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
      <defs>
        <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: '#1a1a2e', stopOpacity: 1 }} />
          <stop offset="50%" style={{ stopColor: '#16213e', stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: '#0f3460', stopOpacity: 1 }} />
        </linearGradient>
      </defs>
      <rect width="100%" height="100%" fill="url(#grad1)" />
      {[...Array(50), ...additionalIcons].map((Icon, i) => (
        <motion.g
          key={i}
          initial={{ opacity: 0 }}
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
        >
          {Icon ? (
            <Icon
              x={`${Math.random() * 100}%`}
              y={`${Math.random() * 100}%`}
              width="24"
              height="24"
              fill={`rgba(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 0.3 + 0.1})`}
            />
          ) : (
            <circle
              cx={`${Math.random() * 100}%`}
              cy={`${Math.random() * 100}%`}
              r={`${Math.random() * 2 + 0.5}%`}
              fill={`rgba(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 0.3 + 0.1})`}
            />
          )}
        </motion.g>
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
    className="bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-lg shadow-lg flex flex-col items-center border border-gray-700 hover:border-purple-500 transition-all duration-300"
  >
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ type: "spring", stiffness: 500, delay: 0.2 }}
    >
      <Icon className="w-16 h-16 text-purple-400 mb-4" />
    </motion.div>
    <h3 className="text-xl font-semibold text-purple-300 mb-2">{title}</h3>
    <p className="text-gray-300 text-center">{description}</p>
  </motion.div>
);

export const GlowingButton = ({ children, className, ...props }) => (
  <Button
    className={`relative overflow-hidden group ${className}`}
    {...props}
  >
    <span className="relative z-10 text-black font-bold">{children}</span>
    <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-500 opacity-75 group-hover:opacity-100 transition-opacity duration-300" />
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
        className="rounded-full p-3 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white"
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
    className="bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-lg shadow-lg flex flex-col border border-gray-700 hover:border-blue-500 transition-all duration-300"
  >
    <div className="flex items-center mb-4">
      <Icon className="w-8 h-8 text-blue-400 mr-2" />
      <h3 className="text-xl font-semibold text-blue-300">{title}</h3>
    </div>
    <p className="text-gray-300 mb-4">{description}</p>
    <p className="text-2xl font-bold text-purple-300 mb-4">{price}</p>
    <ul className="text-gray-300 mb-4">
      {features.map((feature, index) => (
        <li key={index} className="mb-2 flex items-center">
          <span className="text-green-400 mr-2">•</span> {feature}
        </li>
      ))}
    </ul>
    {isExtreme && (
      <p className="text-yellow-400 mb-4">This plan will take up to 24H to setup</p>
    )}
    <Button variant="outline" className="mt-auto text-blue-300 border-blue-500 bg-transparent hover:bg-blue-900 hover:text-blue-200 transition-all duration-300">
      Select Plan
    </Button>
  </motion.div>
);