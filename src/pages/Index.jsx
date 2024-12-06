import React from 'react';
import { motion } from 'framer-motion';
import { Loader2 } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center max-w-2xl mx-auto"
      >
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          className="mb-12"
        >
          <Loader2 className="w-20 h-20 text-white mx-auto" />
        </motion.div>
        
        <motion.h1 
          className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          This Website Is
        </motion.h1>
        
        <motion.h2 
          className="text-3xl md:text-5xl font-bold text-white bg-clip-text"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
        >
          Becoming A Better Place
        </motion.h2>
      </motion.div>
    </div>
  );
};

export default Index;