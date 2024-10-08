import React from 'react';
import { Button } from '@/components/ui/button';
import { LockIcon, GithubIcon, TwitterIcon, InstagramIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { GlowingButton } from './AnimatedComponents';

const Footer = ({ onAdminClick }) => {
  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black py-12 relative">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <h3 className="text-xl font-bold text-blue-400 mb-4">About Enzonic</h3>
            <p className="text-gray-400">Empowering individuals and businesses with innovative technology solutions.</p>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }}>
            <h3 className="text-xl font-bold text-blue-400 mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-400 hover:text-blue-400 transition-colors duration-300">Home</Link></li>
              <li><Link to="/hosting" className="text-gray-400 hover:text-blue-400 transition-colors duration-300">Hosting</Link></li>
              <li><Link to="/enzonic-network" className="text-gray-400 hover:text-blue-400 transition-colors duration-300">Enzonic Network</Link></li>
              <li><Link to="/news" className="text-gray-400 hover:text-blue-400 transition-colors duration-300">News</Link></li>
            </ul>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}>
            <h3 className="text-xl font-bold text-blue-400 mb-4">Support</h3>
            <ul className="space-y-2">
              <li><Link to="/contact" className="text-gray-400 hover:text-blue-400 transition-colors duration-300">Contact Us</Link></li>
              <li><a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-300">FAQ</a></li>
              <li><a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-300">Terms of Service</a></li>
              <li><a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-300">Privacy Policy</a></li>
            </ul>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3 }}>
            <h3 className="text-xl font-bold text-blue-400 mb-4">Connect With Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-300">
                <GithubIcon />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-300">
                <TwitterIcon />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-300">
                <InstagramIcon />
              </a>
            </div>
          </motion.div>
        </div>
        <motion.div 
          className="mt-8 pt-8 border-t border-gray-800 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <p className="text-gray-400">&copy; 2024 Enzonic. All rights reserved.</p>
        </motion.div>
      </div>
      <GlowingButton
        variant="ghost"
        size="sm"
        className="absolute bottom-2 right-2 text-gray-500 hover:text-gray-300"
        onClick={onAdminClick}
      >
        <LockIcon className="w-4 h-4 mr-1" />
        Admin
      </GlowingButton>
    </footer>
  );
};

export default Footer;