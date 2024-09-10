import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';
import { AnimatedBackground, GlowingButton } from '../components/AnimatedComponents';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const MCTools = () => {
  const [giveCommand, setGiveCommand] = useState('');
  const [motd, setMotd] = useState('');
  const [ticks, setTicks] = useState('');
  const [seconds, setSeconds] = useState('');

  const generateGiveCommand = (item, amount, data) => {
    setGiveCommand(`/give @p ${item} ${amount} ${data}`);
  };

  const generateMOTD = (text) => {
    setMotd(text.replace(/&/g, '§'));
  };

  const convertTicksToSeconds = (ticks) => {
    const secondsValue = ticks / 20;
    setSeconds(secondsValue.toFixed(2));
  };

  return (
    <div className="min-h-screen bg-background text-foreground relative overflow-hidden">
      <AnimatedBackground />
      <Header />
      <main className="container mx-auto px-4 py-32 relative z-10">
        <motion.h1
          className="text-5xl font-bold mb-8 text-center text-primary"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Minecraft Tools
        </motion.h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            className="bg-secondary p-6 rounded-lg shadow-lg"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2 className="text-2xl font-bold mb-4">Give Command Generator</h2>
            <div className="space-y-4">
              <div>
                <Label htmlFor="item">Item</Label>
                <Input id="item" placeholder="minecraft:diamond_sword" />
              </div>
              <div>
                <Label htmlFor="amount">Amount</Label>
                <Input id="amount" type="number" placeholder="1" />
              </div>
              <div>
                <Label htmlFor="data">Data</Label>
                <Input id="data" placeholder="0" />
              </div>
              <GlowingButton onClick={() => generateGiveCommand('minecraft:diamond_sword', 1, 0)}>
                Generate
              </GlowingButton>
              <p className="mt-2">Command: {giveCommand}</p>
            </div>
          </motion.div>

          <motion.div
            className="bg-secondary p-6 rounded-lg shadow-lg"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h2 className="text-2xl font-bold mb-4">MOTD Generator</h2>
            <div className="space-y-4">
              <div>
                <Label htmlFor="motd">MOTD Text</Label>
                <Input id="motd" placeholder="Welcome to &aEnzonic &bServer!" onChange={(e) => generateMOTD(e.target.value)} />
              </div>
              <p className="mt-2">Preview: <span style={{ whiteSpace: 'pre-wrap' }}>{motd}</span></p>
            </div>
          </motion.div>

          <motion.div
            className="bg-secondary p-6 rounded-lg shadow-lg"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h2 className="text-2xl font-bold mb-4">Ticks to Seconds Converter</h2>
            <div className="space-y-4">
              <div>
                <Label htmlFor="ticks">Ticks</Label>
                <Input id="ticks" type="number" placeholder="100" onChange={(e) => convertTicksToSeconds(e.target.value)} />
              </div>
              <p className="mt-2">Seconds: {seconds}</p>
            </div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default MCTools;