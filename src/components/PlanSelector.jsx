import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

const PlanSelector = ({ selectedPlan, setSelectedPlan, selectedTier, setSelectedTier }) => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const categories = [
    { id: 'games', name: 'Game Servers', plans: ['minecraft', 'rust', 'csgo', 'garrysMod', 'arkSurvivalEvolved'] },
    { id: 'web', name: 'Web Services', plans: ['website', 'discord'] },
    { id: 'voice', name: 'Voice Servers', plans: ['voice'] },
    { id: 'vps', name: 'VPS', plans: ['vps'] },
  ];

  const planNames = {
    minecraft: 'Minecraft',
    rust: 'Rust',
    discord: 'Discord Bot',
    website: 'Website',
    voice: 'Voice Server',
    vps: 'VPS',
    csgo: 'CS:GO',
    garrysMod: "Garry's Mod",
    arkSurvivalEvolved: 'ARK: Survival Evolved',
  };

  const tiers = ['budget', 'normal', 'extreme'];

  const handleCategorySelect = (categoryId) => {
    setSelectedCategory(categoryId);
    setSelectedPlan(null);
    setSelectedTier('budget');
  };

  const handlePlanSelect = (planId) => {
    setSelectedPlan(planId);
    setSelectedTier('budget');
  };

  return (
    <div className="mb-8">
      <h3 className="text-2xl font-bold mb-4 text-white">Select a Category</h3>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        {categories.map((category) => (
          <motion.div key={category.id} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              variant={selectedCategory === category.id ? "default" : "outline"}
              className="w-full text-white border-white bg-gray-800 hover:bg-gray-700 hover:text-gray-200"
              onClick={() => handleCategorySelect(category.id)}
            >
              {category.name}
            </Button>
          </motion.div>
        ))}
      </div>

      {selectedCategory && (
        <>
          <h3 className="text-2xl font-bold mb-4 text-white">Select a Plan</h3>
          <div className="flex flex-wrap gap-4 mb-8">
            {categories.find(c => c.id === selectedCategory).plans.map((planId) => (
              <motion.div key={planId} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  variant={selectedPlan === planId ? "default" : "outline"}
                  className="text-white border-white bg-gray-800 hover:bg-gray-700 hover:text-gray-200"
                  onClick={() => handlePlanSelect(planId)}
                >
                  {planNames[planId]}
                </Button>
              </motion.div>
            ))}
          </div>
        </>
      )}

      {selectedPlan === 'minecraft' && (
        <>
          <h3 className="text-2xl font-bold mb-4 text-white">Select a Tier</h3>
          <div className="flex gap-4">
            {tiers.map((tier) => (
              <motion.div key={tier} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  variant={selectedTier === tier ? "default" : "outline"}
                  className="text-white border-white bg-gray-800 hover:bg-gray-700 hover:text-gray-200"
                  onClick={() => setSelectedTier(tier)}
                >
                  {tier.charAt(0).toUpperCase() + tier.slice(1)}
                </Button>
              </motion.div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default PlanSelector;