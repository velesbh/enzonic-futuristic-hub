import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const ServiceCard = ({ title, description, action }) => (
  <Card className="bg-gray-800 border-gray-700">
    <CardHeader>
      <CardTitle className="text-blue-400">{title}</CardTitle>
      <CardDescription>{description}</CardDescription>
    </CardHeader>
    <CardContent>
      <Button variant="outline" className="w-full">{action}</Button>
    </CardContent>
  </Card>
);

const Services = () => {
  const services = [
    { title: "Enzonic Hosting", description: "We offer way more than you expect", action: "ENTER" },
    { title: "Enzonic Games", description: "Games developed by Enzonic Studios", action: "DOWNLOADS" },
    { title: "Enzonic Events", description: "In Minecraft events", action: "DISCORD" },
    { title: "Enzonic Translate", description: "AI-powered translator", action: "TRY NOW" },
    { title: "Enzonic AI", description: "Games developed by Enzonic Studios", action: "TRY NOW" },
    { title: "Enzonic Web Designer", description: "A no coding website designer", action: "TRY NOW" },
    { title: "Enzonic Cloud", description: "Free and paid cloud storage platform", action: "TRY NOW" },
    { title: "Enzonic VPN", description: "A free and secure VPN", action: "TRY NOW" },
    { title: "Enzonic Productions", description: "High quality in-Minecraft or animated movies/series", action: "WATCH NOW" },
  ];

  return (
    <section className="py-12">
      <h2 className="text-3xl font-bold mb-8 text-center text-blue-400">Our Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <ServiceCard key={index} {...service} />
        ))}
      </div>
    </section>
  );
};

export default Services;