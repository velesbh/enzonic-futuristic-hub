import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const questions = [
  {
    question: "How many players do you expect on your server?",
    options: ["1-5", "6-20", "21-50", "50+"]
  },
  {
    question: "What type of Minecraft server are you planning to run?",
    options: ["Vanilla", "Modded", "Plugin-based", "Custom"]
  },
  {
    question: "How much RAM do you think you'll need?",
    options: ["1-2GB", "3-4GB", "5-8GB", "8GB+"]
  }
];

const PlanWizard = ({ onClose }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);

  const handleAnswer = (answer) => {
    const newAnswers = [...answers, answer];
    setAnswers(newAnswers);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      // Process answers and suggest a plan
      const suggestedPlan = getSuggestedPlan(newAnswers);
      alert(`Based on your answers, we recommend the ${suggestedPlan} plan.`);
      onClose();
    }
  };

  const getSuggestedPlan = (answers) => {
    const [players, serverType, ram] = answers;
    
    if (players === "50+" || serverType === "Custom" || ram === "8GB+") {
      return "Extreme";
    } else if (players === "21-50" || serverType === "Modded" || ram === "5-8GB") {
      return "Normal";
    } else {
      return "Budget";
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
    >
      <Card className="bg-gray-800 text-white">
        <CardHeader>
          <CardTitle>Plan Wizard</CardTitle>
        </CardHeader>
        <CardContent>
          <h3 className="text-xl mb-4">{questions[currentQuestion].question}</h3>
          <div className="space-y-2">
            {questions[currentQuestion].options.map((option, index) => (
              <Button
                key={index}
                onClick={() => handleAnswer(option)}
                className="w-full text-left justify-start"
              >
                {option}
              </Button>
            ))}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default PlanWizard;