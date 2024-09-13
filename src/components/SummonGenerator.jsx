import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const SummonGenerator = () => {
  const [entity, setEntity] = useState('');
  const [x, setX] = useState('~');
  const [y, setY] = useState('~');
  const [z, setZ] = useState('~');
  const [nbt, setNbt] = useState('');
  const [command, setCommand] = useState('');

  const generateCommand = () => {
    let summonCommand = `/summon ${entity} ${x} ${y} ${z}`;
    if (nbt) {
      summonCommand += ` ${nbt}`;
    }
    setCommand(summonCommand);
  };

  return (
    <Card className="bg-gray-800 text-white">
      <CardHeader>
        <CardTitle>Summon Generator</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <Select onValueChange={setEntity}>
          <SelectTrigger className="bg-gray-700 text-white">
            <SelectValue placeholder="Select Entity" />
          </SelectTrigger>
          <SelectContent className="bg-gray-700 text-white">
            <SelectItem value="zombie">Zombie</SelectItem>
            <SelectItem value="skeleton">Skeleton</SelectItem>
            <SelectItem value="creeper">Creeper</SelectItem>
            <SelectItem value="villager">Villager</SelectItem>
            <SelectItem value="pig">Pig</SelectItem>
          </SelectContent>
        </Select>
        <div className="grid grid-cols-3 gap-4">
          <Input
            placeholder="X"
            value={x}
            onChange={(e) => setX(e.target.value)}
            className="bg-gray-700 text-white"
          />
          <Input
            placeholder="Y"
            value={y}
            onChange={(e) => setY(e.target.value)}
            className="bg-gray-700 text-white"
          />
          <Input
            placeholder="Z"
            value={z}
            onChange={(e) => setZ(e.target.value)}
            className="bg-gray-700 text-white"
          />
        </div>
        <Input
          placeholder="NBT Data (optional)"
          value={nbt}
          onChange={(e) => setNbt(e.target.value)}
          className="bg-gray-700 text-white"
        />
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

export default SummonGenerator;