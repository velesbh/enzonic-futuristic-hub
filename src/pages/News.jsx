import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { NewspaperIcon, CalendarIcon, UserIcon } from 'lucide-react';
import { AnimatedBackground, FloatingElement, GlowingButton } from '../components/AnimatedComponents';
import AdminLogin from '../components/AdminLogin';
import NewsManager from '../components/NewsManager';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';

const fetchNews = async () => {
  // Simulated API call
  return [
    {
      id: 1,
      title: "Enzonic Launches New Cloud Services",
      date: "March 15, 2024",
      author: "John Doe",
      content: "Enzonic is proud to announce the launch of our new cloud services, offering unparalleled performance and reliability for businesses of all sizes."
    },
    {
      id: 2,
      title: "Upcoming Minecraft Server Event",
      date: "March 20, 2024",
      author: "Jane Smith",
      content: "Join us for an exciting Minecraft server event this weekend! Participate in challenges, win prizes, and explore new custom-built worlds."
    },
    {
      id: 3,
      title: "Enzonic VPN Now Available on Mobile",
      date: "March 25, 2024",
      author: "Mike Johnson",
      content: "We're excited to announce that Enzonic VPN is now available on iOS and Android devices. Protect your privacy on-the-go with our secure and fast VPN service."
    },
  ];
};

const NewsCard = ({ title, date, author, content }) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    className="mb-8"
  >
    <Card className="bg-secondary text-foreground border-primary">
      <CardHeader>
        <CardTitle className="text-2xl font-bold">{title}</CardTitle>
        <CardDescription className="text-muted-foreground">
          <span className="flex items-center"><CalendarIcon className="w-4 h-4 mr-2" />{date}</span>
          <span className="flex items-center mt-1"><UserIcon className="w-4 h-4 mr-2" />{author}</span>
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground">{content}</p>
        <GlowingButton className="mt-4">Read More</GlowingButton>
      </CardContent>
    </Card>
  </motion.div>
);

const News = () => {
  const [isAdmin, setIsAdmin] = useState(false);
  const queryClient = useQueryClient();

  const { data: newsItems, isLoading, isError } = useQuery({
    queryKey: ['news'],
    queryFn: fetchNews,
  });

  const createNewsMutation = useMutation({
    mutationFn: async (newNews) => {
      // Simulated API call
      console.log('Creating news:', newNews);
      return { ...newNews, id: Date.now() };
    },
    onSuccess: () => {
      queryClient.invalidateQueries(['news']);
    },
  });

  const updateNewsMutation = useMutation({
    mutationFn: async (updatedNews) => {
      // Simulated API call
      console.log('Updating news:', updatedNews);
      return updatedNews;
    },
    onSuccess: () => {
      queryClient.invalidateQueries(['news']);
    },
  });

  const deleteNewsMutation = useMutation({
    mutationFn: async (id) => {
      // Simulated API call
      console.log('Deleting news:', id);
    },
    onSuccess: () => {
      queryClient.invalidateQueries(['news']);
    },
  });

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error loading news</div>;

  return (
    <div className="min-h-screen bg-background text-foreground relative overflow-hidden">
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
              className="text-7xl font-bold mb-4 text-primary"
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Enzonic News
            </motion.h1>
          </FloatingElement>
          <motion.div 
            className="text-2xl mb-8 text-primary h-20"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <TypeAnimation
              sequence={[
                'Stay updated with Enzonic',
                1000,
                'Latest news and announcements',
                1000,
                'Exciting updates and events',
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </motion.div>
        </motion.div>
        
        {isAdmin ? (
          <NewsManager
            newsItems={newsItems}
            createNews={createNewsMutation.mutate}
            updateNews={updateNewsMutation.mutate}
            deleteNews={deleteNewsMutation.mutate}
          />
        ) : (
          <motion.section 
            className="mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-4xl font-bold mb-8 text-center text-primary">Latest News</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {newsItems.map((item) => (
                <NewsCard key={item.id} {...item} />
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
          <h2 className="text-3xl font-bold mb-4 text-primary">Subscribe to Our Newsletter</h2>
          <p className="text-muted-foreground mb-6">Stay up to date with the latest news and updates from Enzonic.</p>
          <div className="flex justify-center">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-2 rounded-l-md bg-secondary text-foreground border-2 border-primary focus:outline-none focus:border-primary"
            />
            <GlowingButton className="rounded-l-none">Subscribe</GlowingButton>
          </div>
        </motion.section>

        <AdminLogin setIsAdmin={setIsAdmin} />
      </main>
      <Footer />
    </div>
  );
};

export default News;