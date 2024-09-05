import React from 'react';
import { Button } from '@/components/ui/button';

const PlanSelector = ({ selectedPlan, setSelectedPlan, selectedTier, setSelectedTier }) => {
  const plans = [
    { id: 'minecraft', name: 'Minecraft' },
    { id: 'rust', name: 'Rust' },
    { id: 'discord', name: 'Discord' },
    { id: 'website', name: 'Website' },
    { id: 'voice', name: 'Voice' },
    { id: 'vps', name: 'VPS' },
    { id: 'insurgency', name: 'Insurgency' },
    { id: 'csgo', name: 'CS:GO' },
    { id: 'sourceEngine', name: 'Source Engine' },
    { id: 'teamFortress2', name: 'Team Fortress 2' },
    { id: 'garrysMod', name: "Garry's Mod" },
    { id: 'arkSurvivalEvolved', name: 'ARK: Survival Evolved' },
  ];

  const tiers = ['budget', 'normal', 'extreme'];

  return (
    <div className="mb-8">
      <div className="flex flex-wrap justify-center gap-2 mb-4">
        {plans.map((plan) => (
          <Button
            key={plan.id}
            variant={selectedPlan === plan.id ? "default" : "outline"}
            className="text-white border-white bg-gray-800 hover:bg-gray-700 hover:text-gray-200"
            onClick={() => {
              setSelectedPlan(plan.id);
              setSelectedTier('budget');
            }}
          >
            {plan.name}
          </Button>
        ))}
      </div>
      {selectedPlan === 'minecraft' && (
        <div className="flex justify-center gap-2">
          {tiers.map((tier) => (
            <Button
              key={tier}
              variant={selectedTier === tier ? "default" : "outline"}
              className="text-white border-white bg-gray-800 hover:bg-gray-700 hover:text-gray-200"
              onClick={() => setSelectedTier(tier)}
            >
              {tier.charAt(0).toUpperCase() + tier.slice(1)}
            </Button>
          ))}
        </div>
      )}
    </div>
  );
};

export default PlanSelector;