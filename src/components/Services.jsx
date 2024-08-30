import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { ServerIcon, GamepadIcon, CalendarIcon, LanguagesIcon, BrainCircuitIcon, PencilRulerIcon, CloudIcon, ShieldCheckIcon, VideoIcon } from 'lucide-react';
import { Link } from 'react-router-dom';

const iconMap = {
  "Enzonic Hosting": ServerIcon,
  "Enzonic Games": GamepadIcon,
  "Enzonic Events": CalendarIcon,
  "Enzonic Translate": LanguagesIcon,
  "Enzonic AI": BrainCircuitIcon,
  "Enzonic Web Designer": PencilRulerIcon,
  "Enzonic Cloud": CloudIcon,
  "Enzonic VPN": ShieldCheckIcon,
  "Enzonic Productions": VideoIcon,
};

const ServiceCard = ({ title, description, action, icon: Icon, to }) => (
  <motion.div
    whileHover={{ scale: 1.05, rotateY: 10 }}
    whileTap={{ scale: 0.95 }}
    transition={{ type: "spring", stiffness: 300 }}
  >
    <Card className="bg-gray-800 border-gray-700 h-full overflow-hidden relative">
      <CardHeader className="relative z-10">
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ type: "spring", stiffness: 500, delay: 0.2 }}
        >
          <Icon className="w-16 h-16 mb-4 text-green-400" />
        </motion.div>
        <CardTitle className="text-green-400 text-xl">{title}</CardTitle>
        <CardDescription className="text-green-200">{description}</CardDescription>
      </CardHeader>
      <CardContent className="relative z-10">
        <Link to={to}>
          <Button 
            variant="outline" 
            className="w-full text-green-400 border-green-400 bg-gray-800 hover:bg-green-900 hover:text-green-300 transition-all duration-300"
          >
            {action}
          </Button>
        </Link>
      </CardContent>
      <motion.div 
        className="absolute inset-0 bg-gradient-to-br from-green-900/20 to-green-400/5"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      />
    </Card>
  </motion.div>
);

const Services = () => {
  const services = [
    { title: "Enzonic Hosting", description: "We offer way more than you expect", action: "ENTER", to: "/hosting" },
    { title: "Enzonic Games", description: "Games developed by Enzonic Studios", action: "DOWNLOADS", to: "/" },
    { title: "Enzonic Events", description: "In Minecraft events", action: "DISCORD", to: "/" },
    { title: "Enzonic Translate", description: "AI-powered translator", action: "TRY NOW", to: "/" },
    { title: "Enzonic AI", description: "Advanced AI solutions", action: "TRY NOW", to: "/" },
    { title: "Enzonic Web Designer", description: "A no coding website designer", action: "TRY NOW", to: "/" },
    { title: "Enzonic Cloud", description: "Free and paid cloud storage platform", action: "TRY NOW", to: "/" },
    { title: "Enzonic VPN", description: "A free and secure VPN", action: "TRY NOW", to: "/" },
    { title: "Enzonic Productions", description: "High quality in-Minecraft or animated movies/series", action: "WATCH NOW", to: "/" },
  ];

  return (
    <section className="py-12">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl font-bold mb-12 text-center text-green-400"
      >
        Our Services
      </motion.h2>
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <ServiceCard {...service} icon={iconMap[service.title]} />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Services;
