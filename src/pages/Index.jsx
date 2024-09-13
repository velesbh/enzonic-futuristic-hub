import React, { useEffect } from 'react';
import Header from '../components/Header';
import Services from '../components/Services';
import Team from '../components/Team';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { Link } from 'react-router-dom';
import { AnimatedBackground, FloatingElement, GlowingButton, SmoothFadeIn, PulsingIcon, SlideInText, FadeInScale } from '../components/AnimatedComponents';
import { ArrowRight, Server, Cpu, Cloud, Shield, Gamepad } from 'lucide-react';

const Index = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
              Welcome to Enzonic
            </motion.h1>
          </FloatingElement>
          <motion.div 
            className="text-2xl mb-8 h-16 text-gray-300 text-center"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <TypeAnimation
              sequence={[
                'Enzonic Hosting',
                1000,
                'Enzonic Games',
                1000,
                'Enzonic Events',
                1000,
                'Enzonic Translate',
                1000,
                'Enzonic AI',
                1000,
                'Enzonic Web Designer',
                1000,
                'Enzonic Cloud',
                1000,
                'Enzonic VPN',
                1000,
                'Enzonic Productions',
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </motion.div>
          <motion.div 
            className="flex flex-wrap justify-center gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            {[
              { text: 'Explore Hosting', path: '/hosting', icon: Server },
              { text: 'Discover Ro-Mine', path: '/ro-mine', icon: Gamepad },
              { text: 'Latest News', path: '/news', icon: ArrowRight },
              { text: 'MC Tools', path: '/mc-tools', icon: Cpu },
            ].map(({ text, path, icon: Icon }) => (
              <Link key={text} to={path}>
                <GlowingButton className="group flex items-center px-6 py-3 text-lg w-64 justify-center">
                  <Icon className="w-6 h-6 mr-2" />
                  <span>{text}</span>
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
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
              { icon: Cloud, text: 'Cloud Services' },
              { icon: Shield, text: 'Security' },
              { icon: Cpu, text: 'High Performance' },
              { icon: Server, text: 'Reliable Hosting' },
            ].map(({ icon: Icon, text }) => (
              <div key={text} className="text-center flex flex-col items-center">
                <Icon className="w-16 h-16 text-green-400 mb-2" />
                <p className="text-sm text-gray-300">{text}</p>
              </div>
            ))}
          </div>
        </SmoothFadeIn>
      </main>
      <Services />
      <Team />
      <Footer />
    </div>
  );
};

export default Index;