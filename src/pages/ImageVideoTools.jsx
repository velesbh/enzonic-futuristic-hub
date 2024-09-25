import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';
import { AnimatedBackground, GlowingButton } from '../components/AnimatedComponents';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Image, Video } from 'lucide-react';
import AchievementGenerator from '../components/AchievementGenerator';

const ImageVideoTools = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-900 to-indigo-900 text-white relative overflow-hidden">
      <AnimatedBackground />
      <Header />
      <main className="container mx-auto px-4 py-32 relative z-10">
        <motion.h1
          className="text-6xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-purple-600"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Image and Video Tools
        </motion.h1>

        <motion.p
          className="text-xl text-center mb-12 text-gray-300"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Powerful tools for editing and enhancing your images and videos.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <Card className="bg-gray-800">
            <CardHeader>
              <CardTitle className="flex items-center text-2xl font-bold">
                <Image className="w-8 h-8 mr-2 text-pink-400" />
                Image Editing
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">Edit, resize, and enhance your images with our powerful tools.</p>
              <GlowingButton>Start Editing Images</GlowingButton>
            </CardContent>
          </Card>

          <Card className="bg-gray-800">
            <CardHeader>
              <CardTitle className="flex items-center text-2xl font-bold">
                <Video className="w-8 h-8 mr-2 text-purple-400" />
                Video Editing
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">Cut, trim, and add effects to your videos with ease.</p>
              <GlowingButton>Start Editing Videos</GlowingButton>
            </CardContent>
          </Card>
        </div>

        <AchievementGenerator />

        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <h2 className="text-3xl font-bold mb-4 text-pink-400">Coming Soon</h2>
          <p className="text-xl text-gray-300 mb-6">We're working on more amazing features. Stay tuned!</p>
          <GlowingButton>Get Notified</GlowingButton>
        </motion.div>
      </main>
      <Footer />
    </div>
  );
};

export default ImageVideoTools;
