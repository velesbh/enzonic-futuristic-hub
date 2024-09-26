import React, { useState, useRef } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import html2canvas from 'html2canvas';
import { minecraftTextures } from '../utils/minecraftTextures';

const AchievementGenerator = () => {
  const [selectedIcon, setSelectedIcon] = useState('diamond');
  const [topText, setTopText] = useState('Achievement Get!');
  const [bottomText, setBottomText] = useState('Your achievement here');
  const achievementRef = useRef(null);

  const generateImage = () => {
    if (achievementRef.current) {
      html2canvas(achievementRef.current).then((canvas) => {
        const image = canvas.toDataURL('image/png');
        const link = document.createElement('a');
        link.href = image;
        link.download = 'minecraft-achievement.png';
        link.click();
      });
    }
  };

  return (
    <Card className="bg-gray-800 text-white">
      <CardHeader>
        <CardTitle>Minecraft Achievement Generator</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <Select onValueChange={setSelectedIcon}>
          <SelectTrigger className="bg-gray-700 text-white">
            <SelectValue placeholder="Select an icon" />
          </SelectTrigger>
          <SelectContent className="bg-gray-700 text-white">
            {Object.keys(minecraftTextures).map((texture) => (
              <SelectItem key={texture} value={texture}>{texture}</SelectItem>
            ))}
          </SelectContent>
        </Select>
        <Input
          placeholder="Top text"
          value={topText}
          onChange={(e) => setTopText(e.target.value)}
          className="bg-gray-700 text-white"
        />
        <Input
          placeholder="Bottom text"
          value={bottomText}
          onChange={(e) => setBottomText(e.target.value)}
          className="bg-gray-700 text-white"
        />
        <div
          ref={achievementRef}
          className="bg-gray-900 p-4 rounded-lg flex items-center space-x-4 border-2 border-gray-700"
          style={{ fontFamily: 'Minecraft, monospace' }}
        >
          <img src={minecraftTextures[selectedIcon]} alt="Achievement icon" className="w-12 h-12" />
          <div>
            <p className="text-yellow-400">{topText}</p>
            <p className="text-white">{bottomText}</p>
          </div>
        </div>
        <Button onClick={generateImage} className="w-full bg-green-600 hover:bg-green-700">Generate Image</Button>
      </CardContent>
    </Card>
  );
};

export default AchievementGenerator;