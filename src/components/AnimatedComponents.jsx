import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

export const AnimatedBackground = () => (
  <div className="fixed inset-0 z-[-1] overflow-hidden">
    <motion.div
      className="absolute inset-0 bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900"
      animate={{
        background: [
          'linear-gradient(to bottom right, #1a365d, #4a148c, #1e3a8a)',
          'linear-gradient(to bottom right, #4a148c, #1e3a8a, #1a365d)',
          'linear-gradient(to bottom right, #1e3a8a, #1a365d, #4a148c)',
        ],
      }}
      transition={{ duration: 10, repeat: Infinity, repeatType: 'reverse' }}
    />
    {[...Array(25)].map((_, i) => (
      <motion.div
        key={i}
        className="absolute rounded-full bg-white opacity-10"
        style={{
          width: Math.random() * 2 + 1,
          height: Math.random() * 2 + 1,
          top: `${Math.random() * 100}%`,
          left: `${Math.random() * 100}%`,
        }}
        animate={{
          y: [0, -500],
          opacity: [0, 0.3, 0],
        }}
        transition={{
          duration: Math.random() * 10 + 10,
          repeat: Infinity,
          repeatType: 'loop',
        }}
      />
    ))}
  </div>
);

export const AbstractShapes = () => (
  <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
    {[...Array(5)].map((_, i) => (
      <motion.div
        key={i}
        className="absolute rounded-full bg-gradient-to-r from-blue-500 to-purple-500 opacity-10"
        style={{
          width: Math.random() * 200 + 50,
          height: Math.random() * 200 + 50,
          top: `${Math.random() * 100}%`,
          left: `${Math.random() * 100}%`,
        }}
        animate={{
          x: [0, Math.random() * 50 - 25],
          y: [0, Math.random() * 50 - 25],
          rotate: [0, 360],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: Math.random() * 20 + 20,
          repeat: Infinity,
          repeatType: 'reverse',
        }}
      />
    ))}
  </div>
);

export const GlowingButton = ({ children, className, ...props }) => (
  <Button
    className={`relative overflow-hidden group ${className}`}
    {...props}
  >
    <span className="relative z-10 text-white">{children}</span>
    <motion.div
      className="absolute inset-0 bg-gradient-to-r from-gray-700 to-gray-900 opacity-75"
      animate={{
        scale: [1, 1.2, 1],
        opacity: [0.7, 1, 0.7],
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
        repeatType: 'reverse',
      }}
    />
  </Button>
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

export const EnzonicLogo = () => (
  <motion.div
    initial={{ opacity: 0, scale: 0.5 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.5 }}
    className="mb-8"
  >
    <img src="/enzonic-logo.png" alt="Enzonic Logo" className="w-48 h-48 mx-auto" />
  </motion.div>
);

export const ImageCard = ({ src, alt, text }) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    className="bg-gray-800 rounded-lg overflow-hidden shadow-lg"
  >
    <img src={src} alt={alt} className="w-full h-48 object-cover" />
    <div className="p-4">
      <p className="text-white text-lg font-semibold">{text}</p>
    </div>
  </motion.div>
);