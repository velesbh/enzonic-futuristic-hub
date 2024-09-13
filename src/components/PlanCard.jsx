import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { PulsingIcon } from './AnimatedComponents';

const PlanCard = ({ title, description, price, features, isExtreme, icon: Icon }) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    className="h-full"
  >
    <Card className="bg-gray-900 p-6 rounded-lg shadow-lg flex flex-col h-full">
      <CardHeader className="relative z-10">
        <div className="flex items-center mb-4">
          <PulsingIcon icon={Icon} size={8} />
          <CardTitle className="text-xl font-semibold text-green-400 ml-2">{title}</CardTitle>
        </div>
        <p className="text-green-300 mb-4">{description}</p>
        <p className="text-2xl font-bold text-green-400 mb-4">{price}</p>
      </CardHeader>
      <CardContent className="flex-grow">
        <ul className="text-green-300 mb-4 flex-grow">
          {features.map((feature, index) => (
            <li key={index} className="mb-2">• {feature}</li>
          ))}
        </ul>
        {isExtreme && (
          <p className="text-yellow-400 mb-4">This plan will take up to 24H to setup</p>
        )}
        <Button variant="outline" className="w-full mt-auto text-green-400 border-green-400 bg-gray-800 hover:bg-gray-700 hover:text-green-300">
          Select Plan
        </Button>
      </CardContent>
    </Card>
  </motion.div>
);

export default PlanCard;