import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowUpCircle } from 'lucide-react';

export const AnimatedBackground = () => (
  <div className="fixed inset-0 z-0 overflow-hidden">
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
    {[...Array(50)].map((_, i) => (
      <motion.div
        key={i}
        className="absolute rounded-full bg-white opacity-20"
        style={{
          width: Math.random() * 3 + 1,
          height: Math.random() * 3 + 1,
          top: `${Math.random() * 100}%`,
          left: `${Math.random() * 100}%`,
        }}
        animate={{
          y: [0, -1000],
          opacity: [0, 0.5, 0],
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

export const FloatingElement = ({ children }) => (
  <motion.div
    animate={{
      y: [0, -10, 0],
    }}
    transition={{
      duration: 5,
      repeat: Infinity,
      repeatType: 'reverse',
      ease: 'easeInOut',
    }}
  >
    {children}
  </motion.div>
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

export const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = React.useState(false);
  const controls = motion.useAnimation();

  React.useEffect(() => {
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

  React.useEffect(() => {
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

export const SmoothFadeIn = ({ children, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, delay }}
  >
    {children}
  </motion.div>
);

export const PulsingIcon = ({ icon: Icon, size = 24, color = "text-green-500" }) => (
  <motion.div
    animate={{
      scale: [1, 1.2, 1],
      opacity: [0.7, 1, 0.7],
    }}
    transition={{
      duration: 2,
      repeat: Infinity,
      repeatType: 'reverse',
    }}
  >
    <Icon className={`w-${size} h-${size} ${color}`} />
  </motion.div>
);

export const SlideInText = ({ children }) => (
  <motion.div
    initial={{ opacity: 0, x: -20 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.5 }}
  >
    {children}
  </motion.div>
);

export const FadeInScale = ({ children }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.9 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.5 }}
  >
    {children}
  </motion.div>
);

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
        transition={{ duration: 0.5, delay: index * 0.1 }}
      >
        {child}
      </motion.div>
    ))}
  </motion.div>
);

export const EnzonicLogo = () => (
  <motion.img
    src="/enzonic-logo.png"
    alt="Enzonic Logo"
    className="w-32 h-32 mx-auto mb-8"
    animate={{
      y: [0, -10, 0],
      rotate: [-5, 5, -5],
    }}
    transition={{
      duration: 5,
      repeat: Infinity,
      repeatType: 'reverse',
    }}
  />
);

export const ImageCard = ({ src, alt, text }) => (
  <motion.div
    className="relative overflow-hidden rounded-lg shadow-lg"
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
  >
    <img src={src} alt={alt} className="w-full h-48 object-cover" />
    <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <p className="text-white text-lg font-bold">{text}</p>
    </div>
  </motion.div>
);

export const AbstractShapes = () => (
  <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
    {[...Array(10)].map((_, i) => (
      <motion.div
        key={i}
        className="absolute rounded-full bg-gradient-to-r from-blue-500 to-purple-500 opacity-20"
        style={{
          width: Math.random() * 300 + 50,
          height: Math.random() * 300 + 50,
          top: `${Math.random() * 100}%`,
          left: `${Math.random() * 100}%`,
        }}
        animate={{
          x: [0, Math.random() * 100 - 50],
          y: [0, Math.random() * 100 - 50],
          rotate: [0, 360],
          scale: [1, 1.5, 1],
        }}
        transition={{
          duration: Math.random() * 20 + 10,
          repeat: Infinity,
          repeatType: 'reverse',
        }}
      />
    ))}
  </div>
);

// Export all components
export { AnimatedBackground, FloatingElement, GlowingButton, ScrollToTopButton, SmoothFadeIn, PulsingIcon, SlideInText, FadeInScale, AnimatedGrid, EnzonicLogo, ImageCard, AbstractShapes };
