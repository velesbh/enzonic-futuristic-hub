import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Settings } from 'lucide-react';
import { Link } from 'react-router-dom';

const AnimatedGrid = () => {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden">
      {Array.from({ length: 100 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute bg-green-500 opacity-5"
          style={{
            width: 2,
            height: 2,
            left: `${(i % 10) * 10}%`,
            top: `${Math.floor(i / 10) * 10}%`,
          }}
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.03, 0.05, 0.03],
          }}
          transition={{
            duration: Math.random() * 4 + 2,
            repeat: Infinity,
            repeatType: 'reverse',
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  );
};

const FeatureCard = ({ title, icon: Icon }) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    className="bg-gray-800 p-6 rounded-lg shadow-lg flex flex-col items-center"
  >
    <Icon className="w-12 h-12 text-green-400 mb-4" />
    <h3 className="text-lg font-semibold text-green-400">{title}</h3>
  </motion.div>
);

const EnzonicHosting = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-green-400 relative overflow-hidden">
      <AnimatedGrid />
      <Header />
      <main className="container mx-auto px-4 py-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-6xl font-bold mb-4 text-green-400">Welcome to Enzonic Hosting</h1>
          <p className="text-2xl mb-8 text-green-300">Powerful and reliable hosting solutions</p>
          <div className="flex justify-center space-x-4 flex-wrap">
            <Link to="/">
              <Button variant="outline" className="m-2 text-green-400 border-green-400 bg-gray-800 hover:bg-green-900 hover:text-green-300">
                Home
              </Button>
            </Link>
            <a href="https://panel.enzonic.xyz" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" className="m-2 text-green-400 border-green-400 bg-gray-800 hover:bg-green-900 hover:text-green-300">
                Game Panel
              </Button>
            </a>
            <a href="https://webpanel.enzonic.xyz" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" className="m-2 text-green-400 border-green-400 bg-gray-800 hover:bg-green-900 hover:text-green-300">
                Webhosting Panel
              </Button>
            </a>
            <a href="https://vps.enzonic.xyz" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" className="m-2 text-green-400 border-green-400 bg-gray-800 hover:bg-green-900 hover:text-green-300">
                VPS Panel
              </Button>
            </a>
          </div>
        </motion.div>
        
        <section className="mb-16">
          <h2 className="text-4xl font-bold mb-8 text-center text-green-400">Our Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard title="Minecraft Servers" icon={Settings} />
            <FeatureCard title="Rust Servers" icon={Settings} />
            <FeatureCard title="Discord Bot Hosting" icon={Settings} />
            <FeatureCard title="Website Hosting" icon={Settings} />
            <FeatureCard title="Voice Server Hosting" icon={Settings} />
            <FeatureCard title="VPS Hosting" icon={Settings} />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default EnzonicHosting;