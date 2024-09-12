import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import PlanWizard from './PlanWizard';

const PlanSelector = ({ selectedPlan, setSelectedPlan, selectedTier, setSelectedTier }) => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [showWizard, setShowWizard] = useState(false);
  const [showLocationSelector, setShowLocationSelector] = useState(false);
  const [currentPlan, setCurrentPlan] = useState(null);
  const navigate = useNavigate();

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
    setShowWizard(false);
  };

  const handlePlanSelect = (planId) => {
    setSelectedPlan(planId);
    setSelectedTier('budget');
    if (planId === 'minecraft') {
      setShowWizard(false);
    } else {
      setShowWizard(false);
    }
  };

  const handleProxyPlanSelect = (plan) => {
    setCurrentPlan(plan);
    setShowLocationSelector(true);
  };

  const handleLocationSelect = (location) => {
    if (currentPlan === 'proxy') {
      if (location === 'europe') {
        window.location.href = 'https://billing.enzonic.xyz/checkout/config/1';
      } else if (location === 'usa') {
        window.location.href = 'https://billing.enzonic.xyz/checkout/config/2';
      }
    } else if (currentPlan === 'coal') {
      if (location === 'europe') {
        window.location.href = 'https://billing.enzonic.xyz/checkout/config/3';
      } else if (location === 'usa') {
        window.location.href = 'https://billing.enzonic.xyz/checkout/config/4';
      }
    }
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
          <div className="mt-4">
            <Button
              variant="outline"
              className="text-white border-white bg-gray-800 hover:bg-gray-700 hover:text-gray-200"
              onClick={() => setShowWizard(true)}
            >
              Help me choose a plan
            </Button>
          </div>
        </>
      )}

      {showLocationSelector && (
        <div className="mt-8">
          <h3 className="text-2xl font-bold mb-4 text-white">Select Server Location</h3>
          <div className="flex gap-4">
            <Button onClick={() => handleLocationSelect('europe')}>Europe</Button>
            <Button onClick={() => handleLocationSelect('usa')}>USA</Button>
          </div>
        </div>
      )}

      {showWizard && <PlanWizard onClose={() => setShowWizard(false)} />}
    </div>
  );
};

export default PlanSelector;