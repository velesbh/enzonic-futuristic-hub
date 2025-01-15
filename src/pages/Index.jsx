import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import DomainChangePopup from '../components/DomainChangePopup';

const Index = () => {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    // Show popup after a short delay
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-green-900 via-green-800 to-gray-900">
      <motion.div
        className="absolute inset-0 opacity-50"
        animate={{
          background: [
            'linear-gradient(45deg, #064e3b 0%, #065f46 50%, #047857 100%)',
            'linear-gradient(225deg, #065f46 0%, #047857 50%, #064e3b 100%)',
            'linear-gradient(45deg, #047857 0%, #064e3b 50%, #065f46 100%)',
          ],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />
      
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center text-white">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-bold text-center mb-8"
        >
          This Website Is Becoming A Better Place
        </motion.h1>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="w-16 h-16 border-t-4 border-green-500 border-solid rounded-full animate-spin"
        />
      </div>

      <DomainChangePopup 
        isOpen={showPopup}
        onClose={() => setShowPopup(false)}
      />
    </div>
  );
};

export default Index;