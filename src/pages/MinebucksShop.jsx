import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';
import { AnimatedBackground, GlowingButton } from '../components/AnimatedComponents';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ShoppingCart, Coins } from 'lucide-react';

const MinebucksPackage = ({ title, amount, price, bonus }) => (
  <motion.div whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 300 }}>
    <Card className="bg-gradient-to-br from-yellow-400 to-yellow-600 text-black">
      <CardHeader>
        <CardTitle className="text-2xl font-bold">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-4xl font-bold mb-2">{amount} Minebucks</p>
        {bonus && <p className="text-xl font-semibold text-green-800 mb-2">+{bonus} Bonus!</p>}
        <p className="text-2xl mb-4">${price}</p>
        <GlowingButton className="w-full bg-purple-600 hover:bg-purple-700 text-white">
          <ShoppingCart className="mr-2" /> Buy Now
        </GlowingButton>
      </CardContent>
    </Card>
  </motion.div>
);

const MinebucksShop = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-yellow-900 to-purple-900 text-white relative overflow-hidden">
      <AnimatedBackground />
      <Header />
      <main className="container mx-auto px-4 py-32 relative z-10">
        <motion.h1
          className="text-6xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-yellow-600"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Minebucks Shop
        </motion.h1>

        <motion.p
          className="text-xl text-center mb-12 text-yellow-200"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Power up your Enzonic Network experience with Minebucks!
        </motion.p>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <MinebucksPackage title="Starter Pack" amount={1000} price={9.99} />
          <MinebucksPackage title="Popular Pack" amount={5000} price={39.99} bonus={500} />
          <MinebucksPackage title="Ultimate Pack" amount={10000} price={69.99} bonus={2000} />
        </motion.div>

        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <h2 className="text-3xl font-bold mb-4 text-yellow-400">Why Choose Minebucks?</h2>
          <p className="text-xl text-yellow-200 mb-6">Enhance your gaming experience, unlock exclusive content, and support the Enzonic Network community!</p>
          <GlowingButton className="bg-yellow-500 hover:bg-yellow-600 text-black">
            <Coins className="mr-2" /> Learn More About Minebucks
          </GlowingButton>
        </motion.div>
      </main>
      <Footer />
    </div>
  );
};

export default MinebucksShop;
