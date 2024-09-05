import React from 'react';
import { motion } from 'framer-motion';

export const AnimatedBackground = () => (
  <div className="fixed inset-0 z-0 overflow-hidden">
    <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
      <defs>
        <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: '#0a192f', stopOpacity: 1 }} />
          <stop offset="50%" style={{ stopColor: '#112240', stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: '#233554', stopOpacity: 1 }} />
        </linearGradient>
      </defs>
      <rect width="100%" height="100%" fill="url(#grad1)" />
      {[...Array(50)].map((_, i) => (
        <motion.circle
          key={i}
          cx={`${Math.random() * 100}%`}
          cy={`${Math.random() * 100}%`}
          r={`${Math.random() * 2 + 0.5}%`}
          fill={`rgba(100, ${Math.random() * 155 + 100}, 255, 0.3)`}
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
    whileHover={{ scale: 1.05 }}
    className="bg-gray-800 bg-opacity-50 backdrop-filter backdrop-blur-lg p-6 rounded-lg shadow-lg flex flex-col items-center"
  >
    <Icon className="w-12 h-12 text-blue-400 mb-4" />
    <h3 className="text-lg font-semibold text-white mb-2">{title}</h3>
    <p className="text-gray-300 text-center">{description}</p>
  </motion.div>
);

export const PlanCard = ({ title, price, features, icon: Icon, description }) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    className="bg-gray-800 bg-opacity-50 backdrop-filter backdrop-blur-lg p-6 rounded-lg shadow-lg flex flex-col"
  >
    <div className="flex items-center mb-4">
      <Icon className="w-8 h-8 text-blue-400 mr-2" />
      <h3 className="text-xl font-semibold text-white">{title}</h3>
    </div>
    <p className="text-3xl font-bold text-white mb-4">{price}</p>
    <p className="text-gray-300 mb-4">{description}</p>
    <ul className="text-gray-300 mb-4 flex-grow">
      {features.map((feature, index) => (
        <li key={index} className="mb-2 flex items-center">
          <motion.div
            className="w-4 h-4 bg-blue-400 rounded-full mr-2"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: index * 0.1 }}
          />
          {feature}
        </li>
      ))}
    </ul>
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="mt-auto text-white border-blue-400 bg-gray-700 hover:bg-blue-600 hover:text-white transition-colors duration-300 py-2 px-4 rounded"
    >
      Select Plan
    </motion.button>
  </motion.div>
);