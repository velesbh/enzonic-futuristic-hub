import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';
import { AnimatedBackground, GlowingButton } from '../components/AnimatedComponents';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { minecraftItems } from '../data/minecraft-items';

const GiveCommandGenerator = () => {
  const [item, setItem] = useState('');
  const [amount, setAmount] = useState(1);
  const [data, setData] = useState(0);
  const [giveCommand, setGiveCommand] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredItems = minecraftItems.filter(item => 
    item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.id.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const generateCommand = () => {
    setGiveCommand(`/give @p ${item} ${amount} ${data}`);
  };

  return (
    <Card className="bg-gray-800 text-white">
      <CardHeader>
        <CardTitle>Give Command Generator</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <Input 
          placeholder="Search for an item..." 
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="bg-gray-700 text-white"
        />
        <Select onValueChange={setItem}>
          <SelectTrigger className="bg-gray-700 text-white">
            <SelectValue placeholder="Select an item" />
          </SelectTrigger>
          <SelectContent className="bg-gray-700 text-white max-h-60 overflow-y-auto">
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
          className="bg-gray-700 text-white"
        />
        <Input 
          type="number" 
          placeholder="Data value" 
          value={data} 
          onChange={(e) => setData(e.target.value)}
          className="bg-gray-700 text-white"
        />
        <GlowingButton onClick={generateCommand}>Generate</GlowingButton>
        <p className="mt-2 p-2 bg-gray-900 rounded">Command: {giveCommand}</p>
      </CardContent>
    </Card>
  );
};

const MOTDGenerator = () => {
  const [motd, setMotd] = useState('');
  const [preview, setPreview] = useState('');
  const [selectedColor, setSelectedColor] = useState('f');

  const colors = [
    { code: '0', name: 'Black', hex: '#000000' },
    { code: '1', name: 'Dark Blue', hex: '#0000AA' },
    { code: '2', name: 'Dark Green', hex: '#00AA00' },
    { code: '3', name: 'Dark Aqua', hex: '#00AAAA' },
    { code: '4', name: 'Dark Red', hex: '#AA0000' },
    { code: '5', name: 'Dark Purple', hex: '#AA00AA' },
    { code: '6', name: 'Gold', hex: '#FFAA00' },
    { code: '7', name: 'Gray', hex: '#AAAAAA' },
    { code: '8', name: 'Dark Gray', hex: '#555555' },
    { code: '9', name: 'Blue', hex: '#5555FF' },
    { code: 'a', name: 'Green', hex: '#55FF55' },
    { code: 'b', name: 'Aqua', hex: '#55FFFF' },
    { code: 'c', name: 'Red', hex: '#FF5555' },
    { code: 'd', name: 'Light Purple', hex: '#FF55FF' },
    { code: 'e', name: 'Yellow', hex: '#FFFF55' },
    { code: 'f', name: 'White', hex: '#FFFFFF' },
  ];

  const generateMOTD = (text, color) => {
    const coloredText = `§${color}${text}`;
    setMotd(coloredText);
    setPreview(coloredText.replace(/§./g, ''));
  };

  return (
    <Card className="bg-gray-800 text-white">
      <CardHeader>
        <CardTitle>MOTD Generator</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <Input 
          placeholder="Enter MOTD text" 
          onChange={(e) => generateMOTD(e.target.value, selectedColor)}
          className="bg-gray-700 text-white"
        />
        <Select onValueChange={(color) => {
          setSelectedColor(color);
          generateMOTD(motd.replace(/§./g, ''), color);
        }}>
          <SelectTrigger className="bg-gray-700 text-white">
            <SelectValue placeholder="Select color" />
          </SelectTrigger>
          <SelectContent className="bg-gray-700 text-white">
            {colors.map((color) => (
              <SelectItem key={color.code} value={color.code}>
                <div className="flex items-center">
                  <div className="w-4 h-4 mr-2 rounded" style={{ backgroundColor: color.hex }}></div>
                  {color.name}
                </div>
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <div className="mt-4 p-4 bg-gray-900 rounded font-minecraft" style={{ lineHeight: '1.5', whiteSpace: 'pre-wrap', fontFamily: "'Minecraft', monospace" }}>
          {preview.split('').map((char, index) => {
            const colorCode = motd[index * 2 + 1];
            const color = colors.find(c => c.code === colorCode)?.hex || '#FFFFFF';
            return <span key={index} style={{ color }}>{char}</span>;
          })}
        </div>
        <p className="mt-2 p-2 bg-gray-900 rounded">Config Text: motd={motd}</p>
      </CardContent>
    </Card>
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
    <Card className="bg-gray-800 text-white">
      <CardHeader>
        <CardTitle>Time Converter</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <Label htmlFor="ticks">Ticks</Label>
          <Input 
            id="ticks" 
            type="number" 
            value={ticks} 
            onChange={(e) => setTicks(e.target.value)}
            className="bg-gray-700 text-white"
          />
          <Button onClick={convertTicksToSeconds} className="mt-2">Convert to Seconds</Button>
        </div>
        <div>
          <Label htmlFor="seconds">Seconds</Label>
          <Input 
            id="seconds" 
            type="number" 
            value={seconds} 
            onChange={(e) => setSeconds(e.target.value)}
            className="bg-gray-700 text-white"
          />
          <Button onClick={convertSecondsToTicks} className="mt-2">Convert to Ticks</Button>
        </div>
      </CardContent>
    </Card>
  );
};

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