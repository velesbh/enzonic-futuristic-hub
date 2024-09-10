import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';
import { AnimatedBackground, GlowingButton } from '../components/AnimatedComponents';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Button } from '@/components/ui/button';

const GiveCommandGenerator = () => {
  const [item, setItem] = useState('');
  const [amount, setAmount] = useState(1);
  const [data, setData] = useState(0);
  const [giveCommand, setGiveCommand] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  const items = [
    { id: 'minecraft:diamond_sword', name: 'Diamond Sword' },
    { id: 'minecraft:oak_planks', name: 'Oak Planks' },
    { id: 'minecraft:stone', name: 'Stone' },
    { id: 'minecraft:grass_block', name: 'Grass Block' },
    // Add more items as needed
  ];

  const filteredItems = items.filter(item => 
    item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.id.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const generateCommand = () => {
    setGiveCommand(`/give @p ${item} ${amount} ${data}`);
  };

  return (
    <div className="space-y-4">
      <Input 
        placeholder="Search for an item..." 
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <Select onValueChange={setItem}>
        <SelectTrigger>
          <SelectValue placeholder="Select an item" />
        </SelectTrigger>
        <SelectContent>
          {filteredItems.map(item => (
            <SelectItem key={item.id} value={item.id}>{item.name}</SelectItem>
          ))}
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
  const [selectedColor, setSelectedColor] = useState('f');

  const colors = [
    { code: '0', name: 'Black' },
    { code: '1', name: 'Dark Blue' },
    { code: '2', name: 'Dark Green' },
    { code: '3', name: 'Dark Aqua' },
    { code: '4', name: 'Dark Red' },
    { code: '5', name: 'Dark Purple' },
    { code: '6', name: 'Gold' },
    { code: '7', name: 'Gray' },
    { code: '8', name: 'Dark Gray' },
    { code: '9', name: 'Blue' },
    { code: 'a', name: 'Green' },
    { code: 'b', name: 'Aqua' },
    { code: 'c', name: 'Red' },
    { code: 'd', name: 'Light Purple' },
    { code: 'e', name: 'Yellow' },
    { code: 'f', name: 'White' },
  ];

  const generateMOTD = (text, color) => {
    const coloredText = `§${color}${text}`;
    setMotd(coloredText);
    setPreview(coloredText.replace(/§/g, '&'));
  };

  return (
    <div className="space-y-4">
      <Input 
        placeholder="Enter MOTD text" 
        onChange={(e) => generateMOTD(e.target.value, selectedColor)}
      />
      <Select onValueChange={(color) => {
        setSelectedColor(color);
        generateMOTD(motd.replace(/§./g, ''), color);
      }}>
        <SelectTrigger>
          <SelectValue placeholder="Select color" />
        </SelectTrigger>
        <SelectContent>
          {colors.map((color) => (
            <SelectItem key={color.code} value={color.code}>{color.name}</SelectItem>
          ))}
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
  const [selectedTool, setSelectedTool] = useState(null);

  const renderTool = () => {
    switch (selectedTool) {
      case 'give':
        return <GiveCommandGenerator />;
      case 'motd':
        return <MOTDGenerator />;
      case 'time':
        return <TimeConverter />;
      default:
        return null;
    }
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

        <div className="flex justify-center space-x-4 mb-8">
          <GlowingButton onClick={() => setSelectedTool('give')}>Give Command</GlowingButton>
          <GlowingButton onClick={() => setSelectedTool('motd')}>MOTD Generator</GlowingButton>
          <GlowingButton onClick={() => setSelectedTool('time')}>Time Converter</GlowingButton>
        </div>

        {renderTool()}
      </main>
      <Footer />
    </div>
  );
};

export default MCTools;