import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDownIcon, MenuIcon, Sun, Moon, Home, Users, Mail, Tool } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useTheme } from './ThemeProvider';

const navItemVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 100 } },
};

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const services = [
    { name: "Enzonic Hosting", path: "/hosting", icon: Home },
    { name: "Enzonic Network", path: "/enzonic-network", icon: Users },
    { name: "Enzonic News", path: "/news", icon: Mail },
    { name: "Enzonic MC Tools", path: "/mc-tools", icon: Tool },
  ];

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
        isScrolled ? 'bg-white dark:bg-gray-900 shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <Link to="/">
            <motion.div
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
            >
              <img src="https://i.postimg.cc/9XDjPXxj/logo-for-Enzonic-productions-modified.png" alt="Enzonic Logo" className="h-16 w-16" />
            </motion.div>
          </Link>
          <nav className="hidden md:flex items-center space-x-4">
            <NavItem to="/" icon={Home}>Home</NavItem>
            <motion.div variants={navItemVariants}>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="modern-text">
                    Services <ChevronDownIcon className="ml-2 h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
                  {services.map((service, index) => (
                    <DropdownMenuItem key={index} className="modern-text hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-300">
                      <Link to={service.path} className="flex items-center">
                        <service.icon className="mr-2 h-4 w-4" />
                        <span>{service.name}</span>
                      </Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            </motion.div>
            <NavItem to="/team" icon={Users}>Team</NavItem>
            <NavItem to="/contact" icon={Mail}>Contact</NavItem>
            <NavItem to="/mc-tools" icon={Tool}>MC Tools</NavItem>
          </nav>
          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="modern-text"
            >
              {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
            </Button>
            <Button
              variant="ghost"
              className="md:hidden modern-text"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <MenuIcon className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </div>
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white dark:bg-gray-900 shadow-lg"
          >
            <nav className="container mx-auto px-4 py-4">
              <ul className="space-y-2">
                <MobileNavItem to="/" onClick={() => setIsMobileMenuOpen(false)} icon={Home}>Home</MobileNavItem>
                {services.map((service, index) => (
                  <MobileNavItem key={index} to={service.path} onClick={() => setIsMobileMenuOpen(false)} icon={service.icon}>
                    {service.name}
                  </MobileNavItem>
                ))}
                <MobileNavItem to="/team" onClick={() => setIsMobileMenuOpen(false)} icon={Users}>Team</MobileNavItem>
                <MobileNavItem to="/contact" onClick={() => setIsMobileMenuOpen(false)} icon={Mail}>Contact</MobileNavItem>
                <MobileNavItem to="/mc-tools" onClick={() => setIsMobileMenuOpen(false)} icon={Tool}>MC Tools</MobileNavItem>
              </ul>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

const NavItem = ({ children, to, icon: Icon }) => (
  <motion.li variants={navItemVariants}>
    <Link to={to}>
      <Button variant="ghost" className="modern-text flex items-center">
        <Icon className="mr-2 h-4 w-4" />
        {children}
      </Button>
    </Link>
  </motion.li>
);

const MobileNavItem = ({ children, to, onClick, icon: Icon }) => (
  <motion.li
    variants={navItemVariants}
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
  >
    <Link to={to} onClick={onClick}>
      <Button variant="ghost" className="w-full text-left modern-text flex items-center">
        <Icon className="mr-2 h-4 w-4" />
        {children}
      </Button>
    </Link>
  </motion.li>
);

export default Header;