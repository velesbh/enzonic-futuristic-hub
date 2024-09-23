import React from 'react';
import { motion } from 'framer-motion';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { AnimatedBackground, GlowingButton } from '../components/AnimatedComponents';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const CustomPlan = () => {
  return (
    <div className="min-h-screen bg-black text-green-400">
      <AnimatedBackground />
      <Header />
      <main className="container mx-auto px-4 py-16 relative z-10">
        <motion.h1
          className="text-5xl font-bold mb-8 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Custom Plan Request
        </motion.h1>

        <Card className="max-w-2xl mx-auto bg-gray-800">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-center">Important Notice</CardTitle>
          </CardHeader>
          <CardContent className="text-center">
            <p className="mb-6">
              This feature isn't complete. Please take a screenshot and send this to: Velesbh0@gmail.com
              Or open a ticket on our discord: https://discord.gg/M4Dz3Gj5tR
            </p>
            <div className="flex justify-center space-x-4">
              <a href="https://discord.gg/M4Dz3Gj5tR" target="_blank" rel="noopener noreferrer">
                <GlowingButton>Join Discord</GlowingButton>
              </a>
              <a href="mailto:Velesbh0@gmail.com">
                <GlowingButton>Contact Us</GlowingButton>
              </a>
            </div>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
};

export default CustomPlan;
