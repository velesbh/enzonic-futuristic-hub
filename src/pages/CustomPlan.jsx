import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { AnimatedBackground, GlowingButton } from '../components/AnimatedComponents';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useMutation } from '@tanstack/react-query';
import { db } from '../lib/db';

const CustomPlan = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    serverType: '',
    ram: '',
    cpu: '',
    budget: '',
    usage: '',
    storage: '',
    email: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const addRequestMutation = useMutation({
    mutationFn: db.addRequest,
    onSuccess: () => {
      setIsSubmitted(true);
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    addRequestMutation.mutate(formData);
  };

  const handleExit = () => {
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-black text-green-400">
      <AnimatedBackground />
      <Header />
      <main className="container mx-auto px-4 py-16 relative z-10">
        <motion.h1
          className="text-5xl font-bold mb-8 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Request Custom Plan
        </motion.h1>

        {!isSubmitted ? (
          <Card className="max-w-2xl mx-auto bg-gray-800">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-center">Custom Plan Request Form</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block mb-2">Server Type</label>
                  <Input
                    type="text"
                    name="serverType"
                    value={formData.serverType}
                    onChange={handleChange}
                    required
                    className="w-full bg-gray-700 text-white"
                  />
                </div>
                <div>
                  <label className="block mb-2">Amount of RAM (GB)</label>
                  <Input
                    type="number"
                    name="ram"
                    value={formData.ram}
                    onChange={handleChange}
                    required
                    className="w-full bg-gray-700 text-white"
                  />
                </div>
                <div>
                  <label className="block mb-2">CPU</label>
                  <Select name="cpu" onValueChange={(value) => handleChange({ target: { name: 'cpu', value } })}>
                    <SelectTrigger className="w-full bg-gray-700 text-white">
                      <SelectValue placeholder="Select CPU" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="budget">Budget</SelectItem>
                      <SelectItem value="normal">Normal</SelectItem>
                      <SelectItem value="extreme">Extreme</SelectItem>
                      <SelectItem value="dedicated">Dedicated</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <label className="block mb-2">Your Budget ($)</label>
                  <Input
                    type="number"
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    required
                    className="w-full bg-gray-700 text-white"
                  />
                </div>
                <div>
                  <label className="block mb-2">What will you use it for?</label>
                  <Textarea
                    name="usage"
                    value={formData.usage}
                    onChange={handleChange}
                    required
                    className="w-full bg-gray-700 text-white"
                  />
                </div>
                <div>
                  <label className="block mb-2">Storage (GB)</label>
                  <Input
                    type="number"
                    name="storage"
                    value={formData.storage}
                    onChange={handleChange}
                    required
                    className="w-full bg-gray-700 text-white"
                  />
                </div>
                <div>
                  <label className="block mb-2">Email</label>
                  <Input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-gray-700 text-white"
                  />
                </div>
                <div className="flex justify-between">
                  <GlowingButton type="submit" className="w-1/2 mr-2">Send Request</GlowingButton>
                  <GlowingButton type="button" onClick={handleExit} className="w-1/2 ml-2">Exit</GlowingButton>
                </div>
              </form>
            </CardContent>
          </Card>
        ) : (
          <Card className="max-w-2xl mx-auto bg-gray-800 text-center">
            <CardContent className="py-8">
              <h2 className="text-2xl font-bold mb-4">Thank you for your request!</h2>
              <p className="mb-4">It might take from 1-48h for someone to respond. Please check your email frequently until you get a reply and a price.</p>
              <p className="text-sm text-yellow-400 mb-4">Disclaimer: The request may take 1-48h to get a reply.</p>
              <GlowingButton onClick={handleExit}>Exit</GlowingButton>
            </CardContent>
          </Card>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default CustomPlan;