import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";

const PlanWizard = ({ onClose, selectedPlan, onOrder }) => {
  const [location, setLocation] = useState('');

  const handleOrder = () => {
    if (!location) {
      alert('Please select a location');
      return;
    }
    onOrder(location);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
    >
      <Card className="bg-gray-800 text-white">
        <CardHeader>
          <CardTitle>Select Server Location</CardTitle>
        </CardHeader>
        <CardContent>
          <RadioGroup onValueChange={setLocation} className="space-y-4 mb-4">
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="europe" id="europe" />
              <Label htmlFor="europe">Europe</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="usa" id="usa" />
              <Label htmlFor="usa">USA</Label>
            </div>
          </RadioGroup>
          <div className="flex justify-between mt-4">
            <Button onClick={onClose} variant="outline">Exit</Button>
            <Button onClick={handleOrder} disabled={!location}>Order Now</Button>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default PlanWizard;
