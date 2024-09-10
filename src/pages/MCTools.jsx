import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';
import { AnimatedBackground, GlowingButton } from '../components/AnimatedComponents';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import GiveCommandGenerator from '../components/GiveCommandGenerator';
import MOTDGenerator from '../components/MOTDGenerator';
import TimeConverter from '../components/TimeConverter';

const MCTools = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white relative overflow-hidden">
      <AnimatedBackground />
      <Header />
      <main className="container mx-auto px-4 py-32 relative z-10">
        <motion.h1
          className="text-5xl font-bold mb-8 text-center text-green-400"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Minecraft Tools
        </motion.h1>

        <Tabs defaultValue="give" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="give">Give Command</TabsTrigger>
            <TabsTrigger value="motd">MOTD Generator</TabsTrigger>
            <TabsTrigger value="time">Time Converter</TabsTrigger>
          </TabsList>
          <TabsContent value="give">
            <GiveCommandGenerator />
          </TabsContent>
          <TabsContent value="motd">
            <MOTDGenerator />
          </TabsContent>
          <TabsContent value="time">
            <TimeConverter />
          </TabsContent>
        </Tabs>
      </main>
      <Footer />
    </div>
  );
};

export default MCTools;