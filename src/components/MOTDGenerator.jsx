import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

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
        <div className="mt-4 p-4 bg-gray-900 rounded">
          <p className="font-mono">Config Text: motd={motd}</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default MOTDGenerator;