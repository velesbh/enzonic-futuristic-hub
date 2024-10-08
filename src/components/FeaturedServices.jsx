import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Server, Network, BrainCircuit, Wrench, ArrowRight } from 'lucide-react';
import { GlowingButton } from './AnimatedComponents';

const ServiceCard = ({ title, icon: Icon, to, description }) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
  >
    <Link to={to}>
      <Card className="bg-gradient-to-br from-gray-800 to-gray-900 hover:from-gray-700 hover:to-gray-800 transition-all duration-300 h-full border-2 border-blue-500/30 hover:border-blue-400">
        <CardContent className="p-6 flex flex-col items-center text-center h-full">
          <Icon className="w-16 h-16 text-blue-400 mb-4" />
          <h3 className="text-2xl font-semibold text-blue-300 mb-2">{title}</h3>
          <p className="text-blue-100 flex-grow">{description}</p>
        </CardContent>
      </Card>
    </Link>
  </motion.div>
);

export const FeaturedServices = () => (
  <motion.section
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, delay: 0.6 }}
    className="mb-16 relative"
  >
    <h2 className="text-4xl font-bold mb-8 text-center text-blue-400">Featured Services</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      <ServiceCard 
        title="Enzonic Hosting" 
        icon={Server} 
        to="/hosting"
        description="Powerful and reliable game server hosting solutions."
      />
      <ServiceCard 
        title="Enzonic Network" 
        icon={Network} 
        to="/enzonic-network"
        description="Create, share, and play amazing minigames with the community."
      />
      <ServiceCard 
        title="Enzonic AI" 
        icon={BrainCircuit} 
        to="/enzonic-ai"
        description="Cutting-edge AI tools to enhance your projects."
      />
      <ServiceCard 
        title="MC Tools" 
        icon={Wrench} 
        to="/mc-tools"
        description="Essential tools for Minecraft players and server admins."
      />
    </div>
    <div className="text-center mt-8">
      <Link to="/services">
        <GlowingButton className="bg-blue-500 hover:bg-blue-600 text-white">
          View All Services <ArrowRight className="ml-2 h-4 w-4" />
        </GlowingButton>
      </Link>
    </div>
  </motion.section>
);