import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';
import { AnimatedBackground, GlowingButton } from '../components/AnimatedComponents';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const EnzonicMods = () => {
  const [file, setFile] = useState(null);
  const [modName, setModName] = useState('');
  const [modDescription, setModDescription] = useState('');

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = () => {
    // Here you would implement the actual upload logic
    console.log('Uploading:', { file, modName, modDescription });
    // Reset form after upload
    setFile(null);
    setModName('');
    setModDescription('');
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white relative overflow-hidden">
      <AnimatedBackground />
      <Header />
      <main className="container mx-auto px-4 py-32 relative z-10">
        <motion.h1
          className="text-5xl font-bold mb-8 text-center text-green-400"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Enzonic Mods
        </motion.h1>

        <Card className="bg-gray-800 mb-8">
          <CardHeader>
            <CardTitle className="text-2xl font-bold">Upload a Mod</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <Input
                type="file"
                onChange={handleFileChange}
                className="bg-gray-700 text-white"
              />
              <Input
                type="text"
                placeholder="Mod Name"
                value={modName}
                onChange={(e) => setModName(e.target.value)}
                className="bg-gray-700 text-white"
              />
              <Input
                type="text"
                placeholder="Mod Description"
                value={modDescription}
                onChange={(e) => setModDescription(e.target.value)}
                className="bg-gray-700 text-white"
              />
              <GlowingButton onClick={handleUpload}>Upload Mod</GlowingButton>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gray-800">
          <CardHeader>
            <CardTitle className="text-2xl font-bold">Available Mods</CardTitle>
          </CardHeader>
          <CardContent>
            <p>No mods available yet. Be the first to upload!</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
};

export default EnzonicMods;