import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

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
          <Button onClick={convertTicksToSeconds} className="mt-2 bg-green-600 hover:bg-green-700">Convert to Seconds</Button>
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
          <Button onClick={convertSecondsToTicks} className="mt-2 bg-green-600 hover:bg-green-700">Convert to Ticks</Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default TimeConverter;