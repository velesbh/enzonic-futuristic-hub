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
          <stop offset="0%" style={{ stopColor: '#000000', stopOpacity: 1 }} />
          <stop offset="50%" style={{ stopColor: '#001a00', stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: '#003300', stopOpacity: 1 }} />
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
              fill={`rgba(0, 255, 0, ${Math.random() * 0.2 + 0.1})`}
            />
          ) : (
            <circle
              cx={`${Math.random() * 100}%`}
              cy={`${Math.random() * 100}%`}
              r={`${Math.random() * 2 + 0.5}%`}
              fill={`rgba(0, 255, 0, ${Math.random() * 0.2 + 0.1})`}
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
    <p className="text-green-300 text-center">{description}</p>
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
        className="rounded-full p-3 bg-green-500 hover:bg-green-600 text-black"
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
    className="bg-gray-800 p-6 rounded-lg shadow-lg flex flex-col"
  >
    <div className="flex items-center mb-4">
      <Icon className="w-8 h-8 text-green-400 mr-2" />
      <h3 className="text-xl font-semibold text-green-400">{title}</h3>
    </div>
    <p className="text-green-300 mb-4">{description}</p>
    <p className="text-2xl font-bold text-green-400 mb-4">{price}</p>
    <ul className="text-green-300 mb-4">
      {features.map((feature, index) => (
        <li key={index} className="mb-2">• {feature}</li>
      ))}
    </ul>
    {isExtreme && (
      <p className="text-yellow-400 mb-4">This plan will take up to 24H to setup</p>
    )}
    <Button variant="outline" className="mt-auto text-green-400 border-green-400 bg-gray-800 hover:bg-gray-700 hover:text-green-300">
      Select Plan
    </Button>
  </motion.div>
);

export const HeroText = () => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    className="text-center mb-16 relative"
  >
    <div className="absolute inset-0 flex items-center justify-center opacity-20">
      <img src="/minecraft-steve.png" alt="Minecraft Steve" className="h-32 mx-2" />
      <img src="/rust-character.png" alt="Rust Character" className="h-32 mx-2" />
      <img src="/csgo-character.png" alt="CS:GO Character" className="h-32 mx-2" />
    </div>
    <h2 className="text-3xl font-bold text-green-400 mb-4 relative z-10">
      Our Goal
    </h2>
    <p className="text-xl text-green-300 relative z-10">
      Our goal is to give cheap, reliable, fast and easy to use servers to everyone
    </p>
  </motion.div>
);