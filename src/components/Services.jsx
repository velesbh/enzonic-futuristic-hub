import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ServerIcon, GamepadIcon, CalendarIcon, LanguagesIcon, BrainCircuitIcon, PencilRulerIcon, CloudIcon, ShieldCheckIcon, VideoIcon, Briefcase, Users, MessageCircle, Network, Newspaper, Wrench } from 'lucide-react';

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
  "Enzonic Workspace": Briefcase,
  "Enzonic Connect": Users,
  "Enzonic Network": Network,
  "Enzonic News": Newspaper,
  "Enzonic MC Tools": Wrench,
};

const ServiceCard = ({ title, description, action, icon: Icon, to, index, comingSoon }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ scale: 1.05, rotateY: 10 }}
      whileTap={{ scale: 0.95 }}
    >
      <Card className="bg-gradient-to-br from-gray-800 to-gray-900 border-gray-700 h-full overflow-hidden relative shadow-xl">
        <CardHeader className="relative z-10">
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ type: "spring", stiffness: 500, delay: 0.2 }}
          >
            <Icon className="w-16 h-16 mb-4 text-green-400" />
          </motion.div>
          <CardTitle className="text-white text-2xl font-bold">{title}</CardTitle>
          <CardDescription className="text-gray-300">{description}</CardDescription>
        </CardHeader>
        <CardContent className="relative z-10">
          {comingSoon ? (
            <div>
              <p className="text-yellow-400 mb-4">Coming Soon</p>
              <a href="https://discord.gg/M4Dz3Gj5tR" target="_blank" rel="noopener noreferrer">
                <Button 
                  variant="outline" 
                  className="w-full text-white border-white bg-transparent hover:bg-gray-800 hover:text-gray-200 transition-all duration-300"
                >
                  Join Discord for Updates
                </Button>
              </a>
            </div>
          ) : (
            <Link to={to}>
              <Button 
                variant="outline" 
                className="w-full text-white border-white bg-transparent hover:bg-green-700 hover:text-white transition-all duration-300"
              >
                {action}
              </Button>
            </Link>
          )}
        </CardContent>
        <motion.div 
          className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-blue-500/5"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        />
      </Card>
    </motion.div>
  );
};

const Services = () => {
  const services = [
    { title: "Enzonic Hosting", description: "We offer way more than you expect", action: "ENTER", to: "/hosting" },
    { title: "Enzonic Games", description: "Games developed by Enzonic Studios", action: "DOWNLOADS", to: "/", comingSoon: true },
    { title: "Enzonic Events", description: "In Minecraft events", action: "DISCORD", to: "/", comingSoon: true },
    { title: "Enzonic Translate", description: "AI-powered translator", action: "TRY NOW", to: "/", comingSoon: true },
    { title: "Enzonic AI", description: "Advanced AI solutions", action: "TRY NOW", to: "/", comingSoon: true },
    { title: "Enzonic Web Designer", description: "A no coding website designer", action: "TRY NOW", to: "/", comingSoon: true },
    { title: "Enzonic Cloud", description: "Free and paid cloud storage platform", action: "TRY NOW", to: "/", comingSoon: true },
    { title: "Enzonic VPN", description: "A free and secure VPN", action: "TRY NOW", to: "/", comingSoon: true },
    { title: "Enzonic Productions", description: "High quality in-Minecraft or animated movies/series", action: "WATCH NOW", to: "/", comingSoon: true },
    { title: "Enzonic Workspace", description: "Collaborative tools for teams", action: "GET STARTED", to: "/", comingSoon: true },
    { title: "Enzonic Connect", description: "Social platform for gamers", action: "JOIN NOW", to: "/", comingSoon: true },
    { title: "Enzonic Network", description: "Create, share, and play amazing minigames", action: "EXPLORE", to: "/enzonic-network" },
    { title: "Enzonic News", description: "Stay updated with the latest Enzonic news", action: "READ NOW", to: "/news" },
    { title: "Enzonic MC Tools", description: "Useful tools for Minecraft players and server admins", action: "USE TOOLS", to: "/mc-tools" },
  ];

  return (
    <section className="py-12 relative overflow-hidden bg-gradient-to-b from-black to-gray-900">
      <motion.div
        className="absolute inset-0 z-0"
        animate={{
          background: [
            "linear-gradient(to right, #111, #222)",
            "linear-gradient(to right, #222, #111)",
          ],
        }}
        transition={{ duration: 10, repeat: Infinity, repeatType: "reverse" }}
      />
      <div className="relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-5xl font-bold mb-12 text-center text-green-400"
        >
          Our Services
        </motion.h2>
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 px-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} icon={iconMap[service.title]} index={index} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
