import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const achievements = [
  { id: 'story/root', name: 'Minecraft' },
  { id: 'story/mine_stone', name: 'Stone Age' },
  { id: 'story/upgrade_tools', name: 'Getting an Upgrade' },
  { id: 'story/smelt_iron', name: 'Acquire Hardware' },
  { id: 'story/obtain_armor', name: 'Suit Up' },
  { id: 'story/lava_bucket', name: 'Hot Stuff' },
  { id: 'story/iron_tools', name: 'Isn't It Iron Pick' },
  { id: 'story/deflect_arrow', name: 'Not Today, Thank You' },
  { id: 'story/form_obsidian', name: 'Ice Bucket Challenge' },
  { id: 'story/mine_diamond', name: 'Diamonds!' },
  { id: 'story/enter_the_nether', name: 'We Need to Go Deeper' },
  { id: 'story/shiny_gear', name: 'Cover Me with Diamonds' },
  { id: 'story/enchant_item', name: 'Enchanter' },
  { id: 'story/cure_zombie_villager', name: 'Zombie Doctor' },
  { id: 'story/follow_ender_eye', name: 'Eye Spy' },
  { id: 'story/enter_the_end', name: 'The End?' },
];

const AchievementGenerator = () => {
  const [selectedAchievement, setSelectedAchievement] = useState('');
  const [playerName, setPlayerName] = useState('');
  const [command, setCommand] = useState('');

  const generateCommand = () => {
    if (selectedAchievement && playerName) {
      setCommand(`/advancement grant ${playerName} only minecraft:${selectedAchievement}`);
    } else {
      setCommand('Please select an achievement and enter a player name.');
    }
  };

  return (
    <Card className="bg-gray-800 text-white">
      <CardHeader>
        <CardTitle>Achievement Generator</CardTitle>
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
          placeholder="Player name"
          value={playerName}
          onChange={(e) => setPlayerName(e.target.value)}
          className="bg-gray-700 text-white"
        />
        <Button onClick={generateCommand} className="w-full bg-green-600 hover:bg-green-700">Generate Command</Button>
        {command && (
          <div className="mt-4 p-4 bg-gray-900 rounded">
            <p className="font-mono">{command}</p>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default AchievementGenerator;