import React, { useState, useRef, useEffect } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import html2canvas from 'html2canvas';
import { minecraftTextures } from '../data/minecraftTextures';

const AchievementGenerator = () => {
  const [selectedIcon, setSelectedIcon] = useState('diamond');
  const [topText, setTopText] = useState('Achievement Get!');
  const [bottomText, setBottomText] = useState('Your achievement here');
  const achievementRef = useRef(null);
  const [iconImage, setIconImage] = useState(null);

  useEffect(() => {
    const img = new Image();
    img.crossOrigin = "anonymous";
    img.src = minecraftTextures[selectedIcon];
    img.onload = () => setIconImage(img);
    img.onerror = () => {
      console.error("Error loading image:", minecraftTextures[selectedIcon]);
      setIconImage(null);
    };
  }, [selectedIcon]);

  const generateImage = () => {
    if (achievementRef.current && iconImage) {
      html2canvas(achievementRef.current, {
        backgroundColor: null,
        scale: 2,
        useCORS: true,
        allowTaint: true,
      }).then((canvas) => {
        const ctx = canvas.getContext('2d');
        
        // Draw the achievement outline
        ctx.strokeStyle = '#2c2c2c';
        ctx.lineWidth = 4;
        ctx.strokeRect(0, 0, canvas.width, canvas.height);
        
        // Draw the icon
        ctx.drawImage(iconImage, 8, (canvas.height - 32) / 2, 32, 32);

        canvas.toBlob((blob) => {
          const url = URL.createObjectURL(blob);
          const link = document.createElement('a');
          link.href = url;
          link.download = 'minecraft-achievement.png';
          link.click();
          URL.revokeObjectURL(url);
        });
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
          {iconImage && <img src={iconImage.src} alt="Achievement icon" className="w-8 h-8" crossOrigin="anonymous" />}
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