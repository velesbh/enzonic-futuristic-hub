import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';
import { AnimatedBackground, GlowingButton } from '../components/AnimatedComponents';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import GiveCommandGenerator from '../components/GiveCommandGenerator';
import MOTDGenerator from '../components/MOTDGenerator';
import TimeConverter from '../components/TimeConverter';
import { Wand2, MessageSquare, Clock } from 'lucide-react';

const ToolTab = ({ icon: Icon, label, value }) => (
  <TabsTrigger value={value} className="flex items-center space-x-2">
    <Icon className="w-5 h-5" />
    <span>{label}</span>
  </TabsTrigger>
);

const MCTools = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-900 to-blue-900 text-white relative overflow-hidden">
      <AnimatedBackground />
      <Header />
      <main className="container mx-auto px-4 py-32 relative z-10">
        <motion.h1
          className="text-6xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Minecraft Tools
        </motion.h1>

        <motion.p
          className="text-xl text-center mb-12 text-gray-300"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Enhance your Minecraft experience with our powerful and easy-to-use tools.
        </motion.p>

        <Tabs defaultValue="give" className="w-full max-w-4xl mx-auto">
          <TabsList className="grid w-full grid-cols-3 mb-8 bg-green-800 rounded-lg p-2">
            <ToolTab icon={Wand2} label="Give Command" value="give" />
            <ToolTab icon={MessageSquare} label="MOTD Generator" value="motd" />
            <ToolTab icon={Clock} label="Time Converter" value="time" />
          </TabsList>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <TabsContent value="give">
              <GiveCommandGenerator />
            </TabsContent>
            <TabsContent value="motd">
              <MOTDGenerator />
            </TabsContent>
            <TabsContent value="time">
              <TimeConverter />
            </TabsContent>
          </motion.div>
        </Tabs>

        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <h2 className="text-3xl font-bold mb-4 text-green-400">Need More Tools?</h2>
          <p className="text-xl text-gray-300 mb-6">We're constantly adding new features. Let us know what you'd like to see next!</p>
          <GlowingButton>Suggest a Tool</GlowingButton>
        </motion.div>
      </main>
      <Footer />
    </div>
  );
};

export default MCTools;