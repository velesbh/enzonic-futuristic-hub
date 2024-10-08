import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Server, Network, Newspaper, Wrench, ArrowRight } from 'lucide-react';
import { useLanguage } from '../utils/languageUtils';
import Header from '../components/Header';
import Services from '../components/Services';
import Team from '../components/Team';
import Footer from '../components/Footer';
import { AnimatedBackground, FloatingElement, GlowingButton } from '../components/AnimatedComponents';

const Index = () => {
  const { t } = useLanguage();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const services = [
    'Enzonic Hosting',
    'Enzonic Games',
    'Enzonic Events',
    'Enzonic Translate',
    'Enzonic AI',
    'Enzonic Web Designer',
    'Enzonic Cloud',
    'Enzonic VPN',
    'Enzonic Productions',
    'Enzonic Network',
    'Enzonic News',
    'Enzonic MC Tools',
    'Enzonic Meet',
  ];

  return (
    <div className="min-h-screen bg-background text-foreground relative overflow-hidden">
      <AnimatedBackground />
      <Header />
      <main className="container mx-auto px-4 py-24 relative z-10">
        <HeroSection services={services} t={t} />
        <VisionSection />
        <FeaturesSection />
        <DisclaimerSection />
      </main>
      <Services />
      <Team />
      <Footer />
    </div>
  );
};

const HeroSection = ({ services, t }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    className="text-center mb-16"
  >
    <FloatingElement>
      <motion.h1 
        className="text-7xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-gray-200 to-gray-400"
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {t('welcome')}
      </motion.h1>
    </FloatingElement>
    <motion.div 
      className="text-3xl mb-8 h-20 text-gray-300"
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.4 }}
    >
      <TypeAnimation
        sequence={services.map(service => [service, 1000]).flat()}
        wrapper="span"
        speed={50}
        repeat={Infinity}
      />
    </motion.div>
    <motion.div 
      className="flex flex-wrap justify-center gap-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.6 }}
    >
      {[
        { text: t('explore') + ' Hosting', path: '/hosting', icon: Server },
        { text: t('discover') + ' Enzonic Network', path: '/enzonic-network', icon: Network },
        { text: t('latest'), path: '/news', icon: Newspaper },
        { text: t('mcTools'), path: '/mc-tools', icon: Wrench },
      ].map(({ text, path, icon: Icon }) => (
        <Link key={text} to={path}>
          <GlowingButton className="group">
            {text}
            <Icon className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </GlowingButton>
        </Link>
      ))}
    </motion.div>
  </motion.div>
);

const VisionSection = () => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, delay: 0.4 }}
    className="mb-16"
  >
    <Card className="bg-gradient-to-br from-gray-800 to-gray-900 border-gray-700">
      <CardContent className="p-8">
        <h2 className="text-4xl font-bold text-gray-200 mb-4">Our Vision</h2>
        <p className="text-xl text-gray-300 leading-relaxed">
          Empowering individuals and businesses with innovative, affordable, and reliable technology solutions that inspire creativity and drive success.
        </p>
      </CardContent>
    </Card>
  </motion.div>
);

const FeatureCard = ({ icon: Icon, text }) => (
  <Card className="bg-gradient-to-br from-gray-800 to-gray-900 border-gray-700 transform transition-all duration-300 hover:scale-105">
    <CardContent className="p-6 flex flex-col items-center text-center">
      <Icon className="w-16 h-16 text-gray-300 mb-4" />
      <p className="text-lg font-semibold text-gray-200">{text}</p>
    </CardContent>
  </Card>
);

const FeaturesSection = () => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, delay: 0.6 }}
    className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16"
  >
    {[
      { icon: Server, text: 'Cloud Services' },
      { icon: Network, text: 'Networking' },
      { icon: Wrench, text: 'Tools' },
      { icon: Server, text: 'Reliable Hosting' },
    ].map((feature, index) => (
      <FeatureCard key={index} {...feature} />
    ))}
  </motion.div>
);

const DisclaimerSection = () => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, delay: 0.8 }}
    className="mb-16"
  >
    <Card className="bg-gradient-to-br from-gray-800 to-gray-900 border-gray-700">
      <CardContent className="p-8">
        <h3 className="text-2xl font-bold text-gray-200 mb-2">Disclaimer</h3>
        <p className="text-gray-300">
          Enzonic.xyz is continuously evolving to bring you the best experience. We appreciate your patience and support as we work on exciting updates and improvements.
        </p>
      </CardContent>
    </Card>
  </motion.div>
);

export default Index;