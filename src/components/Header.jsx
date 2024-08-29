import React from 'react';
import { Button } from '@/components/ui/button';

const Header = () => {
  return (
    <header className="bg-gray-800 py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <h1 className="text-3xl font-bold text-blue-500">Enzonic</h1>
        <nav>
          <ul className="flex space-x-4">
            <li><Button variant="ghost">Home</Button></li>
            <li><Button variant="ghost">Services</Button></li>
            <li><Button variant="ghost">Team</Button></li>
            <li><Button variant="ghost">Contact</Button></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;