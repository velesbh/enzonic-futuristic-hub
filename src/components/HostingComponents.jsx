import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export const AnimatedBackground = () => {
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

export const FloatingElement = ({ children }) => {
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

export const StaticIcon = ({ icon: Icon }) => {
  return (
    <div>
      <Icon className="w-12 h-12 text-white mb-4" />
    </div>
  );
};

export const FeatureCard = ({ title, description, icon: Icon }) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    className="bg-gray-800 p-6 rounded-lg shadow-lg flex flex-col items-center"
  >
    <StaticIcon icon={Icon} />
    <h3 className="text-lg font-semibold text-white mb-2">{title}</h3>
    <p className="text-gray-300 text-center">{description}</p>
  </motion.div>
);

export const PlanCard = ({ title, description, price, features, isExtreme, icon: Icon }) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    className="bg-gray-800 p-6 rounded-lg shadow-lg flex flex-col"
  >
    <div className="flex items-center mb-4">
      <Icon className="w-8 h-8 text-white mr-2" />
      <h3 className="text-xl font-semibold text-white">{title}</h3>
    </div>
    <p className="text-gray-300 mb-4">{description}</p>
    <p className="text-2xl font-bold text-white mb-4">{price}</p>
    <ul className="text-gray-300 mb-4">
      {features.map((feature, index) => (
        <li key={index} className="mb-2">• {feature}</li>
      ))}
    </ul>
    {isExtreme && (
      <p className="text-yellow-400 mb-4">This plan will take up to 24H to setup</p>
    )}
    <Button variant="outline" className="mt-auto text-white border-white bg-gray-800 hover:bg-gray-700 hover:text-gray-200">
      Select Plan
    </Button>
  </motion.div>
);

export const PlanComparison = () => (
  <div className="mt-8 bg-gray-800 p-6 rounded-lg shadow-lg">
    <h3 className="text-2xl font-bold mb-4 text-purple-400">Plan Comparison</h3>
    <table className="w-full">
      <thead>
        <tr>
          <th className="text-left text-purple-400">Feature</th>
          <th className="text-center text-purple-400">Budget</th>
          <th className="text-center text-purple-400">Normal</th>
          <th className="text-center text-purple-400">Extreme</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="text-purple-300">Price per GB RAM</td>
          <td className="text-center text-purple-300">$0.90</td>
          <td className="text-center text-purple-300">$1.10</td>
          <td className="text-center text-purple-300">$3.00</td>
        </tr>
        <tr>
          <td className="text-purple-300">CPU</td>
          <td className="text-center text-purple-300">Shared</td>
          <td className="text-center text-purple-300">AMD EPYC 7R17</td>
          <td className="text-center text-purple-300">i9-9900K</td>
        </tr>
        <tr>
          <td className="text-purple-300">Dedicated IP</td>
          <td className="text-center text-purple-300">-</td>
          <td className="text-center text-purple-300">-</td>
          <td className="text-center text-purple-300">$5/month</td>
        </tr>
      </tbody>
    </table>
  </div>
);