import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDownIcon, MenuIcon } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const services = [
    { name: "Enzonic Hosting", path: "/hosting" },
    { name: "Enzonic Games", path: "/" },
    { name: "Enzonic Events", path: "/" },
    { name: "Enzonic Translate", path: "/" },
    { name: "Enzonic AI", path: "/enzonic-ai" },
    { name: "Enzonic Web Designer", path: "/" },
    { name: "Enzonic Cloud", path: "/" },
    { name: "Enzonic VPN", path: "/" },
    { name: "Enzonic Productions", path: "/" },
    { name: "Enzonic Network", path: "/enzonic-network" },
    { name: "Enzonic News", path: "/news" },
    { name: "Enzonic MC Tools", path: "/mc-tools" },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 100, damping: 20 }}
      className={`fixed top-0 left-0 right-0 z-50 py-4 transition-all duration-300 ${
        isScrolled ? 'bg-gray-900/90 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <Link to="/">
            <motion.img
              src="https://i.postimg.cc/9XDjPXxj/logo-for-Enzonic-productions-modified.png"
              alt="Enzonic Logo"
              className="h-16 w-16"
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
            />
          </Link>
          <nav className="hidden md:flex items-center space-x-4">
            <NavItem to="/">Home</NavItem>
            <ServicesDropdown services={services} />
            <NavItem to="/team">Team</NavItem>
            <NavItem to="/contact">Contact</NavItem>
            <NavItem to="/mc-tools">MC Tools</NavItem>
            <ThemeToggle />
          </nav>
          <Button
            variant="ghost"
            className="md:hidden text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <MenuIcon className="h-6 w-6" />
          </Button>
        </div>
      </div>
      <MobileMenu isOpen={isMobileMenuOpen} services={services} onClose={() => setIsMobileMenuOpen(false)} />
    </motion.header>
  );
};

const NavItem = ({ children, to }) => (
  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
    <Link to={to}>
      <Button variant="ghost" className="text-white hover:text-blue-400 transition-colors duration-300">
        {children}
      </Button>
    </Link>
  </motion.div>
);

const ServicesDropdown = ({ services }) => (
  <DropdownMenu>
    <DropdownMenuTrigger asChild>
      <Button variant="ghost" className="text-white hover:text-blue-400 transition-colors duration-300">
        Services <ChevronDownIcon className="ml-2 h-4 w-4" />
      </Button>
    </DropdownMenuTrigger>
    <DropdownMenuContent className="bg-gray-800 border-gray-700">
      {services.map((service, index) => (
        <DropdownMenuItem key={index} className="text-white hover:bg-gray-700 transition-colors duration-300">
          <Link to={service.path}>{service.name}</Link>
        </DropdownMenuItem>
      ))}
    </DropdownMenuContent>
  </DropdownMenu>
);

const MobileMenu = ({ isOpen, services, onClose }) => (
  <AnimatePresence>
    {isOpen && (
      <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={{ opacity: 1, height: 'auto' }}
        exit={{ opacity: 0, height: 0 }}
        className="md:hidden bg-gray-900 shadow-lg"
      >
        <nav className="container mx-auto px-4 py-4">
          <ul className="space-y-2">
            <MobileNavItem to="/" onClick={onClose}>Home</MobileNavItem>
            {services.map((service, index) => (
              <MobileNavItem key={index} to={service.path} onClick={onClose}>
                {service.name}
              </MobileNavItem>
            ))}
            <MobileNavItem to="/team" onClick={onClose}>Team</MobileNavItem>
            <MobileNavItem to="/contact" onClick={onClose}>Contact</MobileNavItem>
            <MobileNavItem to="/mc-tools" onClick={onClose}>MC Tools</MobileNavItem>
            <li className="flex justify-center">
              <ThemeToggle />
            </li>
          </ul>
        </nav>
      </motion.div>
    )}
  </AnimatePresence>
);

const MobileNavItem = ({ children, to, onClick }) => (
  <motion.li whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
    <Link to={to} onClick={onClick}>
      <Button variant="ghost" className="w-full text-left text-white hover:text-blue-400 transition-colors duration-300">
        {children}
      </Button>
    </Link>
  </motion.li>
);

export default Header;