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

const navItemVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 100 } },
};

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const services = [
    { name: "Enzonic Hosting", path: "/hosting" },
    { name: "Enzonic Games", path: "/" },
    { name: "Enzonic Events", path: "/" },
    { name: "Enzonic Translate", path: "/" },
    { name: "Enzonic AI", path: "/" },
    { name: "Enzonic Web Designer", path: "/" },
    { name: "Enzonic Cloud", path: "/" },
    { name: "Enzonic VPN", path: "/" },
    { name: "Enzonic Productions", path: "/" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const headerVariants = {
    hidden: { y: -100 },
    visible: { y: 0, transition: { type: 'spring', stiffness: 100, damping: 20 } },
  };

  return (
    <motion.header
      variants={headerVariants}
      initial="hidden"
      animate="visible"
      className={`fixed top-0 left-0 right-0 z-50 py-4 transition-all duration-300 ${
        isScrolled ? 'bg-gray-900/90 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <Link to="/">
            <motion.div
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
            >
              <img src="/enzonic-logo.png" alt="Enzonic Logo" className="h-16 w-16" />
            </motion.div>
          </Link>
          <nav className="hidden md:block">
            <ul className="flex space-x-4 items-center">
              <NavItem to="/">Home</NavItem>
              <motion.li variants={navItemVariants}>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" className="text-purple-400 hover:text-purple-300 transition-colors duration-300">
                      Services <ChevronDownIcon className="ml-2 h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="bg-gray-800 border-gray-700">
                    {services.map((service, index) => (
                      <DropdownMenuItem key={index} className="text-purple-400 hover:bg-purple-700 transition-colors duration-300">
                        <Link to={service.path}>{service.name}</Link>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              </motion.li>
              <NavItem to="/team">Team</NavItem>
              <NavItem to="/contact">Contact</NavItem>
            </ul>
          </nav>
          <Button
            variant="ghost"
            className="md:hidden text-purple-400"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <MenuIcon className="h-6 w-6" />
          </Button>
        </div>
      </div>
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-gray-900 shadow-lg"
          >
            <nav className="container mx-auto px-4 py-4">
              <ul className="space-y-2">
                <MobileNavItem to="/" onClick={() => setIsMobileMenuOpen(false)}>Home</MobileNavItem>
                {services.map((service, index) => (
                  <MobileNavItem key={index} to={service.path} onClick={() => setIsMobileMenuOpen(false)}>
                    {service.name}
                  </MobileNavItem>
                ))}
                <MobileNavItem to="/team" onClick={() => setIsMobileMenuOpen(false)}>Team</MobileNavItem>
                <MobileNavItem to="/contact" onClick={() => setIsMobileMenuOpen(false)}>Contact</MobileNavItem>
              </ul>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

const NavItem = ({ children, to }) => (
  <motion.li variants={navItemVariants}>
    <Link to={to}>
      <Button variant="ghost" className="text-purple-400 hover:text-purple-300 transition-colors duration-300">
        {children}
      </Button>
    </Link>
  </motion.li>
);

const MobileNavItem = ({ children, to, onClick }) => (
  <motion.li
    variants={navItemVariants}
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
  >
    <Link to={to} onClick={onClick}>
      <Button variant="ghost" className="w-full text-left text-purple-400 hover:text-purple-300 transition-colors duration-300">
        {children}
      </Button>
    </Link>
  </motion.li>
);

export default Header;