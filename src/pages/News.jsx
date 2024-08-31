import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { motion, useAnimation } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { TypeAnimation } from 'react-type-animation';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { NewspaperIcon, CalendarIcon, UserIcon } from 'lucide-react';

const AnimatedBackground = () => {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden">
      <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
        <defs>
          <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{ stopColor: '#0a2f1f', stopOpacity: 1 }} />
            <stop offset="50%" style={{ stopColor: '#1a5f3f', stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: '#2a8f5f', stopOpacity: 1 }} />
          </linearGradient>
        </defs>
        <rect width="100%" height="100%" fill="url(#grad1)" />
        {[...Array(50)].map((_, i) => (
          <motion.circle
            key={i}
            cx={`${Math.random() * 100}%`}
            cy={`${Math.random() * 100}%`}
            r={`${Math.random() * 2 + 0.5}%`}
            fill={`rgba(0, ${Math.random() * 155 + 100}, ${Math.random() * 100}, 0.3)`}
            animate={{
              opacity: [0.2, 0.5, 0.2],
              scale: [0.8, 1.2, 0.8],
              x: ['-10%', '10%', '-10%'],
              y: ['-10%', '10%', '-10%'],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              repeatType: 'reverse',
            }}
          />
        ))}
      </svg>
    </div>
  );
};

const FloatingElement = ({ children }) => {
  return (
    <motion.div
      animate={{
        y: [0, -10, 0],
        rotate: [-1, 1, -1],
      }}
      transition={{
        duration: 5,
        repeat: Infinity,
        repeatType: 'reverse',
      }}
    >
      {children}
    </motion.div>
  );
};

const NewsCard = ({ title, date, author, excerpt }) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    className="mb-8"
  >
    <Card className="bg-gray-800 text-white">
      <CardHeader>
        <CardTitle className="text-2xl font-bold">{title}</CardTitle>
        <CardDescription className="text-gray-400">
          <span className="flex items-center"><CalendarIcon className="w-4 h-4 mr-2" />{date}</span>
          <span className="flex items-center mt-1"><UserIcon className="w-4 h-4 mr-2" />{author}</span>
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-gray-300">{excerpt}</p>
        <Button variant="outline" className="mt-4 text-white border-green-500 bg-gradient-to-r from-green-600 to-green-400 hover:from-green-500 hover:to-green-300 transition-all duration-300 ease-in-out transform hover:shadow-lg hover:shadow-green-500/30">
          Read More
        </Button>
      </CardContent>
    </Card>
  </motion.div>
);

const News = () => {
  const controls = useAnimation();
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    controls.start(i => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1 },
    }));

    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [controls]);

  const newsItems = [
    {
      title: "Enzonic Launches New Cloud Services",
      date: "March 15, 2024",
      author: "John Doe",
      excerpt: "Enzonic is proud to announce the launch of our new cloud services, offering unparalleled performance and reliability for businesses of all sizes."
    },
    {
      title: "Upcoming Minecraft Server Event",
      date: "March 20, 2024",
      author: "Jane Smith",
      excerpt: "Join us for an exciting Minecraft server event this weekend! Participate in challenges, win prizes, and explore new custom-built worlds."
    },
    {
      title: "Enzonic VPN Now Available on Mobile",
      date: "March 25, 2024",
      author: "Mike Johnson",
      excerpt: "We're excited to announce that Enzonic VPN is now available on iOS and Android devices. Protect your privacy on-the-go with our secure and fast VPN service."
    },
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white relative overflow-hidden">
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
              className="text-7xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-green-500 to-green-600"
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Enzonic News
            </motion.h1>
          </FloatingElement>
          <motion.div 
            className="text-2xl mb-8 text-green-300 h-20"
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
        
        <section className="mb-16">
          <h2 className="text-4xl font-bold mb-8 text-center text-white">Latest News</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {newsItems.map((item, index) => (
              <NewsCard key={index} {...item} />
            ))}
          </div>
        </section>

        <section className="text-center">
          <h2 className="text-3xl font-bold mb-4 text-white">Subscribe to Our Newsletter</h2>
          <p className="text-gray-300 mb-6">Stay up to date with the latest news and updates from Enzonic.</p>
          <div className="flex justify-center">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-2 rounded-l-md bg-gray-800 text-white border-2 border-green-500 focus:outline-none focus:border-green-400"
            />
            <Button className="rounded-r-md bg-green-500 hover:bg-green-600 text-white">
              Subscribe
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default News;