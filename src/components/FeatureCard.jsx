import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { PulsingIcon } from './AnimatedComponents';

const FeatureCard = ({ title, description, icon: Icon }) => (
  <motion.div
    whileHover={{ scale: 1.05, rotateY: 5 }}
    className="h-full"
  >
    <Card className="bg-gray-900 p-6 rounded-lg shadow-lg flex flex-col items-center border border-green-700 h-full">
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 500, delay: 0.2 }}
      >
        <PulsingIcon icon={Icon} size={16} />
      </motion.div>
      <h3 className="text-xl font-semibold text-green-400 mb-2 mt-4">{title}</h3>
      <p className="text-green-300 text-center">{description}</p>
    </Card>
  </motion.div>
);

export default FeatureCard;