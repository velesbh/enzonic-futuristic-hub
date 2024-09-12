import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import PlanWizard from './PlanWizard';
import { plans } from '../data/hostingPlans';

const PlanSelector = () => {
  const [showWizard, setShowWizard] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState(null);
  const navigate = useNavigate();

  const handlePlanSelect = (plan) => {
    setSelectedPlan(plan);
    if (plan.title.toLowerCase().includes('proxy')) {
      navigate('/custom-plan');
    } else if (plan.title.toLowerCase().includes('coal')) {
      navigate('/custom-plan');
    } else {
      // Handle other plans
      console.log('Selected plan:', plan);
    }
  };

  const renderPlanDetails = (plan) => (
    <Card className="bg-gray-800 text-white p-6 rounded-lg shadow-lg h-full">
      <CardHeader>
        <CardTitle className="text-2xl font-bold">{plan.title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-lg mb-4">{plan.description}</p>
        <ul className="list-disc list-inside mb-4">
          {plan.features.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
        <p className="text-2xl font-bold mb-4">{plan.price}</p>
        <Button
          onClick={() => handlePlanSelect(plan)}
          className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded"
        >
          Select Plan
        </Button>
      </CardContent>
    </Card>
  );

  return (
    <div className="mb-8">
      <h3 className="text-2xl font-bold mb-4 text-white">Choose a Plan</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {plans.minecraft.budget.plans.map((plan, index) => (
          <motion.div key={index} whileHover={{ scale: 1.02 }}>
            {renderPlanDetails(plan)}
          </motion.div>
        ))}
      </div>
      <div className="mt-4 text-center">
        <Button
          variant="outline"
          className="text-white border-white bg-gray-800 hover:bg-gray-700 hover:text-gray-200"
          onClick={() => setShowWizard(true)}
        >
          Help me choose a plan
        </Button>
      </div>
      {showWizard && <PlanWizard onClose={() => setShowWizard(false)} />}
    </div>
  );
};

export default PlanSelector;