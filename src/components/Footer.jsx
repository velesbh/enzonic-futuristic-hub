import React from 'react';
import { Button } from '@/components/ui/button';
import { LockIcon } from 'lucide-react';

const Footer = ({ onAdminClick }) => {
  return (
    <footer className="bg-gray-100 dark:bg-gray-800 py-8 relative">
      <div className="container mx-auto px-4 text-center">
        <p className="modern-text">&copy; 2024 Enzonic. All rights reserved.</p>
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