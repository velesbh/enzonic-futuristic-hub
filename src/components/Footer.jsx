import React from 'react';
import { Button } from '@/components/ui/button';
import { LockIcon } from 'lucide-react';

const Footer = ({ onAdminClick }) => {
  return (
    <footer className="bg-gray-100 dark:bg-gray-800 py-8 relative">
      <div className="container mx-auto px-4 text-center">
        <p className="text-gray-600 dark:text-gray-400">&copy; 2024 Enzonic. All rights reserved.</p>
        <Button
          variant="ghost"
          size="sm"
          className="absolute bottom-2 right-2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
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