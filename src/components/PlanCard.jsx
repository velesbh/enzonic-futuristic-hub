import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { PulsingIcon } from './AnimatedComponents';
import { Zap } from 'lucide-react';
import PlanWizard from './PlanWizard';

const PlanCard = ({ title, price, features, description, icon: Icon }) => {
  const [showWizard, setShowWizard] = useState(false);

  const handleOrder = (location) => {
    const planLinks = {
      'Minecraft Proxy Plan': 'https://billing.enzonic.xyz/checkout/config/1',
      'Minecraft Dirt Plan': 'https://billing.enzonic.xyz/checkout/config/2',
      'Minecraft Iron Plan': 'https://billing.enzonic.xyz/checkout/config/3',
      'Minecraft Copper Plan': 'https://billing.enzonic.xyz/checkout/config/4',
      'Minecraft Gold Plan': 'https://billing.enzonic.xyz/checkout/config/5',
      'Minecraft Diamond Plan': 'https://billing.enzonic.xyz/checkout/config/6',
    };

    if (location === 'europe') {
      window.location.href = planLinks[title];
    } else {
      alert('USA location is not available at the moment.');
    }
  };

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <Card className="bg-gray-800 border-2 border-gray-700 hover:border-green-400 transition-all h-full">
        <CardHeader>
          <PulsingIcon icon={Icon} size={12} />
          <CardTitle className="text-2xl font-bold text-green-400">{title}</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-4xl font-bold text-white mb-6">${price}<span className="text-lg text-gray-400">/month</span></p>
          <ul className="space-y-2 mb-6">
            {features.map((feature, index) => (
              <li key={index} className="flex items-center text-gray-300">
                <Zap className="w-5 h-5 text-green-400 mr-2" />
                {feature}
              </li>
            ))}
          </ul>
          <p className="text-sm text-gray-300 mb-4">{description}</p>
          <Button className="w-full bg-green-500 hover:bg-green-600 text-black font-bold" onClick={() => setShowWizard(true)}>Order Now</Button>
        </CardContent>
        {showWizard && (
          <PlanWizard
            onClose={() => setShowWizard(false)}
            selectedPlan={title}
            onOrder={handleOrder}
          />
        )}
      </Card>
    </motion.div>
  );
};

export default PlanCard;
