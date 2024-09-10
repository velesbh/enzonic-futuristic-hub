import React from 'react';
import { Button } from '@/components/ui/button';

const Footer = ({ onAdminClick }) => {
  return (
    <footer className="bg-gray-800 py-8">
      <div className="container mx-auto px-4 text-center">
        <p className="text-gray-400">&copy; 2024 Enzonic. All rights reserved.</p>
        <Button
          variant="link"
          className="text-xs text-gray-500 mt-2 hover:text-gray-400"
          onClick={onAdminClick}
        >
          Admin
        </Button>
      </div>
    </footer>
  );
};

export default Footer;