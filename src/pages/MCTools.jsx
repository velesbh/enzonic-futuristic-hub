import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';
import { AnimatedBackground, GlowingButton } from '../components/AnimatedComponents';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from '@/components/ui/button';

const GiveCommandGenerator = () => {
  const [item, setItem] = useState('');
  const [amount, setAmount] = useState(1);
  const [data, setData] = useState(0);
  const [giveCommand, setGiveCommand] = useState('');

  const generateCommand = () => {
    setGiveCommand(`/give @p ${item} ${amount} ${data}`);
  };

  return (
    <div className="space-y-4">
      <Input 
        placeholder="Search for an item..." 
        onChange={(e) => setItem(e.target.value)}
      />
      <Select onValueChange={setItem}>
        <SelectTrigger>
          <SelectValue placeholder="Select an item" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="minecraft:diamond_sword">Diamond Sword</SelectItem>
          <SelectItem value="minecraft:oak_planks">Oak Planks</SelectItem>
          {/* Add more items as needed */}
        </SelectContent>
      </Select>
      <Input 
        type="number" 
        placeholder="Amount" 
        value={amount} 
        onChange={(e) => setAmount(e.target.value)}
      />
      <Input 
        type="number" 
        placeholder="Data value" 
        value={data} 
        onChange={(e) => setData(e.target.value)}
      />
      <GlowingButton onClick={generateCommand}>Generate</GlowingButton>
      <p className="mt-2">Command: {giveCommand}</p>
    </div>
  );
};

const MOTDGenerator = () => {
  const [motd, setMotd] = useState('');
  const [preview, setPreview] = useState('');

  const generateMOTD = (text, color) => {
    const coloredText = `§${color}${text}`;
    setMotd(coloredText);
    setPreview(coloredText.replace(/§/g, '&'));
  };

  return (
    <div className="space-y-4">
      <Input 
        placeholder="Enter MOTD text" 
        onChange={(e) => generateMOTD(e.target.value, 'f')}
      />
      <Select onValueChange={(color) => generateMOTD(motd.replace(/§./g, ''), color)}>
        <SelectTrigger>
          <SelectValue placeholder="Select color" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="0">Black</SelectItem>
          <SelectItem value="4">Dark Red</SelectItem>
          <SelectItem value="a">Green</SelectItem>
          {/* Add more color options */}
        </SelectContent>
      </Select>
      <p className="mt-2">Preview: <span style={{ whiteSpace: 'pre-wrap' }}>{preview}</span></p>
    </div>
  );
};

const TimeConverter = () => {
  const [ticks, setTicks] = useState('');
  const [seconds, setSeconds] = useState('');

  const convertTicksToSeconds = () => {
    const secondsValue = parseInt(ticks) / 20;
    setSeconds(secondsValue.toFixed(2));
  };

  const convertSecondsToTicks = () => {
    const ticksValue = parseFloat(seconds) * 20;
    setTicks(Math.round(ticksValue));
  };

  return (
    <div className="space-y-4">
      <div>
        <Label htmlFor="ticks">Ticks</Label>
        <Input 
          id="ticks" 
          type="number" 
          value={ticks} 
          onChange={(e) => setTicks(e.target.value)}
        />
        <Button onClick={convertTicksToSeconds}>Convert to Seconds</Button>
      </div>
      <div>
        <Label htmlFor="seconds">Seconds</Label>
        <Input 
          id="seconds" 
          type="number" 
          value={seconds} 
          onChange={(e) => setSeconds(e.target.value)}
        />
        <Button onClick={convertSecondsToTicks}>Convert to Ticks</Button>
      </div>
    </div>
  );
};

const MCTools = () => {
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

        <Tabs defaultValue="give">
          <TabsList className="grid w-full grid-cols-3">
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