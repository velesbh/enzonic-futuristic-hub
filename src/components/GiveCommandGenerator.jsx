import React, { useState, useMemo } from 'react';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { minecraftItems } from '../data/minecraft-items';

const GiveCommandGenerator = () => {
  const [item, setItem] = useState('');
  const [amount, setAmount] = useState(1);
  const [data, setData] = useState(0);
  const [giveCommand, setGiveCommand] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredItems = useMemo(() => {
    const lowercasedTerm = searchTerm.toLowerCase();
    return minecraftItems.filter(item => 
      item.name.toLowerCase().includes(lowercasedTerm) ||
      item.id.toLowerCase().includes(lowercasedTerm)
    );
  }, [searchTerm]);

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
            {filteredItems.length > 0 ? (
              filteredItems.map(item => (
                <SelectItem key={item.id} value={item.id}>{item.name}</SelectItem>
              ))
            ) : (
              <SelectItem value="" disabled>No items found</SelectItem>
            )}
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
        <Button onClick={generateCommand} className="w-full bg-green-600 hover:bg-green-700">Generate</Button>
        <div className="mt-4 p-4 bg-gray-900 rounded">
          <p className="font-mono">{giveCommand}</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default GiveCommandGenerator;