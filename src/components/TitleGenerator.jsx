import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const TitleGenerator = () => {
  const [title, setTitle] = useState('');
  const [subtitle, setSubtitle] = useState('');
  const [fadeIn, setFadeIn] = useState(10);
  const [stay, setStay] = useState(70);
  const [fadeOut, setFadeOut] = useState(20);
  const [titleColor, setTitleColor] = useState('white');
  const [subtitleColor, setSubtitleColor] = useState('yellow');
  const [command, setCommand] = useState('');

  const generateCommand = () => {
    const titleCommand = `/title @a title {"text":"${title}","color":"${titleColor}"}`;
    const subtitleCommand = `/title @a subtitle {"text":"${subtitle}","color":"${subtitleColor}"}`;
    const timesCommand = `/title @a times ${fadeIn} ${stay} ${fadeOut}`;
    setCommand(`${timesCommand}\n${titleCommand}\n${subtitleCommand}`);
  };

  return (
    <Card className="bg-gray-800 text-white">
      <CardHeader>
        <CardTitle>Title Generator</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <Input
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="bg-gray-700 text-white"
        />
        <Input
          placeholder="Subtitle"
          value={subtitle}
          onChange={(e) => setSubtitle(e.target.value)}
          className="bg-gray-700 text-white"
        />
        <div className="grid grid-cols-3 gap-4">
          <Input
            type="number"
            placeholder="Fade In"
            value={fadeIn}
            onChange={(e) => setFadeIn(e.target.value)}
            className="bg-gray-700 text-white"
          />
          <Input
            type="number"
            placeholder="Stay"
            value={stay}
            onChange={(e) => setStay(e.target.value)}
            className="bg-gray-700 text-white"
          />
          <Input
            type="number"
            placeholder="Fade Out"
            value={fadeOut}
            onChange={(e) => setFadeOut(e.target.value)}
            className="bg-gray-700 text-white"
          />
        </div>
        <Select onValueChange={setTitleColor}>
          <SelectTrigger className="bg-gray-700 text-white">
            <SelectValue placeholder="Title Color" />
          </SelectTrigger>
          <SelectContent className="bg-gray-700 text-white">
            <SelectItem value="white">White</SelectItem>
            <SelectItem value="yellow">Yellow</SelectItem>
            <SelectItem value="red">Red</SelectItem>
            <SelectItem value="green">Green</SelectItem>
            <SelectItem value="blue">Blue</SelectItem>
          </SelectContent>
        </Select>
        <Select onValueChange={setSubtitleColor}>
          <SelectTrigger className="bg-gray-700 text-white">
            <SelectValue placeholder="Subtitle Color" />
          </SelectTrigger>
          <SelectContent className="bg-gray-700 text-white">
            <SelectItem value="white">White</SelectItem>
            <SelectItem value="yellow">Yellow</SelectItem>
            <SelectItem value="red">Red</SelectItem>
            <SelectItem value="green">Green</SelectItem>
            <SelectItem value="blue">Blue</SelectItem>
          </SelectContent>
        </Select>
        <Button onClick={generateCommand} className="w-full bg-green-600 hover:bg-green-700">Generate Command</Button>
        {command && (
          <div className="mt-4 p-4 bg-gray-900 rounded">
            <pre className="whitespace-pre-wrap">{command}</pre>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default TitleGenerator;