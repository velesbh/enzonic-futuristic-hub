import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { NewspaperIcon, CalendarIcon, UserIcon, ArrowRightIcon } from 'lucide-react';
import { AnimatedBackground, FloatingElement, GlowingButton } from '../components/AnimatedComponents';
import NewsManager from '../components/NewsManager';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { db } from '../lib/db';

const NewsCard = ({ title, date, author, content, onViewMore }) => (
  <motion.div whileHover={{ scale: 1.03 }} className="mb-8">
    <Card className="bg-gradient-to-br from-green-900 to-green-700 text-white border-green-500 overflow-hidden">
      <CardHeader className="bg-green-800 bg-opacity-50">
        <CardTitle className="text-2xl font-bold text-green-300">{title}</CardTitle>
        <CardDescription className="text-green-200">
          <span className="flex items-center"><CalendarIcon className="w-4 h-4 mr-2" />{date}</span>
          <span className="flex items-center mt-1"><UserIcon className="w-4 h-4 mr-2" />{author}</span>
        </CardDescription>
      </CardHeader>
      <CardContent className="mt-4">
        <p className="text-gray-300 mb-4">{content.substring(0, 150)}...</p>
        <GlowingButton className="group" onClick={onViewMore}>
          Read More
          <ArrowRightIcon className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
        </GlowingButton>
      </CardContent>
    </Card>
  </motion.div>
);

const News = () => {
  const [showAdminPanel, setShowAdminPanel] = useState(false);
  const [selectedNews, setSelectedNews] = useState(null);
  const queryClient = useQueryClient();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { data: newsItems, isLoading, isError } = useQuery({
    queryKey: ['news'],
    queryFn: db.getNews,
  });

  const createNewsMutation = useMutation({
    mutationFn: db.addNews,
    onSuccess: () => {
      queryClient.invalidateQueries(['news']);
    },
  });

  const updateNewsMutation = useMutation({
    mutationFn: db.updateNews,
    onSuccess: () => {
      queryClient.invalidateQueries(['news']);
    },
  });

  const deleteNewsMutation = useMutation({
    mutationFn: db.deleteNews,
    onSuccess: () => {
      queryClient.invalidateQueries(['news']);
    },
  });

  const toggleAdminPanel = () => {
    setShowAdminPanel(!showAdminPanel);
  };

  const handleViewMore = (news) => {
    setSelectedNews(news);
  };

  if (isLoading) return <div className="text-center text-2xl text-white">Loading...</div>;
  if (isError) return <div className="text-center text-2xl text-red-500">Error loading news</div>;

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-900 to-black text-white relative overflow-hidden">
      <AnimatedBackground />
      <Header />
      <main className="container mx-auto px-4 py-32 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <FloatingElement>
            <motion.h1 
              className="text-7xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-green-600"
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Enzonic News
            </motion.h1>
          </FloatingElement>
          <motion.div 
            className="text-3xl mb-8 text-gray-300 h-20"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <TypeAnimation
              sequence={[
                'Stay Updated with Enzonic',
                1000,
                'Latest News and Announcements',
                1000,
                'Exciting Updates and Events',
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </motion.div>
        </motion.div>
        
        {showAdminPanel ? (
          <NewsManager
            newsItems={newsItems}
            createNews={createNewsMutation.mutate}
            updateNews={updateNewsMutation.mutate}
            deleteNews={deleteNewsMutation.mutate}
            onClose={toggleAdminPanel}
          />
        ) : selectedNews ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Card className="bg-gradient-to-br from-green-900 to-green-700 text-white border-green-500">
              <CardHeader className="bg-green-800 bg-opacity-50">
                <CardTitle className="text-3xl font-bold text-green-300">{selectedNews.title}</CardTitle>
                <CardDescription className="text-green-200">
                  <span className="flex items-center"><CalendarIcon className="w-4 h-4 mr-2" />{selectedNews.date}</span>
                  <span className="flex items-center mt-1"><UserIcon className="w-4 h-4 mr-2" />{selectedNews.author}</span>
                </CardDescription>
              </CardHeader>
              <CardContent className="mt-4">
                <p className="text-gray-300 mb-4">{selectedNews.content}</p>
                <GlowingButton onClick={() => setSelectedNews(null)}>Back to News</GlowingButton>
              </CardContent>
            </Card>
          </motion.div>
        ) : (
          <motion.section 
            className="mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-4xl font-bold mb-8 text-center text-green-400">Latest News</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {newsItems.map((item) => (
                <NewsCard key={item.id} {...item} onViewMore={() => handleViewMore(item)} />
              ))}
            </div>
          </motion.section>
        )}

        <motion.section 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h2 className="text-3xl font-bold mb-4 text-green-400">Stay Informed</h2>
          <p className="text-xl text-gray-300 mb-6">Subscribe to our newsletter for the latest updates and exclusive offers.</p>
          <div className="flex justify-center">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-2 rounded-l-md bg-green-900 text-white border-2 border-green-500 focus:outline-none focus:border-green-400 w-64"
            />
            <GlowingButton className="rounded-l-none">Subscribe</GlowingButton>
          </div>
        </motion.section>
      </main>
      <Footer onAdminClick={toggleAdminPanel} />
    </div>
  );
};

export default News;