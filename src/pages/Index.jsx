import React, { useEffect } from 'react';
import Header from '../components/Header';
import Services from '../components/Services';
import Team from '../components/Team';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Server, Network, Newspaper, Wrench } from 'lucide-react';
import { useLanguage } from '../utils/languageUtils';

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
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main className="container mx-auto px-4 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.h1 
            className="text-6xl font-bold mb-4 text-primary"
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {t('welcome')}
          </motion.h1>
          <motion.div 
            className="text-2xl mb-8 h-16 text-muted-foreground"
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
              { text: t('explore') + ' Hosting', path: '/hosting' },
              { text: t('discover') + ' Enzonic Network', path: '/enzonic-network' },
              { text: t('latest'), path: '/news' },
              { text: t('mcTools'), path: '/mc-tools' },
            ].map(({ text, path }) => (
              <Link key={text} to={path}>
                <Button 
                  variant="default"
                  size="lg"
                  className="px-8 py-6 text-xl transition-all duration-300 transform hover:scale-105"
                >
                  {text}
                </Button>
              </Link>
            ))}
          </motion.div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-16"
        >
          <Card className="bg-card text-card-foreground">
            <CardContent className="p-8">
              <h2 className="text-3xl font-bold text-primary mb-4">Our Vision</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Empowering individuals and businesses with innovative, affordable, and reliable technology solutions.
              </p>
            </CardContent>
          </Card>
        </motion.div>

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
          ].map(({ icon: Icon, text }) => (
            <Card key={text} className="bg-card text-card-foreground">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <Icon className="w-16 h-16 text-primary mb-4" />
                <p className="text-lg font-semibold">{text}</p>
              </CardContent>
            </Card>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mb-16"
        >
          <Card className="bg-card text-card-foreground">
            <CardContent className="p-8">
              <h3 className="text-xl font-bold text-primary mb-2">Disclaimer</h3>
              <p className="text-muted-foreground">
                Enzonic.xyz is still a work in progress and will receive updates very frequently. We appreciate your patience and support as we continue to improve our services.
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </main>
      <Services />
      <Team />
      <Footer />
    </div>
  );
};

export default Index;