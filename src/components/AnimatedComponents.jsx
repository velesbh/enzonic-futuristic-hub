import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowUpCircle } from 'lucide-react';

export const AnimatedBackground = () => (
  <div className="fixed inset-0 z-0 overflow-hidden">
    <motion.div
      className="absolute inset-0 modern-gradient opacity-20"
      animate={{
        backgroundPosition: ['0% 0%', '100% 100%'],
      }}
      transition={{
        duration: 20,
        repeat: Infinity,
        repeatType: 'reverse',
      }}
    />
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
    <span className="relative z-10 text-black">{children}</span>
    <motion.div
      className="absolute inset-0 bg-gradient-to-r from-green-400 to-green-600 opacity-75"
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
