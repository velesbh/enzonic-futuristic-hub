import React, { useEffect } from 'react';
import Header from '../components/Header';
import Services from '../components/Services';
import Team from '../components/Team';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { Link } from 'react-router-dom';
import { AnimatedBackground, FloatingElement, GlowingButton, SmoothFadeIn, SlideInText, FadeInScale } from '../components/AnimatedComponents';
import { Server, Network, Newspaper, Wrench } from 'lucide-react';
import { useLanguage } from '../utils/languageUtils';
import AdComponent from '../components/AdComponent';

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
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white relative overflow-hidden">
      <AnimatedBackground />
      <Header />
      <main className="container mx-auto px-4 py-24 relative z-10">
        <SmoothFadeIn>
          <FloatingElement>
            <motion.h1 
              className="text-6xl font-bold mb-4 text-green-400 text-center"
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {t('welcome')}
            </motion.h1>
          </FloatingElement>
          <motion.div 
            className="text-2xl mb-8 h-16 text-gray-300 text-center"
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
                <GlowingButton className="px-8 py-4 text-xl w-80 justify-center flex items-center bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105">
                  <span>{text}</span>
                </GlowingButton>
              </Link>
            ))}
          </motion.div>
        </SmoothFadeIn>
        
        <SmoothFadeIn delay={0.4}>
          <div className="text-center mb-16 max-w-2xl mx-auto mt-16">
            <SlideInText>
              <h2 className="text-3xl font-bold text-green-400 mb-4">
                Our Vision
              </h2>
            </SlideInText>
            <FadeInScale>
              <p className="text-lg text-gray-300 leading-relaxed">
                Empowering individuals and businesses with innovative, affordable, and reliable technology solutions.
              </p>
            </FadeInScale>
          </div>
        </SmoothFadeIn>

        <SmoothFadeIn delay={0.6}>
          <div className="flex justify-center space-x-8 mb-16">
            {[
              { icon: Server, text: 'Cloud Services' },
              { icon: Network, text: 'Networking' },
              { icon: Wrench, text: 'Tools' },
              { icon: Server, text: 'Reliable Hosting' },
            ].map(({ icon: Icon, text }) => (
              <div key={text} className="text-center flex flex-col items-center">
                <Icon className="w-20 h-20 text-green-400 mb-2" />
                <p className="text-sm text-gray-300">{text}</p>
              </div>
            ))}
          </div>
        </SmoothFadeIn>

        <SmoothFadeIn delay={0.8}>
          <div className="text-center mb-16 max-w-2xl mx-auto mt-16 bg-gray-800 p-6 rounded-lg">
            <h3 className="text-xl font-bold text-yellow-400 mb-2">Disclaimer</h3>
            <p className="text-gray-300">
              Enzonic.xyz is still a work in progress and will receive updates very frequently. We appreciate your patience and support as we continue to improve our services.
            </p>
          </div>
        </SmoothFadeIn>
      </main>
      <Services />
      <Team />
      <SmoothFadeIn delay={1}>
        <div className="container mx-auto px-4 py-8">
          <AdComponent adSlot="1234567890" />
        </div>
      </SmoothFadeIn>
      <Footer />
    </div>
  );
};

export default Index;