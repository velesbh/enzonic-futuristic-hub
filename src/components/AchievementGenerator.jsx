import React, { useState, useRef } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import html2canvas from 'html2canvas';

const achievements = [
  { id: 'story/root', name: 'Minecraft' },
  { id: 'story/mine_stone', name: 'Stone Age' },
  { id: 'story/upgrade_tools', name: 'Getting an Upgrade' },
  { id: 'story/smelt_iron', name: 'Acquire Hardware' },
  { id: 'story/obtain_armor', name: 'Suit Up' },
  // Add more achievements as needed
];

const AchievementGenerator = () => {
  const [selectedAchievement, setSelectedAchievement] = useState('');
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
        <Select onValueChange={setSelectedAchievement}>
          <SelectTrigger className="bg-gray-700 text-white">
            <SelectValue placeholder="Select an achievement" />
          </SelectTrigger>
          <SelectContent className="bg-gray-700 text-white max-h-60 overflow-y-auto">
            {achievements.map((achievement) => (
              <SelectItem key={achievement.id} value={achievement.id}>{achievement.name}</SelectItem>
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
          className="bg-gray-900 p-4 rounded-lg flex items-center space-x-4"
          style={{ fontFamily: 'Minecraft, monospace' }}
        >
          <img src="/achievement-background.png" alt="Achievement background" className="w-12 h-12" />
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
