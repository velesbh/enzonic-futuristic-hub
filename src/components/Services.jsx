import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { ServerIcon, GamepadIcon, CalendarIcon, LanguagesIcon, BrainCircuitIcon, PencilRulerIcon, CloudIcon, ShieldCheckIcon, VideoIcon } from 'lucide-react';

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

const ServiceCard = ({ title, description, action, icon: Icon }) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
  >
    <Card className="bg-gray-800 border-gray-700 h-full">
      <CardHeader>
        <Icon className="w-12 h-12 mb-4 text-green-400" />
        <CardTitle className="text-green-400">{title}</CardTitle>
        <CardDescription className="text-green-200">{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <Button variant="outline" className="w-full text-green-400 border-green-400 hover:bg-green-400 hover:text-gray-800">{action}</Button>
      </CardContent>
    </Card>
  </motion.div>
);

const Services = () => {
  const services = [
    { title: "Enzonic Hosting", description: "We offer way more than you expect", action: "ENTER" },
    { title: "Enzonic Games", description: "Games developed by Enzonic Studios", action: "DOWNLOADS" },
    { title: "Enzonic Events", description: "In Minecraft events", action: "DISCORD" },
    { title: "Enzonic Translate", description: "AI-powered translator", action: "TRY NOW" },
    { title: "Enzonic AI", description: "Advanced AI solutions", action: "TRY NOW" },
    { title: "Enzonic Web Designer", description: "A no coding website designer", action: "TRY NOW" },
    { title: "Enzonic Cloud", description: "Free and paid cloud storage platform", action: "TRY NOW" },
    { title: "Enzonic VPN", description: "A free and secure VPN", action: "TRY NOW" },
    { title: "Enzonic Productions", description: "High quality in-Minecraft or animated movies/series", action: "WATCH NOW" },
  ];

  return (
    <section className="py-12">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-3xl font-bold mb-8 text-center text-green-400"
      >
        Our Services
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <ServiceCard {...service} icon={iconMap[service.title]} />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Services;
