import React from 'react';
import { Button } from '@/components/ui/button';
import { LockIcon, GitHub, Twitter, Facebook } from 'lucide-react';

const Footer = ({ onAdminClick }) => {
  return (
    <footer className="bg-gray-100 dark:bg-gray-800 py-8 relative">
      <div className="container mx-auto px-4 text-center">
        <p className="modern-text mb-4">&copy; 2024 Enzonic. All rights reserved.</p>
        <div className="flex justify-center space-x-4 mb-4">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="modern-text">
            <GitHub size={24} />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="modern-text">
            <Twitter size={24} />
          </a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="modern-text">
            <Facebook size={24} />
          </a>
        </div>
        <Button
          variant="ghost"
          size="sm"
          className="absolute bottom-2 right-2 modern-text"
          onClick={onAdminClick}
        >
          <LockIcon className="w-4 h-4 mr-1" />
          Admin
        </Button>
      </div>
    </footer>
  );
};

export default Footer;