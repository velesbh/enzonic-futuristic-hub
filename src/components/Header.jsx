import React from 'react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDownIcon } from 'lucide-react';
import { motion } from 'framer-motion';

const Header = () => {
  const services = [
    "Enzonic Hosting",
    "Enzonic Games",
    "Enzonic Events",
    "Enzonic Translate",
    "Enzonic AI",
    "Enzonic Web Designer",
    "Enzonic Cloud",
    "Enzonic VPN",
    "Enzonic Productions",
  ];

  return (
    <motion.header
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-gray-800 py-4"
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <img src="/enzonic-logo.png" alt="Enzonic Logo" className="h-12 w-12" />
        </motion.div>
        <nav>
          <ul className="flex space-x-4 items-center">
            <li><Button variant="ghost" className="text-green-400">Home</Button></li>
            <li>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="text-green-400">
                    Services <ChevronDownIcon className="ml-2 h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="bg-gray-800 border-gray-700">
                  {services.map((service, index) => (
                    <DropdownMenuItem key={index} className="text-green-400 hover:bg-gray-700">
                      {service}
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            </li>
            <li><Button variant="ghost" className="text-green-400">Team</Button></li>
            <li><Button variant="ghost" className="text-green-400">Contact</Button></li>
          </ul>
        </nav>
      </div>
    </motion.header>
  );
};

export default Header;
